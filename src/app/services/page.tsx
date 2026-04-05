import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, MessageSquareText, Sparkles, Globe } from 'lucide-react';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import CaseStudies from '@/components/CaseStudies';
import Subsidies from '@/components/Subsidies';
import ROI_Calculator from '@/components/ROI_Calculator';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'AI導入支援・サービス一覧 | まちなみ AI',
  description: 'AI導入支援、生成AIコンサルティング、チャットボット作成、補助金活用、業務効率化アプリ開発、AIウェブ制作を提供するサービス一覧です。',
  alternates: {
    canonical: 'https://machinami-ai.com/services',
  },
};

const services = [
  {
    icon: Sparkles,
    title: '生成AIコンサルティング',
    description: '導入方針の整理、活用テーマの選定、社内ルール設計、研修まで一気通貫で支援します。',
    points: ['AI導入方針の整理', '生成AI活用研修', '業務フロー改善'],
    href: '/contact',
    cta: '無料相談をする',
  },
  {
    icon: MessageSquareText,
    title: 'チャットボット作成',
    description: '問い合わせ対応、予約受付、社内ヘルプデスク、資料案内などに使えるチャットボットを設計・構築します。',
    points: ['Webサイト埋め込み', 'LINE連携や社内向け対応', 'FAQ/RAG連携'],
    href: '/services/chatbot',
    cta: '詳細を見る',
  },
  {
    icon: Globe,
    title: 'AIエージェントで作るウェブ制作',
    description: 'AIエージェントが設計・開発を担い、チャットボット付きで納品。WordPressなし、短納期・低コストで本格サイトを構築します。',
    points: ['コーポレートサイト＋チャットボットセット', 'AIエージェントによる高速開発', 'WP不使用・保守コスト削減'],
    href: '/services/website',
    cta: '詳細を見る',
  },
  {
    icon: Bot,
    title: '業務特化アプリ開発',
    description: '既製品では合わない現場向けに、AI連携を含む専用アプリや業務ツールをオーダーメイドで開発します。',
    points: ['受発注・顧客管理', 'OCRや自動入力', '段階導入にも対応'],
    href: '/works',
    cta: '事例を見る',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--navy)] font-sans selection:bg-blue-900 selection:text-amber-200">
      <Hero />

      <div className="section-divider opacity-30" />

      <section className="py-16 md:py-24 bg-slate-50 text-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Service Lineup</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
              現場に合わせて選べる
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                提供サービス
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              まちなみ AI では、AI導入の相談だけでなく、実際に動く仕組みの構築まで対応します。
              特にチャットボット作成やAIによるウェブ制作は、DXの第一歩として直結しやすい領域です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="bg-white rounded-[2rem] p-7 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 text-sm font-medium text-slate-700 mb-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-500 transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
