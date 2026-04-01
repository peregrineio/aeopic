"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle2 } from "lucide-react";
import { WizardForm } from "./WizardForm";

const trustPills = [
  { icon: Shield, label: "100% Code Ownership" },
  { icon: Clock, label: "Respond in 24 Hours" },
  { icon: CheckCircle2, label: "No Obligation" },
];

export function GetStartedHero() {
  return (
    <section
      className="relative min-h-screen py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-warm)" }}
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(114, 106, 255, 0.08) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "var(--ink-light)" }}
            >
              <span
                className="font-mono text-xs font-medium tracking-wider uppercase"
                style={{ color: "var(--ink)" }}
              >
                Custom Software Studio
              </span>
              <span className="text-[#A1A1AA]">|</span>
              <span className="text-xs text-[#52525B]">Houston, TX</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-bold text-[#18181B] mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Let's Build Your Business{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{ color: "var(--ink)" }}
                >
                  the Software
                </span>
                <span
                  className="absolute bottom-2 left-0 right-0 h-3 -z-0"
                  style={{
                    backgroundColor: "var(--ink)",
                    opacity: 0.15,
                    borderRadius: "2px",
                  }}
                />
              </span>{" "}
              It Actually Needs
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-[#52525B] mb-8 max-w-lg font-body leading-relaxed"
            >
              Tell us what you need. We'll show you exactly what's possible and what it'll cost.{" "}
              <span className="font-medium text-[#18181B]">No sales pitch. No obligation.</span>
            </motion.p>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {trustPills.map((pill, index) => {
                const Icon = pill.icon;
                return (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E4E4E7] bg-white"
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--ink)" }} />
                    <span className="text-sm text-[#52525B]">{pill.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Additional Trust Note - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block mt-12 pt-8 border-t border-[#E4E4E7]"
            >
              <p className="text-sm text-[#A1A1AA]">
                Trusted by service businesses across Texas. Your information is secure and will never be shared.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Form Card */}
            <div
              className="relative bg-white rounded-2xl p-8 md:p-10"
              style={{
                boxShadow: "0 25px 50px -12px var(--ink-glow), 0 0 0 1px rgba(228, 228, 231, 0.5)",
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-8 right-8 h-1 rounded-b-full"
                style={{ backgroundColor: "var(--ink)" }}
              />

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#18181B] mb-2">
                  Get Your Free Consultation
                </h2>
                <p className="text-[#52525B]">
                  Takes 2 minutes. We respond within 24 hours.
                </p>
              </div>

              {/* Wizard Form */}
              <WizardForm />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 md:-right-6 bg-white rounded-xl px-4 py-3 shadow-lg border border-[#E4E4E7]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--ink-light)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--ink)" }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#18181B]">Quick Response</p>
                  <p className="text-xs text-[#A1A1AA]">Usually within 24h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
