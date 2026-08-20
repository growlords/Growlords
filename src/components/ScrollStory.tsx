'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ImageSequenceCanvas from './ImageSequenceCanvas';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface ScrollStoryProps {
  onOpenProjectModal: () => void;
}

export default function ScrollStory({ onOpenProjectModal }: ScrollStoryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring progress for fluid canvas scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 38,
    restDelta: 0.0001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      setScrollProgress(Math.max(0, Math.min(1, v)));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Subtle Hero intro text overlay that lives ONLY in negative space (perimeter)
  // and smoothly fades out as soon as the sequence starts playing (0% -> 12% scroll)
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.06, 0.12], [1, 0.8, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], [0, -20]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[350vh] md:h-[380vh] bg-[#050505]"
    >
      {/* Sticky Viewport (Pinned at top: 0 for 100vh until animation section ends) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#050505] z-10">
        {/* Fullscreen 240-Frame Canvas */}
        <ImageSequenceCanvas scrollProgress={scrollProgress} totalFrames={240} />

        {/* Responsive Hero Perimeter Content (Negative Space Only - Center Remains Clean) */}
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="absolute inset-0 z-10 pointer-events-none p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between"
        >
          {/* Top Row: Negative space header tags (below navbar) */}
          <div className="pt-16 sm:pt-20 md:pt-24 flex items-center justify-between pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 bg-[#111114]/75 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/80">
                GROWTH SYSTEM ARCHITECTURE
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/40 uppercase">
              240-FRAME CINEMATIC CORE
            </div>
          </div>

          {/* Bottom Row: Responsive Left description & Right CTAs */}
          <div className="pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pointer-events-auto">
            {/* Bottom-Left: Subdued Manifesto Tag */}
            <div className="max-w-xs sm:max-w-sm text-left">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#B7FF3C] mb-1">
                MARKETING BUILT FOR GROWTH.
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Strategy, creative, and performance engineered to move ambitious brands forward.
              </p>
            </div>

            {/* Bottom-Center: Scroll prompt (visible on desktop) */}
            <div className="hidden lg:flex flex-col items-center gap-1 text-white/40 pb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase">
                SCROLL TO EXPLORE
              </span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#B7FF3C]" />
            </div>

            {/* Bottom-Right: Quick Action CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenProjectModal}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#B7FF3C] text-[#050505] font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 hover:bg-[#D7FF7A] hover:scale-105 shadow-[0_0_20px_rgba(183,255,60,0.3)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={scrollToWork}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/80 hover:text-white font-medium text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                Explore Work
              </button>
            </div>
          </div>
        </motion.div>

        {/* Minimal Scroll Progress Track at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20 pointer-events-none">
          <div
            className="h-full bg-[#B7FF3C] transition-all duration-75 origin-left"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </div>
    </section>
  );
}
