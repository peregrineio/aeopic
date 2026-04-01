"use client";

import { motion, type Variants } from "framer-motion";
import { Wrench, Brain, Layers, Hammer, Check, X, Minus } from "lucide-react";

const differentiators = [
  {
    icon: Wrench,
    title: "Built Custom, Not Configured",
    description:
      "We write code for your business. No dragging and dropping into someone else's template.",
    points: ["Your workflow, your rules", "No vendor lock-in", "100% code ownership"],
  },
  {
    icon: Brain,
    title: "AI Baked In, Not Bolted On",
    description:
      "Every platform we build can leverage AI — from customer support to internal operations.",
    points: ["Smart automation", "Knowledge systems", "Scales with you"],
  },
  {
    icon: Layers,
    title: "Full Stack, Full Service",
    description:
      "Web apps, AI tools, marketing, eCommerce — one team, one vision, everything connected.",
    points: ["No handoff chaos", "Unified strategy", "Single point of contact"],
  },
  {
    icon: Hammer,
    title: "Real Builders, Not Managers",
    description:
      "You work directly with the engineers writing your code. No layers of project managers.",
    points: ["Direct communication", "Fast decisions", "Technical expertise"],
  },
];

const comparisonData = [
  { feature: "100% Code Ownership", aeopic: true, agency: false, nocode: false },
  { feature: "No Vendor Lock-in", aeopic: true, agency: "partial", nocode: false },
  { feature: "AI-Native Build", aeopic: true, agency: "partial", nocode: false },
  { feature: "Direct Engineer Access", aeopic: true, agency: false, nocode: "na" },
  { feature: "8–12 Week Launch", aeopic: true, agency: false, nocode: true },
  { feature: "Custom Business Logic", aeopic: true, agency: true, nocode: false },
  { feature: "App + Marketing", aeopic: true, agency: "partial", nocode: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ComparisonIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-[#726AFF]/10 flex items-center justify-center">
        <Check className="w-4 h-4 text-[#726AFF]" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
        <X className="w-4 h-4 text-gray-300" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
        <Minus className="w-4 h-4 text-gray-400" />
      </div>
    );
  }
  return <span className="text-[0.7rem] text-gray-400">N/A</span>;
}

function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 md:mt-20"
    >
      <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 overflow-x-auto">
        {/* Header */}
        <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-6">
          Aeopic vs. The Alternatives
        </p>

        {/* Table */}
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-2 text-gray-600 text-sm font-normal w-[40%]">
                Feature
              </th>
              <th className="text-center py-3 px-2 text-gray-900 text-sm font-bold">
                Aeopic
              </th>
              <th className="text-center py-3 px-2 text-gray-400 text-sm font-normal">
                Agency
              </th>
              <th className="text-center py-3 px-2 text-gray-400 text-sm font-normal">
                No-Code
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={row.feature}
                className={`border-b border-gray-100 last:border-b-0 hover:bg-[#F6F7FB] transition-colors ${
                  index % 2 === 0 ? "bg-gray-50/50" : ""
                }`}
              >
                <td className="py-3 px-2 text-gray-600 text-sm">
                  {row.feature}
                </td>
                <td className="py-3 px-2">
                  <div className="flex justify-center">
                    <ComparisonIcon value={row.aeopic} />
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex justify-center">
                    <ComparisonIcon value={row.agency} />
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex justify-center">
                    <ComparisonIcon value={row.nocode} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export function WhyAeopic() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl hidden lg:block" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block eyebrow text-primary mb-4"
          >
            Why Aeopic
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5"
          >
            Why Teams <span className="text-gradient">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We&apos;re not an agency that outsources to the cheapest bidder. We&apos;re engineers who build software we&apos;d be proud to use ourselves.
          </motion.p>
        </div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex gap-6">
                {/* Icon container */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center group-hover:border-primary/30 group-hover:from-primary/15 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-heading mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Points list */}
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider for non-last items */}
              {index < differentiators.length - 1 && (
                <div className="absolute -bottom-4 lg:-bottom-6 left-20 right-0 h-px bg-gradient-to-r from-border/50 to-transparent lg:hidden" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </section>
  );
}
