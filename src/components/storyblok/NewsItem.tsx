'use client';

import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItemProps {
  blok: {
    _uid: string;
    title: string;
    date: string;
    image: {
      filename: string;
      alt: string;
    };
    description: string;
    external_url?: {
      cached_url: string;
      url?: string;
      linktype: string;
      target?: string;
    };
    category?: string;
    is_featured?: boolean;
  };
}

export default function NewsItem({ blok }: NewsItemProps) {
  const formattedDate = new Date(blok.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const externalUrl = blok.external_url?.cached_url || blok.external_url?.url;
  const isExternal = blok.external_url?.linktype === 'url';

  return (
    <article
      {...storyblokEditable(blok)}
      className={`card card-hover group overflow-hidden ${blok.is_featured ? 'ring-2 ring-gold-400 ring-offset-2 dark:ring-offset-mountain-950' : ''}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {blok.image?.filename ? (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || blok.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 dark:from-burgundy-900 dark:to-burgundy-800 flex items-center justify-center">
            <svg className="w-16 h-16 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}

        {/* Category Badge */}
        {blok.category && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full shadow-lg">
            {blok.category}
          </span>
        )}

        {/* Featured Badge */}
        {blok.is_featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-mountain-900 text-xs font-bold rounded-full shadow-lg">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-mountain-500 dark:text-mountain-400 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-mountain-900 dark:text-mountain-100 mb-3 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors line-clamp-2">
          {blok.title}
        </h3>

        {/* Description */}
        <p className="text-mountain-600 dark:text-mountain-400 line-clamp-3 mb-4">
          {blok.description}
        </p>

        {/* Read More Link */}
        {externalUrl && (
          <Link
            href={externalUrl}
            target={isExternal ? '_blank' : blok.external_url?.target || '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors group/link"
          >
            Read More
            <svg 
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isExternal ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              )}
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
