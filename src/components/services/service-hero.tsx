"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  gradient?: boolean;
}

export function ServiceHero({
  eyebrow,
  headline,
  subheadline,
  gradient = false,
}: ServiceHeroProps) {
  return (
    <section
      className={cn(
        "pt-32 pb-16 md:pt-40 md:pb-24",
        gradient ? "hero-gradient" : "accent-gradient"
      )}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-wider mb-3",
                gradient ? "text-primary-foreground/70" : "text-primary"
              )}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={cn("mb-4", gradient ? "text-white" : "text-foreground")}
          >
            {headline}
          </h1>
          <p
            className={cn(
              "text-lg md:text-xl",
              gradient ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
