'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DeepTechSection() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden flex flex-col items-center justify-center">

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

            {/* Simulated Custom Network Nodes Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex justify-center items-center">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Abstract connecting lines */}
                    <g stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" fill="none">
                        <path d="M 20% 80% Q 30% 50% 50% 50% T 80% 20%" />
                        <path d="M 20% 20% Q 40% 40% 50% 50% T 80% 80%" />
                        <path d="M 10% 50% Q 30% 70% 50% 50% T 90% 50%" />
                    </g>

                    {/* Nodes */}
                    <circle cx="20%" cy="80%" r="4" fill="#60a5fa" />
                    <circle cx="80%" cy="20%" r="4" fill="#60a5fa" />
                    <circle cx="20%" cy="20%" r="4" fill="#c084fc" />
                    <circle cx="80%" cy="80%" r="4" fill="#c084fc" />
                    <circle cx="50%" cy="50%" r="6" fill="#f472b6">
                        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="10%" cy="50%" r="3" fill="#38bdf8" />
                    <circle cx="90%" cy="50%" r="3" fill="#38bdf8" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 max-w-fit mx-auto border border-blue-100 text-blue-600 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm"
                >
                    <Network className="w-4 h-4" />
                    AIがもたらす変化
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6"
                >
                    日々の業務がもっと<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">スムーズで快適に</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-medium mb-10 leading-relaxed"
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
                    <Link href="/services" className="px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
                        サービスを見る
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Status Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-6 md:gap-12 opacity-90 max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-3">
                        <Database className="w-6 h-6 text-blue-500" />
                        <div className="text-left">
                            <div className="text-slate-900 font-bold text-xl">社内ルール</div>
                            <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">を自動でチェック</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-purple-500" />
                        <div className="text-left">
                            <div className="text-slate-900 font-bold text-xl">情報探し</div>
                            <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">がチャットで終わる</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Network className="w-6 h-6 text-emerald-500" />
                        <div className="text-left">
                            <div className="text-slate-900 font-bold text-xl">定型文作成</div>
                            <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">を一瞬で完了</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
