"use client";

import * as React from "react";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import { BeforeAfter } from "./before-after";
import { MetricCounter } from "./metric-counter";
import { Callout } from "./callout";

function MdxImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!props.src) return null;
  return (
    <span className="block my-8 rounded-xl overflow-hidden">
      <Image
        src={props.src as string}
        alt={props.alt || ""}
        width={720}
        height={400}
        className="w-full h-auto rounded-xl"
      />
    </span>
  );
}

function InlineCTA({
  heading,
  body,
  href,
  label,
}: {
  heading?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="border-l-4 border-[#726AFF] bg-[#F9F9FB] rounded-xl p-6 my-12">
      <p className="text-lg font-heading font-bold text-[#0F1226]">
        {heading || "Need help with this?"}
      </p>
      <p className="text-sm text-[#525252] mt-2">
        {body || "We build custom solutions like this for clients every week."}
      </p>
      <a
        href={href || "/start"}
        className="inline-flex items-center gap-1.5 text-[#726AFF] font-semibold text-sm mt-4 hover:text-[#5B54D6] transition-colors"
      >
        {label || "Book a Strategy Call"} →
      </a>
    </div>
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="text-2xl font-heading font-bold mt-12 mb-4 tracking-[-0.02em] text-[#0F1226] scroll-mt-24"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="text-xl font-heading font-bold mt-8 mb-3 text-[#0F1226] scroll-mt-24"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-[#525252] leading-relaxed mb-6" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-[#726AFF] hover:underline transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-[#726AFF] pl-6 italic text-[#525252] my-8"
        {...props}
      >
        {children}
      </blockquote>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 text-[#525252] mb-6 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal pl-6 text-[#525252] mb-6 space-y-2"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    code: ({ children, className, ...props }) => {
      if (className) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="bg-[#F5F5F7] text-[#0F1226] px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="rounded-xl overflow-hidden my-8 border border-[#E8E8F0]"
        {...props}
      >
        {children}
      </pre>
    ),
    img: MdxImage as MDXComponents["img"],
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-[#E8E8F0] bg-[#F9F9FB] px-4 py-2 text-left text-sm font-semibold text-[#0F1226]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border border-[#E8E8F0] px-4 py-2 text-sm text-[#525252]"
        {...props}
      >
        {children}
      </td>
    ),
    hr: (props) => <hr className="border-[#E8E8F0] my-12" {...props} />,
    BeforeAfter,
    MetricCounter,
    Callout,
    InlineCTA,
  };
}
