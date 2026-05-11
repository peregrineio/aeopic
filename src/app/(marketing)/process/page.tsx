"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Search,
  FileCode,
  Hammer,
  Rocket,
  ArrowRight,
  MessageSquare,
  Layers,
  BarChart3,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  Shield,
} from "lucide-react";

// Brand colors
const brand = {
  primary: "#726AFF",
  primarySoft: "#8B5CF6",
  lavender: "#C4B5FD",
  lavenderLight: "#DDD6FE",
  purpleBg: "#F5F3FF",
  dark: "#1A1625",
};

// ============================================================================
// HERO SECTION
// ============================================================================

function ProcessHero() {
  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% 0%, ${brand.purpleBg} 0%, white 60%),
              linear-gradient(180deg, white 0%, #FAFAFA 100%)
            `,
          }}
        />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={brand.dark} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

      </div>

      <div className="container-site relative z-10 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${brand.purpleBg} 0%, ${brand.lavenderLight} 100%)` }}
            >
              <Layers className="w-6 h-6" style={{ color: brand.primary }} />
            </div>
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: brand.primary }}
            >
              Our Process
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ color: brand.dark }}
          >
            From Idea to
            <br />
            <span style={{ color: brand.primary }}>Launch</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            A proven 4-phase process that turns your vision into a production-ready
            platform. No surprises, no scope creep — just steady progress toward launch.
          </motion.p>

          {/* Timeline badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-100/50"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" style={{ color: brand.primary }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: brand.dark }}>8-12 Weeks</p>
                <p className="text-sm text-gray-500">Average time to launch</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5" style={{ color: brand.primary }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: brand.dark }}>4 Phases</p>
                <p className="text-sm text-gray-500">Clear milestones</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

// ============================================================================
// PHASE VISUAL MOCKUPS
// ============================================================================

function DiscoveryMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Conversation bubbles */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-4 left-4 max-w-[200px] p-4 rounded-2xl rounded-bl-sm bg-white border border-gray-200 shadow-lg"
      >
        <p className="text-sm text-gray-600">&ldquo;We need a better way to manage bookings...&rdquo;</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <Users className="w-3 h-3 text-blue-600" />
          </div>
          <span className="text-xs text-gray-400">Client</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-24 right-4 max-w-[220px] p-4 rounded-2xl rounded-br-sm border border-gray-200 shadow-lg"
        style={{ background: brand.purpleBg }}
      >
        <p className="text-sm text-gray-700">&ldquo;Let me map out your current workflow...&rdquo;</p>
        <div className="flex items-center gap-2 mt-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: brand.lavender }}
          >
            <MessageSquare className="w-3 h-3" style={{ color: brand.primary }} />
          </div>
          <span className="text-xs text-gray-500">Aeopic</span>
        </div>
      </motion.div>

      {/* Workflow diagram sketch */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[280px] p-4 bg-white rounded-xl border border-gray-200 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-gray-400 ml-2">workflow.sketch</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          {["Inquiry", "Schedule", "Service", "Invoice"].map((step, i) => (
            <div key={step} className="flex items-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-[10px] font-medium text-center"
                style={{
                  background: i === 0 ? brand.purpleBg : "white",
                  border: `1px solid ${i === 0 ? brand.lavender : "#e5e7eb"}`,
                  color: i === 0 ? brand.primary : "#6b7280",
                }}
              >
                {step}
              </div>
              {i < 3 && <ArrowRight className="w-3 h-3 text-gray-300 mx-1" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function BlueprintMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Architecture diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-4 left-4 right-4"
      >
        <div className="bg-white rounded-xl border border-gray-200 shadow-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <FileCode className="w-4 h-4" style={{ color: brand.primary }} />
            <span className="text-xs font-semibold text-gray-600">System Architecture</span>
          </div>

          <svg viewBox="0 0 280 100" className="w-full">
            {/* Frontend box */}
            <rect x="10" y="10" width="70" height="35" rx="6" fill={brand.purpleBg} stroke={brand.lavender} strokeWidth="1" />
            <text x="45" y="32" textAnchor="middle" fontSize="9" fill={brand.primary} fontWeight="500">Frontend</text>

            {/* API box */}
            <rect x="105" y="10" width="70" height="35" rx="6" fill={brand.purpleBg} stroke={brand.lavender} strokeWidth="1" />
            <text x="140" y="32" textAnchor="middle" fontSize="9" fill={brand.primary} fontWeight="500">API Layer</text>

            {/* Database box */}
            <rect x="200" y="10" width="70" height="35" rx="6" fill={brand.purpleBg} stroke={brand.lavender} strokeWidth="1" />
            <text x="235" y="32" textAnchor="middle" fontSize="9" fill={brand.primary} fontWeight="500">Database</text>

            {/* Connecting lines */}
            <line x1="80" y1="27" x2="105" y2="27" stroke={brand.lavender} strokeWidth="2" strokeDasharray="4 2" />
            <line x1="175" y1="27" x2="200" y2="27" stroke={brand.lavender} strokeWidth="2" strokeDasharray="4 2" />

            {/* Services row */}
            <rect x="60" y="60" width="55" height="30" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <text x="87" y="79" textAnchor="middle" fontSize="8" fill="#6b7280">Auth</text>

            <rect x="125" y="60" width="55" height="30" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <text x="152" y="79" textAnchor="middle" fontSize="8" fill="#6b7280">Payments</text>

            {/* Connect to API */}
            <line x1="140" y1="45" x2="140" y2="60" stroke="#e5e7eb" strokeWidth="1" />
          </svg>
        </div>
      </motion.div>

      {/* UI mockup thumbnail */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-4 right-4 w-[140px] bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden"
      >
        <div className="h-4 bg-gray-100 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="p-2 space-y-1">
          <div className="h-3 rounded" style={{ background: brand.lavender, width: "60%" }} />
          <div className="h-2 bg-gray-200 rounded w-full" />
          <div className="h-2 bg-gray-200 rounded w-3/4" />
          <div className="h-6 rounded mt-2" style={{ background: brand.primary }} />
        </div>
      </motion.div>

      {/* Feature list */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-4 left-4 bg-white rounded-lg border border-gray-200 shadow-md p-3"
      >
        <p className="text-[10px] font-semibold text-gray-500 mb-2">MVP FEATURES</p>
        {["User auth", "Dashboard", "Booking flow"].map((f, i) => (
          <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
            <CheckCircle2 className="w-3 h-3" style={{ color: brand.primary }} />
            {f}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function BuildMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Code editor mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-4 left-4 w-[200px] bg-[#1e1e2e] rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="h-6 bg-[#181825] flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[9px] text-gray-500 ml-2">dashboard.tsx</span>
        </div>
        <div className="p-3 font-mono text-[9px] leading-relaxed">
          <p><span className="text-purple-400">export</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">Dashboard</span>() {"{"}</p>
          <p className="pl-2"><span className="text-purple-400">const</span> data = <span className="text-blue-400">useData</span>();</p>
          <p className="pl-2"><span className="text-purple-400">return</span> (</p>
          <p className="pl-4"><span className="text-gray-500">&lt;</span><span className="text-green-400">Card</span><span className="text-gray-500">&gt;</span></p>
          <p className="pl-6 text-orange-300">{"{"}data.stats{"}"}</p>
          <p className="pl-4"><span className="text-gray-500">&lt;/</span><span className="text-green-400">Card</span><span className="text-gray-500">&gt;</span></p>
          <p className="pl-2">);</p>
          <p>{"}"}</p>
        </div>
      </motion.div>

      {/* Sprint progress */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-4 right-4 w-[160px] bg-white rounded-xl border border-gray-200 shadow-lg p-3"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-gray-500">SPRINT 3</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: brand.purpleBg, color: brand.primary }}>
            In Progress
          </span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Auth flow", done: true },
            { name: "Dashboard UI", done: true },
            { name: "Booking API", done: false },
          ].map((task) => (
            <div key={task.name} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-sm flex items-center justify-center ${
                  task.done ? "" : "border border-gray-300"
                }`}
                style={task.done ? { background: brand.primary } : {}}
              >
                {task.done && <CheckCircle2 className="w-2 h-2 text-white" />}
              </div>
              <span className={`text-[10px] ${task.done ? "text-gray-400 line-through" : "text-gray-600"}`}>
                {task.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-[10px] text-gray-500 mb-1">
            <span>Progress</span>
            <span>67%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: brand.primary }}
              initial={{ width: 0 }}
              whileInView={{ width: "67%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Preview window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[260px] bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
      >
        <div className="h-6 bg-gray-50 flex items-center justify-between px-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-[9px] text-gray-400">localhost:3000</span>
          <div className="w-12" />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-20 rounded" style={{ background: brand.lavender }} />
            <div className="flex gap-1">
              <div className="w-6 h-6 rounded" style={{ background: brand.purpleBg }} />
              <div className="w-6 h-6 rounded bg-gray-100" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-2 rounded-lg bg-gray-50">
                <div className="text-sm font-bold" style={{ color: brand.primary }}>{i * 12}K</div>
                <div className="h-1.5 bg-gray-200 rounded w-full mt-1" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LaunchMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {/* Rocket animation */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
              boxShadow: `0 10px 40px -10px ${brand.primary}80`,
            }}
          >
            <Rocket className="w-8 h-8 text-white" />
          </div>
          {/* Exhaust particles */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-8 rounded-full opacity-50"
            style={{ background: `linear-gradient(180deg, ${brand.lavender} 0%, transparent 100%)` }}
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Metrics dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 left-4 right-4 bg-white rounded-xl border border-gray-200 shadow-xl p-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4" style={{ color: brand.primary }} />
          <span className="text-xs font-semibold text-gray-600">Launch Day Metrics</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Uptime", value: "99.9%", color: "text-green-600" },
            { label: "Response", value: "45ms", color: "" },
            { label: "Users", value: "1.2K", color: "" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <motion.p
                className={`text-lg font-bold ${stat.color}`}
                style={!stat.color ? { color: brand.primary } : {}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-[10px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <svg viewBox="0 0 200 40" className="w-full h-8">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={brand.primary} stopOpacity="0.3" />
                <stop offset="100%" stopColor={brand.primary} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 35 Q 25 30, 50 25 T 100 20 T 150 12 T 200 8 L 200 40 L 0 40 Z"
              fill="url(#chartGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.path
              d="M 0 35 Q 25 30, 50 25 T 100 20 T 150 12 T 200 8"
              fill="none"
              stroke={brand.primary}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// PHASE SECTION COMPONENT
// ============================================================================

interface PhaseData {
  number: number;
  icon: React.ElementType;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverable: string;
  Mockup: React.ComponentType;
}

const phases: PhaseData[] = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    duration: "1-2 Weeks",
    description: "We start by understanding your business inside and out. What works, what doesn't, and where you want to be. This is where we ask the hard questions.",
    activities: [
      "Kickoff conversation to understand your business",
      "Workflow mapping — how things work today",
      "Pain point identification — what's broken",
      "Goal setting — where you want to be",
      "Success metrics definition",
    ],
    deliverable: "Detailed project specification",
    Mockup: DiscoveryMockup,
  },
  {
    number: 2,
    icon: FileCode,
    title: "Blueprint",
    duration: "1-2 Weeks",
    description: "We design everything before writing code. Architecture, UI, workflows — all mapped out and approved by you before development begins.",
    activities: [
      "Technical architecture design",
      "UI/UX wireframes and design system",
      "Database schema planning",
      "Integration mapping",
      "Feature prioritization for MVP",
    ],
    deliverable: "Complete blueprint + visual mockups",
    Mockup: BlueprintMockup,
  },
  {
    number: 3,
    icon: Hammer,
    title: "Build & Iterate",
    duration: "4-8 Weeks",
    description: "We build in weekly sprints, showing you real progress every step of the way. Your feedback shapes the final product.",
    activities: [
      "Agile development sprints",
      "Weekly progress demos",
      "Feedback integration",
      "Quality testing at every stage",
      "Performance optimization",
    ],
    deliverable: "Production-ready platform",
    Mockup: BuildMockup,
  },
  {
    number: 4,
    icon: Rocket,
    title: "Launch & Evolve",
    duration: "Ongoing",
    description: "Go live with confidence. We handle deployment, monitoring, and stick around to help you grow and optimize.",
    activities: [
      "Production deployment",
      "Performance monitoring",
      "Bug fixes (included)",
      "Feature additions as you grow",
      "Ongoing optimization",
    ],
    deliverable: "Live platform + ongoing partnership",
    Mockup: LaunchMockup,
  },
];

function PhaseSection({ phase, index }: { phase: PhaseData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-32"
      style={{
        background: isEven
          ? `linear-gradient(180deg, white 0%, ${brand.purpleBg}50 100%)`
          : "white",
      }}
    >
      {/* Connecting line */}
      {index < phases.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gray-200 to-transparent" />
      )}

      <div className="container-site">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* Content */}
          <motion.div
            className={!isEven ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Phase badge */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
                  boxShadow: `0 8px 30px -8px ${brand.primary}60`,
                }}
              >
                <phase.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Phase {phase.number}</span>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold" style={{ color: brand.dark }}>
                    {phase.title}
                  </h2>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: brand.purpleBg, color: brand.primary }}
                  >
                    {phase.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {phase.description}
            </p>

            {/* Activities */}
            <div className="space-y-3 mb-8">
              {phase.activities.map((activity, i) => (
                <motion.div
                  key={activity}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: brand.primary }}
                  />
                  <span className="text-gray-700">{activity}</span>
                </motion.div>
              ))}
            </div>

            {/* Deliverable */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: brand.purpleBg }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: brand.lavender }}
              >
                <Shield className="w-4 h-4" style={{ color: brand.primary }} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Deliverable</p>
                <p className="font-semibold" style={{ color: brand.dark }}>{phase.deliverable}</p>
              </div>
            </div>
          </motion.div>

          {/* Visual mockup */}
          <motion.div
            className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative rounded-3xl p-2 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${brand.lavender}40 0%, ${brand.purpleBg} 100%)`,
              }}
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white min-h-[350px] overflow-hidden">
                <phase.Mockup />
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-40"
              style={{ background: brand.lavender }}
            />
            <div
              className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-30"
              style={{ background: brand.primary }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHAT TO EXPECT SECTION
// ============================================================================

const expectations = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Weekly updates. No ghosting. You always know where things stand.",
  },
  {
    icon: Shield,
    title: "No Surprises",
    description: "Scope and budget are locked in from day one. No hidden fees.",
  },
  {
    icon: Zap,
    title: "Fast Iteration",
    description: "See real progress every week. Not months of silence.",
  },
  {
    icon: Users,
    title: "Direct Access",
    description: "Talk to the engineers building your product. No middlemen.",
  },
];

function ExpectationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#0F1226]">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.lavender }}
          >
            Working With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What to Expect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe in transparency, speed, and quality. Here&apos;s what that looks like in practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${brand.primary}30 0%, ${brand.primarySoft}20 100%)`,
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: brand.lavender }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function ProcessCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${brand.purpleBg} 0%, white 50%, ${brand.purpleBg} 100%)`,
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{ background: brand.lavender }}
        />
      </div>

      <div className="container-site relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: brand.dark }}>
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let&apos;s have a conversation about your project. No pressure, no sales pitch —
            just a discussion about what you need and how we can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
                boxShadow: `0 10px 40px -10px ${brand.primary}80`,
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
              style={{ borderColor: brand.lavender, color: brand.dark }}
            >
              See Our Work
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Usually respond within 24 hours · Houston-based · Remote-friendly
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />

      {/* Phase sections */}
      {phases.map((phase, index) => (
        <PhaseSection key={phase.number} phase={phase} index={index} />
      ))}

      <ExpectationsSection />
      <ProcessCTA />
    </main>
  );
}
