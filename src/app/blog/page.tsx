import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
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
        <main className="min-h-screen bg-white text-black font-sans pt-32 pb-24 selection:bg-black selection:text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* ヘッダーエリア */}
                <div className="mb-16 mt-8 md:mb-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
                        Blog & News
                    </h1>
                    <p className="text-xl text-black font-bold uppercase tracking-widest">
                        AI活用のお役立ち情報や、最新のお知らせを発信しています。
                    </p>
                </div>

                {/* 記事一覧 (モノクログリッド) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {allPostsData.length > 0 ? (
                        allPostsData.map(({ slug, title, date, description, tags, image }) => (
                            <article key={slug} className="group relative flex flex-col bg-white border-4 border-black transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                                <Link href={`/blog/${slug}`} className="block relative aspect-[1.91/1] overflow-hidden bg-slate-100 border-b-4 border-black">
                                    {/* アイキャッチ画像 */}
                                    {image ? (
                                        <NextImage
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-black group-hover:scale-105 transition-transform duration-500 ease-out">
                                            <div className="text-white/20 flex flex-col items-center">
                                                <ImageIcon className="w-12 h-12 mb-2" />
                                                <span className="text-[10px] font-black font-mono tracking-[0.3em] uppercase">NO IMAGE</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border-b-2 border-r-2 border-slate-500">
                                        Article
                                    </div>
                                </Link>

                                <div className="flex flex-col flex-1 p-8">
                                    <h2 className="text-2xl font-black mb-4 text-black line-clamp-2 leading-tight uppercase tracking-tighter group-hover:underline decoration-4">
                                        <Link href={`/blog/${slug}`}>
                                            {title}
                                        </Link>
                                    </h2>

                                    {description && (
                                        <p className="text-black font-bold line-clamp-2 mb-6 text-sm leading-relaxed flex-1">
                                            {description}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t-4 border-black">
                                        <time dateTime={date} className="text-xs text-black/40 font-black font-mono">
                                            {new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                        </time>

                                        {tags && tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-[10px] text-white bg-black font-black uppercase tracking-widest px-3 py-1 border-b-2 border-r-2 border-slate-500">
                                                    {tags[0]}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-24 border-4 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                            <BookOpen className="w-20 h-20 text-black mx-auto mb-6" />
                            <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tighter">まだ記事がありません</h3>
                            <p className="text-xl text-black font-bold">最初の記事が公開されるまでお待ちください。</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
