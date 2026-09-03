import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Target,
  Compass,
  Rocket,
  Lightbulb,
  TrendingUp,
  Cpu,
  Monitor,
  Palette,
  Layers,
} from "lucide-react";
import InstagramIcon from "@/components/common/InstagramIcon";
import { FOUNDERS } from "@/data/founders";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us — Leadership, Story & Vision",
  description:
    "Meet the founders and discover the philosophy behind Growlords. Founded by Raman Kamboj & Jatin Kamboj, Growlords empowers businesses to build, grow, and dominate digitally.",
  openGraph: {
    title: "About Growlords — Meet The Minds Behind The Agency",
    description:
      "Digital marketing and creative agency founded by Raman Kamboj and Jatin Kamboj. Web design, SEO, Meta Ads and AI video.",
  },
};

export default function AboutPage() {
  const growthPathway = [
    {
      step: "01",
      title: "STRATEGY",
      icon: Compass,
      desc: "Deconstruct unit economics, audience psychology, and competitor blindspots to engineer high-yield positioning.",
    },
    {
      step: "02",
      title: "DESIGN",
      icon: Palette,
      desc: "Apple-standard spatial typography, custom design systems, and 3D perspectives that make your brand unforgettable.",
    },
    {
      step: "03",
      title: "TECHNOLOGY",
      icon: Monitor,
      desc: "Sub-second Next.js web applications, WebGL shaders, zero bloat, and hardened global edge CDN deployment.",
    },
    {
      step: "04",
      title: "MARKETING",
      icon: Target,
      desc: "High-intent commercial SEO ranking domination combined with high-ROAS Meta and Google media buying.",
    },
    {
      step: "05",
      title: "AI & AUTOMATION",
      icon: Cpu,
      desc: "Autonomous lead routing, rapid video commercials in 48 hours, and generative diffusion creative workflows.",
    },
    {
      step: "06",
      title: "EXPONENTIAL GROWTH",
      icon: TrendingUp,
      desc: "Continuous conversion rate optimization (CRO), recurring revenue retention, and market category leadership.",
    },
  ];

  const values = [
    {
      title: "Our Mission",
      icon: Target,
      desc: "To empower ambitious businesses and visionary creators with the technical leverage, conversion architecture, and visual aesthetics required to dominate their competitive niches.",
    },
    {
      title: "Our Vision",
      icon: Compass,
      desc: "To establish a modern agency standard where engineering integrity and creative taste are inseparable, replacing disposable templates with defensible digital brand equity.",
    },
    {
      title: "Our Approach",
      icon: Lightbulb,
      desc: "We operate as an embedded growth partner. From deep-dive discovery and bespoke UI/UX to high-intent media buying and continuous CRO, every action is tied to commercial ROI.",
    },
    {
      title: "Our Standard",
      icon: Rocket,
      desc: "We refuse to cut corners. 100% fluid responsiveness across devices, sub-second latency, clean code, and zero fabricated vanity metrics.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Growlords Story</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6 max-w-4xl mx-auto">
          WE ARE GROWLORDS. <br />
          <span className="text-[#16A34A]">WE MAKE BRANDS GROW.</span>
        </h1>

        <p className="text-base sm:text-xl text-[#5F6368] max-w-3xl mx-auto leading-relaxed">
          Growlords is a digital marketing and creative agency focused on helping businesses
          establish an unshakeable digital presence through websites, e-commerce, SEO,
          social media, content, design, advertising and emerging AI technologies.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#5F6368]">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-2xs">
            Founded &amp; Directed by Raman Kamboj &amp; Jatin Kamboj
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-2xs">
            Headquartered in India • Operating Worldwide
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND STORY: THE GROWTH PATHWAY (WHY GROWLORDS?)                       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-y border-black/[0.05] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              The Growth Pathway
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              WHY <span className="text-[#16A34A]">GROWLORDS?</span>
            </h2>
            <p className="text-[#5F6368] text-base leading-relaxed">
              We guide brands along an upward trajectory from initial positioning to sustainable category leadership.
            </p>
          </div>

          {/* Growth Pathway Ladder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthPathway.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-[#FAFBF9] border border-black/[0.06] hover:border-[#16A34A]/40 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col gap-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#16A34A]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-[#16A34A] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#111111] tracking-tight uppercase group-hover:text-[#16A34A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUNDERS SECTION (EDITORIAL LIGHT CARDS)                               */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAFBF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
              MEET THE MINDS <span className="text-[#16A34A]">BEHIND GROWLORDS</span>
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
              Founded on the belief that ambitious businesses deserve enterprise-grade digital architecture
              and high-converting creative execution without bloated legacy agency costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.id}
                className="group relative flex flex-col rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 hover:border-[#16A34A]/40 transition-all duration-300 shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_-8px_rgba(22,163,74,0.12)]"
              >
                {/* Visual Portrait Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F7F4] border border-black/[0.06] mb-6 flex items-center justify-center group-hover:border-[#16A34A]/30 transition-colors">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] text-[11px] font-mono text-[#16A34A] font-semibold shadow-2xs">
                    {founder.badge}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-[#111111] tracking-tight">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-mono text-[#5F6368]">
                      {founder.location}
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#16A34A]">
                    {founder.role}
                  </span>
                </div>

                {/* Authentic Biography */}
                <p className="text-sm text-[#5F6368] leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Areas of Expertise */}
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#F4F7F4] border border-black/[0.04] text-[#111111]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action & Connect */}
                <div className="pt-4 border-t border-black/[0.06] mt-auto flex items-center justify-between">
                  <a
                    href={`mailto:${founder.email}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#5F6368] hover:text-[#16A34A] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Direct Email</span>
                  </a>

                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F4F7F4] border border-black/[0.08] text-xs font-semibold text-[#111111] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>@growlords</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MISSION & OPERATIONAL STANDARDS                                        */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/[0.05]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            Foundational Principles
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
            HOW WE <span className="text-[#16A34A]">OPERATE</span>
          </h2>
          <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
            The values and operational commitments that govern every client build and campaign at Growlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-2xs hover:border-[#16A34A]/40 transition-all flex flex-col gap-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center justify-center text-[#16A34A]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] uppercase tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-[#5F6368] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
