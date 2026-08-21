'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, TrendingUp, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { CaseStudyItem } from '@/types';
import { useContent } from '@/context/ContentContext';

interface CaseStudiesProps {
  onOpenProjectModal: () => void;
}

export default function CaseStudies({ onOpenProjectModal }: CaseStudiesProps) {
  const { content } = useContent();
  const caseStudies = content.caseStudies;
  const items = caseStudies.items || [];

  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  return (
    <section id="work" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
              <span className="w-5 sm:w-6 h-[1px] bg-[#B7FF3C]" />
              {caseStudies.tag || 'CASE STUDIES & IMPACT'}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.98]">
              {caseStudies.heading} <br />
              <span className="text-[#B7FF3C]">{caseStudies.headingAccent}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed">
            {caseStudies.description}
          </p>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              data-cursor="view case"
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0A0C] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#B7FF3C]/40 hover:bg-[#111114] cursor-pointer"
            >
              {/* Subtle Glowing Corner Indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7FF3C]/5 rounded-full blur-2xl group-hover:bg-[#B7FF3C]/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <span className="text-xs font-mono tracking-widest text-[#B7FF3C] font-bold">
                      CASE {item.number}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-[11px] sm:text-xs text-white/60 uppercase tracking-wider font-mono">
                      {item.industry}
                    </span>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#B7FF3C] group-hover:bg-[#B7FF3C] group-hover:text-[#050505] transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight font-heading leading-tight group-hover:text-[#B7FF3C] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 font-light line-clamp-2 leading-relaxed">
                  {item.challenge}
                </p>

                {/* Services Tags */}
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {(item.services || []).map((svc, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/5"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Results Showcase */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4">
                {(item.results || []).map((res, i) => (
                  <div key={i}>
                    <div className="text-lg sm:text-xl md:text-2xl font-black font-heading text-white group-hover:text-[#B7FF3C] transition-colors">
                      {res.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-white/50 uppercase tracking-wider mt-0.5 truncate">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal Drawer */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-12 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-[#050505]/90 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-[#0A0A0C] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 z-10 shadow-2xl max-h-[88vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Header */}
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                CASE STUDY {selectedCase.number} // {selectedCase.industry}
              </div>

              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase font-heading tracking-tight text-white pr-8">
                {selectedCase.title}
              </h3>

              <div className="mt-2 text-xs sm:text-sm text-white/50 font-mono">
                Client Profile: {selectedCase.client}
              </div>

              {/* Metrics Banner */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#111114] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                {(selectedCase.results || []).map((res, i) => (
                  <div key={i} className="border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 last:border-none">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#B7FF3C]">
                      {res.value}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-medium mt-1">
                      {res.label}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/50 mt-0.5">
                      {res.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategy Breakdown Details */}
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-left">
                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B7FF3C]" />
                    THE CHALLENGE
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-1.5">
                    <Layers className="w-4 h-4 text-[#B7FF3C]" />
                    THE STRATEGY
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.strategy}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-1.5">
                    <TrendingUp className="w-4 h-4 text-[#B7FF3C]" />
                    THE EXECUTION & RESULTS
                  </div>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.execution}
                  </p>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/50 font-mono text-center sm:text-left">
                  Ready to deploy these benchmarks to your brand?
                </div>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenProjectModal();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B7FF3C] text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7FF7A] transition-all"
                >
                  <span>Build Similar System</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
