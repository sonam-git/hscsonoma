'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Type for gallery images (both hardcoded and Storyblok)
interface GalleryImage {
  id?: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
}

// Hardcoded gallery images
const hardcodedGalleryImages: GalleryImage[] = [
  {
    src: '/images/hero/HSC-Lhosar-Party-2011.jpeg',
    alt: 'HSC Lhosar Party 2011',
    caption: 'Lhosar Party Celebration 2011',
    category: 'Cultural',
  },
  {
    src: '/images/hero/HSC-Labor-Day-Volleyball-2012.jpeg',
    alt: 'HSC Labor Day Volleyball 2012',
    caption: 'Labor Day Volleyball Tournament 2012',
    category: 'Sports',
  },
  {
    src: '/images/hero/HSC-party-2013.jpeg',
    alt: 'HSC Party 2013',
    caption: 'Community Gathering 2013',
    category: 'Community',
  },
  {
    src: '/images/hero/Sonoma-Sherpa-Kids-back-in-2013.jpeg',
    alt: 'Sonoma Sherpa Kids 2013',
    caption: 'Sherpa Kids in Sonoma 2013',
    category: 'Community',
  },
  {
    src: '/images/hero/HSC-members-Bhajra-guru-program.jpeg',
    alt: 'HSC Members Bhajra Guru Program',
    caption: 'Bhajra Guru Program',
    category: 'Cultural',
  },
  {
    src: '/images/events/annual/losar.jpg',
    alt: 'Annual Losar Celebration',
    caption: 'Annual Nangbi Lhosar Festival',
    category: 'Cultural',
  },
  {
    src: '/images/events/signature/labor-day-flex.jpg',
    alt: 'Labor Day Celebration',
    caption: 'Labor Day Community Event',
    category: 'Community',
  },
  {
    src: '/images/hero/sherpadance2.jpg',
    alt: 'Sherpa Dance Performance',
    caption: 'Traditional Sherpa Dance',
    category: 'Cultural',
  },
  {
    src: '/images/hsfc/team.jpg',
    alt: 'HSFC Team',
    caption: 'Himalayan Sonoma Football Club',
    category: 'Sports',
  },
  {
    src: '/images/hero/hscpicnic.jpg',
    alt: 'HSC Picnic',
    caption: 'Community Picnic Gathering',
    category: 'Community',
  },
  {
    src: '/images/hero/hscmember.jpg',
    alt: 'HSC Members',
    caption: 'Our Vibrant Community Members',
    category: 'Community',
  },
  {
    src: '/images/hero/hsfc.jpg',
    alt: 'HSFC Soccer',
    caption: 'HSFC Soccer Team in Action',
    category: 'Sports',
  },
  {
    src: '/images/hero/IMG_8214.jpg',
    alt: 'Community Event',
    caption: 'HSC Community Celebration',
    category: 'Community',
  },
  {
    src: '/images/hero/IMG_8287.jpg',
    alt: 'Cultural Celebration',
    caption: 'Cultural Heritage Event',
    category: 'Cultural',
  },
  {
    src: '/images/hero/IMG_8299.jpg',
    alt: 'HSC Gathering',
    caption: 'Sherpa Community Gathering',
    category: 'Community',
  },
];

