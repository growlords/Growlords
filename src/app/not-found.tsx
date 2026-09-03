import React from "react";
import Link from "next/link";
import { Home, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#16A34A]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F7F4] border border-[#16A34A]/30 text-xs font-mono text-[#16A34A] mb-6 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404 • Destination Lost</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-mono font-black text-[#111111] tracking-tighter mb-2">
          404
        </h1>

        <h2 className="text-xl font-bold text-[#111111] uppercase tracking-tight mb-4">
          PAGE NOT FOUND
        </h2>

        <p className="text-sm text-[#5F6368] leading-relaxed mb-8">
          The coordinates you followed do not exist on the Growlords network. Let's redirect you back to active ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16A34A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#15803D] transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FAFBF9] border border-black/[0.08] text-[#111111] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all"
          >
            <Compass className="w-4 h-4 text-[#5F6368]" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
