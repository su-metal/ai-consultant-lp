'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Landmark, Zap } from 'lucide-react';

const SubsidyBanner = () => {
    return (
        <section className="py-6 md:py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto modern-card p-6 md:p-10 relative overflow-hidden group border-4 border-black bg-white"
                >
                    <div className="relative p-2 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 z-10">
                        {/* テキストコンテンツ */}
                        <div className="flex-1 text-center md:text-left text-black">
                            <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-6 px-4 py-1.5 border-2 border-black bg-black text-white text-xs font-black tracking-widest uppercase">
                                <Zap className="w-4 h-4 fill-white" />
                                <span>Cost Reduction</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">
                                補助金活用で、AI導入の<br className="hidden md:block" />
                                <span className="bg-black text-white px-2">コスト不安を払拭</span>します。
                            </h3>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-black shadow-sm text-black">
                                    <Landmark className="w-4 h-4" />
                                    <span className="text-sm font-black tracking-wide">あいちDX推進補助金</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-black shadow-sm text-black">
                                    <Landmark className="w-4 h-4" />
                                    <span className="text-sm font-black tracking-wide">IT導入補助金</span>
                                </div>
                            </div>
                        </div>

                        {/* アクションボタン */}
                        <div className="shrink-0 w-full md:w-auto mt-6 md:mt-0">
                            <Link href="/services#subsidies" className="btn-primary flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg">
                                補助金支援の詳細へ
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubsidyBanner;
