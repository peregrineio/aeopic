"use client";

import { Lightbulb, AlertTriangle, Sparkles } from "lucide-react";

interface CalloutProps {
  type?: "insight" | "warning" | "tip";
  children: React.ReactNode;
}

const styles = {
  insight: {
    border: "border-[#726AFF]",
    bg: "bg-[#726AFF]/5",
    icon: <Lightbulb className="h-5 w-5 text-[#726AFF] shrink-0 mt-0.5" />,
  },
  warning: {
    border: "border-amber-500",
    bg: "bg-amber-50",
    icon: (
      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
    ),
  },
  tip: {
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    icon: <Sparkles className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />,
  },
};

export function Callout({ type = "insight", children }: CalloutProps) {
  const s = styles[type];

  return (
    <div
      className={`rounded-xl p-5 my-8 border-l-4 ${s.border} ${s.bg} flex gap-3`}
    >
      {s.icon}
      <div className="text-sm text-[#525252] leading-relaxed [&>p]:mb-0">
        {children}
      </div>
    </div>
  );
}
