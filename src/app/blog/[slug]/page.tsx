import React from 'react';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Tag, ChevronLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// URLパラメータの型定義 (Next.js 15 用)
type Props = {
    // Next.js 15 では params は Promise 型になることがあるため、それに合わせた型か any で回避（ここでは公式Doc推奨に寄せる）
    params: Promise<{ slug: string }>;
};

// SSG用のパス生成
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 動的メタデータ(SEO)の生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // params を await して展開
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        return {
            title: '記事が見つかりません | まちなみ AI',
        };
    }

    return {
        title: `${postData.title} | ブログ | まちなみ AI`,
        description: postData.description || `${postData.title}についての記事です。`,
        openGraph: {
            title: postData.title,
            description: postData.description,
            type: 'article',
            publishedTime: postData.date,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    // params を await して展開
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData || !postData.contentHtml) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-black font-sans pt-32 pb-24 selection:bg-black selection:text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* 戻るリンク */}
                <div className="mb-12">
                    <Link href="/blog" className="group inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-sm hover:underline decoration-4">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> ブログ一覧へ戻る
                    </Link>
                </div>

                <article className="bg-white">
                    {/* アイキャッチ画像 */}
                    {postData.image && (
                        <div className="mb-16 w-full overflow-hidden border-4 border-black bg-slate-50 aspect-[16/9] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                            <img
                                src={postData.image}
                                alt={postData.title}
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    )}

                    {/* 記事ヘッダー */}
                    <header className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 text-black leading-tight uppercase">
                            {postData.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b-4 border-black mt-12">
                            <time dateTime={postData.date} className="flex items-center gap-2 font-black font-mono text-black/40 uppercase tracking-widest">
                                <Calendar className="w-4 h-4" />
                                {new Date(postData.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                            </time>

                            {postData.tags && postData.tags.length > 0 && (
                                <div className="flex items-center gap-3">
                                    <Tag className="w-4 h-4 text-black/40" />
                                    <div className="flex flex-wrap gap-2">
                                        {postData.tags.map(tag => (
                                            <span key={tag} className="text-white bg-black font-black uppercase tracking-widest px-3 py-1 text-[10px] border-b-2 border-r-2 border-slate-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* 記事本文 (Markdown) */}
                    <div
                        className="prose prose-zinc prose-lg md:prose-xl max-w-none 
                        prose-headings:font-black prose-headings:text-black prose-headings:uppercase prose-headings:tracking-tighter
                        prose-p:leading-relaxed prose-p:text-black prose-p:font-bold
                        prose-a:text-black prose-a:font-black prose-a:underline prose-a:decoration-4 hover:prose-a:bg-black hover:prose-a:text-white transition-all
                        prose-img:border-4 prose-img:border-black prose-img:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                        prose-strong:font-black prose-strong:text-black prose-strong:bg-zinc-100 prose-strong:px-1
                        prose-ul:font-bold prose-li:marker:text-black prose-li:marker:font-black"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
                </article>

                {/* Footer CTA */}
                <div className="mt-24 p-12 border-4 border-black bg-black text-white shadow-[16px_16px_0px_0px_rgba(255,255,255,1),16px_16px_0px_4px_rgba(0,0,0,1)] text-center">
                    <p className="text-2xl font-black mb-8 uppercase tracking-widest">この記事について相談する</p>
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-3xl font-black uppercase tracking-tighter hover:underline decoration-4">
                        お問い合わせはこちら
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
