import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  blok: {
    title: string;
    excerpt: string;
    featured_image: {
      filename: string;
      alt: string;
    };
    category: string;
    published_date: string;
    slug: string;
  };
}

export default function NewsCard({ blok }: NewsCardProps) {
  const formattedDate = new Date(blok.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article
      {...storyblokEditable(blok)}
      className="card card-hover group"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {blok.featured_image?.filename ? (
          <Image
            src={blok.featured_image.filename}
            alt={blok.featured_image.alt || blok.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-burgundy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        
        {/* Category Badge */}
        {blok.category && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full">
            {blok.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <time className="text-sm text-mountain-500 mb-2 block">
          {formattedDate}
        </time>

        {/* Title */}
        <h3 className="text-xl font-semibold text-mountain-900 mb-3 group-hover:text-burgundy-700 transition-colors line-clamp-2">
          {blok.title}
        </h3>

        {/* Excerpt */}
        <p className="text-mountain-600 line-clamp-3 mb-4">
          {blok.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/news/${blok.slug}`}
          className="inline-flex items-center text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors group/link"
        >
          Read More
          <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
