'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FounderProfile() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 mix-blend-multiply" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto modern-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden border-t-4 border-t-blue-600">
                    {/* Blob decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="shrink-0 relative z-10">
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-blue-100 to-indigo-100 shadow-inner">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-lg relative">
                                <Image
                                    src="/images/profile_avatar.png"
                                    alt="Masanori Sada Avatar"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-white/20">
                            代表
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1 relative z-10">
                        <div className="mb-3 text-blue-600 font-mono tracking-widest text-xs font-bold uppercase">About Founder</div>
                        <h3 className="text-[clamp(2rem,3.8vw,3rem)] font-bold mb-5 text-slate-900 leading-[1.12] tracking-[-0.02em]">
                            佐田 真教 <span className="text-xl font-normal text-slate-500 ml-2">Masanori Sada</span>
                        </h3>
                        <div className="text-slate-600 text-sm leading-relaxed mb-6 font-medium space-y-3">
                            <p>
                                愛知県を拠点に活動。最新のAI技術をいかに「実務で使える道具」にするかを追求しています。長年製造業の現場にいたからこそ、DXや自動化の難しさと、それが実現した時のインパクトを誰よりも理解しています。現場の視点に立ち、AIエージェントの構築やアプリ開発を自ら実践し、数々の業務効率化を実現してきました。
                            </p>
                            <p>
                                単なる「話題作り」としてのAIではなく、<strong>実際に現場で機能する仕組み</strong>を作ることにこだわり、泥臭いプロンプトの調整や開発も直接手を動かして伴走します。
                            </p>
                            <p>
                                難しい専門用語で煙に巻くことはしません。現状の課題をオンラインでたった30分お聞きするだけでも、「AIをどう相棒に変えるか」のヒントが見つかるはずです。ぜひお気軽にご相談ください。
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Link
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-6 py-2.5 text-sm bg-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all w-full md:w-auto text-center"
                            >
                                無料相談をする
                            </Link>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-md border border-slate-100">#AI活用</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-md border border-slate-100">#アプリ開発</span>
                                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-md border border-slate-100">#業務効率化</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
