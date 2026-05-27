"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const badges = [
  "SOC 2 Type II Infrastructure",
  "ISO 27001 Certified AI",
  "HIPAA BAA Available",
  "Zero Data Retention",
];

export function TrustStrip() {
  return (
    <section className="py-6 bg-[#0A0A0C] border-y border-white/[0.05]">
      <div className="container-site">
        <Link href="/security" className="group">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            <div className="flex items-center gap-2 text-[#726AFF]">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium tracking-widest uppercase">
                Trusted By Design
              </span>
            </div>
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-white/30 text-xs font-medium tracking-wide group-hover:text-white/50 transition-colors"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
