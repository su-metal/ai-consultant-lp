'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Zap, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BentoFeatures() {
    return (
        <section className="py-20 bg-white relative overflow-hidden border-b-4 border-black">
            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter mb-6 uppercase">
                        AI活用とシステム開発で<br className="md:hidden" />
                        <span className="bg-black text-white px-4 pb-1">ビジネスの課題を解決</span>
                    </h2>
                    <p className="text-lg text-black max-w-2xl mx-auto font-bold leading-relaxed">
                        「手作業が多くて時間が足りない」「もっと効率よく仕事を進めたい」といった現場の悩みを、AIの力と使いやすいアプリ開発で解決します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* --- Card 1: AI Consulting (Large, Bold Monochrome) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        whileHover={{ y: -10, rotateX: 2, rotateY: -2, transition: { duration: 0.3 } }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="md:col-span-2 bg-white border-4 border-black p-8 sm:p-10 relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>
                            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-10 border-2 border-black group-hover:scale-110 transition-transform">
                                <Bot className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-black mb-4">生成AIコンサルティング</h3>
                            <p className="text-black mb-8 max-w-md leading-relaxed font-bold">
                                ChatGPTやClaudeなどの最新LLMを活用し、社内業務の自動化から新規事業の創出まで、御社に最適なAI活用戦略を立案・伴走します。
                            </p>

                            <div className="mt-auto pt-8 border-t-2 border-black grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                    <div className="w-3 h-3 bg-black" />
                                    <span className="text-sm font-black text-black uppercase tracking-tight">プロンプト設計</span>
                                </div>
                                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform delay-75">
                                    <div className="w-3 h-3 bg-black" />
                                    <span className="text-sm font-black text-black uppercase tracking-tight">社内研修</span>
                                </div>
                                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform delay-100">
                                    <div className="w-3 h-3 bg-black" />
                                    <span className="text-sm font-black text-black uppercase tracking-tight">RAG構築支援</span>
                                </div>
                                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform delay-150">
                                    <div className="w-3 h-3 bg-black" />
                                    <span className="text-sm font-black text-black uppercase tracking-tight">AIエージェント</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 2: App Dev (Small, Solid black) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                        whileHover={{ y: -10, rotateX: 2, rotateY: 2, transition: { duration: 0.3 } }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="md:col-span-1 bg-black text-white border-4 border-black p-8 relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,0.4)] transition-all"
                    >
                        <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>
                            <div className="w-14 h-14 bg-white text-black flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                                <Code className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black mb-4 !text-white">モダンWeb開発</h3>
                            <p className="text-white opacity-90 text-sm leading-relaxed mb-8 font-bold">
                                Next.js, Reactを活用した高速でセキュアなアプリケーション開発。MVPから本格運用までスケーラブルに対応。
                            </p>

                            <div className="mt-auto space-y-4">
                                <div className="h-2 w-full bg-white/20 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "90%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-white transition-all"
                                    />
                                </div>
                                <div className="h-2 w-full bg-white/20 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        transition={{ duration: 1.5, delay: 0.7 }}
                                        className="h-full bg-white transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 3: Performance (Small, White w/ black border) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        whileHover={{ y: -10, rotateX: -2, rotateY: -2, transition: { duration: 0.3 } }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="md:col-span-1 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        <div style={{ transform: "translateZ(20px)" }}>
                            <div className="w-14 h-14 bg-white text-black border-2 border-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-black mb-4">ムダな時間を削減して<br />本来の業務に集中</h3>
                            <p className="text-black text-sm leading-relaxed mb-6 font-bold">
                                AIを活用して面倒なルーチンワークや確認作業を自動化。業務のスピードを上げ、より重要な仕事に専念できる環境を作ります。
                            </p>
                            <div className="flex items-end gap-2 text-black">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-5xl font-black"
                                >
                                    AI
                                </motion.span>
                                <span className="text-sm font-black pb-1 opacity-50 uppercase">Efficiency</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 4: Support / Architecture (Large, White w/ black border) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        whileHover={{ y: -10, rotateX: -2, rotateY: 2, transition: { duration: 0.3 } }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="md:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden flex flex-col md:flex-row group"
                    >
                        {/* Text Content */}
                        <div className="p-8 md:p-10 relative z-10 w-full md:w-1/2 flex flex-col justify-center" style={{ transform: "translateZ(20px)" }}>
                            <div className="w-14 h-14 bg-black text-white flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-black mb-4">初めてのAIでも<br />安心・安全に使える</h3>
                            <p className="text-black text-sm leading-relaxed mb-8 font-bold">
                                「AIで何ができるかわからない」という状態からでも丁寧にサポートします。機密情報の漏洩を防ぐセキュリティを考慮し、御社専用の社内AIや業務アプリを安全に構築します。
                            </p>
                            <Link href="/services" className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest border-b-2 border-black hover:pb-1 transition-all w-fit">
                                View Details
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                        </div>

                        {/* Visual Content (AI Chat Interface Mockup - Monochrome) */}
                        <div className="w-full md:w-1/2 p-8 bg-black border-l-4 border-black relative overflow-hidden flex items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-sm leading-relaxed text-black bg-white p-6 border-2 border-white shadow-lg w-full"
                            >
                                <div className="text-black/40 text-xs text-center border-b border-black/10 pb-3 mb-4 font-black tracking-widest uppercase">Internal AI Preview</div>
                                <div className="mt-2 flex gap-3 items-start">
                                    <div className="w-7 h-7 bg-black flex-shrink-0" />
                                    <div className="bg-black text-white px-4 py-2 font-bold mb-1 text-[10px] sm:text-xs">昨日の営業会議の議事録をまとめて</div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    className="mt-6 flex gap-3 items-start"
                                >
                                    <div className="w-7 h-7 border-2 border-black flex-shrink-0" />
                                    <div className="bg-white border-2 border-black px-4 py-2 font-bold text-[10px] sm:text-xs">はい、議事録の要点から、次の3つのアクションが…</div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative particles */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-white/20 rounded-full" />
                                <motion.div animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 left-1/4 w-8 h-8 border-2 border-white/10" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
