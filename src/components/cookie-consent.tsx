"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "aeopic_cookie_consent";

export function CookieConsentProvider() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if ((navigator as any).globalPrivacyControl) {
      localStorage.setItem(CONSENT_KEY, "denied");
      setConsent(false);
      return;
    }

    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") setConsent(true);
    else if (stored === "denied") setConsent(false);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent(true);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent(false);
  }

  if (!mounted) return null;

  return (
    <>
      {consent === true && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-61GKHKPRVG"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-61GKHKPRVG');`}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0F1226]/95 p-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm text-white/70">
              We use cookies and analytics to improve your experience. By
              accepting, you consent to Google Analytics tracking for site
              performance.{" "}
              <a
                href="/privacy"
                className="text-[#726AFF] hover:underline"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-lg bg-[#726AFF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5B54D6]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
