import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Introduction & Mission',
  description: 'Learn about the Himalayan Sherpa Club of Sonoma, our mission to preserve Sherpa culture, and our journey from the Himalayan peaks to the vineyards of Sonoma.',
};

export default function IntroductionPage() {
  return (
    <>
      {/* Hero */}
    <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Introduction &amp; Mission
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            From the peaks of the Himalayas to the vineyards of Sonoma, discover our journey and purpose.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* AI Generated Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/logos/hsc-wine.png"
                alt="Himalayan Sherpa Community"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
                Introduction
              </h2>
              <div className="space-y-6 text-mountain-600 dark:text-mountain-300">
                <p className="text-md leading-relaxed">
                  The Himalayan Sherpa Club was established as a non-profit, non-political organization 
                  in compliance with California state laws in January 2011. Recognized as a tax-exempt 
                  charitable organization under Section 501(c)(3) of the Internal Revenue Code, the club 
                  is dedicated to fostering a united and thriving Sherpa community. Our mission is to 
                  provide a common platform for preserving and promoting the unique socio-cultural and 
                  linguistic heritage of the Sherpa people.
                </p>
                
                <p className="leading-relaxed">
                  We actively encourage participation from individuals of all ages and professional 
                  backgrounds, with a special focus on engaging younger generations in community 
                  activities. By creating opportunities for cultural exchange and knowledge-sharing, 
                  we strive to ensure that our rich traditions are passed down to future generations.
                </p>

                <p className="leading-relaxed">
                  We warmly welcome anyone who shares our vision to join us in celebrating and 
                  preserving the Sherpa heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Peaks to Vineyards - The Journey */}
      <section className="py-20 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                From the Peaks to the Vineyards
              </h2>
              <p className="text-lg text-mountain-600 dark:text-mountain-300 mt-4">
                The Journey of the Himalayan Sherpa Club
              </p>
            </div>
            
            <div className="space-y-8 text-mountain-600 dark:text-mountain-300 text-lg leading-relaxed">
              <p>
                The story of the Himalayan Sherpa Club is deeply rooted in the resilience and 
                adaptability of the Sherpa people. For generations, Sherpas lived a humble life 
                in the high Himalayas, farming potatoes, buckwheat, and turnips, and engaging 
                in trade with Tibetan merchants. However, in 1953, the historic ascent of Mt. Everest 
                by Sir Edmund Hillary and Tenzing Norgay Sherpa changed everything. The world took 
                notice of the Sherpas&apos; extraordinary mountaineering skills, and soon, the tourism 
                and climbing industry flourished in Nepal.
              </p>
              
              <p>
                With this new livelihood, the Sherpas developed strong connections with Western 
                climbers, including Americans. Over time, these relationships opened up opportunities 
                for Sherpas to move abroad. While working as a trekking guide in Nepal, Chhiring 
                Sherpa met some American friends who invited him to Sonoma in the early 1990s. A few 
                years later, Ongda Sherpa won the Diversity Visa (DV) lottery and joined Chhiring. 
                Around the same time, Nima Sherpa, a friend of Chhiring from Nepal who had been 
                living in Colorado, also moved to Sonoma. The three initially settled in Glen Ellen 
                and are considered the first Sherpas to establish roots in Sonoma. Gradually, more 
                Sherpa families joined them, establishing a growing and close-knit community in Sonoma.
              </p>

              <p>
                At first, the community was small, celebrating their traditions quietly in homes 
                and apartments. But as the years passed and more families arrived, the need for a 
                shared cultural space became clear. In 2011, with a commitment to preserving their 
                rich heritage and fostering unity, the Himalayan Sherpa Club was officially 
                established as a nonprofit organization.
              </p>

              <p>
                What started as a small gathering of families has now flourished into a vibrant 
                community of over 30 Sherpa families in Sonoma. Through cultural events, celebrations, 
                and educational initiatives, the club continues to honor the traditions of the 
                Himalayas while embracing life in their new home. The spirit of the Sherpa 
                people—resilient, welcoming, and deeply rooted in culture—lives on in Sonoma, 
                keeping the bond between the Himalayas and California as strong as ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '2011', label: 'Year Established' },
              { value: '30+', label: 'Sherpa Families' },
              { value: '1990s', label: 'First Sherpas in Sonoma' },
              { value: '501(c)(3)', label: 'Tax Exempt Status' },
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-mountain-800 rounded-xl p-6 shadow-lg">
                <p className="text-2xl md:text-3xl font-serif font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-burgundy-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold-400 font-medium mb-2 uppercase tracking-wide text-sm">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-cream-200 leading-relaxed">
              Our mission is to preserve and promote Sherpa culture while fostering a united and 
              thriving community in the North Bay Area. We are committed to celebrating our unique 
              and rich cultural heritage, ensuring its preservation for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              What We Do
            </p>
            <h2 className="section-title">Our Objectives</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Preserve Heritage',
                description: 'Provide a platform to preserve and promote Sherpa cultural and linguistic heritage.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: 'Educate Youth',
                description: 'Educate and engage younger generations in Sherpa traditions through community events.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Build Relationships',
                description: 'Foster collaboration and strengthen relationships with other communities and organizations.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Support New Arrivals',
                description: 'Support new immigrants by offering resources and networking opportunities for a smooth transition.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
                title: 'Cultural Exchange',
                description: 'Promote cultural exchange locally and globally to enhance mutual understanding and enrichment.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                ),
                title: 'Community Involvement',
                description: 'Being part of the Sonoma Community ever since its establishment, contributing to local events and initiatives.',
              },
            ].map((objective, index) => (
              <div key={index} className="bg-white dark:bg-mountain-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-mountain-950/50 transition-shadow">
                <div className="w-14 h-14 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {objective.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 mb-2">{objective.title}</h3>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                Want to Learn More?
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Explore our history, culture, and the families that built our community.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/about/history" className="btn-primary">
                Sherpa History
              </Link>
              <Link href="/about/founding-families" className="btn-secondary">
                Founding Families
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
