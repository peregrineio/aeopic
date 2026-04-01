"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroDashboard } from "./hero-dashboard";

export function Hero() {
  return (
    <section className="relative hero-gradient min-h-[100vh] flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg-compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-grid opacity-20 z-[1]" />

      {/* Horizontal accent lines */}
      <div className="absolute left-0 right-0 top-[25%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-[2]" />
      <div className="absolute left-0 right-0 bottom-[20%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent z-[2]" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block z-[2]" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block z-[2]" />

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[15%] left-[10%] hidden lg:block z-[3]"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-[30%] right-[20%] hidden lg:block z-[3]"
      >
        <div className="w-3 h-3 rounded-full bg-primary/50 animate-float" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-[25%] left-[25%] hidden lg:block z-[3]"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
      </motion.div>

      {/* Main content */}
      <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-glow">
                <Sparkles className="w-4 h-4" />
                <span className="eyebrow">Custom Software Studio</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white text-center lg:text-left mb-6 lg:mb-8"
            >
              We Build the Software
              <br />
              <span className="text-gradient">Your Business</span>
              <br />
              Actually Needs
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 mb-10 lg:mb-12 font-light leading-relaxed"
            >
              Custom web applications, AI-powered tools, marketing that converts,
              and eCommerce that scales — built by engineers who ship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="cta-gradient hover:opacity-90 text-white border-0 px-8 py-7 text-base font-medium transition-all duration-300 group"
              >
                <Link href="/services" className="flex items-center gap-2">
                  See What We Build
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/5 hover:border-white/40 bg-transparent px-8 py-7 text-base font-medium transition-all duration-300"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 lg:mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1">100%</p>
                  <p className="text-sm text-white/50 font-mono uppercase tracking-wider">Code Ownership</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1">8-12</p>
                  <p className="text-sm text-white/50 font-mono uppercase tracking-wider">Weeks to Launch</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1">Modern</p>
                  <p className="text-sm text-white/50 font-mono uppercase tracking-wider">Stack</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="hidden lg:block">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--neutral-bg))] to-transparent" />
    </section>
  );
}
