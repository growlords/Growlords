"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FolderGit2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F2F7F3] border-t border-black/[0.05]">
      {/* Ambient soft green lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#16A34A]/8 blur-[140px] pointer-events-none" />

      {/* Subtle digital grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-8 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Projects Starting From ₹15,000</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6">
          YOUR NEXT GROWTH STORY <br className="hidden sm:inline" />
          <span className="text-[#16A34A]">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#5F6368] max-w-2xl mx-auto leading-relaxed mb-10">
          Have an idea, business or brand ready to grow? Let's turn it into a digital experience that gets noticed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide bg-[#16A34A] text-white shadow-sm hover:bg-[#15803D] hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide bg-white text-[#111111] border border-black/[0.08] hover:bg-zinc-50 shadow-2xs transition-all duration-200"
          >
            <FolderGit2 className="w-4 h-4 text-[#5F6368]" />
            <span>Explore Our Work</span>
          </Link>
        </div>

        {/* Direct Contact info pill */}
        <div className="mt-12 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-[#5F6368] font-mono">
          <span>
            Direct Email:{" "}
            <a
              href="mailto:growlords@gmail.com"
              className="text-[#111111] hover:text-[#16A34A] font-medium transition-colors"
            >
              growlords@gmail.com
            </a>
          </span>
          <span className="text-zinc-300">•</span>
          <span>
            Instagram:{" "}
            <a
              href="https://instagram.com/growlords"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#16A34A] font-medium transition-colors"
            >
              @growlords
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
