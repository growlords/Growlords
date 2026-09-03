"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  User,
  ArrowRight,
  Search as SearchIcon,
  Calendar,
} from "lucide-react";
import { BLOGS, BlogPost } from "@/data/blogs";
import FinalCTA from "@/components/home/FinalCTA";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Web Design",
    "SEO",
    "Performance Ads",
    "AI & Automation",
    "Growth",
  ];

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Insights &amp; Strategy</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-[1.08] mb-6 max-w-4xl mx-auto">
          GROWLORDS <span className="text-[#16A34A]">INSIGHTS.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          Actionable blueprints, SEO playbooks, 3D web design principles, and media buying frameworks
          written by Raman Kamboj and Jatin Kamboj to accelerate your commercial growth.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
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

          <div className="relative w-full md:w-72">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles & strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAFBF9] border border-black/[0.08] text-xs sm:text-sm text-[#111111] placeholder-[#5F6368] focus:outline-none focus:border-[#16A34A] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-black/[0.07] overflow-hidden hover:border-[#16A34A]/40 transition-all duration-300 shadow-[0_4px_25px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-8px_rgba(22,163,74,0.1)] hover:-translate-y-1"
            >
              <div>
                {/* Decorative header banner */}
                <div className="h-36 w-full bg-gradient-to-br from-[#F4F7F4] via-[#FAFBF9] to-[#EBF3ED] p-6 flex flex-col justify-between border-b border-black/[0.05] relative overflow-hidden">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white text-[#16A34A] border border-black/[0.06] shadow-2xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#5F6368] bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                      <Clock className="w-3 h-3 text-[#16A34A]" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#5F6368] uppercase tracking-widest relative z-10 font-semibold">
                    #{post.primaryKeyword}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#5F6368] font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author.name}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[#5F6368] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#5F6368] bg-[#F4F7F4] border border-black/[0.04] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="w-full py-3 rounded-xl bg-[#F4F7F4] hover:bg-[#16A34A] hover:text-white text-[#111111] text-xs font-bold border border-black/[0.06] hover:border-[#16A34A] transition-all flex items-center justify-center gap-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
