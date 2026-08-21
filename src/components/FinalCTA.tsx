'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

interface FinalCTAProps {
  onOpenProjectModal: () => void;
}

export default function FinalCTA({ onOpenProjectModal }: FinalCTAProps) {
  const { content } = useContent();
  const finalCta = content.finalCta;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-24 sm:py-32 md:py-36 bg-[#050505] text-white border-t border-white/10 overflow-hidden flex items-center justify-center">
      {/* Radiant glow core */}
      <div className="absolute w-[500px] h-[350px] bg-[#B7FF3C]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/10 bg-[#111114]/60 backdrop-blur-md mb-6 sm:mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#B7FF3C]" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-white/80">
            {finalCta.tag || 'INITIATE GROWTH ENGAGEMENT'}
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-heading leading-[0.92] text-white">
          {finalCta.heading} <br />
          <span className="text-[#B7FF3C] glow-text">{finalCta.headingAccent}</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl mx-auto">
          {finalCta.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={onOpenProjectModal}
            data-cursor="open"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#B7FF3C] text-[#050505] font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#D7FF7A] hover:scale-105 shadow-[0_0_35px_rgba(183,255,60,0.35)]"
          >
            <span>{finalCta.primaryCtaText || 'Start a Project'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToWork}
            data-cursor="explore"
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            {finalCta.secondaryCtaText || 'View Our Work'}
          </button>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-widest">
          {(finalCta.trustBadges || []).map((badge, i) => (
            <span key={i}>{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
