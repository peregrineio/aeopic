import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Our Work | Aeopic",
  description:
    "Real projects. Real results. See what our team delivers — operations platforms, customer portals, marketing websites, and AI-powered tools.",
};

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Operations Platform",
    description: "Full CRM with scheduling, invoicing, and team management",
  },
  {
    icon: Users,
    title: "Customer Portal",
    description: "Self-service booking, payments, and account management",
  },
  {
    icon: Globe,
    title: "Marketing Website",
    description: "SEO-optimized, conversion-focused, mobile-first",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Ticket systems, knowledge bases, and smart automation",
  },
];

export default function WorkPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Work"
        headline="What We've Built"
        subheadline="Real projects. Real results. See what our team delivers."
      />

      {/* Capabilities */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader headline="Our Capabilities" centered />
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="premium-card p-8 bg-white border-l-4 border-primary hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Clients Trust Us */}
      <section className="section-padding bg-[#0F1226]">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-[#726AFF] mb-2">100%</div>
              <div className="text-white/60">Code Ownership</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#726AFF] mb-2">8-12 Weeks</div>
              <div className="text-white/60">Average Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#726AFF] mb-2">24/7</div>
              <div className="text-white/60">Your Platform Never Sleeps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Coming Soon */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <div className="premium-card p-12 bg-white border-2 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Case Studies Coming Soon</h2>
              <p className="text-muted-foreground mb-8">
                We're documenting our latest projects. In the meantime, let's
                talk about what we can build for you.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center gap-2 cta-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Add Your Project to Our Portfolio?"
        subheadline="Let's build something worth showing off."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
