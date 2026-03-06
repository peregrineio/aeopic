import type { Metadata } from "next";
import {
  Share2,
  Search,
  MapPin,
  TrendingUp,
  Target,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

export const metadata: Metadata = {
  title: "Marketing & SEO | Aeopic",
  description:
    "Social media management, SEO, Google Business — data-driven strategies that bring real customers to your door.",
};

const painPoints = [
  "Posting without strategy",
  "No visibility on Google",
  "Competitors outranking you",
  "No way to measure ROI",
];

const services = [
  {
    icon: Share2,
    title: "Social Media Management & Engagement",
    features: [
      "Content creation & scheduling",
      "Community management & engagement",
      "Paid social campaigns (Facebook, Instagram)",
      "Performance analytics & optimization",
    ],
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & content strategy",
      "Local SEO for service businesses",
      "Ongoing optimization & reporting",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    features: [
      "Profile optimization",
      "Regular post management",
      "Review strategy & response templates",
      "Local visibility enhancement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Trends & Customer Intelligence",
    features: [
      "Customer feedback analysis",
      "Competitor monitoring",
      "Trend identification",
      "Data-driven strategy adjustments",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Research & Strategy",
    description: "We analyze your market, competitors, and opportunities",
  },
  {
    step: 2,
    title: "Execute & Optimize",
    description: "We implement campaigns and optimize based on data",
  },
  {
    step: 3,
    title: "Report & Iterate",
    description: "Monthly reporting with clear ROI metrics",
  },
];

const faqs = [
  {
    question: "How long before I see results?",
    answer:
      "Social media engagement typically improves within the first month. SEO results take 3-6 months to materialize significantly. We set realistic expectations upfront and track progress weekly.",
  },
  {
    question: "What's the minimum budget?",
    answer:
      "Our marketing retainers start at $2,000/month. This includes strategy, execution, and reporting. Ad spend is separate and depends on your goals.",
  },
  {
    question: "Do you handle the content creation?",
    answer:
      "Yes. We create all content — graphics, copy, videos. We'll work with you to understand your brand voice and maintain consistency across all channels.",
  },
  {
    question: "How do you report on performance?",
    answer:
      "Monthly reports with clear metrics: reach, engagement, traffic, leads, and conversions. We focus on metrics that matter to your business, not vanity numbers.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Digital Marketing"
        headline="Marketing That Moves the Needle"
        subheadline="Social media, SEO, Google Business — data-driven strategies that bring real customers to your door."
      />

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Most Businesses Know They Need Marketing — They Just Don't Know What Works"
            centered
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
              >
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                <p className="text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader headline="Our Services" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="premium-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Data-First Marketing. Every Decision Backed by Metrics."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-accent">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground text-lg">
              We also build your platform — so your marketing and technology are
              perfectly aligned. No handoff friction. No miscommunication. One
              team.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="marketing" />

      <CTASection
        headline="Ready to Get Found?"
        subheadline="Tell us about your business. We'll show you where the opportunities are."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
