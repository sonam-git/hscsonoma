import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Event data
const eventsData: Record<string, EventData> = {
  losar: {
    slug: 'losar',
    title: 'Annual Nangbi Lhosar',
    subtitle: 'Sherpa New Year Celebration',
    date: 'February/March (Lunar Calendar)',
    image: '/images/events/annual/losar.jpg',
    category: 'Annual Event',
    categoryColor: 'gold',
    description: `To celebrate the Sherpa New Year (Lhosar), the Himalayan Sherpa Club of Sonoma hosts an annual Lhosar Party to preserve and promote Sherpa culture among younger generations. This event, which follows the Lunar Calendar, typically falls between late February and early March.`,
    content: [
      {
        title: 'About Losar',
        text: `Losar, meaning "New Year" in the Sherpa language ("Lo" for year and "Sar" for new), marks the beginning of the year for Himalayan communities that follow the Lunar Calendar. It is one of the most significant festivals for these communities, celebrated on the first day of the first lunar month, typically falling in February or March according to the Gregorian calendar.`,
      },
      {
        title: 'Types of Losar',
        text: `There are different types of Losar celebrations:\n\n**Sonam Losar** - Observed in the twelfth Tibetan month by farmers, as they become occupied with their fields by the first month of the new year.\n\n**Gyalpo Losar** - Celebrated in the first month by religious communities, officials, and businesspeople, usually in February. The first fifteen days commemorate Chötrul Düchen.`,
      },
      {
        title: 'Celebration in Sonoma',
        text: `The Himalayan Sherpa Club of Sonoma brings the community together for a festive celebration featuring traditional dances, music, food, and cultural performances. It's a time for families to gather, share stories, and pass on traditions to the younger generation. The event typically includes traditional Sherpa dress, folk songs, and the sharing of special Losar dishes.`,
      },
    ],
    highlights: [
      'Traditional Sherpa dances and music',
      'Cultural performances by youth',
      'Traditional Losar feast',
      'Prayer ceremonies',
      'Community gathering and socializing',
    ],
  },
  phangi: {
    slug: 'phangi',
    title: 'Annual Phangi Celebration',
    subtitle: 'Pre-Harvest Festival',
    date: 'Early August',
    image: '/images/events/annual/phangi-party.jpeg',
    category: 'Annual Event',
    categoryColor: 'green',
    description: `The Himalayan Sherpa Club of Sonoma hosts an annual Phangi Festival in early August to preserve and celebrate Sherpa culture. Phang-Ngi is a significant Sherpa festival that traditionally takes place before the harvest season.`,
    content: [
      {
        title: 'About Phangi',
        text: `Phang-Ngi is a significant Sherpa festival that traditionally takes place before the harvest season. In the past, Sherpa communities in the Himalayan region, primarily engaged in agriculture and farming, observed this festival as a time of celebration before becoming occupied with the harvest.`,
      },
      {
        title: 'Traditional Significance',
        text: `The festival marks a time of thanksgiving and hope for a bountiful harvest. Communities would come together to pray for good weather, healthy crops, and protection from natural disasters. It was also a time for young people to socialize and for families to strengthen bonds.`,
      },
      {
        title: 'Celebration in Sonoma',
        text: `The Himalayan Sherpa Club continues this tradition in Sonoma, bringing together community members for a day of celebration, traditional food, music, and cultural activities. The event serves as an important reminder of our agricultural heritage and the importance of community solidarity.`,
      },
    ],
    highlights: [
      'Traditional Sherpa folk dances',
      'Harvest-themed decorations',
      'Community picnic and feast',
      'Children\'s cultural activities',
      'Traditional games and competitions',
    ],
  },
  'himalayan-cup': {
    slug: 'himalayan-cup',
    title: 'Himalayan Cup Soccer Tournament',
    subtitle: 'Annual Soccer Championship',
    date: 'Spring / Late Winter',
    image: '/images/events/annual/himalayan cup.jpeg',
    category: 'Annual Event',
    categoryColor: 'blue',
    description: `The Himalayan Sherpa Club hosts the Annual Labor Day Soccer Tournament, a two-day event that brings together soccer teams from both within and outside the state.`,
    content: [
      {
        title: 'About the Tournament',
        text: `The Himalayan Cup is a prestigious soccer tournament organized by the Himalayan Sherpa Club of Sonoma. Originally held during Labor Day weekend, the tournament has been rescheduled to spring or late winter since 2023 to ensure player safety and prevent heat-related incidents due to rising temperatures caused by climate change.`,
      },
      {
        title: 'Tournament Format',
        text: `The tournament brings together soccer teams from across California and beyond, featuring competitive matches over two exciting days. Teams compete for the coveted Himalayan Cup trophy, with categories for different age groups including youth and adult divisions.`,
      },
      {
        title: 'Community Spirit',
        text: `Beyond the competition, the Himalayan Cup serves as a gathering point for Himalayan communities from across the region. Spectators enjoy food vendors, cultural displays, and the opportunity to connect with friends and family from other cities.`,
      },
    ],
    highlights: [
      'Teams from across California and beyond',
      'Two-day competitive tournament',
      'Youth and adult divisions',
      'Food vendors and cultural displays',
      'Award ceremony and trophy presentation',
    ],
    winners: [
      { year: 2023, winner: 'Creative FC', runnerUp: 'Aviyan Bay Area' },
      { year: 2022, winner: 'Aviyan Bay Area', runnerUp: 'Himalayan Sonoma FC' },
      { year: 2021, winner: 'Bhutanese Youth Sports Center', runnerUp: 'Creative Nepal Youth Center' },
      { year: 2020, winner: 'Cancelled due to Covid-19', runnerUp: null },
      { year: 2019, winner: 'East Bay United', runnerUp: null },
      { year: 2018, winner: 'Himalayan Sonoma FC', runnerUp: null },
      { year: 2017, winner: 'East Bay United', runnerUp: 'Himalayan Sonoma FC' },
      { year: 2016, winner: 'East Bay United', runnerUp: null },
      { year: 2015, winner: 'Sunnyvale Football Force', runnerUp: null },
    ],
  },
};

