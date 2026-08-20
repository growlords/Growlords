'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PillarItem } from '@/types';

const pillars: PillarItem[] = [
  {
    number: '01',
    title: 'STRATEGY FIRST',
    tagline: 'No random campaigns. Every action has a reason.',
    description:
      'Before running a single ad or writing a line of copy, we deconstruct your market economics, competitive white space, and customer psychology to establish an unfair positioning moat.',
  },
  {
    number: '02',
    title: 'CREATIVE THAT MOVES',
    tagline: 'Ideas designed to stop the scroll and move people to act.',
    description:
      'Aesthetics without conversion is vanity. Performance without craft is commoditized noise. We engineer high-velocity creative assets that command attention and convert intent into enterprise revenue.',
  },
  {
    number: '03',
    title: 'DATA WITHOUT THE BORING',
    tagline: 'We use numbers to make smarter marketing decisions.',
    description:
      'We replace vanity dashboard fluff with clear, actionable growth telemetry. Real-time attribution, cohort LTV analysis, and contribution margin tracking guide every allocation of capital.',
  },
  {
    number: '04',
    title: 'OBSESSED WITH GROWTH',
    tagline: 'We care about business outcomes, not vanity metrics.',
    description:
      'We align directly with your North Star: qualified pipeline, net new ARR, blended contribution margin, and enterprise enterprise value. If it does not move the P&L, we do not do it.',
  },
];

export default function WhyGrowlords() {
  return (
    <section id="why" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Editorial background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B7FF3C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
            <span className="w-5 sm:w-6 h-[1px] bg-[#B7FF3C]" />
            CORE OPERATING PILLARS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.98]">
            WHY <br />
            <span className="text-[#B7FF3C]">GROWLORDS?</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed">
            Most agencies operate on vanity activity. We operate on mathematical compounding. Here is the operational philosophy behind our work.
          </p>
        </div>

        {/* 4 Pillars Large Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-[#B7FF3C]/40 hover:bg-[#111114] transition-all duration-500"
            >
              {/* Corner Pillar Number */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white/20 group-hover:text-[#B7FF3C] transition-colors">
                  {pillar.number}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white/40 group-hover:text-white/80 transition-colors">
                  PRINCIPLE // {pillar.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight font-heading text-white group-hover:text-[#B7FF3C] transition-colors">
                {pillar.title}
              </h3>

              {/* Tagline */}
              <div className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold text-white/90">
                {pillar.tagline}
              </div>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/65 font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
