"use client";

import { forwardRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  windowRef?: React.RefObject<HTMLDivElement | null>;
  messageContainerRef?: React.RefObject<HTMLDivElement | null>;
  inputArea: ReactNode;
  children: ReactNode;
}

export const ChatWindow = forwardRef<HTMLDivElement, ChatWindowProps>(
  ({ isOpen, onClose, messageContainerRef, inputArea, children }, ref) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "fixed z-[9998]",
              "bottom-24 right-4 sm:right-6",
              "w-[calc(100%-2rem)] sm:w-[380px]",
              "max-h-[70vh] sm:max-h-[500px]",
              "bg-white rounded-2xl shadow-2xl border border-gray-200",
              "flex flex-col overflow-hidden"
            )}
            role="dialog"
            aria-label="Chat with Aeopic"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Aeopic</span>
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Messages area */}
            <div
              ref={messageContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {children}
            </div>

            {/* Input area */}
            {inputArea}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

ChatWindow.displayName = "ChatWindow";
