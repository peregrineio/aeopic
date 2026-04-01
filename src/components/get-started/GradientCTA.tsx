"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export function GradientCTA() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-24 gradient-atmosphere noise-overlay-gradient relative">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Amazing?
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Fill out the form above and we&apos;ll get back to you within 24
            hours. No pitch. No pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToTop}
              className="btn-glow px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              <ArrowUp className="w-5 h-5" />
              Back to Form
            </button>
            <a
              href="mailto:contact@aeopic.com"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10
                transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              contact@aeopic.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
