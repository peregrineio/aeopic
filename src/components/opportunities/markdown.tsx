/**
 * Minimal admin-authored markdown renderer. Supports h2/h3, bold, italic,
 * inline code, unordered/ordered lists, and paragraphs. Content is escaped
 * to prevent XSS — listings are typed by Aeopic staff but treated as
 * untrusted text by default.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inline(s: string): string {
  let out = escapeHtml(s);
  // inline code
  out = out.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1 py-0.5 text-[0.9em]">$1</code>');
  // bold
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italic (single underscore or single asterisk, not adjacent to alphanumerics)
  out = out.replace(/(^|\s)\*([^*]+)\*(\s|$)/g, "$1<em>$2</em>$3");
  return out;
}

interface ListingMarkdownProps {
  source: string;
  className?: string;
}

export function ListingMarkdown({ source, className }: ListingMarkdownProps) {
  const lines = source.split("\n");
  const blocks: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        `<h2 class="mt-8 text-2xl font-semibold tracking-tight">${inline(line.slice(3).trim())}</h2>`
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(
        `<h3 class="mt-6 text-lg font-semibold">${inline(line.slice(4).trim())}</h3>`
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(`<li>${inline(lines[i].slice(2).trim())}</li>`);
        i++;
      }
      blocks.push(
        `<ul class="my-4 list-disc space-y-1.5 pl-6 marker:text-[#726AFF]">${items.join("")}</ul>`
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(
          `<li>${inline(lines[i].replace(/^\d+\.\s/, "").trim())}</li>`
        );
        i++;
      }
      blocks.push(
        `<ol class="my-4 list-decimal space-y-1.5 pl-6 marker:text-[#726AFF]">${items.join("")}</ol>`
      );
      continue;
    }

    // Paragraph — gather adjacent non-empty lines
    const paragraphLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }
    blocks.push(
      `<p class="mt-4 leading-relaxed text-foreground/90">${inline(paragraphLines.join(" "))}</p>`
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: blocks.join("") }}
    />
  );
}
