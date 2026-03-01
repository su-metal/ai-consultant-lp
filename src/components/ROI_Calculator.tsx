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
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-bold mb-6 border-b-4 border-r-4 border-slate-500">
                            <Calculator className="w-4 h-4" />
                            ROI SIMULATION
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black leading-tight uppercase">
                            見えないコストを<br />
                            <span className="bg-black text-white px-4 py-1 inline-block mt-2">
                                目に見える利益へ
                            </span>
                        </h2>
                        <p className="text-xl text-black mb-8 leading-relaxed font-bold">
                            「なんとなく忙しい」を数字で可視化。<br />
                            削減できた時間は、未来への投資や社員の幸せに還元できます。
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                '単純作業からの解放によるモチベーション向上',
                                'ヒューマンエラー削減による手戻り工数の削減',
                                'コア業務への集中による売上アップ'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black font-bold">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 border-b-2 border-r-2 border-slate-500">
                                        <ArrowRight className="w-4 h-4" />
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
                        <div className="bg-white border-4 border-black p-8 md:p-10 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            {/* Inputs */}
                            <div className="space-y-8 mb-10">
                                {/* Employees Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-black font-black text-sm uppercase tracking-widest">
                                            <Users className="w-5 h-5" />
                                            対象従業員数
                                        </label>
                                        <span className="text-2xl font-black text-black font-mono">{employees}<span className="text-sm font-sans ml-1 text-black/40">名</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(Number(e.target.value))}
                                        className="w-full h-8 bg-transparent appearance-none cursor-pointer accent-black"
                                        style={{ accentColor: 'black' }}
                                    />
                                </div>

                                {/* Hourly Wage Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-black font-black text-sm uppercase tracking-widest">
                                            <DollarSign className="w-5 h-5" />
                                            平均時給 (概算)
                                        </label>
                                        <span className="text-2xl font-black text-black font-mono">{hourlyWage.toLocaleString()}<span className="text-sm font-sans ml-1 text-black/40">円</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="5000"
                                        step="100"
                                        value={hourlyWage}
                                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                                        className="w-full h-8 bg-transparent appearance-none cursor-pointer accent-black"
                                    />
                                </div>

                                {/* Hours Reduced Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="flex items-center gap-2 text-black font-black text-sm uppercase tracking-widest">
                                            <Clock className="w-5 h-5" />
                                            1人あたりの月間削減時間
                                        </label>
                                        <span className="text-2xl font-black text-black font-mono">{hoursReduced}<span className="text-sm font-sans ml-1 text-black/40">時間</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="80"
                                        value={hoursReduced}
                                        onChange={(e) => setHoursReduced(Number(e.target.value))}
                                        className="w-full h-8 bg-transparent appearance-none cursor-pointer accent-black"
                                    />
                                </div>
                            </div>

                            {/* Result Display */}
                            <div className="bg-black text-white p-8 text-center relative overflow-hidden border-b-8 border-slate-500">
                                <div className="relative z-10">
                                    <p className="text-white/60 text-xs font-black mb-4 uppercase tracking-widest">年間コスト削減効果</p>
                                    <div className="flex items-baseline justify-center gap-2 mb-2">
                                        <span className="text-5xl md:text-6xl font-black font-mono tracking-tighter">
                                            ¥{yearlySavings.toLocaleString()}
                                        </span>
                                        <span className="text-xl font-black">円</span>
                                    </div>
                                    <p className="text-sm font-bold text-white/40">
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