// SVG Icons
const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('New');
  const [storyblokImages, setStoryblokImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Storyblok gallery images
  useEffect(() => {
    async function fetchStoryblokGallery() {
      try {
        const response = await fetch('/api/gallery');
        if (response.ok) {
          const data = await response.json();
          setStoryblokImages(data.images || []);
        }
      } catch (error) {
        console.error('Failed to fetch Storyblok gallery:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStoryblokGallery();
  }, []);

  // Tab categories: New/Latest first, then standard categories
  const categories = ['New', 'All', 'Cultural', 'Community', 'Sports'];

  // Get images based on active filter
  const getFilteredImages = (): GalleryImage[] => {
    if (activeFilter === 'New') {
      return storyblokImages;
    } else if (activeFilter === 'All') {
      return hardcodedGalleryImages;
    } else {
      return hardcodedGalleryImages.filter(img => img.category === activeFilter);
    }
  };

  const filteredImages = getFilteredImages();

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  // Render empty state for New/Latest tab
  const renderEmptyState = () => (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-burgundy-100 dark:bg-burgundy-900/30 mb-4">
        <svg className="w-8 h-8 text-burgundy-600 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-mountain-900 dark:text-white mb-2">
        No New Photos Yet
      </h3>
      <p className="text-mountain-600 dark:text-mountain-400 max-w-md mx-auto">
        Check back soon for the latest photos from our community events and celebrations.
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། འདྲ་པར་ཁང་།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Capturing moments of our vibrant Sherpa community in Sonoma
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-950" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center gap-1.5 px-4 md:px-6 py-2 md:py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === category
                    ? category === 'New'
                      ? 'bg-gradient-to-r from-gold-500 to-burgundy-600 text-white shadow-lg shadow-burgundy-600/30 scale-105'
                      : 'bg-burgundy-600 text-white shadow-lg shadow-burgundy-600/30 scale-105'
                    : 'bg-white dark:bg-mountain-800 text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30 hover:text-burgundy-700 dark:hover:text-burgundy-400 shadow-md'
                }`}
              >
                {category === 'New' && <SparklesIcon />}
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {activeFilter === 'New' && isLoading && (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-burgundy-600 border-t-transparent"></div>
            </div>
          )}

          {/* Empty State for New/Latest */}
          {activeFilter === 'New' && !isLoading && filteredImages.length === 0 && renderEmptyState()}

          {/* Gallery Content */}
          {filteredImages.length > 0 && (
            <>
              {/* Mobile Slider View */}
              <div className="md:hidden relative">
                <div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(currentIndex)}
                >
                  <Image
                    src={filteredImages[currentIndex]?.src || hardcodedGalleryImages[0].src}
                    alt={filteredImages[currentIndex]?.alt || hardcodedGalleryImages[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-lg">
                      {filteredImages[currentIndex]?.caption}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                      {filteredImages[currentIndex]?.category}
                    </span>
                  </div>
                  {/* Zoom Icon - shows on mobile to indicate tap to zoom */}
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  {/* New Badge */}
                  {activeFilter === 'New' && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gold-500 to-burgundy-600 rounded-full text-white text-xs font-medium">
                      <SparklesIcon />
                      New
                    </div>
                  )}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-mountain-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-mountain-700 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-mountain-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-mountain-700 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRightIcon />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? 'bg-burgundy-600 w-6'
                          : 'bg-mountain-300 dark:bg-mountain-600 hover:bg-burgundy-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id || index}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-lg mb-1">
                        {image.caption}
                      </p>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        {image.category}
                      </span>
                    </div>
                    {/* New Badge */}
                    {activeFilter === 'New' && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gold-500 to-burgundy-600 rounded-full text-white text-xs font-medium opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <SparklesIcon />
                        New
                      </div>
                    )}
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && filteredImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white/80 text-sm flex items-center gap-2">
            {activeFilter === 'New' && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-gold-500 to-burgundy-600 rounded-full text-xs">
                <SparklesIcon />
                New
              </span>
            )}
            {currentIndex + 1} / {filteredImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all z-10 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </button>

          {/* Main Image */}
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] mx-12 md:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentIndex]?.src || hardcodedGalleryImages[0].src}
              alt={filteredImages[currentIndex]?.alt || hardcodedGalleryImages[0].alt}
              fill
              className="object-contain"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-center text-sm md:text-lg font-medium">
                {filteredImages[currentIndex]?.caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all z-10 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </button>

          {/* Thumbnail Strip - Hidden on mobile for cleaner UI */}
          <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 max-w-[90vw] overflow-x-auto pb-2">
            {filteredImages.map((image, index) => (
              <button
                key={image.id || index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-white scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
