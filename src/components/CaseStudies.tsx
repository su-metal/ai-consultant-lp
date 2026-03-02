'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, Utensils, FileText, TrendingUp, Info } from 'lucide-react';

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
    },
];

const CaseStudies = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-bold mb-6 border-b-4 border-r-4 border-slate-500">
                        <TrendingUp className="w-4 h-4" />
                        USE CASES & IMPACT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black uppercase">
                        AI導入がもたらす
                        <br />
                        <span className="bg-black text-white px-4 py-1 inline-block mt-2">
                            劇的な変化と可能性
                        </span>
                    </h2>
                    <p className="text-xl text-black max-w-2xl mx-auto font-bold leading-relaxed">
                        「10万円以下の投資からでも、未来は変わる」<br className="hidden md:block" />
                        業種ごとの<span className="underline decoration-4">一般的な導入モデルケース</span>をご紹介します。
                    </p>
                </motion.div>

                {/* Case cards */}
                <div className="space-y-12 max-w-5xl mx-auto mb-16">
                    {cases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="bg-white border-4 border-black group transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Left: Info */}
                                    <div className="flex-1 p-8 md:p-10 relative">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-4 bg-black text-white border-b-4 border-r-4 border-slate-500">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-black font-mono text-black/40 uppercase tracking-widest block mb-1">{item.industry}</span>
                                                <h3 className="text-3xl font-black text-black tracking-tighter uppercase">{item.company}</h3>
                                            </div>
                                        </div>
                                        <p className="text-black/80 text-lg font-medium leading-relaxed">{item.detail}</p>
                                    </div>

                                    {/* Right: Metrics Dashboard */}
                                    <div className="md:w-[400px] bg-black text-white p-8 flex flex-col justify-center gap-8 border-t-4 md:border-t-0 md:border-l-4 border-black">
                                        {/* Reduction Metric */}
                                        <div>
                                            <div className="flex justify-between text-xs text-white/50 font-black mb-4 uppercase tracking-widest">
                                                <span>{item.metric}</span>
                                                <span>Impact</span>
                                            </div>
                                            <div className="flex items-end gap-3 mb-4">
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                                                    className="text-5xl font-black tabular-nums"
                                                >
                                                    {item.after}
                                                </motion.span>
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                                    className="text-xs bg-white text-black px-3 py-1 font-black uppercase tracking-tighter"
                                                >
                                                    {item.reduction}
                                                </motion.span>
                                            </div>
                                            <div className="w-full h-4 bg-white/10 border-2 border-white/20 overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: index === 0 ? '94%' : index === 1 ? '70%' : '85%' }}
                                                    transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: [0.33, 1, 0.68, 1] }}
                                                    className="h-full bg-white relative"
                                                >
                                                    <motion.div
                                                        animate={{ x: ["-100%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent w-1/2"
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-white/40 mt-2 font-black uppercase tracking-widest">
                                                <span>Before: {item.before}</span>
                                                <span>AI Achievement</span>
                                            </div>
                                        </div>

                                        {/* ROI Highlight */}
                                        <div className="pt-6 border-t-2 border-white/20">
                                            <span className="text-xs text-white/50 font-black uppercase tracking-widest">Annual ROI (Est.)</span>
                                            <p className="text-3xl font-black mt-2 tracking-tighter">{item.roi}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Disclaimer */}
                <div className="max-w-5xl mx-auto flex items-start gap-4 p-8 border-4 border-black bg-slate-50 text-black font-bold">
                    <Info className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed">
                        ※ 上記は一般的なAI導入による効果のモデルケース（試算）であり、お客様ごとの具体的な成果を保証するものではありません。<br />
                        貴社の業務内容や課題に合わせて、最適な導入プランと削減シミュレーションを個別に作成いたします。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
