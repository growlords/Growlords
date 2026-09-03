"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        tier.popular
          ? "bg-white border-2 border-[#16A34A] shadow-[0_12px_40px_-6px_rgba(22,163,74,0.12)] lg:-translate-y-2"
          : "bg-white border border-black/[0.08] hover:border-black/20 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Popular Badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-xs ${
              tier.popular
                ? "bg-[#16A34A] text-white"
                : "bg-zinc-100 text-[#111111] border border-black/[0.08]"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            {tier.badge}
          </span>
        </div>
      )}

      {/* Top Details */}
      <div>
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] uppercase">
            {tier.name}
          </h3>
          <p className="text-xs text-[#5F6368] font-mono">{tier.idealFor}</p>
        </div>

        {/* Pricing tag */}
        <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-black/[0.06]">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
            {tier.startingPrice}
          </span>
          {tier.period && (
            <span className="text-xs font-mono text-[#5F6368]">
              / {tier.period}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* Features list */}
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
            What's Included:
          </span>
          <ul className="flex flex-col gap-2.5">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <div className="w-4 h-4 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-[#16A34A]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href={tier.ctaHref}
        className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 ${
          tier.popular
            ? "bg-[#16A34A] text-white hover:bg-[#15803D] shadow-sm hover:shadow"
            : "bg-[#F4F7F4] text-[#111111] hover:bg-zinc-200 border border-black/[0.06]"
        }`}
      >
        <span>{tier.ctaText}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
