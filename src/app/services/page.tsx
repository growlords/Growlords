import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Monitor,
  ShoppingBag,
  UserCheck,
  Search,
  Share2,
  FileText,
  Palette,
  Target,
  Layers,
  Feather,
  Compass,
  Layout,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Services — 360° Digital Growth Capabilities",
  description:
    "Explore Growlords comprehensive digital marketing and engineering services: Web Design & Development, E-Commerce, SEO, Social Media, AI Video Creation, Meta Ads, and Performance Marketing starting from ₹15,000.",
  openGraph: {
    title: "Growlords Digital Agency Services — Web Design, SEO, Ads & AI",
    description:
      "Engineered for high ROI and scale. High-converting 3D websites, e-commerce, and paid media.",
  },
};

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  ShoppingBag,
  UserCheck,
  Search,
  Share2,
  Sparkles,
  FileText,
  Palette,
  Target,
  Layers,
  Feather,
  Compass,
  Layout,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Spectrum Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6 max-w-4xl mx-auto">
          SERVICES ENGINEERED TO <br />
          <span className="text-[#16A34A]">SCALE YOUR REVENUE.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          From cutting-edge Next.js 3D web applications starting from ₹15,000 to full-funnel Meta advertising
          and AI video production, we deliver the unfair digital advantage your brand deserves.
        </p>

        {/* Quick category badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {["Development", "Marketing", "Design & AI", "Growth"].map((cat) => (
            <span
              key={cat}
              className="px-3.5 py-1 rounded-full bg-white border border-black/[0.06] shadow-2xs text-xs font-mono text-[#5F6368]"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Detailed Editorial Services Catalog */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 relative z-10">
        <div className="flex flex-col gap-10 sm:gap-14">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Monitor;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 relative rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-[0_4px_25px_-2px_rgba(0,0,0,0.04)] border border-black/[0.06] hover:border-[#16A34A]/40 group ${
                  isEven ? "bg-white" : "bg-[#F8FAF7]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Col: Main Description & Highlights */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F4F7F4] border border-black/[0.08] flex items-center justify-center text-[#16A34A] shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} • {service.category}
                        </span>
                        <span className="text-xs text-[#5F6368] font-mono">
                          {service.startingPriceNote}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight group-hover:text-[#16A34A] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Key Benefits Grid */}
                    <div className="mt-2 flex flex-col gap-2.5">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                        Strategic Benefits:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-[#5F6368]">
                            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                            <span className="text-[#111111]">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Deliverables, Process & Direct CTA */}
                  <div className="lg:col-span-5 flex flex-col gap-5 bg-white border border-black/[0.06] shadow-2xs rounded-2xl p-6 sm:p-7">
                    {/* Deliverables */}
                    <div className="flex flex-col gap-2.5">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
                        Included Deliverables
                      </span>
                      <ul className="flex flex-col gap-1.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-xs text-[#5F6368] flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#16A34A]"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div className="flex flex-col gap-2 pt-3.5 border-t border-black/[0.06]">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#5F6368] font-semibold">
                        Execution Workflow
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.process.map((step, sIdx) => (
                          <span
                            key={step}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F4F7F4] border border-black/[0.05] text-[#111111]"
                          >
                            {sIdx + 1}. {step}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-[#16A34A] text-white hover:bg-[#15803D] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs hover:shadow"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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
