'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calculator, Zap } from 'lucide-react';

const ROI_Calculator = () => {
    const [hourlyWage, setHourlyWage] = useState(2500);
    const [hoursReduced, setHoursReduced] = useState(150);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [yearlySavings, setYearlySavings] = useState(0);

    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        const monthly = hourlyWage * hoursReduced;
        setMonthlySavings(monthly);
        setYearlySavings(monthly * 12);
    }, [hourlyWage, hoursReduced]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('ja-JP').format(val);
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-600/3 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-mono mb-6">
                        <Calculator className="w-4 h-4 text-emerald-400" />
                        ROI SIMULATOR
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
                        <span className="text-white">貴社にとっての</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400">
                            「確かな一歩」を試算
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        無理のない投資計画のために。<br className="hidden md:block" />
                        AI導入による時間創出と、<span className="text-emerald-400 font-medium">生まれた時間の価値</span>を可視化します。
                    </p>
                </motion.div>

                {/* Calculator body */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-t-4 border-t-emerald-500/50"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Inputs */}
                        <div className="space-y-10">
                            <div>
                                <label className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">
                                        平均時給 (Hourly Wage)
                                    </span>
                                    <span className="text-2xl font-bold text-white font-mono border-b border-slate-600 px-2">
                                        ¥{formatCurrency(hourlyWage)}
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="10000"
                                    step="100"
                                    value={hourlyWage}
                                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                                    className="w-full accent-emerald-500"
                                />
                                <div className="flex justify-between text-xs text-slate-600 mt-2 font-mono">
                                    <span>¥1,000</span>
                                    <span>¥10,000</span>
                                </div>
                            </div>

                            <div>
                                <label className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">
                                        削減時間 (Hours/Month)
                                    </span>
                                    <span className="text-2xl font-bold text-white font-mono border-b border-slate-600 px-2">
                                        {hoursReduced}h
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="1000"
                                    step="10"
                                    value={hoursReduced}
                                    onChange={(e) => setHoursReduced(Number(e.target.value))}
                                    className="w-full accent-emerald-500"
                                />
                                <div className="flex justify-between text-xs text-slate-600 mt-2 font-mono">
                                    <span>10h</span>
                                    <span>1,000h</span>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-400 leading-relaxed font-mono">
                                <Zap className="w-3.5 h-3.5 inline-block mr-2 text-amber-400" />
                                伴走の実績: 10万円以下の初期投資から、94.1%の中小企業が効果を実感しています。
                            </div>
                        </div>

                        {/* Results */}
                        <div className="flex flex-col justify-center gap-6">
                            {/* Monthly */}
                            <div className="p-6 rounded-lg bg-slate-900/40 border border-slate-800 text-center">
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Est. Monthly Savings</p>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={monthlySavings}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-3xl font-bold text-slate-200 font-mono"
                                    >
                                        ¥{formatCurrency(monthlySavings)}
                                    </motion.div>
                                </AnimatePresence>
                                <p className="text-slate-600 text-xs mt-1">月間コスト削減額</p>
                            </div>

                            {/* Yearly */}
                            <div className="relative p-8 rounded-lg overflow-hidden text-center bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-900/50 shadow-2xl shadow-emerald-900/20">

                                <div className="relative z-10">
                                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] mb-4">Projected Annual ROI</p>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={yearlySavings}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="text-5xl md:text-6xl font-black text-white font-mono tracking-tight"
                                            style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.3)' }}
                                        >
                                            ¥{formatCurrency(yearlySavings)}
                                        </motion.div>
                                    </AnimatePresence>
                                    <p className="text-emerald-500/60 text-sm mt-3 font-medium">年間コスト削減効果</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ROI_Calculator;
