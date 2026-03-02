import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPostData = {
    slug: string;
    title: string;
    date: string;
    description?: string;
    image?: string; // 記事固有のアイキャッチ画像
    tags?: string[];
    contentHtml?: string;
};

// 全記事のソート済みデータ（メタデータのみ）を取得
export function getSortedPostsData(): BlogPostData[] {
    // ディレクトリが存在しない場合は空配列を返す
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);

            return {
                slug,
                ...(matterResult.data as Omit<BlogPostData, 'slug' | 'contentHtml'>),
            };
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// 特定スラッグの記事データを取得
export async function getPostData(slug: string): Promise<BlogPostData | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
        
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...(matterResult.data as Omit<BlogPostData, 'slug' | 'contentHtml'>),
    };
}
