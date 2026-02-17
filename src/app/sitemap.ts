import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.himalayansherpaclubsonoma.org';
  
  // Static pages with SEO priority
  const staticPages = [
    { route: '', priority: 1.0, changeFreq: 'daily' as const },
    { route: '/about', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/about/introduction', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/about/sherpa', priority: 0.9, changeFreq: 'monthly' as const },
    { route: '/about/history', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/about/culture', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/about/vision', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/about/founding-families', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/about/functional-bodies', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/about/gallery', priority: 0.6, changeFreq: 'weekly' as const },
    { route: '/events', priority: 0.9, changeFreq: 'daily' as const },
    { route: '/events/losar', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/events/phangi', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/events/himalayan-cup', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/news', priority: 0.8, changeFreq: 'daily' as const },
    { route: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/join-us', priority: 0.9, changeFreq: 'monthly' as const },
    { route: '/donate', priority: 0.8, changeFreq: 'monthly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));

  // Dynamic news pages - In production, fetch from Storyblok
  // For now, using static slugs as placeholders
  const newsArticleSlugs = [
    'sherpa-community-earthquake-relief-2024',
    'sonoma-sherpas-wine-country-restaurants',
    'losar-2024-celebration-recap',
    'youth-language-program-success',
    'sherpa-mountaineering-legacy',
    'community-garden-project',
    'summit-stories-documentary',
    'thompson-honors-pemba-sherpa'
  ];

  const newsEntries: MetadataRoute.Sitemap = newsArticleSlugs.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic event pages - In production, fetch from Storyblok
  const eventSlugs = [
    'losar-2025',
    'language-class-spring',
    'community-picnic',
    'cultural-workshop',
    'dumji-2025',
  ];

  const eventEntries: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${baseUrl}/events/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...newsEntries, ...eventEntries];
}
