'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Sparkles, AlertCircle } from 'lucide-react';
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
        <main className="min-h-screen bg-white text-slate-900 font-sans pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4 font-serif text-slate-900"
                    >
                        Personal Works
                    </motion.h1>
                    <p className="text-slate-500">
                        自社開発プロダクト、および開発中のプロジェクト。
                    </p>
                </div>

                {/* Main Product Section */}
                <div className="max-w-5xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-blue-900/5 group hover:shadow-blue-900/10 transition-shadow"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="aspect-video md:aspect-auto bg-slate-50 relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
                                {/* 画像プレースホルダー */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-50">
                                    <Sparkles className="w-16 h-16 opacity-50 text-blue-500" />
                                </div>
                            </div>

                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex gap-2 flex-wrap mb-6">
                                    {mainProduct.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-blue-50 text-blue-600 border border-blue-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl font-bold mb-2 font-serif text-slate-900">{mainProduct.title}</h2>
                                <p className="text-blue-600 font-medium mb-6 tracking-wide">{mainProduct.tagline}</p>

                                <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line text-sm">
                                    {mainProduct.description}
                                </p>

                                <ul className="space-y-2 mb-8">
                                    {mainProduct.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-6">
                                    <a href={mainProduct.storeLink} target="_blank" rel="noopener noreferrer"
                                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" /> Visit Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* THE TOLL */}
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <p className="text-xs font-mono text-blue-600 mb-2">CHROME EXTENSION + WEB APP</p>
                                <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-3">THE TOLL</h2>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
                                    YouTubeなど特定サイトの利用を、運動タスク完了までロックする行動改善プロダクトです。
                                    Chrome拡張、スマホWeb、Stripe課金、Supabase認証/DBを統合しています。
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/works/the-toll"
                                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors"
                                >
                                    詳細を見る
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="section-divider max-w-5xl mx-auto mb-16" />

                <div className="max-w-5xl mx-auto mb-10">
                    <h3 className="text-2xl font-bold mb-8 font-serif flex items-center gap-3 text-slate-900">
                        <AlertCircle className="w-6 h-6 text-amber-500" />
                        Under Development
                    </h3>
                </div>

                {/* Dev Apps Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {devApps.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-900/5"
                        >
                            <div className="aspect-video bg-slate-50 relative overflow-hidden border-b border-slate-100">
                                {/* ステータスバッジ */}
                                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur text-amber-600 text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm border border-slate-200 tracking-wider">
                                    {app.status}
                                </div>
                                {/* 画像プレースホルダー */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                    <Smartphone className="w-12 h-12 opacity-50" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 flex-wrap mb-4">
                                    {app.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-100 text-slate-500 border border-slate-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-amber-600 transition-colors">{app.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {app.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-slate-500 mb-6">開発のご相談も承っております。</p>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-500 underline decoration-blue-200 underline-offset-4 font-medium">
                        お問い合わせはこちら
                    </Link>
                </div>
            </div>
        </main>
    );
}

