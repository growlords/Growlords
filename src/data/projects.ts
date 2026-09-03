export interface Project {
  id: string;
  title: string;
  domain: string;
  url: string;
  category: "Websites" | "E-Commerce" | "Portfolio" | "Business" | "Creative";
  overview: string;
  deliverables: string[];
  tags: string[];
  featured: boolean;
  accentColor: string;
  badge: string;
}

export const CATEGORIES = [
  "All",
  "Websites",
  "E-Commerce",
  "Portfolio",
  "Business",
  "Creative",
] as const;

export type ProjectCategory = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: "growlordsanimated",
    title: "Growlords 3D Experience",
    domain: "growlordsanimated.vercel.app",
    url: "https://growlordsanimated.vercel.app",
    category: "Creative",
    overview:
      "A high-impact 3D animated digital showcase illustrating modern WebGL interactions, dynamic camera perspectives, and immersive brand presentation.",
    deliverables: [
      "3D WebGL Interactions",
      "Dynamic Canvas Architecture",
      "Ultra-Fast Next.js Vercel Edge Deployment",
    ],
    tags: ["3D Interactive", "WebGL", "Creative Design", "Next.js"],
    featured: true,
    accentColor: "#00FF66",
    badge: "3D Flagship",
  },
  {
    id: "ramansites",
    title: "Raman Sites Portfolio & Digital Store",
    domain: "ramansites.store",
    url: "https://ramansites.store",
    category: "Portfolio",
    overview:
      "A digital portfolio and web design storefront showcasing creative development capabilities, streamlined project booking, and performance web architecture.",
    deliverables: [
      "Portfolio Showcase",
      "Digital Storefront Architecture",
      "Responsive Layout",
    ],
    tags: ["Portfolio", "Digital Store", "Personal Brand"],
    featured: true,
    accentColor: "#10B981",
    badge: "Portfolio & Store",
  },
  {
    id: "musafirfilms",
    title: "Musafir Films",
    domain: "musafirfilms.in",
    url: "https://musafirfilms.in",
    category: "Creative",
    overview:
      "A cinematic production house website engineered to spotlight compelling video narratives, visual storytelling, and high-production showreels with minimal latency.",
    deliverables: [
      "Cinematic Showreel Integration",
      "High-Fidelity Media Galleries",
      "Production Inquiries Funnel",
    ],
    tags: ["Cinema", "Film Production", "Video Showcase", "Creative"],
    featured: true,
    accentColor: "#F59E0B",
    badge: "Cinematic Showcase",
  },
  {
    id: "heritagepanjab",
    title: "Heritage Panjab",
    domain: "heritagepanjab.com",
    url: "https://heritagepanjab.com",
    category: "Business",
    overview:
      "A cultural and commercial digital brand celebrating Punjabi craftsmanship, cultural legacy, and artisan creations through a refined modern digital interface.",
    deliverables: [
      "Brand Storytelling Experience",
      "Catalog Display System",
      "Cultural Visual Identity",
    ],
    tags: ["Heritage", "Brand Identity", "Cultural Commerce"],
    featured: true,
    accentColor: "#EAB308",
    badge: "Heritage Brand",
  },
  {
    id: "haradhi",
    title: "Haradhi",
    domain: "haradhi.com",
    url: "https://haradhi.com",
    category: "E-Commerce",
    overview:
      "A premier ethnic fashion and traditional apparel e-commerce destination with seamless catalog browsing, smooth cart interactions, and high-conversion product layouts.",
    deliverables: [
      "E-Commerce Architecture",
      "Product Catalog & Filtering",
      "Conversion Rate Optimization",
    ],
    tags: ["E-Commerce", "Apparel & Fashion", "Online Store"],
    featured: true,
    accentColor: "#EC4899",
    badge: "Fashion E-Com",
  },
  {
    id: "theperfumex",
    title: "The Perfume X",
    domain: "theperfumex.com",
    url: "https://theperfumex.com",
    category: "E-Commerce",
    overview:
      "A luxury fragrance and artisanal perfumery e-commerce store with high-end aesthetic presentation, olfactory notes breakdowns, and conversion-focused checkout.",
    deliverables: [
      "Luxury D2C E-Commerce Store",
      "Fragrance Notes Visualizer",
      "Speed & Mobile Optimization",
    ],
    tags: ["Luxury D2C", "Fragrances", "E-Commerce"],
    featured: true,
    accentColor: "#A855F7",
    badge: "Luxury Fragrance",
  },
  {
    id: "brownandblack",
    title: "Brown & Black",
    domain: "brownandblack.in",
    url: "https://brownandblack.in",
    category: "E-Commerce",
    overview:
      "A contemporary lifestyle and premium footwear/leathergoods online storefront featuring refined typography, responsive product galleries, and rapid page load speeds.",
    deliverables: [
      "Modern Lifestyle Storefront",
      "Responsive Product Showcase",
      "Mobile-First Shopping Flow",
    ],
    tags: ["Lifestyle", "Footwear", "E-Commerce"],
    featured: false,
    accentColor: "#78716C",
    badge: "Lifestyle Brand",
  },
  {
    id: "virahandicrafts",
    title: "Vira Handicrafts",
    domain: "virahandicrafts.com",
    url: "https://virahandicrafts.com",
    category: "E-Commerce",
    overview:
      "Handcrafted Indian home décor and artisan export brand platform connecting domestic craftspeople with national and international home enthusiasts.",
    deliverables: [
      "Artisan Marketplace Platform",
      "Export & Wholesale Lead Funnels",
      "Secure Payment Workflows",
    ],
    tags: ["Handicrafts", "Artisan Commerce", "Home Décor"],
    featured: false,
    accentColor: "#F97316",
    badge: "Artisan Crafts",
  },
  {
    id: "pristineorganics",
    title: "Pristine Organics",
    domain: "pristineorganics.com",
    url: "https://pristineorganics.com",
    category: "Business",
    overview:
      "Pioneering organic nutritional products and health science brand website communicating scientifically validated organic wellness, purity, and product ranges.",
    deliverables: [
      "Health Science Web Architecture",
      "Product Line Exploration",
      "SEO & Organic Content Strategy",
    ],
    tags: ["Wellness & Health", "Organic Food", "Corporate Presence"],
    featured: false,
    accentColor: "#22C55E",
    badge: "Health & Organic",
  },
  {
    id: "dhoopdiya",
    title: "Dhoop Diya",
    domain: "dhoopdiya.com",
    url: "https://dhoopdiya.com",
    category: "E-Commerce",
    overview:
      "Sacred rituals, aromatic dhoop, incense, and spiritual lifestyle products store engineered for frictionless product discovery and high repeat customer retention.",
    deliverables: [
      "Spiritual Products E-Commerce",
      "Category Taxonomy & Search",
      "WhatsApp Support Integration",
    ],
    tags: ["Spiritual", "Aromatherapy", "D2C E-Commerce"],
    featured: false,
    accentColor: "#F59E0B",
    badge: "Spiritual D2C",
  },
  {
    id: "foldingfurniture",
    title: "Folding Furniture India",
    domain: "foldingfurniture.in",
    url: "https://foldingfurniture.in",
    category: "Business",
    overview:
      "Space-saving architectural interior solutions and multifunctional commercial furniture manufacturer website built to capture high-value residential & corporate orders.",
    deliverables: [
      "Catalog & Product Spec Sheets",
      "Custom Dimensions Request Flow",
      "Commercial Lead Generation",
    ],
    tags: ["Interior Solutions", "Commercial Furniture", "B2B / B2C"],
    featured: false,
    accentColor: "#3B82F6",
    badge: "Modular Furniture",
  },
  {
    id: "kspyworld",
    title: "K Spy World",
    domain: "kspyworld.com",
    url: "https://kspyworld.com",
    category: "Business",
    overview:
      "Specialized electronics, security systems, and surveillance equipment portal designed for transparent cataloging, verified technical specifications, and direct inquiry.",
    deliverables: [
      "Technical Product Specifications",
      "Direct Inquiry & Quotation Engine",
      "Security Compliance Architecture",
    ],
    tags: ["Security Tech", "Electronics", "Inquiry System"],
    featured: false,
    accentColor: "#06B6D4",
    badge: "Security & Electronics",
  },
  {
    id: "bharatbee",
    title: "Bharat Bee",
    domain: "bharatbee.com",
    url: "https://bharatbee.com",
    category: "E-Commerce",
    overview:
      "Pure organic raw honey and apiary wellness products brand celebrating sustainable beekeeping, natural harvesting, and direct farm-to-doorstep distribution.",
    deliverables: [
      "Organic Food E-Commerce",
      "Provenance & Traceability Story",
      "Streamlined Mobile Checkout",
    ],
    tags: ["Pure Honey", "Sustainable Agriculture", "D2C Commerce"],
    featured: false,
    accentColor: "#EAB308",
    badge: "Raw Honey D2C",
  },
];
