import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { getSortedPostsData } from '@/lib/blog';

export default function RecentBlogs() {
    const allPosts = getSortedPostsData();
    // 最新3件のみ取得
    const recentPosts = allPosts.slice(0, 3);

    if (recentPosts.length === 0) {
        return null; // 記事がない場合は表示しない
    }

    return (
        <section className="py-16 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 max-w-6xl mx-auto">
                    <div>
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold w-fit mb-3 shadow-sm tracking-widest uppercase">
                            <BookOpen className="w-4 h-4 text-blue-500" />
                            Articles
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            お役立ち情報・事例
                        </h2>
                        <p className="text-slate-600">
                            AI活用や業務効率化に役立つ情報を発信しています。
                        </p>
                    </div>
                    <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-full hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
                        すべての記事を見る
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {recentPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                            {/* 画像エリア */}
                            <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                                        <BookOpen className="w-12 h-12 text-blue-200" />
                                    </div>
                                )}
                            </div>

                            {/* コンテンツエリア */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-2 text-sm">
                                    <div className="flex items-center text-slate-500 font-medium">
                                        <Clock className="w-4 h-4 mr-1.5 opacity-70" />
                                        <time dateTime={post.date}>
                                            {format(new Date(post.date), 'yyyy.MM.dd', { locale: ja })}
                                        </time>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                                    {post.description}
                                </p>

                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
