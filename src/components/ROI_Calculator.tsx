'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator, ArrowRight, DollarSign, Clock, Users } from 'lucide-react';

const ROI_Calculator = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const [employees, setEmployees] = useState(10);
    const [hourlyWage, setHourlyWage] = useState(2500);
    const [hoursReduced, setHoursReduced] = useState(20);

    const monthlySavings = employees * hourlyWage * hoursReduced;
    const yearlySavings = monthlySavings * 12;

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
            {/* Background elements */}
            <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium mb-6 shadow-sm">
                            <Calculator className="w-4 h-4 text-emerald-500" />
                            ROI SIMULATION
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                            見えないコストを<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                                目に見える利益へ
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                            「なんとなく忙しい」を数字で可視化。<br />
                            削減できた時間は、未来への投資や社員の幸せに還元できます。
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                '単純作業からの解放によるモチベーション向上',
                                'ヒューマンエラー削減による手戻り工数の削減',
                                'コア業務への集中による売上アップ'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Calculator Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="modern-card p-8 md:p-10 relative overflow-hidden ring-4 ring-slate-50">
                            {/* Inputs */}
                            <div className="space-y-8 mb-10">
                                {/* Employees Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                            <Users className="w-4 h-4 text-blue-500" />
                                            対象従業員数
                                        </label>
                                        <span className="text-xl font-bold text-slate-900 font-mono">{employees}<span className="text-sm font-sans ml-1 text-slate-500">名</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400"
                                    />
                                </div>

                                {/* Hourly Wage Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                            <DollarSign className="w-4 h-4 text-amber-500" />
                                            平均時給 (概算)
                                        </label>
                                        <span className="text-xl font-bold text-slate-900 font-mono">{hourlyWage.toLocaleString()}<span className="text-sm font-sans ml-1 text-slate-500">円</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="5000"
                                        step="100"
                                        value={hourlyWage}
                                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400"
                                    />
                                </div>

                                {/* Hours Reduced Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                                            <Clock className="w-4 h-4 text-rose-500" />
                                            1人あたりの月間削減時間
                                        </label>
                                        <span className="text-xl font-bold text-slate-900 font-mono">{hoursReduced}<span className="text-sm font-sans ml-1 text-slate-500">時間</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="80"
                                        value={hoursReduced}
                                        onChange={(e) => setHoursReduced(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:accent-rose-400"
                                    />
                                </div>
                            </div>

                            {/* Result Display */}
                            <div className="bg-white rounded-2xl p-8 text-center relative overflow-hidden group border border-slate-200 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <p className="text-emerald-600 text-sm font-bold mb-2 uppercase tracking-wider">年間コスト削減効果</p>
                                    <div className="flex items-baseline justify-center gap-1 mb-2">
                                        <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 font-mono tracking-tight">
                                            ¥{yearlySavings.toLocaleString()}
                                        </span>
                                        <span className="text-xl text-slate-600 font-medium">円</span>
                                    </div>
                                    <p className="text-sm text-slate-500">
                                        月間 {monthlySavings.toLocaleString()}円 の削減
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ROI_Calculator;
