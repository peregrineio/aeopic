export const siteConfig = {
  name: "Aeopic",
  description: "Customer-tailored web applications, AI-powered tools, marketing, and eCommerce solutions.",
  url: "https://aeopic.com",
  email: "contact@aeopic.com",
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
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "HVAC & Home Services", href: "/industries/hvac", description: "Dispatch, booking & customer portals" },
      { label: "Plumbing & Electrical", href: "/industries/plumbing-electrical", description: "Local SEO, scheduling & reviews" },
      { label: "Contractors & Remodeling", href: "/industries/contractors", description: "Portfolio sites, CRM & lead tracking" },
      { label: "Lawn Care & Landscaping", href: "/industries/lawn-care", description: "Route optimization & customer management" },
      { label: "Medical & Dental", href: "/industries/medical", description: "Patient portals & appointment booking" },
      { label: "Restaurants", href: "/industries/restaurants", description: "Online ordering & reservations" },
      { label: "Law Offices", href: "/industries/law", description: "Client portals & case management" },
      { label: "Auto & Detailing", href: "/industries/auto", description: "Booking & service notifications" },
      { label: "Cleaning & Pest Control", href: "/industries/cleaning", description: "Recurring service & review generation" },
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
  industries: [
    { label: "HVAC & Home Services", href: "/industries/hvac" },
    { label: "Plumbing & Electrical", href: "/industries/plumbing-electrical" },
    { label: "Contractors", href: "/industries/contractors" },
    { label: "Lawn Care", href: "/industries/lawn-care" },
    { label: "Medical & Dental", href: "/industries/medical" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Law Offices", href: "/industries/law" },
    { label: "Auto & Detailing", href: "/industries/auto" },
    { label: "Cleaning & Pest Control", href: "/industries/cleaning" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get Started", href: "/start" },
  ],
};
