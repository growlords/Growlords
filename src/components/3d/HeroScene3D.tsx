"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Detect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Screen width check
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Setup Three.js scene for Light Digital Art Installation
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = isMobile ? 8.5 : 7.2;

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

    // Studio Lighting for Light Theme
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const greenFillLight = new THREE.PointLight(0x16a34a, 2.5, 12);
    greenFillLight.position.set(-4, -2, 3);
    scene.add(greenFillLight);

    const softBackLight = new THREE.DirectionalLight(0xe2e8f0, 0.8);
    softBackLight.position.set(0, -5, -4);
    scene.add(softBackLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Translucent Frosted Glass Core (Digital Sculpture)
    const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 1.05 : 1.3, 1);
    
    // Translucent glass faceted mesh
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.75,
      opacity: 0.9,
      transparent: true,
      roughness: 0.25,
      metalness: 0.05,
      ior: 1.45,
    });
    const glassMesh = new THREE.Mesh(coreGeo, glassMat);
    masterGroup.add(glassMesh);

    // Subtle emerald wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x16a34a,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    masterGroup.add(wireMesh);

    // Inner glowing growth nucleus
    const nucleusGeo = new THREE.SphereGeometry(isMobile ? 0.45 : 0.6, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.55,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    masterGroup.add(nucleusMesh);

    // 2. Sculptural Minimalist Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(isMobile ? 1.6 : 2.1, 0.012, 12, 80);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.2,
      metalness: 0.4,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3.2;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(isMobile ? 1.9 : 2.4, 0.009, 12, 80);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.x = -Math.PI / 5;
    masterGroup.add(ring2);

    // 3. Floating Light Glass UI Panels / Growth Graph Plates
    const cardGroup = new THREE.Group();
    masterGroup.add(cardGroup);

    const cardGeo = new THREE.BoxGeometry(0.65, 0.42, 0.02);
    const cardMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.05,
      transparent: true,
      opacity: 0.9,
    });

    const cardPositions = [
      { x: 1.9, y: 1.0, z: 0.4, rx: 0.15, ry: -0.3 },
      { x: -1.8, y: -0.7, z: 0.6, rx: -0.15, ry: 0.35 },
      { x: -1.5, y: 1.4, z: -0.4, rx: 0.2, ry: 0.2 },
      { x: 1.7, y: -1.1, z: -0.2, rx: -0.2, ry: -0.15 },
    ];

    const cards: THREE.Mesh[] = [];
    cardPositions.forEach((pos) => {
      const card = new THREE.Mesh(cardGeo, cardMat);
      card.position.set(pos.x, pos.y, pos.z);
      card.rotation.set(pos.rx, pos.ry, 0);
      cardGroup.add(card);
      cards.push(card);
    });

    // 4. Subtle, Elegant Floating Sparkles (Not aggressive cyberpunk particles)
    const particleCount = isMobile ? 80 : isTablet ? 140 : 200;
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
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * 0.5;
      targetY = relY * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
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

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Base subtle rotation
        masterGroup.rotation.y = elapsedTime * 0.08 + mouseX;
        masterGroup.rotation.x = mouseY * 0.4;

        // Individual core breathing
        glassMesh.rotation.x = elapsedTime * 0.12;
        glassMesh.rotation.y = elapsedTime * 0.15;
        wireMesh.rotation.x = elapsedTime * 0.12;
        wireMesh.rotation.y = elapsedTime * 0.15;

        ring1.rotation.z = elapsedTime * 0.2;
        ring2.rotation.z = -elapsedTime * 0.15;

        const pulseScale = 1 + Math.sin(elapsedTime * 1.2) * 0.035;
        nucleusMesh.scale.set(pulseScale, pulseScale, pulseScale);

        // Floating cards subtle bobbing
        cards.forEach((card, idx) => {
          card.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.0015;
        });

        particles.rotation.y = -elapsedTime * 0.025;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources
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
      className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}
