"use client";

import { motion } from "framer-motion";

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

const agentNodes = [
  { id: "support", label: "Support", cx: 74, cy: 37 },
  { id: "lead", label: "Lead", cx: 222, cy: 37 },
  { id: "voice", label: "Voice AI", cx: 265, cy: 95 },
  { id: "ops", label: "Ops", cx: 222, cy: 153 },
  { id: "schedule", label: "Schedule", cx: 74, cy: 153 },
  { id: "research", label: "Research", cx: 31, cy: 95 },
];

const orchestratorCx = 148;
const orchestratorCy = 95;

const secondaryConnections = [
  { x1: 74, y1: 37, x2: 31, y2: 95 },
  { x1: 222, y1: 37, x2: 265, y2: 95 },
  { x1: 265, y1: 95, x2: 222, y2: 153 },
  { x1: 222, y1: 153, x2: 74, y2: 153 },
  { x1: 74, y1: 153, x2: 31, y2: 95 },
];

const metrics = [
  { label: "Active Agents", value: "11" },
  { label: "Tasks/hr", value: "847" },
  { label: "Uptime", value: "99.8%" },
  { label: "Cost/req", value: "$0.46" },
];

export function AIAgentsMockup() {
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-700/40 bg-[#030712] shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Browser Chrome — dark themed */}
      <div className="flex items-center gap-2 p-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
        </div>
        <div className="flex-1 h-5 bg-white/5 rounded-md flex items-center px-2">
          <span className="text-[8px] text-white/25 font-mono">
            agents.aeopic.com/dashboard
          </span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[calc(100%-2.5rem)]">
        {/* Left Panel — Metrics */}
        <motion.div
          variants={itemVariants}
          className="w-28 flex-shrink-0 border-r border-white/5 p-3 flex flex-col gap-3"
        >
          {/* System status */}
          <div className="mb-1">
            <div className="flex items-center gap-1.5 mb-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[9px] font-mono text-[#06B6D4]">
                SYSTEM LIVE
              </span>
            </div>
          </div>

          {metrics.map((m) => (
            <div key={m.label} className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
              <div className="text-[7px] text-white/30 mb-0.5">{m.label}</div>
              <div className="text-sm font-bold text-white">{m.value}</div>
            </div>
          ))}

          {/* Mini agent list */}
          <div className="mt-auto">
            <div className="text-[7px] text-white/20 uppercase tracking-wider mb-1.5">
              Agents
            </div>
            {["Orch.", "SE", "QA", "Legal", "Mktg"].map((a, i) => (
              <div key={a} className="flex items-center gap-1.5 py-0.5">
                <motion.div
                  className="w-1 h-1 rounded-full bg-[#06B6D4]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
                <span className="text-[8px] text-white/40">{a}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Panel — Network Visualization */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col p-3"
        >
          <div className="text-[9px] font-mono text-white/20 uppercase tracking-wider mb-2">
            Agent Network
          </div>

          {/* SVG Network */}
          <div className="flex-1 flex items-center justify-center">
            <svg
              viewBox="0 0 296 190"
              className="w-full max-w-[280px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Secondary connections (outer ring) */}
              {secondaryConnections.map((c, i) => (
                <motion.line
                  key={i}
                  x1={c.x1}
                  y1={c.y1}
                  x2={c.x2}
                  y2={c.y2}
                  stroke="#06B6D4"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                />
              ))}

              {/* Hub spokes — orchestrator to each agent */}
              {agentNodes.map((node, i) => (
                <motion.line
                  key={node.id}
                  x1={orchestratorCx}
                  y1={orchestratorCy}
                  x2={node.cx}
                  y2={node.cy}
                  stroke="#06B6D4"
                  strokeWidth="0.75"
                  strokeOpacity="0.35"
                  strokeDasharray="3 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                />
              ))}

              {/* Outer agent nodes */}
              {agentNodes.map((node, i) => (
                <g key={node.id}>
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="10"
                    fill="#06B6D4"
                    fillOpacity="0.08"
                    stroke="#06B6D4"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  />
                  <text
                    x={node.cx}
                    y={node.cy + 3}
                    textAnchor="middle"
                    fontSize="5"
                    fill="#06B6D4"
                    fillOpacity="0.7"
                    fontFamily="monospace"
                  >
                    {node.label.split(" ")[0]}
                  </text>
                </g>
              ))}

              {/* Central orchestrator node */}
              <motion.circle
                cx={orchestratorCx}
                cy={orchestratorCy}
                r="20"
                fill="#06B6D4"
                fillOpacity="0.12"
                stroke="#06B6D4"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.circle
                cx={orchestratorCx}
                cy={orchestratorCy}
                r="20"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="1"
                strokeOpacity="0.2"
                animate={{ r: [20, 28, 20] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <text
                x={orchestratorCx}
                y={orchestratorCy - 2}
                textAnchor="middle"
                fontSize="5.5"
                fill="#06B6D4"
                fontFamily="monospace"
                fontWeight="bold"
              >
                ORCH
              </text>
              <text
                x={orchestratorCx}
                y={orchestratorCy + 7}
                textAnchor="middle"
                fontSize="4"
                fill="#06B6D4"
                fillOpacity="0.6"
                fontFamily="monospace"
              >
                active
              </text>
            </svg>
          </div>

          {/* Bottom status bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between pt-2 border-t border-white/5"
          >
            <span className="text-[8px] text-white/20 font-mono">
              All agents nominal
            </span>
            <div className="flex items-center gap-1">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[8px] text-[#06B6D4] font-mono">LIVE</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle outer glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4]/5 via-transparent to-[#06B6D4]/5 rounded-xl blur-xl -z-10" />
    </motion.div>
  );
}
