'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, Zap } from 'lucide-react';

const SubsidyBanner = () => {
    return (
        <section className="py-6 md:py-12 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto modern-card p-6 md:p-10 relative overflow-hidden group border-t-4 border-t-amber-500"
                >
                    {/* グラデーション背景（超薄め） */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/20 to-rose-50/10 pointer-events-none" />

                    {/* 装飾用円形 */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative p-2 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 z-10">
                        {/* テキストコンテンツ */}
                        <div className="flex-1 text-center md:text-left text-slate-900">
                            <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-6 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-bold tracking-widest uppercase shadow-sm">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span>Cost Reduction</span>
                            </div>

                            <h3 className="text-[clamp(1.9rem,3.8vw,3.1rem)] font-bold mb-5 leading-[1.12] tracking-[-0.02em]">
                                補助金活用で、AI導入の<br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 border-b-[3px] border-amber-200 pb-1">コスト不安を払拭</span>します。
                            </h3>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg border border-amber-100 shadow-sm text-slate-700">
                                    <Landmark className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm font-bold tracking-wide">あいちDX推進補助金</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg border border-amber-100 shadow-sm text-slate-700">
                                    <Landmark className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm font-bold tracking-wide">IT導入補助金</span>
                                </div>
                            </div>
                        </div>

                        {/* アクションボタン */}
                        <div className="shrink-0 w-full md:w-auto mt-6 md:mt-0">
                            <Link href="/services#subsidies" className="group/btn flex items-center justify-center w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                                補助金支援の詳細へ
                                <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubsidyBanner;
