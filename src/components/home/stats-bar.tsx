"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "8–12",
    label: "Weeks avg. to launch",
  },
  {
    value: "100%",
    label: "Code ownership, always",
  },
  {
    value: "10+",
    label: "Years combined engineering",
  },
  {
    value: "0",
    label: "Vendor lock-in, ever",
  },
];

export function StatsBar() {
  return (
    <section className="bg-[#F6F7FB] border-y border-gray-200">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`py-10 text-center ${
                index < stats.length - 1 ? "lg:border-r border-gray-200" : ""
              } ${index % 2 === 0 ? "border-r border-gray-200 lg:border-r" : ""} ${
                index < 2 ? "border-b border-gray-200 lg:border-b-0" : ""
              }`}
            >
              <p className="text-[2.8rem] font-heading font-bold text-[#726AFF] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[0.85rem] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
