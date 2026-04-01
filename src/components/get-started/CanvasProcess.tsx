"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, FileCode2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Share Your Vision",
    description: "Fill out the form — it takes 2 minutes. We review every submission personally and respond within 24 hours.",
  },
  {
    icon: FileCode2,
    num: "02",
    title: "Design Together",
    description: "We map your workflow, architect the perfect solution, and show you exactly what we'll build before writing a line of code.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Build & Launch",
    description: "Agile development with weekly demos. Watch your platform come to life. Go live in 8-12 weeks.",
  },
];

export function CanvasProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36 bg-[#0A0A0C] relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#726AFF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#9333EA]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#726AFF]" />
            <span className="text-[#726AFF] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#726AFF]" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="relative group"
              >
                {/* Giant watermark number */}
                <div
                  className="absolute -top-8 -left-2 lg:-top-12 lg:-left-4 font-bold text-[10rem] lg:text-[14rem] leading-none text-white/[0.02] select-none pointer-events-none group-hover:text-[#726AFF]/[0.04] transition-colors duration-700"
                >
                  {step.num}
                </div>

                {/* Card */}
                <div className="relative h-full p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#726AFF]/30 hover:bg-white/[0.04] transition-all duration-500 group-hover:-translate-y-2">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-[#726AFF]/10 border border-[#726AFF]/20 flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-[#726AFF]" />
                  </motion.div>

                  {/* Step badge */}
                  <span className="text-xs font-bold text-[#726AFF]/80 tracking-[0.2em] uppercase mb-4 block">
                    Step {step.num}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
