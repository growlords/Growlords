export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  metrics: string;
  ctaText?: string;
  iconName?: string;
}

export interface CaseStudyResult {
  label: string;
  value: string;
  sublabel?: string;
}

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: CaseStudyResult[];
  services: string[];
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
  metricLabel?: string;
  rating?: number;
  avatarText?: string;
}

export interface PillarItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface AnalyticsMetric {
  key: string;
  name: string;
  headlineValue: string;
  growth: string;
  benchmark: string;
  description: string;
  chartData: { x: string; y: number; baseline: number }[];
  unit: string;
}

export interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  siteUrl: string;
  themeColor: string;
}

export interface HeroContent {
  tagLeft: string;
  tagRight: string;
  headline: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  scrollPromptText: string;
}

export interface StrategyPrinciple {
  num: string;
  title: string;
  desc: string;
}

export interface StrategyContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  principles: StrategyPrinciple[];
}

export interface ServicesContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  items: ServiceItem[];
}

export interface CaseStudiesContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  items: CaseStudyItem[];
}

export interface TestimonialsContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  items: TestimonialItem[];
}

export interface AnalyticsContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  metrics: AnalyticsMetric[];
}

export interface WhyGrowlordsContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  pillars: PillarItem[];
}

export interface AboutMandate {
  tag: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AboutContent {
  tag: string;
  heading: string;
  headingAccent: string;
  subtitle: string;
  description: string;
  ctaText: string;
  mandates: AboutMandate[];
}

export interface FinalCTAContent {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  trustBadges: string[];
}

export interface FooterNavLink {
  name: string;
  href: string;
}

export interface FooterSocialLink {
  name: string;
  href: string;
}

export interface FooterContent {
  brandName: string;
  brandDescription: string;
  navLinks: FooterNavLink[];
  socialLinks: FooterSocialLink[];
  directEmail: string;
  officesText: string;
  ctaLabel: string;
  copyrightText: string;
  legalLinks: FooterNavLink[];
}

export interface SiteContent {
  seo: SEOContent;
  hero: HeroContent;
  strategy: StrategyContent;
  services: ServicesContent;
  caseStudies: CaseStudiesContent;
  testimonials: TestimonialsContent;
  analytics: AnalyticsContent;
  whyGrowlords: WhyGrowlordsContent;
  about: AboutContent;
  finalCta: FinalCTAContent;
  footer: FooterContent;
}
