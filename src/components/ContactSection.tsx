'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Bot } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-lg shadow-blue-900/5">
                                <Bot className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-serif">Machinami AI</h2>
                                <p className="text-xs text-slate-500 font-mono tracking-widest uppercase mt-1">AI Consulting & Solution</p>
                            </div>
                        </div>

                        <p className="text-slate-600 mb-12 leading-loose text-lg max-w-lg font-normal">
                            「AIで、もっと自由に。」<br />
                            <span className="text-slate-900 font-bold border-b-2 border-blue-500/30 pb-1">未来を変える一歩を、ここから始めましょう。</span>
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 text-slate-600 group">
                                <div className="p-2.5 rounded-full bg-white border border-slate-200 group-hover:border-blue-500/50 group-hover:text-blue-600 transition-colors shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="group-hover:text-slate-900 transition-colors tracking-wide">info@machinami0924.com</span>
                            </div>
                            <div className="flex items-center gap-5 text-slate-600 group">
                                <div className="p-2.5 rounded-full bg-white border border-slate-200 group-hover:border-blue-500/50 group-hover:text-blue-600 transition-colors shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="group-hover:text-slate-900 transition-colors tracking-wide">090-3454-2305 <span className="text-xs ml-2 text-slate-500">(平日 9:00 - 18:00)</span></span>
                            </div>
                            <div className="flex items-center gap-5 text-slate-600 group">
                                <div className="p-2.5 rounded-full bg-white border border-slate-200 group-hover:border-blue-500/50 group-hover:text-blue-600 transition-colors shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="group-hover:text-slate-900 transition-colors tracking-wide">〒450-0002<br /> 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="modern-card p-8 md:p-12 border-t-4 border-t-blue-500">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">お問い合わせ</h3>
                        <p className="text-sm text-slate-500 mb-8 font-mono">30 MINUTES FREE CONSULTATION</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="御社名"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="メールアドレス"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="ご相談内容（簡単で構いません）"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none shadow-sm"
                                />
                            </div>
                            <button
                                type="button"
                                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <span className="relative z-10">無料相談を申し込む</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
