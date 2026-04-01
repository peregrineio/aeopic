"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuickRepliesProps {
  replies: string[];
  onSelect: (reply: string) => void;
  disabled?: boolean;
}

export function QuickReplies({ replies, onSelect, disabled = false }: QuickRepliesProps) {
  if (!replies || replies.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      className="flex flex-wrap gap-2 mt-3 ml-10"
    >
      {replies.map((reply, index) => (
        <button
          key={index}
          onClick={() => !disabled && onSelect(reply)}
          disabled={disabled}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm",
            "border border-primary/30 text-primary",
            "transition-all duration-200",
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
          )}
        >
          {reply}
        </button>
      ))}
    </motion.div>
  );
}
