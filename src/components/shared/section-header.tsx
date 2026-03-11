import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  centered = true,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <p className={cn(
          "text-sm font-semibold uppercase tracking-wider mb-3",
          dark ? "text-primary/80" : "text-primary"
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("mb-4", dark && "text-white")}>{headline}</h2>
      {subheadline && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
