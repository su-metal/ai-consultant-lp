import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Bot className="w-6 h-6 text-blue-400" />
                            <span className="text-white font-serif font-bold text-xl tracking-tight">まちなみ AI</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                            「地域企業を、AIで強くする。」<br />
                            東三河を拠点に、生成AIの業務活用支援から専用アプリ開発まで、幅広くサポートします。
                        </p>

                        {/* SNS Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/lrhm9AEGMR68513" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-500 hover:text-white transition-colors">
                                {/* X (Twitter) Icon Custom SVG for better appearance */}
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-serif">Navigation</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Top</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link href="/works" className="hover:text-blue-400 transition-colors">Works</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-serif">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-slate-500 mt-0.5">M</span>
                                <a href="mailto:info@machinami0924.com" className="hover:text-blue-400 transition-colors break-all">info@machinami0924.com</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-slate-500 mt-0.5">T</span>
                                <span>090-3454-2305</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400">
                                <span className="font-bold text-slate-500 mt-0.5">A</span>
                                <span>愛知県名古屋市中村区名駅<br />4-24-5 第2森ビル401</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p className="font-mono">
                        &copy; 2026 まちなみ AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-blue-400 transition-colors">プライバシーポリシー</Link>
                        <Link href="/terms" className="hover:text-blue-400 transition-colors">利用規約</Link>
                        <span className="font-serif">代表: 佐田真教</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
