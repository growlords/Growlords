'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audioEngine } from '@/utils/audioEngine';

export default function SoundControl() {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleSound = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAudioActive) {
      const success = await audioEngine.enable();
      if (success) {
        setIsAudioActive(true);
      }
    } else {
      await audioEngine.disable();
      setIsAudioActive(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <button
        onClick={toggleSound}
        type="button"
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border backdrop-blur-xl text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
          !isAudioActive
            ? 'border-white/10 bg-[#0A0A0C]/85 text-white/50 hover:text-white hover:border-white/30'
            : 'border-[#B7FF3C]/40 bg-[#111114]/90 text-[#B7FF3C] shadow-[0_0_15px_rgba(183,255,60,0.25)]'
        }`}
        aria-label={isAudioActive ? 'Mute audio' : 'Enable audio'}
      >
        {!isAudioActive ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
            <span className="text-[10px] text-white/60">AUDIO OFF</span>
          </>
        ) : (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-2 bg-[#B7FF3C] animate-pulse" />
              <span className="w-0.5 h-3 bg-[#B7FF3C] animate-pulse" style={{ animationDelay: '0.15s' }} />
              <span className="w-0.5 h-1.5 bg-[#B7FF3C] animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
            <Volume2 className="w-3.5 h-3.5 text-[#B7FF3C]" />
            <span className="text-[10px] font-bold text-[#B7FF3C]">AUDIO ON</span>
          </>
        )}
      </button>
    </div>
  );
}
