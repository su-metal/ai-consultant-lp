import React from 'react';
import type { Metadata } from 'next';
import RichHero from '@/components/RichHero';
import SubsidyBanner from '@/components/SubsidyBanner';
import MissionSection from '@/components/MissionSection';
import BentoFeatures from '@/components/BentoFeatures';
import DeepTechSection from '@/components/DeepTechSection';
import FounderProfile from '@/components/FounderProfile';
import RecentBlogs from '@/components/RecentBlogs';
import FreeResourceBanner from '@/components/FreeResourceBanner';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
    title: '豊橋のAI導入・AIコンサルティング',
    description: '豊橋でAI導入を検討する中小企業向けに、生成AI活用支援、AIコンサルティング、チャットボット作成、業務効率化アプリ開発を提供。豊橋・東三河の現場に合わせて導入から定着まで伴走します。',
    alternates: {
        canonical: 'https://machinami-ai.com',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'まちなみ AI',
    url: 'https://machinami-ai.com',
    areaServed: ['豊橋市', '豊川市', '蒲郡市', '田原市', '新城市', '東三河'],
    serviceType: ['AI導入支援', 'AIコンサルティング', '生成AI活用支援', 'チャットボット作成', '業務効率化アプリ開発'],
    description: '豊橋・東三河の中小企業向けにAI導入支援とAIコンサルティングを提供するサービス。',
};

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
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

            <div className="section-divider opacity-30 my-0 bg-slate-100" />

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
