'use client';

import { useState } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

interface NewsListProps {
  blok: {
    _uid: string;
    title?: string;
    subtitle?: string;
    news_items: Array<{
      _uid: string;
      component: string;
      category?: string;
      [key: string]: unknown;
    }>;
    show_category_filter?: boolean;
    max_items?: number;
  };
}

export default function NewsList({ blok }: NewsListProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const newsItems = blok.news_items || [];

  // Get unique categories
  const uniqueCategories = Array.from(new Set(newsItems.map((item) => item.category).filter(Boolean) as string[]));
  const categories = ['All', ...uniqueCategories];

  // Filter by category
  let filteredItems = activeCategory === 'All'
    ? newsItems
    : newsItems.filter((item) => item.category === activeCategory);

  // Limit items
  if (blok.max_items) {
    filteredItems = filteredItems.slice(0, blok.max_items);
  }

  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-cream-50 dark:bg-mountain-950">
      <div className="container-custom">
        {/* Header */}
        {(blok.title || blok.subtitle) && (
          <div className="text-center mb-12">
            {blok.title && (
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-mountain-100 mb-4">
                {blok.title}
              </h2>
            )}
            {blok.subtitle && (
              <p className="text-lg text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto">
                {blok.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Category Filter */}
        {blok.show_category_filter && categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-burgundy-600 text-white shadow-lg shadow-burgundy-600/30 scale-105'
                    : 'bg-white dark:bg-mountain-800 text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30 hover:text-burgundy-700 dark:hover:text-burgundy-400 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <StoryblokComponent key={item._uid} blok={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-mountain-300 dark:text-mountain-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-xl text-mountain-500 dark:text-mountain-400">No news articles found</p>
          </div>
        )}
      </div>
    </section>
  );
}
