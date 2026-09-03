import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  ChevronRight,
  Compass,
  Palette,
  Monitor,
  Target,
  FileText,
  Cpu,
  TrendingUp,
} from "lucide-react";

import HeroScene3D from "@/components/3d/HeroScene3D";
import ProjectCard3D from "@/components/projects/ProjectCard3D";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PricingCard from "@/components/pricing/PricingCard";
import FinalCTA from "@/components/home/FinalCTA";

import { PRICING_CONFIG } from "@/data/pricing";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);

  const ecosystemPillars = [
    { title: "Strategy", desc: "Data-driven commercial positioning & unit economics", icon: Compass },
    { title: "Design", desc: "Apple-standard spatial harmony & luxury visual systems", icon: Palette },
    { title: "Development", desc: "Sub-second Next.js builds with zero code bloat", icon: Monitor },
    { title: "Marketing", desc: "High-intent customer acquisition across search & social", icon: Target },
    { title: "Content", desc: "Persuasive storytelling that turns skepticism into trust", icon: FileText },
    { title: "AI", desc: "Automated video generation & autonomous lead workflows", icon: Cpu },
    { title: "Performance", desc: "Direct-response CRO, tracking telemetry & CAC control", icon: TrendingUp },
  ];

  const whyStats = [
    { value: "₹15K+", label: "Starting Projects", desc: "Accessible entry point for high-tier agency engineering" },
    { value: "360°", label: "Digital Growth Ecosystem", desc: "Design, code, paid media & AI united under one roof" },
    { value: "100%", label: "Responsive Guarantee", desc: "Flawless testing from 320px mobile to 4K desktop" },
    { value: "24/7", label: "Digital Presence", desc: "Always-on lead capture & cloud-grade uptime security" },
  ];

  const whyPrinciples = [
    {
      title: "Creative + Technical",
      desc: "We bridge the chasm between award-winning visual taste and rock-solid full-stack engineering.",
    },
    {
      title: "Strategy First",
      desc: "No pixel is placed without a commercial reason. Every element is designed to convert traffic into revenue.",
    },
    {
      title: "Conversion Focused",
      desc: "Traffic without conversion is vanity. We construct frictionless customer journeys and direct lead pipelines.",
    },
    {
      title: "AI Powered",
      desc: "We leverage generative diffusion models and intelligent automation to deliver in days what others take weeks to build.",
    },
    {
      title: "Performance Driven",
      desc: "Sub-second page speeds, high Core Web Vitals, and measurable return on ad spend (ROAS).",
    },
    {
      title: "Built For Growth",
      desc: "Modular architectures that scale smoothly as your transaction volume and audience expand.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — LIGHT LUXURY 3D DIGITAL AGENCY                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAFBF9] border-b border-black/[0.05] overflow-hidden">
        {/* Soft emerald radial glow & subtle grid */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#16A34A]/5 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: 55% Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Redesigned Clean Price Badge */}
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
                Light 3D Digital Art
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                Sub-Second Speed
              </span>
            </div>
          </div>

          {/* Right Column: 45% 3D Interactive Installation (Balanced Visual Dominance) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <HeroScene3D />

              {/* Floating UI metric badge over 3D visual */}
              <div className="absolute bottom-2 left-2 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-sm flex items-center gap-3 pointer-events-none">
                <div className="w-7 h-7 rounded-lg bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center justify-center text-[#16A34A]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#111111] tracking-wide">
                    Creative Technology
                  </span>
                  <span className="text-[10px] text-[#5F6368] font-mono">
                    Sculptural 3D WebGL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION — WHAT WE DO: THE DIGITAL GROWTH ECOSYSTEM (WHITE BG)         */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-white border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              Integrated Synergy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              WHAT WE DO: <span className="text-[#16A34A]">THE GROWTH ECOSYSTEM</span>
            </h2>
            <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed">
              Growlords does not believe in fragmented, siloed tactics. We combine seven essential
              disciplines into one unified, self-reinforcing digital engine built to dominate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`relative p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-[#16A34A]/40 shadow-2xs hover:shadow-sm transition-all duration-300 group ${
                    idx === 6 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4F7F4] border border-black/[0.06] flex items-center justify-center text-[#16A34A] mb-4 group-hover:scale-105 group-hover:bg-[#16A34A]/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] uppercase tracking-tight mb-1.5 group-hover:text-[#16A34A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION — OUR SERVICES (INTERACTIVE LIGHT CARDS, #F8FAF7 BG)          */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-[#F8FAF7] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase">
                ENGINEERED FOR <span className="text-[#16A34A]">SCALE</span>
              </h2>
              <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
                Every service we offer is designed to drive measurable revenue, increase brand authority,
                and turn casual traffic into loyal customers.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#16A34A] hover:underline"
            >
              <span>Explore All 18 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of key services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 9).map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-[#16A34A]/40 shadow-2xs hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#16A34A] bg-[#16A34A]/10 border border-[#16A34A]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-[#5F6368]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#16A34A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5F6368]">
                    {service.startingPriceNote}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white border border-black/[0.1] text-[#111111] hover:bg-zinc-50 hover:border-[#16A34A]/50 shadow-2xs transition-all"
            >
              <span>View All Services &amp; Deliverables</span>
              <ArrowRight className="w-4 h-4 text-[#16A34A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION — FEATURED PROJECTS SHOWCASE (WHITE BG)                       */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-white border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Selected Case Studies
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase">
                FEATURED <span className="text-[#16A34A]">WORKS</span>
              </h2>
              <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
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
      {/* 5. SECTION — WHY GROWLORDS (FACTUAL METRICS, #F2F7F3 BG)                 */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-[#F2F7F3] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              The Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              WHY CHOOSE <span className="text-[#16A34A]">GROWLORDS</span>
            </h2>
            <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed">
              We reject generic formulas, slow templates, and empty agency vanity metrics.
              Here is what sets our agency apart from the crowd.
            </p>
          </div>

          {/* Factual Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
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

          {/* 6 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs hover:border-black/20 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — OUR 6-STAGE PROCESS ROADMAP                                  */}
      {/* ========================================================================= */}
      <ProcessTimeline />

      {/* ========================================================================= */}
      {/* 7. SECTION — CENTRALIZED PRICING (#FAFBF9 BG)                             */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-[#FAFBF9] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              Transparent Investment
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              {PRICING_CONFIG.headline}
            </h2>
            <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed">
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
      {/* 8. FINAL HIGH-IMPACT CTA                                                  */}
      {/* ========================================================================= */}
      <FinalCTA />
    </div>
  );
}
