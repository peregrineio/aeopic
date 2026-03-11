import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | Aeopic",
  description:
    "Transparent pricing with no hidden fees. Project-based, monthly retainer, or full partnership options.",
};

const pricingTiers = [
  {
    name: "Project-Based",
    tag: "One-Time Build",
    price: "Custom Quote",
    description: "Fixed scope, fixed price. Best for one-time platform builds.",
    features: [
      "Complete platform build",
      "Source code ownership",
      "Documentation",
      "30 days post-launch support",
    ],
    cta: "Get a Quote",
    featured: false,
  },
  {
    name: "Monthly Retainer",
    tag: "Ongoing Partnership",
    price: "Custom/Month",
    description:
      "Ongoing development, marketing, and support. Best for growing businesses.",
    features: [
      "Everything in Project-Based",
      "Ongoing development hours",
      "Marketing services",
      "Priority support",
      "Monthly strategy calls",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Full Partnership",
    tag: "Dedicated Team",
    price: "Custom Quote",
    description:
      "Dedicated team, priority everything, strategic planning. Best for scaling fast.",
    features: [
      "Everything in Retainer",
      "Dedicated team allocation",
      "Weekly strategy sessions",
      "Unlimited support",
      "Custom integrations",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

const alwaysIncluded = [
  "100% source code ownership",
  "Modern, maintained tech stack",
  "Responsive support",
  "Complete documentation",
  "Deployment & hosting guidance",
  "Security best practices",
  "Performance optimization",
  "Bug fixes included",
];

const faqs = [
  {
    question: "How do I know which model is right for me?",
    answer:
      "It depends on your needs. One-time projects work well for specific builds. Retainers are ideal if you need ongoing development and marketing. We'll help you figure out what makes sense during our initial conversation.",
  },
  {
    question: "What happens if the scope changes mid-project?",
    answer:
      "We handle scope changes transparently. If you want to add features, we'll quote the additional work before starting. No surprises.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Our quotes include everything discussed. Third-party costs (hosting, domains, integrations) are always disclosed upfront.",
  },
  {
    question: "What's your refund/cancellation policy?",
    answer:
      "For retainers, you can cancel anytime with 30 days notice. For projects, we work in milestones — you only pay for completed work.",
  },
  {
    question: "How does your pricing compare to agencies?",
    answer:
      "Traditional agencies often charge $50-150k+ for comparable work. We deliver the same quality at a fraction of the cost by staying lean and focused.",
  },
];

export default function PricingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Investment"
        headline="Transparent Pricing"
        subheadline="No hidden fees. No surprises. Clear investment for clear results."
      />

      {/* Pricing Tiers */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`premium-card p-8 relative bg-white ${
                  tier.featured
                    ? "border-2 border-transparent bg-gradient-to-br from-primary/5 to-primary/10 lg:scale-105 shadow-xl shadow-primary/10"
                    : "border border-border hover:border-primary/30 transition-colors"
                }`}
                style={tier.featured ? {
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                } : undefined}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-semibold rounded-full shadow-md shadow-primary/20">
                    Most Popular
                  </span>
                )}

                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  tier.featured ? 'bg-primary/10 text-primary' : 'bg-accent'
                }`}>
                  {tier.tag}
                </span>

                <h3 className="text-2xl font-bold mt-4 mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {tier.description}
                </p>

                <p className="text-3xl font-bold text-primary mb-6">
                  {tier.price}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    tier.featured
                      ? "cta-gradient text-white hover:opacity-90"
                      : ""
                  }`}
                  variant={tier.featured ? "default" : "outline"}
                >
                  <Link href="/start">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Always Included */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader headline="What's Always Included" centered />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {alwaysIncluded.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <CTASection
        headline="Ready to Get Started?"
        subheadline="Let's discuss your project and find the right fit."
        ctaText="Start the Conversation"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
