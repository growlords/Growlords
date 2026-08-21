'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

export default function Testimonials() {
  const { content } = useContent();
  const testimonials = content.testimonials;
  const items = testimonials.items || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#B7FF3C]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-4">
              <span className="w-5 sm:w-6 h-[1px] bg-[#B7FF3C]" />
              {testimonials.tag || 'CLIENT ENDORSEMENTS & TRUST'}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-heading leading-[0.98]">
              {testimonials.heading}{' '}
              <span className="text-[#B7FF3C]">{testimonials.headingAccent}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed">
            {testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid / Featured Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-[#B7FF3C]/30 hover:bg-[#111114] transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#B7FF3C]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B7FF3C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/15 group-hover:text-[#B7FF3C]/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Metric Badge if available */}
                {item.metric && (
                  <div className="mb-6 p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-[#B7FF3C]" />
                      <span className="text-xs font-mono text-white/60">
                        {item.metricLabel || 'Impact Metric'}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base font-bold font-heading text-[#B7FF3C]">
                      {item.metric}
                    </span>
                  </div>
                )}

                {/* Author Info */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#16161a] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-[#B7FF3C]">
                    {item.avatarText || item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase font-heading text-white">
                      {item.author}
                    </div>
                    <div className="text-xs text-white/50 font-light">
                      {item.role} <span className="text-[#B7FF3C]">@ {item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
