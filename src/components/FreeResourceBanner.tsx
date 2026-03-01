'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpenText, CheckCircle2 } from 'lucide-react';

export default function FreeResourceBanner() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-black text-white p-8 md:p-12 relative overflow-hidden border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1),16px_16px_0px_4px_rgba(255,255,255,1)]">
                    {/* バックグラウンド装飾 - Minimal dot pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none dot-pattern" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black text-xs font-black mb-6 tracking-widest uppercase border-b-2 border-r-2 border-zinc-400">
                                <BookOpenText className="w-4 h-4" />
                                Free Resource
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter !text-white">
                                自社に合ったAI活用がわかる<br className="hidden md:block" />
                                <span className="bg-white text-black px-3 pb-1 inline-block">「無料AI診断」</span>実施中
                            </h2>
                            <p className="text-zinc-400 mb-8 max-w-xl text-lg font-bold leading-relaxed">
                                「AIで何ができるかわからない」「うちの業務で使えるの？」とお悩みのご担当者様へ。現状の業務課題をヒアリングし、AI適用の可能性を無料で診断します。
                            </p>

                            <ul className="flex flex-col gap-4 text-white">
                                <li className="flex items-center gap-3 font-bold">
                                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-black">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span>オンラインで30分の簡単なヒアリング</span>
                                </li>
                                <li className="flex items-center gap-3 font-bold">
                                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-black">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span>活用アイデアとその効果予測をご提示</span>
                                </li>
                                <li className="flex items-center gap-3 font-bold">
                                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-black">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
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
                                className="group flex flex-col items-center justify-center p-8 bg-white text-black border-4 border-black w-full md:w-80 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
                            >
                                <span className="text-xl font-black mb-2 text-center uppercase tracking-tighter">
                                    無料相談・診断を予約する
                                </span>
                                <span className="text-zinc-500 text-xs mb-6 text-center font-black tracking-widest uppercase">
                                    Online / In-Person (Tohigashi)
                                </span>
                                <div className="flex items-center justify-center w-14 h-14 bg-black text-white border-2 border-black group-hover:invert transition-all">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
