'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Zap, Shield, LineChart, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BentoFeatures() {
    return (
        <section className="py-16 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(2rem,4.2vw,3.4rem)] font-black text-slate-900 tracking-[-0.02em] leading-[1.1] mb-5">
                        AI活用とシステム開発で<br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ビジネスの課題を解決</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        「手作業が多くて時間が足りない」「もっと効率よく仕事を進めたい」といった現場の悩みを、AIの力と使いやすいアプリ開発で解決します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* --- Card 1: AI Consulting (Large, Light) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-600/20 mb-8">
                                <Bot className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">生成AIコンサルティング</h3>
                            <p className="text-slate-600 mb-6 max-w-md leading-relaxed text-sm">
                                ChatGPTやClaudeなどの最新LLMを活用し、社内業務の自動化から新規事業の創出まで、御社に最適なAI活用戦略を立案・伴走します。
                            </p>

                            <div className="mt-auto pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="text-sm font-bold text-slate-700">プロンプト設計</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    <span className="text-sm font-bold text-slate-700">社内研修</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    <span className="text-sm font-bold text-slate-700">RAG構築支援</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                                    <span className="text-sm font-bold text-slate-700">AIエージェント</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 2: App Dev (Small, Clean) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-1 bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-100/50 rounded-full blur-[50px]" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl mb-6">
                                <Code className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">モダンWeb開発</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Next.js, Reactを活用した高速でセキュアなアプリケーション開発。MVPから本格運用までスケーラブルに対応。
                            </p>

                            <div className="mt-auto space-y-3">
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 w-[90%]" />
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[75%]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Card 3: Performance (Small, Light) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl mb-6">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">ムダな時間を削減して<br />本来の業務に集中</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            AIを活用して面倒なルーチンワークや確認作業を自動化。業務のスピードを上げ、より重要な仕事に専念できる環境を作ります。
                        </p>
                        <div className="flex items-end gap-2 text-emerald-500">
                            <span className="text-4xl font-black">AI</span>
                            <span className="text-sm font-bold pb-1 text-slate-400">で業務効率化</span>
                        </div>
                    </motion.div>

                    {/* --- Card 4: Support / Architecture (Large, Light) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col md:flex-row group"
                    >
                        {/* Text Content */}
                        <div className="p-6 md:p-8 relative z-10 w-full md:w-1/2 flex flex-col justify-center">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">初めてのAIでも<br />安心・安全に使える</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                「AIで何ができるかわからない」という状態からでも丁寧にサポートします。機密情報の漏洩を防ぐセキュリティを考慮し、御社専用の社内AIや業務アプリを安全に構築します。
                            </p>
                            <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-500 transition-colors w-fit">
                                サービス詳細を見る
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Visual Content (AI Chat Interface Mockup) */}
                        <div className="w-full md:w-1/2 p-6 bg-slate-50 border-l border-slate-100 relative overflow-hidden group-hover:bg-slate-100/50 transition-colors duration-500">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-slate-300" />
                                <div className="w-3 h-3 rounded-full bg-slate-300" />
                                <div className="w-3 h-3 rounded-full bg-slate-300" />
                            </div>
                            <div className="text-sm leading-loose text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-slate-400 text-xs text-center border-b border-slate-100 pb-2 mb-3">社内AIチャットのイメージ</div>
                                <div className="mt-2 flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0" />
                                    <div className="bg-blue-50 text-blue-900 px-3 py-2 rounded-lg rounded-tl-none font-medium mb-1">昨日の営業会議の議事録をまとめて</div>
                                </div>
                                <div className="mt-4 flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0" />
                                    <div className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg rounded-tl-none">はい、議事録の要点から、次の3つのアクションが…</div>
                                </div>
                                <div className="mt-4 flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0" />
                                    <div className="bg-blue-50 text-blue-900 px-3 py-2 rounded-lg rounded-tl-none font-medium mb-1">A社向けの提案書ドラフトも作って</div>
                                </div>
                                <div className="mt-4 flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0" />
                                    <div className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg rounded-tl-none">過去の提案データを元に作成します。</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
