import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.himalayansherpaclubsonoma.org';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/about/introduction',
    '/about/history',
    '/about/culture',
    '/about/founding-families',
    '/about/functional-bodies',
    '/events',
    '/news',
    '/contact',
    '/join-us',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/about') ? 0.8 : 0.7,
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
    'annual-scholarship-awards',
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
