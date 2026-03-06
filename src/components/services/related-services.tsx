"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Sparkles, TrendingUp, ShoppingCart, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

type ServiceSlug = "web-apps" | "ai-tools" | "marketing" | "ecommerce";

const allServices = [
  {
    slug: "web-apps" as ServiceSlug,
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Tailored platforms built for your exact workflow.",
    href: "/services/web-apps",
  },
  {
    slug: "ai-tools" as ServiceSlug,
    icon: Sparkles,
    title: "AI-Powered Tools",
    description:
      "Smart systems that learn your business and make your team more efficient.",
    href: "/services/ai-tools",
  },
  {
    slug: "marketing" as ServiceSlug,
    icon: TrendingUp,
    title: "Marketing & SEO",
    description:
      "Data-driven strategies that bring real customers to your door.",
    href: "/services/marketing",
  },
  {
    slug: "ecommerce" as ServiceSlug,
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Sell products, subscriptions, and services with a platform built for conversion.",
    href: "/services/ecommerce",
  },
];

interface RelatedServicesProps {
  currentService: ServiceSlug;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServices = allServices.filter(
    (service) => service.slug !== currentService
  );

  return (
    <section className="section-padding bg-[hsl(var(--neutral-bg))]">
      <div className="container-site">
        <SectionHeader headline="Explore Our Other Services" centered />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {relatedServices.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="premium-card p-6 group hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
