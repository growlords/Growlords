export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  startingPrice: string;
  numericPrice?: number;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
  ctaHref: string;
}

export const PRICING_CONFIG = {
  headline: "Digital Growth Starting From ₹15,000",
  subtitle:
    "Transparent, value-first investment models engineered to turn every rupee into scalable digital market presence and conversion.",
  currencySymbol: "₹",
  baseStartingPrice: "15,000",
  tiers: [
    {
      id: "starter",
      name: "Starter",
      badge: "Fast Launch",
      startingPrice: "₹15,000+",
      numericPrice: 15000,
      period: "one-time project",
      description:
        "Engineered for ambitious startups, local businesses, and individuals seeking an elite web presence that converts visitors immediately.",
      popular: false,
      idealFor: "Small businesses, personal brands, service professionals",
      features: [
        "High-Performance Custom Website",
        "100% Responsive (Mobile, Tablet, Desktop)",
        "Core Technical & On-Page SEO Setup",
        "High-Converting Contact & Lead Capture Integration",
        "Sub-Second Speed & Performance Optimization",
        "Direct WhatsApp & Social Media Links",
        "SSL Security & Domain Setup Assistance",
        "14 Days Post-Launch Support",
      ],
      ctaText: "Start Starter Project →",
      ctaHref: "/contact?package=starter&budget=15k",
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most Popular",
      startingPrice: "Custom Quote",
      period: "tailored package",
      description:
        "A full-funnel digital acceleration system combining bespoke web development, search domination, and proactive social brand growth.",
      popular: true,
      idealFor: "Established brands, growing e-commerce & high-ticket services",
      features: [
        "Advanced Multi-Page Web Application",
        "Interactive 3D Elements & Micro-Animations",
        "Full Search Engine Optimization (Technical + Keyword Strategy)",
        "Social Media Growth & Creative Content Strategy",
        "Lead Funnel Architecture & Conversion Rate Optimization (CRO)",
        "Google Analytics 4 & Custom Event Tracking",
        "Integrated Dynamic Blog / CMS Architecture",
        "30 Days Dedicated Maintenance & Optimization",
      ],
      ctaText: "Accelerate With Growth →",
      ctaHref: "/contact?package=growth&budget=growth",
    },
    {
      id: "scale",
      name: "Scale",
      badge: "Enterprise & E-Com",
      startingPrice: "Custom Quote",
      period: "monthly / milestone",
      description:
        "The ultimate 360° digital growth partner. High-volume paid customer acquisition, AI automated workflows, and enterprise digital positioning.",
      popular: false,
      idealFor: "Rapidly scaling e-commerce, D2C brands, funded ventures",
      features: [
        "Full Digital Marketing & Revenue Ecosystem",
        "Scalable Headless / Custom E-Commerce Platform",
        "High-ROI Meta Ads & Google Ads Media Buying",
        "AI-Driven Video Creation & Viral Short-Form Assets",
        "Custom AI Automation & Lead Qualification Workflows",
        "Comprehensive Weekly Performance & CAC Analytics",
        "Brand Identity Systems & Visual Identity Refinement",
        "Dedicated Priority Growth Account Lead",
      ],
      ctaText: "Scale Your Enterprise →",
      ctaHref: "/contact?package=scale&budget=scale",
    },
  ] as PricingTier[],
};
