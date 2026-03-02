'use client';

import React, { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitState({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = (await response.json()) as { error?: string; message?: string };

            if (!response.ok) {
                throw new Error(result.error || '送信に失敗しました。');
            }

            setSubmitState({
                type: 'success',
                message: result.message || 'お問い合わせを受け付けました。折り返しご連絡します。',
            });
            setFormData({
                companyName: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setSubmitState({
                type: 'error',
                message: error instanceof Error ? error.message : '送信に失敗しました。時間をおいて再度お試しください。',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left */}
                    <div>
                        <div className="mb-12">
                            <div className="flex flex-col cursor-default">
                                <div className="flex items-baseline leading-none mb-3">
                                    <span className="text-5xl tracking-tighter text-slate-950 font-medium">
                                        machinami
                                    </span>
                                    <span className="text-5xl tracking-tighter ml-3 font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">
                                        AI<span className="text-blue-500">.</span>
                                    </span>
                                </div>
                                <div className="flex items-center opacity-70">
                                    <span className="text-xs tracking-[0.5em] text-slate-500 font-bold uppercase shrink-0">
                                        まちなみ
                                    </span>
                                    <div className="w-[1px] h-3 bg-slate-300 mx-4" />
                                    <span className="text-[10px] tracking-[0.3em] text-slate-400 font-bold uppercase">
                                        Strategic AI Consulting Partner
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 mb-10 leading-loose text-base max-w-lg font-normal">
                            「AIで、もっと自由に。」<br />
                            <span className="text-slate-900 font-bold border-b-2 border-blue-500/30 pb-1">未来を変える一歩を、ここから始めましょう。</span>
                        </p>

                        <div className="space-y-5">
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
                    <div className="modern-card p-6 md:p-10 border-t-4 border-t-blue-500">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">お問い合わせ</h3>
                        <p className="text-sm text-slate-500 mb-6 font-mono">30 MINUTES FREE CONSULTATION</p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="御社名"
                                    value={formData.companyName}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, companyName: event.target.value }))
                                    }
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="メールアドレス"
                                    value={formData.email}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                    required
                                    autoComplete="email"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="ご相談内容（簡単で構いません）"
                                    value={formData.message}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, message: event.target.value }))
                                    }
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none shadow-sm"
                                />
                            </div>
                            {submitState.type && (
                                <p
                                    className={`text-sm ${submitState.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
                                        }`}
                                    role="status"
                                >
                                    {submitState.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-lg text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                <span className="relative z-10">{isSubmitting ? '送信中...' : '無料相談を申し込む'}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
