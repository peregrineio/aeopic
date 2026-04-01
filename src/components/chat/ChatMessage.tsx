"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/chat/types";

interface ChatMessageProps {
  message: Message;
  isLatest?: boolean;
  showAvatar?: boolean;
}

/**
 * Parses markdown-like syntax in bot messages
 * Supports: **bold** and [link text](url)
 */
function parseMessageContent(content: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyIndex = 0;

  // Combined regex for bold and links
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold text: **text**
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-semibold">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Link: [text](url)
      const linkText = match[4];
      const linkUrl = match[5];
      const isInternal = linkUrl.startsWith("/");

      if (isInternal) {
        parts.push(
          <Link
            key={`link-${keyIndex++}`}
            href={linkUrl}
            className="text-primary underline hover:text-primary/80"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={`link-${keyIndex++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            {linkText}
          </a>
        );
      }
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [content];
}

export function ChatMessage({ message, showAvatar = false }: ChatMessageProps) {
  const isBot = message.role === "bot";

  const parsedContent = useMemo(() => {
    if (isBot) {
      // Split by newlines and parse each line
      return message.content.split("\n").map((line, i, arr) => (
        <span key={i}>
          {parseMessageContent(line)}
          {i < arr.length - 1 && <br />}
        </span>
      ));
    }
    return message.content;
  }, [message.content, isBot]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("flex gap-2", !isBot && "justify-end")}
    >
      {/* Bot avatar */}
      {isBot && showAvatar && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Spacer when avatar not shown but it's a bot message */}
      {isBot && !showAvatar && <div className="w-8 flex-shrink-0" />}

      {/* Message bubble */}
      <div
        className={cn(
          "px-4 py-3 max-w-[85%]",
          isBot
            ? "bg-[#F6F7FB] text-gray-800 rounded-2xl rounded-bl-md"
            : "bg-gradient-to-r from-[#726AFF] to-[#5B54D6] text-white rounded-2xl rounded-br-md"
        )}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {parsedContent}
        </div>
      </div>
    </motion.div>
  );
}
