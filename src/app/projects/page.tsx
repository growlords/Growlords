"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ExternalLink,
  Search as SearchIcon,
  Globe,
  ArrowRight,
} from "lucide-react";
import { PROJECTS, CATEGORIES, ProjectCategory } from "@/data/projects";
import ProjectCard3D from "@/components/projects/ProjectCard3D";
import FinalCTA from "@/components/home/FinalCTA";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const flagshipProject = PROJECTS.find((p) => p.id === "growlordsanimated") || PROJECTS[0];

  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>13 Verified Client Deployments</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6 max-w-4xl mx-auto">
          WORK WE&apos;VE <span className="text-[#16A34A]">BUILT.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          Real digital experiences built for businesses, brands and creators.
          Each project is engineered with high conversion psychology, fluid responsiveness, and modern web architecture.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-xs backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-[#16A34A] text-white shadow-xs"
                      : "text-[#5F6368] hover:text-[#111111] hover:bg-black/[0.03]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search projects or domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAFBF9] border border-black/[0.08] text-xs sm:text-sm text-[#111111] placeholder-[#5F6368] focus:outline-none focus:border-[#16A34A] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Full-Width Flagship Showcase Card (Visible when Viewing All and No Search) */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-14 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#16A34A] font-bold">
              ★ Flagship 3D Showcase
            </span>
            <span className="h-[1px] flex-1 bg-black/[0.06]" />
          </div>

          <ProjectCard3D project={flagshipProject} wide priority />
        </section>
      )}

      {/* Complete Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5F6368]">
            {selectedCategory === "All" && !searchQuery
              ? "All Client Deployments"
              : `Showing Results (${filteredProjects.length})`}
          </span>
          <span className="text-xs font-mono text-[#5F6368]">
            {filteredProjects.length} of {PROJECTS.length} Projects
          </span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white border border-black/[0.06] p-8 shadow-xs">
            <p className="text-[#5F6368] text-sm mb-4">
              No projects found matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-xl bg-zinc-100 text-[#111111] text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects
              .filter((p) => selectedCategory !== "All" || searchQuery || p.id !== flagshipProject.id)
              .map((project) => (
                <ProjectCard3D key={project.id} project={project} />
              ))}
          </div>
        )}
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
