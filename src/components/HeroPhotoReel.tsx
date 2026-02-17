"use client";

import { useState } from "react";
import Image from "next/image";

const reelImages = [
  // Hero images
  { src: "/images/hero/HSC-Lhosar-Party-2011.jpeg", alt: "HSC Lhosar Party 2011" },
  { src: "/images/hero/HSC-party-2013.jpeg", alt: "HSC Party 2013" },
  { src: "/images/hero/HSC-members-Bhajra-guru-program.jpeg", alt: "HSC Members at Bhajra Guru Program" },
  { src: "/images/hero/hscpicnic.jpg", alt: "HSC Picnic" },
  { src: "/images/hero/sherpadance2.jpg", alt: "Sherpa Traditional Dance" },
  { src: "/images/hero/IMG_8214.jpg", alt: "HSC Community Event" },
  { src: "/images/hero/IMG_8287.jpg", alt: "HSC Gathering" },
  { src: "/images/hero/Sonoma-Sherpa-Kids-back-in-2013.jpeg", alt: "Sonoma Sherpa Kids 2013" },
  // News images
  { src: "/images/news/benefit.jpg", alt: "Benefit Event" },
  { src: "/images/news/fundraising.jpg", alt: "Fundraising" },
  { src: "/images/news/k2-summit.jpg", alt: "K2 Summit" },
  // Events - Annual
  { src: "/images/events/annual/himalayan cup.jpeg", alt: "Himalayan Cup" },
  { src: "/images/events/annual/losar.jpg", alt: "Losar Celebration" },
  { src: "/images/events/annual/phangi-party.jpeg", alt: "Phangi Party" },
  // Events - Past
  { src: "/images/events/past/HSC-Labor-Day-Volleyball-2012.jpeg", alt: "HSC Labor Day Volleyball 2012" },
  { src: "/images/events/past/earthquake-victims.jpeg", alt: "Earthquake Victims Support" },
  { src: "/images/events/past/everest-avalanche.jpg", alt: "Everest Avalanche Memorial" },
  { src: "/images/events/past/musical-concert.jpeg", alt: "Musical Concert" },
  { src: "/images/events/past/summit-legend-with hsc members.jpg", alt: "Summit Legend with HSC Members" },
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
  const [modalImg, setModalImg] = useState<null | typeof reelImages[0]>(null);
  const [isPaused, setIsPaused] = useState(false);

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
              className="relative group focus:outline-none flex-shrink-0"
              onClick={() => setModalImg(img)}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fade-in"
          onClick={() => setModalImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all duration-300 z-10"
            onClick={() => setModalImg(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div 
            className="relative w-[90vw] max-w-3xl aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800 bg-black animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImg.src}
              alt={modalImg.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 900px"
              draggable={false}
            />
            {/* Image Title - Bottom Right */}
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              <p className="text-white text-sm sm:text-base md:text-lg font-medium text-right drop-shadow-lg">
                {modalImg.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
