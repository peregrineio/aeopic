"use client";

import {
  Brain,
  MessageSquare,
  Ticket,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  Lightbulb,
  Code2,
  Wrench,
  Rocket,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";

const painPoints = [
  {
    problem: "Drowning in support tickets with no way to prioritize",
    solution: "AI-powered categorization and routing that handles triage automatically",
  },
  {
    problem: "Customers waiting hours for answers to simple questions",
    solution: "Instant responses from AI trained on YOUR knowledge base and policies",
  },
  {
    problem: "Generic chatbots that frustrate more than they help",
    solution: "Context-aware AI that understands your business, products, and customer history",
  },
  {
    problem: "Spending hours on repetitive data entry and analysis",
    solution: "Automated workflows that extract, process, and act on data in real-time",
  },
  {
    problem: "Worried about AI making mistakes with sensitive data",
    solution: "Human-in-the-loop systems with confidence scoring and escalation rules",
  },
  {
    problem: "Off-the-shelf AI that doesn't understand your industry",
    solution: "Custom models fine-tuned on your data, terminology, and business rules",
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description: "Chat and voice support that handles 80% of inquiries automatically with smart escalation.",
    color: "#8B5CF6",
  },
  {
    icon: Ticket,
    title: "Intelligent Ticketing",
    description: "Auto-categorize, prioritize, and route tickets. SLA tracking and customer context built in.",
    color: "#726AFF",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base AI",
    description: "Natural language search that finds answers instantly. Self-updating from resolved tickets.",
    color: "#3B82F6",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Spot trends before they become problems. Churn prediction, demand forecasting, and more.",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Let AI handle the repetitive work. Data extraction, report generation, workflow triggers.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data stays private. On-premise options, encryption, and compliance built in.",
    color: "#EF4444",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Identify high-impact AI opportunities in your workflow",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description: "Architect the AI system with your data and rules",
    icon: Code2,
  },
  {
    title: "Train",
    description: "Fine-tune models on your specific use cases",
    icon: Wrench,
  },
  {
    title: "Deploy",
    description: "Launch with monitoring and continuous improvement",
    icon: Rocket,
  },
];

const stats = [
  { value: "80%", label: "Auto-Resolution Rate", trend: "For common inquiries" },
  { value: "< 5s", label: "Response Time", trend: "Average first response" },
  { value: "60%", label: "Cost Reduction", trend: "Support operations" },
  { value: "95%", label: "Accuracy Rate", trend: "After fine-tuning" },
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
  {
    question: "How long does implementation take?",
    answer:
      "Simple automations can be live in 2-4 weeks. Full AI support systems typically take 8-12 weeks to build, train, and deploy.",
  },
];

export default function AIToolsPage() {
  return (
    <ServicePageTemplate
      service="ai-tools"
      eyebrow="AI Solutions"
      headline="AI-Powered Business Tools"
      subheadline="Stop drowning in tickets, support requests, and repetitive work. Let AI handle it while you focus on growth."
      painPoints={painPoints}
      capabilities={capabilities}
      processSteps={processSteps}
      stats={stats}
      faqs={faqs}
      ctaHeadline="Ready to Put AI to Work?"
      ctaSubheadline="Tell us what's slowing you down. We'll show you how AI can help."
    />
  );
}
