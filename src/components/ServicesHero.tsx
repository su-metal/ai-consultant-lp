'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Activity, Target } from 'lucide-react';
import Link from 'next/link';

export default function ServicesHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Magnetic effect for buttons
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        setMousePos({ x: (clientX - centerX) * 0.15, y: (clientY - centerY) * 0.15 });
    };
    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

    const sentence1 = "その課題に、";
    const sentence2 = "最適解を。";

    // Parallax & Motion Effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-white flex flex-col justify-start pt-20 lg:pt-32 pb-40 lg:pb-60 min-h-[850px] lg:min-h-[950px] border-b-8 border-black">

            {/* --- Dynamic Background Layer --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white">

                {/* 1. Grain Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

                {/* 2. Parallax Outline Typography */}
                <motion.div style={{ y: bgY }} className="absolute inset-0 flex items-center justify-center select-none pt-40">
                    <span className="text-[25vw] lg:text-[30vw] font-black leading-none text-transparent stroke-black/5 stroke-[2px] font-sans tracking-tighter uppercase">
                        SOLUTIONS
                    </span>
                </motion.div>

                {/* 3. Grid Pattern */}
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '64px 64px'
                    }}
                />

                {/* 4. Tech Orbit Visualization */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center opacity-10">
                    <motion.div style={{ rotate }} className="relative w-full max-w-[600px] lg:max-w-[1000px] aspect-square flex items-center justify-center">
                        {[1, 2, 3].map((ring) => (
                            <motion.div
                                key={ring}
                                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                                transition={{ duration: 20 + ring * 10, repeat: Infinity, ease: "linear" }}
                                className={`absolute rounded-full border-[1px] border-black border-dashed`}
                                style={{ inset: `${(ring - 1) * 15}%` }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 h-full flex flex-col items-center justify-center mt-20">

                {/* --- Content Area --- */}
                <motion.div style={{ y: textY, opacity }} className="flex flex-col items-center text-center w-full max-w-6xl mx-auto z-30">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center justify-center gap-3 py-2 px-8 border-4 border-black bg-white text-black text-xs font-black tracking-[0.3em] mb-12 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <Target className="w-4 h-4" />
                        PROFESSIONAL SERVICES
                    </motion.div>

                    {/* Main H1 - Heavy Typography */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-black tracking-tighter text-black mb-12 font-sans leading-[0.85] flex flex-col items-center">
                        <span className="block mb-4 overflow-hidden py-2 px-4 whitespace-nowrap">
                            {sentence1.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "110%", rotate: 10 }}
                                    animate={{ y: 0, rotate: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <div className="bg-black text-white px-10 pt-4 pb-6 overflow-hidden flex transform rotate-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]">
                            <span className="inline-block whitespace-nowrap">
                                {sentence2.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "110%", rotate: -10 }}
                                        animate={{ y: 0, rotate: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 + i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </div>
                    </h1>

                    {/* Sub Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-lg sm:text-xl md:text-2xl text-black max-w-4xl leading-relaxed font-bold mb-16 text-center"
                    >
                        曖昧な要望を、確かな成果へ。
                        <br />
                        AI導入支援からカスタムアプリ開発まで、
                        <br className="md:hidden" />
                        実利を追求する4つのコアサービスを提供します。
                    </motion.p>

                    {/* CTA Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full relative z-20"
                    >
                        <motion.div
                            animate={{ x: mousePos.x, y: mousePos.y }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="w-full sm:w-auto"
                        >
                            <Link href="#contact" className="btn-primary flex items-center justify-center gap-3 group w-full sm:w-auto px-12 py-6 text-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all">
                                相談を開始する
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div className="flex gap-6 items-center">
                            {[Cpu, Zap, Activity].map((Icon, i) => (
                                <div key={i} className="w-12 h-12 border-2 border-black flex items-center justify-center opacity-30">
                                    <Icon className="w-6 h-6" />
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-black" />
        </section>
    );
}
