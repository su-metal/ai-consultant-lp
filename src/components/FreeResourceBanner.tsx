'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpenText, CheckCircle2 } from 'lucide-react';

export default function FreeResourceBanner() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-900/20">
                    {/* バックグラウンド装飾 */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-white flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-bold mb-6 tracking-widest uppercase">
                                <BookOpenText className="w-4 h-4" />
                                Free Resource
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                自社に合ったAI活用がわかる<br className="hidden md:block" />
                                <span className="text-blue-300">「無料AI診断」</span>実施中
                            </h2>
                            <p className="text-blue-100/80 mb-6 max-w-xl text-lg">
                                「AIで何ができるかわからない」「うちの業務で使えるの？」とお悩みのご担当者様へ。現状の業務課題をヒアリングし、AI適用の可能性を無料で診断します。
                            </p>

                            <ul className="flex flex-col gap-3 text-blue-50">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <span>オンラインで30分の簡単なヒアリング</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <span>活用アイデアとその効果予測をご提示</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
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
                                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl w-full md:w-72 shadow-xl hover:-translate-y-1 transition-transform duration-300"
                            >
                                <span className="text-blue-600 font-bold mb-2 text-center">
                                    無料相談・診断を予約する
                                </span>
                                <span className="text-slate-500 text-sm mb-4 text-center">
                                    オンライン／対面（東三河中心）
                                </span>
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
