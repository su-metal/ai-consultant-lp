'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function RichHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 32 : 72]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const coreY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? -24 : -56]);

    const orbitTransition = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 24, repeat: Infinity, ease: 'linear' as const };
    const pulseTransition = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 8, repeat: Infinity, ease: 'easeInOut' as const };

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-slate-50 flex flex-col justify-start pt-32 lg:pt-40 pb-40 lg:pb-60 min-h-[750px] lg:min-h-[850px]">
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-slate-50">
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'url("/images/hero_bg.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(99,102,241,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.88))]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

                <div className="absolute top-[12%] left-[8%] h-40 w-40 rounded-full bg-blue-100/80" />
                <div className="absolute top-[20%] right-[10%] h-32 w-32 rounded-full bg-indigo-100/70" />
                <div className="absolute bottom-[18%] left-[22%] h-48 w-48 rounded-full bg-sky-100/80" />
                <div className="absolute bottom-[12%] right-[18%] h-56 w-56 rounded-full bg-violet-100/70" />

                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center opacity-70">
                    <motion.div
                        style={{ y: coreY }}
                        className="relative w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] aspect-square flex items-center justify-center pointer-events-none -mt-10 md:-mt-16"
                    >
                        <div className="w-full h-full relative flex items-center justify-center">
                            <div className="absolute inset-[8%] rounded-full border border-white/80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92),rgba(239,246,255,0.68))] shadow-[0_30px_90px_-45px_rgba(37,99,235,0.45)]" />
                            <div className="absolute inset-[15%] rounded-full border border-blue-100/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85)]" />
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                                transition={orbitTransition}
                                className="absolute inset-0 rounded-full border border-blue-300/45 border-dashed"
                            />
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                                transition={orbitTransition}
                                className="absolute inset-[13%] rounded-full border-[10px] border-transparent"
                                style={{ borderTopColor: 'rgba(59,130,246,0.36)', borderRightColor: 'rgba(99,102,241,0.24)' }}
                            />
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.75, 0.55] }}
                                transition={pulseTransition}
                                className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.34),rgba(129,140,248,0.12)_58%,transparent_72%)]"
                            />
                            <div className="absolute inset-[30%] rounded-full bg-gradient-to-bl from-white via-blue-50 to-indigo-50 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.28)] overflow-hidden flex items-center justify-center border border-white/80">
                                <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 drop-shadow-lg">
                                    AI
                                </span>
                                <motion.div
                                    animate={prefersReducedMotion ? undefined : { x: ['-120%', '120%'] }}
                                    transition={
                                        prefersReducedMotion
                                            ? { duration: 0 }
                                            : { duration: 6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }
                                    }
                                    className="absolute top-0 bottom-0 w-[85%] left-[-20%] bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-24deg]"
                                />
                            </div>
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                                transition={
                                    prefersReducedMotion
                                        ? { duration: 0 }
                                        : { duration: 14, repeat: Infinity, ease: 'linear' }
                                }
                                className="absolute inset-[10%]"
                            >
                                <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_6px_rgba(191,219,254,0.8)]" />
                            </motion.div>
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                                transition={
                                    prefersReducedMotion
                                        ? { duration: 0 }
                                        : { duration: 18, repeat: Infinity, ease: 'linear' }
                                }
                                className="absolute inset-[20%]"
                            >
                                <div className="w-3.5 h-3.5 bg-indigo-500 rounded-full absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 shadow-[0_0_0_6px_rgba(224,231,255,0.9)]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 h-full flex flex-col items-center justify-center mt-8">
                <motion.div
                    style={{ y: textY, opacity }}
                    className="flex flex-col items-center text-center w-full max-w-5xl mx-auto z-30"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center gap-2 py-1.5 px-4 rounded-full bg-blue-50/95 border border-blue-200/70 text-blue-700 shadow-sm text-[11px] sm:text-xs font-bold tracking-wide mb-6 w-fit relative overflow-hidden"
                    >
                        <span className="relative flex h-2.5 w-2.5 mr-1">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-90"></span>
                            <motion.span
                                animate={prefersReducedMotion ? undefined : { scale: [1, 1.15, 1] }}
                                transition={prefersReducedMotion ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"
                            />
                        </span>
                        豊橋・東三河のAI導入相談、受付中
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-sm sm:text-base font-semibold tracking-[0.08em] text-slate-600 uppercase mb-4"
                    >
                        豊橋のAI導入・生成AI活用を、現場に合わせて伴走支援
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[clamp(3rem,9vw,6.8rem)] font-black tracking-[-0.04em] text-slate-900 mb-7 font-sans leading-[0.98] drop-shadow-md flex flex-col items-center"
                    >
                        <span className="block mb-2 text-slate-800">未来の技術を、</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 pb-2 relative">
                            今の現場へ。
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed font-bold mt-10 mb-8 text-center relative drop-shadow-sm"
                    >
                        <span className="relative z-10">
                            豊橋の中小企業向けに、ChatGPTなどの生成AI活用からAI導入、業務アプリ開発まで。<br className="hidden md:block" />
                            難しい言葉は使わずに、成果につながる仕組みを作ります。
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-20"
                    >
                        <Link href="/contact" className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 text-white rounded-full font-bold shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.8)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_50%)] opacity-70" />
                            <span className="relative z-10 flex items-center gap-2">
                                無料相談を予約する
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto px-6 py-3.5 bg-white/95 text-slate-700 border border-slate-200/70 rounded-full font-bold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 relative shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                            <span className="relative z-10 flex items-center gap-2">
                                <Play className="w-4 h-4 fill-slate-700" />
                                サービス詳細
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
