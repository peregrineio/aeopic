"use client";

import { forwardRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}

export const ChatButton = forwardRef<HTMLButtonElement, ChatButtonProps>(
  ({ isOpen, onClick, hasUnread }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 right-6 z-[9999]",
          "w-14 h-14 rounded-full",
          "cta-gradient text-white",
          "flex items-center justify-center",
          "shadow-lg shadow-primary/30",
          "hover:scale-110 transition-transform duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
      >
        {/* Pulse animation ring for unread messages */}
        {hasUnread && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        )}

        {/* Icon with rotation transition */}
        <span
          className={cn(
            "relative transition-transform duration-300",
            isOpen && "rotate-90"
          )}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </span>
      </button>
    );
  }
);

ChatButton.displayName = "ChatButton";
