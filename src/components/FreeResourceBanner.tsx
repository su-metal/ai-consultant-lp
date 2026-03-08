'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowRight, BookOpenText, CheckCircle2, Sparkles } from 'lucide-react';

export default function FreeResourceBanner() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto rounded-[2.5rem] bg-slate-950 p-1 md:p-1.5 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] group"
                >
                    {/* --- Background Effects (Optimized for Mobile) --- */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/* Static base for mobile performance */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 opacity-95" />

                        {/* Animated orbs - Only active on Desktop for performance */}
                        <div className="hidden md:block absolute inset-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, 30, 0],
                                    y: [0, -20, 0],
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    x: [0, -40, 0],
                                    y: [0, 30, 0],
                                }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]"
                            />
                        </div>

                        {/* Glass Mesh Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_40%)]" />
                        <div className="absolute inset-0 backdrop-blur-3xl md:backdrop-blur-none" />
                    </div>

                    <div className="relative z-10 bg-slate-950/40 rounded-[2.3rem] p-8 md:p-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            {/* Premium Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 shadow-inner"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="w-3.5 h-3.5" />
                                </motion.div>
                                Free Strategic Resource
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-[clamp(2.4rem,5vw,4rem)] font-black mb-6 leading-[1.05] tracking-tight text-white drop-shadow-2xl">
                                <span className="inline-block bg-white text-slate-950 px-2 py-0.5 mb-2">
                                    自社に最適なAIを
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-300">
                                    30分で可視化する。
                                </span>
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-slate-400 mb-10 max-w-2xl text-lg md:text-xl leading-relaxed">
                                議論だけで終わらせない。「AIで具体的に何が変わり、どれほどの利益が出るか」を、専門家の視点で無料診断いたします。
                            </motion.p>

                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                                {[
                                    { icon: BookOpenText, text: "独自開発の診断メソッド", sub: "再現性の高い導入フロー" },
                                    { icon: CheckCircle2, text: "ROI（投資対効果）の試算", sub: "導入可否を数値で判断" }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/item">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-transform">
                                            <feature.icon size={20} />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-bold text-sm tracking-wide">{feature.text}</div>
                                            <div className="text-slate-500 text-xs mt-0.5">{feature.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* CTA Card Card */}
                        <motion.div
                            variants={itemVariants}
                            className="shrink-0 w-full lg:w-[380px] relative mt-4 lg:mt-0"
                        >
                            <div className="relative group/cta p-8 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:shadow-none md:bg-white/95 md:backdrop-blur-xl md:border md:border-white/20 overflow-hidden text-center lg:text-left">
                                {/* Inner glow animation for CTA - Hidden on Mobile */}
                                <div className="hidden md:block absolute -inset-[100%] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent group-hover/cta:animate-shimmer pointer-events-none" />

                                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                                        <ArrowRight className="w-7 h-7 group-hover/cta:translate-x-1.5 transition-transform" />
                                    </div>
                                    <h3 className="text-slate-900 text-2xl font-black mb-3 leading-tight uppercase tracking-tight">
                                        無料個別診断<br />
                                        <span>予約受付中</span>
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                                        月間3社限定。東三河の企業様は<br />
                                        オフラインでの対面相談も可能です。
                                    </p>

                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/20"
                                    >
                                        今すぐ予約する
                                    </button>
                                </div>
                            </div>

                            {/* Floating decorative elements - Only on Desktop */}
                            <div className="hidden lg:block absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                            <div className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-bounce-slow" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        </section>
    );
}
