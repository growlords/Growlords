"use client";

import React, { useRef, useState } from "react";
import { ExternalLink, Globe, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCard3DProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard3D({ project, priority = false }: ProjectCard3DProps) {
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

    const rX = ((y - centerY) / centerY) * -6; // Subtle 6 deg tilt
    const rY = ((x - centerX) / centerX) * 6;

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
      className="relative group perspective-1000 w-full h-full flex flex-col"
    >
      <div
        className="relative flex flex-col justify-between h-full rounded-2xl bg-white border border-black/[0.06] p-5 sm:p-6 transition-all duration-300 ease-out overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] group-hover:border-[#16A34A]/40 group-hover:shadow-[0_16px_40px_-8px_rgba(22,163,74,0.12)]"
        style={{
          transform: isHovered
            ? `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px)",
        }}
      >
        {/* Top: Browser Mockup Frame & Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            {/* Category Pill */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F7F4] border border-black/[0.05] text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              {project.category}
            </span>

            {/* Badge */}
            <span className="text-[11px] font-mono font-medium text-[#16A34A] tracking-wide">
              {project.badge}
            </span>
          </div>

          {/* Browser Window Mockup Screen (Light Frame) */}
          <div className="relative w-full rounded-xl bg-white border border-black/[0.08] shadow-xs overflow-hidden group-hover:border-black/20 transition-colors">
            {/* Browser chrome bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 border-b border-black/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#5F6368] bg-white px-2.5 py-0.5 rounded-md border border-black/[0.06] max-w-[180px] truncate shadow-2xs">
                <Globe className="w-3 h-3 text-zinc-400 shrink-0" />
                <span className="truncate">{project.domain}</span>
              </div>
              <div className="w-6" />
            </div>

            {/* Preview Graphic Area */}
            <div className="relative h-44 sm:h-48 w-full p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F8FAF8] via-[#FFFFFF] to-[#EEF5EF]">
              {/* Subtle ambient light gradient */}
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#16A34A] transition-transform duration-500 group-hover:scale-125" />

              <div className="flex flex-col gap-1 relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368]">
                  Client Deployment
                </span>
                <h4 className="text-lg font-bold text-[#111111] tracking-tight line-clamp-1 group-hover:text-[#16A34A] transition-colors">
                  {project.title}
                </h4>
              </div>

              {/* Graphical UI Preview Representation */}
              <div className="relative z-10 w-full rounded-lg bg-white/90 border border-black/[0.08] p-3 flex flex-col gap-2 shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center justify-center text-[10px] font-bold text-[#16A34A]">
                    GL
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="h-2 w-20 bg-zinc-200 rounded-full" />
                    <div className="h-1.5 w-12 bg-zinc-100 rounded-full" />
                  </div>
                </div>
                <div className="h-7 w-full rounded bg-zinc-50 border border-black/[0.04] flex items-center px-2">
                  <span className="text-[10px] text-[#5F6368] font-mono">
                    https://{project.domain}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-1.5 mt-1">
            <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#5F6368] leading-relaxed line-clamp-2">
              {project.overview}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-[#5F6368] bg-[#F4F7F4] border border-black/[0.04] px-2.5 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action CTA */}
        <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between">
          <span className="text-xs font-mono text-[#5F6368]">
            {project.domain}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#F4F7F4] border border-black/[0.08] text-[#111111] hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all duration-200"
            aria-label={`Visit ${project.title} (${project.domain})`}
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
