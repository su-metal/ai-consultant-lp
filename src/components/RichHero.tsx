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
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white flex flex-col justify-start pt-32 lg:pt-40 pb-40 lg:pb-60 min-h-[750px] lg:min-h-[850px] border-b-4 border-black">

            {/* --- Advanced Rich Background --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white">
                {/* Subtle Image Background Content */}
                <div
                    className="absolute inset-0 opacity-[0.05] mix-blend-multiply transition-opacity duration-1000"
                    style={{
                        backgroundImage: 'url("/images/hero_bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(1) brightness(1.2)'
                    }}
                />

                {/* Tech Grid Pattern - Monochrome */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="absolute inset-0 bg-white/40 backdrop-blur-[20px]" />

                {/* --- Static / Minimal AI Core Visualization --- */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center opacity-10">
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
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-black border-dashed opacity-40"
                            />

                            {/* Inner Sphere Outline */}
                            <div className="absolute inset-[30%] rounded-full border-4 border-black flex items-center justify-center bg-white/80">
                                <span className="text-5xl sm:text-7xl font-black text-black">
                                    AI
                                </span>
                            </div>
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
                        className="inline-flex items-center justify-center gap-2 py-1.5 px-6 border-2 border-black bg-white text-black text-[11px] sm:text-xs font-black tracking-widest mb-10 w-fit relative"
                    >
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-black"></span>
                        </span>
                        CONSULTING & DEVELOPMENT
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-black tracking-tighter text-black mb-10 font-sans leading-[1.0] flex flex-col items-center"
                    >
                        <span className="block mb-4">未来の技術を、</span>
                        <span className="bg-black text-white px-6 pb-2">
                            今の現場へ。
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base sm:text-lg md:text-xl text-black max-w-2xl leading-relaxed font-bold mb-12 text-center"
                    >
                        ChatGPTなどの生成AI活用から、業務アプリ開発まで。<br className="hidden md:block" />
                        難しい言葉は使わずに、成果につながる仕組みを作ります。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative z-20"
                    >
                        <Link href="/contact" className="btn-primary flex items-center gap-2 group w-full sm:w-auto px-10 py-4">
                            無料相談を予約する
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link href="/services" className="btn-secondary flex items-center gap-2 w-full sm:w-auto px-10 py-4">
                            <Play className="w-4 h-4 fill-black" />
                            サービス詳細
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
