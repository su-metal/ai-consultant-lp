'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpenText, CheckCircle2 } from 'lucide-react';

export default function FreeResourceBanner() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-900/25 border border-blue-300/20">
                    {/* バックグラウンド装飾 */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.14),transparent_40%)] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-white flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-blue-200/30 text-blue-100 text-sm font-bold mb-6 tracking-widest uppercase">
                                <BookOpenText className="w-4 h-4" />
                                Free Resource
                            </div>
                            <h2 className="text-[clamp(2rem,4.2vw,3.3rem)] font-bold mb-5 leading-[1.1] tracking-[-0.02em]">
                                <span className="text-white">自社に合ったAI活用がわかる</span>
                                <br className="hidden md:block" />
                                <span className="text-blue-300">「無料AI診断」</span>
                                <span className="text-white">実施中</span>
                            </h2>
                            <p className="text-slate-200/90 mb-6 max-w-xl text-lg">
                                「AIで何ができるかわからない」「うちの業務で使えるの？」とお悩みのご担当者様へ。現状の業務課題をヒアリングし、AI適用の可能性を無料で診断します。
                            </p>

                            <ul className="flex flex-col gap-3 text-slate-100">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                                    <span>オンラインで30分の簡単なヒアリング</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                                    <span>活用アイデアとその効果予測をご提示</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" />
                                    <span>無理な営業・売り込みは一切いたしません</span>
                                </li>
                            </ul>
                        </div>

                        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                            <Link
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group flex flex-col items-center justify-center p-6 bg-white/95 backdrop-blur rounded-2xl w-full md:w-72 shadow-xl border border-blue-100/80 hover:-translate-y-1 hover:shadow-blue-900/20 transition-all duration-300"
                            >
                                <span className="text-slate-900 font-bold mb-2 text-center">
                                    無料相談・診断を予約する
                                </span>
                                <span className="text-slate-500 text-sm mb-4 text-center">
                                    オンライン／対面（東三河中心）
                                </span>
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
