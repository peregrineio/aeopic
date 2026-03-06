import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4">{headline}</h2>
      {subheadline && (
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
