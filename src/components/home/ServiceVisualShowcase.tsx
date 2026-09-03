"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  ShoppingBag,
  Search,
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap,
  ShieldCheck,
  CreditCard,
  Target,
} from "lucide-react";

export default function ServiceVisualShowcase() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white border-b border-black/[0.05]">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#16A34A]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-24 sm:gap-32">
        {/* ========================================================================= */}
        {/* SPOTLIGHT 1: WEB DESIGN & 3D DEVELOPMENT                                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <Monitor className="w-3.5 h-3.5" />
              <span>01 • Web Design &amp; 3D Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight leading-[1.08]">
              WE BUILD DIGITAL EXPERIENCES <br />
              <span className="text-[#16A34A]">THAT PEOPLE REMEMBER.</span>
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              Most agency websites rely on cookie-cutter templates that slow down browsers and bore visitors.
              Growlords architects bespoke Next.js web applications, immersive WebGL installations, and Apple-level spatial layouts starting from ₹15,000.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full my-2">
              <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex flex-col">
                <span className="text-xl font-black text-[#16A34A]">0.4s</span>
                <span className="text-xs text-[#5F6368] font-mono">Edge CDN Latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex flex-col">
                <span className="text-xl font-black text-[#111111]">100%</span>
                <span className="text-xs text-[#5F6368] font-mono">Fluid Responsiveness</span>
              </div>
            </div>

            <Link
              href="/services#web-design"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#16A34A] text-white hover:bg-[#15803D] transition-all shadow-xs"
            >
              <span>Explore Web Design Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Rich Interactive Browser Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-white border border-black/[0.08] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden group">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 border-b border-black/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-black/[0.06] text-xs font-mono text-[#5F6368] shadow-2xs">
                  <Globe className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>https://growlords.com</span>
                </div>
                <span className="text-[11px] font-mono text-[#16A34A] font-bold">LIVE</span>
              </div>

              {/* Mockup Screen Visual */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-[#FAFBF9] via-[#FFFFFF] to-[#F2F7F3] flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#16A34A] text-white font-black text-xs flex items-center justify-center">
                      GL
                    </div>
                    <span className="font-bold text-sm text-[#111111]">GROWLORDS STUDIO</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-mono font-semibold">
                    Core Web Vitals: 99
                  </span>
                </div>

                {/* Simulated Visual Wireframe */}
                <div className="p-5 rounded-xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
                  <div className="h-3 w-32 bg-[#16A34A]/20 rounded-full" />
                  <div className="h-5 w-3/4 bg-zinc-200 rounded-full" />
                  <div className="h-2 w-full bg-zinc-100 rounded-full" />
                  <div className="h-2 w-5/6 bg-zinc-100 rounded-full" />
                </div>

                {/* Floating Mobile Preview Overlay */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-[#16A34A]/30 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-[#16A34A]" />
                    <span className="text-xs font-bold text-[#111111]">Interactive 3D Perspective</span>
                  </div>
                  <span className="text-xs font-mono text-[#16A34A] font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT 2: E-COMMERCE GROWTH ARCHITECTURE                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Product & E-Commerce Visual (Alternating Layout) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl bg-white border border-black/[0.08] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#5F6368]">
                  D2C Storefront Engine
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-mono font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +182% Conversion Rate
                </span>
              </div>

              {/* 3D Product Mockup Presentation */}
              <div className="p-6 rounded-2xl bg-gradient-to-tr from-[#F8FAF8] via-white to-[#EEF5EF] border border-black/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono text-[#16A34A] font-bold">
                    PREMIUM D2C BUNDLE
                  </span>
                  <h4 className="text-xl font-black text-[#111111]">Artisanal Luxury Goods</h4>
                  <span className="text-2xl font-black text-[#111111]">₹15,000</span>
                  <span className="text-xs text-[#5F6368]">Instant 1-Click Checkout</span>
                </div>

                <div className="w-20 h-20 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex items-center justify-center text-[#16A34A] transform -rotate-6 hover:rotate-0 transition-transform">
                  <ShoppingBag className="w-10 h-10" />
                </div>
              </div>

              {/* Order Telemetry Pill */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#111111] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Cart Abandonment Recovery</span>
                </div>
                <span className="text-[#16A34A] font-bold">94.2% Success</span>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>02 • E-Commerce Scalability</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight leading-[1.08]">
              TURN CASUAL VISITORS <br />
              <span className="text-[#16A34A]">INTO PAYING CUSTOMERS.</span>
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              We design and engineer e-commerce stores that do not just look stunning — they convert with relentless efficiency.
              From razor-sharp catalog typography to friction-free Razorpay/Stripe checkout and automated WhatsApp recovery.
            </p>

            <ul className="flex flex-col gap-2 my-2 text-xs sm:text-sm text-[#111111]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Sub-second mobile catalog filtering and instantaneous search</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Integrated customer trust signals, social proof and reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Automated cart abandonment recovery workflows</span>
              </li>
            </ul>

            <Link
              href="/services#ecommerce-development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#16A34A] text-white hover:bg-[#15803D] transition-all shadow-xs"
            >
              <span>Explore E-Commerce Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT 3: SEO DOMINANCE & HIGH-ROAS MEDIA BUYING                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <Search className="w-3.5 h-3.5" />
              <span>03 • Search &amp; Paid Acquisition</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight leading-[1.08]">
              GET FOUND. GET NOTICED. <br />
              <span className="text-[#16A34A]">GET GROWING.</span>
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              Having an incredible website is only half the battle. Growlords guarantees you capture high-intent commercial buyers
              ranking #1 on Google and deploying laser-targeted Meta ad creatives that command 4.8x average return on ad spend (ROAS).
            </p>

            <div className="grid grid-cols-2 gap-3 w-full my-2">
              <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex flex-col">
                <span className="text-xl font-black text-[#16A34A]">#1 Rank</span>
                <span className="text-xs text-[#5F6368] font-mono">Google Organic Target</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex flex-col">
                <span className="text-xl font-black text-[#111111]">4.8x</span>
                <span className="text-xs text-[#5F6368] font-mono">Average Meta Ads ROAS</span>
              </div>
            </div>

            <Link
              href="/services#seo-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#16A34A] text-white hover:bg-[#15803D] transition-all shadow-xs"
            >
              <span>Explore SEO &amp; Paid Media</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Search Ranking & Ad Analytics Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-white border border-black/[0.08] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5F6368]">
                  Search Ranking Ladder
                </span>
                <span className="text-xs font-mono text-[#16A34A] font-bold">Pan-India Keywords</span>
              </div>

              {/* Ranking Item 1 */}
              <div className="p-3.5 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#16A34A] text-white font-mono text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-sm font-bold text-[#111111]">Commercial Keyword Cluster</span>
                </div>
                <span className="text-xs font-mono text-[#16A34A] font-bold">14,800/mo Vol</span>
              </div>

              {/* Ranking Item 2 */}
              <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-zinc-200 text-[#111111] font-mono text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-sm font-medium text-[#111111]">Target High-Intent Search</span>
                </div>
                <span className="text-xs font-mono text-[#5F6368]">9,200/mo Vol</span>
              </div>

              {/* Meta Ads ROAS Bar */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#F8FAF8] to-[#EEF5EF] border border-black/[0.06] flex items-center justify-between mt-2">
                <div className="flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#16A34A]" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#111111]">Meta Ads Campaign</span>
                    <span className="text-[10px] text-[#5F6368] font-mono">Algorithmic Creative Scaling</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#16A34A]">4.8x ROAS</span>
                  <span className="text-[10px] block text-[#5F6368] font-mono">Verified CAC: ₹420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
