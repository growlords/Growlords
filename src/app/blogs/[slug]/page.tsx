import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { BLOGS, BlogPost } from "@/data/blogs";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import FinalCTA from "@/components/home/FinalCTA";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: post.canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: post.canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
    },
  };
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) =>
    post.relatedServiceIds.includes(s.id)
  );
  const relatedProjects = PROJECTS.filter((p) =>
    post.relatedProjectIds.includes(p.id)
  );

  const otherBlogs = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url: post.canonicalUrl,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Growlords",
      url: "https://growlords.com",
    },
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(", "),
  };

  return (
    <div className="relative w-full overflow-hidden pt-28 bg-[#FAFBF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-[#16A34A]/5 blur-[140px] pointer-events-none" />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#5F6368] hover:text-[#16A34A] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Main Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#5F6368]">
            <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>{post.readingTime}</span>
          </div>
          <span className="text-zinc-300">•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#5F6368]">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.publishedAt}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#111111] uppercase tracking-tight leading-[1.1] mb-6">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#5F6368] leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Author Badge */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center justify-center font-bold text-sm text-[#16A34A]">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#111111]">
                {post.author.name}
              </span>
              <span className="text-xs text-[#5F6368] font-mono">
                {post.author.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#5F6368] hidden sm:inline">
              Growlords Editorial
            </span>
          </div>
        </div>
      </header>

      {/* Article Body Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-6 text-[#333333] leading-relaxed text-base sm:text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gim, '<h2 class="text-2xl sm:text-3xl font-black text-[#111111] mt-10 mb-4 pt-6 border-t border-black/[0.06] uppercase tracking-tight">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-[#16A34A] mt-6 mb-3">$1</h3>')
                .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-[#5F6368] mb-1">$1</li>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#111111] font-bold">$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#16A34A] font-medium underline hover:text-[#111111] transition-colors">$1</a>'),
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#5F6368] uppercase tracking-wider mr-2">
            Related Keywords:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-[#111111] bg-white border border-black/[0.06] px-3 py-1 rounded-full shadow-2xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Relevant Services & Live Project Cross-Links */}
      {(relatedServices.length > 0 || relatedProjects.length > 0) && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-8 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16A34A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Solutions For This Strategy</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="p-4 rounded-xl bg-[#FAFBF9] border border-black/[0.06] hover:border-[#16A34A]/40 transition-all flex flex-col justify-between group"
                >
                  <span className="text-xs font-mono text-[#5F6368]">Service</span>
                  <span className="text-base font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors mt-1 mb-1.5">
                    {service.title}
                  </span>
                  <span className="text-xs text-[#5F6368] line-clamp-2">
                    {service.shortDescription}
                  </span>
                </Link>
              ))}

              {relatedProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#FAFBF9] border border-black/[0.06] hover:border-[#16A34A]/40 transition-all flex flex-col justify-between group"
                >
                  <span className="text-xs font-mono text-[#5F6368]">Live Client Case Study</span>
                  <div className="flex items-center justify-between mt-1 mb-1.5">
                    <span className="text-base font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors">
                      {project.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#16A34A]" />
                  </div>
                  <span className="text-xs text-[#5F6368] font-mono">
                    {project.domain}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommended Reading */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="text-xl font-bold text-[#111111] uppercase tracking-tight mb-6">
          More From The Editorial Desk
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherBlogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="p-6 rounded-2xl bg-white border border-black/[0.08] hover:border-[#16A34A]/40 shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-[#16A34A] mb-2 block font-semibold">
                  {b.category} • {b.readingTime}
                </span>
                <h4 className="text-lg font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors line-clamp-2 mb-2">
                  {b.title}
                </h4>
                <p className="text-xs text-[#5F6368] line-clamp-2">
                  {b.excerpt}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#16A34A]">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
