'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, TrendingUp, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { CaseStudyItem } from '@/types';

interface CaseStudiesProps {
  onOpenProjectModal: () => void;
}

const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-01',
    number: '01',
    title: 'Omnichannel Growth Engine for Next-Gen Fintech',
    client: 'Fintech Scaleup (Series B)',
    industry: 'Financial Technology / Wealth Infrastructure',
    challenge:
      'High Customer Acquisition Cost (CAC) and steep funnel drop-off on mobile onboarding, resulting in stagnant monthly active account growth despite increased ad spend.',
    strategy:
      'Re-architected the entire positioning framework around financial sovereignty, deployed high-velocity video UGC campaigns, and rebuilt the onboarding flow using Next.js micro-funnels.',
    execution:
      'Combined paid Meta/Google intent campaigns with bespoke interactive conversion calculators and automated lifecycle email sequences.',
    results: [
      { label: 'CAC Reduction', value: '-42%', sublabel: 'Across all acquisition channels' },
      { label: 'Conversion Uplift', value: '+188%', sublabel: 'Onboarding completion rate' },
      { label: 'Net ARR Growth', value: '$12.4M', sublabel: 'Added within 8 months' },
    ],
    services: ['Performance Marketing', 'Web & CRO', 'Brand Strategy', 'Growth Strategy'],
    accentColor: '#B7FF3C',
  },
  {
    id: 'case-02',
    number: '02',
    title: 'Category Creation & Global Direct-to-Consumer Scale',
    client: 'Luxury Wellness & Longevity DTC',
    industry: 'Premium Consumer Goods',
    challenge:
      'Stuck in a low-margin commodity supplement perception with blended ROAS dropping below 1.6x on legacy ad accounts.',
    strategy:
      'Elevated brand narrative into clinical bio-optimization luxury. Created cinematic 3D visual assets and implemented high-AOV bundle merchandising models.',
    execution:
      'Deployed top-of-funnel cinematic video ads paired with editorial landing pages, influencer seeding, and retention-focused subscription incentives.',
    results: [
      { label: 'Blended ROAS', value: '4.4x', sublabel: 'Scalable spend above $250k/mo' },
      { label: 'Average Order Value', value: '+$68', sublabel: 'Driven by multi-tier bundles' },
      { label: 'Subscription Rate', value: '64%', sublabel: 'Recurring revenue adoption' },
    ],
    services: ['Creative', 'Performance Marketing', 'Social Media', 'Web & CRO'],
    accentColor: '#D7FF7A',
  },
  {
    id: 'case-03',
    number: '03',
    title: 'Enterprise Pipeline Velocity for AI Infrastructure SaaS',
    client: 'AI Developer Platform (Series A)',
    industry: 'B2B Enterprise Software / Developer Tools',
    challenge:
      'Highly technical product failing to communicate ROI to C-suite economic buyers while developer signups were not converting to enterprise contracts.',
    strategy:
      'Created a dual-track messaging engine: frictionless self-serve developer sandboxes + executive ROI whitepaper funnels and ABM LinkedIn targeting.',
    execution:
      'Engineered interactive product tour experiences, hyper-targeted account-based advertising, and behavioral retargeting based on API usage metrics.',
    results: [
      { label: 'Enterprise SQLs', value: '+310%', sublabel: 'Qualified pipeline volume' },
      { label: 'Sales Cycle Velocity', value: '-35 Days', sublabel: 'From lead to contract signed' },
      { label: 'Pipeline Value', value: '$8.2M', sublabel: 'Generated in 2 quarters' },
    ],
    services: ['Brand Strategy', 'Performance Marketing', 'Growth Strategy', 'Creative'],
    accentColor: '#B7FF3C',
  },
  {
    id: 'case-04',
    number: '04',
    title: 'Viral Social Distribution & Brand Equity Expansion',
    client: 'Modern Lifestyle & Media Brand',
    industry: 'Digital Media & Apparel',
    challenge:
      'Over-reliance on discounting with zero organic brand pull and declining organic engagement across social channels.',
    strategy:
      'Built a dedicated short-form creator studio producing 40+ culture-first video concepts weekly, paired with limited-edition drop mechanics.',
    execution:
      'Orchestrated synchronized multi-channel drops across TikTok, Instagram Reels, and VIP SMS subscriber list with live countdowns.',
    results: [
      { label: 'Organic Impressions', value: '62M+', sublabel: '100% organic reach' },
      { label: 'Sold Out Launches', value: '< 14 Min', sublabel: 'Average sellout time' },
      { label: 'Customer Retention', value: '72%', sublabel: '90-day repeat purchase rate' },
    ],
    services: ['Social Media', 'Creative', 'Growth Strategy', 'Web & CRO'],
    accentColor: '#D7FF7A',
  },
];

export default function CaseStudies({ onOpenProjectModal }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  return (
    <section id="work" className="relative w-full py-32 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
              <span className="w-6 h-[1px] bg-[#B7FF3C]" />
              CASE STUDIES & IMPACT
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.95]">
              WE DON'T SELL MARKETING. <br />
              <span className="text-[#B7FF3C]">WE SHOW RESULTS.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-md font-light leading-relaxed">
            Real systems. Engineered architectures. Measurable enterprise value created across categories.
          </p>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              data-cursor="view case"
              className="group relative rounded-3xl border border-white/10 bg-[#0A0A0C] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#B7FF3C]/40 hover:bg-[#111114] cursor-pointer"
            >
              {/* Subtle Glowing Corner Indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7FF3C]/5 rounded-full blur-2xl group-hover:bg-[#B7FF3C]/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-[#B7FF3C] font-bold">
                      CASE {item.number}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider font-mono">
                      {item.industry}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#B7FF3C] group-hover:bg-[#B7FF3C] group-hover:text-[#050505] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight font-heading leading-tight group-hover:text-[#B7FF3C] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-white/70 font-light line-clamp-2 leading-relaxed">
                  {item.challenge}
                </p>

                {/* Services Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.services.map((svc, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/5"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Results Showcase */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                {item.results.map((res, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-black font-heading text-white group-hover:text-[#B7FF3C] transition-colors">
                      {res.value}
                    </div>
                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mt-0.5">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-[#050505]/85 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-[#0A0A0C] border border-white/15 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                CASE STUDY {selectedCase.number} // {selectedCase.industry}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading tracking-tight text-white pr-8">
                {selectedCase.title}
              </h3>

              <div className="mt-2 text-sm text-white/50 font-mono">
                Client Profile: {selectedCase.client}
              </div>

              {/* Metrics Banner */}
              <div className="mt-8 p-6 rounded-2xl bg-[#111114] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                {selectedCase.results.map((res, i) => (
                  <div key={i} className="border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 last:border-none">
                    <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#B7FF3C]">
                      {res.value}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-medium mt-1">
                      {res.label}
                    </div>
                    <div className="text-[11px] text-white/50 mt-0.5">
                      {res.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategy Breakdown Details */}
              <div className="mt-8 space-y-6 text-left">
                <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#B7FF3C]" />
                    THE CHALLENGE
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-2">
                    <Layers className="w-4 h-4 text-[#B7FF3C]" />
                    THE STRATEGY
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.strategy}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/90 font-bold mb-2">
                    <TrendingUp className="w-4 h-4 text-[#B7FF3C]" />
                    THE EXECUTION & RESULTS
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed font-light">
                    {selectedCase.execution}
                  </p>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/50 font-mono">
                  Ready to deploy these benchmarks to your brand?
                </div>
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenProjectModal();
                  }}
                  className="px-6 py-3 rounded-full bg-[#B7FF3C] text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#D7FF7A] transition-all"
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
