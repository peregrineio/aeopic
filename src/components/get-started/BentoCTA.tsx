"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function BentoCTA() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="py-20 bg-[var(--bento-bg)] bento-grid-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--bento-accent)] rounded-[var(--bento-radius)] p-12 text-center
            text-white relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full
            bg-white/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full
            bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
              Ready to Start?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
              Fill out the form above. We'll get back to you within 24 hours.
            </p>
            <Button
              onClick={scrollToTop}
              size="lg"
              className="bg-white text-[var(--bento-accent)] hover:bg-white/90
                px-8 h-12 rounded-lg font-semibold"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Form
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
