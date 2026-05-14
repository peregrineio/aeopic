"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BottomCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0F1226] rounded-2xl p-8 md:p-12 mt-16"
    >
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-[-0.025em]">
        Ready to build something like this?
      </h3>
      <p className="text-white/50 mt-3">
        Let&apos;s talk about your project.
      </p>
      <Link
        href="/start"
        className="group cta-gradient text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 mt-6 inline-flex items-center gap-2 hover:shadow-xl hover:shadow-primary/40 transition-all"
      >
        Book a Strategy Call
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
