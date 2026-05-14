"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  LayoutDashboard,
  Building2,
  Handshake,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProjectType {
  icon: LucideIcon;
  title: string;
  timeline: string;
  description: string;
  scope: string[];
  bestFor: string;
}

const projectTypes: ProjectType[] = [
  {
    icon: Rocket,
    title: "MVP / Prototype",
    timeline: "4-8 weeks",
    description:
      "Validate your idea with a working product. Core features, clean design, ready for real users.",
    scope: [
      "Auth & accounts",
      "Database",
      "Core workflows",
      "Responsive design",
      "Deployment",
    ],
    bestFor: "Startups, new product ideas, proof of concept",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Web Application",
    timeline: "8-16 weeks",
    description:
      "A full platform built around your business operations. Replaces scattered tools with one system.",
    scope: [
      "CRM & dashboards",
      "Integrations",
      "Automation",
      "Admin portal",
      "Analytics",
    ],
    bestFor:
      "Growing businesses replacing manual processes or SaaS patchwork",
  },
  {
    icon: Building2,
    title: "Full Platform Build",
    timeline: "4-8 months",
    description:
      "Enterprise-grade platform with multi-user access, advanced workflows, and scale-ready architecture.",
    scope: [
      "Multi-tenant",
      "Real-time features",
      "Advanced permissions",
      "Compliance",
      "API layer",
    ],
    bestFor:
      "Established businesses, complex operations, customer-facing portals",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    timeline: "Monthly retainer",
    description:
      "Continuous development, marketing, and support. Your dedicated tech team without the overhead.",
    scope: [
      "Feature development",
      "Performance optimization",
      "Marketing campaigns",
      "Analytics & reporting",
    ],
    bestFor:
      "Businesses that need consistent development and marketing support",
  },
];

export function ProjectTypes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <div className="mb-14 max-w-2xl">
          <p className="pricing-eyebrow mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-[-0.025em] text-[#0F1226]">
            What We Build
          </h2>
          <p className="text-[#6B7280] mt-3 text-lg leading-relaxed">
            Four engagement models. Each one is a complete delivery — not a
            package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto border-t border-[#E8E8F0] pt-2">
          {projectTypes.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group pricing-card-light p-6 flex flex-col h-full"
              >
                <div className="relative w-12 h-12 flex items-center justify-center mb-5">
                  <div className="absolute inset-0 bg-[#726AFF]/[0.08] rounded-lg" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#726AFF]/20 rounded-sm" />
                  <Icon className="text-[#726AFF] w-5 h-5 relative z-10" />
                </div>

                <h3 className="text-xl font-heading font-bold tracking-[-0.02em]">
                  {project.title}
                </h3>

                <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-wider text-[#726AFF] mt-3 uppercase">
                  <span className="w-3 h-px bg-[#726AFF]" />
                  {project.timeline}
                </span>

                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#374151]"
                    >
                      <Check className="h-3.5 w-3.5 text-[#726AFF] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[0.65rem] font-mono tracking-[0.15em] uppercase text-[#9CA3AF]/60 mt-5">
                  BEST FOR
                </p>
                <p className="text-xs text-[#6B7280] mt-1 font-mono">
                  {project.bestFor}
                </p>

                <a
                  href="#estimator"
                  className="mt-auto pt-5 text-[#726AFF] text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all hover:text-[#5B54D6]"
                >
                  Get an estimate
                  <span className="text-lg leading-none">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
