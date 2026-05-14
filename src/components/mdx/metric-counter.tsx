"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MetricCounterProps {
  before: number;
  after: number;
  unit: string;
  label: string;
  improvement: string;
}

function useCountUp(target: number, isInView: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return value;
}

export function MetricCounter({
  before,
  after,
  unit,
  label,
  improvement,
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const beforeVal = useCountUp(before, isInView);
  const afterVal = useCountUp(after, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#F9F9FB] rounded-xl p-6 my-8"
    >
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        {/* Before */}
        <div className="text-center flex-1">
          <div className="text-3xl sm:text-4xl font-heading font-bold text-[#9CA3AF]">
            {beforeVal}
            <span className="text-lg sm:text-xl">{unit}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">{label}</p>
        </div>

        {/* Arrow */}
        <div className="shrink-0">
          <ArrowRight className="h-5 w-5 text-[#9CA3AF]" />
        </div>

        {/* After */}
        <div className="text-center flex-1">
          <div className="text-3xl sm:text-4xl font-heading font-bold text-[#726AFF]">
            {afterVal}
            <span className="text-lg sm:text-xl">{unit}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] mt-1">{label}</p>
        </div>
      </div>

      {/* Improvement badge */}
      <div className="flex justify-center mt-4">
        <span className="bg-[#726AFF]/10 text-[#726AFF] text-sm font-semibold px-4 py-1.5 rounded-full">
          {improvement}
        </span>
      </div>
    </motion.div>
  );
}
