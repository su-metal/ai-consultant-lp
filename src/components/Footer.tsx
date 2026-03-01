import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 bg-black border-t-4 border-black text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b-2 border-white/20">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Bot className="w-8 h-8 text-white" />
                            <span className="text-white font-black text-2xl tracking-tighter uppercase">まちなみ AI</span>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-8 font-bold">
                            「地域企業を、AIで強くする。」<br />
                            東三河を拠点に、生成AIの業務活用支援から専用アプリ開発まで、幅広くサポートします。
                        </p>

                        {/* SNS Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/lrhm9AEGMR68513" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                {/* X (Twitter) Icon Custom SVG for better appearance */}
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Navigation</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link href="/" className="hover:line-through transition-all opacity-70 hover:opacity-100">Top</Link></li>
                            <li><Link href="/services" className="hover:line-through transition-all opacity-70 hover:opacity-100">Services</Link></li>
                            <li><Link href="/works" className="hover:line-through transition-all opacity-70 hover:opacity-100">Works</Link></li>
                            <li><Link href="/blog" className="hover:line-through transition-all opacity-70 hover:opacity-100">Blog</Link></li>
                            <li><Link href="/contact" className="hover:line-through transition-all opacity-70 hover:opacity-100">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li className="flex items-start gap-3">
                                <span className="px-1 bg-white text-black text-[10px] font-black">M</span>
                                <a href="mailto:info@machinami0924.com" className="hover:line-through transition-all break-all opacity-70 hover:opacity-100">info@machinami0924.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="px-1 bg-white text-black text-[10px] font-black">T</span>
                                <span className="opacity-70">090-3454-2305</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="px-1 bg-white text-black text-[10px] font-black">A</span>
                                <span className="opacity-70">愛知県名古屋市中村区名駅<br />4-24-5 第2森ビル401</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <p>
                        &copy; 2026 まちなみ AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-white/60">Founder: Masanori Sada</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
