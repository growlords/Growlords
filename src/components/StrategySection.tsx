'use client';

import React from 'react';

export default function StrategySection() {
  return (
    <section className="relative w-full pt-20 pb-28 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B7FF3C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-5">
            <span className="w-6 h-[1px] bg-[#B7FF3C]" />
            01 // STRATEGIC FRAMEWORK
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.95] text-white">
            ATTENTION ISN'T THE GOAL. <br />
            <span className="text-[#B7FF3C]">GROWTH IS.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
            Great marketing doesn't simply create noise. It creates a clear, engineered path from initial attention to compounding enterprise action.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { num: '01', title: 'Understand.', desc: 'Deconstruct market economics and buyer psychology.' },
              { num: '02', title: 'Position.', desc: 'Establish an undeniable category-defining narrative.' },
              { num: '03', title: 'Connect.', desc: 'Unify media, creative, and conversion funnels.' },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="flex-1 min-w-[240px] p-6 rounded-2xl border border-white/10 bg-[#0A0A0C] hover:border-[#B7FF3C]/30 transition-all duration-300"
              >
                <div className="text-xs font-mono text-[#B7FF3C] uppercase mb-2">
                  {pillar.num} // CORE PRINCIPLE
                </div>
                <div className="text-xl font-bold uppercase font-heading text-white">
                  {pillar.title}
                </div>
                <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
