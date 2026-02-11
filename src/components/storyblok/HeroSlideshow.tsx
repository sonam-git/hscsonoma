'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  _uid: string;
  media_type: 'image' | 'video';
  image?: {
    filename: string;
    alt: string;
  };
  video_url?: string;
  video_file?: {
    filename: string;
  };
  title?: string;
  subtitle?: string;
  overlay_opacity?: number;
  cta_text?: string;
  cta_link?: {
    cached_url: string;
    url?: string;
    target?: string;
  };
}

interface HeroSlideshowProps {
  blok: {
    _uid: string;
    slides: HeroSlide[];
    autoplay?: boolean;
    autoplay_interval?: number;
    show_navigation?: boolean;
    show_dots?: boolean;
    height?: 'full' | 'large' | 'medium';
    tibetan_text?: string;
  };
}

const heightClasses = {
  full: 'min-h-screen',
  large: 'min-h-[85vh]',
  medium: 'min-h-[60vh]',
};

// Helper to detect YouTube/Vimeo URLs
function getVideoEmbedUrl(url: string): { type: 'youtube' | 'vimeo' | 'direct'; embedUrl: string } {
  if (!url) return { type: 'direct', embedUrl: '' };

  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${youtubeMatch[1]}&controls=0&showinfo=0&rel=0`,
    };
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1&loop=1&background=1`,
    };
  }

  return { type: 'direct', embedUrl: url };
}

export default function HeroSlideshow({ blok }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(blok.autoplay !== false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = blok.slides || [];
  const autoplayInterval = (blok.autoplay_interval || 5) * 1000;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(goToNext, autoplayInterval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, goToNext, autoplayInterval, slides.length]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(goToNext, autoplayInterval);
    }
  };

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];
  const overlayOpacity = (currentSlide.overlay_opacity ?? 60) / 100;

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative ${heightClasses[blok.height || 'large']} flex items-center justify-center overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const videoInfo = slide.video_url ? getVideoEmbedUrl(slide.video_url) : null;

        return (
          <div
            key={slide._uid || index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Media */}
            {slide.media_type === 'video' ? (
              <>
                {videoInfo?.type === 'youtube' || videoInfo?.type === 'vimeo' ? (
                  <iframe
                    src={isActive ? videoInfo.embedUrl : ''}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ border: 0, transform: 'scale(1.2)' }}
                    allow="autoplay; fullscreen"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={slide.video_file?.filename || slide.video_url}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay={isActive}
                    muted
                    loop
                    playsInline
                  />
                )}
              </>
            ) : (
              slide.image?.filename && (
                <Image
                  src={slide.image.filename}
                  alt={slide.image.alt || slide.title || 'Hero image'}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
              )
            )}

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-mountain-950/80 via-mountain-950/50 to-mountain-950/70"
              style={{ opacity: overlayOpacity }}
            />
          </div>
        );
      })}

      {/* Mountain Silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="#fdfbf7"
            className="dark:fill-mountain-950"
            d="M0,120 L0,80 L120,60 L240,90 L360,40 L480,70 L600,30 L720,80 L840,50 L960,90 L1080,35 L1200,75 L1320,55 L1440,85 L1440,120 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center px-4">
        {/* Tibetan Text */}
        {blok.tibetan_text && (
          <p className="font-tibetan text-2xl md:text-3xl text-gold-400 mb-4 animate-fade-in">
            {blok.tibetan_text}
          </p>
        )}

        {/* Title */}
        {currentSlide.title && (
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 text-shadow animate-slide-up">
            {currentSlide.title}
          </h1>
        )}

        {/* Subtitle */}
        {currentSlide.subtitle && (
          <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto mb-10 animate-fade-in">
            {currentSlide.subtitle}
          </p>
        )}

        {/* CTA Button */}
        {currentSlide.cta_text && currentSlide.cta_link && (
          <Link
            href={currentSlide.cta_link.cached_url || currentSlide.cta_link.url || '#'}
            target={currentSlide.cta_link.target}
            className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4 animate-fade-in"
          >
            {currentSlide.cta_text}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>

      {/* Navigation Arrows */}
      {blok.show_navigation !== false && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {blok.show_dots !== false && slides.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold-400 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-4 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
