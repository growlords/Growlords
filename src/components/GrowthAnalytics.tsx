'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Zap } from 'lucide-react';
import { AnalyticsMetric } from '@/types';

const analyticsMetrics: AnalyticsMetric[] = [
  {
    key: 'revenue',
    name: 'Net Revenue Scaling',
    headlineValue: '$18.4M',
    growth: '+284%',
    benchmark: 'Compounded ARR Growth over 12 Months',
    description:
      'Continuous full-funnel optimization compound revenue velocity while maintaining sustainable EBITDA margins.',
    chartData: [
      { x: 'Q1', y: 20, baseline: 15 },
      { x: 'Q2', y: 38, baseline: 22 },
      { x: 'Q3', y: 64, baseline: 30 },
      { x: 'Q4', y: 92, baseline: 40 },
    ],
    unit: '$',
  },
  {
    key: 'roas',
    name: 'Blended ROAS Scale',
    headlineValue: '4.62x',
    growth: '+140%',
    benchmark: 'Average Across Omnichannel Media Spend',
    description:
      'Predictive algorithmic bidding paired with high-volume creative iteration unlocks aggressive budget scale without return decay.',
    chartData: [
      { x: 'Q1', y: 28, baseline: 22 },
      { x: 'Q2', y: 50, baseline: 26 },
      { x: 'Q3', y: 76, baseline: 31 },
      { x: 'Q4', y: 95, baseline: 38 },
    ],
    unit: 'x',
  },
  {
    key: 'cac',
    name: 'Customer Acquisition Cost',
    headlineValue: '-46.8%',
    growth: 'Optimized',
    benchmark: 'CAC Compression via Frictionless CRO Funnels',
    description:
      'Dynamic landing page personalization and micro-conversion architecture drive radical acquisition cost reductions.',
    chartData: [
      { x: 'Q1', y: 88, baseline: 80 },
      { x: 'Q2', y: 62, baseline: 75 },
      { x: 'Q3', y: 44, baseline: 70 },
      { x: 'Q4', y: 25, baseline: 68 },
    ],
    unit: '%',
  },
  {
    key: 'traffic',
    name: 'High-Intent Traffic',
    headlineValue: '2.85M',
    growth: '+312%',
    benchmark: 'Omnichannel Inbound & Targeted Demand',
    description:
      'Multi-engine organic distribution and paid demand generation funneling high-intent ICP buyers directly into your ecosystem.',
    chartData: [
      { x: 'Q1', y: 25, baseline: 20 },
      { x: 'Q2', y: 45, baseline: 28 },
      { x: 'Q3', y: 72, baseline: 36 },
      { x: 'Q4', y: 96, baseline: 45 },
    ],
    unit: '',
  },
  {
    key: 'leads',
    name: 'Qualified Pipeline',
    headlineValue: '14,200+',
    growth: '+220%',
    benchmark: 'Sales-Ready Enterprise Opportunities',
    description:
      'Automated qualification funnels and ABM intelligence ensure sales teams engage exclusively with high-LTV opportunities.',
    chartData: [
      { x: 'Q1', y: 18, baseline: 16 },
      { x: 'Q2', y: 42, baseline: 24 },
      { x: 'Q3', y: 68, baseline: 32 },
      { x: 'Q4', y: 90, baseline: 40 },
    ],
    unit: '',
  },
  {
    key: 'conversion',
    name: 'Conversion Rate',
    headlineValue: '6.84%',
    growth: '+185%',
    benchmark: 'Global Funnel & Checkout Velocity',
    description:
      'Next.js micro-experiences and frictionless form architecture maximizing the revenue yield of every visitor.',
    chartData: [
      { x: 'Q1', y: 30, baseline: 25 },
      { x: 'Q2', y: 52, baseline: 28 },
      { x: 'Q3', y: 74, baseline: 33 },
      { x: 'Q4', y: 94, baseline: 36 },
    ],
    unit: '%',
  },
];

