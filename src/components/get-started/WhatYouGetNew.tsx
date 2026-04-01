"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  TrendingUp,
  Calendar,
  Key,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Web Platform",
    description: "Built for your exact workflow. Not a template. Not a theme. Truly custom software.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tools",
    description: "Smart automation that saves you hours every week. Let technology work for you.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description: "Get found by the customers who need you. Drive traffic that converts.",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Let customers book and pay 24/7. Automate scheduling completely.",
  },
  {
    icon: Key,
    title: "100% Code Ownership",
    description: "Your code. Your data. Yours forever. No vendor lock-in.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Monthly retainers available.",
  },
];

export function WhatYouGet() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 bg-white"
          >
            <span
              className="font-mono text-xs font-medium tracking-wider uppercase"
              style={{ color: "var(--ink)" }}
            >
              What's Included
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-[#18181B] mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Everything You Need to Run Your Business Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#52525B] max-w-xl mx-auto"
          >
            One team. One vision. Everything connected and working together seamlessly.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-white border border-[#E4E4E7] hover:border-[var(--ink)]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--ink-light)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "var(--ink)" }} />
                  </div>
                  <h3 className="font-heading font-semibold text-[#18181B] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
