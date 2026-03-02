'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function RichHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Parallax Effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const coreY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-slate-50 flex flex-col justify-start pt-32 lg:pt-40 pb-40 lg:pb-60 min-h-[750px] lg:min-h-[850px]">

            {/* --- Advanced Rich Background --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-slate-50">
                {/* Subtle Image Background Content */}
                <div
                    className="absolute inset-0 opacity-[0.1] mix-blend-multiply transition-opacity duration-1000"
                    style={{
                        backgroundImage: 'url("/images/hero_bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(0.2) brightness(1.1)'
                    }}
                />

                {/* Tech Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: ['0%', '-10%', '10%', '0%'],
                        y: ['0%', '10%', '-5%', '0%'],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"
                />
                <motion.div
                    animate={{
                        x: ['0%', '15%', '-10%', '0%'],
                        y: ['0%', '-15%', '10%', '0%'],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[50%] right-[10%] w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"
                />
                <motion.div
                    animate={{
                        x: ['0%', '-20%', '15%', '0%'],
                        y: ['0%', '20%', '-15%', '0%'],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[130px] opacity-50"
                />

                {/* Floating Particles/Sparkles */}
                {mounted && (
                    <div className="absolute inset-0 hidden md:block">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.1, 0.6, 0.1],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full blur-[1px]"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute inset-0 bg-white/50 backdrop-blur-[30px]" />

                {/* --- Abstract AI Core Visualization (Moved to Background) --- */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center opacity-40 mix-blend-multiply">
                    <motion.div
                        style={{ y: coreY }}
                        className="relative w-full max-w-[450px] sm:max-w-[650px] lg:max-w-[850px] aspect-square flex items-center justify-center pointer-events-none -mt-10 md:-mt-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                            className="w-full h-full relative flex items-center justify-center"
                        >
                            {/* Outer rotating dashed ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-blue-400/30 shadow-[0_0_80px_rgba(59,130,246,0.15)] border-dashed border-2"
                            />

                            {/* Middle rotating solid ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[15%] rounded-full border-t border-purple-500/40 border-r border-transparent opacity-80 backdrop-blur-sm"
                                style={{ boxShadow: 'inset 0 0 60px rgba(168,85,247,0.1)' }}
                            />

                            {/* Pulsing Core Glow */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-[25%] rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl mix-blend-screen"
                            />

                            {/* Inner Glass Sphere */}
                            <div className="absolute inset-[30%] rounded-full bg-gradient-to-bl from-white/90 via-blue-50/80 to-purple-50/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center border border-white/60 backdrop-blur-2xl">
                                <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 drop-shadow-lg">
                                    AI
                                </span>

                                {/* Glass reflection line */}
                                <motion.div
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                    className="absolute top-0 bottom-0 w-[150%] left-[-25%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-30deg]"
                                />
                            </div>

                            {/* Orbiting tiny satellites */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[10%]"
                            >
                                <div className="w-5 h-5 bg-blue-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[20%]"
                            >
                                <div className="w-4 h-4 bg-purple-500 rounded-full absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 h-full flex flex-col items-center justify-center mt-8">

                {/* --- Text & CTA --- */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="flex flex-col items-center text-center w-full max-w-5xl mx-auto z-30"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center gap-2 py-1.5 px-4 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-700 shadow-sm text-[11px] sm:text-xs font-bold tracking-wide mb-6 w-fit relative overflow-hidden"
                    >
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                        />
                        <span className="relative flex h-2.5 w-2.5 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                        </span>
                        開発・AI導入のご相談、受付中
                    </motion.div>

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
                        className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl leading-relaxed font-bold mt-10 mb-8 text-center relative drop-shadow-sm"
                    >
                        <span className="relative z-10">
                            ChatGPTなどの生成AI活用から、業務アプリ開発まで。<br className="hidden md:block" />
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
                            {/* Button glowing background animation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity"
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                無料相談を予約する
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto px-6 py-3.5 bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200/50 rounded-full font-bold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 relative shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
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
