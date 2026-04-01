"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function GetStartedHero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("estimate-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1226]/80 via-transparent to-[#0F1226]/90" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-grid opacity-15 z-[1]" />

      {/* Main content */}
      <div className="container-wide relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide uppercase">
                Custom Software Studio — Houston, TX
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Let's Build Your Business the Software It Actually Needs
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            Tell us what you need. We'll show you exactly what's possible — and what it'll cost. No sales pitch. No obligation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="cta-gradient hover:opacity-90 text-white border-0 px-8 py-6 text-base font-medium transition-all duration-300 group"
            >
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent px-8 py-6 text-base font-medium transition-all duration-300"
            >
              <Link href="mailto:contact@aeopic.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@aeopic.com
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "Houston-Based",
              "100% Code Ownership",
              "Respond in 24 Hours",
              "No Obligation",
            ].map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90"
              >
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F6F7FB] to-transparent" />
    </section>
  );
}
