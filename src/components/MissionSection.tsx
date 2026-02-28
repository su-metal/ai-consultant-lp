'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { MapPin, Target, Zap } from 'lucide-react';

const MissionSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // アニメーション設定
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // 地域タグ
    const areas = ['豊橋市', '豊川市', '蒲郡市', '田原市', '新城市'];

    return (
        <section ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden bg-slate-50 text-slate-900 border-y border-slate-100">
            {/* バックグラウンド装飾 */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-5xl mx-auto"
                >
                    {/* ラベル */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <div className="px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-600 shadow-sm text-sm font-bold flex items-center gap-2 tracking-widest uppercase">
                            <Target className="w-4 h-4 text-blue-500" />
                            MISSION
                        </div>
                    </motion.div>

                    {/* メインメッセージ */}
                    <motion.div variants={itemVariants} className="text-center md:text-left mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            <span className="block mb-2 text-slate-900">地域企業を、</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                AIで強くする。
                            </span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            <p>
                                東京の大企業だけが最新技術を使える時代は終わりました。<br className="hidden md:block" />
                                東三河で頑張る地元企業こそ、AIの恩恵を受けるべきだと考えます。
                            </p>
                            <p className="text-slate-800 font-medium">
                                難しい言葉は使いません。<br className="hidden md:block" />
                                「現場で本当に使える」仕組みを、一緒に作り上げていきます。
                            </p>
                        </div>
                    </motion.div>

                    {/* 地域タグとアイコン群 */}
                    <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold tracking-widest uppercase">
                                <MapPin className="w-4 h-4" />
                                Area Update
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {areas.map((area, index) => (
                                    <span key={index} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6 text-blue-100">
                            <Zap className="w-16 h-16 fill-blue-50/50" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionSection;
