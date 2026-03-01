import React from 'react';
import RichHero from '@/components/RichHero';
import SubsidyBanner from '@/components/SubsidyBanner';
import MissionSection from '@/components/MissionSection';
import BentoFeatures from '@/components/BentoFeatures';
import DeepTechSection from '@/components/DeepTechSection';
import FounderProfile from '@/components/FounderProfile';
import RecentBlogs from '@/components/RecentBlogs';
import FreeResourceBanner from '@/components/FreeResourceBanner';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            {/* 1. Rich Modern Hero Section */}
            <RichHero />

            {/* 2. Subsidy Banner (Cost Relief) */}
            <SubsidyBanner />

            {/* 3. Mission Section (Empathy & Local Focus) */}
            <MissionSection />

            {/* 4. Features Grid (Bento Style) */}
            <BentoFeatures />

            {/* 5. Deep Tech / Architecture Section */}
            <DeepTechSection />

            <div className="section-divider my-0 bg-black h-[4px]" />

            {/* 6. Founder Profile */}
            <FounderProfile />

            {/* 7. Recent Blogs */}
            <RecentBlogs />

            {/* 8. CTA to Free resources */}
            <FreeResourceBanner />

            {/* 9. Contact Section */}
            <div id="contact" className="scroll-mt-20">
                <ContactSection />
            </div>
        </main>
    );
}
