"use client";

import { motion } from "framer-motion";
import {
  Package,
  RefreshCw,
  Calendar,
  CreditCard,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { FeatureCard } from "@/components/shared/feature-card";

const features = [
  {
    icon: Package,
    title: "Product Catalogs & Inventory",
    description: "Manage products, variants, and stock levels with ease",
  },
  {
    icon: RefreshCw,
    title: "Subscription & Recurring Billing",
    description: "Sell memberships, subscriptions, and recurring services",
  },
  {
    icon: Calendar,
    title: "Service Booking & Scheduling",
    description: "Let customers book appointments and services online",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payments with Stripe — cards, wallets, and more",
  },
  {
    icon: ClipboardList,
    title: "Order Management & Fulfillment",
    description: "Track orders from purchase to delivery",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    description: "Understand what's working and optimize for growth",
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

export function EcommerceFeatures() {
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
