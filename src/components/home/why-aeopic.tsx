"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const brand = { primary: "#726AFF", dark: "#0F1226" };

const differentiators = [
  {
    n: "01",
    title: "Built custom, not configured",
    description:
      "We write code for your business. No dragging and dropping into someone else's template.",
    points: ["Your workflow, your rules", "Open-source stack", "Full code ownership upon completion"],
  },
  {
    n: "02",
    title: "AI baked in, not bolted on",
    description:
      "Every platform we build can leverage AI — from customer support to internal operations.",
    points: ["Smart automation", "Knowledge systems", "Scales with you"],
  },
  {
    n: "03",
    title: "Full stack, full service",
    description:
      "Web apps, AI tools, marketing, eCommerce — one team, one vision, everything connected.",
    points: ["No handoff chaos", "Unified strategy", "Single point of contact"],
  },
  {
    n: "04",
    title: "Real builders, not managers",
    description:
      "You work directly with the engineers writing your code. No layers of project managers.",
    points: ["Direct communication", "Fast decisions", "Technical expertise"],
  },
];

const comparisonData = [
  { feature: "Full code ownership", aeopic: true, agency: false, nocode: false },
  { feature: "Open-source stack", aeopic: true, agency: "partial", nocode: false },
  { feature: "AI-native build", aeopic: true, agency: "partial", nocode: false },
  { feature: "Direct engineer access", aeopic: true, agency: false, nocode: "na" },
  { feature: "4–8 week launch", aeopic: true, agency: false, nocode: true },
  { feature: "Custom business logic", aeopic: true, agency: true, nocode: false },
  { feature: "App + marketing", aeopic: true, agency: "partial", nocode: false },
];

function Verdict({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 mx-auto" style={{ color: brand.primary }} strokeWidth={3} />;
  }
  if (value === false) {
    return <X className="w-4 h-4 mx-auto text-white/20" />;
  }
  if (value === "partial") {
    return <Minus className="w-4 h-4 mx-auto text-white/35" />;
  }
  return <span className="font-mono text-[10px] text-white/25 block text-center">N/A</span>;
}

export function WhyAeopic() {
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
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10">
        {/* Dossier rule */}
        <div className="flex items-baseline gap-4 mb-14 md:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: brand.primary }}>
            03
          </span>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/40">
            Why Aeopic
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1] text-white"
          >
            We&apos;re not
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>
              an agency.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 lg:col-start-9 text-white/60 leading-relaxed self-end"
          >
            We don&apos;t outsource to the cheapest bidder. We&apos;re engineers who
            build software we&apos;d be proud to use ourselves.
          </motion.p>
        </div>

        {/* Differentiator ledger */}
        <div className="border-t border-white/10 mb-20 md:mb-28">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/10"
            >
              <span
                className="col-span-2 md:col-span-1 font-mono text-sm pt-1.5"
                style={{ color: brand.primary }}
              >
                /{item.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#726AFF] transition-colors duration-300">
                {item.title}
              </h3>
              <div className="col-span-10 col-start-3 md:col-span-6 md:col-start-7">
                <p className="text-white/55 leading-relaxed mb-4">{item.description}</p>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30">
                  {item.points.join("  ·  ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spec-sheet comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-8">
            Aeopic vs the alternatives
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 font-normal w-[40%]">
                    Capability
                  </th>
                  <th
                    className="pb-4 font-mono text-[11px] tracking-[0.2em] uppercase font-bold w-[20%]"
                    style={{ color: brand.primary }}
                  >
                    Aeopic
                  </th>
                  <th className="pb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 font-normal w-[20%]">
                    Agency
                  </th>
                  <th className="pb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/35 font-normal w-[20%]">
                    No-code
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="border-t border-white/[0.08]"
                  >
                    <td className="py-4 text-sm text-white/70">{row.feature}</td>
                    <td className="py-4" style={{ background: "rgba(114,106,255,0.08)" }}>
                      <Verdict value={row.aeopic} />
                    </td>
                    <td className="py-4">
                      <Verdict value={row.agency} />
                    </td>
                    <td className="py-4">
                      <Verdict value={row.nocode} />
                    </td>
                  </motion.tr>
                ))}
                {/* Purple frame for the Aeopic column */}
                <tr aria-hidden>
                  <td />
                  <td className="h-1 border-b-2" style={{ borderColor: brand.primary }} />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
