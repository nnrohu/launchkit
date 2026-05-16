import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-card to-primary/5 px-6 py-16 text-center sm:px-12">
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl" />

        <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to launch your SaaS?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-muted-foreground leading-relaxed">
          Join thousands of developers who ship faster with LaunchKit. Start
          building today — no credit card required.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/register" />}>
            Get Started Free
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/pricing" />}>
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
