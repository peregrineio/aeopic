import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
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

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "ShadCN UI",
  "Supabase",
  "Vercel",
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

      {/* Our Stack */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Built With Modern, Battle-Tested Technology"
            centered
          />
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            We use the same stack trusted by companies like Netflix, Nike, and
            Notion.
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
