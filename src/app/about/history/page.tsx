'use client';

import Link from 'next/link';
import { useState } from 'react';

// Icon components for categories
const IconFoundation = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const IconCulture = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  </svg>
);

const IconSports = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l2 5h-4l2-5m0 20l-2-5h4l-2 5M2 12l5-2v4l-5-2m20 0l-5 2v-4l5 2" />
  </svg>
);

const IconCharity = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconGrowth = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const IconLeadership = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconEvent = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const IconYouth = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

type Category = 'foundation' | 'culture' | 'sports' | 'charity' | 'growth' | 'leadership' | 'event' | 'youth';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: Category;
  highlight?: boolean;
}

const categoryConfig: Record<Category, { icon: () => JSX.Element; color: string; bgColor: string; label: string }> = {
  foundation: { icon: IconFoundation, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-100 dark:bg-blue-900/50', label: 'Foundation' },
  culture: { icon: IconCulture, color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-100 dark:bg-purple-900/50', label: 'Culture' },
  sports: { icon: IconSports, color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-100 dark:bg-green-900/50', label: 'Sports' },
  charity: { icon: IconCharity, color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-100 dark:bg-red-900/50', label: 'Charity' },
  growth: { icon: IconGrowth, color: 'text-teal-600 dark:text-teal-400', bgColor: 'bg-teal-100 dark:bg-teal-900/50', label: 'Growth' },
  leadership: { icon: IconLeadership, color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-100 dark:bg-orange-900/50', label: 'Leadership' },
  event: { icon: IconEvent, color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-100 dark:bg-yellow-900/50', label: 'Event' },
  youth: { icon: IconYouth, color: 'text-indigo-600 dark:text-indigo-400', bgColor: 'bg-indigo-100 dark:bg-indigo-900/50', label: 'Youth' },
};

const timelineEvents: TimelineEvent[] = [
  {
    year: '2010',
    title: 'Community Beginnings',
    description: 'A small group of Sherpa families in Sonoma County began gathering informally to celebrate cultural traditions and support one another.',
    category: 'foundation',
  },
  {
    year: '2011',
    title: 'Formation of the Club',
    description: 'The Himalayan Sherpa Club of Sonoma was officially formed to provide a more organized structure for community events and support. It received 501(c)(3) status the following year in 2012.',
    category: 'foundation',
    highlight: true,
  },
  {
    year: '2011',
    title: 'First Volleyball Tournament',
    description: 'The club organized its first volleyball tournament, fostering community spirit and engagement through sports.',
    category: 'sports',
  },
  {
    year: '2012',
    title: 'First Losar Celebration',
    description: 'The community organized its first public Losar (Tibetan New Year) celebration, attracting Sherpa families from across Northern California.',
    category: 'culture',
    highlight: true,
  },
  {
    year: '2013',
    title: 'Community Growth',
    description: 'The club experienced significant growth in membership and community engagement, expanding its programs and outreach efforts.',
    category: 'growth',
  },
  {
    year: '2014',
    title: 'Himalayan Sonoma FC Founded',
    description: 'Pemba Sherpa Founded Himalayan Sonoma FC, a soccer team that would go on to become a beloved part of the community and a platform for youth engagement.',
    category: 'sports',
  },
  {
    year: '2014',
    title: 'Everest Avalanche Relief',
    description: 'The Himalayan Sherpa Club of Sonoma conducted a fundraising campaign to support the families of Sherpas who lost their lives in the Everest avalanche.',
    category: 'charity',
    highlight: true,
  },
  {
    year: '2015',
    title: 'Nepal Earthquake Response',
    description: 'Following the devastating 2015 Nepal earthquake, the club mobilized to raise funds and provide support to affected communities in the Himalayan region.',
    category: 'charity',
    highlight: true,
  },
  {
    year: '2015',
    title: 'Himalayan Cup Soccer Tournament',
    description: 'The club organized the first-ever Himalayan Cup Soccer Tournament, bringing together teams from the Sherpa community and beyond.',
    category: 'sports',
  },
  {
    year: '2016',
    title: 'Annual Phang-ngi Celebration',
    description: 'The club organized its first annual Phang-ngi celebration, honoring Sherpa culture and traditions with food, music, and dance.',
    category: 'culture',
  },
  {
    year: '2017',
    title: 'New Generation Leadership',
    description: 'The younger generation of Sherpa community members took on leadership roles, bringing fresh energy and ideas to continue the legacy.',
    category: 'leadership',
  },
  {
    year: '2018',
    title: 'Community Center Vision',
    description: 'The club began planning for a permanent community center to serve as a hub for cultural activities, education, and gatherings.',
    category: 'growth',
  },
  {
    year: '2019',
    title: '100+ Families Strong',
    description: 'Membership grew to over 100 families, representing one of the largest Sherpa communities in Northern California.',
    category: 'growth',
    highlight: true,
  },
  {
    year: '2020',
    title: 'Virtual Community',
    description: 'Adapted to the pandemic by hosting virtual events and gatherings, keeping the community connected despite physical distancing challenges.',
    category: 'culture',
  },
  {
    year: '2021',
    title: '$10K Soccer Tournament',
    description: 'The club organized a Labor Day soccer tournament with one of the highest prizes in Bay Area Nepali Soccer tournament history. Bhutanese Youth Sport Center from Minnesota won.',
    category: 'sports',
    highlight: true,
  },
  {
    year: '2022',
    title: 'Lhosar Celebration Continues',
    description: 'HSC continued to host annual Losar celebrations, drawing larger crowds each year and becoming a cherished tradition for the community.',
    category: 'culture',
  },
  {
    year: '2023',
    title: 'Summit Legends Event',
    description: 'Proudly hosted this special event at Veterans Memorial Hall, celebrating three extraordinary Sherpa mountaineers with Guinness World Records.',
    category: 'event',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Continuing the Legacy',
    description: 'The club continues to grow and thrive, serving as a vital link between Sherpa heritage and the Sonoma County community.',
    category: 'growth',
  },
  {
    year: '2025',
    title: 'Chotrul Monlam Festival',
    description: 'Members contributed to the Chotrul Monlam Festival 2025 at Richmond Civic Center Plaza, San Francisco—three days of sacred prayers and celebration.',
    category: 'culture',
    highlight: true,
  },
];

// Group events by year
const eventsByYear = timelineEvents.reduce((acc, event) => {
  if (!acc[event.year]) {
    acc[event.year] = [];
  }
  acc[event.year].push(event);
  return acc;
}, {} as Record<string, TimelineEvent[]>);

const years = Object.keys(eventsByYear).sort();

export default function HistoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === selectedCategory);

  const stats = [
    { value: '15+', label: 'Years of Service' },
    { value: '100+', label: 'Member Families' },
    { value: '50+', label: 'Events Organized' },
    { value: '$100K+', label: 'Funds Raised' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Matching other about pages */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ང་ཚོའི་ལོ་རྒྱུས།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our History
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            From humble beginnings to a thriving community — discover the journey of the Himalayan Sherpa Club of Sonoma
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white dark:bg-mountain-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <p className="text-3xl md:text-4xl font-bold text-burgundy-600 dark:text-burgundy-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-mountain-600 dark:text-mountain-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
              A Testament to Resilience & Community Spirit
            </h2>
            <p className="text-lg text-mountain-600 dark:text-mountain-300 leading-relaxed">
              The Himalayan Sherpa Club of Sonoma has grown from informal gatherings of a few 
              families to become one of the most vibrant Sherpa community organizations in 
              Northern California. Our history is a testament to the resilience, cultural pride, 
              and community spirit that defines the Sherpa people.
            </p>
          </div>
        </div>
      </section>

      {/* Year Graph Visualization */}
      <section className="py-12 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-lg font-semibold text-mountain-700 dark:text-mountain-300 mb-8">
              Timeline Overview • Click a year to explore
            </h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex items-end justify-center gap-2 min-w-max px-4">
                {years.map((year) => {
                  const yearEvents = eventsByYear[year];
                  const hasHighlight = yearEvents.some(e => e.highlight);
                  const eventCount = yearEvents.length;
                  
                  return (
                    <a
                      key={year}
                      href={`#year-${year}`}
                      className="flex flex-col items-center group"
                    >
                      {/* Event count badge */}
                      <span className="text-xs font-bold text-mountain-500 dark:text-mountain-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {eventCount} {eventCount === 1 ? 'event' : 'events'}
                      </span>
                      
                      {/* Bar */}
                      <div 
                        className={`w-10 md:w-14 rounded-t-lg transition-all duration-300 group-hover:scale-105 ${
                          hasHighlight 
                            ? 'bg-gradient-to-t from-burgundy-700 to-burgundy-500 shadow-lg shadow-burgundy-500/30' 
                            : 'bg-gradient-to-t from-mountain-500 to-mountain-400 dark:from-mountain-600 dark:to-mountain-500'
                        }`}
                        style={{ height: `${Math.max(50, eventCount * 35)}px` }}
                      />
                      
                      {/* Year label */}
                      <div className={`mt-2 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                        hasHighlight
                          ? 'bg-burgundy-600 text-white'
                          : 'bg-white dark:bg-mountain-800 text-mountain-700 dark:text-mountain-300 group-hover:bg-burgundy-100 dark:group-hover:bg-burgundy-900/40'
                      }`}>
                        {year}
                      </div>
                      
                      {/* Highlight indicator */}
                      {hasHighlight && (
                        <span className="text-gold-500 text-lg mt-1">★</span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white dark:bg-mountain-800 sticky top-24 z-30 border-b border-cream-200 dark:border-mountain-700 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-burgundy-600 text-white shadow-lg scale-105'
                  : 'bg-cream-100 dark:bg-mountain-700 text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30'
              }`}
            >
              All ({timelineEvents.length})
            </button>
            {Object.entries(categoryConfig).map(([key, config]) => {
              const Icon = config.icon;
              const count = timelineEvents.filter(e => e.category === key).length;
              if (count === 0) return null;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as Category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === key
                      ? 'bg-burgundy-600 text-white shadow-lg scale-105'
                      : 'bg-cream-100 dark:bg-mountain-700 text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30'
                  }`}
                >
                  <Icon />
                  <span className="hidden sm:inline">{config.label}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Events */}
      <section className="py-16 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-burgundy-300 via-burgundy-500 to-burgundy-300 dark:from-burgundy-700 dark:via-burgundy-500 dark:to-burgundy-700 rounded-full transform md:-translate-x-1/2" />
            
            {/* Events */}
            <div className="space-y-12">
              {filteredEvents.map((event, index) => {
                const config = categoryConfig[event.category];
                const Icon = config.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={`${event.year}-${event.title}-${index}`}
                    id={`year-${event.year}`}
                    className={`relative flex items-start ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 ${
                        event.highlight 
                          ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-mountain-900 ring-4 ring-gold-300/50' 
                          : `bg-white dark:bg-mountain-800 ${config.color} ring-4 ring-cream-200 dark:ring-mountain-700`
                      }`}>
                        <Icon />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-24 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
                    }`}>
                      <div className={`bg-white dark:bg-mountain-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                        event.highlight 
                          ? 'ring-2 ring-gold-400/50 border-l-4 border-gold-500' 
                          : 'hover:ring-2 hover:ring-burgundy-200 dark:hover:ring-burgundy-700'
                      }`}>
                        {/* Header */}
                        <div className={`flex flex-wrap items-center gap-2 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="px-4 py-1.5 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-300 text-sm font-bold rounded-full">
                            {event.year}
                          </span>
                          <span className={`px-3 py-1.5 ${config.bgColor} ${config.color} text-xs font-medium rounded-full inline-flex items-center gap-1.5`}>
                            <Icon />
                            {config.label}
                          </span>
                          {event.highlight && (
                            <span className="text-gold-500 text-xl" title="Milestone Event">★</span>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className={`text-xl md:text-2xl font-bold text-mountain-900 dark:text-cream-50 mb-3 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors ${
                          isLeft ? 'md:text-right' : ''
                        }`}>
                          {event.title}
                        </h3>
                        
                        {/* Description */}
                        <p className={`text-mountain-600 dark:text-mountain-300 leading-relaxed ${
                          isLeft ? 'md:text-right' : ''
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="py-20 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50">
              Moments That Defined Us
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {timelineEvents.filter(e => e.highlight).map((event, idx) => {
              const config = categoryConfig[event.category];
              const Icon = config.icon;
              return (
                <div
                  key={`milestone-${idx}`}
                  className="relative bg-gradient-to-br from-cream-50 to-white dark:from-mountain-700 dark:to-mountain-800 rounded-2xl p-6 shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative circle */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-burgundy-100 dark:bg-burgundy-900/30 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${config.bgColor} ${config.color} mb-4`}>
                      <Icon />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-burgundy-600 dark:text-burgundy-400">
                        {event.year}
                      </span>
                      <span className="text-gold-500">★</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-mountain-600 dark:text-mountain-300 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-himalayan relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-56 h-56 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            As we continue to grow, our commitment to preserving Sherpa culture and supporting our 
            community remains stronger than ever. Join us in writing the next chapter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join-us"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-mountain-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Become a Member
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/30 hover:border-white/50"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
