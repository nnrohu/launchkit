import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
});

export const PLANS = {
  free: {
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    priceId: null,
    features: [
      "1 project",
      "Basic analytics",
      "Community support",
      "1GB storage",
    ],
  },
  pro: {
    name: "Pro",
    description: "For growing businesses",
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom domain",
      "API access",
    ],
  },
  business: {
    name: "Business",
    description: "For teams and enterprises",
    price: 99,
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID!,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "SSO authentication",
      "100GB storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
} as const;

export type PlanType = keyof typeof PLANS;
