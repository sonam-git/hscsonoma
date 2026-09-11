import { newsArticles } from '@/data/news';
import { getHomeNews } from '@/lib/storyblok-home';
import NewsPageClient from './NewsPageClient';

export default async function NewsPage() {
	const storyblokNews = await getHomeNews(100);

	return <NewsPageClient newsArticles={newsArticles} storyblokNews={storyblokNews} />;
}

