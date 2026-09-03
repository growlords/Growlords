"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  TrendingUp,
  Globe,
  Search,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Detect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = isMobile ? 8.2 : 6.8;

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    const greenFillLight = new THREE.PointLight(0x16a34a, 3.0, 14);
    greenFillLight.position.set(-4, -2, 4);
    scene.add(greenFillLight);

    const softBackLight = new THREE.DirectionalLight(0xe2e8f0, 0.9);
    softBackLight.position.set(0, -6, -4);
    scene.add(softBackLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Translucent Frosted Glass Core (Sculptural Growth Center)
    const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 1.05 : 1.3, 1);
    
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.8,
      opacity: 0.95,
      transparent: true,
      roughness: 0.2,
      metalness: 0.05,
      ior: 1.48,
    });
    const glassMesh = new THREE.Mesh(coreGeo, glassMat);
    masterGroup.add(glassMesh);

    // Subtle emerald wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x16a34a,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    masterGroup.add(wireMesh);

    // Inner glowing growth nucleus
    const nucleusGeo = new THREE.SphereGeometry(isMobile ? 0.45 : 0.6, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.25,
      metalness: 0.1,
      transparent: true,
      opacity: 0.65,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    masterGroup.add(nucleusMesh);

    // 2. Sculptural Minimalist Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(isMobile ? 1.6 : 2.15, 0.012, 12, 80);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.2,
      metalness: 0.35,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3.2;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(isMobile ? 1.95 : 2.5, 0.009, 12, 80);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.x = -Math.PI / 5;
    masterGroup.add(ring2);

    // 3. Floating 3D Translucent Glass Plates
    const cardGroup = new THREE.Group();
    masterGroup.add(cardGroup);

    const cardGeo = new THREE.BoxGeometry(0.7, 0.45, 0.02);
    const cardMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.05,
      transparent: true,
      opacity: 0.88,
    });

    const cardPositions = [
      { x: 1.95, y: 1.1, z: 0.4, rx: 0.12, ry: -0.28 },
      { x: -1.9, y: -0.8, z: 0.6, rx: -0.15, ry: 0.32 },
      { x: -1.6, y: 1.45, z: -0.4, rx: 0.18, ry: 0.22 },
      { x: 1.8, y: -1.2, z: -0.2, rx: -0.18, ry: -0.15 },
    ];

    const cards: THREE.Mesh[] = [];
    cardPositions.forEach((pos) => {
      const card = new THREE.Mesh(cardGeo, cardMat);
      card.position.set(pos.x, pos.y, pos.z);
      card.rotation.set(pos.rx, pos.ry, 0);
      cardGroup.add(card);
      cards.push(card);
    });

    // 4. Subtle Floating Sparkles
    const particleCount = isMobile ? 80 : isTablet ? 140 : 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorGreen = new THREE.Color(0x16a34a);
    const colorSilver = new THREE.Color(0x94a3b8);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const r = 2.0 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const mix = Math.random();
      const chosenColor = mix > 0.6 ? colorGreen : mix > 0.3 ? colorSilver : colorWhite;

      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.035 : 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * 0.45;
      targetY = relY * 0.45;
      setMouseOffset({ x: relX * 20, y: relY * 20 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        masterGroup.rotation.y = elapsedTime * 0.08 + mouseX;
        masterGroup.rotation.x = mouseY * 0.4;

        glassMesh.rotation.x = elapsedTime * 0.12;
        glassMesh.rotation.y = elapsedTime * 0.15;
        wireMesh.rotation.x = elapsedTime * 0.12;
        wireMesh.rotation.y = elapsedTime * 0.15;

        ring1.rotation.z = elapsedTime * 0.2;
        ring2.rotation.z = -elapsedTime * 0.15;

        const pulseScale = 1 + Math.sin(elapsedTime * 1.2) * 0.035;
        nucleusMesh.scale.set(pulseScale, pulseScale, pulseScale);

        cards.forEach((card, idx) => {
          card.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.0015;
        });

        particles.rotation.y = -elapsedTime * 0.025;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      coreGeo.dispose();
      glassMat.dispose();
      wireMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      cardGeo.dispose();
      cardMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex items-center justify-center select-none overflow-visible"
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
        style={{ pointerEvents: "auto" }}
      />

      {/* ========================================================================= */}
      {/* LAYERED 3D FLOATING ECOSYSTEM UI CARDS ("DIGITAL GROWTH COMMAND CENTER")  */}
      {/* ========================================================================= */}

      {/* Card 1: Floating Browser Window (Top Left) */}
      <div
        className="absolute top-2 -left-2 sm:left-4 z-20 pointer-events-none transition-transform duration-300 ease-out hidden sm:flex flex-col rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] p-3 shadow-md shadow-black/[0.04] max-w-[200px]"
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0)`,
        }}
      >
        <div className="flex items-center gap-1.5 pb-2 border-b border-black/[0.06] mb-2">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <div className="flex items-center gap-1 text-[9px] font-mono text-[#5F6368] bg-zinc-50 px-2 py-0.5 rounded border border-black/[0.04] ml-auto">
            <Globe className="w-2.5 h-2.5 text-[#16A34A]" />
            <span>growlords.com</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#111111]">Interactive WebGL</span>
          <span className="text-[9px] font-mono text-[#16A34A] font-semibold bg-[#16A34A]/10 px-1.5 py-0.5 rounded">
            99 Score
          </span>
        </div>
      </div>

      {/* Card 2: Floating Analytics Dashboard (Top Right) */}
      <div
        className="absolute top-4 -right-2 sm:right-4 z-20 pointer-events-none transition-transform duration-300 ease-out flex flex-col gap-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] p-3 shadow-md shadow-black/[0.04] min-w-[170px]"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.9}px, ${-mouseOffset.y * 0.9}px, 0)`,
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#16A34A]" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6368]">
              Organic Growth
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-ping" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-black text-[#111111]">+340%</span>
          <span className="text-[10px] font-mono text-[#16A34A] font-bold">vs Prev Mo</span>
        </div>
        {/* Mini SVG Trendline */}
        <svg className="w-full h-5 text-[#16A34A]" viewBox="0 0 100 20" fill="none">
          <path
            d="M0 16 L20 13 L40 15 L60 8 L80 10 L100 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Card 3: SEO Rank Ladder (Bottom Left) */}
      <div
        className="absolute bottom-4 left-0 sm:left-4 z-20 pointer-events-none transition-transform duration-300 ease-out hidden sm:flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] p-3 shadow-md shadow-black/[0.04]"
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px, 0)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 border border-[#16A34A]/20 flex items-center justify-center text-[#16A34A] shrink-0">
          <Search className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xs font-black text-[#111111]">#1 Google Rank</span>
            <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
          </div>
          <span className="text-[10px] font-mono text-[#5F6368]">High-Intent Keywords</span>
        </div>
      </div>

      {/* Card 4: E-Commerce Conversion Tile (Bottom Right) */}
      <div
        className="absolute bottom-2 -right-1 sm:right-4 z-20 pointer-events-none transition-transform duration-300 ease-out flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] p-3 shadow-md shadow-black/[0.04]"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px, 0)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#F4F7F4] border border-black/[0.06] flex items-center justify-center text-[#16A34A] shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black text-[#111111]">₹15K+ Starter</span>
          <span className="text-[10px] font-mono text-[#16A34A] font-semibold">
            Conversion +182%
          </span>
        </div>
      </div>
    </div>
  );
}
