"use client";

import { motion } from "framer-motion";
import { GradientWizardForm } from "./GradientWizardForm";
import { Sparkles, Shield, Clock } from "lucide-react";

export function GradientAtmosphereHero() {
  return (
    <section className="min-h-screen gradient-atmosphere noise-overlay-gradient relative">
      {/* Floating orbs for depth */}
      <div className="floating-orb w-[500px] h-[500px] bg-violet-600/30 top-[-10%] left-[-10%]" />
      <div
        className="floating-orb w-[400px] h-[400px] bg-indigo-600/25 bottom-[10%] right-[-5%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="floating-orb w-[300px] h-[300px] bg-purple-500/20 top-[50%] left-[60%]"
        style={{ animationDelay: "-10s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/10 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white/80 font-medium">
              Custom Software Studio - Houston, TX
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Tell Us What You Need.
            <br />
            <span
              className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400
              bg-clip-text text-transparent"
            >
              We&apos;ll Build It.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg lg:text-xl text-white/60 max-w-2xl mx-auto"
          >
            No sales pitch. No obligation. Just a conversation about what&apos;s
            possible for your business.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong p-8 lg:p-10"
          >
            <GradientWizardForm />
          </motion.div>

          {/* Right: Trust Cards Stack */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card-gradient p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600
                  flex items-center justify-center shrink-0"
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    24-Hour Response
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    We review every submission personally and get back to you
                    fast.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card-gradient p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600
                  flex items-center justify-center shrink-0"
                >
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    100% Code Ownership
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    Your code, your data, yours forever. No lock-in, no
                    licensing.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card-gradient p-6"
            >
              <div className="text-center">
                <div
                  className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400
                  bg-clip-text text-transparent"
                >
                  8-12 Weeks
                </div>
                <p className="text-white/50 text-sm mt-1">
                  Average time to launch with weekly demos
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
