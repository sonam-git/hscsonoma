'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FounderImageModalProps {
  founders: Array<{
    name: string;
    image: string;
  }>;
}

export default function FounderImageModal({ founders }: FounderImageModalProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrev = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? founders.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === founders.length - 1 ? 0 : selectedImage + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      {/* Founder Photos Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <div key={index} className="text-center">
            <button
              onClick={() => openModal(index)}
              className="group relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg mb-4 cursor-pointer focus:outline-none focus:ring-4 focus:ring-burgundy-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Click to enlarge
                </span>
              </div>
            </button>
            <h3 className="text-xl font-serif font-bold text-mountain-900 dark:text-cream-50">
              {founder.name}
            </h3>
            <p className="text-burgundy-600 dark:text-burgundy-400 text-sm">
              Founding Pioneer
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${founders[selectedImage].name}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-gray-100 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            {selectedImage + 1} / {founders.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative z-10 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Frame */}
            <div className="relative bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-2 md:p-3 rounded-2xl shadow-2xl">
              {/* Inner Frame */}
              <div className="bg-cream-50 dark:bg-mountain-900 p-2 md:p-3 rounded-xl">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={founders[selectedImage].image}
                    alt={founders[selectedImage].name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                {founders[selectedImage].name}
              </h3>
              <p className="text-gold-400 text-lg">Founding Pioneer</p>
              <p className="text-cream-200 text-sm mt-2">
                Featured in Sonoma Magazine – Fall 2011
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {founders.map((founder, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                  index === selectedImage
                    ? 'border-gray-800 scale-110 shadow-lg shadow-gold-400/30'
                    : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
                }`}
                aria-label={`View ${founder.name}`}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-4 right-4 z-20 hidden md:flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd>
              Close
            </span>
          </div>
        </div>
      )}
    </>
  );
}
