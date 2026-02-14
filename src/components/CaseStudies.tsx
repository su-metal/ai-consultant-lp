'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Utensils, FileText, ArrowRight, TrendingUp, Info } from 'lucide-react';

const cases = [
    {
        icon: Factory,
        industry: '製造業 (年商30億円規模)',
        company: '見積業務の自動化モデル',
        metric: '見積作成工数',
        before: '180分/件',
        after: '10分/件',
        reduction: '約94%削減',
        roi: '年間 1,200万円 相当',
        detail: '過去の図面データをAIに学習させ、類似形状を瞬時に検索するシステムを構築した場合の試算。熟練職人の暗黙知をデータベース化し、属人化を解消します。',
        color: 'blue'
    },
    {
        icon: Utensils,
        industry: '飲食・小売 (多店舗展開)',
        company: '需要予測・発注最適化モデル',
        metric: '発注業務・在庫ロス',
        before: '勘と経験',
        after: 'AI需要予測',
        reduction: 'ロス率 最小化',
        roi: '粗利益 改善見込',
        detail: '天気・イベント・近隣人流データから客数を予測するモデル。過剰在庫や機会損失を防ぎ、店舗利益の最大化を目指す活用例です。',
        color: 'emerald'
    },
    {
        icon: FileText,
        industry: '専門サービス業',
        company: 'バックオフィス効率化モデル',
        metric: '仕訳入力・監査',
        before: '手入力',
        after: 'AI-OCR活用',
        reduction: '月300時間削減',
        roi: '生産性 1.5倍',
        detail: 'AI-OCRとRPAを組み合わせ、領収書の読み取りから入力までを自動化。創出した時間で付加価値の高い業務へシフトする、典型的なDX事例です。',
        color: 'amber'
    },
];

const CaseStudies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
            {/* Background elements */}
            <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium mb-6 shadow-sm">
                        <TrendingUp className="w-4 h-4" />
                        USE CASES & IMPACT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        <span className="">AI導入がもたらす</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            劇的な変化と可能性
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        「10万円以下の投資からでも、未来は変わる」<br className="hidden md:block" />
                        業種ごとの<span className="text-blue-600 font-bold">一般的な導入モデルケース</span>をご紹介します。
                    </p>
                </motion.div>

                {/* Case cards */}
                <div className="space-y-8 max-w-5xl mx-auto mb-12">
                    {cases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="modern-card group hover:border-blue-300 transition-colors overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Left: Info */}
                                    <div className="flex-1 p-8 md:p-10 relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                                                <Icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">{item.industry}</span>
                                                <h3 className="text-2xl font-bold text-slate-900">{item.company}</h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-base leading-relaxed">{item.detail}</p>
                                    </div>

                                    {/* Right: Metrics Dashboard */}
                                    <div className="md:w-[400px] bg-slate-50/80 border-t md:border-t-0 md:border-l border-slate-100 p-8 flex flex-col justify-center gap-6">

                                        {/* Reduction Metric */}
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">
                                                <span>{item.metric}</span>
                                                <span>Expected Impact</span>
                                            </div>
                                            <div className="flex items-end gap-3">
                                                <span className="text-4xl font-bold text-slate-800 tabular-nums">{item.after}</span>
                                                <span className="text-xs text-emerald-600 mb-2 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                                                    <TrendingUp className="w-3 h-3" /> {item.reduction}
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '90%' }}
                                                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                                />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                                                <span>Before: {item.before}</span>
                                                <span>Target</span>
                                            </div>
                                        </div>

                                        {/* ROI Highlight */}
                                        <div className="pt-4 border-t border-slate-200">
                                            <span className="text-xs text-amber-600 font-mono uppercase tracking-wider">Annual ROI (Est.)</span>
                                            <p className="text-xl font-bold text-amber-500 mt-1">{item.roi}</p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Disclaimer */}
                <div className="max-w-5xl mx-auto flex items-start gap-3 p-4 rounded-lg bg-slate-100/50 text-slate-500 text-sm">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>
                        ※ 上記は一般的なAI導入による効果のモデルケース（試算）であり、お客様ごとの具体的な成果を保証するものではありません。<br />
                        貴社の業務内容や課題に合わせて、最適な導入プランと削減シミュレーションを個別に作成いたします。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
