"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

const terminalLines = [
  { prompt: true, text: "aeopic init your-project" },
  { check: true, label: "scope", text: "defined with you, not for you" },
  { check: true, label: "blueprint", text: "approved before a line of code" },
  { check: true, label: "ownership", text: "100% yours upon completion" },
  { check: true, label: "launch", text: "4–8 weeks" },
];

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden" style={{ background: brand.dark }}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Left: headline + actions */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: brand.primary }}
            >
              05 — Initialize
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1] mb-8"
            >
              Ready to build
              <br />
              something that
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px ${brand.primary}` }}>
                actually works?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/60 max-w-md mb-10 leading-relaxed"
            >
              Tell us what you need. No sales pitch, no pressure — just a
              conversation about what&apos;s possible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="/start"
                className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: brand.primary }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1"
              >
                See our work
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30"
            >
              Usually respond within 24 hours · Houston-based · Remote-friendly
            </motion.p>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
              {/* Chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-[11px] text-white/35">aeopic — new project</span>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 font-mono text-sm space-y-4">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.3 }}
                  >
                    {line.prompt ? (
                      <p className="text-white/80">
                        <span style={{ color: brand.primary }}>$</span> {line.text}
                      </p>
                    ) : (
                      <p className="text-white/50 pl-5">
                        <span className="text-emerald-400">✓</span>{" "}
                        <span className="text-white/70 inline-block w-24">{line.label}</span>
                        {line.text}
                      </p>
                    )}
                  </motion.div>
                ))}

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2 }}
                  className="text-white/80 pt-2"
                >
                  <span style={{ color: brand.primary }}>?</span> ready when you are
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="inline-block w-2.5 h-4 ml-2 align-middle"
                    style={{ background: brand.primary }}
                  />
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
