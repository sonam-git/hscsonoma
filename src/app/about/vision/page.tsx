import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Vision | Himalayan Sherpa Club of Sonoma',
  description: 'Our dream to build a Himalayan Community Hall in Sonoma - a space to preserve, practice, and pass down our rich cultural heritage to future generations.',
  openGraph: {
    title: 'Our Vision | Himalayan Sherpa Club of Sonoma',
    description: 'Our dream to build a Himalayan Community Hall in Sonoma - a space to preserve, practice, and pass down our rich cultural heritage to future generations.',
    type: 'website',
  },
};

export default function OurVisionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Vision
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Building a Himalayan Community Hall in Sonoma
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Main Vision Content */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Dream
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                Building a Himalayan Community Hall in Sonoma
              </h2>
            </div>
            
            <div className="space-y-8 text-mountain-600 dark:text-mountain-300 text-lg leading-relaxed">
              <p>
                The Sherpa community in Sonoma is growing steadily, with over 30 families now calling 
                this region home. As a non-profit, community-based organization, the Himalayan Sherpa 
                Club of Sonoma currently operates without an official address or office. Every event 
                and initiative is made possible through the dedication and support of our club members 
                and the surrounding community—physically, socially, and economically.
              </p>
              
              <p>
                Our long-term dream is to establish a <strong className="text-mountain-900 dark:text-cream-50">Himalayan Community Hall in Sonoma</strong>, 
                a space where we can preserve, practice, and pass down our rich cultural heritage to 
                future generations. This hall will serve as a center for cultural education, community 
                gatherings, and social events, allowing us to strengthen our identity and unity. It will 
                provide a venue to host traditional ceremonies, educational workshops, and community 
                programs—ensuring that Sherpa customs and traditions continue to thrive.
              </p>

              <p>
                To sustain the hall financially, we plan to offer the space for rent to individuals and 
                other communities for events, helping cover mortgage costs while fostering cross-cultural 
                exchange.
              </p>

              <p>
                By coming together, we can turn this vision into reality—ensuring that the Sherpa culture 
                remains alive and vibrant for generations to come. It stands as a testament to the 
                dedication and hard work of the Himalayan Sherpa Club of Sonoma, whose efforts will 
                undoubtedly benefit both the Sherpa community and the wider society for years to come. 
                We appreciate your support and generosity in making this dream possible!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Generated Image Section */}
      <section className="py-20 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/our-vision.webp"
                alt="Imaginary Himalayan Community Hall - AI Generated"
                fill
                className="object-cover"
              />
              {/* Gradient overlay at bottom for caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-center italic">
                  &quot;Imaginary Himalayan community hall – created with AI.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Hall Will Provide */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Plans
            </p>
            <h2 className="section-title">What the Community Hall Will Provide</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Cultural Education',
                description: 'A dedicated space for teaching Sherpa language, traditions, and customs to younger generations.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Community Gatherings',
                description: 'A home for Losar celebrations, festivals, and regular community meetings.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                ),
                title: 'Traditional Ceremonies',
                description: 'A proper venue for Buddhist ceremonies, prayer gatherings, and religious observances.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: 'Educational Workshops',
                description: 'Programs for cooking classes, craft workshops, and cultural learning experiences.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
                title: 'Cross-Cultural Exchange',
                description: 'A space available for rent to other communities, fostering understanding and connection.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
                title: 'Unity & Identity',
                description: 'A permanent home that strengthens our community bonds and cultural identity.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-mountain-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-mountain-950/50 transition-shadow">
                <div className="w-14 h-14 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 mb-2">{item.title}</h3>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Donate */}
      <section className="py-20 bg-burgundy-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">
              Help Us Build Our Dream
            </h2>
            <p className="text-xl text-cream-200 leading-relaxed mb-6">
              We invite donors, well-wishers, and community members to support our mission. Your 
              contributions—big or small—will help us take a crucial step toward building this 
              much-needed space for our growing Sherpa community.
            </p>
            <p className="text-lg text-cream-300 mb-10">
              We warmly welcome anyone who shares our vision to join us in celebrating and preserving 
              the Sherpa heritage.
            </p>
            <Link 
              href="/donate" 
              className="inline-flex items-center justify-center px-10 py-4 text-xl font-semibold rounded-lg bg-gold-400 text-mountain-900 hover:bg-gold-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                Learn More About Us
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Discover our mission, history, and the community we&apos;ve built together.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/about/introduction" className="btn-primary">
                Our Mission
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
