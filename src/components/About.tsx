'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, Target, Compass, Network } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

interface AboutProps {
  onOpenProjectModal: () => void;
}

export default function About({ onOpenProjectModal }: AboutProps) {
  const { content } = useContent();
  const about = content.about;

  const renderIcon = (name: string) => {
    switch (name?.toLowerCase()) {
      case 'target':
        return <Target className="w-4 h-4" />;
      case 'compass':
        return <Compass className="w-4 h-4" />;
      case 'network':
        return <Network className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B7FF3C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-6 sm:mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          {about.tag || 'AGENCY MANIFESTO'}
        </div>

        {/* Massive Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight font-heading leading-[0.92] text-white">
              {about.heading} <br />
              <span className="text-[#B7FF3C]">{about.headingAccent}</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-tight">
              {about.subtitle}
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              {about.description}
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <button
                onClick={onOpenProjectModal}
                data-cursor="open"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-[#B7FF3C] text-[#050505] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7FF7A] transition-all duration-300 shadow-[0_0_20px_rgba(183,255,60,0.3)]"
              >
                <span>{about.ctaText || 'Partner with Us'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Structured Manifesto Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 mt-6 lg:mt-0">
            {(about.mandates || []).map((mandate, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0A0A0C] hover:border-white/25 transition-colors"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-1.5">
                  {renderIcon(mandate.iconName)}
                  {mandate.tag}
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase font-heading text-white">
                  {mandate.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                  {mandate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
