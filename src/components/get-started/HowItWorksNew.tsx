"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCode2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Fill out the form above. Takes 2 minutes. We'll review your submission and reach out within 24 hours.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "We Design the Solution",
    description:
      "We map your workflow, architect the platform, and show you exactly what we'd build with a detailed proposal.",
    icon: FileCode2,
  },
  {
    number: "03",
    title: "We Build & Launch",
    description:
      "Agile development with weekly demos. You see progress every step of the way. Live in weeks, not months.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-warm)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "var(--ink-light)" }}
          >
            <span
              className="font-mono text-xs font-medium tracking-wider uppercase"
              style={{ color: "var(--ink)" }}
            >
              The Process
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
            Three Steps to Your New Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#52525B] max-w-xl mx-auto"
          >
            A straightforward process designed to get you from idea to launch as efficiently as possible.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl p-8 border border-[#E4E4E7] hover:border-[var(--ink)]/30 hover:shadow-lg transition-all duration-300">
                  {/* Giant Background Number */}
                  <div
                    className="absolute -top-4 -left-2 font-heading font-extrabold select-none pointer-events-none"
                    style={{
                      fontSize: "7rem",
                      lineHeight: 1,
                      opacity: 0.06,
                      color: "#18181B",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: "var(--ink-light)" }}
                    >
                      <Icon className="w-7 h-7" style={{ color: "var(--ink)" }} />
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-[#18181B] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[#52525B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[var(--ink)]/30 to-[var(--ink)]/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
