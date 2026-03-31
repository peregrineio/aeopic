"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  CreditCard,
  FileText,
  MessageSquare,
  Search,
  BarChart3,
  Zap,
  Send,
  Bot,
  HelpCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Play,
  ArrowUpRight,
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

function WorkHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, ${brand.lavender}40 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 100% 50%, ${brand.purpleBg} 0%, transparent 40%),
              linear-gradient(180deg, white 0%, #FAFAFA 100%)
            `,
          }}
        />

        {/* Floating mockup previews */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-20 right-[5%] w-64 h-40 rounded-xl bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden hidden lg:block"
        >
          <div className="h-6 bg-gray-50 flex items-center px-3 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="p-3">
            <div className="h-3 rounded bg-gray-100 w-1/2 mb-2" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg" style={{ background: brand.purpleBg }} />
              <div className="h-16 rounded-lg bg-gray-50" />
              <div className="h-16 rounded-lg bg-gray-50" />
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
          className="absolute bottom-32 left-[8%] w-48 h-32 rounded-xl bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden hidden lg:block"
        >
          <div className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full" style={{ background: brand.lavender }} />
              <div className="h-2 rounded bg-gray-200 w-16" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 rounded bg-gray-100 w-full" />
              <div className="h-2 rounded bg-gray-100 w-3/4" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-site relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-600">Currently accepting new projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ color: brand.dark }}
          >
            What We
            <span
              className="block"
              style={{
                background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Operations platforms, customer portals, marketing websites, and AI-powered tools —
            custom-built software that transforms how businesses operate.
          </motion.p>

          {/* Capability pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: LayoutDashboard, label: "Operations Platforms" },
              { icon: Users, label: "Customer Portals" },
              { icon: Globe, label: "Marketing Websites" },
              { icon: Sparkles, label: "AI-Powered Tools" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default"
              >
                <item.icon className="w-4 h-4" style={{ color: brand.primary }} />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// OPERATIONS PLATFORM MOCKUP
// ============================================================================

function OperationsPlatformMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/30 border border-gray-200 overflow-hidden">
        {/* Browser header */}
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-white rounded-lg border border-gray-200 text-xs text-gray-500">
              app.yourcompany.com/dashboard
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* App content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 bg-[#0F1226] p-4 hidden md:block">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg" style={{ background: brand.primary }} />
              <span className="text-white font-semibold text-sm">ServicePro</span>
            </div>
            <nav className="space-y-1">
              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true },
                { icon: Calendar, label: "Schedule" },
                { icon: Users, label: "Customers" },
                { icon: FileText, label: "Invoices" },
                { icon: BarChart3, label: "Reports" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                    item.active
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-gray-50/50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-sm text-gray-500">Welcome back, Sarah</p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                  style={{ background: brand.primary }}
                >
                  + New Job
                </motion.button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: "Today's Jobs", value: "12", trend: "+3", icon: Calendar },
                { label: "Revenue (MTD)", value: "$48.2K", trend: "+18%", icon: DollarSign },
                { label: "Active Techs", value: "8", trend: "", icon: Users },
                { label: "Avg. Rating", value: "4.9", trend: "+0.2", icon: Star },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                    {stat.trend && (
                      <span className="text-xs text-green-600 font-medium">{stat.trend}</span>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Schedule grid */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Today&apos;s Schedule</h3>
                <span className="text-xs text-gray-500">March 31, 2026</span>
              </div>
              <div className="space-y-2">
                {[
                  { time: "9:00 AM", customer: "Johnson Residence", tech: "Mike T.", status: "In Progress", type: "AC Repair" },
                  { time: "11:30 AM", customer: "Smith Office", tech: "Sarah K.", status: "Scheduled", type: "Maintenance" },
                  { time: "2:00 PM", customer: "Garcia Home", tech: "Mike T.", status: "Scheduled", type: "Installation" },
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-600 w-20">{job.time}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{job.customer}</div>
                      <div className="text-xs text-gray-500">{job.type}</div>
                    </div>
                    <div className="text-xs text-gray-500">{job.tech}</div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {job.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CUSTOMER PORTAL MOCKUP
// ============================================================================

function CustomerPortalMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="mx-auto w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-gray-400/30">
        <div className="bg-white rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="h-12 bg-white flex items-center justify-between px-6">
            <span className="text-xs font-medium">9:41</span>
            <div className="w-20 h-6 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gray-300 rounded-sm" />
              <div className="w-6 h-3 bg-gray-300 rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="p-5 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500">Welcome back</p>
                <h2 className="text-lg font-bold text-gray-900">John Smith</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                JS
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-2xl text-white text-left"
                style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)` }}
              >
                <Calendar className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold">Book Service</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-2xl bg-gray-100 text-left"
              >
                <CreditCard className="w-6 h-6 mb-2 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Pay Invoice</span>
              </motion.button>
            </div>

            {/* Upcoming appointment */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Next Appointment</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">Confirmed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: brand.purpleBg }}>
                  <Calendar className="w-6 h-6" style={{ color: brand.primary }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AC Maintenance</p>
                  <p className="text-sm text-gray-500">Apr 2, 2026 · 10:00 AM</p>
                </div>
              </div>
            </div>

            {/* Recent invoices */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-900">Recent Invoices</span>
                <span className="text-xs text-gray-500">View all</span>
              </div>
              <div className="space-y-2">
                {[
                  { id: "#1234", amount: "$299", status: "Paid", date: "Mar 15" },
                  { id: "#1198", amount: "$450", status: "Paid", date: "Feb 28" },
                ].map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{invoice.id}</p>
                        <p className="text-xs text-gray-500">{invoice.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{invoice.amount}</p>
                      <p className="text-xs text-green-600">{invoice.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-4">
            {[
              { icon: LayoutDashboard, label: "Home", active: true },
              { icon: Calendar, label: "Book" },
              { icon: FileText, label: "Invoices" },
              { icon: MessageSquare, label: "Chat" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <item.icon
                  className="w-5 h-5"
                  style={{ color: item.active ? brand.primary : "#9ca3af" }}
                />
                <span
                  className="text-[10px] font-medium"
                  style={{ color: item.active ? brand.primary : "#9ca3af" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-3 border border-gray-100 hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-900">Payment Received</p>
            <p className="text-[10px] text-gray-500">$299.00</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="absolute -right-8 bottom-1/3 bg-white rounded-xl shadow-xl p-3 border border-gray-100 hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-900">Booking Confirmed</p>
            <p className="text-[10px] text-gray-500">Apr 2 at 10:00 AM</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// MARKETING WEBSITE MOCKUP
// ============================================================================

function MarketingWebsiteMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/30 border border-gray-200 overflow-hidden">
        {/* Browser header */}
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-white rounded-lg border border-gray-200 text-xs text-gray-500">
              www.yourcompany.com
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Website content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Nav */}
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white" />
              <span className="text-white font-semibold">CoolAir Pro</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Services</span>
              <span>About</span>
              <span>Reviews</span>
              <button className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium text-xs">
                Get Quote
              </button>
            </div>
          </div>

          {/* Hero */}
          <div className="px-8 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs mb-4"
                >
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  4.9 Rating · 500+ Reviews
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Houston&apos;s Most Trusted
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> HVAC Experts</span>
                </h1>
                <p className="text-white/60 mb-6 text-sm leading-relaxed">
                  24/7 emergency service. Same-day appointments. Licensed & insured technicians.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                  <button className="px-5 py-3 bg-white/10 text-white rounded-xl font-medium text-sm">
                    Book Online
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-white/60 text-xs mb-3 uppercase tracking-wide">Get a Free Quote</div>
                  <div className="space-y-3">
                    <div className="h-10 bg-white/10 rounded-lg" />
                    <div className="h-10 bg-white/10 rounded-lg" />
                    <div className="h-10 bg-white/10 rounded-lg" />
                    <button className="w-full h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium text-sm">
                      Get Quote →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="px-8 py-4 bg-black/20 flex items-center justify-between">
            {[
              { icon: MapPin, text: "Serving Houston & Surrounding Areas" },
              { icon: Clock, text: "24/7 Emergency Service" },
              { icon: CheckCircle2, text: "Licensed & Insured" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/60 text-xs">
                <item.icon className="w-4 h-4" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO metrics floating card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute -right-6 -bottom-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 w-56 hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-3">
          <Search className="w-4 h-4" style={{ color: brand.primary }} />
          <span className="text-xs font-semibold text-gray-900">SEO Performance</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Google Ranking", value: "#1", color: "text-green-600" },
            { label: "Monthly Visitors", value: "12.4K", color: "text-blue-600" },
            { label: "Page Speed", value: "98/100", color: "text-green-600" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{item.label}</span>
              <span className={`text-xs font-semibold ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// AI TOOLS MOCKUP
// ============================================================================

function AIToolsMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/30 border border-gray-200 overflow-hidden">
        {/* Browser header */}
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-white rounded-lg border border-gray-200 text-xs text-gray-500">
              support.yourcompany.com
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* App content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 hidden md:block">
            <div className="flex items-center gap-2 mb-6">
              <Bot className="w-6 h-6" style={{ color: brand.primary }} />
              <span className="font-semibold text-gray-900">AI Support Hub</span>
            </div>
            <div className="space-y-1 mb-6">
              {[
                { icon: MessageSquare, label: "Live Chat", count: 3, active: true },
                { icon: HelpCircle, label: "Tickets", count: 12 },
                { icon: FileText, label: "Knowledge Base" },
                { icon: BarChart3, label: "Analytics" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                    item.active
                      ? "bg-white shadow-sm border border-gray-100"
                      : "hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-gray-500" />
                    <span className={item.active ? "text-gray-900 font-medium" : "text-gray-600"}>
                      {item.label}
                    </span>
                  </div>
                  {item.count && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: item.active ? brand.purpleBg : "#f3f4f6",
                        color: item.active ? brand.primary : "#6b7280",
                      }}
                    >
                      {item.count}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* AI Stats */}
            <div className="p-3 rounded-xl" style={{ background: brand.purpleBg }}>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4" style={{ color: brand.primary }} />
                <span className="text-xs font-semibold" style={{ color: brand.primary }}>AI Performance</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-lg font-bold text-gray-900">87%</div>
                  <div className="text-[10px] text-gray-500">Auto-resolved</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">2.3s</div>
                  <div className="text-[10px] text-gray-500">Avg Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">
                  JD
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                  AI Assisted
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 bg-gray-50/50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold flex-shrink-0">
                  JD
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100 max-w-[80%]">
                  <p className="text-sm text-gray-700">How do I reschedule my appointment for next week?</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-3 justify-end"
              >
                <div className="rounded-2xl rounded-tr-sm p-3 max-w-[80%]" style={{ background: brand.primary }}>
                  <div className="flex items-center gap-1 mb-1">
                    <Bot className="w-3 h-3 text-white/80" />
                    <span className="text-[10px] text-white/80">AI Assistant</span>
                  </div>
                  <p className="text-sm text-white">I found your appointment for March 31st. Would you like to move it to next week? I have availability on:</p>
                  <div className="mt-2 space-y-1">
                    {["Mon, Apr 7 at 10:00 AM", "Tue, Apr 8 at 2:00 PM"].map((time) => (
                      <button
                        key={time}
                        className="block w-full text-left px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs text-white transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: brand.lavender }}
                >
                  <Bot className="w-4 h-4" style={{ color: brand.primary }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold flex-shrink-0">
                  JD
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm border border-gray-100 max-w-[80%]">
                  <p className="text-sm text-gray-700">Monday works perfectly!</p>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: brand.primary }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CAPABILITY SECTION
// ============================================================================

interface CapabilityData {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  Mockup: React.ComponentType;
}

const capabilities: CapabilityData[] = [
  {
    id: "operations",
    icon: LayoutDashboard,
    title: "Operations Platform",
    subtitle: "Run Your Business Smarter",
    description: "Full-featured CRM with scheduling, dispatching, invoicing, and team management. Everything your team needs in one place.",
    features: ["Job scheduling & dispatch", "Customer database", "Invoicing & payments", "Team management", "Real-time reporting"],
    Mockup: OperationsPlatformMockup,
  },
  {
    id: "portal",
    icon: Users,
    title: "Customer Portal",
    subtitle: "Self-Service, 24/7",
    description: "Let customers book appointments, pay invoices, and manage their accounts — without calling your office.",
    features: ["Online booking", "Invoice payments", "Service history", "Real-time notifications", "In-app messaging"],
    Mockup: CustomerPortalMockup,
  },
  {
    id: "marketing",
    icon: Globe,
    title: "Marketing Website",
    subtitle: "Get Found. Get Chosen.",
    description: "SEO-optimized, conversion-focused websites that turn visitors into customers. Mobile-first, lightning-fast.",
    features: ["SEO optimization", "Lead capture forms", "Google Business integration", "Mobile-first design", "Analytics tracking"],
    Mockup: MarketingWebsiteMockup,
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI-Powered Tools",
    subtitle: "Smart Automation",
    description: "Intelligent customer support, ticket automation, and knowledge bases that learn and improve over time.",
    features: ["AI chat support", "Ticket automation", "Knowledge base", "Smart routing", "Sentiment analysis"],
    Mockup: AIToolsMockup,
  },
];

function CapabilitySection({ capability, index }: { capability: CapabilityData; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32"
      style={{
        background: isEven
          ? "white"
          : `linear-gradient(180deg, ${brand.purpleBg}50 0%, white 100%)`,
      }}
    >
      <div className="container-site">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* Content */}
          <motion.div
            className={!isEven ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primarySoft} 100%)`,
                  boxShadow: `0 8px 30px -8px ${brand.primary}60`,
                }}
              >
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Capability {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: brand.dark }}>
              {capability.title}
            </h2>
            <p className="text-lg mb-4" style={{ color: brand.primary }}>
              {capability.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {capability.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {capability.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: brand.primary }} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/start"
              className="inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: brand.primary }}
            >
              Build yours
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <capability.Mockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// STATS SECTION
// ============================================================================

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "100%", label: "Code Ownership", description: "You own everything we build" },
    { value: "8-12", label: "Weeks to Launch", description: "Average project timeline" },
    { value: "24/7", label: "Uptime", description: "Your platform never sleeps" },
    { value: "10+", label: "Years Experience", description: "Combined engineering expertise" },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#0F1226] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: brand.primary }}
        />
      </div>

      <div className="container-site relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: brand.lavender }}>
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Teams Choose Aeopic
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: brand.lavender }}
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-white/50 text-sm">{stat.description}</div>
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

function WorkCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
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
            <Play className="w-8 h-8 text-white ml-1" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: brand.dark }}>
            Your Project Could Be Next
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Whether you need an operations platform, customer portal, marketing website,
            or AI-powered tools — let&apos;s build something worth showing off.
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
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
              style={{ borderColor: brand.lavender, color: brand.dark }}
            >
              See Our Process
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

export default function WorkPage() {
  return (
    <main>
      <WorkHero />

      {/* Capability sections */}
      {capabilities.map((capability, index) => (
        <CapabilitySection key={capability.id} capability={capability} index={index} />
      ))}

      <StatsSection />
      <WorkCTA />
    </main>
  );
}
