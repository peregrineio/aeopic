import type { Metadata } from "next";
import { ShoppingBag, RefreshCw, Calendar, Truck } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { EcommerceFeatures } from "@/components/services/ecommerce-features";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

export const metadata: Metadata = {
  title: "eCommerce Solutions | Aeopic",
  description:
    "Sell products, subscriptions, and services online — with a platform designed to grow with you.",
};

const platforms = [
  {
    title: "Product eCommerce",
    description:
      "Sell physical or digital products with full inventory management, variant support, and shipping integration.",
  },
  {
    title: "Subscription Commerce",
    description:
      "Build recurring revenue with membership sites, subscription boxes, or SaaS billing.",
  },
  {
    title: "Service Commerce",
    description:
      "Sell services with integrated booking, scheduling, and payment — perfect for consultants, coaches, and agencies.",
  },
  {
    title: "Marketplace Platforms",
    description:
      "Multi-vendor marketplaces with seller management, commission tracking, and payouts.",
  },
];

const faqs = [
  {
    question: "Do you build on Shopify or WooCommerce?",
    answer:
      "We can, but we specialize in custom-built eCommerce platforms using modern tools like Next.js and Stripe. This gives you more control, better performance, and no monthly platform fees.",
  },
  {
    question: "How do you handle payments?",
    answer:
      "We integrate with Stripe for all payment processing — cards, Apple Pay, Google Pay, bank transfers, and more. Stripe handles PCI compliance so you don't have to.",
  },
  {
    question: "Can you migrate my existing store?",
    answer:
      "Yes. We can migrate products, customers, and order history from most platforms. We'll map out the migration plan before we start.",
  },
  {
    question: "What about inventory and shipping?",
    answer:
      "We integrate with inventory management systems and shipping providers. Real-time stock tracking, shipping rate calculation, and label printing — all built in.",
  },
  {
    question: "Do you handle ongoing maintenance?",
    answer:
      "Yes. We offer monthly retainers that include updates, bug fixes, performance monitoring, and new feature development.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <ServiceHero
        eyebrow="eCommerce"
        headline="eCommerce Built for Conversion"
        subheadline="Sell products, subscriptions, and services online — with a platform designed to grow with you."
      />

      {/* Core Features */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Everything You Need to Sell Online"
            centered
          />
          <EcommerceFeatures />
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader
            headline="What We Build"
            subheadline="Whether you're selling products, services, or subscriptions — we build the platform that fits."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div key={platform.title} className="premium-card p-6">
                <h3 className="font-semibold mb-2">{platform.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Why Custom eCommerce?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Off-the-shelf platforms charge monthly fees, limit customization,
              and slow you down. A custom platform costs the same over 2-3 years
              — but you own it, control it, and can scale it infinitely.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">$0</p>
                <p className="text-sm text-muted-foreground">
                  Monthly Platform Fees
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Code Ownership</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">∞</p>
                <p className="text-sm text-muted-foreground">
                  Customization Options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="ecommerce" />

      <CTASection
        headline="Ready to Start Selling?"
        subheadline="Tell us what you're selling. We'll show you how to sell more of it."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
