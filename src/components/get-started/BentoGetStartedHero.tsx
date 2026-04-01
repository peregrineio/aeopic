"use client";

import { motion } from "framer-motion";
import { BentoWizardForm } from "./BentoWizardForm";

export function BentoGetStartedHero() {
  return (
    <section className="min-h-screen bg-[var(--bento-bg)] bento-grid-bg py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Text - Full Width Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-8 lg:p-12 mb-6
            border border-[var(--bento-border)] shadow-[var(--bento-shadow)]"
        >
          <span className="text-sm font-medium text-[var(--bento-accent)] tracking-wide">
            Custom Software Studio - Houston, TX
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--bento-text)]
            leading-[1.1] tracking-tight font-heading">
            Tell Us What You Need.<br />
            <span className="text-[var(--bento-text-secondary)]">We'll Show You What's Possible.</span>
          </h1>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          {/* Left: Form Card (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-8
              border border-[var(--bento-border)] shadow-[var(--bento-shadow)]
              row-span-2 lg:row-span-1"
          >
            <BentoWizardForm />
          </motion.div>

          {/* Right: Stacked Bento Boxes */}
          <div className="flex flex-col gap-6">
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stat Box 1 */}
              <div className="bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-6
                border border-[var(--bento-border)] shadow-[var(--bento-shadow)]
                hover:shadow-[var(--bento-shadow-hover)] hover:border-[var(--bento-border-hover)]
                transition-all duration-300">
                <span className="text-3xl lg:text-4xl font-bold text-[var(--bento-accent)] font-heading">50+</span>
                <p className="mt-1 text-sm text-[var(--bento-text-secondary)]">Projects Delivered</p>
              </div>

              {/* Stat Box 2 */}
              <div className="bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-6
                border border-[var(--bento-border)] shadow-[var(--bento-shadow)]
                hover:shadow-[var(--bento-shadow-hover)] hover:border-[var(--bento-border-hover)]
                transition-all duration-300">
                <span className="text-3xl lg:text-4xl font-bold text-[var(--bento-accent)] font-heading">100%</span>
                <p className="mt-1 text-sm text-[var(--bento-text-secondary)]">Code Ownership</p>
              </div>
            </motion.div>

            {/* Promise Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 bg-[var(--bento-card)] rounded-[var(--bento-radius)] p-6
                border border-[var(--bento-border)] shadow-[var(--bento-shadow)]
                flex flex-col justify-center"
            >
              <p className="text-lg lg:text-xl text-[var(--bento-text)] leading-relaxed">
                "We respond within <span className="font-semibold text-[var(--bento-accent)]">24 hours</span>.
                No sales pitch. No obligation. Just a conversation about what's possible."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--bento-accent-soft)]
                  flex items-center justify-center">
                  <span className="text-[var(--bento-accent)] font-semibold">S</span>
                </div>
                <div>
                  <p className="font-medium text-[var(--bento-text)]">Sam Shahin</p>
                  <p className="text-sm text-[var(--bento-text-muted)]">Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
