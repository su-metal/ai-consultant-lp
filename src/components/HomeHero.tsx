'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { Bot, Code } from 'lucide-react';
import Link from 'next/link';

// Glassmorphism Card Component
interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    icon?: React.ElementType;
    colorClass?: string;
    href?: string;
}

const GlassCard = ({ children, className = "", icon: Icon, colorClass = "text-blue-600", href, ...props }: GlassCardProps) => {
    const Content = (
        <div className={`relative p-6 md:p-8 h-full flex flex-col items-start gap-4 ${className}`}>
            {Icon && (
                <div className={`p-3 rounded-2xl bg-white/50 border border-white/60 shadow-sm ${colorClass}`}>
                    <Icon size={32} />
                </div>
            )}
            <div className="flex-1">
                {children}
            </div>
            {href && (
                <div className="mt-4 flex items-center text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                    View Details <span className="ml-1">→</span>
                </div>
            )}
        </div>
    );

    const containerClasses = "group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/70";

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
        <section ref={containerRef} className="relative min-h-[95vh] w-full overflow-hidden bg-slate-50 flex flex-col justify-end pt-32 pb-0">

            {/* 1. Sky / Grid Layer (Background Top) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, white 0%, transparent 80%)'
                    }}
                />
            </div>

            {/* 2. Main Content (Middle - Variable Height) */}
            <motion.div
                style={{ y: textY, opacity }}
                className="container mx-auto px-4 relative z-20 mb-auto mt-auto flex flex-col items-center"
            >
                {/* Badge - Japanese & Friendly */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-blue-700 shadow-sm text-xs font-bold tracking-wide mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    開発・AI導入のご相談、受付中
                </motion.div>

                {/* Headline - Japanese Main */}
                <div className="text-center mb-16 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-10 font-sans leading-[1.1]">
                        <span className="block mb-4 text-slate-700">
                            未来の技術を、
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 pb-2">
                            今の現場へ。
                        </span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        ChatGPTなどの生成AI活用から、業務アプリ開発まで。<br className="hidden md:block" />
                        難しい言葉は使わずに、<span className="text-blue-700 font-bold border-b-2 border-blue-200">成果につながる</span>仕組みを作ります。
                    </motion.p>
                </div>

                {/* Cards Grid - Japanese Titles */}
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <GlassCard href="/services" icon={Bot} colorClass="text-blue-700">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">AI導入・システム開発</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                業務の「困った」を技術で解決。<br />
                                相談から開発まで、一気通貫でサポート。
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                    >
                        <GlassCard href="/works" icon={Code} colorClass="text-indigo-700">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">開発実績・ポートフォリオ</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                手がけたアプリやツールの一部をご紹介。<br />
                                実装力と使いやすさをご覧ください。
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </motion.div>

            {/* 3. City Illustration (Removed for mobile optimization) */}
            {/* The background is now purely CSS grid/gradient for better responsiveness */}

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-slate-300 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-shimmer" />
                </div>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}
