'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const heroImages = [
  {
    src: '/images/hero/HSC-Lhosar-Party-2011.jpeg',
    alt: 'HSC Lhosar Party 2011',
  },
  {
    src: '/images/hero/HSC-party-2013.jpeg',
    alt: 'HSC Party 2013',
  },
  {
    src: '/images/hero/HSC-members-Bhajra-guru-program.jpeg',
    alt: 'HSC Members at Bhajra Guru Program',
  },
  {
    src: '/images/hero/hscpicnic.jpg',
    alt: 'HSC Picnic',
  },
  {
    src: '/images/hero/sherpadance2.jpg',
    alt: 'Sherpa Traditional Dance',
  },
  {
    src: '/images/hero/IMG_8214.jpg',
    alt: 'HSC Community Event',
  },
  {
    src: '/images/hero/IMG_8287.jpg',
    alt: 'HSC Gathering',
  },
  {
    src: '/images/hero/summitlegend.jpg',
    alt: 'Summit Legend',
  },
  {
    src: '/images/hero/Sonoma-Sherpa-Kids-back-in-2013.jpeg',
    alt: 'Sonoma Sherpa Kids 2013',
  },
];

interface HeroSlideshowProps {
  interval?: number; // Time in milliseconds between slides
}

export default function HeroSlideshow({ interval = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 500); // Half of the fade transition time
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval, nextSlide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* All images stacked, only current one visible */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex
              ? isTransitioning
                ? 'opacity-0'
                : 'opacity-100'
              : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mountain-950/70 via-mountain-950/40 to-mountain-950/80" />

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold-400 w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
