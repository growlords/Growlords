export interface Founder {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  expertise: string[];
  image: string;
  imageAlt: string;
  email: string;
  instagram: string;
  location: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: "raman-kamboj",
    name: "Raman Kamboj",
    role: "CEO & Co-Founder",
    badge: "Creative & Engineering",
    bio:
      "Leading technical direction, high-performance web architecture, and digital product strategy at Growlords. Dedicated to translating ambitious brand ideas into high-converting digital storefronts, interactive 3D web experiences, and sustainable online growth systems.",
    expertise: [
      "Web Architecture & Full-Stack Development",
      "Interactive 3D Experiences",
      "Conversion Funnel Engineering",
      "Brand Growth Strategy",
    ],
    image: "/founders/raman-kamboj.svg",
    imageAlt: "Raman Kamboj — CEO & Co-Founder, Growlords",
    email: "growlords@gmail.com",
    instagram: "https://instagram.com/growlords",
    location: "India",
  },
  {
    id: "jatin-kamboj",
    name: "Jatin Kamboj",
    role: "CEO & Co-Founder",
    badge: "Marketing & Growth",
    bio:
      "Directing performance marketing, multi-channel growth systems, and brand scaling at Growlords. Focused on helping businesses build defensible market presence through direct-response advertising, social media storytelling, and systematic client acquisition.",
    expertise: [
      "Performance Marketing & Paid Acquisition",
      "Meta Ads & Search Optimization",
      "Social Media Growth Strategy",
      "Client Operations & Scale",
    ],
    image: "/founders/jatin-kamboj.svg",
    imageAlt: "Jatin Kamboj — CEO & Co-Founder, Growlords",
    email: "growlords@gmail.com",
    instagram: "https://instagram.com/growlords",
    location: "India",
  },
];
