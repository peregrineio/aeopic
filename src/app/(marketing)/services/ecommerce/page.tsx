"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  Users,
  Mail,
  BarChart3,
  Smartphone,
  Search,
  ShoppingBag,
  RefreshCw,
  Calendar,
  Store,
  ArrowRight,
  Check,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FAQSection } from "@/components/shared/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedServices } from "@/components/services/related-services";

const platforms = [
  {
    icon: ShoppingBag,
    title: "Product Stores",
    description:
      "Sell physical or digital products with full inventory management, variant support, and shipping integration.",
    color: "#726AFF",
  },
  {
    icon: RefreshCw,
    title: "Subscription Services",
    description:
      "Build recurring revenue with membership sites, subscription boxes, or SaaS billing.",
    color: "#38a169",
  },
  {
    icon: Calendar,
    title: "Service Sales",
    description:
      "Sell services with integrated booking, scheduling, and payment — perfect for consultants and agencies.",
    color: "#3b82f6",
  },
  {
    icon: Store,
    title: "Marketplace Platforms",
    description:
      "Multi-vendor marketplaces with seller management, commission tracking, and payouts.",
    color: "#f59e0b",
  },
];

const platformFeatures = [
  {
    icon: CreditCard,
    title: "Stripe-Powered Payments",
    description: "Cards, Apple Pay, Google Pay, bank transfers — all secure",
    color: "#38a169",
  },
  {
    icon: Users,
    title: "Customer Accounts",
    description: "Order history, saved addresses, wishlists",
    color: "#726AFF",
  },
  {
    icon: Mail,
    title: "Email Notifications",
    description: "Order confirmations, shipping updates, promotions",
    color: "#3b82f6",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Sales, traffic, conversion rates at a glance",
    color: "#f59e0b",
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimized",
    description: "Perfect experience on every device",
    color: "#1e3a5f",
  },
  {
    icon: Search,
    title: "SEO-Optimized Pages",
    description: "Product pages that rank on Google",
    color: "#38a169",
  },
];

const checkoutSteps = [
  { icon: ShoppingCart, label: "Cart" },
  { icon: Users, label: "Checkout" },
  { icon: CreditCard, label: "Payment" },
  { icon: Check, label: "Confirmation" },
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
    <>
      <ServiceHero
        eyebrow="eCommerce"
        headline="eCommerce Built for Conversion"
        subheadline="Sell products, subscriptions, and services online — with a platform designed to grow with you."
      />

      {/* What We Build - Visual Mockup Cards */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <SectionHeader
            headline="What We Build"
            subheadline="Whether you're selling products, services, or subscriptions — we build the platform that fits."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  {/* Mockup Preview */}
                  <div className="bg-[#0F1226] p-4 h-40 relative overflow-hidden">
                    {/* Fake UI elements */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-white/10 flex items-center justify-center"
                        >
                          <div
                            className="w-6 h-6 rounded"
                            style={{ backgroundColor: `${platform.color}40` }}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Colored accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: platform.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${platform.color}20` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: platform.color }}
                        />
                      </div>
                      <h3 className="font-semibold">{platform.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {platform.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features - Colored Cards Grid */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            headline="Everything You Need to Sell Online"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{
                    borderTopColor: feature.color,
                    borderTopWidth: "3px",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Powered by Stripe - Checkout Flow */}
      <section className="section-padding bg-[#0F1226]">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Powered by Stripe</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Secure, reliable payment processing trusted by millions of businesses worldwide.
            </p>
          </motion.div>

          {/* Checkout Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-0"
          >
            {checkoutSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-2">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-white/80 text-sm">{step.label}</span>
                  </div>
                  {index < checkoutSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-white/40 mx-4 hidden md:block" />
                  )}
                </div>
              );
            })}
          </motion.div>

          <p className="text-center text-white/50 text-sm mt-10">
            PCI-compliant • Apple Pay & Google Pay • Bank transfers • 135+ currencies
          </p>
        </div>
      </section>

      {/* Why Custom */}
      <section className="section-padding bg-[#F6F7FB]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Why Custom eCommerce?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Off-the-shelf platforms charge monthly fees, limit customization,
              and slow you down. A custom platform costs the same over 2-3 years
              — but you own it, control it, and can scale it infinitely.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <p className="text-3xl font-bold text-primary mb-2">$0</p>
                <p className="text-sm text-muted-foreground">
                  Monthly Platform Fees
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Code Ownership</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <p className="text-3xl font-bold text-primary mb-2">∞</p>
                <p className="text-sm text-muted-foreground">
                  Customization Options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <RelatedServices currentService="ecommerce" />

      <CTASection
        headline="Ready to Start Selling?"
        subheadline="Tell us what you're selling. We'll show you how to sell more of it."
        ctaText="Start Your Project"
        ctaHref="/start"
        variant="dark"
      />
    </>
  );
}
