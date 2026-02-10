'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, UserX, ShieldAlert, BookX, TrendingDown, ArrowRight, Lightbulb } from 'lucide-react';

const problems = [
    {
        icon: AlertTriangle,
        title: '「はじめの一歩」の迷い',
        description: '「何から手をつければいいか分からない」のは、新しい挑戦では当然のことです。',
        solution: 'まずは1つの業務・1週間に絞った「スモールスタート」で、確かな手応えを。',
        color: 'from-amber-600 to-orange-700',
        glowColor: 'rgba(245, 158, 11, 0.15)',
        borderColor: 'border-amber-500/20',
    },
    {
        icon: UserX,
        title: '丸投げ症候群',
        description: 'ベンダー依存の体制では、社内にノウハウが蓄積されない。',
        solution: '社内人材を「AI推進リーダー」へ育成し、自走できる組織へ。',
        color: 'from-red-700 to-rose-800',
        glowColor: 'rgba(225, 29, 72, 0.15)',
        borderColor: 'border-red-500/20',
    },
    {
        icon: ShieldAlert,
        title: 'セキュリティへの切実な懸念',
        description: '「情報漏洩が怖い」と感じるのは、大切な情報を守る経営者として当然の感覚です。',
        solution: '「3秒ルール（最終確認）」やガイドライン策定など、地に足のついた対策を具体化。',
        color: 'from-orange-600 to-red-700',
        glowColor: 'rgba(234, 88, 12, 0.15)',
        borderColor: 'border-orange-500/20',
    },
    {
        icon: BookX,
        title: '教育不在の導入',
        description: 'ツールだけを導入しても、現場は使いこなせず混乱する。',
        solution: '実務に即したハンズオン研修で、全社員のデジタルリテラシーを向上。',
        color: 'from-purple-700 to-indigo-800',
        glowColor: 'rgba(126, 34, 206, 0.15)',
        borderColor: 'border-purple-500/20',
    },
    {
        icon: TrendingDown,
        title: '投資対効果の曖昧さ',
        description: '「なんとなく便利」では、経営資源の最適配分ができない。',
        solution: '削減コストと創出価値を可視化し、経営判断の精度を高める。',
        color: 'from-slate-600 to-slate-700',
        glowColor: 'rgba(71, 85, 105, 0.15)',
        borderColor: 'border-slate-500/20',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    }),
};

const Problems = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-mono mb-6">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        TYPICAL CHALLENGES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
                        <span className="text-white">AI導入を阻む</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            「5つの壁」
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        「本当に自社に合うのか」という不安に寄り添い、<br className="hidden md:block" />
                        現場の皆様が<span className="text-blue-400 font-medium">「これなら使いこなせる」</span>と実感できる道を共に拓きます。
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {problems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                whileHover={{
                                    scale: 1.01,
                                    boxShadow: '0 0 40px rgba(30, 64, 175, 0.1)',
                                    borderColor: 'rgba(30, 64, 175, 0.3)'
                                }}
                                className={`glass-card p-8 flex flex-col h-full group ${index >= 3 ? 'lg:col-span-1 lg:last:col-start-2' : ''
                                    }`}
                            >
                                {/* Number + Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl font-bold text-slate-800 font-serif leading-none group-hover:text-slate-700/50 transition-colors">
                                        0{index + 1}
                                    </span>
                                    <div
                                        className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}
                                        style={{ boxShadow: `0 8px 30px ${item.glowColor}` }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 font-serif">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>

                                {/* Solution */}
                                <div className={`relative p-5 rounded-lg bg-blue-900/20 border border-blue-800/30 overflow-hidden group-hover:bg-blue-900/30 transition-colors`}>
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                    <div className="flex items-center gap-2 text-blue-300 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                                        Our Approach
                                    </div>
                                    <p className="text-slate-200 text-sm font-medium leading-relaxed">{item.solution}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Problems;
