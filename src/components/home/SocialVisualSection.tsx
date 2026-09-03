"use client";

import React from "react";
import Link from "next/link";
import {
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Send,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Play,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";

export default function SocialVisualSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white border-b border-black/[0.05]">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy & Capabilities */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <Share2 className="w-3.5 h-3.5" />
              <span>Social Media &amp; Content Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] uppercase tracking-tight leading-[1.08]">
              YOUR BRAND SHOULD BE <br />
              <span className="text-[#16A34A]">IMPOSSIBLE TO IGNORE.</span>
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              In a crowded digital feed, generic posts are instantly scrolled past.
              Growlords curates luxury visual content, high-retention Reels, and cohesive social identities
              that command attention and turn followers into loyal paying clients.
            </p>

            <div className="flex flex-col gap-2.5 w-full my-2 text-xs sm:text-sm text-[#111111]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Cinematic 4K Reels, Motion Graphics &amp; AI-enhanced video</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Editorial grid design with Apple-standard visual spacing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                <span>Direct story funnels leading into DM automation and purchases</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://instagram.com/growlords"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#16A34A] text-white hover:bg-[#15803D] transition-all shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow @growlords on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/services#social-media-management"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#16A34A] transition-colors"
              >
                <span>View Full Social Management Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Layered Floating Social Media Visual Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Main Instagram Post Card */}
            <div className="w-full max-w-md rounded-3xl bg-white border border-black/[0.08] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-4 relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#16A34A] to-[#22C55E] p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-xs text-[#16A34A]">
                      GL
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-[#111111]">growlords</span>
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                    </div>
                    <span className="text-[10px] text-[#5F6368] font-mono">Digital Marketing &amp; Creative Agency</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#16A34A] font-semibold bg-[#16A34A]/10 px-2.5 py-0.5 rounded-full">
                  Verified
                </span>
              </div>

              {/* Visual Frame */}
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F8FAF8] via-[#FFFFFF] to-[#EEF5EF] border border-black/[0.06] p-6 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-[#16A34A] font-bold uppercase tracking-wider">
                    GROWTH PLAYBOOK
                  </span>
                  <Sparkles className="w-4 h-4 text-[#16A34A]" />
                </div>

                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-xs font-mono uppercase text-[#5F6368]">Growlords Architecture</span>
                  <h4 className="text-2xl font-black text-[#111111] uppercase leading-tight">
                    BUILD. GROW. <br />
                    <span className="text-[#16A34A]">DOMINATE.</span>
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#5F6368] relative z-10">
                  <span>Projects From ₹15,000</span>
                  <span>@growlords</span>
                </div>
              </div>

              {/* Engagement Bar */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-4 text-[#111111]">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <MessageCircle className="w-5 h-5" />
                  <Send className="w-5 h-5" />
                </div>
                <Bookmark className="w-5 h-5 text-[#5F6368]" />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <span className="font-bold text-[#111111]">1,842 likes</span>
                <p className="text-[#5F6368]">
                  <span className="font-bold text-[#111111] mr-1">growlords</span>
                  Your website shouldn&apos;t just be a digital business card. It should be an automated growth engine.
                </p>
              </div>
            </div>

            {/* Floating Card: Reels Preview (Bottom Left Parallax) */}
            <div className="absolute -bottom-6 -left-4 sm:left-2 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-lg flex items-center gap-3 z-20 pointer-events-none hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#111111]">Reels Architecture</span>
                <span className="text-[10px] font-mono text-[#16A34A] font-semibold">100K+ Viral Views</span>
              </div>
            </div>

            {/* Floating Card: Growth Indicator (Top Right Parallax) */}
            <div className="absolute -top-4 -right-2 sm:right-2 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-lg flex items-center gap-2.5 z-20 pointer-events-none">
              <TrendingUp className="w-4 h-4 text-[#16A34A]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-[#5F6368]">Engagement</span>
                <span className="text-xs font-black text-[#111111]">+248% MoM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
