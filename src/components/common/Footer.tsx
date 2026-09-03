"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, ArrowUp } from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#EEF4EF] border-t border-black/[0.06] text-[#5F6368] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A34A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand & Philosophy (Spans 2 on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center p-2">
                <Image
                  src="/logo.svg"
                  alt="Growlords"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-wider text-[#111111] uppercase">
                GROWLORDS
              </span>
            </Link>

            <p className="text-xs font-bold tracking-widest uppercase text-[#16A34A]">
              Build. Grow. Dominate.
            </p>

            <p className="text-sm text-[#5F6368] max-w-sm leading-relaxed">
              Growlords is a digital marketing and creative agency helping ambitious businesses
              turn ideas into powerful digital experiences, high-converting websites and scalable online brands.
            </p>

            <div className="flex items-center gap-4 mt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#16A34A] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                Projects Starting From ₹15,000
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#16A34A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#16A34A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#16A34A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#16A34A] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#16A34A] transition-colors">
                  Blogs &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#16A34A] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              Core Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/services#web-design" className="hover:text-[#16A34A] transition-colors">
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce-development" className="hover:text-[#16A34A] transition-colors">
                  E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link href="/services#seo-services" className="hover:text-[#16A34A] transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services#social-media-management" className="hover:text-[#16A34A] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services#ai-video-creation" className="hover:text-[#16A34A] transition-colors">
                  AI Video Creation
                </Link>
              </li>
              <li>
                <Link href="/services#meta-ads" className="hover:text-[#16A34A] transition-colors">
                  Meta Ads (FB &amp; IG)
                </Link>
              </li>
              <li>
                <Link href="/services#branding-identity" className="hover:text-[#16A34A] transition-colors">
                  Branding &amp; Identity
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:growlords2026@gmail.com"
                className="flex items-center gap-2.5 text-[#111111] hover:text-[#16A34A] transition-colors group break-all"
              >
                <Mail className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>growlords2026@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919460740836?text=Hi%20Growlords%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20I%27d%20like%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#111111] hover:text-[#25D366] transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <div className="flex items-center gap-1">
                  <span>+91 9460740836</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#25D366]" />
                </div>
              </a>

              <a
                href="https://instagram.com/growlords"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#111111] hover:text-[#16A34A] transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-[#16A34A] shrink-0" />
                <div className="flex items-center gap-1">
                  <span>@growlords</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>

              <div className="mt-2 pt-3 border-t border-black/[0.06] flex flex-col gap-1 text-xs text-[#5F6368]">
                <span>Co-Founders: Raman Kamboj &amp; Jatin Kamboj</span>
                <span>Operating Pan-India &amp; Globally</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6368]">
          <p>© 2026 Growlords. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#111111] transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.06] shadow-2xs hover:border-black/20 hover:text-[#16A34A] transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
