"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We listen. You talk. Together we map what success looks like for your business.",
    weeks: "WK 1–2",
  },
  {
    number: "02",
    title: "Blueprint",
    description: "Architecture, interfaces, workflows — designed and approved before any code.",
    weeks: "WK 2–3",
  },
  {
    number: "03",
    title: "Build",
    description: "Weekly demos. Direct feedback. Rapid iteration until it's exactly right.",
    weeks: "WK 3–7",
  },
  {
    number: "04",
    title: "Launch",
    description: "Go live with confidence. We stay to optimize, support, and scale.",
    weeks: "WK 8+",
  },
];

export function ProcessPreview() {
  return (
    <section className="relative py-24 lg:py-36 bg-white overflow-hidden">
      <div className="container-site">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-14 md:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            04
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
            How we work
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1]"
            style={{ color: brand.dark }}
          >
            Idea to launch.
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${brand.primary}` }}>
              Weeks, not months.
            </span>
          </motion.h2>
        </div>

        {/* Steps ledger */}
        <div className="border-t border-gray-200">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-200 py-10 md:py-14 cursor-default"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Giant index — outline that fills purple on hover */}
                <div className="col-span-3 md:col-span-2">
                  <span
                    className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter transition-all duration-500 select-none group-hover:[-webkit-text-stroke:0px] group-hover:[color:#726AFF]"
                    style={{ color: "transparent", WebkitTextStroke: "1.5px #D1D5DB" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-9 md:col-span-3 flex items-center h-full">
                  <h3
                    className="font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#726AFF]"
                    style={{ color: brand.dark }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-9 col-start-4 md:col-span-5 md:col-start-6">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Week range */}
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-gray-400">
                    {step.weeks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-6">
              Typical 8-week timeline
            </p>

            <div className="relative h-1.5 bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0"
                style={{
                  background:
                    "linear-gradient(90deg, #726AFF 0%, #726AFF 25%, #9F97FF 25%, #9F97FF 37%, #B8B3FF 37%, #B8B3FF 88%, #D4D1FF 88%, #D4D1FF 100%)",
                }}
              />
            </div>

            <div className="flex justify-between mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
                <span key={week} className="font-mono text-[10px] text-gray-400">
                  {week}
                </span>
              ))}
            </div>

            <div className="flex mt-4 font-mono text-[10px] tracking-[0.12em] uppercase">
              <div style={{ width: "25%", color: "#726AFF" }}>Discovery</div>
              <div style={{ width: "12%", color: "#9F97FF" }}>Blueprint</div>
              <div style={{ width: "51%", color: "#B8B3FF" }}>Build & iterate</div>
              <div style={{ width: "12%", color: "#A7A2E8" }} className="text-right">
                Launch
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#726AFF] transition-colors border-b border-gray-300 hover:border-[#726AFF] pb-1"
          >
            Full process breakdown
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
