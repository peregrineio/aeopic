"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Gauge,
  Workflow,
  Settings,
  BarChart3,
} from "lucide-react";
import { FeatureCard } from "@/components/shared/feature-card";

const features = [
  {
    icon: LayoutDashboard,
    title: "Operations CRMs",
    description: "Manage customers, jobs, and revenue in one place",
  },
  {
    icon: Users,
    title: "Customer Portals",
    description: "Let customers book, pay, and communicate 24/7",
  },
  {
    icon: Gauge,
    title: "Internal Dashboards",
    description: "Real-time visibility into every part of your business",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with smart automation",
  },
  {
    icon: Settings,
    title: "Admin Panels",
    description: "Manage content, users, and settings with ease",
  },
  {
    icon: BarChart3,
    title: "Analytics Platforms",
    description: "Make decisions backed by real data",
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
      {features.map((feature) => (
        <motion.div key={feature.title} variants={itemVariants}>
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
}
