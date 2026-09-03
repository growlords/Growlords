"use client";

import React, { useState } from "react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const whatsappNumber = "919460740836";
  const defaultMessage =
    "Hi Growlords, I'm interested in your digital marketing services. I'd like to discuss my project.";
  const encodedUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center group select-none">
      {/* Tooltip on Desktop */}
      <div
        className={`hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-md text-xs font-semibold text-[#111111] transition-all duration-200 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp with Growlords (+91 9460740836)"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}
