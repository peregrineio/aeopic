"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mesh-gradient-dark py-24 md:py-36 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary/12 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#726AFF]/30 to-transparent z-20" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="pricing-eyebrow mb-6 text-[#726AFF]/80">
            Ready When You Are
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-[-0.03em] mb-4 leading-[1.05]">
            Ready to Talk About Your Project?
          </h2>
          <p className="text-lg text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            No sales pitch. No obligation. Just a straightforward conversation
            about what&apos;s possible.
          </p>

          <Link
            href="/start"
            className="group cta-gradient footer-cta-shimmer text-white font-semibold px-12 py-5 rounded-xl shadow-xl shadow-primary/30 text-lg mt-10 inline-flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Book Your Strategy Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="mt-8">
            <a
              href="mailto:admin@aeopic.com"
              className="text-white/40 inline-flex items-center gap-2 hover:text-white/70 transition-colors email-glow"
            >
              <Mail className="h-4 w-4" />
              admin@aeopic.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/30 text-xs mt-5 font-mono tracking-wider">
            <MapPin className="h-4 w-4" />
            <span>
              We respond within 24 hours. Houston-based. Remote-friendly.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
