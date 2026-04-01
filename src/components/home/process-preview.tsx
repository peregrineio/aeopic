"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Search, FileCode2, Rocket, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "Tell us what you need. We listen, ask the right questions, and map your goals.",
  },
  {
    icon: FileCode2,
    number: "02",
    title: "Blueprint",
    description: "We design the architecture, UI, and workflows before writing a single line of code.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Build & Iterate",
    description: "We build fast, show you progress weekly, and refine based on your feedback.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Grow",
    description: "Go live with confidence. We stick around to optimize, maintain, and scale.",
  },
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

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ProcessTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 lg:mt-16"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-x-auto">
        {/* Header */}
        <p className="text-[0.75rem] uppercase tracking-wider text-gray-500 mb-6">
          Typical 10-Week Project Timeline
        </p>

        {/* Gantt Chart SVG */}
        <svg viewBox="0 0 800 100" className="w-full h-auto min-w-[600px]">
          {/* Week labels */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => (
            <text
              key={week}
              x={40 + (week - 1) * 72}
              y="90"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
            >
              Wk {week}
            </text>
          ))}

          {/* Discovery bar (Week 1-2) */}
          <rect
            x="20"
            y="8"
            width="130"
            height="16"
            rx="5"
            fill="#726AFF"
          />
          <text
            x="85"
            y="19"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="500"
          >
            Discovery
          </text>

          {/* Blueprint bar (Week 1-3, overlapping) */}
          <rect
            x="20"
            y="28"
            width="200"
            height="16"
            rx="5"
            fill="#a78bfa"
            opacity="0.9"
          />
          <text
            x="120"
            y="39"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="500"
          >
            Blueprint
          </text>

          {/* Build & Iterate bar (Week 3-10, longest) */}
          <rect
            x="164"
            y="48"
            width="560"
            height="16"
            rx="5"
            fill="#8b5cf6"
          />
          <text
            x="444"
            y="59"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="500"
          >
            Build & Iterate
          </text>

          {/* Launch bar (Week 10-12) */}
          <rect
            x="668"
            y="68"
            width="110"
            height="16"
            rx="5"
            fill="#c4b5fd"
          />
          <text
            x="723"
            y="79"
            textAnchor="middle"
            fill="#1A1A1A"
            fontSize="9"
            fontWeight="500"
          >
            Launch
          </text>
        </svg>
      </div>
    </motion.div>
  );
}

export function ProcessPreview() {
  return (
    <section className="section-padding mesh-gradient-dark relative overflow-hidden noise-overlay">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[hsl(260_80%_60%_/_0.1)] blur-[100px]" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-white/90 tracking-[0.2em] uppercase text-sm font-semibold mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-5"
          >
            From Idea to Launch
            <br className="hidden sm:block" />
            <span className="text-gradient">in Weeks, Not Months</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            A proven process that delivers quality software fast — without cutting corners.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                {/* Mobile/Tablet connecting line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-[72px] w-px h-[calc(100%+32px)] bg-gradient-to-b from-primary/40 to-primary/10" />
                )}

                <div className="glass-card p-6 lg:p-8 h-full text-center lg:text-left">
                  {/* Step number and icon row */}
                  <div className="flex flex-col items-center lg:items-start mb-6">
                    {/* Icon circle */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-mono font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-[#726AFF] hover:text-white font-medium transition-colors"
          >
            <span>See Our Full Process</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
