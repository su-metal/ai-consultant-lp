'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// メインプロダクト（MisePo）
const mainProduct = {
    id: 1,
    title: "MisePo (ミセポ)",
    tagline: "店舗向けAI投稿作成アシスタント",
    description: "「想いを、一瞬で言葉に。」\n数行のメモから、お店の「らしさ」を活かしたSNS投稿を瞬時に生成します。飲食店や美容室などの実店舗オーナー様の「投稿が続かない」「文章が思いつかない」という悩みを解決します。",
    features: [
        "メモから数秒で投稿文を生成",
        "お店ごとのトーン＆マナー学習",
        "PWA対応でアプリ感覚で利用可能"
    ],
    tags: ["Next.js", "Supabase", "PWA", "Tailwind CSS"],
    image: "/api/placeholder/800/400",
    storeLink: "http://misepo.jp/",
    githubLink: null,
};

// 開発中アプリ
const devApps = [
    {
        id: 3,
        title: "葬儀会場手配のスケジュール管理アプリ",
        description: "葬儀会場の空き状況確認から手配進行までを一元管理し、調整業務を効率化するスケジュール管理アプリ。",
        tags: ["Next.js", "Supabase", "Calendar UI"],
        image: "/api/placeholder/400/300",
        storeLink: "#",
        githubLink: null,
        status: "Under Development",
    },
    {
        id: 4,
        title: "受注伝票OCR自動転記アプリ",
        description: "製本工場の受注伝票をカメラで読み取り、抽出した内容をスプレッドシートへ自動転記する業務効率化アプリ。",
        tags: ["OCR", "Google Sheets API", "Python", "Camera Input"],
        image: "/api/placeholder/400/300",
        storeLink: "#",
        githubLink: null,
        status: "Under Development",
    }
];

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans pt-32 pb-24 selection:bg-black selection:text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter"
                    >
                        Personal Works
                    </motion.h1>
                    <p className="text-xl text-black font-bold uppercase tracking-widest">
                        自社開発プロダクト、および開発中のプロジェクト
                    </p>
                </div>

                {/* Main Product Section */}
                <div className="max-w-6xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border-4 border-black transition-all hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="aspect-video md:aspect-auto bg-black relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black">
                                {/* 画像プレースホルダー */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:scale-110 transition-transform duration-700">
                                    <Sparkles className="w-32 h-32" />
                                </div>
                                <div className="absolute top-6 left-6 z-10 bg-white text-black px-4 py-2 text-xs font-black uppercase tracking-widest border-b-4 border-r-4 border-slate-500">
                                    Flagship Product
                                </div>
                            </div>

                            <div className="p-10 md:p-16 flex flex-col justify-center">
                                <div className="flex gap-2 flex-wrap mb-8">
                                    {mainProduct.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-white border-b-2 border-r-2 border-slate-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">{mainProduct.title}</h2>
                                <p className="text-xl font-bold mb-8 uppercase tracking-widest bg-black text-white px-4 py-1 self-start">{mainProduct.tagline}</p>

                                <p className="text-black font-bold leading-relaxed mb-8 whitespace-pre-line text-lg">
                                    {mainProduct.description}
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {mainProduct.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 text-black font-bold">
                                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 border-b-2 border-r-2 border-slate-500">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center">
                                    <a href={mainProduct.storeLink} target="_blank" rel="noopener noreferrer"
                                        className="group relative px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-wider border-b-4 border-r-4 border-slate-500 hover:translate-x-1 hover:translate-y-1 hover:border-b-0 hover:border-r-0 transition-all flex items-center gap-3">
                                        <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" /> Visit Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* THE TOLL */}
                <div className="max-w-6xl mx-auto mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black text-white border-4 border-black p-10 md:p-16 relative overflow-hidden group hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-900 transition-all"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                            <div className="flex-1">
                                <p className="text-xs font-black text-white/40 mb-4 uppercase tracking-[0.3em]">CHROME EXTENSION + WEB APP</p>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">THE TOLL</h2>
                                <p className="text-white/80 text-lg md:text-xl font-bold leading-relaxed max-w-4xl">
                                    YouTubeなど特定サイトの利用を、運動タスク完了までロックする行動改善プロダクトです。
                                    Chrome拡張、スマホWeb、Stripe課金、Supabase認証/DBを統合しています。
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Link
                                    href="/works/the-toll"
                                    className="group relative px-10 py-5 bg-white text-black font-black text-lg uppercase tracking-wider border-b-4 border-r-4 border-slate-300 hover:translate-x-1 hover:translate-y-1 hover:border-b-0 hover:border-r-0 transition-all"
                                >
                                    詳細を見る
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="h-[4px] bg-black max-w-6xl mx-auto mb-32" />

                <div className="max-w-6xl mx-auto mb-12">
                    <h3 className="text-4xl font-black uppercase tracking-tighter flex items-center gap-4">
                        <AlertCircle className="w-10 h-10" />
                        Under Development
                    </h3>
                </div>

                {/* Dev Apps Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {devApps.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white border-4 border-black transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="aspect-video bg-black relative overflow-hidden border-b-4 border-black">
                                {/* ステータスバッジ */}
                                <div className="absolute top-4 left-4 z-10 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 border-b-2 border-r-2 border-slate-500">
                                    {app.status}
                                </div>
                                {/* 画像プレースホルダー */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/5 group-hover:scale-110 transition-transform duration-700">
                                    <Smartphone className="w-32 h-32" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 flex-wrap mb-6">
                                    {app.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-white border-b-2 border-r-2 border-slate-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter group-hover:underline decoration-4">{app.title}</h3>
                                <p className="text-black font-bold text-base leading-relaxed mb-8">
                                    {app.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center p-12 border-4 border-black bg-black text-white shadow-[16px_16px_0px_0px_rgba(255,255,255,1),16px_16px_0px_4px_rgba(0,0,0,1)]">
                    <p className="text-2xl font-black mb-8 uppercase tracking-widest">開発のご相談も承っております</p>
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-3xl font-black uppercase tracking-tighter hover:underline decoration-4">
                        お問い合わせはこちら
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
