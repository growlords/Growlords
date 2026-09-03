"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function BrandMarquee() {
  const marqueeItems = [
    { title: "WEB DESIGN", href: "/services#web-design" },
    { title: "E-COMMERCE", href: "/services#ecommerce-development" },
    { title: "SEO SERVICES", href: "/services#seo-services" },
    { title: "SOCIAL MEDIA", href: "/services#social-media-management" },
    { title: "AI VIDEO", href: "/services#ai-video-creation" },
    { title: "CONTENT PRODUCTION", href: "/services#content-creation" },
    { title: "BRANDING & IDENTITY", href: "/services#branding-identity" },
    { title: "META ADS", href: "/services#meta-ads" },
    { title: "DIGITAL GROWTH", href: "/services" },
  ];

  // Duplicate for seamless infinite loop
  const list = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full py-5 bg-white border-y border-black/[0.06] overflow-hidden select-none">
      {/* Side gradient fade masks for smooth transition */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 sm:gap-12">
        {list.map((item, idx) => (
          <Link
            key={`${item.title}-${idx}`}
            href={item.href}
            className="flex items-center gap-6 group shrink-0 focus:outline-none"
          >
            <span className="text-sm sm:text-base md:text-lg font-black tracking-wider uppercase text-[#111111] group-hover:text-[#16A34A] transition-colors flex items-center gap-1.5">
              <span>{item.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#16A34A] -mt-0.5" />
            </span>

            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#16A34A]/40 group-hover:bg-[#16A34A] transition-colors">
              <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
