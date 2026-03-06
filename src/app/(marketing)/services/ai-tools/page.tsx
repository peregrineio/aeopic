import type { Metadata } from "next";
import {
  Ticket,
  BookOpen,
  MessageSquare,
  CreditCard,
  Brain,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

export const metadata: Metadata = {
  title: "AI-Powered Business Tools | Aeopic",
  description:
    "Smart ticket systems, knowledge bases, customer support — AI that works for you, not against you.",
};

const aiSolutions = [
  {
    icon: Ticket,
    title: "Ticket Management Systems",
    subtitle: "AI-categorized, auto-routed, priority-scored",
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
    features: [
      "Stripe integration",
      "Recurring billing",
      "Dunning management",
      "Payment links",
      "Financial reporting",
    ],
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

export default function AIToolsPage() {
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
            The question isn't whether to use AI — it's how fast you can
            implement it.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-[hsl(var(--neutral-bg))]">
        <div className="container-site">
          <SectionHeader headline="What We Build" centered />
          <div className="grid md:grid-cols-2 gap-8">
            {aiSolutions.map((solution) => (
              <div key={solution.title} className="premium-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-primary" />
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
                      className="px-3 py-1 bg-accent text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Fits In */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Designed Around AI, Not Bolted On"
            centered
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg mb-8">
              We don't add AI to existing tools. We architect platforms where AI
              is a foundational layer — understanding context, learning
              patterns, and getting smarter over time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Context-Aware</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Always Learning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Enterprise Secure</p>
              </div>
            </div>
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
