'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, Target, Compass, Network } from 'lucide-react';

interface AboutProps {
  onOpenProjectModal: () => void;
}

export default function About({ onOpenProjectModal }: AboutProps) {
  return (
    <section id="about" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B7FF3C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-6 sm:mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          AGENCY MANIFESTO
        </div>

        {/* Massive Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight font-heading leading-[0.92] text-white">
              WE'RE <br />
              <span className="text-[#B7FF3C]">GROWLORDS.</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-tight">
              A growth-focused marketing agency built for brands that refuse to stay ordinary.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              We bring strategy, creativity, technology, and performance together because modern growth doesn't happen in silos. We build the connected machinery that makes category leaders inevitable.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <button
                onClick={onOpenProjectModal}
                data-cursor="open"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-[#B7FF3C] text-[#050505] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7FF7A] transition-all duration-300 shadow-[0_0_20px_rgba(183,255,60,0.3)]"
              >
                <span>Partner with Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Structured Manifesto Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 mt-6 lg:mt-0">
            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0A0A0C] hover:border-white/25 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-1.5">
                <Target className="w-4 h-4" />
                OUR MANDATE
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase font-heading text-white">
                Eliminate Growth Friction
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                We diagnose every point of drop-off in your brand ecosystem—from initial impression to checkout—and rebuild it into a high-converting growth vector.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0A0A0C] hover:border-white/25 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-1.5">
                <Compass className="w-4 h-4" />
                OUR PERSPECTIVE
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase font-heading text-white">
                Craft Is The Ultimate Moat
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                When performance marketing becomes algorithmic, world-class taste, cinematic narrative, and unmatched execution become the only sustainable differentiators.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0A0A0C] hover:border-white/25 transition-colors">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-1.5">
                <Network className="w-4 h-4" />
                OUR COMMITMENT
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase font-heading text-white">
                Compounding Partnership
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                We operate as an embedded growth team, sharing high conviction and engineering systems that compound in enterprise value quarter over quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
