import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import type Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const plan = session.metadata?.plan;

        if (userId && plan) {
          const [existing] = await db
            .select()
            .from(subscriptions)
            .where(eq(subscriptions.userId, userId))
            .limit(1);

          if (existing) {
            await db
              .update(subscriptions)
              .set({
                stripeSubscriptionId: session.subscription as string,
                stripeCustomerId: session.customer as string,
                plan,
                status: "active",
                updatedAt: new Date(),
              })
              .where(eq(subscriptions.userId, userId));
          } else {
            await db.insert(subscriptions).values({
              id: crypto.randomUUID(),
              userId,
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
              plan,
              status: "active",
            });
          }
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as any).subscription as string;

        if (subscriptionId) {
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          const subAny = sub as any;
          const [existing] = await db
            .select()
            .from(subscriptions)
            .where(eq(subscriptions.stripeSubscriptionId, subscriptionId))
            .limit(1);

          if (existing) {
            await db
              .update(subscriptions)
              .set({
                status: "active",
                currentPeriodStart: new Date(subAny.current_period_start * 1000),
                currentPeriodEnd: new Date(subAny.current_period_end * 1000),
                updatedAt: new Date(),
              })
              .where(eq(subscriptions.stripeSubscriptionId, subscriptionId));
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as any;
        const [existing] = await db
          .select()
          .from(subscriptions)
          .where(eq(subscriptions.stripeSubscriptionId, sub.id))
          .limit(1);

        if (existing) {
          await db
            .update(subscriptions)
            .set({
              status: sub.status === "active" ? "active" : "inactive",
              cancelAtPeriodEnd: sub.cancel_at_period_end,
              currentPeriodStart: new Date(sub.current_period_start * 1000),
              currentPeriodEnd: new Date(sub.current_period_end * 1000),
              updatedAt: new Date(),
            })
            .where(eq(subscriptions.stripeSubscriptionId, sub.id));
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const [existing] = await db
          .select()
          .from(subscriptions)
          .where(eq(subscriptions.stripeSubscriptionId, sub.id))
          .limit(1);

        if (existing) {
          await db
            .update(subscriptions)
            .set({
              plan: "free",
              status: "canceled",
              stripeSubscriptionId: null,
              cancelAtPeriodEnd: false,
              updatedAt: new Date(),
            })
            .where(eq(subscriptions.stripeSubscriptionId, sub.id));
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
