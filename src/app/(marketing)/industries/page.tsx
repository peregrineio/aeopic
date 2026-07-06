import type { Metadata } from "next";
import { IndustriesIndexClient } from "@/components/industries/industries-index-client";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Industries We Serve | Aeopic",
  description:
    "Custom software solutions tailored for your industry. HVAC, plumbing, contractors, medical, restaurants, law offices, oil & gas, manufacturing, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesIndexClient />

      <CTASection
        headline="Don't See Your Industry?"
        subheadline="We build custom solutions for businesses of all types. Let's talk about what you need."
        ctaText="Start the Conversation"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
