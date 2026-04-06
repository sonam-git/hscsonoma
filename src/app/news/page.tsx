'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/news';

type CategoryType = 'All' | 'News' | 'Recent';

// SVG Icon Components for tabs
const AllIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
    />
  </svg>
);

const NewsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
    />
  </svg>
);

const RecentIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const categories: { id: CategoryType; label: string; icon: () => JSX.Element }[] = [
  { id: 'All', label: 'All', icon: AllIcon },
  { id: 'News', label: 'News', icon: NewsIcon },
  { id: 'Recent', label: 'Recent', icon: RecentIcon },
];

export default function NewsPage() {
	const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
	const contentRef = useRef<HTMLElement>(null);

	const handleCategoryClick = (categoryId: CategoryType) => {
		setActiveCategory(categoryId);
		// Scroll content section into view when tab is clicked
		setTimeout(() => {
			contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 50);
	};

	const filteredArticles = newsArticles.filter((article) => {
		if (activeCategory === 'All') return true;
		if (activeCategory === 'Recent') return article.isRecent;
		return article.category === activeCategory;
	});

	return (
		<main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
			{/* Hero Section */}
			<section className="relative py-32 bg-gradient-himalayan">
				<div className="relative container-custom text-center">
					<p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། གསར་འགྱུར།</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
						Community Buzz | News
					</h1>
					<p className="text-xl text-cream-200 max-w-2xl mx-auto">
						HSC community in the Spotlight
					</p>
				</div>
			</section>

			{/* Sticky Tab Navigation - same style as events page */}
			<div className="sticky top-24 z-40 bg-gradient-to-r from-burgundy-800 via-mountain-800 to-burgundy-800 shadow-lg">
				<div className="container-custom px-2 sm:px-4 md:px-6 lg:px-8">
					<div className="flex items-center justify-center gap-2 md:gap-3 py-3">
						{categories.map((category) => {
							const IconComponent = category.icon;
							return (
								<button
									key={category.id}
									onClick={() => handleCategoryClick(category.id)}
									className={`flex items-center gap-1.5 px-4 sm:px-5 md:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
										activeCategory === category.id 
											? 'text-burgundy-900 bg-white shadow-md scale-105'
											: 'text-white/90 hover:text-white hover:bg-white/20'
									}`}
								>
									<IconComponent />
									<span>{category.label}</span>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{/* Introduction */}
			<section className="py-12 bg-white dark:bg-mountain-900 border-b border-cream-200 dark:border-mountain-700">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center">
						<p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
							Welcome to{' '}
							<strong className="text-burgundy-700 dark:text-burgundy-400">
								Community Buzz
							</strong>
							&nbsp;— a curated collection of news articles, media features, and local coverage
							highlighting the achievements, businesses, and inspiring stories of our
							Himalayan Sherpa Club members and community. Explore how our voices and efforts
							are making an impact,
							<br className="hidden sm:block" /> both locally and beyond.
						</p>
					</div>
				</div>
			</section>

			{/* Articles Grid */}
			<section ref={contentRef} className="py-16 scroll-mt-[140px]">
				<div className="container-custom">
					{/* Articles Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredArticles.map((article) => (
							<Link
								key={article.slug}
								href={`/news/${article.slug}`}
								className="group"
							>
								<article className="bg-white dark:bg-mountain-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
									<div className="relative aspect-[16/10] overflow-hidden">
										<Image
											src={article.image}
											alt={article.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute top-3 left-3 flex gap-2 z-10">
											<span className="px-2 py-1 bg-burgundy-700/90 text-white text-xs font-medium rounded-full">
												{article.category}
											</span>
											{article.isRecent && (
												<span className="px-2 py-1 bg-gold-500/90 text-mountain-900 text-xs font-medium rounded-full">
													Recent
												</span>
											)}
										</div>
									</div>
									<div className="p-5">
										<time className="text-xs text-mountain-500 dark:text-mountain-400">
											{article.date}
										</time>
										<h3 className="text-lg font-bold text-mountain-900 dark:text-white mt-2 mb-2 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors line-clamp-2">
											{article.title}
										</h3>
										<p className="text-sm text-mountain-600 dark:text-mountain-400 mb-4 line-clamp-2">
											{article.excerpt}
										</p>
										<span className="inline-flex items-center gap-1 text-sm text-burgundy-700 dark:text-burgundy-400 font-medium">
											Read More
											<svg
												className="w-3 h-3 group-hover:translate-x-1 transition-transform"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</span>
									</div>
								</article>
							</Link>
						))}
					</div>

					{filteredArticles.length === 0 && (
						<div className="text-center py-16">
							<div className="w-20 h-20 bg-cream-100 dark:bg-mountain-800 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-4xl">📭</span>
							</div>
							<p className="text-mountain-600 dark:text-mountain-400 text-lg">
								No articles found in this category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Community Highlights Section */}
			<section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/20 dark:to-gold-900/20 border-t border-cream-200 dark:border-mountain-700">
				<div className="container-custom">
					<div className="text-center max-w-3xl mx-auto mb-12">
						<h3 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
							Our Community Makes Headlines
						</h3>
						<p className="text-mountain-700 dark:text-mountain-300">
							From conquering the world&apos;s highest peaks to building beloved local businesses,
							the Sherpa community of Sonoma continues to inspire and achieve.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
							<div className="w-16 h-16 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🏔️</span>
							</div>
							<h4 className="font-bold text-mountain-900 dark:text-white mb-2">
								Mountaineering Excellence
							</h4>
							<p className="text-sm text-mountain-600 dark:text-mountain-400">
								Our members continue the legendary Sherpa tradition of high-altitude achievement,
								from Everest to K2 and beyond.
							</p>
						</div>
						<div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
							<div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🍷</span>
							</div>
							<h4 className="font-bold text-mountain-900 dark:text-white mb-2">
								Wine Country Success
							</h4>
							<p className="text-sm text-mountain-600 dark:text-mountain-400">
								Sherpa-owned restaurants and businesses have become beloved fixtures of
								Sonoma County&apos;s vibrant culinary scene.
							</p>
						</div>
						<div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
							<div className="w-16 h-16 bg-mountain-100 dark:bg-mountain-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🤝</span>
							</div>
							<h4 className="font-bold text-mountain-900 dark:text-white mb-2">
								Community Impact
							</h4>
							<p className="text-sm text-mountain-600 dark:text-mountain-400">
								Through fundraising, cultural events, and community support, we strengthen
								bonds both locally and with Nepal.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Submit Story CTA */}
			<section className="py-16 bg-white dark:bg-mountain-900">
				<div className="container-custom">
					<div className="bg-gradient-to-br from-burgundy-700 to-mountain-800 rounded-2xl p-8 md:p-12 text-center">
						<h2 className="text-xl md:text-3xl font-serif font-bold text-mountain-100 dark:text-cream-50 mb-6">
							Have a Story to Share?
						</h2>
						<p className="text-cream-200 mb-8 max-w-2xl mx-auto">
							We love celebrating the achievements and stories of our community members.
							If you have news, an accomplishment, or a story you&apos;d like featured, let us know!
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 bg-white hover:bg-gold-200 text-mountain-900 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
						>
							Submit Your Story
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
