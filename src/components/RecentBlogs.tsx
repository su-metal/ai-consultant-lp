import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
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
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-6xl mx-auto">
                    <div>
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-bold mb-6 border-b-4 border-r-4 border-slate-500 uppercase tracking-widest">
                            <BookOpen className="w-4 h-4" />
                            Articles
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter">
                            お役立ち情報・事例
                        </h2>
                        <p className="text-xl text-black font-bold">
                            AI活用や業務効率化に役立つ情報を発信しています。
                        </p>
                    </div>
                    <Link href="/blog" className="group relative px-8 py-4 bg-white border-4 border-black text-black font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 whitespace-nowrap">
                        すべての記事を見る
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {recentPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative flex flex-col bg-white border-4 border-black h-full transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            {/* 画像エリア */}
                            <div className="relative h-56 w-full bg-slate-100 overflow-hidden border-b-4 border-black">
                                {post.image ? (
                                    <NextImage
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                                        <BookOpen className="w-16 h-16 text-white/20" />
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border-b-2 border-r-2 border-slate-500">
                                    New Post
                                </div>
                            </div>

                            {/* コンテンツエリア */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center text-black/40 font-black text-xs uppercase tracking-widest">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <time dateTime={post.date}>
                                            {format(new Date(post.date), 'yyyy.MM.dd', { locale: ja })}
                                        </time>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-black mb-4 line-clamp-2 leading-tight uppercase tracking-tighter group-hover:underline decoration-4">
                                    {post.title}
                                </h3>

                                <p className="text-black font-bold text-sm line-clamp-2 mb-6 leading-relaxed">
                                    {post.description}
                                </p>

                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest border-b-2 border-r-2 border-slate-500">
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
