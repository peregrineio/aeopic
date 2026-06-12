"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * System status band — one continuous telemetry stream replacing the old
 * stacked stats marquee + trust strip. Reads like the header of a console.
 */

const streamItems = [
  { value: "4–8", label: "weeks avg. to launch" },
  { value: "SOC 2", label: "Type II infrastructure" },
  { value: "100%", label: "code ownership, upon completion" },
  { value: "ISO 27001", label: "certified AI" },
  { value: "10+", label: "years combined engineering" },
  { value: "HIPAA", label: "BAA available" },
  { value: "0", label: "proprietary frameworks" },
  { value: "ZDR", label: "zero data retention" },
];

const duplicated = [...streamItems, ...streamItems, ...streamItems];

export function StatsBar() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-[#0A0A0C] border-y border-white/10 overflow-hidden">
      <Link
        href="/security"
        className="flex items-stretch group"
        aria-label="Aeopic system stats and security certifications"
      >
        {/* Fixed status block */}
        <div className="hidden md:flex items-center gap-3 px-6 lg:px-8 py-5 border-r border-white/10 bg-[#0A0A0C] relative z-20 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 whitespace-nowrap">
            Aeopic / Systems nominal
          </span>
        </div>

        {/* Telemetry stream */}
        <div
          className="relative flex-1 py-5 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-0 whitespace-nowrap"
            animate={{ x: isPaused ? undefined : ["0%", "-33.333%"] }}
            transition={{ x: { duration: 30, ease: "linear", repeat: Infinity } }}
          >
            {duplicated.map((item, index) => (
              <div key={`${item.value}-${index}`} className="flex items-center flex-shrink-0">
                <span className="font-mono text-sm md:text-base font-bold text-[#726AFF] px-3">
                  {item.value}
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40 group-hover:text-white/60 transition-colors">
                  {item.label}
                </span>
                <span className="mx-8 text-white/15 font-mono">/</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Link>
    </section>
  );
}
