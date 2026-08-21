'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Settings2, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

export default function CMSBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasUnsavedChanges } = useContent();

  return (
    <div className="fixed bottom-5 left-5 z-40 select-none">
      {isOpen ? (
        <div className="p-3.5 rounded-2xl border border-white/20 bg-[#0A0A0C]/90 backdrop-blur-xl shadow-2xl flex flex-col gap-3 min-w-[220px] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#B7FF3C] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CMS STUDIO</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[11px] text-white/70 leading-relaxed">
            Content is live editable. Access full dashboard to manage copy, services, case studies & SEO.
          </div>

          {hasUnsavedChanges && (
            <div className="px-2 py-1 rounded bg-[#B7FF3C]/10 border border-[#B7FF3C]/30 text-[10px] font-mono text-[#B7FF3C] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C] animate-pulse" />
              <span>Unpublished Live Edits</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-1">
            <Link
              href="/admin"
              className="flex-1 py-2 px-3 rounded-xl bg-[#B7FF3C] text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(183,255,60,0.3)] hover:bg-[#D7FF7A] transition-colors"
            >
              <span>Open Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group px-3.5 py-2 rounded-full border border-white/15 bg-[#0A0A0C]/85 backdrop-blur-lg hover:border-[#B7FF3C]/60 text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(183,255,60,0.2)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#B7FF3C] group-hover:scale-125 transition-transform" />
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white/90">
            CMS Studio
          </span>
          <Settings2 className="w-3.5 h-3.5 text-white/50 group-hover:text-[#B7FF3C] transition-colors" />
        </button>
      )}
    </div>
  );
}
