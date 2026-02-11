'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/news';

const categories = ['All', 'News', 'Recent'];

export default function NewsPage() {
	const [activeCategory, setActiveCategory] = useState('All');

	const filteredArticles = newsArticles.filter((article) => {
		if (activeCategory === 'All') return true;
		if (activeCategory === 'Recent') return article.isRecent;
		return article.category === activeCategory;
	});

	const featuredArticles = newsArticles.filter((article) => article.featured).slice(0, 2);

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
				<div className="absolute inset-x-0 bottom-0 h-16">
					<svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
						<path className="fill-white dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
					</svg>
				</div>
			</section>

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

			{/* Featured Stories */}
			<section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-mountain-900 dark:to-mountain-950">
				<div className="container-custom">
					<h2 className="text-2xl md:text-3xl font-bold text-mountain-900 dark:text-white mb-8">
						Featured Stories
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{featuredArticles.map((article) => (
							<Link
								key={article.slug}
								href={`/news/${article.slug}`}
								className="group"
							>
								<article className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
									<div className="relative aspect-[16/10] overflow-hidden">
										<Image
											src={article.image}
											alt={article.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute top-4 left-4 flex gap-2 z-10">
											<span className="px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full">
												{article.category}
											</span>
											{article.isRecent && (
												<span className="px-3 py-1 bg-gold-500 text-mountain-900 text-xs font-medium rounded-full">
													Recent
												</span>
											)}
										</div>
									</div>
									<div className="p-6">
										<time className="text-sm text-mountain-500 dark:text-mountain-400">
											{article.date}
										</time>
										<h3 className="text-xl font-bold text-mountain-900 dark:text-white mt-2 mb-3 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors">
											{article.title}
										</h3>
										<p className="text-mountain-600 dark:text-mountain-400 mb-4">
											{article.excerpt}
										</p>
										<span className="inline-flex items-center gap-2 text-burgundy-700 dark:text-burgundy-400 font-medium">
											Read More
											<svg
												className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
				</div>
			</section>

			{/* Filter & All Articles */}
			<section className="py-16">
				<div className="container-custom">
					{/* Category Filter */}
					<div className="flex flex-wrap gap-3 mb-10">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
									activeCategory === category
										? 'bg-burgundy-700 text-white shadow-lg'
										: 'bg-white dark:bg-mountain-800 text-mountain-600 dark:text-mountain-300 hover:bg-cream-100 dark:hover:bg-mountain-700 border border-cream-200 dark:border-mountain-600'
								}`}
							>
								{category}
							</button>
						))}
					</div>

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
						<h2 className="text-2xl md:text-3xl font-bold text-mountain-900 dark:text-white mb-4">
							Our Community Makes Headlines
						</h2>
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
							<h3 className="font-bold text-mountain-900 dark:text-white mb-2">
								Mountaineering Excellence
							</h3>
							<p className="text-sm text-mountain-600 dark:text-mountain-400">
								Our members continue the legendary Sherpa tradition of high-altitude achievement,
								from Everest to K2 and beyond.
							</p>
						</div>
						<div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
							<div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🍷</span>
							</div>
							<h3 className="font-bold text-mountain-900 dark:text-white mb-2">
								Wine Country Success
							</h3>
							<p className="text-sm text-mountain-600 dark:text-mountain-400">
								Sherpa-owned restaurants and businesses have become beloved fixtures of
								Sonoma County&apos;s vibrant culinary scene.
							</p>
						</div>
						<div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
							<div className="w-16 h-16 bg-mountain-100 dark:bg-mountain-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🤝</span>
							</div>
							<h3 className="font-bold text-mountain-900 dark:text-white mb-2">
								Community Impact
							</h3>
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
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Have a Story to Share?
						</h2>
						<p className="text-cream-200 mb-8 max-w-2xl mx-auto">
							We love celebrating the achievements and stories of our community members.
							If you have news, an accomplishment, or a story you&apos;d like featured, let us know!
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-mountain-900 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
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
