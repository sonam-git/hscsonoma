'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

interface HomeEventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationUrl?: string;
  isFeatured?: boolean;
}

interface HomeEventsSectionProps {
  events: HomeEventData[];
}

export default function HomeEventsSection({ events }: HomeEventsSectionProps) {
  const [selectedEventImage, setSelectedEventImage] = useState<string | null>(null);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  // Ensure we're on the client before rendering portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEventImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedEventImage]);

  // Modal component to be rendered via portal
  const ImageModal = () => {
    if (!selectedEventImage) return null;

    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={() => setSelectedEventImage(null)}
        role="dialog"
        aria-modal="true"
        aria-label={`Image preview: ${selectedEventTitle}`}
      >
        <div
          className="relative max-w-4xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedEventImage(null)}
            className="absolute -top-12 right-0 md:top-0 md:-right-12 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-mountain-800 rounded-full shadow-lg hover:bg-cream-100 dark:hover:bg-mountain-700 transition-colors"
            aria-label="Close image preview"
          >
            <svg className="w-6 h-6 text-mountain-900 dark:text-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative bg-white dark:bg-mountain-800 rounded-xl overflow-hidden border-4 border-white dark:border-mountain-700 shadow-2xl">
            <div className="relative w-full" style={{ maxHeight: '80vh' }}>
              <Image
                src={selectedEventImage}
                alt={selectedEventTitle}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
                priority
              />
            </div>

            {/* Event Title Below Image */}
            {selectedEventTitle && (
              <div className="p-4 bg-white dark:bg-mountain-800 border-t border-cream-200 dark:border-mountain-700">
                <h3 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 text-center font-[Georgia,'Times_New_Roman',Times,serif]">
                  {selectedEventTitle}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {events.length > 0 ? (
        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event) => {
            const eventDate = event.date ? new Date(event.date) : null;
            const isValidDate = eventDate && !isNaN(eventDate.getTime());

            return (
              <div
                key={event.id}
                className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200 dark:border-mountain-700"
              >
                <div className="grid md:grid-cols-2">
                  {/* Left Column - Text Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                    {/* Featured Badge */}
                    {event.isFeatured && (
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-gold-500 text-mountain-900 text-xs font-bold rounded-full shadow-md">
                          Featured Event
                        </span>
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl py-2 px-1">
                          {isValidDate ? (
                            <>
                              <span className="block text-2xl font-bold text-burgundy-700 dark:text-burgundy-400">
                                {eventDate.getDate()}
                              </span>
                              <span className="block text-xs text-burgundy-600 dark:text-burgundy-500 uppercase font-medium">
                                {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                              </span>
                              <span className="block text-[10px] text-burgundy-500 dark:text-burgundy-600">
                                {eventDate.getFullYear()}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="block text-lg font-bold text-burgundy-700 dark:text-burgundy-400">
                                TBD
                              </span>
                              <span className="block text-[10px] text-burgundy-500 dark:text-burgundy-600 uppercase">
                                Date
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-mountain-900 dark:text-cream-50 mb-2 font-[Georgia,'Times_New_Roman',Times,serif]">
                          {event.title}
                        </h3>

                        {/* Time & Location */}
                        <div className="flex flex-col gap-1 text-sm text-mountain-500 dark:text-mountain-400">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{event.time && event.time.trim() ? event.time : 'TBD'}</span>
                          </span>
                          {event.location && (
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{event.location}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-mountain-600 dark:text-mountain-300 text-sm md:text-base leading-relaxed mb-5 font-[Georgia,'Times_New_Roman',Times,serif]">
                      {event.description}
                    </p>

                    {/* Registration Link */}
                    {event.registrationUrl && (
                      <div>
                        <Link
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          Register Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Image (Clickable for Modal) */}
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[300px] order-1 md:order-2 overflow-hidden">
                    {event.image ? (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedEventImage(event.image || null);
                          setSelectedEventTitle(event.title);
                        }}
                        className="relative w-full h-full cursor-pointer group"
                        aria-label={`View ${event.title} image`}
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-fit w-full h-full transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Hover overlay with zoom icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-mountain-800/90 rounded-full p-3 shadow-lg">
                            <svg className="w-6 h-6 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 dark:from-burgundy-900/50 dark:to-mountain-600 flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-burgundy-300 dark:text-burgundy-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <section className="py-16 bg-white dark:bg-mountain-800 rounded-md shadow-lg">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                    Want to Attend or Sponsor an Event?
                  </h3>
                  <p className="text-mountain-600 dark:text-mountain-300">
                    Partner with us to celebrate and preserve Sherpa heritage in Sonoma.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get in Touch
                  </Link>
                  <Link href="/donate" className="btn-secondary">
                    Support Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-mountain-500 dark:text-mountain-400 text-lg">
            No upcoming events at the moment. Please check back later.
          </p>
        </div>
      )}

      {/* Render Modal via Portal to ensure it's on top of everything */}
      {mounted && selectedEventImage && createPortal(
        <ImageModal />,
        document.body
      )}
    </>
  );
}
