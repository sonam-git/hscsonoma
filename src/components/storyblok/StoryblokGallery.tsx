'use client';

import { useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

type GalleryCategory = 'cultural' | 'community' | 'sports';

interface GalleryImageItem {
  _uid: string;
  image: {
    filename: string;
    alt: string;
  };
  caption?: string;
  category: GalleryCategory;
  date?: string;
}

interface StoryblokGalleryProps {
  blok: {
    _uid: string;
    title?: string;
    subtitle?: string;
    images: GalleryImageItem[];
    show_filter?: boolean;
    default_category?: GalleryCategory | 'all';
    columns?: '2' | '3' | '4';
  };
}

const categoryLabels: Record<GalleryCategory | 'all', string> = {
  all: 'All',
  cultural: 'Cultural',
  community: 'Community',
  sports: 'Sports',
};

const categoryIcons: Record<GalleryCategory | 'all', JSX.Element> = {
  all: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  cultural: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  community: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  sports: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
    </svg>
  ),
};

export default function StoryblokGallery({ blok }: StoryblokGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>(blok.default_category || 'all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const categories: (GalleryCategory | 'all')[] = ['all', 'cultural', 'community', 'sports'];

  const filteredImages = activeCategory === 'all'
    ? blok.images
    : blok.images.filter((img) => img.category === activeCategory);

  const columnClasses = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setCurrentSlideIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlideIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

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
        {blok.show_filter !== false && (
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-burgundy-600 text-white shadow-lg shadow-burgundy-600/30 scale-105'
                    : 'bg-white dark:bg-mountain-800 text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30 hover:text-burgundy-700 dark:hover:text-burgundy-400 shadow-md'
                }`}
              >
                {categoryIcons[category]}
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          {filteredImages.length > 0 && (
            <>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={filteredImages[currentSlideIndex]?.image.filename || ''}
                  alt={filteredImages[currentSlideIndex]?.image.alt || ''}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {filteredImages[currentSlideIndex]?.caption && (
                    <p className="text-white font-medium text-lg">
                      {filteredImages[currentSlideIndex].caption}
                    </p>
                  )}
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs capitalize">
                    {filteredImages[currentSlideIndex]?.category}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-mountain-800/90 rounded-full shadow-lg"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-mountain-800/90 rounded-full shadow-lg"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlideIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlideIndex
                        ? 'bg-burgundy-600 w-6'
                        : 'bg-mountain-300 dark:bg-mountain-600'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid grid-cols-1 ${columnClasses[blok.columns || '3']} gap-6`}>
          {filteredImages.map((image, index) => (
            <div
              key={image._uid || index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <Image
                src={image.image.filename}
                alt={image.image.alt || image.caption || ''}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.caption && (
                  <p className="text-white font-medium text-lg mb-1">{image.caption}</p>
                )}
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs capitalize">
                  {image.category}
                </span>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-mountain-300 dark:text-mountain-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-mountain-500 dark:text-mountain-400">No images found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 text-white/80 text-sm">
            {currentSlideIndex + 1} / {filteredImages.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentSlideIndex]?.image.filename || ''}
              alt={filteredImages[currentSlideIndex]?.image.alt || ''}
              fill
              className="object-contain"
            />
            {filteredImages[currentSlideIndex]?.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center text-lg font-medium">
                  {filteredImages[currentSlideIndex].caption}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
            {filteredImages.map((image, index) => (
              <button
                key={image._uid || index}
                onClick={(e) => { e.stopPropagation(); setCurrentSlideIndex(index); }}
                className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  index === currentSlideIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image src={image.image.filename} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
