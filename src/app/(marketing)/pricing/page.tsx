import type { Metadata } from "next";
import { PricingTable } from "@/components/landing/pricing-table";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for LaunchKit. Start free and upgrade as you grow.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Start building for free. Upgrade when you&apos;re ready to scale. No
          hidden fees, no surprises.
        </p>
      </section>
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  );
}
