"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We listen. You talk. Together we map what success looks like for your business.",
    weeks: "1–2",
  },
  {
    number: "02",
    title: "Blueprint",
    description: "Architecture, interfaces, workflows — designed and approved before any code.",
    weeks: "2–3",
  },
  {
    number: "03",
    title: "Build",
    description: "Weekly demos. Direct feedback. Rapid iteration until it's exactly right.",
    weeks: "3–9",
  },
  {
    number: "04",
    title: "Launch",
    description: "Go live with confidence. We stay to optimize, support, and scale.",
    weeks: "10+",
  },
];

export function ProcessPreview() {
  return (
    <section className="relative py-32 md:py-40 bg-white overflow-hidden">
      {/* Header */}
      <div className="container-site mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#726AFF] text-sm font-medium tracking-wide mb-4"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tight leading-[1.1]"
        >
          Idea to launch.
          <br />
          <span className="text-[#726AFF]">Weeks, not months.</span>
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="container-site">
        <div className="border-t border-[#E5E5E5]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-[#E5E5E5] py-12 md:py-16 cursor-default"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number */}
                <div className="col-span-3 md:col-span-2">
                  <span
                    className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter transition-colors duration-300 group-hover:text-[#726AFF]"
                    style={{
                      color: '#E5E5E5',
                      fontFamily: 'var(--font-heading), system-ui, sans-serif',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-9 md:col-span-3 flex items-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] group-hover:text-[#726AFF] transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-5 md:col-start-6">
                  <p className="text-[#525252] text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Weeks */}
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <span className="text-sm text-[#A3A3A3]">
                    Week {step.weeks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline visualization */}
      <div className="container-site mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xs text-[#A3A3A3] uppercase tracking-wider mb-6">
            Typical 10-week timeline
          </p>

          {/* Progress bar */}
          <div className="relative h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #726AFF 0%, #726AFF 20%, #9F97FF 20%, #9F97FF 30%, #B8B3FF 30%, #B8B3FF 90%, #D4D1FF 90%, #D4D1FF 100%)',
              }}
            />
          </div>

          {/* Week markers */}
          <div className="flex justify-between mt-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => (
              <span key={week} className="text-xs text-[#A3A3A3]">
                {week}
              </span>
            ))}
          </div>

          {/* Phase labels */}
          <div className="flex mt-4 text-xs">
            <div style={{ width: '20%' }} className="text-[#726AFF] font-medium">
              Discovery
            </div>
            <div style={{ width: '10%' }} className="text-[#9F97FF] font-medium">
              Blueprint
            </div>
            <div style={{ width: '60%' }} className="text-[#B8B3FF] font-medium">
              Build & Iterate
            </div>
            <div style={{ width: '10%' }} className="text-[#D4D1FF] font-medium text-right">
              Launch
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="container-site mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/process"
            className="group inline-flex items-center gap-3 text-[#0A0A0A] hover:text-[#726AFF] transition-colors"
          >
            <span className="text-lg font-medium">Full process breakdown</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
