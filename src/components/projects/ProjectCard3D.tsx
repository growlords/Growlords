"use client";

import React, { useRef, useState } from "react";
import { ExternalLink, Globe, ArrowUpRight, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCard3DProps {
  project: Project;
  priority?: boolean;
  wide?: boolean;
}

export default function ProjectCard3D({ project, priority = false, wide = false }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group perspective-1000 w-full h-full flex flex-col ${
        wide ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <div
        className={`relative flex flex-col justify-between h-full rounded-3xl bg-white border border-black/[0.08] p-5 sm:p-7 transition-all duration-300 ease-out overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] group-hover:border-[#16A34A]/40 group-hover:shadow-[0_20px_45px_-8px_rgba(22,163,74,0.12)] ${
          wide ? "lg:p-8" : ""
        }`}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px)",
        }}
      >
        <div className="flex flex-col gap-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F7F4] border border-black/[0.05] text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              {project.category}
            </span>

            <span className="text-[11px] font-mono font-bold text-[#16A34A] tracking-wider uppercase bg-[#16A34A]/10 px-2.5 py-0.5 rounded-full">
              {project.badge}
            </span>
          </div>

          {/* Browser Window Mockup Screen */}
          <div className="relative w-full rounded-2xl bg-white border border-black/[0.08] shadow-xs overflow-hidden group-hover:border-black/20 transition-all">
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-50 border-b border-black/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#5F6368] bg-white px-3 py-0.5 rounded-md border border-black/[0.06] max-w-[200px] truncate shadow-2xs">
                <Lock className="w-2.5 h-2.5 text-[#16A34A] shrink-0" />
                <span className="truncate">{project.domain}</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Graphic Preview Canvas */}
            <div
              className={`relative w-full p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F8FAF8] via-[#FFFFFF] to-[#EEF5EF] ${
                wide ? "h-64 sm:h-72" : "h-48 sm:h-52"
              }`}
            >
              {/* Subtle ambient glow */}
              <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#16A34A] transition-transform duration-500 group-hover:scale-125" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368] font-semibold">
                  Verified Client Deployment
                </span>
                <span className="text-[10px] font-mono text-[#16A34A] font-bold">
                  100% Live
                </span>
              </div>

              {/* Graphic UI Presentation */}
              <div className="relative z-10 w-full rounded-xl bg-white/95 border border-black/[0.08] p-4 flex flex-col gap-2.5 shadow-sm backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#16A34A] text-white flex items-center justify-center text-[10px] font-black">
                      GL
                    </div>
                    <span className="text-xs font-bold text-[#111111] line-clamp-1">
                      {project.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#16A34A] font-bold">
                    Edge Fast
                  </span>
                </div>
                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-[#16A34A] to-[#22C55E]" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-1.5 mt-1">
            <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed line-clamp-2">
              {project.overview}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[#5F6368] bg-[#F4F7F4] border border-black/[0.04] px-2.5 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 mt-5 border-t border-black/[0.06] flex items-center justify-between">
          <span className="text-xs font-mono text-[#5F6368]">
            {project.domain}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#F4F7F4] border border-black/[0.08] text-[#111111] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all duration-200 shadow-2xs"
            aria-label={`Visit ${project.title} (${project.domain})`}
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
