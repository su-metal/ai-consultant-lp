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
    },
    {
        icon: UserX,
        title: '丸投げ症候群',
        description: 'ベンダー依存の体制では、社内にノウハウが蓄積されない。',
        solution: '社内人材を「AI推進リーダー」へ育成し、自走できる組織へ。',
    },
    {
        icon: ShieldAlert,
        title: 'セキュリティへの切実な懸念',
        description: '「情報漏洩が怖い」と感じるのは、大切な情報を守る経営者として当然の感覚です。',
        solution: '「3秒ルール（最終確認）」やガイドライン策定など、地に足のついた対策を具体化。',
    },
    {
        icon: BookX,
        title: '教育不在の導入',
        description: 'ツールだけを導入しても、現場は使いこなせず混乱する。',
        solution: '実務に即したハンズオン研修で、全社員のデジタルリテラシーを向上。',
    },
    {
        icon: TrendingDown,
        title: '投資対効果の曖昧さ',
        description: '「なんとなく便利」では、経営資源の最適配分ができない。',
        solution: '削減コストと創出価値を可視化し、経営判断の精度を高める。',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1] as any,
        },
    }),
};

const Problems = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-bold mb-6 border-b-4 border-r-4 border-slate-500">
                        <AlertTriangle className="w-4 h-4" />
                        TYPICAL CHALLENGES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black uppercase">
                        AI導入を阻む
                        <br />
                        <span className="bg-black text-white px-4 py-1 inline-block mt-2">
                            「5つの壁」
                        </span>
                    </h2>
                    <p className="text-xl text-black max-w-2xl mx-auto font-bold leading-relaxed">
                        「本当に自社に合うのか」という不安に寄り添い、<br className="hidden md:block" />
                        現場の皆様が<span className="underline decoration-4">「これなら使いこなせる」</span>と実感できる道を共に拓きます。
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {problems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                className={`bg-white border-4 border-black p-8 flex flex-col h-full group transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${index >= 3 ? 'lg:col-span-1 lg:last:col-start-2' : ''
                                    }`}
                            >
                                {/* Number + Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-6xl font-black text-black/10 font-sans leading-none group-hover:text-black/20 transition-colors">
                                        0{index + 1}
                                    </span>
                                    <div className="p-4 bg-black text-white border-b-4 border-r-4 border-slate-500">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-black/80 text-sm font-medium leading-relaxed mb-8 flex-grow">{item.description}</p>

                                {/* Solution */}
                                <div className="relative p-6 bg-black text-white border-b-8 border-slate-500 transition-transform group-hover:translate-y-1">
                                    <div className="flex items-center gap-2 text-white/60 text-xs font-black font-mono uppercase tracking-widest mb-3">
                                        <Lightbulb className="w-4 h-4 text-white" />
                                        Our Approach
                                    </div>
                                    <p className="text-white text-sm font-bold leading-relaxed">{item.solution}</p>
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
