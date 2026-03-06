"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Clock, Shield, Zap } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "8-12",
    suffix: "Weeks",
    label: "Average Time to Launch",
  },
  {
    icon: Shield,
    value: "100",
    suffix: "%",
    label: "Code Ownership",
  },
  {
    icon: Code,
    value: "10",
    suffix: "+",
    label: "Years Combined Experience",
  },
  {
    icon: Zap,
    value: "Modern",
    suffix: "",
    label: "Stack & Best Practices",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SocialProof() {
  return (
    <section className="section-padding-sm bg-white relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Card with gradient border effect */}
          <div className="gradient-border">
            <div className="relative p-8 md:p-12 lg:p-16 rounded-[inherit] bg-gradient-to-br from-white to-[hsl(var(--neutral-bg))]">
              {/* Background accent */}
              <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className={`relative text-center ${
                      index < stats.length - 1
                        ? "lg:border-r lg:border-border/50"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Value */}
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        {stat.value}
                      </span>
                      {stat.suffix && (
                        <span className="text-xl md:text-2xl font-heading font-bold text-primary">
                          {stat.suffix}
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
