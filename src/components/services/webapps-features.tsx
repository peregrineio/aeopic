"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Gauge,
  Workflow,
  Settings,
  BarChart3,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Operations CRMs - Mini table with 3 rows
function CRMVisual() {
  const rows = [
    { name: "Sarah M.", status: "Active", amount: "$299", statusColor: "#726AFF" },
    { name: "John D.", status: "Pending", amount: "$149", statusColor: "#a78bfa" },
    { name: "Maria R.", status: "New", amount: "$520", statusColor: "#c4b5fd" },
  ];

  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between text-[0.65rem]">
            <span className="text-gray-600">{row.name}</span>
            <span
              className="px-2 py-0.5 rounded text-[0.6rem]"
              style={{ backgroundColor: `${row.statusColor}15`, color: row.statusColor }}
            >
              {row.status}
            </span>
            <span className="text-gray-500">{row.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Customer Portals - SVG buttons
function PortalVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100 space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white border border-[#726AFF]/20 rounded px-2 py-1.5 text-center">
          <span className="text-[0.6rem] text-[#726AFF]">📅 Book Appointment</span>
        </div>
        <div className="bg-white border border-[#a78bfa]/20 rounded px-2 py-1.5 text-center">
          <span className="text-[0.6rem] text-[#a78bfa]">💳 Pay Invoice</span>
        </div>
      </div>
      <div className="bg-white border border-[#c4b5fd]/20 rounded px-2 py-1.5 text-center">
        <span className="text-[0.6rem] text-[#8b5cf6]">💬 Message Team</span>
      </div>
    </div>
  );
}

// Internal Dashboards - Mini line chart
function DashboardVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <svg viewBox="0 0 200 50" className="w-full h-auto">
        <defs>
          <linearGradient id="dashGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(114,106,255,0.2)" />
            <stop offset="100%" stopColor="rgba(114,106,255,0.02)" />
          </linearGradient>
        </defs>
        <path
          d="M 5 40 Q 30 35, 50 30 T 100 22 T 150 15 T 195 8 L 195 45 L 5 45 Z"
          fill="url(#dashGradientLight)"
        />
        <polyline
          points="5,40 30,33 50,28 80,24 100,20 130,16 150,13 175,10 195,8"
          fill="none"
          stroke="#726AFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Workflow Automation - SVG flow diagram
function WorkflowVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <div className="flex items-center justify-between gap-1">
        <div className="bg-white border border-[#726AFF]/20 rounded px-2 py-1.5 text-center flex-1">
          <span className="text-[0.55rem] text-[#726AFF]">New Job</span>
        </div>
        <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
        <div className="bg-white border border-[#a78bfa]/20 rounded px-2 py-1.5 text-center flex-1">
          <span className="text-[0.55rem] text-[#a78bfa]">Auto-Assign</span>
        </div>
        <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
        <div className="bg-white border border-[#c4b5fd]/20 rounded px-2 py-1.5 text-center flex-1">
          <span className="text-[0.55rem] text-[#8b5cf6]">Notify</span>
        </div>
      </div>
    </div>
  );
}

// Admin Panels - 3 mini stat boxes
function AdminVisual() {
  const stats = [
    { label: "Users", value: "142", color: "#726AFF" },
    { label: "Roles", value: "4", color: "#a78bfa" },
    { label: "Active", value: "98%", color: "#c4b5fd" },
  ];

  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-sm font-bold" style={{ color: stat.color }}>
              {stat.value}
            </p>
            <p className="text-[0.55rem] text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Analytics - Bar chart increasing
function AnalyticsVisual() {
  return (
    <div className="bg-[#F6F7FB] rounded-lg p-3 border border-gray-100">
      <svg viewBox="0 0 200 50" className="w-full h-auto">
        <defs>
          <linearGradient id="barGradientLight2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#726AFF" />
            <stop offset="100%" stopColor="rgba(114,106,255,0.4)" />
          </linearGradient>
        </defs>
        {[
          { x: 10, h: 18 },
          { x: 40, h: 24 },
          { x: 70, h: 30 },
          { x: 100, h: 36 },
          { x: 130, h: 40 },
          { x: 160, h: 45 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={50 - bar.h}
            width="22"
            height={bar.h}
            rx="3"
            fill="url(#barGradientLight2)"
            opacity={0.5 + i * 0.1}
          />
        ))}
      </svg>
    </div>
  );
}

interface FeatureWithVisual {
  icon: LucideIcon;
  title: string;
  description: string;
  Visual: React.ComponentType;
}

const features: FeatureWithVisual[] = [
  {
    icon: LayoutDashboard,
    title: "Operations CRMs",
    description: "Manage customers, jobs, and revenue in one place",
    Visual: CRMVisual,
  },
  {
    icon: Users,
    title: "Customer Portals",
    description: "Let customers book, pay, and communicate 24/7",
    Visual: PortalVisual,
  },
  {
    icon: Gauge,
    title: "Internal Dashboards",
    description: "Real-time visibility into every part of your business",
    Visual: DashboardVisual,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with smart automation",
    Visual: WorkflowVisual,
  },
  {
    icon: Settings,
    title: "Admin Panels",
    description: "Manage content, users, and settings with ease",
    Visual: AdminVisual,
  },
  {
    icon: BarChart3,
    title: "Analytics Platforms",
    description: "Make decisions backed by real data",
    Visual: AnalyticsVisual,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WebAppsFeatures() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.div key={feature.title} variants={itemVariants}>
            <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 h-full hover:shadow-md transition-shadow">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {feature.description}
              </p>

              {/* Visual */}
              <feature.Visual />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
