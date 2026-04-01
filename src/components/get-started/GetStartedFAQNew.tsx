"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Every project is different, so our pricing is always custom. After a quick discovery call, we'll give you a clear, fixed price - no vague ranges, no hidden fees. Most projects range from a few thousand to tens of thousands depending on scope.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Most projects launch in 8-12 weeks. We work in weekly sprints, so you see real progress every week - not just a big reveal at the end. Marketing services are ongoing monthly.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes - 100%. You own everything we build. The code, the design, the data - it's all yours. No vendor lock-in, no proprietary platforms. Even if you stop working with us, you keep everything.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer ongoing support and monthly retainer plans. Most clients keep us on for new features, optimization, and marketing. Bug fixes are always included.",
  },
  {
    question: "Can I see a proposal before committing?",
    answer:
      "Absolutely. The discovery call and detailed proposal are completely free. We'll outline exactly what we'd build, the timeline, and the cost - no obligation.",
  },
];

export function GetStartedFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "var(--ink-light)" }}
          >
            <span
              className="font-mono text-xs font-medium tracking-wider uppercase"
              style={{ color: "var(--ink)" }}
            >
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-[#18181B] mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#52525B]"
          >
            Everything you need to know before getting started.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E4E4E7] rounded-xl px-6 bg-white data-[state=open]:border-[var(--ink)]/30 data-[state=open]:shadow-sm transition-all duration-200"
              >
                <AccordionTrigger
                  className="text-left font-heading font-medium text-[#18181B] hover:no-underline py-5"
                  style={{
                    // Override the default styles for open state
                  }}
                >
                  <span className="data-[state=open]:text-[var(--ink)]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#52525B] pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
