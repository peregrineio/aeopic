"use client";

import { useState, forwardRef, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ onSend, disabled = false, placeholder = "Type a message..." }, ref) => {
    const [value, setValue] = useState("");

    const handleSend = () => {
      const trimmed = value.trim();
      if (trimmed && !disabled) {
        onSend(trimmed);
        setValue("");
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <div className="border-t border-gray-100 p-3 bg-white">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "flex-1 px-4 py-2.5 rounded-full border border-gray-200",
              "text-sm placeholder:text-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
              "transition-all",
              disabled && "bg-gray-50 cursor-not-allowed opacity-60"
            )}
          />
          <button
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            aria-label="Send message"
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "transition-all duration-200",
              value.trim() && !disabled
                ? "cta-gradient text-white hover:opacity-90"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }
);

ChatInput.displayName = "ChatInput";
