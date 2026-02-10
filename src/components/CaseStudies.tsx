'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Utensils, FileText, ArrowRight, TrendingUp } from 'lucide-react';

const cases = [
    {
        icon: Factory,
        industry: '製造業 (年商30億円)',
        company: '自動車部品メーカー A社',
        metric: '見積作成工数',
        before: '180分/件',
        after: '10分/件',
        reduction: '94%削減',
        roi: '年間 1,200万円 削減',
        detail: '過去30年分の図面データをAIに学習させ、類似形状を瞬時に検索。熟練職人の暗黙知をデータベース化し、若手社員でも即座に見積もりが可能に。',
        color: 'blue'
    },
    {
        icon: Utensils,
        industry: '飲食・小売 (20店舗)',
        company: '多店舗展開チェーン B社',
        metric: '発注業務・在庫ロス',
        before: '店長直感',
        after: 'AI需要予測',
        reduction: 'ロス率 0.8%未満',
        roi: '粗利益 800万円/月 改善',
        detail: '天気・イベント・近隣人流データから、1時間ごとの来店客数を92%の精度で予測。発注の自動化により、店長の残業時間を月40時間削減。',
        color: 'emerald'
    },
    {
        icon: FileText,
        industry: '専門サービス業',
        company: '税理士法人 C事務所',
        metric: '仕訳入力・監査',
        before: '手入力',
        after: 'AI-OCR完全自動化',
        reduction: '月300時間削減',
        roi: '顧問可能数 1.5倍',
        detail: 'AI-OCRとRPAを組み合わせ、領収書の読み取りから会計ソフトへの入力までを無人化。創出した時間で付加価値の高い経営コンサルティングへシフト。',
        color: 'amber'
    },
];

const CaseStudies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[var(--navy)] to-[var(--navy-light)]">
            {/* Background elements */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-300 text-sm font-mono mb-6">
                        <TrendingUp className="w-4 h-4" />
                        VOICE OF SUCCESS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
                        <span className="text-white">導入企業の<span className="text-amber-400">94.1%</span>が</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                            確かな手応えを実感
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        「10万円以下の投資からでも、未来は変わる」<br className="hidden md:block" />
                        地域企業の皆様と共に歩んだ、<span className="text-white font-medium">伴走の記録</span>です。
                    </p>
                </motion.div>

                {/* Case cards */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {cases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="glass-card group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Left: Info */}
                                    <div className="flex-1 p-8 md:p-10 relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                                                <Icon className="w-6 h-6 text-slate-300" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">{item.industry}</span>
                                                <h3 className="text-2xl font-bold text-white font-serif">{item.company}</h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                                    </div>

                                    {/* Right: Metrics Dashboard */}
                                    <div className="md:w-[400px] bg-slate-900/30 border-t md:border-t-0 md:border-l border-white/5 p-8 flex flex-col justify-center gap-6">

                                        {/* Reduction Metric */}
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">
                                                <span>{item.metric}</span>
                                                <span>Improvements</span>
                                            </div>
                                            <div className="flex items-end gap-3">
                                                <span className="text-3xl font-bold text-white tabular-nums">{item.after}</span>
                                                <span className="text-sm text-green-400 mb-1 flex items-center gap-1 bg-green-900/20 px-2 py-0.5 rounded">
                                                    <TrendingUp className="w-3 h-3" /> {item.reduction}
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '94%' }}
                                                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
                                                <span>{item.before}</span>
                                                <span>Target met</span>
                                            </div>
                                        </div>

                                        {/* ROI Highlight */}
                                        <div className="pt-4 border-t border-white/5">
                                            <span className="text-xs text-amber-500/80 font-mono uppercase tracking-wider">Annual ROI Effect</span>
                                            <p className="text-xl font-bold text-amber-400 font-serif mt-1 glow-text-gold">{item.roi}</p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
