'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenProjectModal: () => void;
}

export default function Footer({ onOpenProjectModal }: FooterProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-16 sm:pt-20 md:pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12 sm:pb-16 md:pb-20 border-b border-white/10">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF3C] shadow-[0_0_8px_#B7FF3C]" />
                <span className="text-xl sm:text-2xl font-black uppercase font-heading tracking-tighter text-white">
                  GROWLORDS
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/60 font-light max-w-sm leading-relaxed">
                Marketing built for growth. Engineering unified brand, creative, and performance systems for market leaders.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#B7FF3C] animate-pulse" />
              <span className="text-xs font-mono text-white/60">
                SYSTEM TIME: <span className="text-white font-semibold">{time || '00:00:00 UTC'}</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3 sm:mb-4">
              INDEX
            </div>
            {['Work', 'Services', 'Why Growlords', 'Analytics', 'About'].map((link) => {
              const href = `#${link.toLowerCase().replace(' why growlords', 'why').replace(' ', '-')}`;
              return (
                <div key={link}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Social */}
          <div className="md:col-span-2 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3 sm:mb-4">
              CHANNELS
            </div>
            {[
              { name: 'Instagram', href: 'https://instagram.com' },
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'YouTube', href: 'https://youtube.com' },
              { name: 'X / Twitter', href: 'https://x.com' },
            ].map((social) => (
              <div key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-white/70 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/40" />
                </a>
              </div>
            ))}
          </div>

          {/* Direct Contact */}
          <div className="sm:col-span-2 md:col-span-3 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#B7FF3C] uppercase mb-3 sm:mb-4">
              DIRECT INQUIRIES
            </div>
            <a
              href="mailto:partnerships@growlords.com"
              className="text-xs sm:text-sm font-medium text-white hover:text-[#B7FF3C] transition-colors block"
            >
              partnerships@growlords.com
            </a>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Offices in New York, London, and Singapore. Direct global remote engagements.
            </p>
            <div className="pt-1.5 sm:pt-2">
              <button
                onClick={onOpenProjectModal}
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#B7FF3C] hover:text-[#D7FF7A] inline-flex items-center gap-1.5"
              >
                <span>Initiate Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Massive Marquee / Logotype at Bottom */}
        <div className="py-8 sm:py-12 select-none pointer-events-none text-center overflow-hidden">
          <div className="text-[12vw] sm:text-[14vw] font-black uppercase font-heading tracking-tighter leading-none text-white/[0.04] whitespace-nowrap">
            GROWLORDS
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 text-center sm:text-left">
          <div>© {new Date().getFullYear()} Growlords Agency Group. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Growth</span>
            <span className="hover:text-white cursor-pointer transition-colors">System Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
