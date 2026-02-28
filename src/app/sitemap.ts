import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://machinami-ai.com'; // TODO: 実際のドメインに置き換える必要があります

  // 静的ルート
  const routes = [
    '',
    '/services',
    '/works',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // TODO: ブログ記事の動的ルートを追加する場合はここで fetch して追加
  
  return [...routes];
}
