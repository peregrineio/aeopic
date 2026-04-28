"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Code2, Unlock } from "lucide-react";

const stats = [
  {
    value: "8–12",
    label: "Weeks avg. to launch",
    icon: Rocket,
  },
  {
    value: "100%",
    label: "Code ownership, always",
    icon: Shield,
  },
  {
    value: "10+",
    label: "Years combined engineering",
    icon: Code2,
  },
  {
    value: "0",
    label: "Vendor lock-in, ever",
    icon: Unlock,
  },
];

// Duplicate for seamless loop
const duplicatedStats = [...stats, ...stats, ...stats];

export function StatsBar() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#0A0A0A] border-y border-white/10 overflow-hidden">
      <div
        ref={containerRef}
        className="relative py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{
            x: isPaused ? undefined : ["0%", "-33.333%"],
          }}
          transition={{
            x: {
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {duplicatedStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={`${stat.value}-${index}`}
                className="flex items-center gap-4 flex-shrink-0 px-4"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#726AFF]/10 rounded-lg">
                  <Icon className="w-5 h-5 text-[#726AFF]" />
                </div>

                {/* Stat content */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>

                {/* Separator dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#726AFF]/40 ml-8" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
