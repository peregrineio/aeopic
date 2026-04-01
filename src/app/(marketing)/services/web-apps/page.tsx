"use client";

import {
  Code2,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Rocket,
  Wrench,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";

const painPoints = [
  {
    problem: "Juggling 5+ different tools that don't talk to each other",
    solution: "One unified platform with everything connected — CRM, scheduling, invoicing, all in sync",
  },
  {
    problem: "Manual data entry eating up hours every week",
    solution: "Automated workflows that move data where it needs to go, no copy-paste required",
  },
  {
    problem: "No real-time visibility into business operations",
    solution: "Live dashboards showing exactly what's happening across your entire business",
  },
  {
    problem: "Paying monthly fees for software you don't fully own",
    solution: "100% code ownership — no vendor lock-in, no surprise price hikes, yours forever",
  },
  {
    problem: "Off-the-shelf solutions that don't fit your workflow",
    solution: "Custom-built platforms designed around how YOUR business actually operates",
  },
  {
    problem: "Scaling means breaking everything and starting over",
    solution: "Architecture built for growth — handle 10x the load without rebuilding",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Operations Dashboard",
    description: "Central command for your entire business. Jobs, customers, revenue — all in one view.",
    color: "#726AFF",
  },
  {
    icon: Users,
    title: "Customer Portal",
    description: "Let customers book, pay, and track orders themselves. Less phone calls, happier clients.",
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Know exactly what's working. Revenue trends, team performance, customer insights.",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Set it and forget it. Invoices, reminders, follow-ups — all on autopilot.",
    color: "#F59E0B",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Email, SMS, chat — all customer conversations in one place with full history.",
    color: "#8B5CF6",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, role-based access, audit logs. Your data stays yours.",
    color: "#EF4444",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "We map your current workflow, pain points, and goals",
    icon: Lightbulb,
  },
  {
    title: "Blueprint",
    description: "Design the system architecture and user experience",
    icon: Code2,
  },
  {
    title: "Build",
    description: "Develop in sprints with weekly demos and feedback",
    icon: Wrench,
  },
  {
    title: "Launch",
    description: "Deploy, train your team, and provide ongoing support",
    icon: Rocket,
  },
];

const stats = [
  { value: "40+", label: "Hours Saved Weekly", trend: "Per client average" },
  { value: "85%", label: "Revenue Increase", trend: "First year" },
  { value: "100%", label: "Code Ownership", trend: "Yours forever" },
  { value: "24/7", label: "System Uptime", trend: "99.9% guarantee" },
];

const faqs = [
  {
    question: "How long does a custom web app take to build?",
    answer:
      "Most projects launch in 8-12 weeks. We work in sprints, so you'll see progress every week and can provide feedback throughout the process.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. You own everything we build. The code, the design, the infrastructure — it's all yours.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer ongoing support and maintenance plans. Most clients keep us on retainer for updates, new features, and optimization.",
  },
  {
    question: "Can you work with my existing systems?",
    answer:
      "Absolutely. We specialize in building platforms that integrate with your existing tools — CRMs, payment processors, inventory systems, and more.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "We offer monthly retainer plans that include bug fixes, performance monitoring, security updates, and a set number of hours for new features or improvements.",
  },
];

export default function WebAppsPage() {
  return (
    <ServicePageTemplate
      service="web-apps"
      eyebrow="Custom Development"
      headline="Custom Web Applications"
      subheadline="Platforms built around your workflow, not the other way around. Full-stack systems designed to scale with your business."
      painPoints={painPoints}
      capabilities={capabilities}
      processSteps={processSteps}
      stats={stats}
      faqs={faqs}
      ctaHeadline="Ready to Build Your Custom Platform?"
      ctaSubheadline="Tell us what you need. We'll show you what's possible."
    />
  );
}
