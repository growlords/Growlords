"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "grow" | "lords" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const seen = sessionStorage.getItem("gl_preloader_seen");
    if (seen) {
      setPhase("done");
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 55);

    const t1 = setTimeout(() => setPhase("grow"), 80);
    const t2 = setTimeout(() => setPhase("lords"), 450);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("gl_preloader_seen", "true");
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FAFBF9] transition-opacity duration-500 ease-out"
      style={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? "none" : "auto",
      }}
    >
      {/* Background ambient radial aura */}
      <div className="absolute w-96 h-96 rounded-full bg-[#16A34A]/5 blur-[90px] pointer-events-none" />

      {/* Kinetic Wordmark */}
      <div className="relative z-10 flex items-center gap-3 text-3xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase">
        <span
          className={`transition-all duration-500 transform ${
            phase === "grow" || phase === "lords"
              ? "opacity-100 translate-y-0 text-[#111111]"
              : "opacity-0 translate-y-4"
          }`}
        >
          GROW
        </span>
        <span className="text-[#16A34A] transition-transform duration-300 transform scale-110">
          /
        </span>
        <span
          className={`transition-all duration-500 transform ${
            phase === "lords"
              ? "opacity-100 translate-y-0 text-[#16A34A]"
              : "opacity-20 translate-y-4 text-zinc-300"
          }`}
        >
          LORDS
        </span>
      </div>

      {/* Tagline */}
      <p className="relative z-10 mt-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-zinc-500">
        Build <span className="text-[#16A34A]">•</span> Grow <span className="text-[#16A34A]">•</span> Dominate
      </p>

      {/* Progress Line */}
      <div className="relative z-10 mt-8 w-44 h-[2px] bg-zinc-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter */}
      <span className="relative z-10 mt-2 text-[11px] font-mono text-zinc-400 tracking-wider">
        {progress}%
      </span>
    </div>
  );
}
