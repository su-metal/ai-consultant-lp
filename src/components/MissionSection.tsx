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
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white text-black border-y-4 border-black">
            {/* バックグラウンド装飾 - Minimal dot pattern only */}
            <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-5xl mx-auto"
                >
                    {/* ラベル */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-2 mb-10">
                        <div className="px-6 py-2 border-2 border-black bg-black text-white text-xs font-black tracking-widest uppercase">
                            <Target className="w-4 h-4" />
                            MISSION
                        </div>
                    </motion.div>

                    {/* メインメッセージ */}
                    <motion.div variants={itemVariants} className="text-center md:text-left mb-12">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                            <span className="block mb-4">地域企業を、</span>
                            <span className="bg-black text-white px-4 pb-1 inline-block">
                                AIで強くする。
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed font-bold">
                            <p>
                                東京の大企業だけが最新技術を使える時代は終わりました。<br className="hidden md:block" />
                                東三河で頑張る地元企業こそ、AIの恩恵を受けるべきだと考えます。
                            </p>
                            <p className="inline-block pb-1">
                                難しい言葉は使いません。<br className="hidden md:block" />
                                「現場で本当に使える」仕組みを、一緒に作り上げていきます。
                            </p>
                        </div>
                    </motion.div>

                    {/* 地域タグとアイコン群 */}
                    <motion.div variants={itemVariants} className="pt-12 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                        <div className="flex flex-col items-center md:items-start gap-6 w-full">
                            <div className="flex items-center gap-2 text-black text-xs font-black tracking-widest uppercase">
                                <MapPin className="w-4 h-4" />
                                Area Update
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {areas.map((area, index) => (
                                    <span key={index} className="px-6 py-2.5 bg-white border-2 border-black text-black text-sm font-black shadow-sm transition-transform hover:-translate-y-1">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6 text-black">
                            <Zap className="w-20 h-20 fill-black opacity-10" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionSection;
