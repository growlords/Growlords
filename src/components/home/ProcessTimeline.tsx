"use client";

import React, { useState } from "react";
import {
  Compass,
  FileCode2,
  Layers,
  Palette,
  Rocket,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Discover",
      icon: Compass,
      headline: "Understanding the DNA of your business",
      description:
        "We dissect your existing unit economics, customer personas, competitor landscape, and commercial targets to identify untapped digital opportunities.",
      deliverables: ["Market & Competitor Diagnostic", "Audience Persona Modeling", "Technical Scope & KPI Blueprint"],
    },
    {
      step: "02",
      title: "Strategize",
      icon: Layers,
      headline: "Constructing the tactical growth roadmap",
      description:
        "Every rupee invested must have a clear path to return. We architect the multi-channel roadmap uniting web, organic search, and targeted acquisition.",
      deliverables: ["Full-Funnel Growth Architecture", "Information Architecture (IA)", "Content & Conversion Strategy"],
    },
    {
      step: "03",
      title: "Design",
      icon: Palette,
      headline: "High-impact visual identity & spatial UX",
      description:
        "We engineer a luxury visual language, Apple-level spacing, 3D interactive assets, and conversion-focused wireframes that command attention.",
      deliverables: ["Figma Design System", "Interactive 3D Prototyping", "Design Token Library & Typography"],
    },
    {
      step: "04",
      title: "Develop",
      icon: FileCode2,
      headline: "Next.js engineering with sub-second speeds",
      description:
        "Transforming pixel-perfect prototypes into clean, responsive, production code equipped with WebGL interactions and zero bloat.",
      deliverables: ["Clean Next.js Codebase", "Mobile-Optimized WebGL Canvas", "API & Webhook Integrations"],
    },
    {
      step: "05",
      title: "Launch",
      icon: Rocket,
      headline: "Battle-tested deployment & QA validation",
      description:
        "Rigorous cross-device stress testing across 320px mobile to 4K displays, CDN edge caching, SSL hardening, and analytics telemetry verification.",
      deliverables: ["Global Edge CDN Deployment", "Core Web Vitals Verification", "GA4 & Server-Side Pixel Setup"],
    },
    {
      step: "06",
      title: "Grow",
      icon: TrendingUp,
      headline: "Aggressive SEO, Meta Ads & continuous scaling",
      description:
        "The launch is just day one. We deploy targeted advertising, rank for high-intent commercial keywords, and iteratively optimize conversion rates.",
      deliverables: ["Commercial Keyword Domination", "Weekly Media Buying & Creative Scaling", "Conversion Rate Optimization (CRO)"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white border-y border-black/[0.05]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#16A34A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              The Growlords Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase">
              Our 6-Stage <span className="text-[#16A34A]">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
              We eliminate guesswork with a battle-tested roadmap engineered to take your brand from concept to digital dominance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#5F6368] bg-[#F4F7F4] border border-black/[0.06] px-4 py-2 rounded-full w-fit">
            <span>Stage {activeStep + 1} of 6</span>
            <span className="text-[#16A34A] font-bold">/</span>
            <span className="text-[#111111] font-semibold">{steps[activeStep].title}</span>
          </div>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            const Icon = item.icon;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4F7F4] border-[#16A34A] shadow-xs"
                    : "bg-white border-black/[0.06] hover:bg-zinc-50 hover:border-black/20"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2.5">
                  <span
                    className={`font-mono text-xs font-bold ${
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
                  className={`text-sm font-bold tracking-tight ${
                    isActive ? "text-[#111111]" : "text-[#5F6368]"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="relative rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)]">
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#16A34A]/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-black text-[#16A34A]">
                  {steps[activeStep].step}
                </span>
                <span className="h-6 w-[1px] bg-zinc-200" />
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] uppercase">
                  {steps[activeStep].title}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                {steps[activeStep].headline}
              </h3>

              <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed max-w-2xl">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 bg-[#F8FAF8] border border-black/[0.05] rounded-2xl p-5 sm:p-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                Key Deliverables
              </span>
              <ul className="flex flex-col gap-2.5">
                {steps[activeStep].deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F6368]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="text-[#111111] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
