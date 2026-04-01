"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById("estimate-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F1226] via-[#1a1d3d] to-[#0F1226]">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-lg mb-8"
          >
            No sales pitch. No obligation. Just a conversation about what's possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#0F1226] hover:bg-white/90 px-8 py-6 text-base font-medium group"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="pt-2">
              <a
                href="mailto:contact@aeopic.com"
                className="text-primary hover:underline font-medium"
              >
                contact@aeopic.com
              </a>
            </div>

            <p className="text-white/50 text-sm">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
