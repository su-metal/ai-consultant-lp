import React from 'react';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
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
        <main className="min-h-screen bg-white text-slate-900 font-sans pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* 戻るリンク */}
                <div className="mb-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
                        <ChevronLeft className="w-4 h-4" /> ブログ一覧へ戻る
                    </Link>
                </div>

                <article className="bg-white">
                    {/* アイキャッチ画像 */}
                    {postData.image && (
                        <div className="mb-10 w-full overflow-hidden rounded-2xl md:rounded-3xl bg-slate-50 aspect-[16/9]">
                            <img
                                src={postData.image}
                                alt={postData.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* 記事ヘッダー */}
                    <header className="mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                            {postData.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 pb-6 border-b border-gray-100 mt-8">
                            <time dateTime={postData.date} className="flex items-center gap-1.5 font-mono">
                                {new Date(postData.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                            </time>

                            {postData.tags && postData.tags.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        {postData.tags.map(tag => (
                                            <span key={tag} className="text-slate-500 bg-slate-100 rounded px-2 py-0.5 text-xs border border-transparent">
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
                        className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-loose prose-p:text-slate-700 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
                </article>
            </div>
        </main>
    );
}
