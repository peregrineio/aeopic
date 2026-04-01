import { FAQPattern } from "./types";

export const companyInfo = {
  name: "Aeopic",
  email: "contact@aeopic.com",
  location: "Houston, Texas",
  type: "Custom software studio",
  responseTime: "Within 24 hours",
  website: "https://aeopic.com",
};

export const faqPatterns: FAQPattern[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "sup", "yo", "good morning", "good afternoon", "howdy"],
    response:
      "Hey there! 👋 I'm the Aeopic assistant. I can help with questions about our services, pricing, process, or which industries we serve. What would you like to know?",
    quickReplies: ["What do you build?", "How much does it cost?", "What industries?", "Talk to someone"],
  },
  {
    id: "services",
    keywords: ["services", "what do you do", "what do you build", "offer", "capabilities", "help", "build"],
    response:
      "We build four things for local businesses:\n\n• **Custom Web Apps** — CRMs, portals, dashboards\n• **AI-Powered Tools** — Smart automation & support\n• **Marketing & SEO** — Get found online\n• **eCommerce** — Sell products & services\n\nWhich one interests you? Or **[see all our services](/services)**.",
    quickReplies: ["Custom Web Apps", "AI Tools", "Marketing", "eCommerce"],
  },
  {
    id: "pricing",
    keywords: [
      "price",
      "cost",
      "how much",
      "pricing",
      "budget",
      "afford",
      "expensive",
      "cheap",
      "investment",
      "money",
      "rate",
      "fee",
      "charge",
    ],
    response:
      "Every project is different, so our pricing is always custom. After a quick discovery call, we'll give you a clear, fixed price — no vague ranges, no hidden fees.\n\nMost projects range from a few thousand to tens of thousands depending on scope.\n\n**[Get your free consultation](/get-started)** and we'll give you a real number.",
    quickReplies: ["Get free consultation", "What's included?", "Talk to someone"],
  },
  {
    id: "timeline",
    keywords: [
      "timeline",
      "how long",
      "time",
      "weeks",
      "months",
      "duration",
      "deadline",
      "fast",
      "quick",
      "when",
      "delivery",
    ],
    response:
      "Most projects launch in **8-12 weeks**. We work in weekly sprints so you see real progress every week.\n\nMarketing services are ongoing monthly.\n\n**[Get started](/get-started)** and we'll give you a specific timeline for your project.",
    quickReplies: ["Get started", "What's the process?", "How much?"],
  },
  {
    id: "process",
    keywords: ["process", "how does it work", "steps", "workflow", "approach", "methodology", "what happens"],
    response:
      "We follow a proven 4-step process:\n\n1. **Discovery** — We learn about your business and goals\n2. **Blueprint** — We design the architecture before coding\n3. **Build & Iterate** — Weekly demos, your feedback shapes the product\n4. **Launch & Grow** — Go live and we stick around\n\n**[See our full process](/process)**",
    quickReplies: ["Get started", "How much?", "What do you build?"],
  },
  {
    id: "ownership",
    keywords: ["own", "ownership", "code", "vendor", "lock-in", "proprietary", "mine", "keep"],
    response:
      "Yes — you own **100% of everything** we build. The code, the design, the data — it's all yours. No vendor lock-in, no proprietary platforms.\n\nEven if you stop working with us, you keep everything. Any developer can maintain it.",
    quickReplies: ["Get started", "How much?"],
  },
  {
    id: "contact",
    keywords: ["contact", "talk", "call", "phone", "email", "human", "person", "speak", "reach", "someone"],
    response:
      "You can reach us at **contact@aeopic.com** — we typically respond within 24 hours.\n\nOr **[fill out our quick form](/get-started)** and we'll schedule a call with you.",
    quickReplies: ["Get free consultation", "What do you build?"],
  },
  {
    id: "web-apps",
    keywords: ["web app", "webapp", "crm", "portal", "dashboard", "platform", "custom app", "software"],
    response:
      "We build **custom web applications** tailored to your exact workflow — CRMs, customer portals, operations dashboards, booking systems, and admin panels.\n\nAll production-grade, all yours to own.\n\n**[Learn more about Custom Web Apps](/services/web-apps)**",
    quickReplies: ["How much?", "How long?", "Get started"],
  },
  {
    id: "ai-tools",
    keywords: [
      "ai",
      "artificial intelligence",
      "chatbot",
      "ticket",
      "knowledge base",
      "automation",
      "automate",
      "support",
    ],
    response:
      "We build **AI-powered business tools** — smart ticket systems, knowledge bases, customer support chat, and automated workflows.\n\nOur AI tools learn YOUR business, not generic patterns.\n\n**[Learn more about AI Tools](/services/ai-tools)**",
    quickReplies: ["How much?", "Get started", "Is my data safe?"],
  },
  {
    id: "marketing",
    keywords: ["marketing", "seo", "social media", "google", "ads", "advertising", "content", "visibility", "found"],
    response:
      "We handle **Marketing & SEO** — social media management, search engine optimization, Google Business Profile, and paid advertising.\n\nData-driven strategies that bring real customers to your door.\n\n**[Learn more about Marketing](/services/marketing)**",
    quickReplies: ["How much?", "Get started"],
  },
  {
    id: "ecommerce",
    keywords: [
      "ecommerce",
      "e-commerce",
      "store",
      "shop",
      "sell",
      "product",
      "subscription",
      "payment",
      "stripe",
      "checkout",
    ],
    response:
      "We build **eCommerce platforms** — product stores, subscription billing, service booking, and online ordering. All powered by Stripe.\n\n**[Learn more about eCommerce](/services/ecommerce)**",
    quickReplies: ["How much?", "Get started"],
  },
  {
    id: "industries",
    keywords: [
      "hvac",
      "plumber",
      "plumbing",
      "contractor",
      "remodel",
      "lawn",
      "landscap",
      "dentist",
      "dental",
      "doctor",
      "medical",
      "restaurant",
      "lawyer",
      "law",
      "auto",
      "detail",
      "clean",
      "pest",
      "industry",
      "who do you work with",
    ],
    response:
      "We work with local service businesses across many industries — HVAC, plumbing, contractors, lawn care, medical clinics, restaurants, law offices, auto repair, and cleaning companies.\n\n**[See all industries we serve](/industries)**",
    quickReplies: ["Get started", "What do you build?", "How much?"],
  },
  {
    id: "data-security",
    keywords: ["data", "security", "safe", "secure", "privacy", "hipaa", "encrypt", "protection"],
    response:
      "Your data stays yours. We use end-to-end encryption, role-based access controls, and enterprise-level security practices.\n\nYour data is never shared with anyone and never used to train AI models. For medical clients, we build HIPAA-ready systems.",
    quickReplies: ["Get started", "What do you build?"],
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank", "bye", "goodbye", "later", "appreciate", "awesome", "great", "perfect"],
    response:
      "You're welcome! If you have more questions, I'm here anytime.\n\nWhen you're ready to talk to the team, **[get your free consultation](/get-started)**. Have a great day! 🚀",
  },
];

export const defaultResponse = {
  response:
    "Great question! I might not have the specific answer, but our team definitely does.\n\n**[Fill out our quick form](/get-started)** and we'll get back to you within 24 hours. Or email us at contact@aeopic.com.",
  quickReplies: ["Get free consultation", "What do you build?", "Talk to someone"],
};
