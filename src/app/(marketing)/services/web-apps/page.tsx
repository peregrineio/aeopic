import type { Metadata } from "next";
import { AlertTriangle, TrendingUp, Shield, Zap, Key } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { WebAppsFeatures } from "@/components/services/webapps-features";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

export const metadata: Metadata = {
  title: "Custom Web Applications | Aeopic",
  description:
    "Platforms built around your workflow, not the other way around. Custom web applications for operations, customer portals, and internal tools.",
};

const painPoints = [
  "You're adapting your process to fit the tool",
  "Data lives in 5 different places",
  "You've outgrown spreadsheets but can't afford enterprise",
  "Off-the-shelf doesn't handle your edge cases",
];

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "More Customers, Less Effort",
    color: "#38a169",
    description:
      "Your platform works 24/7 — taking bookings, capturing leads, and serving customers while you sleep. No more missed calls. No more lost opportunities.",
  },
  {
    icon: Shield,
    title: "Fewer Headaches, More Control",
    color: "#726AFF",
    description:
      "Everything in one place. No more juggling 5 different tools, spreadsheets, and sticky notes. One dashboard. One login. Full visibility.",
  },
  {
    icon: Zap,
    title: "Operations That Scale",
    color: "#f59e0b",
    description:
      "Built to grow with you. Whether you have 2 employees or 200, your platform handles the load without breaking down or slowing you down.",
  },
  {
    icon: Key,
    title: "Software You Own",
    color: "#1e3a5f",
    description:
      "No vendor lock-in. No surprise price hikes. You own 100% of the code. It's yours forever, even if you stop working with us.",
  },
];

const faqs = [
  {
    question: "How long does a custom web app take to build?",
    answer:
      "Most projects launch in 8-12 weeks. We work in sprints, so you'll see progress every week and can provide feedback throughout the process.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. You own everything we build. The code, the design, the infrastructure — it's all yours.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer ongoing support and maintenance plans. Most clients keep us on retainer for updates, new features, and optimization.",
  },
  {
    question: "Can you work with my existing systems?",
    answer:
      "Absolutely. We specialize in building platforms that integrate with your existing tools — CRMs, payment processors, inventory systems, and more.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "We offer monthly retainer plans that include bug fixes, performance monitoring, security updates, and a set number of hours for new features or improvements.",
  },
];

export default function WebAppsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Custom Development"
        headline="Custom Web Applications"
        subheadline="Platforms built around your workflow, not the other way around."
      />

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Generic Software Has Generic Limits"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
              >
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader
            headline="Platforms That Fit Like They Were Made for You — Because They Were"
            centered
          />
          <WebAppsFeatures />
        </div>
      </section>

      {/* What This Means for Your Business */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="What This Means for Your Business"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ borderLeftColor: benefit.color, borderLeftWidth: "4px" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Powered by modern, production-grade technology.
          </p>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="web-apps" />

      <CTASection
        headline="Ready to Build Your Custom Platform?"
        subheadline="Tell us what you need. We'll show you what's possible."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
