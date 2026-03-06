import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Services | Aeopic",
  description:
    "Custom web applications, AI-powered business tools, marketing & SEO, and eCommerce solutions — built by a team that gets it done.",
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
  },
  {
    title: "AI-Powered Business Tools",
    description:
      "Smart tools that learn your business and make your team more efficient. We design systems where AI is a core layer, not an afterthought.",
    features: [
      "Ticket management systems",
      "AI-powered knowledge bases",
      "Customer service chat & phone support",
      "Intelligent routing & automation",
      "Natural language search",
      "Payment processing integration",
    ],
    href: "/services/ai-tools",
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
  },
  {
    title: "eCommerce Built for Conversion",
    description:
      "Sell anything, anywhere, to anyone — with a platform designed to grow with you.",
    features: [
      "Product catalogs & inventory",
      "Subscription & recurring billing",
      "Service booking & scheduling",
      "Payment processing (Stripe)",
      "Order management & fulfillment",
      "Analytics & conversion tracking",
    ],
    href: "/services/ecommerce",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Our Services"
        headline="What We Build"
        subheadline="From custom platforms to AI-powered tools to full marketing campaigns — we build the technology stack that makes your business run."
      />

      {/* Service Blocks */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
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

                {/* Visual placeholder */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } aspect-video bg-accent rounded-xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
