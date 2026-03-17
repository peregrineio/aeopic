"use client";

import { useState } from "react";
import {
  Ticket,
  BookOpen,
  MessageSquare,
  CreditCard,
  Brain,
  TrendingUp,
  Lock,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

const aiSolutions = [
  {
    icon: Ticket,
    title: "Ticket Management Systems",
    subtitle: "AI-categorized, auto-routed, priority-scored",
    color: "#726AFF",
    features: [
      "Smart categorization",
      "Auto-assignment",
      "SLA tracking",
      "Customer context",
      "Escalation rules",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Systems",
    subtitle: "AI-searchable, auto-suggested, self-updating",
    color: "#3b82f6",
    features: [
      "Natural language search",
      "Auto-generated answers",
      "Content suggestions",
      "Search analytics",
    ],
  },
  {
    icon: MessageSquare,
    title: "Customer Support (Phone & Chat)",
    subtitle: "AI-assisted responses, sentiment analysis, escalation",
    color: "#38a169",
    features: [
      "Chat widget",
      "Phone integration",
      "Response suggestions",
      "Sentiment detection",
      "Human handoff",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    subtitle: "Automated invoicing, subscription management",
    color: "#f59e0b",
    features: [
      "Stripe integration",
      "Recurring billing",
      "Dunning management",
      "Payment links",
      "Financial reporting",
    ],
  },
];

const aiCapabilities = [
  {
    icon: Brain,
    title: "Understands Your Business",
    gradientFrom: "#726AFF",
    gradientTo: "#5B54D6",
    shortText: "Your AI tools learn your specific workflow, customer patterns, and business rules.",
    expandedText: "Unlike generic AI, our tools are trained on YOUR data. They know your services, your pricing, your customer history. When a customer asks a question, the AI doesn't give a generic answer — it gives YOUR answer, pulling from your knowledge base, service catalog, and past interactions.",
  },
  {
    icon: TrendingUp,
    title: "Gets Smarter Over Time",
    gradientFrom: "#3b82f6",
    gradientTo: "#2563eb",
    shortText: "Every interaction makes the system more accurate and more helpful.",
    expandedText: "Our AI tools analyze patterns in your tickets, customer inquiries, and support interactions. Common questions get faster answers. Recurring issues get flagged before they become problems. The longer you use it, the better it gets — without any manual training from you.",
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    gradientFrom: "#38a169",
    gradientTo: "#2f855a",
    shortText: "Bank-level encryption. No data sharing. Full compliance.",
    expandedText: "Your customer data never leaves your platform. We use end-to-end encryption, role-based access controls, and enterprise-level security practices. Your data isn't used to train AI models. It's not shared with anyone. It's yours and only yours.",
  },
];

const faqs = [
  {
    question: "Is my data safe with AI tools?",
    answer:
      "Absolutely. We use enterprise-grade security practices and can configure your AI systems to keep sensitive data on-premise or in private cloud environments. Your data is never used to train external models.",
  },
  {
    question: "How accurate is the AI?",
    answer:
      "Accuracy depends on the use case and training data. We start with proven models and fine-tune them for your specific business. Most systems achieve 85-95% accuracy and improve over time with feedback.",
  },
  {
    question: "Can the AI be customized for my business?",
    answer:
      "Yes, that's the whole point. We train systems on your data, your terminology, and your processes. The AI learns your business, not generic patterns.",
  },
  {
    question: "What happens when AI can't handle something?",
    answer:
      "We build smart escalation paths. When confidence is low or the request is complex, the system routes to a human. You always have control.",
  },
];

function AICapabilityCard({ capability, isExpanded, onToggle }: {
  capability: typeof aiCapabilities[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = capability.icon;

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onToggle}
    >
      {/* Gradient header */}
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${capability.gradientFrom}, ${capability.gradientTo})`,
        }}
      />

      <div className="p-6">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{
            background: `linear-gradient(135deg, ${capability.gradientFrom}, ${capability.gradientTo})`,
          }}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2">
          {capability.title}
        </h3>

        {/* Short text */}
        <p className="text-muted-foreground text-sm mb-4">
          {capability.shortText}
        </p>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>{isExpanded ? "Show less" : "Learn more"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-foreground text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                {capability.expandedText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AIToolsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <>
      <ServiceHero
        eyebrow="AI Solutions"
        headline="AI-Powered Business Tools"
        subheadline="Stop drowning in tickets, support requests, and repetitive work. Let AI handle it."
      />

      {/* The Opportunity */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="AI Isn't the Future — It's Right Now"
            centered
          />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
            Businesses that adopt AI tools gain competitive advantages: faster
            response times, lower operational costs, better customer experience.
            The question isn&apos;t whether to use AI — it&apos;s how fast you can
            implement it.
          </p>
        </div>
      </section>

      {/* What We Build - with colors */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader headline="What We Build" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {aiSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ borderTopColor: solution.color, borderTopWidth: "4px" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${solution.color}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: solution.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[#F6F7FB] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities - Expandable Cards */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="Designed Around AI, Not Bolted On"
            centered
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We don&apos;t add AI to existing tools. We architect platforms where AI
            is a foundational layer — understanding context, learning patterns,
            and getting smarter over time.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aiCapabilities.map((capability, index) => (
              <AICapabilityCard
                key={capability.title}
                capability={capability}
                isExpanded={expandedCard === index}
                onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="ai-tools" />

      <CTASection
        headline="Ready to Put AI to Work?"
        subheadline="Tell us what's slowing you down. We'll show you how AI can help."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