interface EventData {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  category: string;
  categoryColor: string;
  description: string;
  content: { title: string; text: string }[];
  highlights: string[];
  winners?: { year: number; winner: string; runnerUp: string | null }[];
}

// Generate static params for all events
export function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({
    slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData[slug];
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | Himalayan Sherpa Club of Sonoma`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData[slug];

  if (!event) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    gold: 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  };

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950 font-georgia">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${categoryColors[event.categoryColor]}`}>
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              {event.title}
            </h1>
            <p className="text-xl text-cream-200 mb-2">{event.subtitle}</p>
            <p className="text-gold-400 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.date}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
             <Link 
              href="/events" 
              className="inline-flex items-center gap-2 ml-20 text-gray-700 dark:text-gray-50 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </Link>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Content Sections */}
              {event.content.map((section, index) => (
                <div key={index} className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-mountain-600 dark:text-mountain-300 leading-relaxed whitespace-pre-line font-georgia">
                    {section.text}
                  </div>
                </div>
              ))}

              {/* Winners Table (for Himalayan Cup) */}
              {event.winners && (
                <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
                    🏆 Past Winners
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cream-200 dark:border-mountain-700">
                          <th className="text-left py-3 px-4 font-semibold text-mountain-900 dark:text-cream-50">Year</th>
                          <th className="text-left py-3 px-4 font-semibold text-mountain-900 dark:text-cream-50">Winner</th>
                          <th className="text-left py-3 px-4 font-semibold text-mountain-900 dark:text-cream-50">Runner Up</th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.winners.map((record) => (
                          <tr key={record.year} className="border-b border-cream-100 dark:border-mountain-700/50">
                            <td className="py-3 px-4 text-mountain-700 dark:text-mountain-300 font-medium">{record.year}</td>
                            <td className="py-3 px-4 text-mountain-600 dark:text-mountain-400">
                              {record.winner === 'Cancelled due to Covid-19' ? (
                                <span className="text-red-500">{record.winner}</span>
                              ) : (
                                <span className="flex items-center gap-2">
                                  <span className="text-gold-500">🥇</span> {record.winner}
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-mountain-600 dark:text-mountain-400">
                              {record.runnerUp ? (
                                <span className="flex items-center gap-2">
                                  <span className="text-gray-400">🥈</span> {record.runnerUp}
                                </span>
                              ) : (
                                <span className="text-mountain-400">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Highlights */}
              <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-mountain-900 dark:text-cream-50 mb-6">
                  Event Highlights
                </h3>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">
                        ✓
                      </span>
                      <span className="text-mountain-600 dark:text-mountain-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Join Us!</h3>
                <p className="text-burgundy-100 mb-6">
                  Want to participate in our next {event.title}? Contact us to learn more about upcoming dates and how to get involved.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-burgundy-800 px-6 py-3 rounded-xl font-semibold hover:bg-cream-100 transition-colors w-full justify-center"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Back to Events */}
              <Link
                href="/events"
                className="flex items-center justify-center gap-2 bg-white dark:bg-mountain-800 text-mountain-700 dark:text-mountain-300 px-6 py-4 rounded-xl font-medium hover:bg-cream-100 dark:hover:bg-mountain-700 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
