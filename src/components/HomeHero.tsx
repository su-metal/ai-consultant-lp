'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { Bot, Code } from 'lucide-react';
import Link from 'next/link';

// Glassmorphism Card Component -> Modern Light Card Component
interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    icon?: React.ElementType;
    colorClass?: string;
    bgSrc?: string;
    href?: string;
}

const GlassCard = ({ children, className = "", icon: Icon, colorClass = "text-blue-600", bgSrc = "bg-blue-50", href, ...props }: GlassCardProps) => {
    const Content = (
        <div className={`relative p-8 h-full flex flex-col items-start gap-4 ${className}`}>
            {Icon && (
                <div className={`p-4 rounded-2xl ${bgSrc} border border-slate-100/50 shadow-sm ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                </div>
            )}
            <div className="flex-1 mt-2">
                {children}
            </div>
            {href && (
                <div className={`mt-6 flex items-center text-sm font-bold ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    View Details <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
            )}
        </div>
    );

    const containerClasses = "modern-card group border-t-4 border-t-slate-200 hover:border-t-blue-400 h-full cursor-pointer";

    if (href) {
        return (
            <Link href={href} className="block w-full h-full">
                <motion.div className={containerClasses} {...props}>
                    {Content}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.div className={containerClasses} {...props}>
            {Content}
        </motion.div>
    );
};

// --- Main Hero Component ---

export default function HomeHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Parallax Effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[95vh] w-full overflow-hidden bg-white flex flex-col justify-end pt-32 pb-0">

            {/* 1. Light and Clean Background Layer */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Indigo/Amber soft light blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-[100px] mix-blend-multiply" />
                {/* Subtle Dot Pattern */}
                <div className="absolute inset-0 dot-pattern opacity-40 mix-blend-multiply" />
                {/* Bottom gradient fade to white */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            </div>

            {/* 2. Main Content (Middle - Variable Height) */}
            <motion.div
                style={{ y: textY, opacity }}
                className="container mx-auto px-4 relative z-20 mb-auto mt-auto flex flex-col items-center"
            >
                {/* Badge - Clean Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 border border-slate-200 text-blue-600 shadow-sm text-sm font-bold tracking-wide mb-10"
                >
                    <span className="relative flex h-2.5 w-2.5 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                    開発・AI導入のご相談、受付中
                </motion.div>

                {/* Headline - Modern Typography */}
                <div className="text-center mb-20 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-10 font-sans leading-[1.15]">
                        <span className="block mb-4 text-slate-800">
                            未来の技術を、
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 pb-2">
                            今の現場へ。
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium bg-white/50 backdrop-blur-sm rounded-2xl py-4"
                    >
                        ChatGPTなどの生成AI活用から、業務アプリ開発まで。<br className="hidden md:block" />
                        難しい言葉は使わずに、<span className="text-blue-600 font-bold border-b-2 border-blue-200 pb-1">成果につながる</span>仕組みを作ります。
                    </motion.p>
                </div>

                {/* Cards Grid - Modern Clean Style */}
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="h-full group"
                    >
                        <GlassCard href="/services" icon={Bot} colorClass="text-blue-600" bgSrc="bg-blue-50">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">AI導入・システム開発</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                業務の「困った」を技術で解決。<br />
                                相談から開発まで、一気通貫でサポート。
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="h-full group"
                    >
                        <GlassCard href="/works" icon={Code} colorClass="text-indigo-600" bgSrc="bg-indigo-50">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">開発実績・ポートフォリオ</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                手がけたアプリやツールの一部をご紹介。<br />
                                実装力と使いやすさをご覧ください。
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator - Adjusted color for white bg */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-slate-200 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-shimmer" />
                </div>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}
