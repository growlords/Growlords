"use client";

import React, { useState } from "react";
import {
  Compass,
  Layers,
  Palette,
  FileCode2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Terminal,
  Globe,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "IDEA",
      icon: Compass,
      headline: "Deconstructing The Core Commercial DNA",
      description:
        "We dissect your existing unit economics, customer personas, competitor landscape, and commercial targets to identify untapped digital opportunities.",
      deliverables: ["Market & Competitor Diagnostic", "Audience Persona Modeling", "Technical Scope & KPI Blueprint"],
      visualType: "idea",
      badge: "Stage 01 • Diagnostic",
    },
    {
      step: "02",
      title: "STRATEGY",
      icon: Layers,
      headline: "Constructing The High-Return Growth Architecture",
      description:
        "Every rupee invested must have a clear path to return. We architect the multi-channel roadmap uniting web, organic search, and targeted acquisition.",
      deliverables: ["Full-Funnel Growth Architecture", "Information Architecture (IA)", "Content & Conversion Strategy"],
      visualType: "strategy",
      badge: "Stage 02 • Architecture",
    },
    {
      step: "03",
      title: "DESIGN",
      icon: Palette,
      headline: "Luxury Spatial UX & 3D Interactive Mockups",
      description:
        "We engineer a luxury visual language, Apple-level spacing, 3D interactive assets, and conversion-focused wireframes that command instant authority.",
      deliverables: ["Figma Design System", "Interactive 3D Prototyping", "Design Token Library & Typography"],
      visualType: "design",
      badge: "Stage 03 • Spatial UX",
    },
    {
      step: "04",
      title: "DEVELOPMENT",
      icon: FileCode2,
      headline: "Sub-Second Next.js & WebGL Engineering",
      description:
        "Transforming pixel-perfect prototypes into clean, responsive, production code equipped with WebGL interactions, semantic SEO, and zero bloat.",
      deliverables: ["Clean Next.js Codebase", "Mobile-Optimized WebGL Canvas", "API & Webhook Integrations"],
      visualType: "development",
      badge: "Stage 04 • Code",
    },
    {
      step: "05",
      title: "LAUNCH",
      icon: Rocket,
      headline: "Global Edge CDN & Hardened Deployment",
      description:
        "Rigorous cross-device stress testing across 320px mobile to 4K displays, CDN edge caching, SSL hardening, and analytics telemetry verification.",
      deliverables: ["Global Edge CDN Deployment", "Core Web Vitals Verification", "GA4 & Server-Side Pixel Setup"],
      visualType: "launch",
      badge: "Stage 05 • Deployment",
    },
    {
      step: "06",
      title: "GROWTH",
      icon: TrendingUp,
      headline: "Aggressive SEO, Meta Ads & Scaling",
      description:
        "The launch is just day one. We deploy targeted advertising, rank for high-intent commercial keywords, and iteratively optimize conversion rates.",
      deliverables: ["Commercial Keyword Domination", "Weekly Media Buying & Creative Scaling", "Conversion Rate Optimization (CRO)"],
      visualType: "growth",
      badge: "Stage 06 • Scale",
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white border-b border-black/[0.05]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              From Idea To Launch
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-tight">
              THE 6-STAGE <br />
              <span className="text-[#16A34A]">GROWTH ROADMAP</span>
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              We eliminate guesswork with a battle-tested roadmap engineered to take your brand from concept to digital dominance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#5F6368] bg-[#F4F7F4] border border-black/[0.06] px-4 py-2 rounded-full w-fit shadow-2xs">
            <span>Stage {activeStep + 1} of 6</span>
            <span className="text-[#16A34A] font-bold">/</span>
            <span className="text-[#111111] font-semibold">{current.title}</span>
          </div>
        </div>

        {/* Step Selector Tabs with Connecting Timeline Line */}
        <div className="relative mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {steps.map((item, idx) => {
              const isActive = activeStep === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#F4F7F4] border-[#16A34A] shadow-[0_8px_20px_-4px_rgba(22,163,74,0.15)] scale-[1.02]"
                      : "bg-white border-black/[0.06] hover:bg-zinc-50 hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-mono text-xs font-black ${
                        isActive ? "text-[#16A34A]" : "text-[#5F6368]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#16A34A]" : "text-[#5F6368]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-black tracking-tight ${
                      isActive ? "text-[#111111]" : "text-[#5F6368]"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE STAGE VISUAL CANVAS & DELIVERABLES BOX                             */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-[#FAFBF9] border border-black/[0.08] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Stage Strategy & Deliverables */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-black text-[#16A34A]">
                  {current.step}
                </span>
                <span className="h-6 w-[1px] bg-zinc-300" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5F6368]">
                  {current.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                {current.headline}
              </h3>

              <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="mt-2 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
                  Stage Deliverables:
                </span>
                <ul className="flex flex-col gap-2">
                  {current.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Custom Interactive Visual Mockup For The Active Stage */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-sm flex flex-col gap-4 relative overflow-hidden">
                {/* Stage 01 Mockup: Brainstorm & Opportunity Matrix */}
                {current.visualType === "idea" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono text-[#5F6368] uppercase">Diagnostic Canvas</span>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">100% Alignment</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-[#5F6368]">TARGET AUDIENCE</span>
                        <span className="text-sm font-bold text-[#111111]">High-Intent Buyers</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/20 flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-[#16A34A]">COMPETITOR GAP</span>
                        <span className="text-sm font-bold text-[#16A34A]">Luxury 3D Tech</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.04] text-xs font-mono text-[#5F6368]">
                      Scope: Custom Full-Stack Roadmap • Milestone Commitments
                    </div>
                  </div>
                )}

                {/* Stage 02 Mockup: Growth Funnel Architecture */}
                {current.visualType === "strategy" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono text-[#5F6368] uppercase">Funnel Model</span>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">LTV/CAC = 4.2x</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-3 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/30 flex items-center justify-between text-xs font-bold text-[#111111]">
                        <span>Top of Funnel (Search &amp; Viral Reels)</span>
                        <span className="text-[#16A34A]">100K+ Reach</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-black/[0.06] flex items-center justify-between text-xs font-medium text-[#111111]">
                        <span>Bespoke 3D Landing Page Conversion</span>
                        <span className="text-[#16A34A] font-bold">4.8% CVR</span>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-50 border border-black/[0.04] flex items-center justify-between text-xs font-mono text-[#5F6368]">
                        <span>Direct Lead Qualification &amp; Closing</span>
                        <span className="text-[#111111] font-bold">Instant Dispatch</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage 03 Mockup: Spatial Figma Design System */}
                {current.visualType === "design" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono text-[#5F6368] uppercase">Design System Tokens</span>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">Apple-Standard Spacing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FAFBF9] border border-black/[0.08] shadow-xs flex items-center justify-center font-mono text-xs font-bold text-[#111111]">
                        #FAF
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#16A34A] shadow-xs flex items-center justify-center font-mono text-xs font-bold text-white">
                        #16A
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#111111] shadow-xs flex items-center justify-center font-mono text-xs font-bold text-white">
                        #111
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] text-xs flex flex-col gap-1">
                      <span className="font-bold text-[#111111]">Interactive WebGL Sculpture Prototyping</span>
                      <span className="text-[#5F6368]">Frosted glass physical shaders • 60fps dynamic physics</span>
                    </div>
                  </div>
                )}

                {/* Stage 04 Mockup: Terminal Build Metrics */}
                {current.visualType === "development" && (
                  <div className="flex flex-col gap-3 font-mono text-xs">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-black/[0.06] text-zinc-400">
                      <Terminal className="w-4 h-4 text-[#16A34A]" />
                      <span className="text-[#111111] font-bold">next build --turbopack</span>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 text-zinc-200 flex flex-col gap-1.5 shadow-sm">
                      <span className="text-[#22C55E]">✓ Compiled successfully in 0.4s</span>
                      <span className="text-zinc-400">✓ Generating static pages (20/20)</span>
                      <span className="text-zinc-300">✓ TypeScript strict checking passed</span>
                      <span className="text-zinc-400 text-[11px] mt-1">Bundle Size: 84 kB (First Load JS)</span>
                    </div>
                  </div>
                )}

                {/* Stage 05 Mockup: Edge CDN Radar */}
                {current.visualType === "launch" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono text-[#5F6368] uppercase">Global Edge Deployment</span>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">99.99% SLA</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex items-center gap-2.5">
                        <Globe className="w-4 h-4 text-[#16A34A]" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#111111]">Pan-India CDN</span>
                          <span className="text-[10px] text-[#5F6368] font-mono">Mumbai / Delhi</span>
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAFBF9] border border-black/[0.06] flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#111111]">SSL Hardened</span>
                          <span className="text-[10px] text-[#5F6368] font-mono">TLS 1.3 Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F7F4] border border-[#16A34A]/20 text-xs font-mono text-[#16A34A] font-semibold">
                      Telemetry: Google Analytics 4 &amp; Meta Pixel Verified
                    </div>
                  </div>
                )}

                {/* Stage 06 Mockup: Growth Scaling Curve */}
                {current.visualType === "growth" && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                      <span className="text-xs font-mono text-[#5F6368] uppercase">Scaling Engine</span>
                      <span className="text-xs font-mono text-[#16A34A] font-bold">+340% Quarter-Over-Quarter</span>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#F8FAF8] to-[#EEF5EF] border border-black/[0.06] flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#111111]">Commercial Keywords</span>
                        <span className="text-[10px] text-[#5F6368] font-mono">Page 1 Dominance</span>
                      </div>
                      <span className="text-lg font-black text-[#16A34A]">#1 Rank</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/[0.06] text-xs font-mono">
                      <span>Weekly Media Buying Iterations</span>
                      <span className="text-[#16A34A] font-bold">Active</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
