export const siteConfig = {
  name: "Aeopic",
  description: "Customer-tailored web applications, AI-powered tools, marketing, and eCommerce solutions.",
  url: "https://aeopic.com",
  email: "hello@aeopic.com",
  links: {
    // twitter: "",
    // github: "",
    // linkedin: "",
  },
};

export const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Web Apps", href: "/services/web-apps", description: "Platforms built for your workflow" },
      { label: "AI-Powered Tools", href: "/services/ai-tools", description: "Smart automation & support systems" },
      { label: "Marketing & SEO", href: "/services/marketing", description: "Get found, get chosen, get results" },
      { label: "eCommerce", href: "/services/ecommerce", description: "Sell products, subscriptions & services" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export const footerLinks = {
  services: [
    { label: "Custom Web Apps", href: "/services/web-apps" },
    { label: "AI-Powered Tools", href: "/services/ai-tools" },
    { label: "Marketing & SEO", href: "/services/marketing" },
    { label: "eCommerce", href: "/services/ecommerce" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get Started", href: "/start" },
  ],
};