export default function GrowthAnalytics() {
  const [activeKey, setActiveKey] = useState('revenue');

  const currentMetric = analyticsMetrics.find((m) => m.key === activeKey) || analyticsMetrics[0];

  // Helper to generate SVG Path points
  const points = currentMetric.chartData.map((d, i) => {
    const x = 50 + i * 260;
    const y = 260 - (d.y / 100) * 200;
    return { x, y, label: d.x };
  });

  const pathD = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ');

  const baselinePoints = currentMetric.chartData.map((d, i) => {
    const x = 50 + i * 260;
    const y = 260 - (d.baseline / 100) * 200;
    return { x, y };
  });

  const baselinePathD =
    `M ${baselinePoints[0].x} ${baselinePoints[0].y} ` +
    baselinePoints.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ');

  return (
    <section id="analytics" className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] bg-[#B7FF3C]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
              <Activity className="w-3.5 h-3.5" />
              LIVE TELEMETRY & ATTRIBUTION
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.98]">
              WATCH THE <br />
              <span className="text-[#B7FF3C]">SYSTEM WORK.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed">
            Real-time compounding growth visualizer. Toggle metric lenses to inspect how our connected architecture scales every layer.
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          {analyticsMetrics.map((metric) => {
            const isActive = metric.key === activeKey;
            return (
              <button
                key={metric.key}
                onClick={() => setActiveKey(metric.key)}
                data-cursor="view"
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  isActive
                    ? 'bg-[#B7FF3C] text-[#050505] font-bold shadow-[0_0_20px_rgba(183,255,60,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
                }`}
              >
                <span>{metric.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />}
              </button>
            );
          })}
        </div>

        {/* Analytics Display Canvas & Data Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Large Visual Graph Panel */}
          <div className="lg:col-span-8 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0A0C] relative overflow-hidden flex flex-col justify-between">
            {/* Top Stat Ribbon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-white/50 uppercase tracking-widest block">
                  {currentMetric.name}
                </span>
                <div className="flex items-baseline gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white">
                    {currentMetric.headlineValue}
                  </span>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#B7FF3C]/10 border border-[#B7FF3C]/30 text-[#B7FF3C] text-xs font-bold font-mono">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{currentMetric.growth}</span>
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#B7FF3C] uppercase tracking-widest block">
                  SYSTEM STATUS: OPTIMAL
                </span>
                <span className="text-[11px] sm:text-xs text-white/40 font-mono mt-0.5 sm:mt-1 block">
                  Telemetry updated real-time
                </span>
              </div>
            </div>

            {/* SVG Animated Graph */}
            <div className="relative w-full h-48 sm:h-64 md:h-72 my-2 sm:my-4">
              <svg
                viewBox="0 0 880 300"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                {/* Horizontal Grid lines */}
                {[60, 120, 180, 240].map((yVal, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={yVal}
                    x2="880"
                    y2={yVal}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Legacy / Baseline dashed line */}
                <path
                  d={baselinePathD}
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Growlords Glowing Accent Line */}
                <motion.path
                  key={currentMetric.key}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  d={pathD}
                  fill="none"
                  stroke="#B7FF3C"
                  strokeWidth="3.5"
                  className="drop-shadow-[0_0_12px_#B7FF3C]"
                />

                {/* Points */}
                {points.map((pt, i) => (
                  <g key={i}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="6"
                      fill="#050505"
                      stroke="#B7FF3C"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pt.x}
                      y={290}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.4)"
                      fontSize="12"
                      fontFamily="monospace"
                    >
                      {pt.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-1 bg-[#B7FF3C] rounded-full shadow-[0_0_6px_#B7FF3C]" />
                  <span className="text-white/80">Growlords Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-1 bg-white/30 rounded-full" />
                  <span className="text-white/40">Legacy Average</span>
                </div>
              </div>

              <span className="text-white/40 text-[11px] sm:text-xs">
                {currentMetric.benchmark}
              </span>
            </div>
          </div>

          {/* Right Architecture Breakdown Sidebar */}
          <div className="lg:col-span-4 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0A0C] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3 sm:mb-4">
                <Zap className="w-3.5 h-3.5" />
                SYSTEM MECHANISM
              </div>

              <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                {currentMetric.name}
              </h3>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed">
                {currentMetric.description}
              </p>

              <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-mono">ATTRIBUTION MODEL</span>
                  <span className="text-xs font-bold text-white font-mono">Multi-Touch Dynamic</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-mono">DATA LATENCY</span>
                  <span className="text-xs font-bold text-[#B7FF3C] font-mono">Sub-Second Sync</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-mono">TESTING CADENCE</span>
                  <span className="text-xs font-bold text-white font-mono">Continuous Multi-Arm</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
              <div className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase">
                ENGINEERED FOR SCALE
              </div>
              <div className="mt-1 text-xs text-white/80">
                Connected infrastructure across paid media, creative assets, and conversion flows.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
