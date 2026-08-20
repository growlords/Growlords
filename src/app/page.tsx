'use client';

import React, { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import ScrollStory from '@/components/ScrollStory';
import StrategySection from '@/components/StrategySection';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import GrowthAnalytics from '@/components/GrowthAnalytics';
import WhyGrowlords from '@/components/WhyGrowlords';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import SoundControl from '@/components/SoundControl';

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleOpenProjectModal = () => setIsProjectModalOpen(true);
  const handleCloseProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="relative w-full max-w-[100vw] min-h-screen bg-[#050505] text-white selection:bg-[#B7FF3C] selection:text-[#050505] overflow-x-clip">
      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Luxury Minimalist Navbar */}
      <Navbar onOpenProjectModal={handleOpenProjectModal} />

      {/* Main Document Flow */}
      <main className="relative w-full max-w-full overflow-x-clip">
        {/* 1. Hero / 240-Frame Sticky Canvas Animation Section */}
        <ScrollStory onOpenProjectModal={handleOpenProjectModal} />

        {/* 2. Strategic Positioning Bridge (Connects smoothly right after Canvas releases) */}
        <StrategySection />

        {/* 3. Services & Capabilities */}
        <Services onOpenProjectModal={handleOpenProjectModal} />

        {/* 4. Case Studies & Proven Results */}
        <CaseStudies onOpenProjectModal={handleOpenProjectModal} />

        {/* 5. Live Growth Telemetry & Analytics Visualizer */}
        <GrowthAnalytics />

        {/* 6. Why Growlords - 4 Core Principles */}
        <WhyGrowlords />

        {/* 7. Editorial Agency Manifesto */}
        <About onOpenProjectModal={handleOpenProjectModal} />

        {/* 8. Final High-Impact Conversion Section */}
        <FinalCTA onOpenProjectModal={handleOpenProjectModal} />
      </main>

      {/* 9. Minimalist Editorial Footer */}
      <Footer onOpenProjectModal={handleOpenProjectModal} />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
      />

      {/* Non-intrusive Futuristic Sci-Fi Audio Control (Bottom-Right) */}
      <SoundControl />
    </div>
  );
}
