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

    useEffect(() => {
        // Effects that should run on mount
    }, []);

    // Magnetic effect for buttons
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        setMousePos({ x: (clientX - centerX) * 0.2, y: (clientY - centerY) * 0.2 });
    };
    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

    const sentence1 = "未来の技術を、";
    const sentence2 = "今の現場へ。";

    // Parallax Effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white flex flex-col justify-start pt-20 lg:pt-28 pb-40 lg:pb-60 min-h-[850px] lg:min-h-[950px] border-b-8 border-black">

            {/* --- Dynamic Background Layer --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white">

                {/* 1. Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

                {/* 2. Huge Background Typography (Parallax Outline) */}
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 flex items-center justify-center select-none"
                >
                    <span className="text-[40vw] lg:text-[50vw] font-black leading-none text-transparent stroke-black/5 stroke-[1px] font-sans tracking-tighter">
                        AI
                    </span>
                </motion.div>

                {/* 3. Dynamic Grid Pattern */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="absolute inset-0 bg-white/30 backdrop-blur-[10px]" />

                {/* 4. Enhanced AI Core Visualization */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center opacity-20">
                    <motion.div
                        style={{ rotate }}
                        className="relative w-full max-w-[500px] lg:max-w-[900px] aspect-square flex items-center justify-center pointer-events-none"
                    >
                        {/* Multiple rotating rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-[1px] border-black border-dashed opacity-30"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[10%] rounded-full border-[2px] border-black opacity-20"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-[40%] rounded-full border-[4px] border-black flex items-center justify-center bg-white"
                        >
                            <span className="text-6xl sm:text-8xl font-black text-black">AI</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 h-full flex flex-col items-center justify-center mt-12">

                {/* --- Text & CTA content --- */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="flex flex-col items-center text-center w-full max-w-6xl mx-auto z-30"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="inline-flex items-center justify-center gap-3 py-2 px-8 border-4 border-black bg-white text-black text-xs font-black tracking-[0.3em] mb-14 w-fit relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75 rounded-full"></span>
                            <span className="relative inline-flex h-3 w-3 bg-black rounded-full"></span>
                        </span>
                        STRATEGIC AI INTELLIGENCE
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
                        <div className="bg-black text-white px-8 pt-4 pb-6 overflow-hidden flex transform -rotate-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]">
                            <span className="inline-block whitespace-nowrap">
                                {sentence2.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "110%", rotate: -10 }}
                                        animate={{ y: 0, rotate: 0 }}
                                        transition={{ duration: 1, delay: 1 + i * 0.04, ease: [0.33, 1, 0.68, 1] }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl leading-relaxed font-bold mt-10 mb-8 text-center relative drop-shadow-sm"
                    >
                        <span className="bg-white/80 backdrop-blur-sm px-2">
                            ChatGPTなどの生成AI活用から、業務アプリ開発まで。
                        </span>
                        <br className="hidden md:block" />
                        <span className="bg-white/80 backdrop-blur-sm px-2 mt-2 inline-block">
                            難しい言葉は使わずに、成果につながる仕組みを。
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full relative z-20"
                    >
                        <motion.div
                            animate={{ x: mousePos.x, y: mousePos.y }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="w-full sm:w-auto"
                        >
                            <Link href="/contact" className="btn-primary flex items-center justify-center gap-3 group w-full sm:w-auto px-12 py-6 text-lg shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                                無料相談を予約する
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="w-full sm:w-auto"
                        >
                            <Link href="/services" className="btn-secondary flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-6 text-lg border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                                <Play className="w-5 h-5 fill-black" />
                                サービス詳細
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
