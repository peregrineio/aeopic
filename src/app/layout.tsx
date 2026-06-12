import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocalBusinessSchema, OrganizationSchema } from "@/app/components/structured-data";
import { CookieConsentProvider } from "@/components/cookie-consent";
import "./globals.css";

// DM Sans - premium, modern, sophisticated (Google alternative to Satoshi)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeopic.com"),
  // NOTE: Do NOT set a global `canonical` here. A layout-level canonical is
  // inherited by every page that doesn't override it, forcing them all to
  // canonicalize to "/" (the homepage) — which makes search engines treat
  // location/industry/blog/programmatic pages as duplicates and refuse to
  // index them. Each page should self-canonicalize: pages without an explicit
  // `alternates.canonical` correctly default to their own URL.
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  title: {
    default: "Aeopic | Custom Web Apps & AI Software | Houston, TX",
    template: "%s | Aeopic",
  },
  description:
    "Custom web apps, AI tools, marketing & eCommerce. Houston-based. Remote-friendly.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aeopic | AI Software Development & Custom Web Apps | Houston, TX",
    description:
      "Custom web apps, AI tools, marketing & eCommerce. Houston-based. Remote-friendly.",
    url: "https://aeopic.com",
    siteName: "Aeopic",
    locale: "en_US",
    type: "website",
    // Images handled by opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeopic | AI Software Development Houston",
    description:
      "Custom web apps, AI tools, marketing & eCommerce. Houston-based. Remote-friendly.",
    site: "@aeopic",
    // Images handled by opengraph-image.tsx
  },
  verification: {
    google: "PENDING_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <CookieConsentProvider />
        <LocalBusinessSchema />
        <OrganizationSchema />
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
