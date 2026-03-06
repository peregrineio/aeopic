export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
