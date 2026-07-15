"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Share2, ArrowRight } from "lucide-react";

type FormVariant = "employee" | "sales" | "contractor";

interface SidebarProps {
  title: string;
  compensationLine: string;
  variant: FormVariant;
  filled?: boolean;
  postedAt: string | null;
  closesAt: string | null;
}

const FORM_TARGETS: Record<FormVariant, { id: string; label: string }> = {
  employee: { id: "employee-application-form", label: "Apply Now" },
  sales: { id: "sales-application-form", label: "Submit Application" },
  contractor: { id: "contractor-proposal-form", label: "Submit Proposal" },
};

function fmtDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ListingSidebar({
  title,
  compensationLine,
  variant,
  filled = false,
  postedAt,
  closesAt,
}: SidebarProps) {
  function scrollToForm() {
    const el = document.getElementById(FORM_TARGETS[variant].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = el.querySelector<HTMLElement>("input, select, textarea, button");
      firstField?.focus({ preventScroll: true });
    }
  }

  async function copyShareLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Couldn't copy link — please copy from the address bar");
    }
  }

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <p className="mt-1 text-lg font-semibold text-[#726AFF]">
          {compensationLine}
        </p>

        {filled ? (
          <Button
            type="button"
            disabled
            className="mt-5 w-full"
            variant="secondary"
            size="lg"
          >
            Role Currently Filled
          </Button>
        ) : (
          <Button
            type="button"
            onClick={scrollToForm}
            className="mt-5 w-full bg-[#726AFF] hover:bg-[#5B54D6]"
            size="lg"
          >
            {FORM_TARGETS[variant].label}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        )}

        <Button
          type="button"
          variant="outline"
          onClick={copyShareLink}
          className="mt-3 w-full"
        >
          <Share2 className="mr-2 size-4" />
          Share this opportunity
        </Button>

        <div className="mt-5 space-y-1.5 border-t pt-4 text-xs text-muted-foreground">
          <div>
            <span className="text-muted-foreground">Posted:</span>{" "}
            <span className="text-foreground">{fmtDate(postedAt)}</span>
          </div>
          {closesAt && (
            <div>
              <span className="text-muted-foreground">Closes:</span>{" "}
              <span className="text-foreground">{fmtDate(closesAt)}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
