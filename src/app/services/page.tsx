'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import CaseStudies from '@/components/CaseStudies';
import Subsidies from '@/components/Subsidies';
import ROI_Calculator from '@/components/ROI_Calculator';
import ContactSection from '@/components/ContactSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white pt-24">
      <Hero />

      <div className="h-[4px] bg-black" />

      <div id="problems">
        <Problems />
      </div>

      <div className="h-[4px] bg-black" />

      <div id="cases">
        <CaseStudies />
      </div>

      <div className="h-[4px] bg-black" />

      <div id="subsidies">
        <Subsidies />
      </div>

      <div className="h-[4px] bg-black" />

      <div id="roi">
        <ROI_Calculator />
      </div>

      <div className="h-[4px] bg-black" />

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
