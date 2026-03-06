"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  variant?: "dark" | "light";
}

export function CTASection({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "section-padding relative overflow-hidden",
        isDark ? "mesh-gradient-dark noise-overlay" : "accent-gradient"
      )}
    >
      {/* Grid pattern */}
      <div
        className={cn(
          "absolute inset-0",
          isDark ? "dot-grid opacity-20" : "grid-pattern opacity-30"
        )}
      />

      {/* Decorative gradient orbs */}
      {isDark && (
        <>
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[hsl(260_80%_60%_/_0.1)] blur-[100px]" />
        </>
      )}

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn("mb-5", isDark ? "text-white" : "text-foreground")}
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-lg md:text-xl mb-10 max-w-2xl mx-auto",
              isDark ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "px-8 py-7 text-base font-medium transition-all duration-300 group",
                isDark
                  ? "bg-white text-[hsl(var(--deep-bg))] hover:bg-white/95 shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.3)]"
                  : "cta-gradient text-white hover:opacity-90"
              )}
            >
              <Link href={ctaHref} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
