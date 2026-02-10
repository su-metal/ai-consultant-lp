'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, CheckCircle2, ArrowRight, Coins } from 'lucide-react';

const Subsidies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-mono mb-6">
                        <Coins className="w-4 h-4 text-amber-500" />
                        PUBLIC SUPPORT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
                        <span className="text-white">公的な支援を味方に</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            賢い投資計画を
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        無理のない投資で、確実な成果を。<br className="hidden md:block" />
                        愛知県・国の補助金を活用し、貴社に最適な<span className="text-blue-400 font-medium">伴走型プラン</span>を共に立てます。
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* DX Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass-card p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

                        <div className="flex items-start gap-5 mb-8">
                            <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-800">
                                <Landmark className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white font-serif mb-1">あいちDX推進補助金</h3>
                                <p className="text-xs text-blue-300/80 font-mono tracking-wider">AICHI DX PROMOTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 rounded bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                                <span className="text-sm text-slate-400">補助上限額</span>
                                <span className="text-xl font-bold text-white font-mono">500<span className="text-sm font-sans ml-1">万円</span></span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                                <span className="text-sm text-slate-400">補助率</span>
                                <span className="text-xl font-bold text-white font-mono">2/3<span className="text-sm font-sans ml-1 text-slate-500">以内</span></span>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-700/50 pt-6">
                            AI導入による業務効率化、新ビジネス創出にかかる費用を大幅に圧縮。県内企業に特化した手厚い支援スキームです。
                        </p>
                    </motion.div>

                    {/* IT Introduction Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="glass-card p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400" />

                        <div className="flex items-start gap-5 mb-8">
                            <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-800">
                                <Landmark className="w-8 h-8 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white font-serif mb-1">IT導入補助金</h3>
                                <p className="text-xs text-amber-300/80 font-mono tracking-wider">IT INTRODUCTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 rounded bg-slate-800/50 border border-slate-700 group-hover:border-amber-500/30 transition-colors">
                                <span className="text-sm text-slate-400">ソフトウェア費</span>
                                <span className="text-xl font-bold text-white">対象</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded bg-slate-800/50 border border-slate-700 group-hover:border-amber-500/30 transition-colors">
                                <span className="text-sm text-slate-400">採択実績</span>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                                    <span className="text-white font-bold">多数</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-700/50 pt-6">
                            ツール導入費用の負担を軽減。申請手続きから実績報告まで、採択率を高めるためのノウハウを提供します。
                        </p>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 mb-4">補助金の申請サポートも行っております</p>
                    <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all">
                        補助金について相談する
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Subsidies;
