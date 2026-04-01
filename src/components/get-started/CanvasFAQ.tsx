"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects launch in 8-12 weeks. You'll see weekly progress demos throughout development, so there are no surprises. We move fast without cutting corners.",
  },
  {
    q: "What does '100% code ownership' mean?",
    a: "You own everything we build — all source code, designs, and data. No vendor lock-in. No licensing fees. You can take it anywhere, hire anyone to work on it, or sell it. It's yours.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer maintenance plans that include updates, monitoring, bug fixes, and priority support. Most clients stay with us long-term because we become an extension of their team.",
  },
  {
    q: "What's your pricing model?",
    a: "We quote based on project scope and complexity. Most clients choose our subscription model for predictable monthly costs that include ongoing development and support.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Absolutely. We work with CRMs, payment processors, booking systems, accounting software, inventory management — whatever your business already uses. If it has an API, we can integrate it.",
  },
];

export function CanvasFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 lg:py-36 bg-[#0A0A0C] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#726AFF]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#726AFF]" />
            <span className="text-[#726AFF] text-sm font-semibold tracking-[0.2em] uppercase">
              FAQ
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#726AFF]" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Questions?
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white/[0.02] rounded-xl px-6 border border-white/[0.06] hover:border-white/[0.12] transition-colors data-[state=open]:border-[#726AFF]/30 data-[state=open]:bg-white/[0.04]"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-white hover:no-underline hover:text-[#726AFF] transition-colors [&[data-state=open]]:text-[#726AFF]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-white/50 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
