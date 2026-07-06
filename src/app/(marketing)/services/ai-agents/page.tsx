"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Target,
  CalendarCheck,
  Cpu,
  Phone,
  Workflow,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$0.46", label: "Per AI Ticket vs $4.18 Human" },
  { value: "79%", label: "Companies Adopting AI Agents" },
  { value: "11%", label: "Actually in Production" },
  { value: "2x", label: "Success Rate With Expert Partner" },
  { value: "40%", label: "Fewer No-Shows" },
  { value: "30-50%", label: "More Qualified Leads" },
];

const agentTypes = [
  {
    icon: MessageSquare,
    id: "support-agent",
    title: "Customer Support Agents",
    description:
      "Handle 80% of inquiries autonomously. Smart escalation when human judgment is needed. Learns from every conversation.",
    metric: "$0.46",
    metricLabel: "per ticket vs $4.18 human",
    feed: [
      "→ Ticket #4821 received — billing question",
      "→ Retrieved account context from CRM",
      "✓ Resolved autonomously in 42s",
      "→ CSAT 5/5 logged, pattern saved",
    ],
  },
  {
    icon: Target,
    id: "lead-qualifier",
    title: "Lead Qualification Agents",
    description:
      "Engage prospects in seconds, qualify against your criteria, route to the right team member with full context.",
    metric: "30-50%",
    metricLabel: "more qualified leads",
    feed: [
      "→ New form submission — commercial roofing",
      "→ Scored 87/100 against your ICP",
      "✓ Routed to sales with full context",
      "→ Follow-up sequence queued for 9:00 AM",
    ],
  },
  {
    icon: CalendarCheck,
    id: "scheduler",
    title: "Scheduling & Follow-up Agents",
    description:
      "Book, confirm, reschedule, follow up. Integrates with your calendar, your CRM, your communication channels.",
    metric: "40%",
    metricLabel: "fewer no-shows",
    feed: [
      "→ Discovery call requested — Tuesday PM",
      "→ Checked 3 calendars for open slots",
      "✓ Booked 2:30 PM, confirmations sent",
      "→ 24h reminder queued via SMS",
    ],
  },
  {
    icon: Cpu,
    id: "ops-agent",
    title: "Operations Agents",
    description:
      "Document processing, data entry, report generation, workflow triggers. The work your team does on autopilot — but actually on autopilot.",
    metric: "10-20 hrs",
    metricLabel: "recovered per week",
    feed: [
      "→ Invoice PDF received via email",
      "→ Extracted line items — 99.2% confidence",
      "✓ Synced to QuickBooks + job costing",
      "→ Weekly ops report generating…",
    ],
  },
  {
    icon: Phone,
    id: "voice-agent",
    title: "Voice AI Agents",
    description:
      "Natural language phone handling. Inbound routing, outbound follow-up, call summarization. Real conversations, not phone trees.",
    metric: "24/7",
    metricLabel: "phone coverage",
    feed: [
      "→ Inbound call — (713) 555-0142",
      "→ Intent detected: reschedule service",
      "✓ Rescheduled + SMS confirmation sent",
      "→ Call summary posted to CRM",
    ],
  },
  {
    icon: Workflow,
    id: "multi-agent",
    title: "Multi-Agent Systems",
    description:
      "Multiple agents coordinating across business functions. One handles intake, another qualifies, another schedules, another follows up.",
    metric: "End-to-end",
    metricLabel: "zero human touches required",
    feed: [
      "→ Intake agent captured new lead",
      "→ Qualifier scored + enriched profile",
      "→ Scheduler booked discovery call",
      "✓ Pipeline updated end-to-end — 0 touches",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    description:
      "We map your workflows, identify bottlenecks, and find the highest-ROI automation targets. No AI for AI's sake.",
  },
  {
    num: "02",
    title: "Architecture",
    description:
      "Design the agent system — which agents, what they access, how they coordinate, where humans stay in the loop.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Custom development on production frameworks. Real database access, real API integrations, real security. Not wrappers.",
  },
  {
    num: "04",
    title: "Deploy & Monitor",
    description:
      "Launch with full observability. Token usage, response quality, escalation rates, cost tracking — all visible in your dashboard.",
  },
  {
    num: "05",
    title: "Evolve",
    description:
      "Agents improve over time. New capabilities added, edge cases handled, coverage expanded. Your system gets smarter every month.",
  },
];

const stack = [
  {
    pkg: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    role: "Agent framework & streaming",
    proof: "20M+ monthly downloads",
  },
  {
    pkg: "claude-anthropic",
    name: "Claude (Anthropic)",
    role: "Language model & reasoning",
    proof: "Powers Claude Code — the AI that builds AI",
  },
  {
    pkg: "supabase",
    name: "Supabase",
    role: "Database, auth & real-time",
    proof: "Row-level security on every query",
  },
  {
    pkg: "model-context-protocol",
    name: "Model Context Protocol",
    role: "Tool & service connections",
    proof: "9,600+ integrations, Linux Foundation governed",
  },
  {
    pkg: "twilio-voice",
    name: "Twilio",
    role: "Voice, SMS & phone AI",
    proof: "Browser-native WebRTC softphones",
  },
  {
    pkg: "vercel-edge",
    name: "Vercel",
    role: "Deployment & edge compute",
    proof: "Sub-second cold starts, global CDN",
  },
];

const outcomes = [
  {
    value: "847",
    label: "Leads qualified this month",
    sub: "Scored, enriched & routed automatically",
  },
  {
    value: "2.1k",
    label: "Support tickets auto-resolved",
    sub: "80% handled without a human touch",
  },
  {
    value: "40%",
    label: "Fewer no-shows",
    sub: "Automated confirmations & reminders",
  },
  {
    value: "$0.46",
    label: "Per ticket handled",
    sub: "vs $4.18 human average",
  },
];

const compliancePoints = [
  {
    title: "Impact assessments",
    text: "Risk evaluation before deployment. Document what the agent does, what data it accesses, and what decisions it influences.",
  },
  {
    title: "Transparency documentation",
    text: "Clear disclosure of AI involvement. Your customers and team know when they're interacting with an agent.",
  },
  {
    title: "Human oversight",
    text: "Every agent has escalation paths and kill switches. AI assists — humans decide.",
  },
  {
    title: "Audit trails",
    text: "Full logging of agent actions, decisions, and reasoning. Reproducible and reviewable.",
  },
];

const faqs = [
  {
    q: "How is this different from your AI Integrated Operating Systems service?",
    a: "AI Integrated Operating Systems adds intelligence to the platforms we build — chatbots, smart search, automated ticketing inside your dashboard. Custom AI Agents are standalone systems that operate autonomously across your business: qualifying leads, handling phone calls, coordinating workflows, processing documents. Think of AI tools as features. AI agents are workers.",
  },
  {
    q: "What happens when an agent makes a mistake?",
    a: "Every agent system includes human-in-the-loop design. Confidence thresholds trigger escalation. Critical decisions always route to a human. Full audit trails let you review any action the agent took and why.",
  },
  {
    q: "How long does it take to build a custom agent system?",
    a: "A single-purpose agent (lead qualification, scheduling, support) typically takes 3-5 weeks. Multi-agent systems with voice, orchestration, and deep integrations take 6-10 weeks. We deploy incrementally — you see agents working within the first sprint.",
  },
  {
    q: "What if we already have a CRM or platform?",
    a: "Agents connect to your existing systems via APIs and MCP (Model Context Protocol). We don't require you to rebuild anything. If you need a new platform too, we build both — but agents can layer onto what you have.",
  },
  {
    q: "Is our data safe?",
    a: "We build on Anthropic Claude, which holds SOC 2 Type II, ISO 27001, and ISO 42001 certifications. API data is never used to train models. Zero data retention is available. Your Supabase database uses row-level security on every query.",
  },
  {
    q: "What does ongoing support look like?",
    a: "Agent systems include monitoring dashboards showing token usage, resolution rates, escalation frequency, and cost. Monthly optimization reviews improve accuracy and expand coverage. You're not left with a static build.",
  },
];

export default function AIAgentsPage() {
  const duplicatedStats = [...stats, ...stats, ...stats];
  const [activeAgent, setActiveAgent] = useState(0);
  const agent = agentTypes[activeAgent];
  const AgentIcon = agent.icon;

  return (
    <main className="bg-[#030712]">
      {/* Global keyframes for constellation + pulsing elements */}
      <style>{`
        @keyframes nodeGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.9; }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.2; }
        }
      `}</style>

      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Neural constellation — SVG-based, no canvas, no external lib */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Primary connection lines */}
            <line x1="120" y1="200" x2="350" y2="140" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0s" }} />
            <line x1="350" y1="140" x2="580" y2="80" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.3s" }} />
            <line x1="580" y1="80" x2="840" y2="160" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.6s" }} />
            <line x1="840" y1="160" x2="1100" y2="100" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.9s" }} />
            <line x1="1100" y1="100" x2="1330" y2="220" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.2s" }} />
            <line x1="120" y1="200" x2="240" y2="380" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.4s" }} />
            <line x1="240" y1="380" x2="500" y2="310" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.7s" }} />
            <line x1="500" y1="310" x2="760" y2="400" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1s" }} />
            <line x1="760" y1="400" x2="1020" y2="340" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.3s" }} />
            <line x1="1020" y1="340" x2="1260" y2="420" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.6s" }} />
            <line x1="1330" y1="220" x2="1260" y2="420" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.9s" }} />
            <line x1="240" y1="380" x2="170" y2="580" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.5s" }} />
            <line x1="500" y1="310" x2="430" y2="640" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 0.8s" }} />
            <line x1="760" y1="400" x2="700" y2="560" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.1s" }} />
            <line x1="1020" y1="340" x2="960" y2="620" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.4s" }} />
            <line x1="1260" y1="420" x2="1200" y2="580" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 1.7s" }} />
            <line x1="170" y1="580" x2="430" y2="640" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 2s" }} />
            <line x1="430" y1="640" x2="700" y2="560" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 2.3s" }} />
            <line x1="700" y1="560" x2="960" y2="620" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 2.6s" }} />
            <line x1="960" y1="620" x2="1200" y2="580" stroke="#06B6D4" strokeWidth="0.75" style={{ animation: "linePulse 4s ease-in-out infinite 2.9s" }} />
            {/* Cross-diagonal connections */}
            <line x1="350" y1="140" x2="240" y2="380" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 0.2s" }} />
            <line x1="580" y1="80" x2="500" y2="310" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 0.5s" }} />
            <line x1="840" y1="160" x2="760" y2="400" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 0.8s" }} />
            <line x1="1100" y1="100" x2="1020" y2="340" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 1.1s" }} />
            <line x1="500" y1="310" x2="700" y2="560" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 1.4s" }} />
            <line x1="760" y1="400" x2="960" y2="620" stroke="#06B6D4" strokeWidth="0.5" style={{ animation: "linePulse 5s ease-in-out infinite 1.7s" }} />
            {/* Nodes — top row */}
            <circle cx="120" cy="200" r="3.5" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 0s" }} />
            <circle cx="350" cy="140" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 0.5s" }} />
            <circle cx="580" cy="80" r="4" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 1s" }} />
            <circle cx="840" cy="160" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 1.5s" }} />
            <circle cx="1100" cy="100" r="3.5" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 2s" }} />
            <circle cx="1330" cy="220" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 2.5s" }} />
            {/* Nodes — middle row */}
            <circle cx="240" cy="380" r="4.5" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 0.3s" }} />
            <circle cx="500" cy="310" r="3.5" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 0.8s" }} />
            <circle cx="760" cy="400" r="4" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 1.3s" }} />
            <circle cx="1020" cy="340" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 1.8s" }} />
            <circle cx="1260" cy="420" r="3.5" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 2.3s" }} />
            {/* Nodes — bottom row */}
            <circle cx="170" cy="580" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 0.6s" }} />
            <circle cx="430" cy="640" r="3.5" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 1.1s" }} />
            <circle cx="700" cy="560" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 1.6s" }} />
            <circle cx="960" cy="620" r="4" fill="#06B6D4" style={{ animation: "nodeGlow 4s ease-in-out infinite 2.1s" }} />
            <circle cx="1200" cy="580" r="3" fill="#06B6D4" style={{ animation: "nodeGlow 3.5s ease-in-out infinite 2.6s" }} />
            {/* Soft glow halos on key nodes */}
            <circle cx="240" cy="380" r="14" fill="#06B6D4" opacity="0.04" />
            <circle cx="760" cy="400" r="12" fill="#06B6D4" opacity="0.04" />
            <circle cx="580" cy="80" r="12" fill="#06B6D4" opacity="0.04" />
          </svg>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/30 to-[#030712]" />

        <div className="container-site relative z-10 py-32">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#06B6D4]"
                style={{ boxShadow: "0 0 12px #06B6D4" }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase">
                Custom AI Agents
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Agents that run
              <br />
              <span className="text-[#06B6D4]">your operations.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/50 leading-relaxed mb-12 max-w-2xl"
            >
              Not chatbots. Not automations. Autonomous AI agents built into
              your business systems — trained on your data, connected to your
              tools, monitored by your team.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#06B6D4] hover:bg-[#0891B2] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
              <button
                onClick={() =>
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 text-white/40 font-medium hover:text-white transition-colors"
              >
                <span>See how it works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </section>

      {/* ── Section 2: Stats Marquee ── */}
      <section className="py-4 border-y border-white/5 overflow-hidden bg-[#030712]">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: { duration: 30, ease: "linear", repeat: Infinity },
          }}
        >
          {duplicatedStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#06B6D4]">
                {stat.value}
              </span>
              <span className="text-sm text-white/30 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 3: Problem — The Implementation Gap ── */}
      <section className="py-32 md:py-40">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
                The Problem
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                Everyone&apos;s buying AI.
                <br />
                Almost nobody&apos;s
                <br />
                shipping it.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:pt-16 space-y-6"
            >
              <p className="text-xl text-white/50 leading-relaxed">
                79% of companies have adopted AI agents. Only 11% have them
                running in production. The gap isn&apos;t the technology —
                it&apos;s the implementation.
              </p>
              <p className="text-xl text-white/50 leading-relaxed">
                DIY attempts fail at twice the rate of partnered builds.
                Off-the-shelf &quot;AI agencies&quot; ship wrappers around
                ChatGPT that break when the API changes. Enterprise integrators
                charge $200K+ and take 12 months.
              </p>
              <p className="text-xl font-medium text-white">
                There&apos;s a gap in the middle. We fill it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What We Build — Agent Types ── */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Six types of agents.
              <br />
              One connected system.
            </h2>
          </motion.div>

          {/* Agent console — selector rail + live terminal panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 rounded-2xl border border-white/[0.08] overflow-hidden bg-[#04060C]"
          >
            {/* Selector rail */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div className="px-5 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Agent Roster
                </span>
                <span className="font-mono text-[10px] text-[#06B6D4]">
                  6 deployed
                </span>
              </div>
              <div>
                {agentTypes.map((a, index) => {
                  const RowIcon = a.icon;
                  const isActive = index === activeAgent;
                  return (
                    <button
                      key={a.id}
                      onClick={() => setActiveAgent(index)}
                      onMouseEnter={() => setActiveAgent(index)}
                      onFocus={() => setActiveAgent(index)}
                      className={`relative w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 border-b border-white/[0.04] last:border-b-0 ${
                        isActive ? "bg-[#06B6D4]/[0.06]" : "hover:bg-white/[0.02]"
                      }`}
                    >
                      {/* Active beam */}
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#06B6D4] transition-transform duration-300 origin-center ${
                          isActive ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <span
                        className={`font-mono text-[10px] w-5 shrink-0 ${
                          isActive ? "text-[#06B6D4]" : "text-white/25"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive ? "bg-[#06B6D4]/20" : "bg-white/[0.04]"
                        }`}
                      >
                        <RowIcon
                          className={`w-4 h-4 ${
                            isActive ? "text-[#06B6D4]" : "text-white/40"
                          }`}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-semibold truncate ${
                            isActive ? "text-white" : "text-white/60"
                          }`}
                        >
                          {a.title}
                        </span>
                        <span className="block font-mono text-[10px] text-white/25 truncate">
                          /{a.id}
                        </span>
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          isActive ? "bg-[#06B6D4] animate-pulse" : "bg-white/15"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live console panel */}
            <div className="lg:col-span-7 flex flex-col min-h-[420px]">
              {/* Console header */}
              <div className="px-6 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">
                  aeopic@agents:~$ inspect /{agent.id}
                </span>
                <span className="flex items-center gap-1.5">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-[10px] text-[#06B6D4]">
                    ACTIVE
                  </span>
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col p-6 md:p-8"
                >
                  {/* Identity */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/15 flex items-center justify-center shrink-0">
                      <AgentIcon className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {agent.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mt-2 max-w-md">
                        {agent.description}
                      </p>
                    </div>
                  </div>

                  {/* Metric readout */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-[#06B6D4] tracking-tight">
                      {agent.metric}
                    </span>
                    <span className="font-mono text-xs text-white/30 uppercase tracking-wider">
                      {agent.metricLabel}
                    </span>
                  </div>

                  {/* Activity feed */}
                  <div className="mt-auto rounded-xl bg-black/40 border border-white/[0.06] p-4 font-mono text-xs space-y-2">
                    <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] mb-3">
                      Live Activity
                    </div>
                    {agent.feed.map((line, i) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.35 }}
                        className={
                          line.startsWith("✓")
                            ? "text-[#06B6D4]"
                            : "text-white/50"
                        }
                      >
                        {line}
                      </motion.div>
                    ))}
                    <motion.span
                      className="inline-block w-2 h-3.5 bg-[#06B6D4]/70 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: How It Works — Vertical Timeline Process ── */}
      <section
        id="process"
        className="py-32 md:py-40 border-t border-white/5 bg-[#04080F]"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
                The Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                From audit
                <br />
                to autonomous.
              </h2>
              <p className="text-xl text-white/40 leading-relaxed">
                We don&apos;t plug in AI and leave. We understand your workflows
                first, then build systems that compound over time.
              </p>
            </motion.div>

            <div className="relative pl-8 border-l border-[#06B6D4]/20">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group mb-12 last:mb-0"
                >
                  <span className="text-6xl font-bold text-white/[0.04] group-hover:text-[#06B6D4]/15 transition-colors block leading-none mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#06B6D4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: The Stack ── */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
              The Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Built on what works
              <br />
              in production.
            </h2>
            <p className="text-xl text-white/40 leading-relaxed">
              Not prototyping tools. Not workflow builders. Production-grade AI
              frameworks used by the companies building the future.
            </p>
          </motion.div>

          {/* Production terminal manifest */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.08] bg-[#04060C] overflow-hidden shadow-2xl"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.08]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
              </div>
              <span className="font-mono text-[11px] text-white/30">
                aeopic@production: ~/stack
              </span>
            </div>

            <div className="p-5 md:p-8 font-mono">
              {/* Command line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm mb-6"
              >
                <span className="text-[#06B6D4]">$</span>{" "}
                <span className="text-white/80">aeopic stack ls</span>{" "}
                <span className="text-white/30">--env=production</span>
              </motion.div>

              {/* Service rows */}
              <div className="space-y-0">
                {stack.map((tech, index) => (
                  <motion.div
                    key={tech.pkg}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.1 }}
                    className="group grid md:grid-cols-12 gap-x-4 gap-y-1 items-baseline py-4 border-t border-white/[0.06] hover:bg-[#06B6D4]/[0.04] transition-colors -mx-3 px-3 rounded-lg"
                  >
                    {/* status + pkg */}
                    <div className="md:col-span-4 flex items-center gap-3 min-w-0">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0"
                        animate={{ opacity: [1, 0.35, 1] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <span className="text-sm text-[#06B6D4] font-bold truncate">
                        {tech.pkg}
                      </span>
                    </div>
                    {/* role */}
                    <div className="md:col-span-3 text-xs text-white/50 pl-4 md:pl-0">
                      {tech.role}
                    </div>
                    {/* proof */}
                    <div className="md:col-span-4 text-xs text-white/30 pl-4 md:pl-0">
                      {tech.proof}
                    </div>
                    {/* status label */}
                    <div className="hidden md:block md:col-span-1 text-right text-[10px] text-[#06B6D4]/70 uppercase tracking-wider">
                      Running
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="border-t border-white/[0.06] pt-5 mt-0 text-xs flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                <span className="text-white/40">
                  6 services <span className="text-white/20">·</span>{" "}
                  <span className="text-[#06B6D4]">all healthy</span>{" "}
                  <span className="text-white/20">·</span> 0 wrappers detected
                </span>
                <motion.span
                  className="inline-block w-2 h-3.5 bg-[#06B6D4]/70"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: Proof — We Run This Ourselves ── */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4]/10 via-transparent to-[#06B6D4]/10 rounded-3xl blur-xl" />

            {/* Card */}
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-[#06B6D4]/20 rounded-2xl p-12 md:p-16">
              <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
                Proof
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl leading-tight">
                What an agent system actually delivers.
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-2xl">
                Not projections — the workloads agent systems handle when
                they&apos;re built right. Real integrations, real volume, real
                savings.
              </p>

              {/* Outcome metrics */}
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((o, index) => (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 hover:border-[#06B6D4]/25 transition-colors"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#06B6D4] tracking-tight mb-3">
                      {o.value}
                    </div>
                    <div className="text-white font-semibold mb-1">
                      {o.label}
                    </div>
                    <div className="font-mono text-xs text-white/30">
                      {o.sub}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Internal-use line */}
              <div className="flex items-center gap-3 mt-10 pt-8 border-t border-white/[0.06]">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#06B6D4] shrink-0"
                  style={{ boxShadow: "0 0 6px #06B6D4" }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-white/50 text-sm leading-relaxed">
                  We run this architecture ourselves — same frameworks, same
                  patterns we deploy for clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: TRAIGA Compliance ── */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
                Compliance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                TRAIGA-ready by default.
              </h2>
              <p className="text-xl text-white/40 leading-relaxed mb-12">
                The Texas Responsible AI Governance Act took effect January 1,
                2026. Most AI vendors ignore it. Every agent system we build
                includes impact assessments, transparency documentation, human
                oversight mechanisms, and audit trails — because it&apos;s the
                law, and because it&apos;s the right way to build.
              </p>
            </motion.div>

            <div className="space-y-8">
              {compliancePoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-l-2 border-[#06B6D4]/30 pl-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: FAQ ── */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Common
                <br />
                questions.
              </h2>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-white/10"
                  >
                    <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                      <span className="text-lg font-medium text-white group-hover:text-[#06B6D4] transition-colors pr-8">
                        {faq.q}
                      </span>
                      <span className="text-white/30 group-open:rotate-45 transition-transform text-2xl flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-12">
                      <p className="text-white/40 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 10: CTA ── */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B6D4]/[0.07] rounded-full blur-[150px]" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#06B6D4] text-sm font-mono font-medium tracking-widest uppercase mb-6"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Tell us what your team
              <br />
              wastes time on.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/40 mb-10"
            >
              We&apos;ll show you which agents can take it over.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#06B6D4] hover:bg-[#0891B2] text-white px-8 py-7 text-base font-medium"
              >
                <Link href="/start" className="flex items-center gap-2">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
              <Link
                href="/process"
                className="group inline-flex items-center gap-2 text-white/40 font-medium hover:text-white transition-colors"
              >
                <span>View our process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
