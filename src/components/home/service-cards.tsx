"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Code2, Sparkles, TrendingUp, ShoppingCart, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Platforms built for your exact workflow. Not a template with your logo — real code, real ownership.",
    href: "/services/web-apps",
    accent: "from-primary to-primary/60",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description:
      "Smart systems that actually work. Ticket automation, knowledge bases, customer support that scales.",
    href: "/services/ai-tools",
    accent: "from-[hsl(260_80%_60%)] to-primary/60",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description:
      "Get found by customers who need you. Social media, SEO, Google Business — all connected.",
    href: "/services/marketing",
    accent: "from-primary/80 to-[hsl(280_70%_50%)]",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Sell products, subscriptions, services. Stores built for conversion, not monthly platform fees.",
    href: "/services/ecommerce",
    accent: "from-[hsl(280_70%_50%)] to-primary",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServiceCards() {
  return (
    <section className="section-padding mesh-gradient-1 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block eyebrow text-primary mb-4"
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5"
          >
            Everything You Need
            <br className="hidden sm:block" />
            <span className="text-gradient">to Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            From custom platforms to AI tools to marketing — one team, one vision, everything connected.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block h-full"
              >
                <div className="premium-card p-8 lg:p-10 h-full relative overflow-hidden">
                  {/* Gradient accent line at top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title with arrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl lg:text-2xl font-heading">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <span className="text-sm font-medium text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                      Learn more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
