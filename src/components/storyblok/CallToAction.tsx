import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import Image from 'next/image';

interface CallToActionProps {
  blok: {
    title: string;
    description: string;
    background_image?: {
      filename: string;
      alt: string;
    };
    primary_button_text: string;
    primary_button_link: {
      cached_url: string;
    };
    secondary_button_text?: string;
    secondary_button_link?: {
      cached_url: string;
    };
    style?: 'default' | 'wine' | 'mountain';
  };
}

export default function CallToAction({ blok }: CallToActionProps) {
  const styleClasses = {
    default: 'bg-gradient-to-r from-burgundy-700 via-burgundy-800 to-burgundy-900',
    wine: 'bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-forest-900',
    mountain: 'bg-gradient-to-r from-himalayan-800 via-mountain-800 to-himalayan-900',
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      {blok.background_image?.filename ? (
        <>
          <Image
            src={blok.background_image.filename}
            alt={blok.background_image.alt || ''}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-mountain-950/70" />
        </>
      ) : (
        <div className={`absolute inset-0 ${styleClasses[blok.style || 'default']}`} />
      )}

      {/* Mountain Pattern */}
      <div className="absolute inset-x-0 bottom-0 h-16 opacity-10">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="white"
            d="M0,100 L0,60 L120,80 L240,40 L360,70 L480,30 L600,60 L720,20 L840,50 L960,25 L1080,55 L1200,35 L1320,65 L1440,45 L1440,100 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container-custom text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
          {blok.title}
        </h2>
        <p className="text-xl text-cream-200 max-w-2xl mx-auto mb-10">
          {blok.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${blok.primary_button_link.cached_url}`}
            className="btn-gold text-lg"
          >
            {blok.primary_button_text}
          </Link>
          {blok.secondary_button_text && blok.secondary_button_link && (
            <Link
              href={`/${blok.secondary_button_link.cached_url}`}
              className="btn-secondary border-white text-white hover:bg-white/10 text-lg"
            >
              {blok.secondary_button_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
