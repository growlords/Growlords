"use client";

import React from "react";
import Link from "next/link";
import { Globe, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function ClientShowcaseSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F8FAF7] border-b border-black/[0.05]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold w-fit shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Client Results</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-tight">
              BUILT FOR <br />
              <span className="text-[#16A34A]">AMBITIOUS BUSINESSES</span>
            </h2>

            <p className="text-base text-[#5F6368] leading-relaxed">
              We let our code and client deployments speak for themselves.
              Explore 13 live digital experiences engineered for businesses across India and globally.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white border border-black/[0.1] text-[#111111] hover:bg-zinc-50 hover:text-[#16A34A] shadow-2xs transition-all w-fit"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 13 Live Client Websites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-black/[0.06] hover:border-[#16A34A]/40 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F7F4] text-[#16A34A] font-semibold">
                  {project.category}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#16A34A] transition-colors" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors line-clamp-1">
                  {project.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#5F6368] font-mono">
                  <Globe className="w-3 h-3 text-[#16A34A] shrink-0" />
                  <span className="truncate">{project.domain}</span>
                </div>
              </div>

              <div className="pt-2.5 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-mono text-[#5F6368]">
                <span>{project.badge}</span>
                <span className="text-[#16A34A] font-semibold group-hover:underline">Visit ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
