"use client";

import {
  ShoppingCart,
  CreditCard,
  Package,
  RefreshCw,
  Users,
  BarChart3,
  Search,
  Smartphone,
  Lightbulb,
  Code2,
  Wrench,
  Rocket,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";

const painPoints = [
  {
    problem: "Paying monthly platform fees that eat into your margins",
    solution: "Custom platform with zero monthly fees — you own it outright",
  },
  {
    problem: "Limited by what Shopify or WooCommerce lets you customize",
    solution: "100% customizable — every feature built exactly how you need it",
  },
  {
    problem: "Checkout friction causing abandoned carts",
    solution: "Optimized checkout flow designed for maximum conversion",
  },
  {
    problem: "Inventory and orders scattered across multiple systems",
    solution: "Unified platform connecting inventory, orders, shipping, and accounting",
  },
  {
    problem: "Scaling means migrating to a new platform entirely",
    solution: "Architecture built to handle 10x growth without rebuilding",
  },
  {
    problem: "Generic store that looks like every other competitor",
    solution: "Custom design that reflects your brand and stands out in the market",
  },
];

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Product Catalog",
    description: "Unlimited products, variants, categories. Advanced filtering and search built in.",
    color: "#F59E0B",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    description: "Cards, Apple Pay, Google Pay, bank transfers. 135+ currencies supported.",
    color: "#10B981",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock tracking, low-stock alerts, supplier integration.",
    color: "#726AFF",
  },
  {
    icon: RefreshCw,
    title: "Subscriptions",
    description: "Recurring billing for memberships, subscription boxes, or SaaS products.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Customer Accounts",
    description: "Order history, wishlists, saved addresses. Loyalty programs optional.",
    color: "#8B5CF6",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Product pages that rank. Structured data, fast loading, mobile-first.",
    color: "#EF4444",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Map your products, pricing, and customer journey",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description: "Create a store experience that converts",
    icon: Code2,
  },
  {
    title: "Build",
    description: "Develop with Stripe, shipping, and inventory integration",
    icon: Wrench,
  },
  {
    title: "Launch",
    description: "Go live with marketing support and analytics",
    icon: Rocket,
  },
];

const stats = [
  { value: "$0", label: "Monthly Fees", trend: "No platform costs" },
  { value: "100%", label: "Ownership", trend: "Your code, forever" },
  { value: "+42%", label: "Conversion Rate", trend: "vs template stores" },
  { value: "< 2s", label: "Page Load", trend: "Performance optimized" },
];

const faqs = [
  {
    question: "Do you build on Shopify or WooCommerce?",
    answer:
      "We can, but we specialize in custom-built eCommerce platforms using modern tools like Next.js and Stripe. This gives you more control, better performance, and no monthly platform fees.",
  },
  {
    question: "How do you handle payments?",
    answer:
      "We integrate with Stripe for all payment processing — cards, Apple Pay, Google Pay, bank transfers, and more. Stripe handles PCI compliance so you don't have to.",
  },
  {
    question: "Can you migrate my existing store?",
    answer:
      "Yes. We can migrate products, customers, and order history from most platforms. We'll map out the migration plan before we start.",
  },
  {
    question: "What about inventory and shipping?",
    answer:
      "We integrate with inventory management systems and shipping providers. Real-time stock tracking, shipping rate calculation, and label printing — all built in.",
  },
  {
    question: "Do you handle ongoing maintenance?",
    answer:
      "Yes. We offer monthly retainers that include updates, bug fixes, performance monitoring, and new feature development.",
  },
];

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      service="ecommerce"
      eyebrow="eCommerce"
      headline="eCommerce Built for Conversion"
      subheadline="Sell products, subscriptions, and services online — with a platform designed to grow with you."
      painPoints={painPoints}
      capabilities={capabilities}
      processSteps={processSteps}
      stats={stats}
      faqs={faqs}
      ctaHeadline="Ready to Start Selling?"
      ctaSubheadline="Tell us what you're selling. We'll show you how to sell more of it."
    />
  );
}
