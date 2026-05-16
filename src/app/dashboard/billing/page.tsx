"use client";

import { useState, useEffect } from "react";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PlanBadge } from "@/components/dashboard/plan-badge";
import { PLANS, type PlanType } from "@/lib/stripe";
import { Check, CreditCard, ExternalLink, Loader2 } from "lucide-react";

const { useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export default function BillingPage() {
  const { data: session } = useSession();
  const [currentPlan, setCurrentPlan] = useState<PlanType>("free");
  const [isUpgrading, setIsUpgrading] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/subscription")
      .then((res) => res.json())
      .then((data) => setCurrentPlan(data.plan || "free"))
      .catch(() => setCurrentPlan("free"));
  }, []);

  const handleUpgrade = async (plan: PlanType) => {
    if (plan === "free" || plan === currentPlan) return;
    setIsUpgrading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to create checkout session.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsUpgrading(null);
    }
  };

  const handleManageSubscription = async () => {
    try {
      window.location.href = "/api/stripe/portal";
    } catch {
      toast.error("Failed to open billing portal.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            You are currently on the{" "}
            <PlanBadge plan={currentPlan} className="ml-1" /> plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">
                ${PLANS[currentPlan].price}
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {PLANS[currentPlan].description}
              </p>
            </div>
            <Button variant="outline" onClick={handleManageSubscription}>
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Subscription
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {(Object.entries(PLANS) as [PlanType, (typeof PLANS)[PlanType]][]).map(
            ([key, plan]) => {
              const isCurrent = key === currentPlan;
              const isDowngrade =
                Object.keys(PLANS).indexOf(key) <
                Object.keys(PLANS).indexOf(currentPlan);

              return (
                <Card
                  key={key}
                  className={isCurrent ? "border-primary" : ""}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{plan.name}</CardTitle>
                      {isCurrent && <Badge>Current</Badge>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-3xl font-bold">
                      ${plan.price}
                      <span className="text-sm font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <Separator />
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={isCurrent ? "outline" : "default"}
                      disabled={
                        isCurrent ||
                        isDowngrade ||
                        isUpgrading === key
                      }
                      onClick={() => handleUpgrade(key)}
                    >
                      {isUpgrading === key && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {isCurrent
                        ? "Current Plan"
                        : isDowngrade
                        ? "Downgrade"
                        : `Upgrade to ${plan.name}`}
                    </Button>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
