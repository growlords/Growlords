import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Compass,
  Palette,
  Monitor,
  Target,
  FileText,
  Cpu,
  TrendingUp,
} from "lucide-react";

import HeroScene3D from "@/components/3d/HeroScene3D";
import BrandMarquee from "@/components/home/BrandMarquee";
import ServiceVisualShowcase from "@/components/home/ServiceVisualShowcase";
import SocialVisualSection from "@/components/home/SocialVisualSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import VisualPricingBanner from "@/components/home/VisualPricingBanner";
import ClientShowcaseSection from "@/components/home/ClientShowcaseSection";
import PricingCard from "@/components/pricing/PricingCard";
import ProjectCard3D from "@/components/projects/ProjectCard3D";
import FinalCTA from "@/components/home/FinalCTA";

import Ecosystem3DSection from "@/components/home/Ecosystem3DSection";
import AIVisualSection from "@/components/home/AIVisualSection";

import { PRICING_CONFIG } from "@/data/pricing";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);

  const whyStats = [
    { value: "₹15K+", label: "Starting Projects", desc: "Accessible entry point for high-tier agency engineering" },
    { value: "360°", label: "Digital Growth Ecosystem", desc: "Design, code, paid media & AI united under one roof" },
    { value: "100%", label: "Responsive Guarantee", desc: "Flawless testing from 320px mobile to 4K desktop" },
    { value: "24/7", label: "Digital Presence", desc: "Always-on lead capture & cloud-grade uptime security" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — DIGITAL GROWTH COMMAND CENTER                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAFBF9] border-b border-black/[0.05] overflow-hidden">
        {/* Soft emerald radial aura & abstract curved decorative background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#16A34A]/6 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

        {/* Abstract organic curve lines (visual richness) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 600 500, 1400 300 C 1800 200, 2000 600, 2400 400"
            fill="none"
            stroke="rgba(22, 163, 74, 0.12)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M-50 400 C 400 250, 800 600, 1600 350 C 2000 250, 2200 500, 2500 450"
            fill="none"
            stroke="rgba(0, 0, 0, 0.04)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: 55% Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Redesigned Price Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#111111] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-semibold">Projects Starting From ₹15,000</span>
            </div>

            {/* Headline with responsive clamp() */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#111111] uppercase leading-[1.08]">
              WE BUILD <br />
              <span className="text-[#16A34A]">DIGITAL BRANDS</span> <br />
              THAT GROW.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#5F6368] max-w-xl leading-relaxed">
              Growlords is a digital marketing and creative agency helping ambitious businesses
              turn ideas into powerful digital experiences, high-converting websites and scalable online brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide bg-[#16A34A] text-white shadow-sm hover:bg-[#15803D] hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide bg-white text-[#111111] border border-black/[0.1] hover:bg-zinc-50 shadow-2xs transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#5F6368]" />
              </Link>
            </div>

            {/* Trust Bar Highlights */}
            <div className="pt-5 border-t border-black/[0.06] w-full flex flex-wrap items-center gap-6 text-xs text-[#5F6368] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                Zero Generic Templates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                Interactive 3D Art
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                Sub-Second Speed
              </span>
            </div>
          </div>

          {/* Right Column: 45% Layered Digital Growth Command Center */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroScene3D />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INFINITE BRAND & SERVICE MARQUEE (IMMEDIATELY AFTER HERO)              */}
      {/* ========================================================================= */}
      <BrandMarquee />

      {/* ========================================================================= */}
      {/* 3. YOUR DIGITAL GROWTH ECOSYSTEM (SIGNATURE 3D INTERACTIVE SECTION)       */}
      {/* ========================================================================= */}
      <Ecosystem3DSection />

      {/* ========================================================================= */}
      {/* 4. EDITORIAL SERVICE SPOTLIGHTS (WEB DESIGN, E-COMMERCE, SEO & ADS)       */}
      {/* ========================================================================= */}
      <ServiceVisualShowcase />

      {/* ========================================================================= */}
      {/* 5. FEATURED CLIENT CASE STUDIES                                           */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-[#FAFBF9] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Selected Case Studies
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-tight">
                FEATURED <span className="text-[#16A34A]">WORKS</span>
              </h2>
              <p className="text-[#5F6368] text-base leading-relaxed">
                Real digital experiences, e-commerce storefronts, and 3D web applications
                engineered for businesses across India and worldwide.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white border border-black/[0.1] text-[#111111] hover:bg-zinc-50 hover:text-[#16A34A] shadow-2xs transition-all w-fit"
            >
              <span>View All 13 Live Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard3D key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. AI MEETS CREATIVITY (FUTURISTIC LIGHT 3D AI SECTION)                   */}
      {/* ========================================================================= */}
      <AIVisualSection />

      {/* ========================================================================= */}
      {/* 7. SOCIAL MEDIA CONTENT ECOSYSTEM                                         */}
      {/* ========================================================================= */}
      <SocialVisualSection />

      {/* ========================================================================= */}
      {/* 8. FROM IDEA TO LAUNCH (VISUAL STORYTELLING PROCESS)                      */}
      {/* ========================================================================= */}
      <ProcessTimeline />

      {/* ========================================================================= */}
      {/* 9. WHY CHOOSE GROWLORDS (FACTUAL PERFORMANCE ADVANTAGE)                   */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-[#FAFBF9] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              The Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              WHY CHOOSE <span className="text-[#16A34A]">GROWLORDS</span>
            </h2>
            <p className="text-[#5F6368] text-base leading-relaxed">
              We reject generic formulas, slow templates, and empty agency vanity metrics.
              Here is what sets our agency apart from the crowd.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex flex-col gap-2 relative overflow-hidden group hover:border-[#16A34A]/40 transition-colors"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-[#16A34A]">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                  {stat.label}
                </span>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. VISUAL PRICING BANNER & TRANSPARENT TIERS                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-white border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prominent ₹15,000+ Visual Centerpiece Banner */}
          <VisualPricingBanner />

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              Transparent Investment
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              {PRICING_CONFIG.headline}
            </h2>
            <p className="text-[#5F6368] text-base leading-relaxed">
              {PRICING_CONFIG.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_CONFIG.tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. BUILT FOR AMBITIOUS BUSINESSES (13 LIVE CLIENT DEPLOYMENTS)           */}
      {/* ========================================================================= */}
      <ClientShowcaseSection />

      {/* ========================================================================= */}
      {/* 12. FINAL HIGH-IMPACT CONVERSION SECTION                                  */}
      {/* ========================================================================= */}
      <FinalCTA />
    </div>
  );
}
