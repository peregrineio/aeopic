"use client";

import { motion } from "framer-motion";

// Shared animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Custom Web Applications - Dashboard/CRM Mock
export function WebAppsMockup() {
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-5 bg-slate-100 rounded-md flex items-center px-2">
          <span className="text-[8px] text-slate-400">app.yourcompany.com/dashboard</span>
        </div>
      </div>

      <div className="flex gap-3 h-[calc(100%-2rem)]">
        {/* Sidebar */}
        <motion.div
          className="w-14 flex-shrink-0 flex flex-col gap-2 py-2 bg-slate-50 rounded-lg"
          variants={itemVariants}
        >
          <div className="w-8 h-8 mx-auto rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded bg-primary" />
          </div>
          {[
            { icon: "📊", active: true },
            { icon: "👥", active: false },
            { icon: "📋", active: false },
            { icon: "⚙️", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center text-xs ${
                item.active ? "bg-primary/20" : "hover:bg-slate-100"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Header Bar */}
          <motion.div
            className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex gap-3 items-center">
              <span className="text-xs font-semibold text-slate-700">Dashboard</span>
              <span className="text-[10px] text-slate-400">Overview</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[8px]">JD</div>
              <span className="text-[10px] text-slate-600">John Doe</span>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-4 gap-2"
            variants={itemVariants}
          >
            {[
              { value: "2,847", label: "Customers", color: "bg-primary/10 border-primary/20", textColor: "text-primary" },
              { value: "$48.2K", label: "Revenue", color: "bg-green-50 border-green-200", textColor: "text-green-600" },
              { value: "156", label: "Orders", color: "bg-blue-50 border-blue-200", textColor: "text-blue-600" },
              { value: "98.2%", label: "Uptime", color: "bg-amber-50 border-amber-200", textColor: "text-amber-600" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg border ${stat.color}`}
              >
                <div className="text-[9px] text-slate-500">{stat.label}</div>
                <div className={`text-sm font-bold ${stat.textColor}`}>{stat.value}</div>
              </div>
            ))}
          </motion.div>

          {/* Main Grid */}
          <div className="flex-1 grid grid-cols-3 gap-2">
            {/* Chart Area */}
            <motion.div
              className="col-span-2 bg-slate-50 rounded-lg p-2 flex flex-col border border-slate-100"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-slate-600">Monthly Revenue</span>
                <div className="flex gap-1">
                  <span className="h-4 px-1.5 bg-white border border-slate-200 rounded text-[8px] text-slate-500 flex items-center">Day</span>
                  <span className="h-4 px-1.5 bg-primary/10 border border-primary/30 rounded text-[8px] text-primary flex items-center">Week</span>
                </div>
              </div>
              {/* Bar Chart */}
              <div className="flex-1 flex items-end gap-1 px-1">
                {[
                  { h: 65, label: "Jan" },
                  { h: 45, label: "Feb" },
                  { h: 80, label: "Mar" },
                  { h: 55, label: "Apr" },
                  { h: 90, label: "May" },
                  { h: 70, label: "Jun" },
                  { h: 85, label: "Jul" },
                  { h: 60, label: "Aug" },
                  { h: 75, label: "Sep" },
                  { h: 95, label: "Oct" },
                  { h: 50, label: "Nov" },
                  { h: 80, label: "Dec" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <motion.div
                      className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                    />
                    <span className="text-[6px] text-slate-400 mt-0.5">{bar.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="bg-slate-50 rounded-lg p-2 border border-slate-100"
              variants={itemVariants}
            >
              <span className="text-[10px] font-medium text-slate-600">Recent Activity</span>
              <div className="space-y-1.5 mt-2">
                {[
                  { name: "Sarah M.", action: "New order", time: "2m ago", avatar: "SM" },
                  { name: "Mike R.", action: "Payment received", time: "15m ago", avatar: "MR" },
                  { name: "Lisa K.", action: "Signed up", time: "1h ago", avatar: "LK" },
                  { name: "Tom B.", action: "Updated profile", time: "2h ago", avatar: "TB" },
                  { name: "Anna P.", action: "New ticket", time: "3h ago", avatar: "AP" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[6px] text-primary font-medium">
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] font-medium text-slate-700 truncate">{activity.name}</div>
                      <div className="text-[7px] text-slate-400">{activity.action} • {activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}

// AI-Powered Business Tools - Chat/Ticket System Mock
export function AIToolsMockup() {
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-5 bg-slate-100 rounded-md flex items-center px-2">
          <div className="w-3 h-3 rounded bg-primary/50 mr-1 flex items-center justify-center text-[6px] text-white">AI</div>
          <span className="text-[8px] text-slate-500">AI Support Assistant</span>
        </div>
      </div>

      <div className="flex gap-3 h-[calc(100%-2rem)]">
        {/* Tickets Sidebar */}
        <motion.div
          className="w-1/4 flex-shrink-0 bg-slate-50 rounded-lg p-2 border border-slate-100"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-semibold text-slate-600">Tickets</span>
            <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center text-[10px] text-primary">+</div>
          </div>
          {/* Ticket List */}
          <div className="space-y-1.5">
            {[
              { id: "#1247", subject: "Order not delivered", status: "bg-green-400", priority: "High", active: true },
              { id: "#1246", subject: "Refund request", status: "bg-amber-400", priority: "Medium", active: false },
              { id: "#1245", subject: "Account access", status: "bg-primary", priority: "Low", active: false },
              { id: "#1244", subject: "Billing question", status: "bg-slate-400", priority: "Low", active: false },
            ].map((ticket, i) => (
              <div
                key={i}
                className={`p-1.5 rounded-md ${ticket.active ? "bg-white border border-primary/30 shadow-sm" : "hover:bg-slate-100"}`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${ticket.status}`} />
                  <span className="text-[8px] font-medium text-slate-700">{ticket.id}</span>
                  {ticket.priority === "High" && (
                    <span className="text-[6px] px-1 py-0.5 bg-red-100 text-red-600 rounded">!</span>
                  )}
                </div>
                <div className="text-[7px] text-slate-500 mt-0.5 truncate">{ticket.subject}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <motion.div
            className="flex items-center gap-2 px-2 py-1.5 bg-slate-50 rounded-t-lg border border-slate-100"
            variants={itemVariants}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-[8px] text-white font-medium">AI</div>
            <div>
              <div className="text-[9px] font-medium text-slate-700">Support Assistant</div>
              <div className="text-[7px] text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Online • Ready to help
              </div>
            </div>
            <div className="ml-auto flex gap-1">
              <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[8px]">📞</div>
              <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[8px]">⋮</div>
            </div>
          </motion.div>

          {/* Messages */}
          <motion.div
            className="flex-1 p-2 space-y-2 overflow-hidden bg-slate-50/50 border-x border-slate-100"
            variants={itemVariants}
          >
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[70%] bg-primary text-white rounded-xl rounded-tr-sm px-2.5 py-1.5">
                <p className="text-[9px]">Hi, I haven&apos;t received my order yet. It&apos;s been 5 days.</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-purple-600 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-white/80"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div className="max-w-[75%] bg-white border border-slate-200 rounded-xl rounded-tl-sm px-2.5 py-1.5 shadow-sm">
                <p className="text-[9px] text-slate-700">I&apos;m sorry to hear that! Let me look up your order. I found order #4521 placed on April 4th.</p>
                <p className="text-[9px] text-slate-700 mt-1">It shows &quot;In Transit&quot; - expected delivery is tomorrow. Would you like me to:</p>
                {/* Suggested Actions */}
                <div className="flex gap-1 mt-2">
                  <button className="px-2 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded text-[7px] text-primary font-medium">Track Package</button>
                  <button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-[7px] text-slate-600">Request Refund</button>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-purple-600 flex-shrink-0" />
              <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Input Area */}
          <motion.div
            className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-b-lg"
            variants={itemVariants}
          >
            <div className="flex-1 h-7 bg-slate-50 border border-slate-200 rounded-lg flex items-center px-2">
              <span className="text-[9px] text-slate-400">Type your message...</span>
            </div>
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/90">
              <span className="text-white text-xs">→</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-100/50 via-transparent to-primary/10 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}

// Marketing - Analytics Dashboard Mock
export function MarketingMockup() {
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-5 bg-slate-100 rounded-md flex items-center px-2">
          <span className="text-[8px] text-slate-500">analytics.yourcompany.com</span>
        </div>
      </div>

      <div className="h-[calc(100%-2rem)] flex flex-col gap-2">
        {/* Top Stats Row */}
        <motion.div className="flex gap-2" variants={itemVariants}>
          {[
            { label: "Impressions", value: "247,892", change: "+12.4%", up: true, icon: "👁" },
            { label: "Clicks", value: "18,432", change: "+8.2%", up: true, icon: "👆" },
            { label: "Conv. Rate", value: "4.2%", change: "+0.3%", up: true, icon: "🎯" },
            { label: "Cost/Conv", value: "$24.50", change: "-15%", up: false, icon: "💰" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-2">
              <div className="flex items-center gap-1">
                <span className="text-[10px]">{stat.icon}</span>
                <span className="text-[8px] text-slate-500">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-sm font-bold text-slate-800">{stat.value}</span>
                <span className={`text-[8px] font-medium ${stat.up ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-5 gap-2">
          {/* Line Chart */}
          <motion.div
            className="col-span-3 bg-slate-50 border border-slate-100 rounded-lg p-2"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-slate-600">Traffic Overview</span>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[8px] text-slate-500">Organic</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[8px] text-slate-500">Paid</span>
                </div>
              </div>
            </div>
            {/* Chart Lines */}
            <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 12.5}
                  x2="200"
                  y2={i * 12.5}
                  stroke="#e2e8f0"
                  strokeWidth="0.5"
                />
              ))}
              {/* Organic line */}
              <motion.path
                d="M 0 35 Q 20 30, 40 25 T 80 20 T 120 15 T 160 12 T 200 8"
                fill="none"
                stroke="hsl(243 100% 71%)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              {/* Paid line */}
              <motion.path
                d="M 0 45 Q 20 42, 40 38 T 80 32 T 120 28 T 160 22 T 200 18"
                fill="none"
                stroke="#4ade80"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
            <div className="flex justify-between mt-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day} className="text-[7px] text-slate-400">{day}</span>
              ))}
            </div>
          </motion.div>

          {/* Channels */}
          <motion.div
            className="col-span-2 bg-slate-50 border border-slate-100 rounded-lg p-2"
            variants={itemVariants}
          >
            <span className="text-[10px] font-medium text-slate-600">Traffic Sources</span>
            <div className="space-y-1.5 mt-2">
              {[
                { name: "Google Search", pct: 42, color: "bg-blue-500", visitors: "8.2K" },
                { name: "Social Media", pct: 28, color: "bg-primary", visitors: "5.4K" },
                { name: "Email Campaigns", pct: 18, color: "bg-green-500", visitors: "3.5K" },
                { name: "Direct Traffic", pct: 12, color: "bg-amber-500", visitors: "2.3K" },
              ].map((channel, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8px] text-slate-600">{channel.name}</span>
                    <span className="text-[8px] font-medium text-slate-700">{channel.visitors}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${channel.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${channel.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                    <span className="w-7 text-[8px] text-slate-500 text-right">{channel.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div className="flex gap-2" variants={itemVariants}>
          {/* Top Pages */}
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-2">
            <span className="text-[10px] font-medium text-slate-600">Top Pages</span>
            <div className="space-y-1 mt-1.5">
              {[
                { page: "/", name: "Homepage", views: "12,847" },
                { page: "/services", name: "Services", views: "8,923" },
                { page: "/pricing", name: "Pricing", views: "6,456" },
              ].map((page, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[7px] text-slate-400">{page.page}</span>
                    <span className="text-[8px] text-slate-600">{page.name}</span>
                  </div>
                  <span className="text-[8px] font-medium text-slate-700">{page.views}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-2">
            <span className="text-[10px] font-medium text-slate-600">Active Campaigns</span>
            <div className="space-y-1 mt-1.5">
              {[
                { name: "Spring Sale 2024", status: "Active", color: "bg-green-400" },
                { name: "Brand Awareness", status: "Active", color: "bg-green-400" },
                { name: "Retargeting Q2", status: "Paused", color: "bg-amber-400" },
              ].map((campaign, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[8px] text-slate-600">{campaign.name}</span>
                  <div className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${campaign.color}`} />
                    <span className="text-[7px] text-slate-500">{campaign.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col justify-center gap-1">
            <button className="h-6 bg-primary hover:bg-primary/90 text-white rounded flex items-center justify-center">
              <span className="text-[8px] font-medium">+ New Campaign</span>
            </button>
            <button className="h-6 bg-white border border-slate-200 hover:bg-slate-50 rounded flex items-center justify-center">
              <span className="text-[8px] text-slate-600">Export Report</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-100/30 via-transparent to-blue-100/30 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}

// eCommerce - Product/Store Mock
export function EcommerceMockup() {
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 h-5 bg-slate-100 rounded-md flex items-center px-2">
          <div className="w-2 h-2 rounded-full bg-green-400 mr-1" />
          <span className="text-[8px] text-slate-500">yourstore.com/shop</span>
        </div>
      </div>

      <div className="h-[calc(100%-2rem)] flex flex-col gap-2">
        {/* Store Header */}
        <motion.div
          className="flex items-center justify-between px-2 py-1.5 bg-slate-50 border border-slate-100 rounded-lg"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-[8px] text-white font-bold">S</div>
            <div className="flex gap-3">
              {["Shop", "New Arrivals", "Sale"].map((item, i) => (
                <span key={i} className={`text-[9px] ${i === 0 ? "text-slate-800 font-medium" : "text-slate-500"}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-20 h-5 bg-white border border-slate-200 rounded flex items-center px-1.5">
              <span className="text-[8px] text-slate-400">Search...</span>
              <span className="ml-auto text-[8px]">🔍</span>
            </div>
            <div className="relative">
              <div className="w-5 h-5 bg-white border border-slate-200 rounded flex items-center justify-center text-[10px]">🛒</div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[7px] text-white font-medium">3</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="flex-1 grid grid-cols-4 gap-2"
          variants={itemVariants}
        >
          {[
            { name: "Classic Sneakers", price: "$89.00", originalPrice: null, badge: null, image: "👟", rating: "4.8" },
            { name: "Leather Bag", price: "$149.00", originalPrice: null, badge: "NEW", image: "👜", rating: "4.9" },
            { name: "Watch Pro", price: "$199.00", originalPrice: "$249.00", badge: "SALE", image: "⌚", rating: "4.7" },
            { name: "Sunglasses", price: "$79.00", originalPrice: null, badge: null, image: "🕶️", rating: "4.6" },
          ].map((product, i) => (
            <motion.div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-lg p-1.5 flex flex-col hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-md mb-1.5 flex items-center justify-center">
                <span className="text-2xl">{product.image}</span>
                {product.badge && (
                  <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[7px] font-bold ${
                    product.badge === "SALE" ? "bg-red-500 text-white" : "bg-primary text-white"
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>
              {/* Product Info */}
              <div className="text-[9px] font-medium text-slate-700 truncate">{product.name}</div>
              <div className="flex items-center gap-0.5 mt-0.5">
                <span className="text-[8px] text-amber-500">★</span>
                <span className="text-[7px] text-slate-500">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-slate-800">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[8px] text-slate-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <motion.button
                  className="w-5 h-5 bg-primary/10 hover:bg-primary/20 rounded flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-[10px] text-primary">+</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cart Summary */}
        <motion.div
          className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-primary/5 to-purple-100/50 rounded-lg border border-primary/20"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
              <span className="text-sm">🛒</span>
            </div>
            <div>
              <div className="text-[9px] text-slate-600">3 items in cart</div>
              <div className="text-[11px] font-bold text-slate-800">$317.00</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-white border border-slate-200 rounded text-[8px] text-slate-600 hover:bg-slate-50">
              View Cart
            </button>
            <motion.button
              className="px-3 py-1 bg-primary text-white rounded text-[8px] font-medium hover:bg-primary/90"
              whileHover={{ scale: 1.02 }}
            >
              Checkout →
            </motion.button>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          className="flex items-center justify-center gap-3 py-1"
          variants={itemVariants}
        >
          {[
            { name: "Visa", bg: "bg-blue-600" },
            { name: "MC", bg: "bg-red-500" },
            { name: "Amex", bg: "bg-blue-400" },
            { name: "PayPal", bg: "bg-blue-700" },
          ].map((method, i) => (
            <div
              key={i}
              className={`w-8 h-5 ${method.bg} rounded flex items-center justify-center`}
            >
              <span className="text-[6px] text-white font-bold">{method.name}</span>
            </div>
          ))}
          <span className="text-[8px] text-slate-400">Secure checkout</span>
        </motion.div>
      </div>

      {/* Subtle shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-100/30 via-transparent to-green-100/30 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}
