import Link from "next/link";

interface InlineCTAProps {
  heading?: string;
  body?: string;
  href?: string;
  label?: string;
}

export function InlineCTA({
  heading = "Need help with this?",
  body = "We build custom solutions like this for clients every week.",
  href = "/start",
  label = "Book a Strategy Call",
}: InlineCTAProps) {
  return (
    <div className="border-l-4 border-[#726AFF] bg-[#F9F9FB] rounded-xl p-6 my-12">
      <p className="text-lg font-heading font-bold text-[#0F1226]">
        {heading}
      </p>
      <p className="text-sm text-[#525252] mt-2">{body}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[#726AFF] font-semibold text-sm mt-4 hover:text-[#5B54D6] transition-colors"
      >
        {label} →
      </Link>
    </div>
  );
}
