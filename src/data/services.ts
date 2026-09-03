export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  startingPriceNote: string;
  category: "Development" | "Marketing" | "Design & AI" | "Growth";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    badge: "Core Flagship",
    category: "Development",
    shortDescription:
      "Futuristic, responsive, conversion-focused websites engineered with modern frameworks, micro-interactions, and sub-second load times.",
    fullDescription:
      "We engineer custom digital storefronts and corporate websites that don't just sit on the internet—they command attention and convert high-intent traffic into qualified clients. Built with Next.js, modern CSS, and subtle 3D interactions.",
    iconName: "Monitor",
    benefits: [
      "Sub-second load times across 3G/4G/5G mobile networks",
      "Apple-standard typography, spatial harmony, and visual luxury",
      "Engineered conversion architecture and direct WhatsApp/Form funnels",
      "100% fluid responsiveness across 320px mobile to 4K displays",
    ],
    deliverables: [
      "Custom UI/UX Architecture & Prototyping",
      "Next.js / Modern Full-Stack Development",
      "Interactive 3D / WebGL Micro-Interactions",
      "Production Deployment & SSL Hardening",
    ],
    process: ["Discovery & Wireframing", "Visual System Design", "Code & Optimization", "Launch & Post-Support"],
    startingPriceNote: "From ₹15,000 for standard websites",
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    badge: "High Revenue",
    category: "Development",
    shortDescription:
      "Scalable online stores and shopping experiences built for high catalog volumes, flawless checkout, and maximum average order value (AOV).",
    fullDescription:
      "From emerging D2C fashion houses to established artisan marketplaces, we build robust e-commerce architectures that reduce cart abandonment, facilitate rapid checkout, and synchronize with payment gateways and shipping aggregators.",
    iconName: "ShoppingBag",
    benefits: [
      "Seamless Razorpay, Stripe, Cashfree, and UPI payment flows",
      "High-speed catalog search, facet filtering, and instant product previews",
      "One-click mobile checkout funnels to minimize drop-offs",
      "Automated inventory management and order webhook sync",
    ],
    deliverables: [
      "Custom Storefront or Shopify/WooCommerce Engine",
      "Payment Gateway & COD Risk Management",
      "Product Catalog Architecture & SEO Markup",
      "Abandoned Cart Recovery Automated Triggers",
    ],
    process: ["Store Architecture", "Catalog & UI Setup", "Gateway & Logistics Integration", "Conversion Stress-Testing"],
    startingPriceNote: "Custom quote based on SKU count & features",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    badge: "Personal Brand",
    category: "Development",
    shortDescription:
      "Premium, award-worthy portfolios for creators, filmmakers, photographers, executives, and high-ticket consultants.",
    fullDescription:
      "Elevate your individual authority with a bespoke personal portfolio that turns your past work into undeniable social proof and high-ticket inbound opportunities.",
    iconName: "UserCheck",
    benefits: [
      "Cinematic media galleries with zero video buffering",
      "Interactive case study presentations with measurable outcomes",
      "Direct booking and calendar consultation integration",
      "Standout personal branding that commands premium pricing",
    ],
    deliverables: [
      "Interactive Works Gallery",
      "Executive Biography & Authority Section",
      "Media Showreel Player",
      "Direct Inbound Booking Engine",
    ],
    process: ["Story Archetype Definition", "Asset Curation", "Interactive Build", "Domain & Identity Launch"],
    startingPriceNote: "Available from ₹15,000",
  },
  {
    id: "seo-services",
    title: "SEO (Search Engine Optimization)",
    badge: "Organic Growth",
    category: "Growth",
    shortDescription:
      "Technical SEO, on-page optimization, content cluster architecture, and keyword domination that captures organic purchase intent.",
    fullDescription:
      "Stop burning cash solely on paid ads. We construct technical foundations and topical authority clusters that place your brand at the absolute top of Google for competitive, commercial search terms.",
    iconName: "Search",
    benefits: [
      "100% Core Web Vitals compliance (LCP, FID, CLS)",
      "Targeted commercial keyword capture for high-intent buyers",
      "Comprehensive Schema.org structured data implementation",
      "Sustainable organic traffic that compounds month over month",
    ],
    deliverables: [
      "Technical SEO Audit & Code-Level Fixes",
      "Competitor Keyword Gap Analysis",
      "On-Page Meta, Heading, and Internal Link Structuring",
      "Local SEO & Google Business Profile Setup",
    ],
    process: ["Technical Health Audit", "Keyword Taxonomy", "On-Page Optimization", "Authority Link Architecture"],
    startingPriceNote: "Included in Growth & Scale Packages",
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    badge: "Brand Presence",
    category: "Marketing",
    shortDescription:
      "End-to-end social media strategy, viral creative reels, aesthetic grid curation, and active community engagement across Instagram & LinkedIn.",
    fullDescription:
      "We turn static company feeds into vibrant cultural hubs that attract loyal followers and generate organic business inquiries consistently.",
    iconName: "Share2",
    benefits: [
      "Consistent, high-aesthetic brand storytelling",
      "Algorithm-optimized short-form reels and carousels",
      "Active DM funnel qualification and engagement management",
      "Complete monthly content calendar and metrics review",
    ],
    deliverables: [
      "Monthly Content Calendar (Reels, Carousels, Stories)",
      "Scriptwriting, Video Editing, & Sound Design",
      "Hashtag & Audio Trend Capitalization",
      "Community Engagement & Inbound Lead Routing",
    ],
    process: ["Brand Tone Calibration", "Calendar Scripting", "Creative Production", "Posting & Algorithmic Monitoring"],
    startingPriceNote: "Tailored monthly retainers",
  },
  {
    id: "ai-video-creation",
    title: "AI Video Creation",
    badge: "Emerging Tech",
    category: "Design & AI",
    shortDescription:
      "AI-powered hyper-realistic product videos, promotional advertisements, and automated creative shorts that slash production timelines by 80%.",
    fullDescription:
      "Harness the forefront of generative video, synthetic voice, and 3D rendering to produce studio-grade video commercials without multi-lakh film crew overheads.",
    iconName: "Sparkles",
    benefits: [
      "Produce dozens of ad variations for A/B testing in hours",
      "Cinematic 4K visuals with AI-enhanced lighting and camera motion",
      "Multilingual voiceovers with human emotional cadence",
      "Dramatically reduced production costs and turnaround time",
    ],
    deliverables: [
      "AI Promo Commercials (15s / 30s / 60s formats)",
      "Social-First Vertical Video Ads (9:16 ratio)",
      "High-Fidelity AI Product Render Videos",
      "Audio Scoring, Captions, & Kinetic Typography",
    ],
    process: ["Concept & Script Generation", "AI Video Synthesis", "Post-Production Polish", "Multi-Platform Export"],
    startingPriceNote: "Per-asset or bundled with campaigns",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    badge: "Storytelling",
    category: "Marketing",
    shortDescription:
      "High-converting copy, authoritative thought-leadership articles, video scripts, and marketing assets that educate and convert.",
    fullDescription:
      "Content is the currency of digital trust. We craft persuasive website copy, email campaigns, and video scripts that position your leadership team as definitive industry authorities.",
    iconName: "FileText",
    benefits: [
      "Persuasive direct-response copywriting that compels action",
      "Topical depth that builds insurmountable domain authority",
      "Consistent brand voice across all digital touchpoints",
      "Content optimized simultaneously for humans and search engines",
    ],
    deliverables: [
      "Website Landing Page Copy",
      "SEO Blog Articles & Guides",
      "Reel / YouTube Video Scripts",
      "Email Marketing Sequences",
    ],
    process: ["Audience Psychology Research", "Outline & Hook Structuring", "Drafting & Tone Polish", "Optimization"],
    startingPriceNote: "Integrated in monthly packages",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    badge: "Visual Excellence",
    category: "Design & AI",
    shortDescription:
      "Bespoke brand assets, social media creatives, ad banners, print collateral, and packaging designs that demand instant recognition.",
    fullDescription:
      "Every pixel represents your brand equity. We design high-impact visuals, modern vector systems, and advertising collateral that captivates audiences in split-second feeds.",
    iconName: "Palette",
    benefits: [
      "Distinctive aesthetic language tailored to your niche",
      "High-converting paid ad creatives with bold visual hooks",
      "Pixel-perfect assets exported in all web-optimized formats",
      "Cohesive color psychology and typography hierarchy",
    ],
    deliverables: [
      "Social Media Creative Packs",
      "Digital Ad Banners (All Meta & Google Formats)",
      "Pitch Decks & Commercial Presentations",
      "Packaging, Merchandise & Print Graphics",
    ],
    process: ["Creative Briefing", "Concept Ideation", "Iterative Refinement", "Final Asset Delivery"],
    startingPriceNote: "Project or monthly retainer",
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    badge: "Direct Response",
    category: "Growth",
    shortDescription:
      "Performance-focused paid campaigns targeting high-intent demographics with dynamic creative testing and ROAS optimization.",
    fullDescription:
      "Scale customer acquisition with mathematical precision. We handle full-funnel Meta advertising—from top-of-funnel hooks to hyper-targeted retargeting campaigns that deliver profitable returns.",
    iconName: "Target",
    benefits: [
      "Granular lookalike, interest, and behavioural audience targeting",
      "Aggressive creative testing matrix (hooks, angles, formats)",
      "Conversion API (CAPI) server-side tracking setup",
      "Transparent live dashboard reporting on CAC, CPA, and ROAS",
    ],
    deliverables: [
      "Ad Account & Pixel / CAPI Architecture",
      "High-Converting Video & Image Ad Creatives",
      "Landing Page Synergy Optimization",
      "Bid Management & Weekly Budget Scaling",
    ],
    process: ["Funnel Architecture", "Creative Production", "Testing Phase", "Algorithmic Scaling"],
    startingPriceNote: "Ad spend + management fee model",
  },
  {
    id: "google-ads",
    title: "Google Ads (Search & Performance Max)",
    badge: "High Intent",
    category: "Growth",
    shortDescription:
      "High-converting Google Search, Shopping, and YouTube campaigns that capture buyers at the exact moment they look for your solution.",
    fullDescription:
      "Intercept customers with cash in hand. We optimize Google Search campaigns and Performance Max feeds to dominate commercial real estate on search engine result pages.",
    iconName: "Layers",
    benefits: [
      "Capture high-intent commercial and transactional search queries",
      "Negative keyword curation to eradicate wasted ad spend",
      "Optimized Google Shopping feed for e-commerce stores",
      "Advanced attribution modeling and conversion tracking",
    ],
    deliverables: [
      "Search, Shopping & Performance Max Campaigns",
      "Keyword Bidding & Quality Score Optimization",
      "Compelling Ad Copywriting & Extensions",
      "Conversion Tracking & Attribution Setup",
    ],
    process: ["Commercial Query Mining", "Campaign Buildout", "Quality Score Tuning", "Scale & Negative Filtering"],
    startingPriceNote: "Custom performance tier",
  },
  {
    id: "branding-identity",
    title: "Branding & Visual Systems",
    badge: "Identity",
    category: "Design & AI",
    shortDescription:
      "Holistic visual identities, logo marks, typography guides, and brand guideline books that position your business as a market leader.",
    fullDescription:
      "A brand is the emotional residual left in a customer's mind. We craft iconic identity systems that make your business instantly recognizable, trustworthy, and impossible to confuse with cheaper competitors.",
    iconName: "Feather",
    benefits: [
      "Memorable logos engineered for digital, print, and physical mediums",
      "Comprehensive typography, color token, and spatial guidelines",
      "Complete Brand Book defining company voice and identity usage",
      "Long-term equity that supports premium pricing power",
    ],
    deliverables: [
      "Primary & Secondary Logo Marks + Favicons",
      "Color Palette Tokens & Typography Hierarchy",
      "Brand Guidelines Manual (PDF)",
      "Social Media Kit & Stationery Assets",
    ],
    process: ["Brand Core Strategy", "Logo Explorations", "System Design", "Comprehensive Guidelines Delivery"],
    startingPriceNote: "Custom project scope",
  },
  {
    id: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    badge: "Strategic Core",
    category: "Marketing",
    shortDescription:
      "Holistic 360° growth roadmaps uniting paid acquisition, organic reach, retention marketing, and sales funnels into one cohesive revenue machine.",
    fullDescription:
      "Random marketing tactics produce random results. We construct an integrated growth strategy that aligns your budget, channels, and messaging to hit aggressive quarterly commercial targets.",
    iconName: "Compass",
    benefits: [
      "Clarity on customer acquisition cost (CAC) and customer lifetime value (LTV)",
      "Channel prioritization based on empirical unit economics",
      "Elimination of wasteful, disconnected marketing spending",
      "Structured quarterly growth milestones and KPIs",
    ],
    deliverables: [
      "360° Digital Growth Roadmap",
      "Customer Persona & Competitor Benchmark Matrix",
      "Omnichannel Budget Allocation Model",
      "Bi-Weekly Executive Strategy Sessions",
    ],
    process: ["Diagnostic Audit", "Market & Unit Economic Analysis", "Roadmap Formulation", "Execution Oversight"],
    startingPriceNote: "Retainer or quarterly engagement",
  },
  {
    id: "landing-page-dev",
    title: "Landing Page Development",
    badge: "Conversion Engine",
    category: "Development",
    shortDescription:
      "Ultra-fast, high-converting standalone landing pages engineered specifically for paid ad campaigns and product launches.",
    fullDescription:
      "Every ad dollar deserves a landing page engineered to convert. We build razor-sharp, single-purpose landing pages featuring persuasive copy, social proof, and streamlined lead capture forms.",
    iconName: "Layout",
    benefits: [
      "Engineered specifically to maximize Paid Ad Quality Scores",
      "Load speeds under 600ms on mobile devices",
      "A/B testing architecture ready for multivariate experiments",
      "Direct CRM, WhatsApp, and email automation webhook integrations",
    ],
    deliverables: [
      "High-Impact Hero Section with Dynamic CTA",
      "Interactive Feature & Benefit Showcases",
      "Frictionless Lead Capture / Booking Forms",
      "Analytics & Heatmap Integration",
    ],
    process: ["Offer Anatomy", "Wireframing & Copywriting", "Rapid Code Build", "Ad Campaign Alignment"],
    startingPriceNote: "Available from ₹15,000",
  },
  {
    id: "website-optimization",
    title: "Website Optimization & Speed",
    badge: "Performance",
    category: "Development",
    shortDescription:
      "Deep technical performance auditing, asset compression, database query caching, and code minification to achieve 95+ PageSpeed scores.",
    fullDescription:
      "A 1-second delay in page load causes a 7% loss in conversions. We audit and re-engineer bloated websites into lean, instant-loading digital powerhouses that search engines love.",
    iconName: "Zap",
    benefits: [
      "Google PageSpeed Insights scores of 90+ on Mobile and Desktop",
      "Drastic reduction in server response time (TTFB)",
      "Image and video modernization with WebP/AVIF and lazy loading",
      "Immediate bounce rate reduction and improved organic rank",
    ],
    deliverables: [
      "Code Auditing & Minification",
      "CDN & Global Edge Caching Setup",
      "Database & Script Execution Optimization",
      "Before/After Benchmark Performance Audit",
    ],
    process: ["Lighthouse Diagnostic", "Asset & Script Pruning", "Edge Caching Integration", "Final Verification"],
    startingPriceNote: "One-time service or ongoing maintenance",
  },
  {
    id: "cro-services",
    title: "Conversion Rate Optimization (CRO)",
    badge: "ROI Maximizer",
    category: "Growth",
    shortDescription:
      "Behavioral analytics, heatmap analysis, checkout funnel optimization, and iterative UX experiments that squeeze more revenue from existing traffic.",
    fullDescription:
      "Double your sales without spending a rupee more on advertising. We dissect user friction points, run scientific split tests, and optimize micro-interactions across your entire funnel.",
    iconName: "TrendingUp",
    benefits: [
      "Turn existing visitors into paying clients at a higher percentage",
      "Uncover hidden checkout friction and form abandonment causes",
      "Data-driven UI/UX decisions backed by statistical significance",
      "Direct increase in return on ad spend (ROAS)",
    ],
    deliverables: [
      "User Session Recording & Heatmap Analysis",
      "Checkout Flow Friction Audit",
      "A/B Testing Roadmap & Execution",
      "Optimized Form & Micro-Copy Architecture",
    ],
    process: ["Funnel Telemetry", "Hypothesis Formulation", "A/B Testing", "Winning Variant Rollout"],
    startingPriceNote: "Included in Growth & Scale tiers",
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflows",
    badge: "Operational Edge",
    category: "Design & AI",
    shortDescription:
      "Autonomous AI agents, automated CRM lead routing, smart WhatsApp responders, and automated content workflows that save hundreds of hours.",
    fullDescription:
      "Empower your business with 24/7 autonomous intelligence. We build bespoke workflows that qualify leads in seconds, book calendar appointments, and synchronize data across your tech stack without manual human effort.",
    iconName: "Cpu",
    benefits: [
      "Instant response to inbound leads within 30 seconds via WhatsApp/Email",
      "Automated lead scoring, CRM enrichment, and follow-up sequences",
      "Seamless integration between forms, Google Sheets, Slack, and CRM",
      "Massive reduction in operational overhead and human error",
    ],
    deliverables: [
      "Custom AI Lead Qualification Agents",
      "WhatsApp Business API Automation",
      "Multi-Tool Webhook Integrations (Make / Zapier / Custom Node)",
      "Automated Reporting & Notification Pipelines",
    ],
    process: ["Workflow Mapping", "Logic & AI Prompt Engineering", "Integration & Stress Testing", "Deployment"],
    startingPriceNote: "Custom enterprise scope",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    badge: "Revenue First",
    category: "Growth",
    shortDescription:
      "Data-obsessed media buying across Google, Meta, and programmatic networks focused strictly on customer acquisition cost and measurable bottom-line profit.",
    fullDescription:
      "We don't report on vanity metrics like 'impressions' or 'reach'. We manage client marketing budgets with an obsessive focus on cash-in-bank return, blended CAC, and lifetime customer value.",
    iconName: "BarChart3",
    benefits: [
      "Every campaign backed by direct attribution and revenue tracking",
      "Aggressive testing of creative hooks, offers, and value propositions",
      "Multi-touch attribution to understand cross-channel customer journeys",
      "Daily spend and bid calibration by experienced media buyers",
    ],
    deliverables: [
      "Cross-Platform Media Planning",
      "Creative Production & Rapid Iteration",
      "Server-Side Attribution Pipeline",
      "Weekly Executive Revenue Reporting",
    ],
    process: ["Financial Modeling", "Campaign Launch", "Daily Optimization", "Scale-Up Milestones"],
    startingPriceNote: "Performance commission / retainer model",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance & Security",
    badge: "Reliability",
    category: "Development",
    shortDescription:
      "24/7 uptime monitoring, weekly security patches, automated off-site backups, and on-demand content updates so your digital storefront never sleeps.",
    fullDescription:
      "Your website is your 24/7 global flagship store. We ensure it remains bulletproof, continuously updated, secure against vulnerabilities, and running at peak performance year-round.",
    iconName: "ShieldCheck",
    benefits: [
      "24/7 automated uptime and latency monitoring with instant alerts",
      "Weekly database and asset backups stored in secure multi-region clouds",
      "Continuous dependency, framework, and security patch updates",
      "Dedicated developer hours for ongoing design tweaks and new pages",
    ],
    deliverables: [
      "Monthly Health & Security Reports",
      "Off-Site Cloud Backups & Instant Disaster Recovery",
      "SSL Certificate & Domain Health Monitoring",
      "Priority Developer Support SLA",
    ],
    process: ["Baseline Health Audit", "Automated Monitoring Setup", "Regular Maintenance Cycles", "Priority Response"],
    startingPriceNote: "Monthly retainers from ₹4,999/mo",
  },
];
