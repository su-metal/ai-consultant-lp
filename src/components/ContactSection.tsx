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
        <section className="py-20 md:py-32 relative overflow-hidden bg-white border-b-4 border-black">
            {/* Background decoration - Extreme Minimal */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-black/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Left content */}
                    <div>
                        <div className="mb-12">
                            <div className="flex flex-col cursor-default">
                                <div className="flex items-baseline leading-none mb-4">
                                    <span className="text-4xl md:text-6xl tracking-tighter text-black font-black uppercase">
                                        machinami
                                    </span>
                                    <span className="text-4xl md:text-6xl tracking-tighter ml-2 md:ml-4 font-black text-white bg-black px-2 md:px-4 pb-1 md:pb-2">
                                        AI
                                    </span>
                                </div>
                                <div className="flex items-center opacity-80">
                                    <span className="text-[10px] md:text-sm tracking-[0.3em] text-black font-black uppercase shrink-0">
                                        まちなみ
                                    </span>
                                    <div className="w-[2px] h-4 bg-black mx-2 md:mx-6" />
                                    <span className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.3em] text-black font-black uppercase">
                                        Strategic AI Consulting Partner
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-black mb-12 leading-loose text-xl max-w-lg font-black uppercase italic tracking-wider">
                            AIで、もっと自由に。<br />
                            <span className="bg-black text-white px-2 py-1 not-italic">未来を変える一歩を、ここから。</span>
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 text-black group">
                                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="font-black text-lg tracking-wide uppercase">info@machinami0924.com</span>
                            </div>
                            <div className="flex items-center gap-6 text-black group">
                                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="font-black text-lg tracking-wide uppercase">090-3454-2305 <span className="text-xs ml-2 opacity-50">(WEEKDAY 9:00 - 18:00)</span></span>
                            </div>
                            <div className="flex items-center gap-6 text-black group">
                                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="font-black text-sm tracking-wide uppercase">〒450-0002<br /> 愛知県名古屋市中村区名駅4丁目24番5号第2森ビル401</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form - Monochrome Bold */}
                    <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-3xl font-black text-black mb-2 uppercase tracking-tighter">Contact Us</h3>
                        <p className="text-xs font-black text-black/40 mb-10 uppercase tracking-[0.3em]">30分 無料相談</p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-[10px] font-black text-black/60 uppercase tracking-[0.2em] mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company / Name"
                                    value={formData.companyName}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, companyName: event.target.value }))
                                    }
                                    className="w-full bg-white border-2 border-black p-4 text-black placeholder-black/20 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-black/60 uppercase tracking-[0.2em] mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                    required
                                    autoComplete="email"
                                    className="w-full bg-white border-2 border-black p-4 text-black placeholder-black/20 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-black/60 uppercase tracking-[0.2em] mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Your Inquiry"
                                    value={formData.message}
                                    onChange={(event) =>
                                        setFormData((prev) => ({ ...prev, message: event.target.value }))
                                    }
                                    required
                                    className="w-full bg-white border-2 border-black p-4 text-black placeholder-black/20 focus:outline-none focus:bg-black focus:text-white transition-all resize-none font-bold"
                                />
                            </div>
                            {submitState.type && (
                                <p
                                    className={`text-sm font-black uppercase tracking-widest ${submitState.type === 'success' ? 'text-black bg-white border-2 border-black p-3' : 'text-white bg-black p-3'
                                        }`}
                                    role="status"
                                >
                                    {submitState.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full py-5 text-xl font-black uppercase tracking-widest"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <ArrowRight className="w-6 h-6 ml-3" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
