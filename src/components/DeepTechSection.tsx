'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DeepTechSection() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden flex flex-col items-center justify-center border-b-4 border-black">

            {/* Background Effects - Monochrome */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 w-full h-[2px] bg-black" />

            {/* Simulated Custom Network Nodes Background - Monochrome */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden flex justify-center items-center">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Abstract connecting lines */}
                    <g stroke="black" strokeWidth="2" fill="none">
                        <path d="M 20% 80% Q 30% 50% 50% 50% T 80% 20%" />
                        <path d="M 20% 20% Q 40% 40% 50% 50% T 80% 80%" />
                    </g>

                    {/* Nodes */}
                    <circle cx="20%" cy="80%" r="6" fill="black" />
                    <circle cx="80%" cy="20%" r="6" fill="black" />
                    <circle cx="20%" cy="20%" r="6" fill="black" />
                    <circle cx="80%" cy="80%" r="6" fill="black" />
                    <circle cx="50%" cy="50%" r="10" fill="black">
                        <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white border-4 border-black text-sm font-black tracking-widest uppercase mb-10 shadow-lg"
                >
                    <Network className="w-4 h-4" />
                    AIがもたらす変化
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-8 uppercase"
                >
                    日々の業務がもっと<br className="hidden md:block" />
                    <span className="bg-black text-white px-6 pb-2 inline-block">スムーズで快適に</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-black max-w-3xl mx-auto font-bold mb-12 leading-relaxed"
                >
                    「こんな作業、自動化できたらいいのに」を叶えます。AIを現場に導入することで、面倒な手作業を減らし、働きやすい環境づくりをサポートします。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/services" className="btn-primary w-full sm:w-auto uppercase tracking-widest px-10 py-5 text-xl flex items-center gap-3">
                        View Services
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </motion.div>

                {/* Status Badges - Monochrome Bold */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 pt-12 border-t-4 border-black flex flex-wrap justify-center gap-8 md:gap-16 max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                            <Database className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="text-black font-black text-2xl tracking-tight">社内ルール</div>
                            <div className="text-black/60 text-xs font-black uppercase tracking-widest">を自動でチェック</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="text-black font-black text-2xl tracking-tight">情報探し</div>
                            <div className="text-black/60 text-xs font-black uppercase tracking-widest">がチャットで終わる</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black">
                            <Network className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="text-black font-black text-2xl tracking-tight">定型文作成</div>
                            <div className="text-black/60 text-xs font-black uppercase tracking-widest">を一瞬で完了</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
