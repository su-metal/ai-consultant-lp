'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Landmark, CheckCircle2, ArrowRight, Coins } from 'lucide-react';

const Subsidies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-bold mb-6 border-b-4 border-r-4 border-slate-500">
                        <Coins className="w-4 h-4" />
                        PUBLIC SUPPORT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black uppercase">
                        公的な支援を味方に
                        <br />
                        <span className="bg-black text-white px-4 py-1 inline-block mt-2">
                            賢い投資計画を
                        </span>
                    </h2>
                    <p className="text-xl text-black max-w-2xl mx-auto font-bold leading-relaxed">
                        無理のない投資で、確実な成果を。<br className="hidden md:block" />
                        愛知県・国の補助金を活用し、貴社に最適な<span className="underline decoration-4">伴走型プラン</span>を共に立てます。
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* DX Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white border-4 border-black p-10 relative overflow-hidden group transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-4 bg-black text-white border-b-4 border-r-4 border-slate-500">
                                <Landmark className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-1 uppercase tracking-tighter">あいちDX推進補助金</h3>
                                <p className="text-xs text-black/40 font-black font-mono tracking-widest uppercase">AICHI DX PROMOTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-5 bg-black text-white border-b-4 border-slate-500">
                                <span className="text-sm font-black uppercase tracking-widest text-white/60">補助上限額</span>
                                <span className="text-2xl font-black font-mono">500<span className="text-sm font-sans ml-1">万円</span></span>
                            </div>
                            <div className="flex justify-between items-center p-5 bg-black text-white border-b-4 border-slate-500">
                                <span className="text-sm font-black uppercase tracking-widest text-white/60">補助率</span>
                                <span className="text-2xl font-black font-mono">2/3<span className="text-sm font-sans ml-1">以内</span></span>
                            </div>
                        </div>

                        <p className="text-black/80 font-bold leading-relaxed border-t-4 border-black pt-8">
                            AI導入による業務効率化、新ビジネス創出にかかる費用を大幅に圧縮。県内企業に特化した手厚い支援スキームです。
                        </p>
                    </motion.div>

                    {/* IT Introduction Subsidy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white border-4 border-black p-10 relative overflow-hidden group transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-4 bg-black text-white border-b-4 border-r-4 border-slate-500">
                                <Landmark className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-1 uppercase tracking-tighter">IT導入補助金</h3>
                                <p className="text-xs text-black/40 font-black font-mono tracking-widest uppercase">IT INTRODUCTION</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-5 bg-black text-white border-b-4 border-slate-500">
                                <span className="text-sm font-black uppercase tracking-widest text-white/60">ソフトウェア費</span>
                                <span className="text-2xl font-black">対象</span>
                            </div>
                            <div className="flex justify-between items-center p-5 bg-black text-white border-b-4 border-slate-500">
                                <span className="text-sm font-black uppercase tracking-widest text-white/60">採択実績</span>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                    <span className="text-2xl font-black">多数</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-black/80 font-bold leading-relaxed border-t-4 border-black pt-8">
                            ツール導入費用の負担を軽減。申請手続きから実績報告まで、採択率を高めるためのノウハウを提供します。
                        </p>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-black/60 mb-6 font-black uppercase tracking-widest text-sm">補助金の申請サポートも行っております</p>
                    <button className="group relative px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider border-b-4 border-r-4 border-slate-500 hover:translate-x-1 hover:translate-y-1 hover:border-b-0 hover:border-r-0 transition-all flex items-center gap-3 mx-auto">
                        補助金について相談する
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Subsidies;
