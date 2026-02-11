import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  blok: {
    title: string;
    subtitle?: string;
    tibetan_text?: string;
    background_image?: {
      filename: string;
      alt: string;
    };
    primary_button_text?: string;
    primary_button_link?: {
      cached_url: string;
    };
    secondary_button_text?: string;
    secondary_button_link?: {
      cached_url: string;
    };
    overlay_opacity?: string;
    height?: 'full' | 'large' | 'medium';
  };
}

export default function Hero({ blok }: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[60vh]',
  };

  const overlayOpacity = blok.overlay_opacity || '60';

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative ${heightClasses[blok.height || 'large']} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      {blok.background_image?.filename && (
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt || 'Hero background'}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      )}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-mountain-950/80 via-mountain-950/50 to-mountain-950/70"
        style={{ opacity: parseInt(overlayOpacity) / 100 }}
      />

      {/* Mountain Silhouette Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="#fdfbf7"
            d="M0,120 L0,80 L120,60 L240,90 L360,40 L480,70 L600,30 L720,80 L840,50 L960,90 L1080,35 L1200,75 L1320,55 L1440,85 L1440,120 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        {/* Tibetan Text */}
        {blok.tibetan_text && (
          <p className="font-tibetan text-2xl md:text-3xl text-gold-400 mb-4 animate-fade-in">
            {blok.tibetan_text}
          </p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 text-shadow animate-slide-up">
          {blok.title}
        </h1>

        {/* Subtitle */}
        {blok.subtitle && (
          <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto mb-10 animate-fade-in">
            {blok.subtitle}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          {blok.primary_button_text && blok.primary_button_link && (
            <Link
              href={`/${blok.primary_button_link.cached_url}`}
              className="btn-primary text-lg px-8 py-4"
            >
              {blok.primary_button_text}
            </Link>
          )}
          {blok.secondary_button_text && blok.secondary_button_link && (
            <Link
              href={`/${blok.secondary_button_link.cached_url}`}
              className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white/10"
            >
              {blok.secondary_button_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
