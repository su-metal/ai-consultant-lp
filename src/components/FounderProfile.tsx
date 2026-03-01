'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FounderProfile() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden border-b-4 border-black">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-white border-4 border-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden shadow-2xl">

                    <div className="shrink-0 relative z-10">
                        <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-black p-1 bg-white">
                            <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden border-2 border-black relative">
                                <Image
                                    src="/images/profile_avatar.png"
                                    alt="Masanori Sada Avatar"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-black text-white text-xs font-black px-6 py-2 border-2 border-black shadow-lg uppercase tracking-widest">
                            Founder
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1 relative z-10">
                        <div className="mb-4 text-black font-black tracking-[0.2em] text-xs uppercase border-b-2 border-black inline-block pb-1">About Founder</div>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight">
                            佐田 真教 <br className="md:hidden" />
                            <span className="text-xl font-bold bg-black text-white px-3 py-1 ml-0 md:ml-4 inline-block md:inline">Masanori Sada</span>
                        </h3>
                        <div className="text-black text-lg leading-relaxed mb-8 font-bold space-y-4">
                            <p>
                                愛知県を拠点に活動。最新のAI技術をいかに「実務で使える道具」にするかを追求しています。長年製造業の現場にいたからこそ、DXや自動化の難しさと、それが実現した時のインパクトを誰よりも理解しています。
                            </p>
                            <p>
                                単なる「話題作り」としてのAIではなく、<strong className="bg-black text-white px-1">実際に現場で機能する仕組み</strong>を作ることにこだわり、伴走します。
                            </p>
                            <p className="text-sm opacity-80 leading-relaxed font-bold">
                                難しい専門用語で煙に巻くことはしません。現状の課題をオンラインでたった30分お聞きするだけでも、「AIをどう相棒に変えるか」のヒントが見つかるはずです。ぜひお気軽にご相談ください。
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <Link
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-primary px-8 py-4 text-lg w-full md:w-auto text-center font-black uppercase tracking-widest"
                            >
                                Free Consultation
                            </Link>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-1.5 bg-white text-black text-[10px] font-black border-2 border-black uppercase tracking-widest">#AI_Consulting</span>
                                <span className="px-4 py-1.5 bg-black text-white text-[10px] font-black border-2 border-black uppercase tracking-widest">#App_Dev</span>
                                <span className="px-4 py-1.5 bg-white text-black text-[10px] font-black border-2 border-black uppercase tracking-widest">#Efficiency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
