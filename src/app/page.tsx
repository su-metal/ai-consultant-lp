'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, ChevronRight, Zap, Code, Globe, User, Mail, MapPin } from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import ContactSection from '@/components/ContactSection'; // Using the styled contact section

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            <HomeHero />

            <div className="section-divider opacity-30" />

            {/* Introduction Section - Styled like Services Page */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-blue-600 text-sm font-medium mb-6 shadow-sm"
                        >
                            <User className="w-4 h-4 text-blue-500" />
                            WHO WE ARE
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-tight">
                            AIコンサルタント <span className="text-slate-300 mx-2 font-light">×</span> 個人開発者
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            東三河を拠点に、最新の生成AI技術を活用した業務改革コンサルティングと、<br className="hidden md:block" />
                            使いやすさを追求したWebアプリケーション開発を行っています。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Service Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="modern-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Bot className="w-32 h-32 text-blue-600" />
                            </div>

                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-sm border border-blue-100">
                                <Zap className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-slate-900">AI Consulting</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                ChatGPTやClaudeなどの生成AI導入支援、社内研修、業務フローの自動化まで。<br />
                                「何から始めればいいかわからない」を解決します。
                            </p>

                            <Link href="/services" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all group-hover:text-blue-700">
                                サービス詳細を見る <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>

                        {/* Works Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="modern-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Code className="w-32 h-32 text-indigo-600" />
                            </div>

                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform shadow-sm border border-indigo-100">
                                <Globe className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-slate-900">App Development</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                Next.jsを中心としたモダンな技術選定で、高速かつ使いやすいWebアプリを開発。<br />
                                MVP開発から本格運用までサポートします。
                            </p>

                            <Link href="/works" className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all group-hover:text-indigo-700">
                                開発実績を見る <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="section-divider opacity-30" />

            {/* Profile Snippet */}
            <section className="py-16 md:py-24 bg-slate-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                        {/* Blob decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="shrink-0 relative z-10">
                            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                                    {/* Icon Placeholder */}
                                    <Bot className="w-16 h-16 text-slate-300" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-md">
                                HUMAN
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-1 relative z-10">
                            <div className="mb-2 text-blue-600 font-bold tracking-wide text-sm uppercase">About Me</div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                                佐田 真教 <span className="text-lg font-normal text-slate-500 ml-2">Masanori Sada</span>
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                愛知県豊橋市在住。地元・東三河の企業様を、AIとシステム開発の両面でお手伝いします。「難しい技術を、誰でも使える形に」。現場ですぐに役に立つ、成果につながる仕組みづくりを大切にしています。
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">#AI活用</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">#アプリ開発</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">#業務効率化</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider opacity-30" />

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
