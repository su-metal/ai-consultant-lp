import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { BookOpen, Image as ImageIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ブログ・お知らせ | まちなみ AI',
    description: '東三河の企業向け生成AI活用情報や、業務特化アプリ開発のノウハウを発信するまちなみ AIの公式ブログです。',
};

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* ヘッダーエリア */}
                <div className="mb-12 mt-8 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                        Blog & News
                    </h1>
                    <p className="text-slate-600">
                        AI活用のお役立ち情報や、当社のお知らせを発信しています。
                    </p>
                </div>

                {/* 記事一覧 (note風3列グリッド) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {allPostsData.length > 0 ? (
                        allPostsData.map(({ slug, title, date, description, tags, image }) => (
                            <article key={slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-100">
                                <Link href={`/blog/${slug}`} className="block relative aspect-[1.91/1] overflow-hidden bg-slate-100">
                                    {/* アイキャッチ画像 (無い場合はダミー) */}
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-500 ease-out">
                                            <div className="text-slate-400 flex flex-col items-center">
                                                <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                                                <span className="text-xs font-bold font-mono tracking-widest opacity-50">NO IMAGE</span>
                                            </div>
                                        </div>
                                    )}
                                </Link>

                                <div className="flex flex-col flex-1 p-5 md:p-6">
                                    <h2 className="text-lg md:text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 leading-snug">
                                        <Link href={`/blog/${slug}`}>
                                            {title}
                                        </Link>
                                    </h2>

                                    {description && (
                                        <p className="text-slate-500 line-clamp-2 mb-4 text-sm leading-relaxed flex-1">
                                            {description}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-50">
                                        <time dateTime={date} className="text-xs text-slate-400 font-mono">
                                            {new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                        </time>

                                        {tags && tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {/* 最初のタグだけを表示（文字数制限のため） */}
                                                <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-1">
                                                    {tags[0]}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl bg-white">
                            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-700 mb-2">まだ記事がありません</h3>
                            <p className="text-slate-500">最初の記事が公開されるまでお待ちください。</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
