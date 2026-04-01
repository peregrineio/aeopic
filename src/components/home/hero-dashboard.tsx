"use client";

import { motion } from "framer-motion";

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Main Dashboard Card */}
      <div className="relative bg-white rounded-2xl shadow-xl shadow-purple-500/10 overflow-hidden border border-gray-200">
        {/* Purple top-line gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#726AFF] to-transparent" />

        {/* Browser Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {/* Browser Dots */}
            <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
          </div>
          <span className="text-gray-900 text-xs font-medium tracking-wide">
            Business Dashboard
          </span>
          <div className="w-12" /> {/* Spacer for centering */}
        </div>

        {/* Dashboard Content */}
        <div className="p-4">
          {/* 3 KPI Cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Revenue KPI */}
            <div className="bg-[#F6F7FB] rounded-xl border border-gray-100 p-4">
              <p className="text-[#726AFF] text-xl font-bold leading-tight">
                $48.2K
              </p>
              <p className="text-gray-500 text-[0.72rem] mt-1">Revenue</p>
              <p className="text-purple-500/70 text-[0.72rem] mt-0.5">
                ↑ 18% this month
              </p>
            </div>

            {/* Bookings KPI */}
            <div className="bg-[#F6F7FB] rounded-xl border border-gray-100 p-4">
              <p className="text-[#a78bfa] text-xl font-bold leading-tight">
                312
              </p>
              <p className="text-gray-500 text-[0.72rem] mt-1">New Bookings</p>
              <p className="text-purple-500/70 text-[0.72rem] mt-0.5">
                ↑ 24% vs last
              </p>
            </div>

            {/* Rating KPI */}
            <div className="bg-[#F6F7FB] rounded-xl border border-gray-100 p-4">
              <p className="text-[#c4b5fd] text-xl font-bold leading-tight">
                4.9★
              </p>
              <p className="text-gray-500 text-[0.72rem] mt-1">Avg Rating</p>
              <p className="text-purple-500/70 text-[0.72rem] mt-0.5">
                ↑ 0.2 pts
              </p>
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="bg-[#F6F7FB] rounded-xl border border-gray-100 p-4">
            <p className="text-gray-500 text-xs mb-3">
              Monthly Revenue · Last 6 Months
            </p>

            {/* SVG Bar Chart */}
            <svg viewBox="0 0 380 100" className="w-full h-auto">
              <defs>
                <linearGradient
                  id="barGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#726AFF" />
                  <stop offset="100%" stopColor="rgba(114,106,255,0.2)" />
                </linearGradient>
              </defs>

              {/* Bars */}
              {/* Oct */}
              <rect
                x="20"
                y="55"
                width="40"
                height="30"
                rx="4"
                fill="url(#barGradient)"
                opacity="0.55"
              />
              {/* Nov */}
              <rect
                x="80"
                y="45"
                width="40"
                height="40"
                rx="4"
                fill="url(#barGradient)"
                opacity="0.65"
              />
              {/* Dec */}
              <rect
                x="140"
                y="35"
                width="40"
                height="50"
                rx="4"
                fill="url(#barGradient)"
                opacity="0.75"
              />
              {/* Jan */}
              <rect
                x="200"
                y="25"
                width="40"
                height="60"
                rx="4"
                fill="url(#barGradient)"
                opacity="0.85"
              />
              {/* Feb */}
              <rect
                x="260"
                y="18"
                width="40"
                height="67"
                rx="4"
                fill="url(#barGradient)"
                opacity="0.92"
              />
              {/* Mar - Current Month (solid) */}
              <rect
                x="320"
                y="8"
                width="40"
                height="77"
                rx="4"
                fill="#726AFF"
              />

              {/* Month Labels */}
              <text x="40" y="95" textAnchor="middle" fill="#6b7280" fontSize="9">
                Oct
              </text>
              <text
                x="100"
                y="95"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="9"
              >
                Nov
              </text>
              <text
                x="160"
                y="95"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="9"
              >
                Dec
              </text>
              <text
                x="220"
                y="95"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="9"
              >
                Jan
              </text>
              <text
                x="280"
                y="95"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="9"
              >
                Feb
              </text>
              <text
                x="340"
                y="95"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="9"
                fontWeight="600"
              >
                Mar
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Notification Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg"
      >
        <div className="flex items-start gap-3">
          <span className="text-lg">🚀</span>
          <div>
            <p className="text-gray-900 text-sm font-semibold">
              New booking received
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              Sarah M. · HVAC Tune-Up · $299
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
