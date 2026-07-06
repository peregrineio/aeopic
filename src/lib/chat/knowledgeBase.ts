import { KBEntry } from "./types";

export const companyInfo = {
  name: "Aeopic",
  email: "contact@aeopic.com",
  location: "Houston, Texas",
  type: "Custom software studio",
  responseTime: "Within 24 hours",
  website: "https://aeopic.com",
};

/**
 * Exact-phrase conversational entries. These match ONLY via the exact-match
 * pre-pass (never indexed) so short tokens like "hi"/"yo" can't hijack
 * unrelated questions — the bug class that broke the old engine.
 */
export const conversationalEntries: { phrases: string[]; response?: string; quickReplies?: string[]; entryRef?: string }[] = [
  {
    // Stopword-only identity questions can't be retrieved — route exactly
    phrases: ["who are you", "what are you", "who am i talking to", "who is this", "what is this"],
    entryRef: "bot-identity",
  },
  {
    phrases: ["i love this site", "i love your site", "i love your website", "nice website", "nice site", "great site", "great website", "cool site", "love it", "this is great"],
    response: "Thank you! 💜 We build sites like this for our clients too — fully custom, fully owned by them.",
    quickReplies: ["Get a ballpark", "See your work", "What do you build?"],
  },
  {
    phrases: ["hi", "hello", "hey", "sup", "yo", "howdy", "good morning", "good afternoon", "good evening", "hey there", "hi there", "hello there"],
    response:
      "Hey there! 👋 I'm the Aeopic assistant. Ask me about our services, pricing, process, or open roles — or get a project ballpark in 60 seconds.",
    quickReplies: ["Get a ballpark", "What do you build?", "See your work", "Talk to a human"],
  },
  {
    phrases: ["thanks", "thank you", "thanks a lot", "thank you so much", "appreciate it", "awesome", "great", "perfect", "cool", "nice"],
    response:
      "You're welcome! If you have more questions, I'm here anytime.\n\nWhen you're ready to talk to the team, **[get your free consultation](/start)**. 🚀",
    quickReplies: ["Get a ballpark", "What do you build?"],
  },
  {
    phrases: ["bye", "goodbye", "see you", "later", "see ya", "gotta go"],
    response: "Have a great day! I'll be right here if anything comes up. 👋",
  },
];

