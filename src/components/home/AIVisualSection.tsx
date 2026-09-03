"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Cpu,
  Sparkles,
  Video,
  FileText,
  Workflow,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function AIVisualSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = 280;
    const height = 280;

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const greenLight = new THREE.PointLight(0x16a34a, 3.0, 8);
    greenLight.position.set(-2, -2, 2);
    scene.add(greenLight);

    const group = new THREE.Group();
    scene.add(group);

    // Sculptural Neural Core (Octahedron / Torus Knot)
    const coreGeo = new THREE.OctahedronGeometry(1.1, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 0.95,
      transparent: true,
      roughness: 0.18,
      metalness: 0.05,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x16a34a,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wire = new THREE.Mesh(coreGeo, wireMat);
    group.add(wire);

    const innerGeo = new THREE.DodecahedronGeometry(0.55, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.22;
      group.rotation.x = Math.sin(t * 0.3) * 0.2;
      wire.rotation.z = t * 0.18;

      const scale = 1 + Math.sin(t * 1.8) * 0.05;
      inner.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      coreGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  const aiPillars = [
    {
      title: "AI Video Creation",
      desc: "Broadcast commercial generation in 48 hours without expensive shoots.",
      icon: Video,
      badge: "48-Hour Turnaround",
    },
    {
      title: "AI Content Pipelines",
      desc: "Intent-focused editorial engines that rank organically for target keywords.",
      icon: FileText,
      badge: "Autonomous SEO",
    },
    {
      title: "Intelligent Automation",
      desc: "Instant lead qualification and 24/7 automated conversion pipelines.",
      icon: Workflow,
      badge: "Zero Dropoff",
    },
    {
      title: "Creative Workflows",
      desc: "Generative product staging, asset variation, and rapid testing.",
      icon: Sparkles,
      badge: "D2C Scaling",
    },
    {
      title: "Algorithmic Media",
      desc: "Real-time budget allocation shifting spend to highest-converting creative.",
      icon: Target,
      badge: "ROAS Max",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#FAFBF9] border-b border-black/[0.05]">
      {/* Soft emerald radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#16A34A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#16A34A]/30 text-xs font-mono uppercase tracking-widest text-[#16A34A] mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Creative Technology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-tight">
            AI MEETS <br />
            <span className="text-[#16A34A]">CREATIVITY.</span>
          </h2>

          <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed mt-4">
            We leverage state-of-the-art diffusion models, algorithmic video generation, and autonomous CRM workflows
            to deliver commercial-grade marketing assets in days what legacy agencies take months to produce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D AI Neural Core */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[300px] aspect-square rounded-3xl bg-white border border-black/[0.08] shadow-[0_12px_36px_-6px_rgba(22,163,74,0.12)] p-6 flex flex-col items-center justify-center">
              <canvas ref={canvasRef} className="w-[280px] h-[280px] block" />
              <div className="absolute bottom-4 px-3 py-1 rounded-full bg-[#FAFBF9] border border-black/[0.08] text-[10px] font-mono text-[#16A34A] font-bold">
                GENERATIVE ENGINE
              </div>
            </div>
          </div>

          {/* Right: 5 AI Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {aiPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.06] hover:border-[#16A34A]/40 shadow-2xs hover:shadow-xs transition-all duration-200 flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F7F4] border border-black/[0.06] flex items-center justify-center text-[#16A34A] shrink-0 group-hover:scale-105 group-hover:bg-[#16A34A]/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#16A34A] transition-colors">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] shrink-0 hidden sm:inline">
                    {item.badge}
                  </span>
                </div>
              );
            })}

            <div className="mt-2 pt-2">
              <Link
                href="/services#ai-video-creation"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#16A34A] hover:underline"
              >
                <span>View Full AI Video &amp; Automation Deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
