"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail } from "lucide-react";

export function FinalCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-warm)" }}
    >
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-[#18181B] mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#52525B] mb-8"
          >
            No sales pitch. No obligation. Just a conversation about what's possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToTop}
              size="lg"
              className="text-white px-8 py-6 text-base font-medium group"
              style={{ backgroundColor: "var(--ink)" }}
            >
              Fill Out the Form
              <ArrowUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#E4E4E7] text-[#52525B] hover:border-[var(--ink)] hover:text-[var(--ink)] px-8 py-6 text-base font-medium"
            >
              <a href="mailto:contact@aeopic.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@aeopic.com
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-[#A1A1AA] mt-6"
          >
            We typically respond within 24 hours.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
