"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "50+", label: "Projects Shipped" },
  { value: "8+", label: "Industries Served" },
  { value: "100%", label: "Client Retention" },
  { value: "Houston, TX", label: "Based & Operating" },
];

function AnimatedStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const target = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";
  const [displayed, setDisplayed] = useState(numericMatch ? "0" + suffix : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !numericMatch || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1200;
    const startTime = performance.now();
    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayed(current + suffix);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, target, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center py-6 px-4 group"
    >
      <p className="text-4xl md:text-5xl font-heading font-bold tracking-[-0.04em] text-[#0F1226] group-hover:text-[#726AFF] transition-colors duration-300">
        {numericMatch ? displayed : value}
      </p>
      <p className="pricing-eyebrow mt-2 text-[#726AFF]/60">{label}</p>
    </motion.div>
  );
}

export function ValueAnchor() {
  return (
    <section className="bg-white py-12 border-b border-[#E8E8F0]">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E8E8F0]">
          {metrics.map((metric, index) => (
            <AnimatedStat
              key={metric.label}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
