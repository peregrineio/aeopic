"use client";

import { motion } from "framer-motion";

const proofItems = [
  "Houston-Based Team",
  "100% Code Ownership",
  "8-12 Week Launch",
  "24hr Response",
  "No Vendor Lock-in",
  "Enterprise Security",
  "Dedicated Support",
  "Weekly Demos",
];

export function SocialProofTicker() {
  const duplicatedItems = [...proofItems, ...proofItems, ...proofItems];

  return (
    <section className="py-5 bg-[#0A0A0C] border-y border-white/[0.05] overflow-hidden">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-12">
              <span className="text-white/50 font-medium text-sm tracking-wide">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#726AFF]/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
