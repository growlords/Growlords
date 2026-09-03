"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Monitor,
  Search,
  Share2,
  FileText,
  Target,
  Cpu,
  ShoppingBag,
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  headline: string;
  metric: string;
  deliverables: string[];
  icon: React.ElementType;
}

const NODES: EcosystemNode[] = [
  {
    id: "website",
    name: "WEBSITE",
    category: "Architecture",
    headline: "Custom 3D & Next.js Web Engineering",
    metric: "Sub-Second Speeds",
    deliverables: ["Tailored 3D WebGL", "Fluid Responsive UX", "Zero Legacy Bloat"],
    icon: Monitor,
  },
  {
    id: "seo",
    name: "SEO",
    category: "Organic",
    headline: "High-Intent Search Engine Dominance",
    metric: "Page 1 Rankings",
    deliverables: ["Technical SEO Hardening", "Commercial Keywords", "Pan-India Visibility"],
    icon: Search,
  },
  {
    id: "social",
    name: "SOCIAL",
    category: "Community",
    headline: "Viral Brand Presence & Engagement",
    metric: "100K+ Reach/Mo",
    deliverables: ["Reels & Visual Curation", "Story Engagement", "Follower-to-Buyer Funnel"],
    icon: Share2,
  },
  {
    id: "content",
    name: "CONTENT",
    category: "Storytelling",
    headline: "Direct-Response Creative Copywriting",
    metric: "High Conversion",
    deliverables: ["Persuasive Editorial", "Landing Page Copy", "Brand Voice System"],
    icon: FileText,
  },
  {
    id: "ads",
    name: "ADS",
    category: "Acquisition",
    headline: "Meta & Google High-ROAS Media Buying",
    metric: "4.8x Avg ROAS",
    deliverables: ["Algorithmic Retargeting", "CAC Optimization", "Weekly Creative Iterations"],
    icon: Target,
  },
  {
    id: "ai",
    name: "AI",
    category: "Innovation",
    headline: "Generative Video & Rapid Automation",
    metric: "48-Hour Turnaround",
    deliverables: ["Broadcast AI Commercials", "Automated Lead Routing", "Diffusion Assets"],
    icon: Cpu,
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    category: "Conversion",
    headline: "High-Volume D2C Storefronts",
    metric: "+182% Conversion",
    deliverables: ["Frictionless Checkout", "Cart Recovery Engine", "Catalog Scalability"],
    icon: ShoppingBag,
  },
  {
    id: "branding",
    name: "BRANDING",
    category: "Identity",
    headline: "Luxury Visual Identity & Design Tokens",
    metric: "Defensible Equity",
    deliverables: ["Spatial Design Tokens", "Typography Systems", "Apple-Level Aesthetics"],
    icon: Palette,
  },
];

export default function Ecosystem3DSection() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeNode = NODES[activeNodeIndex];
  const ActiveIcon = activeNode.icon;

  // Lightweight 3D Central Core Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 260;
    const height = 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch {
      return;
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const greenLight = new THREE.PointLight(0x16a34a, 3.5, 10);
    greenLight.position.set(-2, -2, 3);
    scene.add(greenLight);

    const group = new THREE.Group();
    scene.add(group);

    // Frosted Glass Central Sphere
    const sphereGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 0.95,
      transparent: true,
      roughness: 0.2,
      metalness: 0.05,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // Outer Emerald Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x16a34a,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    // Inner Glowing Emerald Nucleus
    const innerGeo = new THREE.SphereGeometry(0.5, 20, 20);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.3,
      transparent: true,
      opacity: 0.75,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // Fast Rotating Rings
    const ringGeo = new THREE.TorusGeometry(1.5, 0.015, 12, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.25;
      group.rotation.x = Math.sin(t * 0.2) * 0.15;
      wire.rotation.y = -t * 0.3;
      ring.rotation.z = t * 0.4;

      const scale = 1 + Math.sin(t * 1.5) * 0.04;
      inner.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#FAFBF9] border-b border-black/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature 360° Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-tight">
            YOUR DIGITAL GROWTH <br />
            <span className="text-[#16A34A]">ECOSYSTEM</span>
          </h2>

          <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed mt-4">
            A unified digital engine where every discipline fuels the next.
            Select any node below to inspect how it works seamlessly with the Growlords core.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONSTELLATION & CENTRAL 3D CORE ENGINE                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Node Selector Tabs (4 Nodes) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {NODES.slice(0, 4).map((node, idx) => {
              const isActive = activeNodeIndex === idx;
              const Icon = node.icon;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#16A34A] shadow-[0_8px_25px_-4px_rgba(22,163,74,0.15)] scale-[1.02]"
                      : "bg-white/70 border-black/[0.06] hover:bg-white hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#16A34A] text-white"
                          : "bg-[#F4F7F4] text-[#5F6368]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[#5F6368] uppercase tracking-wider">
                        {node.category}
                      </span>
                      <span className="text-sm font-black text-[#111111] tracking-tight">
                        {node.name}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isActive
                        ? "bg-[#16A34A]/10 text-[#16A34A]"
                        : "text-[#5F6368] bg-zinc-100"
                    }`}
                  >
                    {node.metric}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center Column: 3D Core Visual & Active Node Intelligence Box */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
              {/* Outer decorative orbit line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#16A34A]/25 animate-spin-slow pointer-events-none" />

              {/* 3D WebGL Canvas */}
              <canvas
                ref={canvasRef}
                className="w-[260px] h-[260px] block relative z-10"
              />

              {/* Center Core Badge */}
              <div className="absolute -bottom-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#16A34A]/30 text-[10px] font-mono uppercase tracking-widest text-[#16A34A] font-bold shadow-xs z-20">
                GROWLORDS ENGINE
              </div>
            </div>

            {/* Active Node Detail Card */}
            <div className="w-full mt-6 p-6 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_25px_-2px_rgba(0,0,0,0.05)] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#16A34A] font-bold">
                    Active Node: {activeNode.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-[#111111]">
                  {activeNode.metric}
                </span>
              </div>

              <h3 className="text-lg font-black text-[#111111] tracking-tight">
                {activeNode.headline}
              </h3>

              <div className="flex flex-col gap-1.5 pt-2 border-t border-black/[0.06]">
                {activeNode.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-[#5F6368]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-2 text-xs font-bold text-[#16A34A] flex items-center gap-1 hover:underline"
              >
                <span>Explore {activeNode.name} Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Node Selector Tabs (Remaining 4 Nodes) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {NODES.slice(4, 8).map((node, idx) => {
              const actualIdx = idx + 4;
              const isActive = activeNodeIndex === actualIdx;
              const Icon = node.icon;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeIndex(actualIdx)}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#16A34A] shadow-[0_8px_25px_-4px_rgba(22,163,74,0.15)] scale-[1.02]"
                      : "bg-white/70 border-black/[0.06] hover:bg-white hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#16A34A] text-white"
                          : "bg-[#F4F7F4] text-[#5F6368]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[#5F6368] uppercase tracking-wider">
                        {node.category}
                      </span>
                      <span className="text-sm font-black text-[#111111] tracking-tight">
                        {node.name}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isActive
                        ? "bg-[#16A34A]/10 text-[#16A34A]"
                        : "text-[#5F6368] bg-zinc-100"
                    }`}
                  >
                    {node.metric}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
