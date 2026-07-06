"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  openCount: number;
}

const MARQUEE_ITEMS = [
  "Now Hiring",
  "Founding Sales Team",
  "Uncapped Commission",
  "Remote-First",
  "Base + Commission",
  "Get In Early",
];

export function OpportunitiesHero({ openCount }: HeroProps) {
  const reduce = useReducedMotion();
  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  const marqueeRun = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden bg-[#08080F] pt-16">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* Purple glow */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full blur-[170px] bg-[#726AFF] opacity-[0.14] pointer-events-none" />

      {/* NOW HIRING marquee band */}
      <div className="relative border-b border-white/[0.07] py-3 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#08080F] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#08080F] to-transparent pointer-events-none" />
        <motion.div
          className="flex items-center gap-8 w-max"
          animate={reduce ? undefined : { x: ["0%", "-33.34%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {marqueeRun.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-8 shrink-0">
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.25em] ${
                  item === "Now Hiring" ? "text-[#726AFF]" : "text-white/40"
                }`}
              >
                {item}
              </span>
              <span className="text-[#726AFF]/40 text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-8"
        >
          <span className="text-[#726AFF]">/</span>
          <span>Opportunities</span>
          <span className="text-white/15">·</span>
          <span>Founding team</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.08 }}
          className="font-heading font-bold tracking-tight text-[#EDEDF0] leading-[1.02] text-[clamp(2.75rem,7vw,5.5rem)] max-w-4xl"
        >
          Build our
          <br />
          <span className="text-[#726AFF]">sales floor.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.18 }}
          className="mt-8 max-w-xl text-lg sm:text-xl text-[#8888A0] leading-relaxed"
        >
          We&apos;re hiring our founding sales team — the setters, closers, and
          account managers who&apos;ll turn a growing book of business into a
          revenue engine. Get in early, build the playbook, own your upside.
        </motion.p>

        {/* Readout chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.28 }}
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-sm"
        >
          <div className="flex items-center gap-2.5">
            <motion.span
              className="w-2 h-2 rounded-full bg-[#726AFF]"
              style={{ boxShadow: "0 0 10px #726AFF" }}
              animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[#EDEDF0] font-bold">
              {String(openCount).padStart(2, "0")}
            </span>
            <span className="text-white/30 uppercase tracking-wider">
              Open seats
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[#726AFF]">&gt;</span>
            <span className="text-[#EDEDF0] font-bold">OTE $150K+</span>
            <span className="text-white/30 uppercase tracking-wider">
              Uncapped
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[#726AFF]">&gt;</span>
            <span className="text-[#EDEDF0] font-bold">100%</span>
            <span className="text-white/30 uppercase tracking-wider">
              Remote · US
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
