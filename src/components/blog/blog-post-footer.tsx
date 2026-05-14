import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CopyLinkButton } from "./copy-link-button";
import { BottomCTA } from "./bottom-cta";
import { NewsletterForm } from "./newsletter-form";

interface BlogPostFooterProps {
  authorName: string;
  authorRole: string;
  authorBio: string;
}

export function BlogPostFooter({
  authorName,
  authorRole,
  authorBio,
}: BlogPostFooterProps) {
  const initials = authorName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="mt-16">
      <BottomCTA />

      <hr className="border-[#E8E8F0] my-10" />

      {/* Author bio card */}
      <div className="bg-[#F9F9FB] rounded-xl p-6 flex items-start gap-5">
        <div className="shrink-0 w-16 h-16 rounded-full bg-[#726AFF]/10 border border-[#726AFF]/20 flex items-center justify-center">
          <span className="text-[#726AFF] text-lg font-heading font-bold">
            {initials}
          </span>
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-[#0F1226]">{authorName}</p>
          <p className="text-sm text-[#9CA3AF]">{authorRole}</p>
          <p className="text-sm text-[#525252] mt-2 leading-relaxed line-clamp-2">
            {authorBio}
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-10">
        <NewsletterForm />
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between mt-8">
        <Link
          href="/blog"
          className="text-sm text-[#525252] hover:text-[#726AFF] inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </Link>
        <CopyLinkButton />
      </div>
    </div>
  );
}
