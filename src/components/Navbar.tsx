'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '@/context/ContentContext';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export default function Navbar({ onOpenProjectModal }: NavbarProps) {
  const { content } = useContent();
  const footer = content.footer;
  const hero = content.hero;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = footer.navLinks?.length
    ? footer.navLinks
    : [
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'Why Growlords', href: '#why' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Analytics', href: '#analytics' },
        { name: 'About', href: '#about' },
      ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4 shadow-2xl'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group select-none"
            data-cursor="home"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF3C] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#B7FF3C]" />
            <span className="text-base sm:text-lg font-black tracking-tighter uppercase font-heading text-white group-hover:text-white/90 transition-colors">
              {footer.brandName || 'GROWLORDS'}
            </span>
          </a>

          {/* Center Links (Desktop >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-7 px-6 py-2 rounded-full border border-white/5 bg-[#111114]/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA (Desktop >= 768px) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenProjectModal}
              data-cursor="open"
              className="group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-[#B7FF3C] border border-white/10 hover:border-[#B7FF3C] text-white hover:text-[#050505] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300"
            >
              <span>{hero.primaryCtaText || 'Start a Project'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle (< 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Minimal Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 sm:pt-28 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B7FF3C]">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 + 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white/90 hover:text-[#B7FF3C] font-heading transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4 mt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full py-4 rounded-full bg-[#B7FF3C] text-[#050505] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(183,255,60,0.3)]"
              >
                <span>{hero.primaryCtaText || 'Start a Project'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] sm:text-xs text-white/40 font-mono uppercase tracking-widest">
                {hero.headline || 'MARKETING BUILT FOR GROWTH.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
