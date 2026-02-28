import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://machinami-ai.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // インデックスさせたくないディレクトリがある場合
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
