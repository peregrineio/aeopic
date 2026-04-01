"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp, Mail, Sparkles } from "lucide-react";

export function CanvasCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-32 lg:py-40 bg-[#0A0A0C] relative overflow-hidden" ref={ref}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#726AFF]/30 via-[#9333EA]/20 to-[#726AFF]/10 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#726AFF]/10 blur-[80px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#9333EA]/10 blur-[80px]"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#726AFF]/10 border border-[#726AFF]/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#726AFF]" />
            <span className="text-sm font-medium text-[#726AFF]">Ready to start?</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Let&apos;s build
            <br />
            <span className="bg-gradient-to-r from-[#726AFF] via-[#9333EA] to-[#726AFF] bg-clip-text text-transparent">
              something great.
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/40 mb-12 max-w-2xl mx-auto">
            No sales pitch. No obligation. Just a conversation about what&apos;s possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#726AFF] to-[#9333EA] text-white font-semibold text-lg shadow-2xl shadow-[#726AFF]/25 hover:shadow-[#726AFF]/40 transition-all cursor-pointer overflow-hidden"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="relative z-10">Back to Form</span>
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>

            <motion.a
              href="mailto:contact@aeopic.com"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-4 text-white/60 hover:text-white font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@aeopic.com
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-sm text-white/30"
          >
            We typically respond within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
