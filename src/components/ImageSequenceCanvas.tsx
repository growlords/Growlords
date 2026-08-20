'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { audioEngine } from '@/utils/audioEngine';

interface ImageSequenceCanvasProps {
  scrollProgress: number; // 0 to 1
  totalFrames?: number;
}

const TOTAL_FRAMES = 240;
const NATIVE_WIDTH = 1920;
const NATIVE_HEIGHT = 1080;

export default function ImageSequenceCanvas({
  scrollProgress,
  totalFrames = TOTAL_FRAMES,
}: ImageSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedMapRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));

  const [loadedCount, setLoadedCount] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);

  // Animation interpolation state stored in refs to avoid React re-renders
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number | null>(null);
  const isRunningLoopRef = useRef<boolean>(false);

  // Format frame path
  const getFramePath = useCallback((index: number) => {
    const frameNum = String(index + 1).padStart(3, '0');
    return `/sequence/ezgif-frame-${frameNum}.jpg`;
  }, []);

  // Update target frame when scrollProgress changes
  useEffect(() => {
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    targetFrameRef.current = clampedProgress * (totalFrames - 1);
  }, [scrollProgress, totalFrames]);

  // Render a specific frame index on the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(totalFrames - 1, frameIndex));

    // Find requested frame or closest loaded neighbor
    let imgToDraw = isLoadedMapRef.current[clampedIndex] ? imagesRef.current[clampedIndex] : null;

    if (!imgToDraw) {
      // Search closest available loaded frame (nearest neighbor)
      for (let offset = 1; offset < totalFrames; offset++) {
        const prevIdx = clampedIndex - offset;
        const nextIdx = clampedIndex + offset;
        if (prevIdx >= 0 && isLoadedMapRef.current[prevIdx] && imagesRef.current[prevIdx]) {
          imgToDraw = imagesRef.current[prevIdx];
          break;
        }
        if (nextIdx < totalFrames && isLoadedMapRef.current[nextIdx] && imagesRef.current[nextIdx]) {
          imgToDraw = imagesRef.current[nextIdx];
          break;
        }
      }
    }

    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      return;
    }

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Aspect ratio "cover" math
    const imgRatio = NATIVE_WIDTH / NATIVE_HEIGHT;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;
    let drawX: number;
    let drawY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      drawX = 0;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clear background to frame edge color
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw the active frame
    ctx.drawImage(imgToDraw, drawX, drawY, drawWidth, drawHeight);

    // Trigger audio feedback on frame advancement
    if (lastDrawnFrameRef.current !== -1) {
      const delta = Math.abs(clampedIndex - lastDrawnFrameRef.current);
      if (delta > 0) {
        audioEngine.onFrameMotion(clampedIndex, delta);
      }
    }

    lastDrawnFrameRef.current = clampedIndex;
  }, [totalFrames]);

  // Main continuous requestAnimationFrame interpolation loop
  useEffect(() => {
    isRunningLoopRef.current = true;

    const tick = () => {
      if (!isRunningLoopRef.current) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      // Smooth exponential lerp toward target frame
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.22;
      } else {
        currentFrameRef.current = target;
      }

      const roundedFrame = Math.round(currentFrameRef.current);

      if (roundedFrame !== lastDrawnFrameRef.current) {
        drawFrame(roundedFrame);
      }

      animationFrameIdRef.current = requestAnimationFrame(tick);
    };

    animationFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunningLoopRef.current = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawFrame]);

  // Canvas Resize Handler
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for butter 60fps
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    }
  }, [drawFrame]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Optimized Progressive Image Preloading Pipeline
  useEffect(() => {
    let isCancelled = false;
    let count = 0;

    const onImageLoaded = (index: number, img: HTMLImageElement) => {
      if (isCancelled) return;
      isLoadedMapRef.current[index] = true;
      imagesRef.current[index] = img;
      count++;
      setLoadedCount(count);

      // Render Frame 0 immediately on first load
      if (index === 0 && lastDrawnFrameRef.current === -1) {
        drawFrame(0);
      }

      if (count >= 10 && !isInitialReady) {
        setIsInitialReady(true);
      }
    };

    // 1. Immediately load Frame 0
    const frame0 = new Image();
    frame0.src = getFramePath(0);
    if (frame0.decode) {
      frame0.decode().then(() => onImageLoaded(0, frame0)).catch(() => {
        frame0.onload = () => onImageLoaded(0, frame0);
      });
    } else {
      frame0.onload = () => onImageLoaded(0, frame0);
    }

    // 2. Load priority tier 1 (first 25 frames)
    for (let i = 1; i < Math.min(25, totalFrames); i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => onImageLoaded(i, img);
    }

    // 3. Progressively load remainder in small batches
    let currentBatchStart = 25;
    const batchSize = 15;

    const loadNextBatch = () => {
      if (isCancelled || currentBatchStart >= totalFrames) return;
      const end = Math.min(currentBatchStart + batchSize, totalFrames);
      for (let i = currentBatchStart; i < end; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => onImageLoaded(i, img);
      }
      currentBatchStart = end;
      if (currentBatchStart < totalFrames) {
        setTimeout(loadNextBatch, 60);
      }
    };

    const timer = setTimeout(loadNextBatch, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [totalFrames, getFramePath, drawFrame, isInitialReady]);

  const loadPercent = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center select-none">
      {/* Fullscreen HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ backgroundColor: '#050505' }}
      />

      {/* Subtle edge vignette for pure cinematic blending */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 65%, rgba(5,5,5,0.4) 90%, #050505 100%)',
        }}
      />

      {/* Ultra-Minimal Initial Loading Indicator (Disappears once ready) */}
      <div
        className={`absolute bottom-6 left-6 z-40 flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-[#0A0A0C]/80 backdrop-blur-md transition-opacity duration-700 pointer-events-none ${
          loadPercent >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C] animate-pulse" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">
          INITIALIZING {loadPercent}%
        </span>
        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B7FF3C] transition-all duration-150"
            style={{ width: `${loadPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
