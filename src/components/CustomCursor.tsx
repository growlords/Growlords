'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'hidden'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor trailing
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop mouse, width >= 1024px)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element the cursor is hovering
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');

      if (interactiveEl) {
        const customCursorAttr = interactiveEl.getAttribute('data-cursor');
        if (customCursorAttr) {
          setCursorText(customCursorAttr);
          setCursorVariant('text');
        } else {
          setCursorText('');
          setCursorVariant('hover');
        }
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block">
      {/* Outer Follower Ring / Interactive Pill */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: cursorVariant === 'text' ? 1 : cursorVariant === 'hover' ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {cursorVariant === 'text' ? (
          <div className="bg-[#B7FF3C] text-[#050505] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-lg shadow-[#B7FF3C]/20 whitespace-nowrap">
            {cursorText}
          </div>
        ) : (
          <div
            className={`rounded-full transition-all duration-200 ${
              cursorVariant === 'hover'
                ? 'w-10 h-10 border border-[#B7FF3C] bg-[#B7FF3C]/10 backdrop-blur-[2px]'
                : 'w-8 h-8 border border-white/20'
            }`}
          />
        )}
      </motion.div>

      {/* Center Precise Dot */}
      {cursorVariant !== 'text' && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 bg-[#B7FF3C] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#B7FF3C]"
          style={{
            x: mouseX,
            y: mouseY,
          }}
        />
      )}
    </div>
  );
}
