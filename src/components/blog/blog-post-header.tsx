interface BlogPostHeaderProps {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  authorName: string;
  authorRole: string;
}

const categoryLabels: Record<string, string> = {
  "case-study": "Case Study",
  "problem-solution": "Problem / Solution",
  engineering: "Engineering",
  industry: "Industry Insights",
  process: "Behind the Scenes",
};

export function BlogPostHeader({
  title,
  description,
  date,
  category,
  readingTime,
  authorName,
  authorRole,
}: BlogPostHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#726AFF] bg-[#726AFF]/10 px-3 py-1 rounded-full">
          {categoryLabels[category] || category}
        </span>
        <span className="text-[#9CA3AF] text-sm font-mono">{readingTime}</span>
        <span className="text-[#9CA3AF] text-sm font-mono">
          {formattedDate}
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-[-0.03em] text-[#0F1226] leading-[1.1]">
        {title}
      </h1>

      <p className="text-lg text-[#525252] mt-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-3 mt-8">
        <div className="w-10 h-10 rounded-full bg-[#726AFF]/10 border border-[#726AFF]/20 flex items-center justify-center">
          <span className="text-[#726AFF] text-sm font-heading font-bold">
            {authorName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0F1226]">{authorName}</p>
          <p className="text-xs text-[#9CA3AF]">{authorRole}</p>
        </div>
      </div>
    </header>
  );
}
