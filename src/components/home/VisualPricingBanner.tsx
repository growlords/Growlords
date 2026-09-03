"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function VisualPricingBanner() {
  const capabilityBadges = [
    "Bespoke Website",
    "3D Interaction",
    "Technical SEO",
    "100% Fluid Responsive",
    "Edge Performance",
    "Direct Founder Lead",
  ];

  return (
    <div className="relative w-full rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 mb-16 overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)]">
      {/* Soft emerald radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#16A34A]/8 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: Prominent ₹15,000+ Visual Centerpiece */}
        <div className="lg:col-span-5 flex flex-col items-start gap-3 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-8 lg:pb-0 lg:pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Accessible High-Tier Engineering</span>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#5F6368]">
            Starting Investment
          </span>

          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#111111] tracking-tight">
              ₹15,000
            </span>
            <span className="text-3xl sm:text-4xl font-black text-[#16A34A]">+</span>
          </div>

          <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
            Enterprise-grade Next.js web design and marketing execution without bloated legacy agency markups.
          </p>
        </div>

        {/* Right: Capability Badges & Instant Project Trigger */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              Included In Every Build:
            </span>

            {/* Capability Badges Grid */}
            <div className="flex flex-wrap gap-2">
              {capabilityBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] text-xs font-semibold text-[#111111] shadow-2xs hover:border-[#16A34A]/40 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-black/[0.06]">
            <div className="flex items-center gap-2 text-xs text-[#5F6368] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Transparent Milestones • Full IP Ownership</span>
            </div>

            <Link
              href="/contact?package=starter"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#16A34A] text-white hover:bg-[#15803D] transition-all shadow-xs"
            >
              <span>Claim ₹15,000 Starter Package</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
