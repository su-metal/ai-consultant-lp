'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Sparkles, Code, HeartHandshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
    {
        icon: Sparkles,
        title: 'AIエージェント活用',
        description: 'ChatGPTやClaudeなどの最先端AIエージェントを活用し、日々の業務を自動化。問い合わせ対応、資料作成、データ分析など、人手に頼っていた作業を効率化します。',
        color: 'text-blue-600',
        bgSrc: 'from-blue-100 to-blue-50',
        borderColor: 'border-blue-400',
        topGradient: 'from-blue-400 to-blue-600'
    },
    {
        icon: Code,
        title: '業務特化アプリ開発',
        description: '御社の業務フローに合わせた専用アプリをゼロから構築。「既製品ではうちの業務に合わない」という悩みを、小回りの利くオーダーメイド開発で解決します。',
        color: 'text-indigo-600',
        bgSrc: 'from-indigo-100 to-indigo-50',
        borderColor: 'border-indigo-400',
        topGradient: 'from-indigo-400 to-indigo-600'
    },
    {
        icon: HeartHandshake,
        title: '伴走型サポート',
        description: '「ツールを渡して終わり」ではありません。AIが現場のツールとして定着するまで、定期的なフォローアップや研修を通じて、泥臭く一緒に現場を歩みます。',
        color: 'text-amber-600',
        bgSrc: 'from-amber-100 to-amber-50',
        borderColor: 'border-amber-400',
        topGradient: 'from-amber-400 to-amber-600'
    }
];

const Capabilities = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // アニメーション設定
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10">
                {/* ヘッダー */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-blue-600 text-sm font-bold mb-6 shadow-sm tracking-widest uppercase">
                        What we can do
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                        まちなみ AI に<br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            できること
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        「何から始めればいいかわからない」という状態でもご安心ください。<br className="hidden md:block" />
                        課題抽出からツールの選定・開発、運用定着まで、ワンストップで支援します。
                    </p>
                </motion.div>

                {/* カードグリッド */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {capabilities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="modern-card p-10 relative overflow-hidden group flex flex-col items-start"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.topGradient}`} />
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm bg-gradient-to-br ${item.bgSrc} ${item.color} group-hover:scale-110 transition-transform duration-300 border border-white/60`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <div className="space-y-4 pt-6 border-t border-slate-100 flex-1 flex flex-col justify-between w-full">
                                    <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-1">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <Link href="/services" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group px-6 py-3 rounded-full hover:bg-indigo-50">
                        サービス一覧を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Capabilities;
