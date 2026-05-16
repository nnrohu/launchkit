import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and experiments",
    features: [
      "1 project",
      "Basic authentication",
      "Community support",
      "1GB storage",
      "Basic analytics",
    ],
    cta: "Get Started",
    href: "/register",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing businesses and serious builders",
    features: [
      "Unlimited projects",
      "Google & GitHub OAuth",
      "Stripe payments",
      "10GB storage",
      "Priority support",
      "Custom domain",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/register?plan=pro",
    popular: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "For teams and scaling enterprises",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "SSO authentication",
      "100GB storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Multi-tenant orgs",
    ],
    cta: "Contact Sales",
    href: "/register?plan=business",
    popular: false,
  },
];

export function PricingTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Start free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col border-border/60 ${
              plan.popular
                ? "border-primary/50 shadow-lg shadow-primary/5 ring-1 ring-primary/20"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="mt-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                render={<Link href={plan.href} />}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
