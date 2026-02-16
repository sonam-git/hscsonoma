'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TabType = 'annual' | 'signature' | 'past' | 'upcoming';

// Type for upcoming events from Storyblok
interface UpcomingEvent {
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

// SVG Icon Components for tabs
const AnnualIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

const SignatureIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
    />
  </svg>
);

const PastIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const UpcomingIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
    />
  </svg>
);

// Himalayan Cup Winners
const himalayanCupWinners = [
  { year: 2023, winner: 'Creative Nepal Youth FC', runnerUp: 'Aviyan Bay Area' },
  { year: 2022, winner: 'Aviyan Bay Area', runnerUp: 'Himalayan Sonoma FC' },
  { year: 2021, winner: 'Bhutanese Youth Sports Center', runnerUp: 'Creative Nepal Youth FC' },
  { year: 2020, winner: 'Cancelled due to Covid-19', runnerUp: null },
  { year: 2019, winner: 'East Bay United', runnerUp: 'Bay Area Tibetan FC' },
  { year: 2018, winner: 'Himalayan Sonoma FC', runnerUp: 'Creative Nepal Youth FC' },
  { year: 2017, winner: 'East Bay United', runnerUp: 'Himalayan Sonoma FC' },
  { year: 2016, winner: 'SF Ekta FC', runnerUp: 'East Bay United' },
  { year: 2015, winner: 'Sunnyvale Football Force', runnerUp: 'Lungta FC' },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('annual');
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch upcoming events from Storyblok
  useEffect(() => {
    async function fetchUpcomingEvents() {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setUpcomingEvents(data.events || []);
        }
      } catch (error) {
        console.error('Failed to fetch upcoming events:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUpcomingEvents();
  }, []);

  const tabs = [
    { id: 'annual' as TabType, label: 'Annual Events', icon: AnnualIcon },
    { id: 'signature' as TabType, label: 'Signature Events', icon: SignatureIcon },
    { id: 'past' as TabType, label: 'Past Events', icon: PastIcon },
    { id: 'upcoming' as TabType, label: 'Upcoming', icon: UpcomingIcon },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ལས་འགན་མཛད་རིམ་དང་དགའ་སྟོན།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Events & Celebrations
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Join us in celebrating Sherpa heritage through cultural festivals, community gatherings, and special events
          </p>
        </div>
        
        {/* Horizontal Submenu - Same style as header */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="container-custom">
              <div className="flex items-center justify-center gap-1 md:gap-2 py-3 overflow-x-auto">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 md:px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab.id 
                          ? 'text-burgundy-900 bg-white shadow-md scale-105'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                      }`}
                    >
                      <IconComponent />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          {/* Tab Content */}
          <div className="min-h-[600px]">
            
            {/* Annual Events */}
            {activeTab === 'annual' && (
              <div className="animate-fade-in space-y-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Annual Events
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    Recurring celebrations that bring our community together every year
                  </p>
                </div>

                {/* Nangbi Lhosar */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[300px] bg-mountain-200 dark:bg-mountain-700">
                      <Image
                        src="/images/events/annual/losar.jpg"
                        alt="Annual Nangbi Lhosar Celebration"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <span className="inline-block px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium mb-4">
                        February/March
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Annual Nangbi Lhosar
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                        To celebrate the Sherpa New Year (Lhosar), the Himalayan Sherpa Club of Sonoma hosts an annual 
                        Lhosar Party to preserve and promote Sherpa culture among younger generations. This event, which 
                        follows the Lunar Calendar, typically falls between late February and early March.
                      </p>
                      <Link href="/events/losar" className="text-burgundy-600 dark:text-burgundy-400 font-medium hover:underline inline-flex items-center gap-2">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Phangi Celebration */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-10 order-2 md:order-1">
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-4">
                        Early August
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Annual Phangi Celebration
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                        The Himalayan Sherpa Club of Sonoma hosts an annual Phangi Festival in early August to preserve 
                        and celebrate Sherpa culture. Phang-Ngi is a significant Sherpa festival that traditionally takes 
                        place before the harvest season. In the past, Sherpa communities in the Himalayan region, primarily 
                        engaged in agriculture and farming, observed this festival as a time of celebration before becoming 
                        occupied with the harvest.
                      </p>
                      <Link href="/events/phangi" className="text-burgundy-600 dark:text-burgundy-400 font-medium hover:underline inline-flex items-center gap-2">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <div className="relative h-64 md:h-auto min-h-[300px] bg-mountain-200 dark:bg-mountain-700 order-1 md:order-2">
                      <Image
                        src="/images/events/annual/phangi-party.jpeg"
                        alt="Annual Phangi Celebration"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Labor Day Soccer Tournament */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[300px] bg-mountain-200 dark:bg-mountain-700">
                      <Image
                        src="/images/events/annual/himalayan cup.jpeg"
                        alt="Himalayan Cup Soccer Tournament"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm text-center">Aviyan Bay Area (Winner of Himalayan Cup 2022)</p>
                      </div>
                    </div>
                    <div className="p-8 md:p-10">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                        Spring / Late Winter
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Himalayan Cup Soccer Tournament
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                        The Himalayan Sherpa Club hosts the Annual Labor Day Soccer Tournament, a two-day event that brings 
                        together soccer teams from both within and outside the state. Due to rising temperatures caused by 
                        climate change, the tournament has been rescheduled to spring or late winter since 2023 to ensure 
                        player safety and prevent heat-related incidents.
                      </p>
                      <Link href="/events/himalayan-cup" className="text-burgundy-600 dark:text-burgundy-400 font-medium hover:underline inline-flex items-center gap-2">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Interaction Event */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-10 order-2 md:order-1">
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                        Various Dates
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Interaction Events
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                        The Himalayan Sherpa Club of Sonoma warmly welcomes Nepali celebrities visiting Sonoma for concerts 
                        or movie premieres. The community actively participates in these events, showing support for individuals 
                        promoting Sherpa and Nepali culture abroad. Such events also provide younger generations with the 
                        opportunity to connect with their cultural roots and engage with renowned artists from Nepal.
                      </p>
                    </div>
                    <div className="relative h-64 md:h-auto min-h-[300px] bg-mountain-200 dark:bg-mountain-700 order-1 md:order-2">
                      <Image
                        src="/images/events/past/musical-concert.jpeg"
                        alt="Interaction Event with Nepali Celebrities"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Signature Events */}
            {activeTab === 'signature' && (
              <div className="animate-fade-in space-y-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Signature Events
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    Our most celebrated traditions that define Sherpa culture
                  </p>
                </div>

                {/* Losar Section */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src="/images/events/signature/Lhosar-Party-.jpeg"
                      alt="Losar Celebration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                        Losar (Sherpa New Year)
                      </h3>
                      <p className="text-gold-400 font-medium">The Lunar New Year</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                      Losar, meaning &quot;New Year&quot; in the Sherpa language (&quot;Lo&quot; for year and &quot;Sar&quot; for new), marks the 
                      beginning of the year for Himalayan communities that follow the Lunar Calendar. It is one of the most 
                      significant festivals for these communities, celebrated on the first day of the first lunar month, 
                      typically falling in February or March according to the Gregorian calendar.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <div className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 mb-3">Sonam Losar</h4>
                        <p className="text-mountain-600 dark:text-mountain-300 text-sm">
                          Observed in the twelfth Tibetan month by farmers, as they become occupied with their fields 
                          by the first month of the new year.
                        </p>
                      </div>
                      <div className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 mb-3">Gyalpo Losar</h4>
                        <p className="text-mountain-600 dark:text-mountain-300 text-sm">
                          Celebrated in the first month by religious communities, officials, and businesspeople, usually 
                          in February. The first fifteen days commemorate Chötrul Düchen.
                        </p>
                      </div>
                    </div>

                    <div className="bg-burgundy-50 dark:bg-burgundy-900/30 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold text-burgundy-800 dark:text-burgundy-300 mb-4">Monthly Observances</h4>
                      <ul className="space-y-2 text-mountain-600 dark:text-mountain-300 text-sm">
                        <li><strong>8th day:</strong> Sangye Menla (Medicine Buddha) is honored</li>
                        <li><strong>10th day:</strong> Tse Chu, marking Guru Rinpoche&apos;s return to earth</li>
                        <li><strong>15th day:</strong> Opame, the Buddha of Infinite Light, is celebrated</li>
                        <li><strong>30th day:</strong> Recognized as an auspicious day for the Buddha</li>
                      </ul>
                    </div>

                    <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-6 my-8">
                      <h4 className="text-lg font-semibold text-gold-800 dark:text-gold-300 mb-4">How We Celebrate Losar in Sonoma</h4>
                      <p className="text-mountain-600 dark:text-mountain-300 text-sm leading-relaxed">
                        On the first day of Losar, families gather with traditional customs. The day begins with worship, 
                        offering water, tea, Changkol (a special Sherpa beverage), Khapse (pastries), Daysel, and other 
                        symbolic items. Homes are decorated with prayer flags and traditional ornaments, and families enjoy 
                        a festive feast. The Himalayan Sherpa Club (HSC) organizes a grand Losar celebration filled with 
                        religious rituals, feasting, cultural performances, traditional music, and sharing of special Sherpa 
                        and Nepali dishes, continuing until midnight.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phang-Ngi Section */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src="/images/events/signature/phang-ngi.jpg"
                      alt="Phang-Ngi Celebration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                        Phang-Ngi Celebration
                      </h3>
                      <p className="text-gold-400 font-medium">Pre-Harvest Festival</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6 text-lg">
                      The Himalayan Sherpa Club of Sonoma hosts the annual Phang-Ngi Festival in early August to preserve 
                      and celebrate Sherpa culture. Phang-Ngi is a significant festival that traditionally takes place 
                      before the harvest season. Historically, Sherpa communities, primarily engaged in agriculture and 
                      farming, observed this festival as a time of celebration before the busy harvest period.
                    </p>
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed text-lg">
                      To ensure broad community participation, HSC selects a convenient date and secures a venue in Sonoma. 
                      The event is a vibrant blend of religious rituals, feasting, cultural performances, traditional music, 
                      and the sharing of authentic Sherpa and Nepali cuisine, including Khapse pastries and traditional drinks. 
                      This one-day celebration lasts until midnight, providing an opportunity for both young and old generations 
                      to connect, share traditions, learn from elders, and take a break from their busy lives.
                    </p>
                  </div>
                </div>

                {/* Himalayan Cup Section */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src="/images/events/signature/labor-day-flex.jpg"
                      alt="Himalayan Cup Soccer Tournament"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                        Himalayan Cup
                      </h3>
                      <p className="text-gold-400 font-medium">Annual Soccer Tournament</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed text-lg mb-6">
                      The Himalayan Sherpa Club (HSC) has been hosting the Annual Labor Day Soccer Tournament since 2015, 
                      bringing together teams from both within and outside the state. Traditionally held over two days—Sunday 
                      and Monday of Labor Day weekend—the tournament has become a highly anticipated event in the community. 
                      Winning teams receive trophies and attractive prizes, adding to the competitive spirit.
                    </p>
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed text-lg">
                      Due to rising temperatures caused by climate change, the tournament has been rescheduled to spring or 
                      late winter since 2023. Additionally, to encourage participation from older players, HSC introduced a 
                      35+ category in 2022, specifically designed for veteran players.
                    </p>
                  </div>

                  {/* Winners Table */}
                  <div className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-6 text-center">
                      Tournament History
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-mountain-200 dark:border-mountain-600">
                            <th className="py-3 px-4 text-left text-sm font-semibold text-mountain-900 dark:text-cream-50">Year</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-mountain-900 dark:text-cream-50">Winner 🥇</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-mountain-900 dark:text-cream-50">Runner Up 🥈</th>
                          </tr>
                        </thead>
                        <tbody>
                          {himalayanCupWinners.map((cup, idx) => (
                            <tr key={idx} className="border-b border-mountain-100 dark:border-mountain-600/50 last:border-0">
                              <td className="py-3 px-4 text-mountain-600 dark:text-mountain-300 font-medium">{cup.year}</td>
                              <td className={`py-3 px-4 ${cup.year === 2020 ? 'text-mountain-400 dark:text-mountain-500 italic' : 'text-mountain-900 dark:text-cream-50 font-medium'}`}>
                                {cup.winner}
                              </td>
                              <td className="py-3 px-4 text-mountain-500 dark:text-mountain-400">
                                {cup.runnerUp || '—'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Past Events */}
            {activeTab === 'past' && (
              <div className="animate-fade-in space-y-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Past Events & Initiatives
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    A look back at the meaningful events and initiatives our community has organized
                  </p>
                </div>

                {/* Disaster Relief 2015 */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[280px]">
                      <Image
                        src="/images/events/past/earthquake-victims.jpeg"
                        alt="Earthquake Relief Fundraiser 2015"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🆘</span>
                        </div>
                        <span className="text-sm text-red-600 dark:text-red-400 font-medium">May 2015</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Disaster Relief: Earthquake Victims in Nepal
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-4">
                        The Himalayan Sherpa Club of Sonoma organized a fundraising event, &quot;Raising Funds for Earthquake 
                        Victims in Nepal,&quot; at Ramekins Culinary School. The event brought together local chefs, restaurants, 
                        and wineries for a special evening featuring wine, dinner, and an auction.
                      </p>
                      <p className="text-burgundy-600 dark:text-burgundy-400 font-medium">
                        100% of the funds raised were directly provided to victims across various regions of Nepal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disaster Relief 2014 */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🏔️</span>
                        </div>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">May 2014</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Disaster Relief: Everest Avalanche
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-4">
                        The Himalayan Sherpa Club of Sonoma organized a fundraising event, &quot;Raising Funds for Families 
                        Affected by the Everest Avalanche,&quot; at MacArthur Place. The event aimed to support the families 
                        in Nepal who lost loved ones in the tragic avalanche on Mount Everest.
                      </p>
                      <p className="text-mountain-500 dark:text-mountain-400 text-sm italic">
                        As a gesture of community support, Sonoma Taxi provided complimentary rides home for local attendees.
                      </p>
                    </div>
                    <div className="relative h-64 md:h-auto min-h-[280px] order-1 md:order-2">
                      <Image
                        src="/images/events/past/everest-avalanche.jpg"
                        alt="Everest Avalanche Relief Fundraiser 2014"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Summit Legends */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl border border-gold-200 dark:border-gold-800/30">
                  <div className="relative h-72 md:h-96 w-full">
                    <Image
                      src="/images/events/past/summit-legend.jpg"
                      alt="Summit Legends Event"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                      <span className="text-sm text-gold-400 font-medium">October 23, 2023</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">
                        Summit Legends: Honoring Record-Breaking Sherpas of Sonoma
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                      The Himalayan Sherpa Club proudly hosted this special event at the Veterans Memorial Hall in Sonoma, 
                      celebrating three extraordinary Sherpa mountaineers whose remarkable achievements have set world records 
                      and earned them a place in the Guinness Book of World Records.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-mountain-700 rounded-xl p-6 text-center">
                      <div className="w-20 h-20 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🥇</span>
                      </div>
                      <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">Kami Rita Sherpa</h4>
                      <p className="text-sm text-mountain-500 dark:text-mountain-400">Residing in Santa Rosa, CA</p>
                      <p className="text-sm text-mountain-600 dark:text-mountain-300 mt-2">
                        World record holder for most Everest summits (30 times as of May 2024)
                      </p>
                    </div>
                    <div className="bg-white dark:bg-mountain-700 rounded-xl p-6 text-center">
                      <div className="w-20 h-20 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🥇</span>
                      </div>
                      <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">Ngima Nuru Sherpa</h4>
                      <p className="text-sm text-mountain-500 dark:text-mountain-400">Youngest Multi-Summit Record</p>
                      <p className="text-sm text-mountain-600 dark:text-mountain-300 mt-2">
                        Youngest climber to summit Mount Everest 22 times
                      </p>
                    </div>
                    <div className="bg-white dark:bg-mountain-700 rounded-xl p-6 text-center">
                      <div className="w-20 h-20 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🥇</span>
                      </div>
                      <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">Ang D. Sherpa</h4>
                      <p className="text-sm text-mountain-500 dark:text-mountain-400">Residing in Sonoma, CA</p>
                      <p className="text-sm text-mountain-600 dark:text-mountain-300 mt-2">
                        Summited K2 with his three brothers—most siblings to summit K2
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-mountain-700/50 rounded-xl p-6">
                    <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-4">The Event Featured:</h4>
                    <ul className="space-y-2 text-mountain-600 dark:text-mountain-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        Cultural performances showcasing the rich heritage of the Sherpa community
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        A Q&A session with the honored legends
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        Authentic Nepali cuisine including Dal Bhat, Sherpa tea, and traditional delicacies
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                {/* Music & Dinner */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto min-h-[280px]">
                      <Image
                        src="/images/events/past/musical-concert.jpeg"
                        alt="Musical Concert and Dinner Party"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🎵</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                          Musical Concerts & Dinner Parties
                        </h3>
                      </div>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed">
                        The Himalayan Sherpa Club has hosted numerous interaction dinners with notable celebrities from Nepal, 
                        providing opportunities for the community to engage with influential figures. Additionally, the club has 
                        organized dozens of musical events, inviting various Nepali artists to perform. These events not only 
                        promote Nepali and Sherpa music abroad but also support and uplift artists from Nepal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Labor Day Volleyball */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🏐</span>
                        </div>
                        <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">2011 - 2015</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                        Labor Day Volleyball Tournament
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed">
                        The Himalayan Sherpa Club of Sonoma organized an annual Labor Day Volleyball Tournament from 2011 to 2015, 
                        held during the Labor Day weekend. This event brought the community together for friendly competition and 
                        celebration, fostering camaraderie and sportsmanship among participants. Following the daytime tournament 
                        and picnic, attendees gathered at Taste of the Himalayas restaurant for an evening of dining and dancing.
                      </p>
                    </div>
                    <div className="relative h-64 md:h-auto min-h-[280px] order-1 md:order-2">
                      <Image
                        src="/images/events/past/HSC-Labor-Day-Volleyball-2012.jpeg"
                        alt="Labor Day Volleyball Tournament 2012"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Chotrul Monlam */}
                <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🙏</span>
                    </div>
                    <div>
                      <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">March 28-30, 2025</span>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                        Contribution to Chotrul Monlam Festival 2025
                      </h3>
                    </div>
                  </div>
                  <p className="text-mountain-600 dark:text-mountain-300 leading-relaxed mb-4">
                    The members of Himalayan Sherpa Club of Sonoma (HSC) proudly contributed to the Chotrul Monlam Festival 2025, 
                    held at the Richmond Civic Center Plaza in San Francisco. Organized by the U.S. Chotrul Monlam Association, 
                    this sacred gathering welcomed all Dharma practitioners for three auspicious days of Great Cho Trul Monlam 
                    prayers and a special celebration honoring His Holiness the Dalai Lama&apos;s birthday.
                  </p>
                  <p className="text-burgundy-600 dark:text-burgundy-400 font-medium">
                    HSC members graciously sponsored the full-day program (Ngi-khak) on March 30th, providing breakfast, 
                    lunch, and dinner for all attendees.
                  </p>
                </div>
              </div>
            )}

            {/* Upcoming Events */}
            {activeTab === 'upcoming' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Upcoming Events
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    Mark your calendars for these upcoming community gatherings
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  {isLoading ? (
                    /* Loading State */
                    <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 md:p-12 shadow-lg text-center">
                      <div className="animate-pulse">
                        <div className="w-24 h-24 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full mx-auto mb-6"></div>
                        <div className="h-6 bg-mountain-200 dark:bg-mountain-700 rounded w-48 mx-auto mb-4"></div>
                        <div className="h-4 bg-mountain-100 dark:bg-mountain-600 rounded w-64 mx-auto"></div>
                      </div>
                    </div>
                  ) : upcomingEvents.length > 0 ? (
                    /* Display Storyblok Events */
                    <div className="grid md:grid-cols-2 gap-6">
                      {upcomingEvents.map((event) => {
                        const eventDate = new Date(event.date);
                        return (
                          <div key={event.id} className="bg-white dark:bg-mountain-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            {event.image && !event.image.includes('placeholder') && (
                              <div className="relative h-48 w-full">
                                <Image
                                  src={event.image}
                                  alt={event.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="p-6">
                              <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-16 text-center">
                                  <div className="bg-burgundy-100 dark:bg-burgundy-900/50 rounded-lg py-2">
                                    <span className="block text-2xl font-bold text-burgundy-700 dark:text-burgundy-400">
                                      {eventDate.getDate()}
                                    </span>
                                    <span className="block text-xs text-burgundy-600 dark:text-burgundy-500 uppercase">
                                      {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                                    </span>
                                    <span className="block text-xs text-burgundy-500 dark:text-burgundy-600">
                                      {eventDate.getFullYear()}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                                    {event.title}
                                  </h3>
                                  <div className="flex flex-wrap gap-2 text-sm text-mountain-500 dark:text-mountain-400">
                                    {event.time && (
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {event.time}
                                      </span>
                                    )}
                                    {event.location && (
                                      <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <p className="text-mountain-600 dark:text-mountain-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                {event.description}
                              </p>
                              {event.registrationUrl && (
                                <Link
                                  href={event.registrationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors text-sm"
                                >
                                  Register Now
                                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* No Events - Stay Tuned UI */
                    <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 md:p-12 shadow-lg text-center">
                      <div className="w-24 h-24 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-mountain-900 dark:text-cream-50 mb-4">
                        Stay Tuned!
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto text-lg leading-relaxed mb-8">
                        We are currently planning exciting events for the community. Check back soon for updates on 
                        upcoming celebrations, festivals, and gatherings.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                          Contact Us for Updates
                        </Link>
                        <Link href="/join-us" className="btn-secondary">
                          Join Our Community
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Newsletter Signup */}
                  <div className="mt-12 bg-burgundy-900 rounded-2xl p-8 text-center">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Never Miss an Event
                    </h4>
                    <p className="text-cream-200 mb-6">
                      Subscribe to our newsletter to receive updates about upcoming events and community news.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
                      />
                      <button className="px-6 py-3 bg-gold-400 text-mountain-900 font-semibold rounded-lg hover:bg-gold-500 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                Want to Host or Sponsor an Event?
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
    </main>
  );
}
