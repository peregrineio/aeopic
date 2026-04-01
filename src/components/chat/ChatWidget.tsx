"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChatButton } from "./ChatButton";
import { ChatWindow } from "./ChatWindow";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickReplies } from "./QuickReplies";
import { TypingIndicator } from "./TypingIndicator";
import { Message } from "@/lib/chat/types";
import { findBestMatch } from "@/lib/chat/matchEngine";

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "bot",
  content:
    "Hey there! 👋 I'm the Aeopic assistant. Got questions about our services, pricing, or process? I'm here to help!\n\nOr if you're ready, **[get your free consultation here](/get-started)**!",
  timestamp: new Date(),
  quickReplies: [
    "What do you build?",
    "How much does it cost?",
    "What industries?",
    "Talk to someone",
  ],
};

const SESSION_STORAGE_KEY = "aeopic_chat_closed";
const INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2 minutes
const CLOSE_DELAY = 3000; // 3 seconds

export function ChatWidget() {
  const pathname = usePathname();
  const router = useRouter();

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef<{ messages: Message[]; startTime: Date | null; page: string }>({
    messages: [],
    startTime: null,
    page: "",
  });
  const transcriptSentRef = useRef(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<Date>(new Date());

  // Send transcript to API
  const sendTranscript = useCallback(() => {
    if (transcriptSentRef.current) return;

    const conversation = conversationRef.current;
    const userMessages = conversation.messages.filter((m) => m.role === "user");

    // Only send if 2+ user messages
    if (userMessages.length < 2) return;
    if (!conversation.startTime) return;

    transcriptSentRef.current = true;

    // Fire and forget - don't block UI
    fetch("/api/chat-transcript", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: conversation.messages.map((m) => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp.toISOString(),
        })),
        page: conversation.page,
        startTime: conversation.startTime.toISOString(),
        endTime: new Date().toISOString(),
      }),
    }).catch((err) => console.error("Failed to send transcript:", err));
  }, []);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    lastActivityRef.current = new Date();

    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }

    inactivityTimeoutRef.current = setTimeout(() => {
      sendTranscript();
    }, INACTIVITY_TIMEOUT);
  }, [sendTranscript]);

  // Scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Show greeting when chat opens for the first time
  const showGreeting = useCallback(() => {
    if (!hasGreeted) {
      const greetingWithTimestamp = {
        ...GREETING_MESSAGE,
        timestamp: new Date(),
      };
      setMessages([greetingWithTimestamp]);
      conversationRef.current.messages = [greetingWithTimestamp];
      conversationRef.current.startTime = new Date();
      conversationRef.current.page = pathname;
      setHasGreeted(true);
    }
  }, [hasGreeted, pathname]);

  // Handle opening the chat
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setHasUnread(false);
    showGreeting();

    // Cancel pending transcript send (user reopened)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Focus input after animation
    setTimeout(() => {
      inputRef.current?.focus();
    }, 350);
  }, [showGreeting]);

  // Handle closing the chat
  const handleClose = useCallback(() => {
    setIsOpen(false);
    // Mark as closed in session storage
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    }
    // Return focus to button
    chatButtonRef.current?.focus();

    // Send transcript after delay (in case user reopens)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      sendTranscript();
    }, CLOSE_DELAY);
  }, [sendTranscript]);

  // Toggle chat
  const handleToggle = useCallback(() => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  }, [isOpen, handleClose, handleOpen]);

  // Auto-open behavior
  useEffect(() => {
    if (typeof window === "undefined") return;

    const wasClosed = sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
    if (wasClosed) return;

    // Delay auto-open on /get-started page
    const delay = pathname === "/get-started" ? 5000 : 100;

    const timer = setTimeout(() => {
      handleOpen();
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname, handleOpen]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Send transcript on page unload or visibility change
  useEffect(() => {
    const handleBeforeUnload = () => {
      sendTranscript();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendTranscript();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [sendTranscript]);

  // Reset inactivity timer when messages change
  useEffect(() => {
    if (messages.length > 0) {
      resetInactivityTimer();
    }
  }, [messages, resetInactivityTimer]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !chatWindowRef.current) return;

    const chatWindow = chatWindowRef.current;
    const focusableElements = chatWindow.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    chatWindow.addEventListener("keydown", handleTabKey);
    return () => chatWindow.removeEventListener("keydown", handleTabKey);
  }, [isOpen, messages]);

  // Generate unique ID
  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Handle sending a message
  const handleSendMessage = useCallback(
    (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isTyping) return;

      // Add user message
      const userMessage: Message = {
        id: generateId(),
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      conversationRef.current.messages.push(userMessage);

      // Show typing indicator
      setIsTyping(true);

      // Random delay for "thinking"
      const delay = 800 + Math.random() * 400;

      setTimeout(() => {
        // Get bot response
        const result = findBestMatch(trimmed);

        const botMessage: Message = {
          id: generateId(),
          role: "bot",
          content: result.response,
          timestamp: new Date(),
          quickReplies: result.quickReplies,
        };

        setMessages((prev) => [...prev, botMessage]);
        conversationRef.current.messages.push(botMessage);
        setIsTyping(false);

        // Show unread indicator if chat is closed
        if (!isOpen) {
          setHasUnread(true);
        }
      }, delay);
    },
    [isTyping, isOpen]
  );

  // Handle quick reply selection
  const handleQuickReply = useCallback(
    (reply: string) => {
      // Navigation quick replies
      if (
        reply.toLowerCase() === "get free consultation" ||
        reply.toLowerCase() === "get started"
      ) {
        router.push("/get-started");
        return;
      }

      // Send as normal message
      handleSendMessage(reply);
    },
    [router, handleSendMessage]
  );

  // Get the last message's quick replies
  const latestBotMessage = messages.filter((m) => m.role === "bot").slice(-1)[0];
  const quickReplies = !isTyping && latestBotMessage?.quickReplies;

  return (
    <>
      <ChatWindow
        ref={chatWindowRef}
        isOpen={isOpen}
        onClose={handleClose}
        messageContainerRef={messageContainerRef}
        inputArea={
          <ChatInput
            ref={inputRef}
            onSend={handleSendMessage}
            disabled={isTyping}
            placeholder="Type a message..."
          />
        }
      >
        {messages.map((message, index) => {
          const isFirstBot =
            message.role === "bot" &&
            (index === 0 || messages[index - 1]?.role !== "bot");
          return (
            <ChatMessage
              key={message.id}
              message={message}
              showAvatar={isFirstBot}
              isLatest={index === messages.length - 1}
            />
          );
        })}
        {isTyping && <TypingIndicator />}
        {quickReplies && quickReplies.length > 0 && (
          <QuickReplies
            replies={quickReplies}
            onSelect={handleQuickReply}
            disabled={isTyping}
          />
        )}
        <div ref={messagesEndRef} />
      </ChatWindow>

      <ChatButton
        ref={chatButtonRef}
        isOpen={isOpen}
        onClick={handleToggle}
        hasUnread={hasUnread}
      />
    </>
  );
}
