"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  openCount: number;
}

const ROLE_BADGES = [
  "Appointment Setting",
  "Sales Development",
  "Closing / AE",
  "Account Management",
  "Client Success",
  "Uncapped Upside",
];

export function OpportunitiesHero({ openCount }: HeroProps) {
  const reduce = useReducedMotion();
  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0F1226_0%,#2d1f6b_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(114,106,255,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-white sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="font-bold tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05 }}
        >
          Build Our Sales Floor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          We&apos;re hiring our founding sales team — the setters, closers, and
          account managers who&apos;ll turn a growing book of business into a
          revenue engine. Get in early, build the playbook, own your upside.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.2 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {ROLE_BADGES.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduce ? 0 : 0.3 }}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70"
        >
          <span>Texas-Based, Nationwide Reach</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Remote-First Culture</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>
            <span className="font-semibold text-white">
              {openCount} Open Opportunities
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
