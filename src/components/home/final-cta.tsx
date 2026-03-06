"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding mesh-gradient-dark relative overflow-hidden noise-overlay">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[hsl(260_80%_60%_/_0.12)] blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_hsl(243_100%_71%_/_0.1)_0%,_transparent_60%)]" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-glow mb-8"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="eyebrow">Let&apos;s Talk</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-6"
          >
            Ready to Build Something
            <br />
            <span className="text-gradient">That Actually Works?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Tell us what you need. No sales pitch, no pressure — just a conversation about what&apos;s possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[hsl(var(--deep-bg))] hover:bg-white/95 px-8 py-7 text-base font-medium shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <Link href="/start" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/5 hover:border-white/40 bg-transparent px-8 py-7 text-base font-medium transition-all duration-300"
            >
              <Link href="/work">See Our Work</Link>
            </Button>
          </motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-sm text-white/40"
          >
            Usually respond within 24 hours. Houston-based. Remote-friendly.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
