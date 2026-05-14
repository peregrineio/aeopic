"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "blog" }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 max-w-lg mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
          <Check className="h-5 w-5 text-emerald-500" />
        </div>
        <p className="text-lg font-heading font-bold text-white">
          You&apos;re in. Watch your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 max-w-lg mx-auto text-center">
      <h3 className="text-xl font-heading font-bold text-white">
        Stay in the loop
      </h3>
      <p className="text-sm text-white/40 mt-2">
        One email per month. Real engineering decisions from real client builds.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#726AFF]/60 focus:ring-1 focus:ring-[#726AFF]/20 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[#726AFF] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#5B54D6] transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
