"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Sparkles,
  Palette,
  TrendingUp,
  Megaphone,
  Headphones,
  Star,
  Shield,
  Heart,
  Hammer,
  Rocket,
  Users,
  ArrowRight,
  MapPin,
  Building2,
  Zap,
  CheckCircle2,
  Quote,
  Coffee,
  Terminal,
  Lightbulb,
  Target,
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

function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 30% 20%, ${brand.lavender}30 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 80% 80%, ${brand.purpleBg} 0%, transparent 40%),
              linear-gradient(180deg, white 0%, #FAFAFA 100%)
            `,
          }}
        />

        {/* Constellation pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
          <defs>
            <pattern id="constellation" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill={brand.primary} />
              <circle cx="20" cy="30" r="0.5" fill={brand.lavender} />
              <circle cx="80" cy="70" r="0.5" fill={brand.lavender} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>

        {/* Team collaboration visual */}
        <motion.div
          style={{ y }}
          className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <TeamConstellationVisual />
        </motion.div>
      </div>

      <div className="container-site relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-8"
          >
            <MapPin className="w-4 h-4" style={{ color: brand.primary }} />
            <span className="text-sm font-medium text-gray-600">Houston, Texas</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ color: brand.dark }}
          >
            Meet the Team
            <br />
            <span style={{ color: brand.primary }}>Behind the Code</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
          >
            A small, focused team of engineers and strategists building custom software
            for businesses that are ready to grow. We&apos;re not an agency — we&apos;re your
            technical partners.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "10+", label: "Years Combined Experience" },
              { value: "100%", label: "Code Ownership" },
              { value: "Houston", label: "Based & Proud" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: brand.purpleBg }}
                >
                  <span className="text-lg font-bold" style={{ color: brand.primary }}>
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Team constellation visual component
function TeamConstellationVisual() {
  return (
    <div className="relative w-[400px] h-[400px]">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="200" y1="80" x2="100" y2="200"
          stroke={brand.lavender}
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="200" y1="80" x2="300" y2="200"
          stroke={brand.lavender}
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="100" y1="200" x2="200" y2="320"
          stroke={brand.lavender}
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.line
          x1="300" y1="200" x2="200" y2="320"
          stroke={brand.lavender}
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
      </svg>

      {/* Team member nodes */}
      {[
        { x: 200, y: 80, initials: "SS", role: "Founder", delay: 0 },
        { x: 100, y: 200, initials: "DE", role: "Engineer", delay: 0.2 },
        { x: 300, y: 200, initials: "AM", role: "Strategy", delay: 0.4 },
        { x: 200, y: 320, initials: "JK", role: "Design", delay: 0.6 },
      ].map((member) => (
        <motion.div
          key={member.initials}
          className="absolute"
          style={{ left: member.x - 30, top: member.y - 30 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: member.delay }}
        >
          <div
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
              boxShadow: `0 8px 30px -8px ${brand.primary}60`,
            }}
          >
            {member.initials}
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs text-gray-500">{member.role}</span>
          </div>
        </motion.div>
      ))}

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30"
        style={{ background: brand.primary }}
      />
    </div>
  );
}

// ============================================================================
// OUR STORY SECTION
// ============================================================================

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "The Problem",
      icon: Lightbulb,
      title: "We Saw a Gap",
      description: "Expensive agencies charging six figures, or limited SaaS tools forcing you to adapt. There had to be a better way.",
    },
    {
      year: "The Idea",
      icon: Coffee,
      title: "Friends with a Mission",
      description: "Engineers, strategists, and designers came together with one goal: make custom technology accessible to all businesses.",
    },
    {
      year: "The Solution",
      icon: Rocket,
      title: "Aeopic Was Born",
      description: "A new kind of software partner — one that builds with you, not just for you. Real code, real ownership, real results.",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            Why We Started Aeopic
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: brand.primary }}
                >
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ color: brand.dark }}>
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Center icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white border-2 shadow-lg"
                  style={{ borderColor: brand.lavender }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <milestone.icon className="w-7 h-7" style={{ color: brand.primary }} />
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CAPABILITIES SECTION
// ============================================================================

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      icon: Code2,
      title: "Engineering",
      description: "Full-stack developers building production-grade platforms from the ground up.",
      visual: <EngineeringVisual />,
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description: "Integrating AI into real business workflows — not just chatbots.",
      visual: <AIVisual />,
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Interfaces built for humans first, with obsessive attention to usability.",
      visual: <DesignVisual />,
    },
    {
      icon: TrendingUp,
      title: "Strategy",
      description: "We help you figure out what to build and why it matters.",
      visual: <StrategyVisual />,
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Data-driven campaigns connecting your business with the right customers.",
      visual: <MarketingVisual />,
    },
    {
      icon: Headphones,
      title: "Support",
      description: "We stick around after launch. Your success is our success.",
      visual: <SupportVisual />,
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            What We Bring
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            Full-Stack Everything
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Engineers, designers, and strategists — working together to turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Visual */}
                <div className="h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  {cap.visual}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: brand.purpleBg }}
                  >
                    <cap.icon className="w-5 h-5" style={{ color: brand.primary }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: brand.dark }}>
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Capability visual components
function EngineeringVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="bg-[#1e1e2e] rounded-lg p-3 w-full max-w-[200px] font-mono text-[10px]">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="text-gray-400">
          <span className="text-purple-400">const</span> app = <span className="text-blue-400">build</span>({"{"}<br />
          &nbsp;&nbsp;quality: <span className="text-green-400">&quot;production&quot;</span>,<br />
          &nbsp;&nbsp;owned: <span className="text-orange-400">true</span><br />
          {"}"});
        </div>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)` }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-3 h-3 text-white" />
        </motion.div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center gap-3">
      {[brand.primary, brand.primarySoft, brand.lavender, brand.lavenderLight].map((color, i) => (
        <motion.div
          key={color}
          className="w-8 h-8 rounded-lg shadow-sm"
          style={{ background: color }}
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="flex items-end gap-2">
        {[40, 60, 45, 80, 65].map((h, i) => (
          <motion.div
            key={i}
            className="w-6 rounded-t-md"
            style={{
              height: h,
              background: i === 3 ? brand.primary : brand.lavender,
            }}
            initial={{ height: 0 }}
            animate={{ height: h }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-4 flex items-center justify-center"
          style={{ borderColor: brand.lavender }}
        >
          <div className="text-center">
            <div className="text-lg font-bold" style={{ color: brand.primary }}>12K</div>
            <div className="text-[10px] text-gray-500">visitors</div>
          </div>
        </motion.div>
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-[10px] font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </div>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: brand.purpleBg }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Headphones className="w-5 h-5" style={{ color: brand.primary }} />
        </motion.div>
        <div className="space-y-1">
          <div className="h-2 w-16 rounded bg-gray-200" />
          <div className="h-2 w-12 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// VALUES SECTION
// ============================================================================

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Star, title: "Excellence", description: "We don't ship anything we wouldn't use ourselves", color: brand.primary },
    { icon: Shield, title: "Integrity", description: "Honest timelines, transparent pricing, no shortcuts", color: "#3b82f6" },
    { icon: Heart, title: "Service", description: "We build for people, not just profit", color: "#ef4444" },
    { icon: Hammer, title: "Craft", description: "We love what we do and it shows in the code", color: "#f59e0b" },
    { icon: TrendingUp, title: "Growth", description: "Always learning, always improving", color: "#10b981" },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#0F1226] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
        style={{ background: brand.primary }}
      />

      <div className="container-site relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.lavender }}>
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Stand For
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-[180px] text-center hover:bg-white/10 transition-colors"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${value.color}20` }}
              >
                <value.icon className="w-7 h-7" style={{ color: value.color }} />
              </div>
              <h3 className="font-bold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TECH STACK SECTION
// ============================================================================

function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind", category: "Styling" },
    { name: "Supabase", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Vercel", category: "Hosting" },
    { name: "OpenAI", category: "AI" },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: brand.primary }}
          >
            Our Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.dark }}>
            Modern, Proven Technology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The same tools trusted by industry leaders — available to businesses of any size.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-6 py-3 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-default"
            >
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4" style={{ color: brand.primary }} />
                <div>
                  <span className="font-semibold text-gray-900">{tech.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{tech.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HOUSTON SECTION
// ============================================================================

function HoustonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${brand.purpleBg} 0%, white 100%)` }}
    >
      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: brand.primary }}
              >
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: brand.primary }}
              >
                Space City
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: brand.dark }}>
              Houston Proud,
              <br />
              <span style={{ color: brand.primary }}>Globally Minded</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Houston, Texas — home to NASA, the energy industry, and one of the most
              diverse business ecosystems in the country. We serve clients locally and remotely,
              bringing Space City ambition to every project.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: MapPin, text: "Houston, TX" },
                { icon: Building2, text: "Remote-Friendly" },
                { icon: Users, text: "Local & Global Clients" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200"
                >
                  <item.icon className="w-4 h-4" style={{ color: brand.primary }} />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Houston skyline silhouette with rocket */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${brand.dark} 0%, #2d2640 100%)` }}
            >
              {/* Stars */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 60}%`,
                    opacity: 0.3 + Math.random() * 0.7,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}

              {/* Skyline silhouette */}
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {/* Buildings */}
                <g fill={brand.primary} opacity="0.3">
                  <rect x="20" y="120" width="30" height="80" />
                  <rect x="60" y="100" width="25" height="100" />
                  <rect x="95" y="80" width="35" height="120" />
                  <rect x="140" y="60" width="40" height="140" rx="2" />
                  <rect x="190" y="90" width="30" height="110" />
                  <rect x="230" y="110" width="25" height="90" />
                  <rect x="265" y="70" width="45" height="130" />
                  <rect x="320" y="100" width="30" height="100" />
                  <rect x="360" y="130" width="25" height="70" />
                </g>

                {/* Rocket */}
                <motion.g
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.g
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Rocket body */}
                    <path
                      d="M200 30 L210 50 L210 80 L200 90 L190 80 L190 50 Z"
                      fill={brand.lavender}
                    />
                    {/* Rocket tip */}
                    <path
                      d="M200 20 L210 35 L190 35 Z"
                      fill="white"
                    />
                    {/* Fins */}
                    <path d="M190 75 L180 90 L190 85 Z" fill={brand.primary} />
                    <path d="M210 75 L220 90 L210 85 Z" fill={brand.primary} />
                    {/* Exhaust */}
                    <motion.ellipse
                      cx="200"
                      cy="95"
                      rx="8"
                      ry="12"
                      fill="#f59e0b"
                      opacity="0.8"
                      animate={{ ry: [12, 18, 12], opacity: [0.8, 0.4, 0.8] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.g>
                </motion.g>
              </svg>

              {/* Quote */}
              <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <Quote className="w-5 h-5 text-white/50 mb-2" />
                <p className="text-white/80 text-sm italic">
                  &ldquo;Houston, we have liftoff.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container-site">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
              boxShadow: `0 20px 50px -15px ${brand.primary}60`,
            }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: brand.dark }}>
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We&apos;re always excited to meet businesses that are ready to build something great.
            Let&apos;s have a conversation about what you&apos;re working on.
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
              Start a Conversation
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

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <CapabilitiesSection />
      <ValuesSection />
      <TechStackSection />
      <HoustonSection />
      <AboutCTA />
    </main>
  );
}
