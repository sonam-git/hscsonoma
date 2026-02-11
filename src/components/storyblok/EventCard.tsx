import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  blok: {
    title: string;
    description: string;
    featured_image: {
      filename: string;
      alt: string;
    };
    event_date: string;
    event_time: string;
    location: string;
    slug: string;
    is_past?: boolean;
  };
}

export default function EventCard({ blok }: EventCardProps) {
  const eventDate = new Date(blok.event_date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const year = eventDate.getFullYear();
  const isPast = blok.is_past || eventDate < new Date();

  return (
    <article
      {...storyblokEditable(blok)}
      className={`card card-hover group ${isPast ? 'opacity-75' : ''}`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-48 aspect-[16/10] md:aspect-square flex-shrink-0 overflow-hidden">
          {blok.featured_image?.filename ? (
            <Image
              src={blok.featured_image.filename}
              alt={blok.featured_image.alt || blok.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Past Badge */}
          {isPast && (
            <div className="absolute inset-0 bg-mountain-900/50 flex items-center justify-center">
              <span className="px-3 py-1 bg-mountain-800 text-white text-sm font-medium rounded">
                Past Event
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow p-6">
          <div className="flex items-start gap-4">
            {/* Date Box */}
            <div className="flex-shrink-0 w-16 text-center">
              <div className="bg-burgundy-100 rounded-lg py-2">
                <span className="block text-2xl font-bold text-burgundy-700">{day}</span>
                <span className="block text-sm text-burgundy-600 uppercase">{month}</span>
                <span className="block text-xs text-burgundy-500">{year}</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-mountain-900 mb-2 group-hover:text-burgundy-700 transition-colors">
                {blok.title}
              </h3>

              {/* Time & Location */}
              <div className="flex flex-wrap gap-4 text-sm text-mountain-500 mb-3">
                {blok.event_time && (
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blok.event_time}
                  </div>
                )}
                {blok.location && (
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {blok.location}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-mountain-600 text-sm line-clamp-2 mb-3">
                {blok.description}
              </p>

              {/* View Details Link */}
              <Link
                href={`/events/${blok.slug}`}
                className="inline-flex items-center text-sm text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors"
              >
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
