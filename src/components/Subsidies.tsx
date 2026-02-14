'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, CheckCircle2, ArrowRight, Coins } from 'lucide-react';

const Subsidies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 mix-blend-multiply" />
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-amber-600 text-sm font-medium mb-6 shadow-sm">
                        <Coins className="w-4 h-4 text-amber-500" />
                        PUBLIC SUPPORT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        <span className="">公的な支援を味方に</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                            賢い投資計画を
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        無理のない投資で、確実な成果を。<br className="hidden md:block" />
                        愛知県・国の補助金を活用し、貴社に最適な<span className="text-blue-600 font-bold">伴走型プラン</span>を共に立てます。
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* DX Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="modern-card p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />

                        <div className="flex items-start gap-5 mb-8">
                            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 px-4">
                                <Landmark className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">あいちDX推進補助金</h3>
                                <p className="text-xs text-blue-500 font-mono tracking-wider font-semibold">AICHI DX PROMOTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-colors">
                                <span className="text-sm text-slate-500 font-medium">補助上限額</span>
                                <span className="text-xl font-bold text-slate-900 font-mono">500<span className="text-sm font-sans ml-1 text-slate-500">万円</span></span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-colors">
                                <span className="text-sm text-slate-500 font-medium">補助率</span>
                                <span className="text-xl font-bold text-slate-900 font-mono">2/3<span className="text-sm font-sans ml-1 text-slate-500">以内</span></span>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                            AI導入による業務効率化、新ビジネス創出にかかる費用を大幅に圧縮。県内企業に特化した手厚い支援スキームです。
                        </p>
                    </motion.div>

                    {/* IT Introduction Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="modern-card p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />

                        <div className="flex items-start gap-5 mb-8">
                            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 px-4">
                                <Landmark className="w-8 h-8 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">IT導入補助金</h3>
                                <p className="text-xs text-amber-600 font-mono tracking-wider font-semibold">IT INTRODUCTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-amber-200 transition-colors">
                                <span className="text-sm text-slate-500 font-medium">ソフトウェア費</span>
                                <span className="text-xl font-bold text-slate-900">対象</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-amber-200 transition-colors">
                                <span className="text-sm text-slate-500 font-medium">採択実績</span>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span className="text-slate-900 font-bold">多数</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
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
                    <p className="text-slate-500 mb-4 font-medium">補助金の申請サポートも行っております</p>
                    <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 font-bold hover:bg-indigo-100 hover:border-indigo-300 transition-all shadow-sm">
                        補助金について相談する
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Subsidies;
