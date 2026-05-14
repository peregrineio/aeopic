import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocalBusinessSchema, OrganizationSchema } from "@/app/components/structured-data";
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
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  title: {
    default: "Aeopic | AI Software Development & Custom Web Apps | Houston, TX",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-61GKHKPRVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-61GKHKPRVG');
          `}
        </Script>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">{children}</div>
        </TooltipProvider>
      </body>
    </html>
  );
}
