import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { CTASection } from "@/components/shared/cta-section";
import { WhoWeHelp } from "@/components/home/who-we-help";
import {
  WebAppsMockup,
  AIToolsMockup,
  MarketingMockup,
} from "@/components/services/service-mockups";
import { AIAgentsMockup } from "@/components/services/ai-agents-mockup";

export const metadata: Metadata = {
  title: "Services | Custom Software Development Houston",
  description:
    "Custom web apps, AI agents, AI tools, and marketing solutions. Houston software studio serving local businesses.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Your business isn't generic — your software shouldn't be either. We build platforms tailored to your exact workflow, from operations dashboards to customer portals.",
    features: [
      "Operations dashboards & CRMs",
      "Customer portals with self-service",
      "Internal tools & workflow automation",
      "Role-based access & permissions",
      "Real-time data & analytics",
      "Mobile-responsive, production-grade",
    ],
    href: "/services/web-apps",
    mockup: "webapps",
  },
  {
    title: "AI Integrated Operating Systems",
    description:
      "Smart tools that learn your business and make your team more efficient. We design systems where AI is a core layer, not an afterthought.",
    features: [
      "Ticket management systems",
      "AI integrated knowledge bases",
      "Customer service chat & phone support",
      "Intelligent routing & automation",
      "Natural language search",
      "Payment processing integration",
    ],
    href: "/services/ai-tools",
    mockup: "ai",
  },
  {
    title: "Custom AI Agents",
    description:
      "Autonomous agents that qualify leads, handle phone calls, process documents, and coordinate workflows — trained on your data, connected to your tools.",
    features: [
      "Lead qualification & follow-up agents",
      "Voice AI & phone handling",
      "Document processing & data entry",
      "Multi-agent orchestration",
      "MCP-connected tool integrations",
      "TRAIGA-compliant by default",
    ],
    href: "/services/ai-agents",
    mockup: "ai-agents",
  },
  {
    title: "Marketing That Moves the Needle",
    description:
      "Get found. Get chosen. Get results. Data-driven strategies that bring real customers to your door.",
    features: [
      "Social media management & content",
      "SEO optimization & strategy",
      "Google Business Profile management",
      "Customer feedback-driven insights",
      "Performance analytics & reporting",
      "Paid advertising management",
    ],
    href: "/services/marketing",
    mockup: "marketing",
  },
];

const mockupComponents: Record<string, React.ReactNode> = {
  webapps: <WebAppsMockup />,
  ai: <AIToolsMockup />,
  "ai-agents": <AIAgentsMockup />,
  marketing: <MarketingMockup />,
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Services"
        headline="What We Build"
        subheadline="From custom platforms to AI integrated operating systems to full marketing campaigns — we build the technology stack that makes your business run."
      />

      {/* Service Blocks */}
      <div>
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`section-padding ${
              index % 2 === 0 ? "bg-white" : "bg-[#F6F7FB]"
            }`}
          >
            <div className="container-site">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} border-l-4 border-primary pl-6`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Service Mockup */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {mockupComponents[service.mockup]}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <WhoWeHelp />

      <CTASection
        headline="Ready to Build?"
        subheadline="Tell us about your project."
        ctaText="Get Started"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
