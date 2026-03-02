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
    <main className="min-h-screen bg-[var(--navy)] font-sans selection:bg-blue-900 selection:text-amber-200">
      <Hero />

      <div className="section-divider opacity-30" />

      <div id="problems">
        <Problems />
      </div>

      <div className="section-divider opacity-30" />

      <div id="cases">
        <CaseStudies />
      </div>

      <div className="section-divider opacity-30" />

      <div id="subsidies">
        <Subsidies />
      </div>

      <div className="section-divider opacity-30" />

      <div id="roi">
        <ROI_Calculator />
      </div>

      <div className="section-divider opacity-30" />

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
