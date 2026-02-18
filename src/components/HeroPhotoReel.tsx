"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const reelImages = [
  // Hero images
  { src: "/images/hero/HSC-Lhosar-Party-2011.jpeg", alt: "HSC Lhosar Party 2011" },
  { src: "/images/hero/HSC-party-2013.jpeg", alt: "HSC Party 2013" },
  { src: "/images/hero/HSC-members-Bhajra-guru-program.jpeg", alt: "HSC Members at Bhajra Guru Program" },
  { src: "/images/hero/hscpicnic.jpg", alt: "HSC Picnic" },
  { src: "/images/hero/sherpadance2.jpg", alt: "Sherpa Traditional Dance" },
  { src: "/images/hero/IMG_8214.jpg", alt: "HSC Community Event" },
  { src: "/images/hero/IMG_8287.jpg", alt: "Fund Raising Event" },
  { src: "/images/hero/Sonoma-Sherpa-Kids-back-in-2013.jpeg", alt: "Sonoma Sherpa Kids 2013" },
  // News images
  { src: "/images/news/benefit.jpg", alt: "Fund raising event for Everest Avalanche victims" },
  { src: "/images/news/fundraising.jpg", alt: "Fundraising" },
  { src: "/images/news/k2-summit.jpg", alt: "K2 Summit by HSC member" },
  // Events - Annual
  { src: "/images/events/annual/himalayan cup.jpeg", alt: "Himalayan Cup" },
  { src: "/images/events/annual/losar.jpg", alt: "Losar Celebration" },
  { src: "/images/events/annual/phangi-party.jpeg", alt: "Phangi Party" },
  // Events - Past
  { src: "/images/events/past/HSC-Labor-Day-Volleyball-2012.jpeg", alt: "HSC Labor Day Volleyball 2012" },
  { src: "/images/events/past/earthquake-victims.jpeg", alt: "Earthquake Victims Support" },
  { src: "/images/events/past/everest-avalanche.jpg", alt: "Everest Avalanche Memorial" },
  { src: "/images/events/past/musical-concert.jpeg", alt: "Musical Concert" },
  { src: "/images/events/past/summit-legend-with hsc members.jpg", alt: "Mountain Legends with HSC Members" },
  // Events - Signature
  { src: "/images/events/signature/Lhosar-Party-.jpeg", alt: "Lhosar Party" },
  { src: "/images/events/signature/labor-day-flex.jpg", alt: "Labor Day Flex" },
  { src: "/images/events/signature/phang-ngi.jpg", alt: "Phang Ngi" },
  // HSFC
  { src: "/images/hsfc/team.jpg", alt: "HSFC Team" },
];

// Duplicate images for seamless infinite scroll
const doubledImages = [...reelImages, ...reelImages];

interface HeroPhotoReelProps {
  inline?: boolean; // When true, renders without absolute positioning (for mobile)
}

export default function HeroPhotoReel({ inline = false }: HeroPhotoReelProps) {
  const [modalImg, setModalImg] = useState<null | { img: typeof reelImages[0]; index: number }>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalImg) {
      const newIndex = modalImg.index === 0 ? reelImages.length - 1 : modalImg.index - 1;
      setModalImg({ img: reelImages[newIndex], index: newIndex });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalImg) {
      const newIndex = modalImg.index === reelImages.length - 1 ? 0 : modalImg.index + 1;
      setModalImg({ img: reelImages[newIndex], index: newIndex });
    }
  };

  const openModal = (img: typeof reelImages[0], index: number) => {
    // Use modulo to get the actual index from doubled images
    const actualIndex = index % reelImages.length;
    setModalImg({ img, index: actualIndex });
  };

  // Keyboard navigation
  useEffect(() => {
    if (!modalImg) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImg(null);
      } else if (e.key === 'ArrowLeft') {
        const newIndex = modalImg.index === 0 ? reelImages.length - 1 : modalImg.index - 1;
        setModalImg({ img: reelImages[newIndex], index: newIndex });
      } else if (e.key === 'ArrowRight') {
        const newIndex = modalImg.index === reelImages.length - 1 ? 0 : modalImg.index + 1;
        setModalImg({ img: reelImages[newIndex], index: newIndex });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImg]);

  const reelContent = (
    <>
      {/* Top Sprocket Holes */}
      <div className="flex justify-between px-2 mb-1">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={`top-${i}`} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-gray-800" />
        ))}
      </div>
      
      {/* Scrolling Film Frames - Animated */}
      <div 
        className="overflow-hidden py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-1 px-2"
          style={{
            animation: `scroll-left 40s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {doubledImages.map((img, index) => (
            <button
              key={`${img.src}-${index}`}
              className="relative group focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-gray-950 flex-shrink-0 rounded-sm"
              onClick={() => openModal(img, index)}
              aria-label={`View ${img.alt} in fullscreen`}
            >
              {/* Film frame with border */}
              <div className="relative w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 bg-gray-900 rounded-sm overflow-hidden border-2 border-gray-700 group-hover:border-gold-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold-400/40 group-hover:z-10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Bottom Sprocket Holes */}
      <div className="flex justify-between px-2 mt-1">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={`bottom-${i}`} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-gray-800" />
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Film Strip Reel - conditional positioning */}
      {inline ? (
        // Inline version for mobile - no absolute positioning
        <div className="w-full bg-gray-950/95 shadow-2xl py-1.5 backdrop-blur-sm">
          {reelContent}
        </div>
      ) : (
        // Absolute positioned version for desktop
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden">
          <div className="pointer-events-auto w-full bg-gray-950/95 shadow-2xl py-1.5 backdrop-blur-sm border-t border-gray-800">
            {reelContent}
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Modal */}
      {modalImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-100/40 backdrop-blur-md animate-fade-in p-2 sm:p-4"
          onClick={() => setModalImg(null)}
        >
          {/* Modal content container */}
          <div className="flex flex-col items-center w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Image with decorative frame */}
            <div className="relative w-full">
              {/* Outer decorative frame */}
              <div className="bg-gradient-to-br from-amber-700 via-amber-900 to-amber-800 p-2 sm:p-3 rounded-lg shadow-2xl">
                {/* Inner gold border */}
                <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-500 p-1 rounded-md">
                  {/* Image container */}
                  <div className="relative w-full aspect-[4/3] bg-black rounded overflow-hidden">
                    <Image
                      src={modalImg.img.src}
                      alt={modalImg.img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, 900px"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
              
              {/* Image counter badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-full backdrop-blur-sm">
                {modalImg.index + 1} / {reelImages.length}
              </div>
            </div>
            
            {/* Image Title */}
            <p className="text-white text-sm sm:text-base md:text-lg font-medium text-center mt-3 mb-2 px-2 drop-shadow-lg">
              {modalImg.img.alt}
            </p>
            
            {/* Navigation controls - Prev | Close | Next */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mt-2 mb-4">
              {/* Previous button */}
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg border border-gray-600"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm sm:text-base font-medium">Prev</span>
              </button>
              
              {/* Close button */}
              <button
                onClick={() => setModalImg(null)}
                className="flex items-center gap-1 sm:gap-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-2 border-white/30"
                aria-label="Close fullscreen image"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm sm:text-base font-medium">Close</span>
              </button>
              
              {/* Next button */}
              <button
                onClick={handleNext}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg border border-gray-600"
                aria-label="Next image"
              >
                <span className="text-sm sm:text-base font-medium">Next</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Keyboard hint */}
            <p className="text-gray-500 text-xs hidden sm:block">
              Use ← → arrow keys to navigate, ESC to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
