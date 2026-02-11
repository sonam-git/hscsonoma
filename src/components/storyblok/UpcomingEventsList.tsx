'use client';

import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

interface UpcomingEventsListProps {
  blok: {
    _uid: string;
    title?: string;
    subtitle?: string;
    events: Array<{
      _uid: string;
      component: string;
      [key: string]: unknown;
    }>;
    show_past_events?: boolean;
    max_events?: number;
  };
}

export default function UpcomingEventsList({ blok }: UpcomingEventsListProps) {
  let events = blok.events || [];

  // Filter past events if needed
  if (!blok.show_past_events) {
    events = events.filter((event) => {
      const eventDate = event.date as string;
      return eventDate ? new Date(eventDate) >= new Date() : true;
    });
  }

  // Limit events
  if (blok.max_events) {
    events = events.slice(0, blok.max_events);
  }

  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-cream-50 dark:bg-mountain-950">
      <div className="container-custom">
        {/* Header */}
        {(blok.title || blok.subtitle) && (
          <div className="text-center mb-12">
            {blok.title && (
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-mountain-100 mb-4">
                {blok.title}
              </h2>
            )}
            {blok.subtitle && (
              <p className="text-lg text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto">
                {blok.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Events Grid */}
        <div className="space-y-6">
          {events.map((event) => (
            <StoryblokComponent key={event._uid} blok={event} />
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-mountain-300 dark:text-mountain-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xl text-mountain-500 dark:text-mountain-400">No upcoming events at the moment</p>
            <p className="text-mountain-400 dark:text-mountain-500 mt-2">Check back soon for new events!</p>
          </div>
        )}
      </div>
    </section>
  );
}
