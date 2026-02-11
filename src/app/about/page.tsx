import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the Himalayan Sherpa Club of Sonoma - our mission, history, culture, and community.',
};

const aboutLinks = [
  {
    title: 'Introduction & Mission',
    description: 'Learn about our organization, our journey from the Himalayas to Sonoma, and our mission to preserve Sherpa culture.',
    href: '/about/introduction',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    title: 'Sherpa History',
    description: 'Discover the rich history of the Sherpa people, from their origins in Tibet to their legacy in mountaineering.',
    href: '/about/history',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: 'Sherpa Culture',
    description: 'Explore Sherpa traditions, religious practices, language, and the unique aspects of our cultural heritage.',
    href: '/about/culture',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Founding Families',
    description: 'Meet the pioneer families who established the Sherpa community in Sonoma Valley.',
    href: '/founding-families',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
tr      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-wine">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Discover the story, culture, and people behind the Himalayan Sherpa Club of Sonoma.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white dark:bg-mountain-800 rounded-xl p-8 shadow-lg dark:shadow-mountain-950/50 hover:shadow-xl dark:hover:shadow-mountain-950/70 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-burgundy-200 dark:group-hover:bg-burgundy-900/70 transition-colors">
                  <svg className="w-8 h-8 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {link.icon}
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors">
                  {link.title}
                </h2>
                <p className="text-mountain-600 dark:text-mountain-300 mb-4">
                  {link.description}
                </p>
                <span className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '2011', label: 'Year Established' },
              { value: '30+', label: 'Sherpa Families' },
              { value: '501(c)(3)', label: 'Tax Exempt' },
              { value: '20+', label: 'Children Born Here' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-burgundy-700 dark:text-burgundy-400 mb-2">{stat.value}</p>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
