"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-0 md:pt-40 md:pb-0 overflow-hidden bg-[#0F1226]">
      {/* Purple radial glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full bg-[#726AFF]/10 blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="container-site">
        <div className="relative z-20 flex flex-col lg:flex-row items-start lg:items-center gap-12 pb-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-2xl"
          >
            <p className="pricing-eyebrow mb-4 text-[#726AFF]">
              Your Project — Houston, TX
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white tracking-[-0.03em] leading-[1.05]">
              Let&apos;s Build Something That Works For Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8">
              Every project is different. Tell us about yours and we&apos;ll
              show you what&apos;s possible — with clear scope, timeline, and
              investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#estimator"
                className="cta-gradient text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 text-center"
              >
                Scope Your Project
              </a>
              <a
                href="/start"
                className="border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/[0.08] hover:border-white/40 transition-all text-center backdrop-blur-sm"
              >
                Book a Strategy Call
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50 mt-6">
              <MapPin className="h-4 w-4" />
              <span>
                Houston-based. No sales pitch. We respond within 24 hours.
              </span>
            </div>
          </motion.div>

          {/* Right: Workshop stat cards — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden lg:flex flex-col items-end gap-6 shrink-0"
          >
            <div className="pricing-card-dark p-5 w-[200px]">
              <p className="pricing-eyebrow mb-2">Response time</p>
              <p className="text-white text-2xl font-heading font-bold tracking-[-0.03em]">
                &lt; 24hrs
              </p>
            </div>
            <div className="pricing-card-dark p-5 w-[200px]">
              <p className="pricing-eyebrow mb-2">Code ownership</p>
              <p className="text-white text-2xl font-heading font-bold tracking-[-0.03em]">
                100%
              </p>
            </div>
            <div className="pricing-card-dark p-5 w-[200px]">
              <p className="pricing-eyebrow mb-2">Vendor lock-in</p>
              <p className="text-white text-2xl font-heading font-bold tracking-[-0.03em]">
                Zero
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
