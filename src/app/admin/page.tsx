'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Save,
  RotateCcw,
  ArrowUpRight,
  Plus,
  Trash2,
  Globe,
  Sliders,
  Layers,
  Briefcase,
  Trophy,
  MessageSquare,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  FileText,
  Star,
  ExternalLink,
  LogOut,
} from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import {
  SiteContent,
  ServiceItem,
  CaseStudyItem,
  TestimonialItem,
  PillarItem,
  AnalyticsMetric,
} from '@/types/content';

type TabKey =
  | 'seo'
  | 'hero'
  | 'strategy'
  | 'services'
  | 'caseStudies'
  | 'testimonials'
  | 'analytics'
  | 'whyGrowlords'
  | 'about'
  | 'finalCta'
  | 'footer';

export default function AdminPage() {
  const router = useRouter();
  const {
    content,
    updateContent,
    saveToServer,
    resetToDefaults,
    hasUnsavedChanges,
    isSaving,
  } = useContent();

  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const showToast = (type: 'success' | 'error', text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      router.push('/admin/login');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleSave = async () => {
    const res = await saveToServer();
    if (res.success) {
      showToast('success', 'Changes published live to site successfully!');
    } else {
      if (res.message?.toLowerCase().includes('unauthorized') || res.message?.includes('401')) {
        showToast('error', 'Session expired. Redirecting to login...');
        setTimeout(() => router.push('/admin/login'), 1500);
      } else {
        showToast('error', res.message || 'Failed to publish changes.');
      }
    }
  };

  const handleResetConfirm = async () => {
    setResetModalOpen(false);
    const res = await resetToDefaults();
    if (res.success) {
      showToast('success', 'All site content reset to default state.');
    } else {
      showToast('error', 'Failed to reset content.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `growlords-content-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('success', 'Content JSON backup downloaded.');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.hero && parsed.services) {
          updateContent(parsed);
          showToast('success', 'Imported JSON content applied! Remember to click "Publish Changes".');
        } else {
          showToast('error', 'Invalid Growlords content JSON format.');
        }
      } catch (err) {
        showToast('error', 'Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const tabs: { id: TabKey; label: string; icon: any; count?: number }[] = [
    { id: 'hero', label: 'Hero & Above The Fold', icon: Sliders },
    { id: 'strategy', label: 'Strategic Framework', icon: Target },
    { id: 'services', label: 'Capabilities & Services', icon: Layers, count: content.services?.items?.length },
    { id: 'caseStudies', label: 'Case Studies & Results', icon: Trophy, count: content.caseStudies?.items?.length },
    { id: 'testimonials', label: 'Client Testimonials', icon: MessageSquare, count: content.testimonials?.items?.length },
    { id: 'analytics', label: 'Growth Telemetry & Data', icon: BarChart3, count: content.analytics?.metrics?.length },
    { id: 'whyGrowlords', label: 'Why Growlords / Pillars', icon: Briefcase, count: content.whyGrowlords?.pillars?.length },
    { id: 'about', label: 'Manifesto & About', icon: FileText },
    { id: 'finalCta', label: 'Final Conversion CTA', icon: Sparkles },
    { id: 'footer', label: 'Footer & Navigation', icon: Globe },
    { id: 'seo', label: 'SEO & Metadata', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#B7FF3C] selection:text-[#050505]">
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0C]/90 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Site</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF3C] shadow-[0_0_10px_#B7FF3C]" />
            <span className="font-extrabold uppercase tracking-wider text-sm font-heading">
              GROWLORDS <span className="text-[#B7FF3C] font-mono text-xs font-normal ml-1">CMS STUDIO</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="cursor-pointer hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/80 transition-colors">
            <Upload className="w-3.5 h-3.5 text-white/60" />
            <span>Import JSON</span>
            <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
          </label>

          <button
            onClick={handleExportJSON}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/80 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-white/60" />
            <span>Backup JSON</span>
          </button>

          <button
            onClick={() => setResetModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-mono text-red-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 sm:px-5 py-2 rounded-full bg-[#B7FF3C] hover:bg-[#D7FF7A] text-[#050505] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(183,255,60,0.3)] disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Publishing...' : 'Publish Changes'}</span>
          </button>

          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="p-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Logout from CMS Studio"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div
          className={`fixed top-16 right-6 z-50 p-4 rounded-xl shadow-2xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
            toastMessage.type === 'success'
              ? 'bg-[#111114] border-[#B7FF3C]/50 text-[#B7FF3C]'
              : 'bg-[#111114] border-red-500/50 text-red-400'
          }`}
        >
          {toastMessage.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="text-xs font-mono text-white font-medium">{toastMessage.text}</span>
        </div>
      )}

      {/* Main Studio Body: Sidebar + Content Form */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 gap-6 md:gap-8">
        {/* Left Tab Navigation */}
        <aside className="w-full md:w-72 shrink-0 flex flex-col gap-1.5">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-3 py-1">
            CONTENT MODULES
          </div>

          <div className="flex md:flex-col overflow-x-auto pb-2 md:pb-0 gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-3 rounded-xl text-left text-xs font-mono uppercase tracking-wider flex items-center justify-between gap-3 transition-all whitespace-nowrap md:whitespace-normal shrink-0 ${
                    isActive
                      ? 'bg-[#B7FF3C] text-[#050505] font-bold shadow-[0_0_20px_rgba(183,255,60,0.25)]'
                      : 'bg-[#0A0A0C] hover:bg-[#111114] text-white/70 hover:text-white border border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-[#050505] text-[#B7FF3C]' : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {hasUnsavedChanges && (
            <div className="mt-4 p-3.5 rounded-xl border border-[#B7FF3C]/30 bg-[#B7FF3C]/5 flex items-center gap-2.5 text-xs text-[#B7FF3C] font-mono">
              <div className="w-2 h-2 rounded-full bg-[#B7FF3C] animate-pulse" />
              <span>You have unpublished edits.</span>
            </div>
          )}
        </aside>

        {/* Right Active Tab Content Editor */}
        <main className="flex-1 min-w-0 bg-[#0A0A0C] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-8">
          {/* ========================================================= */}
          {/* TAB 1: HERO & ABOVE THE FOLD                              */}
          {/* ========================================================= */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Hero Section Copy & CTAs
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Manage the top headlines, tags, subtext, and call-to-action buttons overlaying the 240-frame visual canvas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Left Tag / Architecture Badge
                  </label>
                  <input
                    type="text"
                    value={content.hero?.tagLeft || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, tagLeft: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Right Tag / Core Label
                  </label>
                  <input
                    type="text"
                    value={content.hero?.tagRight || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, tagRight: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Hero Main Headline
                </label>
                <input
                  type="text"
                  value={content.hero?.headline || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      hero: { ...prev.hero, headline: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Hero Subtitle / Value Proposition
                </label>
                <textarea
                  rows={3}
                  value={content.hero?.subtitle || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      hero: { ...prev.hero, subtitle: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Primary CTA Button Label
                  </label>
                  <input
                    type="text"
                    value={content.hero?.primaryCtaText || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, primaryCtaText: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Secondary CTA Button Label
                  </label>
                  <input
                    type="text"
                    value={content.hero?.secondaryCtaText || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, secondaryCtaText: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Scroll Prompt Text
                </label>
                <input
                  type="text"
                  value={content.hero?.scrollPromptText || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      hero: { ...prev.hero, scrollPromptText: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: STRATEGY SECTION                                   */}
          {/* ========================================================= */}
          {activeTab === 'strategy' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Strategic Framework Section
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Edit the core strategic manifesto bridge right after the canvas completes scrubbing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Section Tag
                  </label>
                  <input
                    type="text"
                    value={content.strategy?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        strategy: { ...prev.strategy, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Main Heading
                  </label>
                  <input
                    type="text"
                    value={content.strategy?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        strategy: { ...prev.strategy, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none font-bold"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Heading Accent (Lime Text)
                  </label>
                  <input
                    type="text"
                    value={content.strategy?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        strategy: { ...prev.strategy, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#B7FF3C] focus:border-[#B7FF3C] focus:outline-none font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Section Paragraph Text
                </label>
                <textarea
                  rows={3}
                  value={content.strategy?.description || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      strategy: { ...prev.strategy, description: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#B7FF3C] focus:outline-none"
                />
              </div>

              {/* Strategy Principles */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <h3 className="text-sm font-bold uppercase font-heading text-white">
                  3 Core Principles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(content.strategy?.principles || []).map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#111114] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#B7FF3C] font-bold">Principle {p.num}</span>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Title</label>
                        <input
                          type="text"
                          value={p.title}
                          onChange={(e) => {
                            const newP = [...content.strategy.principles];
                            newP[idx].title = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              strategy: { ...prev.strategy, principles: newP },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={p.desc}
                          onChange={(e) => {
                            const newP = [...content.strategy.principles];
                            newP[idx].desc = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              strategy: { ...prev.strategy, principles: newP },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: SERVICES & CAPABILITIES                            */}
          {/* ========================================================= */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                    Capabilities & Services Editor
                  </h2>
                  <p className="text-xs text-white/60 font-mono mt-1">
                    Add, remove, reorder, and edit your full spectrum of agency offerings.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = 'svc-' + Date.now();
                    const newNumber = String((content.services?.items?.length || 0) + 1).padStart(2, '0');
                    const newItem: ServiceItem = {
                      id: newId,
                      number: newNumber,
                      title: 'NEW SERVICE OFFERING',
                      description: 'Enter description of what this growth capability achieves for clients.',
                      deliverables: ['Deliverable 1', 'Deliverable 2', 'Deliverable 3'],
                      metrics: 'Average 3.5x outcome across portfolio',
                      ctaText: 'Deploy Service',
                    };
                    updateContent((prev) => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        items: [...(prev.services.items || []), newItem],
                      },
                    }));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#B7FF3C] text-[#050505] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Service</span>
                </button>
              </div>

              {/* Section Header Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111114] border border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Tag</label>
                  <input
                    type="text"
                    value={content.services?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        services: { ...prev.services, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading</label>
                  <input
                    type="text"
                    value={content.services?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        services: { ...prev.services, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading Accent</label>
                  <input
                    type="text"
                    value={content.services?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        services: { ...prev.services, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={content.services?.description || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        services: { ...prev.services, description: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Service Cards Repeater */}
              <div className="space-y-4">
                {(content.services?.items || []).map((service, idx) => (
                  <div
                    key={service.id || idx}
                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#111114] space-y-4 relative group"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#B7FF3C] font-bold">
                          #{service.number || String(idx + 1).padStart(2, '0')}
                        </span>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const newItems = [...content.services.items];
                            newItems[idx].title = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              services: { ...prev.services, items: newItems },
                            }));
                          }}
                          className="bg-transparent text-sm sm:text-base font-bold uppercase font-heading text-white focus:outline-none border-b border-dashed border-white/20 focus:border-[#B7FF3C]"
                        />
                      </div>

                      <button
                        onClick={() => {
                          const newItems = content.services.items.filter((_, i) => i !== idx);
                          updateContent((prev) => ({
                            ...prev,
                            services: { ...prev.services, items: newItems },
                          }));
                        }}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">
                        Service Description
                      </label>
                      <textarea
                        rows={2}
                        value={service.description}
                        onChange={(e) => {
                          const newItems = [...content.services.items];
                          newItems[idx].description = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            services: { ...prev.services, items: newItems },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">
                          Metrics Badge / Outcome Quote
                        </label>
                        <input
                          type="text"
                          value={service.metrics}
                          onChange={(e) => {
                            const newItems = [...content.services.items];
                            newItems[idx].metrics = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              services: { ...prev.services, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">
                          CTA Action Label
                        </label>
                        <input
                          type="text"
                          value={service.ctaText || `Deploy ${service.title}`}
                          onChange={(e) => {
                            const newItems = [...content.services.items];
                            newItems[idx].ctaText = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              services: { ...prev.services, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">
                        Key Deliverables (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={(service.deliverables || []).join(', ')}
                        onChange={(e) => {
                          const newItems = [...content.services.items];
                          newItems[idx].deliverables = e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean);
                          updateContent((prev) => ({
                            ...prev,
                            services: { ...prev.services, items: newItems },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: CASE STUDIES & IMPACT                              */}
          {/* ========================================================= */}
          {activeTab === 'caseStudies' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                    Case Studies & Results Editor
                  </h2>
                  <p className="text-xs text-white/60 font-mono mt-1">
                    Manage real portfolio impact studies, numbers, challenge/strategy breakdowns, and modal narratives.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = 'case-' + Date.now();
                    const newNumber = String((content.caseStudies?.items?.length || 0) + 1).padStart(2, '0');
                    const newItem: CaseStudyItem = {
                      id: newId,
                      number: newNumber,
                      title: 'New Client Enterprise Growth Transformation',
                      client: 'High-Growth Tech (Series A)',
                      industry: 'Software / Infrastructure',
                      challenge: 'Describe the primary growth bottleneck and CAC friction.',
                      strategy: 'Describe the core positioning, creative, or conversion turnaround.',
                      execution: 'Describe the deployed omnichannel execution and systems.',
                      results: [
                        { label: 'CAC Reduction', value: '-38%', sublabel: 'Across channels' },
                        { label: 'Conversion Lift', value: '+142%', sublabel: 'Onboarding rate' },
                        { label: 'Net ARR', value: '$6.5M', sublabel: 'In 6 months' },
                      ],
                      services: ['Performance Marketing', 'Web & CRO'],
                      accentColor: '#B7FF3C',
                    };
                    updateContent((prev) => ({
                      ...prev,
                      caseStudies: {
                        ...prev.caseStudies,
                        items: [...(prev.caseStudies.items || []), newItem],
                      },
                    }));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#B7FF3C] text-[#050505] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Case Study</span>
                </button>
              </div>

              {/* Section Header Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111114] border border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Tag</label>
                  <input
                    type="text"
                    value={content.caseStudies?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        caseStudies: { ...prev.caseStudies, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading</label>
                  <input
                    type="text"
                    value={content.caseStudies?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        caseStudies: { ...prev.caseStudies, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading Accent</label>
                  <input
                    type="text"
                    value={content.caseStudies?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        caseStudies: { ...prev.caseStudies, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={content.caseStudies?.description || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        caseStudies: { ...prev.caseStudies, description: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Case Studies List */}
              <div className="space-y-4">
                {(content.caseStudies?.items || []).map((cs, idx) => (
                  <div
                    key={cs.id || idx}
                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#111114] space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#B7FF3C] font-bold">CASE #{cs.number}</span>
                        <input
                          type="text"
                          value={cs.title}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].title = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="bg-transparent text-sm sm:text-base font-bold uppercase font-heading text-white focus:outline-none border-b border-dashed border-white/20 focus:border-[#B7FF3C]"
                        />
                      </div>

                      <button
                        onClick={() => {
                          const newItems = content.caseStudies.items.filter((_, i) => i !== idx);
                          updateContent((prev) => ({
                            ...prev,
                            caseStudies: { ...prev.caseStudies, items: newItems },
                          }));
                        }}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Delete Case Study"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Client Profile</label>
                        <input
                          type="text"
                          value={cs.client}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].client = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Industry / Category</label>
                        <input
                          type="text"
                          value={cs.industry}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].industry = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">The Challenge</label>
                        <textarea
                          rows={2}
                          value={cs.challenge}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].challenge = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/80"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">The Strategy</label>
                        <textarea
                          rows={2}
                          value={cs.strategy}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].strategy = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/80"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Execution & Results Breakdown</label>
                        <textarea
                          rows={2}
                          value={cs.execution}
                          onChange={(e) => {
                            const newItems = [...content.caseStudies.items];
                            newItems[idx].execution = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              caseStudies: { ...prev.caseStudies, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/80"
                        />
                      </div>
                    </div>

                    {/* Results Metrics */}
                    <div className="pt-2 border-t border-white/10">
                      <label className="block text-[10px] font-mono text-[#B7FF3C] uppercase mb-2">
                        Key Impact Metrics (3 Badges)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {(cs.results || []).map((res, rIdx) => (
                          <div key={rIdx} className="p-2.5 rounded-lg bg-[#0A0A0C] border border-white/10 space-y-1">
                            <input
                              type="text"
                              placeholder="Value (e.g. +188%)"
                              value={res.value}
                              onChange={(e) => {
                                const newItems = [...content.caseStudies.items];
                                newItems[idx].results[rIdx].value = e.target.value;
                                updateContent((prev) => ({
                                  ...prev,
                                  caseStudies: { ...prev.caseStudies, items: newItems },
                                }));
                              }}
                              className="w-full bg-transparent text-xs font-bold text-[#B7FF3C] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Label (e.g. Conversion Lift)"
                              value={res.label}
                              onChange={(e) => {
                                const newItems = [...content.caseStudies.items];
                                newItems[idx].results[rIdx].label = e.target.value;
                                updateContent((prev) => ({
                                  ...prev,
                                  caseStudies: { ...prev.caseStudies, items: newItems },
                                }));
                              }}
                              className="w-full bg-transparent text-[10px] font-mono text-white/80 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: TESTIMONIALS                                       */}
          {/* ========================================================= */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                    Client Testimonials & Endorsements
                  </h2>
                  <p className="text-xs text-white/60 font-mono mt-1">
                    Manage executive quotes, ratings, company names, and verified growth metrics.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newId = 'test-' + Date.now();
                    const newItem: TestimonialItem = {
                      id: newId,
                      quote: 'Growlords helped us reach high velocity across all digital channels.',
                      author: 'New Founder',
                      role: 'Founder & CEO',
                      company: 'Brand Name',
                      metric: '+250%',
                      metricLabel: 'Growth Uplift',
                      rating: 5,
                      avatarText: 'NF',
                    };
                    updateContent((prev) => ({
                      ...prev,
                      testimonials: {
                        ...prev.testimonials,
                        items: [...(prev.testimonials.items || []), newItem],
                      },
                    }));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#B7FF3C] text-[#050505] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              {/* Section Header Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111114] border border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Tag</label>
                  <input
                    type="text"
                    value={content.testimonials?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        testimonials: { ...prev.testimonials, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading</label>
                  <input
                    type="text"
                    value={content.testimonials?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        testimonials: { ...prev.testimonials, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading Accent</label>
                  <input
                    type="text"
                    value={content.testimonials?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        testimonials: { ...prev.testimonials, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={content.testimonials?.description || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        testimonials: { ...prev.testimonials, description: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Testimonials List */}
              <div className="space-y-4">
                {(content.testimonials?.items || []).map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#111114] space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#B7FF3C]">
                        <Star className="w-3.5 h-3.5 fill-[#B7FF3C]" />
                        <span>TESTIMONIAL #{idx + 1}</span>
                      </div>

                      <button
                        onClick={() => {
                          const newItems = content.testimonials.items.filter((_, i) => i !== idx);
                          updateContent((prev) => ({
                            ...prev,
                            testimonials: { ...prev.testimonials, items: newItems },
                          }));
                        }}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Delete Testimonial"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">
                        Client Quote
                      </label>
                      <textarea
                        rows={3}
                        value={item.quote}
                        onChange={(e) => {
                          const newItems = [...content.testimonials.items];
                          newItems[idx].quote = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            testimonials: { ...prev.testimonials, items: newItems },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Author Name</label>
                        <input
                          type="text"
                          value={item.author}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].author = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              testimonials: { ...prev.testimonials, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Job Title / Role</label>
                        <input
                          type="text"
                          value={item.role}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].role = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              testimonials: { ...prev.testimonials, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Company</label>
                        <input
                          type="text"
                          value={item.company}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].company = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              testimonials: { ...prev.testimonials, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Metric Value (e.g. +320%)</label>
                        <input
                          type="text"
                          value={item.metric || ''}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].metric = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              testimonials: { ...prev.testimonials, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C] font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Metric Label</label>
                        <input
                          type="text"
                          value={item.metricLabel || ''}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].metricLabel = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              testimonials: { ...prev.testimonials, items: newItems },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 6: WHY GROWLORDS / 4 PILLARS                          */}
          {/* ========================================================= */}
          {activeTab === 'whyGrowlords' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Why Growlords / 4 Core Principles
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Manage the 4 foundational operating pillars that define your agency moat.
                </p>
              </div>

              {/* Section Header */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111114] border border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Tag</label>
                  <input
                    type="text"
                    value={content.whyGrowlords?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        whyGrowlords: { ...prev.whyGrowlords, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading</label>
                  <input
                    type="text"
                    value={content.whyGrowlords?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        whyGrowlords: { ...prev.whyGrowlords, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading Accent</label>
                  <input
                    type="text"
                    value={content.whyGrowlords?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        whyGrowlords: { ...prev.whyGrowlords, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={content.whyGrowlords?.description || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        whyGrowlords: { ...prev.whyGrowlords, description: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* 4 Pillars List */}
              <div className="space-y-4">
                {(content.whyGrowlords?.pillars || []).map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/10 bg-[#111114] space-y-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs font-mono text-[#B7FF3C] font-bold">PILLAR {pillar.number}</span>
                      <input
                        type="text"
                        value={pillar.title}
                        onChange={(e) => {
                          const newPillars = [...content.whyGrowlords.pillars];
                          newPillars[idx].title = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            whyGrowlords: { ...prev.whyGrowlords, pillars: newPillars },
                          }));
                        }}
                        className="bg-transparent text-sm font-bold uppercase font-heading text-white focus:outline-none border-b border-dashed border-white/20 focus:border-[#B7FF3C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Tagline</label>
                      <input
                        type="text"
                        value={pillar.tagline}
                        onChange={(e) => {
                          const newPillars = [...content.whyGrowlords.pillars];
                          newPillars[idx].tagline = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            whyGrowlords: { ...prev.whyGrowlords, pillars: newPillars },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={pillar.description}
                        onChange={(e) => {
                          const newPillars = [...content.whyGrowlords.pillars];
                          newPillars[idx].description = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            whyGrowlords: { ...prev.whyGrowlords, pillars: newPillars },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/80"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 7: MANIFESTO & ABOUT                                  */}
          {/* ========================================================= */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Agency Manifesto & About
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Edit the editorial agency manifesto and mandate cards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Tag</label>
                  <input
                    type="text"
                    value={content.about?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        about: { ...prev.about, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Headline</label>
                  <input
                    type="text"
                    value={content.about?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        about: { ...prev.about, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Headline Accent</label>
                  <input
                    type="text"
                    value={content.about?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        about: { ...prev.about, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#B7FF3C] font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Subtitle</label>
                <input
                  type="text"
                  value={content.about?.subtitle || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      about: { ...prev.about, subtitle: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Manifesto Body Text</label>
                <textarea
                  rows={3}
                  value={content.about?.description || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      about: { ...prev.about, description: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">CTA Button Text</label>
                <input
                  type="text"
                  value={content.about?.ctaText || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      about: { ...prev.about, ctaText: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              {/* 3 Mandates */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <h3 className="text-sm font-bold uppercase font-heading text-white">
                  3 Mandate / Perspective Cards
                </h3>
                <div className="space-y-3">
                  {(content.about?.mandates || []).map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#111114] space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Tag (e.g. OUR MANDATE)"
                          value={m.tag}
                          onChange={(e) => {
                            const newM = [...content.about.mandates];
                            newM[idx].tag = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              about: { ...prev.about, mandates: newM },
                            }));
                          }}
                          className="bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-[#B7FF3C]"
                        />
                        <input
                          type="text"
                          placeholder="Title"
                          value={m.title}
                          onChange={(e) => {
                            const newM = [...content.about.mandates];
                            newM[idx].title = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              about: { ...prev.about, mandates: newM },
                            }));
                          }}
                          className="bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white font-bold"
                        />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Description"
                        value={m.description}
                        onChange={(e) => {
                          const newM = [...content.about.mandates];
                          newM[idx].description = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            about: { ...prev.about, mandates: newM },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 8: FINAL CTA                                          */}
          {/* ========================================================= */}
          {activeTab === 'finalCta' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Final High-Impact Conversion CTA
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Manage the bottom radiant call-to-action block.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Tag</label>
                  <input
                    type="text"
                    value={content.finalCta?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        finalCta: { ...prev.finalCta, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Heading</label>
                  <input
                    type="text"
                    value={content.finalCta?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        finalCta: { ...prev.finalCta, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Heading Accent</label>
                  <input
                    type="text"
                    value={content.finalCta?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        finalCta: { ...prev.finalCta, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#B7FF3C] font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Description Paragraph</label>
                <textarea
                  rows={3}
                  value={content.finalCta?.description || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      finalCta: { ...prev.finalCta, description: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Primary CTA Button</label>
                  <input
                    type="text"
                    value={content.finalCta?.primaryCtaText || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        finalCta: { ...prev.finalCta, primaryCtaText: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Secondary CTA Button</label>
                  <input
                    type="text"
                    value={content.finalCta?.secondaryCtaText || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        finalCta: { ...prev.finalCta, secondaryCtaText: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Trust Badges (Comma-separated)
                </label>
                <input
                  type="text"
                  value={(content.finalCta?.trustBadges || []).join(', ')}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      finalCta: {
                        ...prev.finalCta,
                        trustBadges: e.target.value
                          .split(',')
                          .map((s) => s.trim())
                          .filter(Boolean),
                      },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-mono"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 9: FOOTER & NAVIGATION                                */}
          {/* ========================================================= */}
          {activeTab === 'footer' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Footer, Contact & Navigation
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Manage brand footer statements, contact email, office details, and social channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Brand Name</label>
                  <input
                    type="text"
                    value={content.footer?.brandName || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        footer: { ...prev.footer, brandName: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Direct Inquiry Email</label>
                  <input
                    type="email"
                    value={content.footer?.directEmail || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        footer: { ...prev.footer, directEmail: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Brand Tagline / Statement</label>
                <textarea
                  rows={2}
                  value={content.footer?.brandDescription || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      footer: { ...prev.footer, brandDescription: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Office Locations Text</label>
                  <input
                    type="text"
                    value={content.footer?.officesText || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        footer: { ...prev.footer, officesText: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">CTA Action Label</label>
                  <input
                    type="text"
                    value={content.footer?.ctaLabel || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        footer: { ...prev.footer, ctaLabel: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">Copyright Statement</label>
                <input
                  type="text"
                  value={content.footer?.copyrightText || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      footer: { ...prev.footer, copyrightText: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-mono"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 10: SEO & METADATA                                    */}
          {/* ========================================================= */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  SEO, OpenGraph & Metadata
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Optimize search engine indexing, social share preview cards, and browser metadata.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Page Title Tag (Meta Title)
                </label>
                <input
                  type="text"
                  value={content.seo?.title || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      seo: { ...prev.seo, title: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Meta Description
                </label>
                <textarea
                  rows={3}
                  value={content.seo?.description || ''}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      seo: { ...prev.seo, description: e.target.value },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    OpenGraph Title (Social Share)
                  </label>
                  <input
                    type="text"
                    value={content.seo?.ogTitle || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        seo: { ...prev.seo, ogTitle: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                    Canonical Site URL
                  </label>
                  <input
                    type="text"
                    value={content.seo?.siteUrl || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        seo: { ...prev.seo, siteUrl: e.target.value },
                      }))
                    }
                    className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B7FF3C] uppercase mb-1.5">
                  Meta Keywords (Comma-separated)
                </label>
                <input
                  type="text"
                  value={(content.seo?.keywords || []).join(', ')}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      seo: {
                        ...prev.seo,
                        keywords: e.target.value
                          .split(',')
                          .map((s) => s.trim())
                          .filter(Boolean),
                      },
                    }))
                  }
                  className="w-full bg-[#111114] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white font-mono"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 11: ANALYTICS & TELEMETRY                             */}
          {/* ========================================================= */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase font-heading text-white">
                  Growth Telemetry & Analytics
                </h2>
                <p className="text-xs text-white/60 font-mono mt-1">
                  Manage real-time telemetry metrics, headlines, and data curves.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#111114] border border-white/5">
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Tag</label>
                  <input
                    type="text"
                    value={content.analytics?.tag || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        analytics: { ...prev.analytics, tag: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading</label>
                  <input
                    type="text"
                    value={content.analytics?.heading || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        analytics: { ...prev.analytics, heading: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Heading Accent</label>
                  <input
                    type="text"
                    value={content.analytics?.headingAccent || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        analytics: { ...prev.analytics, headingAccent: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#B7FF3C]"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-mono text-[#B7FF3C] uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={content.analytics?.description || ''}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        analytics: { ...prev.analytics, description: e.target.value },
                      }))
                    }
                    className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Metrics list */}
              <div className="space-y-4">
                {(content.analytics?.metrics || []).map((metric, idx) => (
                  <div key={metric.key || idx} className="p-4 rounded-xl border border-white/10 bg-[#111114] space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs font-mono text-[#B7FF3C] font-bold">{metric.name}</span>
                      <span className="text-xs font-bold text-white font-mono">{metric.headlineValue} ({metric.growth})</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Metric Name</label>
                        <input
                          type="text"
                          value={metric.name}
                          onChange={(e) => {
                            const newM = [...content.analytics.metrics];
                            newM[idx].name = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              analytics: { ...prev.analytics, metrics: newM },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Headline Metric Value</label>
                        <input
                          type="text"
                          value={metric.headlineValue}
                          onChange={(e) => {
                            const newM = [...content.analytics.metrics];
                            newM[idx].headlineValue = e.target.value;
                            updateContent((prev) => ({
                              ...prev,
                              analytics: { ...prev.analytics, metrics: newM },
                            }));
                          }}
                          className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-[#B7FF3C] font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Benchmark / Context</label>
                      <input
                        type="text"
                        value={metric.benchmark}
                        onChange={(e) => {
                          const newM = [...content.analytics.metrics];
                          newM[idx].benchmark = e.target.value;
                          updateContent((prev) => ({
                            ...prev,
                            analytics: { ...prev.analytics, metrics: newM },
                          }));
                        }}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Confirmation Reset Modal */}
      {resetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#111114] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-bold uppercase font-heading">Reset All Site Content?</h3>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-mono">
              This will revert all headlines, paragraphs, services, case studies, testimonials, and SEO metadata back to their factory defaults.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setResetModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleResetConfirm}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-xs font-bold font-mono text-white uppercase"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
