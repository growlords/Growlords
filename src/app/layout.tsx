import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import Preloader from "@/components/common/Preloader";

export const viewport: Viewport = {
  themeColor: "#FAFBF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://growlords.com"),
  title: {
    default: "Growlords — 3D Digital Marketing & Creative Agency | Websites From ₹15,000",
    template: "%s | Growlords Digital Agency",
  },
  description:
    "Growlords is an elite digital marketing and creative agency helping ambitious businesses build, grow and dominate digitally. High-converting 3D websites, SEO, Meta Ads, AI Video & E-Commerce starting from ₹15,000.",
  keywords: [
    "digital marketing agency",
    "digital marketing agency India",
    "web design company",
    "website development company",
    "SEO services",
    "social media marketing",
    "e-commerce website development",
    "Meta Ads agency",
    "AI video creation",
    "website design India",
    "digital marketing services India",
    "Raman Kamboj",
    "Jatin Kamboj",
    "Growlords",
  ],
  authors: [
    { name: "Raman Kamboj", url: "https://instagram.com/growlords" },
    { name: "Jatin Kamboj", url: "https://instagram.com/growlords" },
  ],
  creator: "Growlords Digital Agency",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://growlords.com",
    siteName: "Growlords",
    title: "Growlords — Build. Grow. Dominate. | 3D Digital Marketing Agency",
    description:
      "Transforming ambitious brands into digital category leaders through high-converting 3D websites, performance marketing, and creative production. Starting from ₹15,000.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Growlords Digital Marketing & Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growlords — 3D Digital Marketing & Creative Agency",
    description:
      "We build digital brands that grow. Websites, SEO, E-Commerce, Meta Ads & AI Video starting from ₹15,000.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growlords.com/#organization",
        name: "Growlords",
        url: "https://growlords.com",
        logo: "https://growlords.com/logo.svg",
        email: "growlords2026@gmail.com",
        sameAs: ["https://instagram.com/growlords"],
        description:
          "Digital marketing and creative agency helping ambitious businesses build, grow and dominate digitally.",
        founder: [
          {
            "@type": "Person",
            name: "Raman Kamboj",
            jobTitle: "CEO & Co-Founder",
          },
          {
            "@type": "Person",
            name: "Jatin Kamboj",
            jobTitle: "CEO & Co-Founder",
          },
        ],
        priceRange: "₹15,000+",
      },
      {
        "@type": "WebSite",
        "@id": "https://growlords.com/#website",
        url: "https://growlords.com",
        name: "Growlords",
        publisher: {
          "@id": "https://growlords.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFBF9] text-[#111111] min-h-screen flex flex-col antialiased selection:bg-[#16A34A]/20 selection:text-[#16A34A]">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
