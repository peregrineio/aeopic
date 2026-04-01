"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, Zap } from "lucide-react";

const trustItems = [
  {
    icon: Building2,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "100%",
    label: "Code Ownership",
  },
  {
    icon: Award,
    value: "8-12",
    label: "Week Delivery",
  },
  {
    icon: Zap,
    value: "24hr",
    label: "Response Time",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-[#E4E4E7]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: "var(--ink-light)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--ink)" }} />
                </div>
                <div
                  className="font-heading font-bold text-2xl md:text-3xl mb-1"
                  style={{ color: "var(--ink)" }}
                >
                  {item.value}
                </div>
                <div className="text-sm text-[#52525B]">{item.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
