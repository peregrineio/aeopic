"use client";

import { motion } from "framer-motion";
import { CanvasWizardForm } from "./CanvasWizardForm";

export function CanvasHero() {
  return (
    <section className="min-h-screen bg-[#0A0A0C] relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#726AFF]/20 blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#726AFF]/15 blur-[100px]"
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#9333EA]/10 blur-[80px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 min-h-screen items-center py-16 lg:py-0">

          {/* Left: Value Proposition */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-3 mb-8">
                  <span className="h-px w-12 bg-gradient-to-r from-[#726AFF] to-transparent" />
                  <span className="text-[#726AFF] text-sm font-semibold tracking-[0.2em] uppercase">
                    Custom Software Studio
                  </span>
                </span>
              </motion.div>

              {/* Giant headline */}
              <h1 className="text-white leading-[0.95] tracking-[-0.03em] mb-8">
                <motion.span
                  className="block text-[clamp(2.5rem,6vw,4.5rem)] font-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Tell us what
                </motion.span>
                <motion.span
                  className="block text-[clamp(2.5rem,6vw,4.5rem)] font-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                >
                  you need.
                </motion.span>
                <motion.span
                  className="block text-[clamp(2.5rem,6vw,4.5rem)] font-bold bg-gradient-to-r from-[#726AFF] via-[#9333EA] to-[#726AFF] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We&apos;ll build it.
                </motion.span>
              </h1>

              <motion.p
                className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-lg mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Share your vision. We&apos;ll show you exactly what&apos;s possible — no pitch, no pressure.
              </motion.p>

              {/* Stats row - animated counters */}
              <motion.div
                className="flex flex-wrap gap-8 lg:gap-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { value: "24", suffix: "hr", label: "Response Time" },
                  { value: "100", suffix: "%", label: "Code Ownership" },
                  { value: "8-12", suffix: "wk", label: "Launch Time" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#726AFF] transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="text-lg font-medium text-[#726AFF]">{stat.suffix}</span>
                    </div>
                    <span className="text-sm text-white/40 mt-1 block">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Glassmorphism Form */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#726AFF]/20 via-[#9333EA]/10 to-[#726AFF]/20 rounded-[2.5rem] blur-2xl opacity-60" />

              {/* Glass card */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-8 lg:p-10 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <CanvasWizardForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
