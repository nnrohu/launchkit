import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { PricingTable } from "@/components/landing/pricing-table";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  );
}
