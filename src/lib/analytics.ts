export function trackEvent(name: string, properties?: Record<string, string>) {
  // Vercel Analytics custom events
  if (typeof window !== "undefined" && (window as unknown as { va?: (cmd: string, data: unknown) => void }).va) {
    (window as unknown as { va: (cmd: string, data: unknown) => void }).va("event", { name, ...properties });
  }
}

export function trackCTAClick(ctaName: string, page: string) {
  trackEvent("cta_click", { cta: ctaName, page });
}

export function trackFormStart() {
  trackEvent("form_started");
}

export function trackFormSubmit() {
  trackEvent("form_submitted");
}

export function trackServicePageView(service: string) {
  trackEvent("service_page_view", { service });
}

export function trackNavClick(link: string) {
  trackEvent("nav_click", { link });
}
