'use client';

import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface UpcomingEventProps {
  blok: {
    _uid: string;
    title: string;
    description: string;
    venue: string;
    price: string;
    date: string;
    time: string;
    image: {
      filename: string;
      alt: string;
    };
    registration_link?: {
      cached_url: string;
      url?: string;
      target?: string;
    };
    is_featured?: boolean;
  };
}

export default function UpcomingEvent({ blok }: UpcomingEventProps) {
  const eventDate = new Date(blok.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const year = eventDate.getFullYear();
  const isPast = eventDate < new Date();
  const registrationUrl = blok.registration_link?.cached_url || blok.registration_link?.url;

  return (
    <article
      {...storyblokEditable(blok)}
      className={`card card-hover group overflow-hidden ${isPast ? 'opacity-60' : ''} ${blok.is_featured ? 'ring-2 ring-gold-400 ring-offset-2' : ''}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative w-full lg:w-72 aspect-[16/10] lg:aspect-[4/3] flex-shrink-0 overflow-hidden">
          {blok.image?.filename ? (
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || blok.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 dark:from-burgundy-900 dark:to-burgundy-800 flex items-center justify-center">
              <svg className="w-16 h-16 text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Featured Badge */}
          {blok.is_featured && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-gold-500 text-mountain-900 text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </div>
          )}

          {/* Past Badge */}
          {isPast && (
            <div className="absolute inset-0 bg-mountain-900/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-mountain-800 text-white font-medium rounded-lg">
                Past Event
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Date Box */}
            <div className="flex-shrink-0 w-20 text-center">
              <div className="bg-gradient-to-br from-burgundy-100 to-burgundy-50 dark:from-burgundy-900/50 dark:to-burgundy-800/30 rounded-xl py-3 shadow-inner">
                <span className="block text-3xl font-bold text-burgundy-700 dark:text-burgundy-400">{day}</span>
                <span className="block text-sm font-medium text-burgundy-600 dark:text-burgundy-500 uppercase">{month}</span>
                <span className="block text-xs text-burgundy-500 dark:text-burgundy-600">{year}</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-mountain-900 dark:text-mountain-100 mb-2 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors">
                {blok.title}
              </h3>

              {/* Time, Venue, Price */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-mountain-600 dark:text-mountain-400 mb-3">
                {/* Time */}
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-burgundy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {blok.time}
                </span>

                {/* Venue */}
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-burgundy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {blok.venue}
                </span>

                {/* Price */}
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-burgundy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={blok.price === 'Free' ? 'text-green-600 dark:text-green-400 font-medium' : ''}>
                    {blok.price || 'Free'}
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="text-mountain-600 dark:text-mountain-400 line-clamp-2 mb-4">
                {blok.description}
              </p>

              {/* Registration Button */}
              {registrationUrl && !isPast && (
                <Link
                  href={registrationUrl}
                  target={blok.registration_link?.target || '_self'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-600 hover:bg-burgundy-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Register Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
