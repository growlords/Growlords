"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check touch device or reduced motion
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest('[role="button"]') ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Spring trailing follower
    const loop = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#16A34A] transition-transform duration-75 ease-out shadow-sm"
        style={{
          width: isHovered ? "8px" : "6px",
          height: isHovered ? "8px" : "6px",
          transform: `translate3d(${pos.x - (isHovered ? 4 : 3)}px, ${
            pos.y - (isHovered ? 4 : 3)
          }px, 0)`,
        }}
      />
      {/* Spring outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          width: isHovered ? "44px" : "28px",
          height: isHovered ? "44px" : "28px",
          borderColor: isHovered ? "rgba(22, 163, 74, 0.6)" : "rgba(17, 17, 17, 0.15)",
          backgroundColor: isHovered ? "rgba(22, 163, 74, 0.06)" : "transparent",
          transform: `translate3d(${trailingPos.x - (isHovered ? 22 : 14)}px, ${
            trailingPos.y - (isHovered ? 22 : 14)
          }px, 0)`,
        }}
      />
    </>
  );
}
