'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServicesProps {
  onOpenProjectModal: () => void;
}

const servicesData: ServiceItem[] = [
  {
    id: 'perf',
    number: '01',
    title: 'PERFORMANCE MARKETING',
    description:
      'Paid social, Google Ads, acquisition campaigns, and performance optimization engineered for aggressive customer acquisition and sustainable ROAS.',
    deliverables: [
      'Meta & Google Ads Engine',
      'Full-Funnel Paid Acquisition',
      'Creative Performance Testing',
      'Retargeting & LTV Architecture',
      'Daily ROAS & CAC Optimization',
    ],
    metrics: 'Average 3.8x ROAS across active portfolio accounts',
  },
  {
    id: 'social',
    number: '02',
    title: 'SOCIAL MEDIA',
    description:
      'Strategy, content, creative direction, and social growth designed to command cultural relevance and build compounding organic community equity.',
    deliverables: [
      'Short-Form Video Production',
      'Organic Growth Playbooks',
      'Creator & Influencer Partnerships',
      'Community Management & Engagement',
      'Viral Trend Capitalization',
    ],
    metrics: 'Over 45M+ organic impressions generated in 2025',
  },
  {
    id: 'brand',
    number: '03',
    title: 'BRAND STRATEGY',
    description:
      'Positioning, messaging, narrative frameworks, and visual identity systems that separate market leaders from commoditized competitors.',
    deliverables: [
      'Category Creation & Positioning',
      'Core Brand Narrative & Voice',
      'Visual Identity & Design Systems',
      'Customer Persona Archetypes',
      'Go-To-Market Brand Playbooks',
    ],
    metrics: 'Proprietary positioning frameworks for category leaders',
  },
  {
    id: 'creative',
    number: '04',
    title: 'CREATIVE',
    description:
      'Campaign concepts, high-velocity ad creatives, short-form content, 3D assets, and visual storytelling that stop the scroll and compel action.',
    deliverables: [
      'High-Conversion UGC & Ad Studio',
      'Motion Graphics & 3D Visuals',
      'Editorial Campaign Direction',
      'Dynamic Banner & Display Creative',
      'A/B Creative Asset Batches',
    ],
    metrics: 'Weekly iteration cycles producing 30+ validated ad concepts',
  },
  {
    id: 'web-cro',
    number: '05',
    title: 'WEB & CRO',
    description:
      'Websites, landing pages, friction-free funnels, and continuous conversion optimization designed to turn high-intent traffic into qualified pipeline.',
    deliverables: [
      'Next.js High-Speed Web Experiences',
      'Frictionless Conversion Funnels',
      'Multivariate Landing Page Testing',
      'Heatmapping & Session Diagnostics',
      'Checkout & Onboarding Streamlining',
    ],
    metrics: '+44% average conversion rate uplift post-redesign',
  },
  {
    id: 'growth-strat',
    number: '06',
    title: 'GROWTH STRATEGY',
    description:
      'Analytics, experimentation pipelines, customer journey orchestration, and scalable growth engines that compound enterprise enterprise value.',
    deliverables: [
      'Multi-Touch Attribution Modeling',
      'Cohort Retention & Churn Reduction',
      'Rapid Growth Experimentation Engine',
      'Modern Data Stack Integration',
      'Executive Growth Telemetry',
    ],
    metrics: 'End-to-end telemetry unifying media, CRM, and revenue',
  },
];

export default function Services({ onOpenProjectModal }: ServicesProps) {
  const [activeId, setActiveId] = useState<string | null>('perf');

  const toggleService = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#B7FF3C]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
              <span className="w-5 sm:w-6 h-[1px] bg-[#B7FF3C]" />
              CAPABILITIES & SERVICES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.98]">
              EVERYTHING YOUR <br />
              <span className="text-[#B7FF3C]">GROWTH NEEDS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed">
            We don't operate in departmental silos. Every capability is deeply integrated into an omnichannel engine built to scale.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {servicesData.map((service) => {
            const isOpen = activeId === service.id;

            return (
              <div
                key={service.id}
                className={`group transition-colors duration-300 ${
                  isOpen ? 'bg-[#0A0A0C]' : 'hover:bg-[#0A0A0C]/50'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleService(service.id)}
                  data-cursor="view"
                  className="w-full py-6 sm:py-8 md:py-10 px-3 sm:px-6 md:px-8 flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-8 md:gap-12 flex-1 pr-4">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-white/40 group-hover:text-[#B7FF3C] transition-colors shrink-0">
                      {service.number}
                    </span>

                    <h3
                      className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight font-heading transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2 ${
                        isOpen ? 'text-[#B7FF3C]' : 'text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'border-[#B7FF3C] bg-[#B7FF3C] text-[#050505]'
                          : 'border-white/20 text-white group-hover:border-white/50'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-6 md:px-8 pb-8 sm:pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 border-t border-white/5">
                        {/* Left description */}
                        <div className="lg:col-span-6 flex flex-col justify-between">
                          <p className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
                            {service.description}
                          </p>

                          <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-xl border border-white/10 bg-[#111114] inline-flex items-center gap-2.5 sm:gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#B7FF3C] animate-ping shrink-0" />
                            <span className="text-xs font-mono text-white/90">
                              {service.metrics}
                            </span>
                          </div>
                        </div>

                        {/* Right deliverables list & action */}
                        <div className="lg:col-span-6 flex flex-col justify-between mt-2 lg:mt-0">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B7FF3C] uppercase mb-2.5 sm:mb-3 block">
                              KEY DELIVERABLES
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                              {service.deliverables.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-xs sm:text-sm text-white/70 bg-white/5 px-3 py-2 rounded-lg border border-white/5"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                            <span className="text-[11px] sm:text-xs text-white/40 font-mono">
                              SYSTEM COMPONENT {service.number} / 06
                            </span>
                            <button
                              onClick={onOpenProjectModal}
                              data-cursor="open"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B7FF3C] hover:text-[#D7FF7A] transition-colors"
                            >
                              <span>Deploy {service.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