export const faqPatterns: KBEntry[] = [
  {
    id: "services",
    title: "What we build",
    utterances: [
      "what do you do",
      "what do you build",
      "what services do you offer",
      "what are your capabilities",
      "what kind of work do you do",
      "what can you help me with",
    ],
    keywords: ["services", "offer", "capabilities", "build"],
    response:
      "We build four things for local businesses:\n\n• **Custom Web Apps** — CRMs, portals, dashboards\n• **AI Integrated Operating Systems** — Smart automation & support\n• **Custom AI Agents** — Autonomous agents for your operations\n• **Marketing & SEO** — Get found online\n\nWhich one interests you? Or **[see all our services](/services)**.",
    quickReplies: ["Custom Web Apps", "AI Tools", "AI Agents", "Marketing"],
    boostOn: ["/services"],
  },
  {
    id: "pricing",
    title: "Pricing",
    utterances: [
      "how much does it cost",
      "how much do you charge",
      "what is your pricing",
      "what does a website cost",
      "how much would it run me",
      "what is your rate",
      "do you have a price list",
      "is it expensive",
      "what is the fee",
      "what is the investment",
      "what is your budget range",
      "what is included in the price",
    ],
    keywords: ["price", "cost", "pricing", "budget", "expensive", "cheap", "investment", "money", "rate", "fee", "charge", "afford"],
    response:
      "Every project is custom-priced — after a quick discovery call you get a clear, fixed number. No hidden fees.\n\nWant a faster read? Two options:\n\n1. **[Try the interactive estimator](/pricing)** — instant range for your project type\n2. I can get you a ballpark right here in 4 quick questions",
    quickReplies: ["Get a ballpark", "Open the estimator", "What's included?"],
    boostOn: ["/pricing"],
  },
  {
    id: "timeline",
    title: "Timelines",
    utterances: [
      "how long does it take",
      "how long does a project take",
      "what is the timeline",
      "how fast can you deliver",
      "when can you start",
      "how many weeks does it take",
      "what is the turnaround time",
    ],
    keywords: ["timeline", "long", "weeks", "months", "duration", "deadline", "fast", "delivery", "turnaround"],
    response:
      "Most projects launch in **4–8 weeks**. We work in weekly sprints so you see real progress every week.\n\nMarketing services are ongoing monthly.\n\n**[Get started](/start)** and we'll give you a specific timeline for your project.",
    quickReplies: ["Get a ballpark", "What's the process?", "How much?"],
  },
  {
    id: "process",
    title: "Our process",
    utterances: [
      "how does it work",
      "what is your process",
      "what are the steps",
      "how do we get started working together",
      "what happens after i sign up",
      "what is your methodology",
    ],
    keywords: ["process", "steps", "workflow", "approach", "methodology"],
    response:
      "We follow a proven 4-step process:\n\n1. **Discovery** — We learn about your business and goals\n2. **Blueprint** — We design the architecture before coding\n3. **Build & Iterate** — Weekly demos, your feedback shapes the product\n4. **Launch & Grow** — Go live and we stick around\n\n**[See our full process](/process)**",
    quickReplies: ["Get started", "How much?", "What do you build?"],
    boostOn: ["/process"],
  },
  {
    id: "ownership",
    title: "Code ownership",
    utterances: [
      "do i own the code",
      "who owns the website",
      "is there vendor lock in",
      "can i take my site elsewhere",
      "do you use proprietary frameworks",
      "can another developer maintain it",
    ],
    keywords: ["own", "ownership", "code", "vendor", "lock-in", "proprietary", "keep"],
    response:
      "You own everything we build for you. The code, the design, the data. Ownership transfers upon completion of your engagement per your SLA terms. No proprietary frameworks. Any developer can maintain it.",
    quickReplies: ["Get started", "How much?"],
  },
  {
    id: "contact",
    title: "Contact the team",
    utterances: [
      "how do i contact you",
      "what is your email",
      "what is your phone number",
      "how do i reach you",
      "can i call you",
      "how do i talk to someone",
      "i want to speak with a person",
    ],
    keywords: ["contact", "call", "phone", "email", "reach", "speak", "talk", "number"],
    response:
      "You can reach us at **contact@aeopic.com** or **(979) 933-8032** — we typically respond within 24 hours.\n\nOr I can take your info right now and have the team reach out to you.",
    quickReplies: ["Talk to a human", "Get a ballpark"],
  },
  {
    id: "web-apps",
    title: "Custom Web Apps",
    utterances: [
      "do you build web apps",
      "can you build a crm",
      "i need a customer portal",
      "do you build dashboards",
      "can you build custom software",
      "i need a booking system",
      "do you build web applications",
      "custom web apps",
    ],
    keywords: ["web app", "webapp", "crm", "portal", "dashboard", "platform", "software", "booking", "admin"],
    response:
      "We build **custom web applications** tailored to your exact workflow — CRMs, customer portals, operations dashboards, booking systems, and admin panels.\n\nAll production-grade, all yours to own.\n\n**[Learn more about Custom Web Apps](/services/web-apps)**",
    quickReplies: ["Get a ballpark", "How long?", "Get started"],
    boostOn: ["/services/web-apps"],
  },
  {
    id: "ai-tools",
    title: "AI & Automation",
    utterances: [
      "do you build ai tools",
      "can you automate my business",
      "do you build chatbots",
      "i need workflow automation",
      "can you build an ai assistant for my company",
      "do you do artificial intelligence",
      "tell me about ai tools",
    ],
    keywords: ["ai", "artificial intelligence", "chatbot", "automation", "automate", "assistant", "workflows", "tools"],
    response:
      "We build **AI integrated operating systems** — smart ticket systems, knowledge bases, customer support chat, and automated workflows.\n\nOur systems learn YOUR business, not generic patterns.\n\n**[Learn more about AI Tools](/services/ai-tools)**",
    quickReplies: ["How much?", "Get started", "Is my data safe?"],
    boostOn: ["/services/ai-tools"],
  },
  {
    id: "marketing",
    title: "Marketing & SEO",
    utterances: [
      "do you do marketing",
      "can you help with seo",
      "do you manage social media",
      "can you run google ads",
      "i need help getting found online",
      "do you do advertising",
    ],
    keywords: ["marketing", "seo", "social media", "google", "ads", "advertising", "content", "visibility"],
    response:
      "We handle **Marketing & SEO** — social media management, search engine optimization, Google Business Profile, and paid advertising.\n\nData-driven strategies that bring real customers to your door.\n\n**[Learn more about Marketing](/services/marketing)**",
    quickReplies: ["How much?", "Get started"],
    boostOn: ["/services/marketing"],
  },
  {
    id: "ecommerce",
    title: "Payments & Commerce",
    utterances: [
      "do you build online stores",
      "can you build an ecommerce site",
      "i want to sell products online",
      "do you do subscription billing",
      "can you set up online ordering",
      "do you work with stripe",
    ],
    keywords: ["ecommerce", "e-commerce", "store", "shop", "sell", "products", "subscription", "payments", "stripe", "checkout", "ordering"],
    response:
      "We build **payments and commerce** directly into your custom platform — Stripe-powered checkout, subscription billing, service booking, and invoicing. No Shopify fees, no third-party limitations.\n\n**[Learn more about Custom Web Apps](/services/web-apps)**",
    quickReplies: ["How much?", "Get started"],
    boostOn: ["/services/web-apps"],
  },
  {
    id: "industries",
    title: "Industries we serve",
    utterances: [
      "what industries do you work with",
      "who do you work with",
      "do you work with hvac companies",
      "i am a plumber",
      "i own a restaurant",
      "do you work with law firms",
      "i run a landscaping business",
      "do you work with dentists",
      "i have a cleaning company",
      "do you work with contractors",
      "i own an auto shop",
    ],
    keywords: ["hvac", "plumber", "plumbing", "contractor", "remodeling", "lawn", "landscaping", "dentist", "dental", "doctor", "medical", "restaurant", "lawyer", "law", "auto", "detailing", "cleaning", "pest", "industry", "industries", "chamber"],
    response:
      "We work with local service businesses across many industries — HVAC, plumbing, contractors, lawn care, medical clinics, restaurants, law offices, auto repair, cleaning companies, and chambers of commerce.\n\n**[See all industries we serve](/industries)**",
    quickReplies: ["Get a ballpark", "What do you build?", "How much?"],
    boostOn: ["/industries"],
  },
  {
    id: "portfolio",
    title: "Our work",
    utterances: [
      "can i see examples of your work",
      "do you have a portfolio",
      "show me your past projects",
      "what have you built before",
      "do you have case studies",
      "who are your clients",
      "can i see samples",
    ],
    keywords: ["examples", "portfolio", "work", "projects", "case studies", "clients", "samples", "built"],
    response:
      "Absolutely — check out **[our work](/work)** for live projects and case studies.\n\nWe also write detailed build breakdowns on **[the blog](/blog)** if you want to see how we think.",
    quickReplies: ["Get a ballpark", "What do you build?", "What industries?"],
    boostOn: ["/work"],
  },
  {
    id: "opportunities",
    title: "Careers & contracting",
    utterances: [
      "are you hiring",
      "do you have any job openings",
      "how do i apply for a job",
      "do you have open positions",
      "are you looking for developers",
      "do you hire contractors",
      "can i work for you",
      "do you have careers",
      "are there freelance opportunities",
    ],
    keywords: ["hiring", "job", "jobs", "careers", "position", "positions", "openings", "apply", "freelance", "contractor", "developer", "role", "roles", "employment", "work for"],
    response:
      "Yes — we're growing! Check out **[our open opportunities](/opportunities)** for both full-time positions and contractor engagements.\n\nEvery listing has salary/compensation info and you can apply right on the page.",
    quickReplies: ["What do you build?", "Talk to a human"],
    boostOn: ["/opportunities"],
  },
  {
    id: "locations",
    title: "Service areas",
    utterances: [
      "where are you located",
      "what areas do you serve",
      "do you work in college station",
      "are you in houston",
      "do you serve my city",
      "do you work with businesses in texas",
      "do you work remotely with clients",
    ],
    keywords: ["located", "location", "areas", "serve", "houston", "texas", "college station", "bryan", "conroe", "tomball", "magnolia", "manor", "montgomery", "city", "local", "near"],
    response:
      "We're based in **Houston, Texas** and work with businesses across the state — College Station, Bryan, Conroe, Tomball, Magnolia, Manor, Montgomery County, and beyond.\n\nWe also work remotely with clients anywhere in the US.\n\n**[See our service areas](/locations)**",
    quickReplies: ["Get a ballpark", "What do you build?"],
    boostOn: ["/locations"],
  },
  {
    id: "blog",
    title: "Blog & resources",
    utterances: [
      "do you have a blog",
      "where can i read your articles",
      "do you have resources",
      "do you write case studies",
    ],
    keywords: ["blog", "articles", "resources", "read", "posts", "guides"],
    response:
      "We do! The **[Aeopic blog](/blog)** covers build breakdowns, case studies, and practical guides for local business owners.",
    quickReplies: ["See your work", "What do you build?"],
    boostOn: ["/blog"],
  },
  {
    id: "redesign",
    title: "Redesigns & rebuilds",
    utterances: [
      "can you redesign my website",
      "my website is outdated",
      "can you rebuild my existing site",
      "i already have a website but it is bad",
      "can you improve my current website",
      "can you fix my website",
    ],
    keywords: ["redesign", "rebuild", "outdated", "existing", "current", "improve", "fix", "old website", "refresh"],
    response:
      "Yes — a lot of our projects start exactly there. We'll audit what you have, keep what works, and rebuild what doesn't into something fast, modern, and yours to own.\n\n**[Tell us about your site](/start)** and we'll take a look.",
    quickReplies: ["Get a ballpark", "See your work"],
  },
  {
    id: "mobile",
    title: "Mobile apps",
    utterances: [
      "do you build mobile apps",
      "can you make an iphone app",
      "do you do android apps",
      "i need an app for my business",
    ],
    keywords: ["mobile", "app", "iphone", "ios", "android", "native"],
    response:
      "We build **mobile-first web apps** — they work beautifully on every phone, install to the home screen, and don't need app-store approval or separate iOS/Android builds.\n\nFor most local businesses that's faster, cheaper, and easier to maintain than native apps. Tell us your use case and we'll recommend the right approach.\n\n**[Get started](/start)**",
    quickReplies: ["Get a ballpark", "What do you build?"],
  },
  {
    id: "about",
    title: "About Aeopic",
    utterances: [
      "who are you",
      "what is aeopic",
      "tell me about your company",
      "who is behind aeopic",
      "how big is your team",
      "are you an agency",
    ],
    keywords: ["aeopic", "company", "team", "agency", "studio", "founders", "story"],
    response:
      "Aeopic is a **custom software studio in Houston, Texas**. We build web apps, AI agents, intelligent operating systems, and marketing engines for local businesses — production-grade work you fully own.\n\n**[More about us](/about)**",
    quickReplies: ["What do you build?", "See your work", "Get a ballpark"],
    boostOn: ["/about"],
  },
  {
    id: "bot-identity",
    title: "About this assistant",
    utterances: [
      "are you a bot",
      "are you a real person",
      "are you human",
      "am i talking to a robot",
      "are you an ai",
      "is this a chatbot",
    ],
    keywords: ["bot", "robot", "ai assistant"],
    response:
      "I'm a bot — and honestly, kind of a demo. I run **100% in your browser**: no AI API, no data leaves this page until you choose to share it. We build assistants like me (and much smarter ones) for our clients.\n\nWant a real human? I can connect you — the team replies within 24 hours.",
    quickReplies: ["Talk to a human", "Tell me about AI tools", "Get a ballpark"],
  },
  {
    id: "data-security",
    title: "Data security",
    utterances: [
      "is my data safe",
      "how do you handle security",
      "are you hipaa compliant",
      "do you encrypt data",
      "is your infrastructure secure",
      "are you soc 2 compliant",
    ],
    keywords: ["data", "security", "safe", "secure", "hipaa", "encryption", "protection", "soc", "iso", "compliant"],
    response:
      "Your data stays yours. We build on SOC 2 Type II and ISO 27001-certified infrastructure. End-to-end encryption, role-based access controls, and zero data retention options for sensitive workloads.\n\nYour data is never used to train AI models. For healthcare clients, HIPAA compliance is built into every build.\n\n**[View our subprocessor list](/legal/subprocessors)**",
    quickReplies: ["Get started", "Privacy policy", "What do you build?"],
    boostOn: ["/security"],
  },
  {
    id: "privacy",
    title: "Privacy",
    utterances: [
      "what is your privacy policy",
      "how do i delete my data",
      "what are my data rights",
      "do you comply with gdpr",
      "can i opt out",
    ],
    keywords: ["privacy", "tdpsa", "gdpr", "delete", "rights", "opt out", "personal"],
    response:
      "We take privacy seriously. Our **[Privacy Policy](/privacy)** details your rights under the Texas Data Privacy and Security Act (TDPSA), including the right to access, correct, delete, and port your data.\n\nWe also publish a **[Data Processing Agreement](/legal/dpa)** and maintain a transparent **[subprocessor list](/legal/subprocessors)**.\n\nFor privacy questions, email privacy@aeopic.com.",
    quickReplies: ["Get started", "Data security"],
    boostOn: ["/privacy", "/legal"],
  },
  {
    id: "subprocessors",
    title: "Subprocessors",
    utterances: [
      "who are your subprocessors",
      "what third parties handle data",
      "what vendors do you use",
      "what is your tech stack",
    ],
    keywords: ["subprocessor", "subprocessors", "third party", "vendors", "supabase", "vercel", "twilio", "resend", "anthropic", "stack"],
    response:
      "We maintain a transparent list of every third-party service that handles data on our behalf. Current subprocessors include Supabase, Vercel, Stripe, Twilio, Resend, and Anthropic — all with independently audited security programs.\n\n**[View the full subprocessor list](/legal/subprocessors)**",
    quickReplies: ["Privacy policy", "Data security", "Get started"],
    boostOn: ["/legal"],
  },
  {
    id: "frustrated",
    title: "Something's not working",
    utterances: [
      "this is not helpful",
      "you are not understanding me",
      "that is not what i asked",
      "this is useless",
      "you are wrong",
      "that did not answer my question",
      "this bot is bad",
    ],
    keywords: ["unhelpful", "useless", "wrong", "frustrating", "stupid", "terrible", "understand"],
    response:
      "Sorry about that — I'm a simple assistant and I clearly missed. Let me get you to a real person instead: the team replies within 24 hours, usually much faster.\n\nOr try one of these:",
    quickReplies: ["Talk to a human", "Get a ballpark", "What do you build?"],
  },
];

/** Randomized fallback responses — varied wording reads less robotic. */
export const fallbackResponses: { response: string; quickReplies: string[] }[] = [
  {
    response:
      "Hmm, I don't have a good answer for that one — but our team definitely does.\n\nWant me to pass your question along? Or try one of these:",
    quickReplies: ["Talk to a human", "Get a ballpark", "What do you build?"],
  },
  {
    response:
      "That's outside what I know (I keep things honest rather than guessing 🤝).\n\nThe team can answer within 24 hours — or one of these might help:",
    quickReplies: ["Talk to a human", "See your work", "How much?"],
  },
  {
    response:
      "Good question — I don't want to give you a half-answer. A real person can sort that quickly.\n\nMeanwhile, here's what I *can* help with:",
    quickReplies: ["Talk to a human", "What do you build?", "Get a ballpark"],
  },
];
