import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import HeroPhotoReel from '@/components/HeroPhotoReel';
import ConnectWithUs from '@/components/ConnectWithUs';
import styles from '@/components/hero3d.module.css';
import { getHomeHero, getHomeNews, getHomeEvents, getHomeGallery } from '@/lib/storyblok-home';

export const metadata: Metadata = {
  title: 'Home | Himalayan Sherpa Club of Sonoma',
  description: 'The Himalayan Sherpa Club of Sonoma is a 501(c)(3) non-profit dedicated to preserving and promoting Sherpa culture, heritage, and values in the North Bay Area of California.',
};

// Revalidate every 30 seconds for fresher Storyblok content
export const revalidate = 30;

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch data from Storyblok (with fallbacks to static content)
  const [heroData, latestNewsData, eventsData, galleryData] = await Promise.all([
    getHomeHero(),
    getHomeNews(3),
    getHomeEvents(4),
    getHomeGallery(8),
  ]);

  // Hardcoded featured news (media coverage)
  const featuredNews = [
    {
      id: '1',
      title: 'Raising Funds for Quake Victims',
      excerpt: 'Our community came together to support earthquake relief efforts in Nepal, demonstrating the strong bonds that connect us across continents.',
      image: '/images/news/fundraising.jpg',
      category: 'Community',
      date: '2024-04-15',
      slug: 'raising-funds-for-quake-victims',
    },
    {
      id: '2',
      title: 'Sonoma Sherpas Plan Benefit',
      excerpt: 'Local Sherpa community organizes benefit event to support cultural preservation initiatives and community programs.',
      image: '/images/news/benefit.jpg',
      category: 'Events',
      date: '2024-03-20',
      slug: 'sonoma-sherpas-plan-benefit',
    },
    {
      id: '3',
      title: 'Sonoma Man Summits K2',
      excerpt: "A member of our community achieves the remarkable feat of summiting K2, the world's most dangerous mountain.",
      image: '/images/news/k2-summit.jpg',
      category: 'Achievement',
      date: '2024-02-10',
      slug: 'sonoma-man-summits-k2',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Image - Responsive for desktop/mobile */}
        <div className={`absolute inset-0 w-full h-full ${styles.heroBg}`}>  
          {/* Desktop Image - shown on large screens */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={heroData.backgroundImage}
              alt={heroData.backgroundAlt}
              fill
              priority
              className="object-contain object-center select-none pointer-events-none"
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          
          {/* Mobile Image - shown on small screens */}
          <div className="block md:hidden absolute inset-0">
            {heroData.isFromStoryblok ? (
              /* Storyblok image: use same image with 16:9 aspect ratio / best-fit CSS */
              <Image
                src={heroData.backgroundImage}
                alt={heroData.backgroundAlt}
                fill
                priority
                className="object-cover object-center select-none pointer-events-none"
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            ) : (
              /* Fallback: use dedicated mobile tall image */
              <Image
                src={heroData.mobileImage || '/images/hero/hero-tall.png'}
                alt={heroData.mobileAlt || 'Himalayan Sherpa Club - Mobile'}
                fill
                priority
                className="object-cover object-center select-none pointer-events-none"
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            )}
          </div>
          
          {/* Dark Blue Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/50 to-mountain-900/60" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          {/* Tibetan Text */}
          <p className="font-tibetan text-2xl md:text-3xl lg:text-4xl text-gold-400 mb-4 animate-fade-in">
            ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
          </p>

          {/* Club Name */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 text-shadow animate-slide-up ">
            Himalayan Sherpa Club 
            <span className=" text-gold-300 inline"> of Sonoma</span>
          </h1>

          {/* Tagline */}
        <p className="satisfy-regular text-xl md:text-2xl lg:text-3xl text-cream-100 mb-10 animate-fade-in">
            "Preserving Heritage, Uniting Community."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in  ">
            <Link href="/join-us" className="btn-primary text-lg px-8 py-4">
              Become a Member
            </Link>
            <Link href="/donate" className="btn-gold text-lg px-8 py-4">
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mountain Silhouette Bottom (Zig-Zag Border) */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              className="fill-cream-50 dark:fill-mountain-900"
              d="M0,120 L0,80 L120,60 L240,90 L360,40 L480,70 L600,30 L720,80 L840,50 L960,90 L1080,35 L1200,75 L1320,55 L1440,85 L1440,120 Z"
            />
          </svg>
        </div>

        {/* 3D Photo Reel at Bottom */}
        <HeroPhotoReel />
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hscmember.jpg"
                  alt="Sherpa Community in Sonoma"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-mountain-800 rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
                <p className="text-burgundy-700 dark:text-burgundy-400 font-bold text-3xl">2011</p>
                <p className="text-mountain-600 dark:text-mountain-300">Year Established</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                About HSC
              </p>
              <h2 className="section-title">
                From the Peaks to the Vineyards
              </h2>
              <p className="text-md text-mountain-600 dark:text-mountain-300 mb-6 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                The Himalayan Sherpa Club of Sonoma is a non-profit, non-political organization, 
                officially established in January 2011 under California state law. We are recognized 
                as a 501(c)(3) tax-exempt charitable organization by the IRS.
              </p>
              <p className="text-md text-mountain-600 dark:text-mountain-300 mb-8 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                Our mission is to preserve and promote Sherpa culture, heritage, and values. 
                We are deeply committed to fostering a strong, united, and thriving Sherpa 
                community in the North Bay Area of California.
              </p>
              <Link href="/about/introduction" className="btn-secondary">
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/logos/hsc-wine.png"
            alt="Wine Country Background"
            fill
            className="object-content"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-mountain-900/95 dark:via-mountain-800/90 dark:to-mountain-900/95" />
        </div>

        <div className="relative container-custom">
          <div className="text-center mb-16">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Purpose
            </p>
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Culture */}
            <div className="bg-white/80 dark:bg-mountain-800/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50">
              <div className="w-20 h-20 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">Preserve Culture</h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Protecting and promoting Sherpa cultural and linguistic heritage for future generations.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white/80 dark:bg-mountain-800/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50">
              <div className="w-20 h-20 bg-forest-100 dark:bg-forest-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-forest-700 dark:text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">Unite Community</h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Building strong bonds and supporting one another as we thrive in our new home.
              </p>
            </div>

            {/* Future */}
            <div className="bg-white/80 dark:bg-mountain-800/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50">
              <div className="w-20 h-20 bg-gold-100 dark:bg-gold-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold-700 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">Inspire Youth</h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Engaging younger generations in Sherpa traditions through community events and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section (Hardcoded Media Coverage) */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                What The Media Says
              </p>
              <h2 className="section-title">Featured Stories</h2>
            </div>
            <Link href="/news" className="btn-secondary mt-4 md:mt-0">
              View All News
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <article key={news.id} className="card card-hover group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <time className="text-sm text-mountain-500 dark:text-mountain-400 mb-2 block">
                    {new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors line-clamp-2 font-[Georgia,'Times_New_Roman',Times,serif]">
                    {news.title}
                  </h3>
                  <p className="text-mountain-600 dark:text-mountain-300 line-clamp-3 mb-4 font-[Georgia,'Times_New_Roman',Times,serif]">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/news/${news.slug}`}
                    className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors group/link"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News from Storyblok */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Stay Updated
            </p>
            <h2 className="section-title">Latest News & Announcements</h2>
          </div>

          {latestNewsData && latestNewsData.length > 0 && latestNewsData.some(news => news.title) ? (
            <div className={`grid gap-8 ${
              latestNewsData.filter(news => news.title).length === 1 
                ? 'max-w-md mx-auto' 
                : latestNewsData.filter(news => news.title).length === 2 
                  ? 'md:grid-cols-2 max-w-3xl mx-auto' 
                  : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {latestNewsData.filter(news => news.title).map((news) => (
                <article 
                  key={news.id} 
                  className="group bg-cream-50 dark:bg-mountain-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image */}
                  {news.image && !news.image.includes('placeholder') ? (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full shadow-lg">
                        {news.category}
                      </span>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-burgundy-100 to-burgundy-200 dark:from-burgundy-900/50 dark:to-mountain-600 flex items-center justify-center">
                      <svg className="w-16 h-16 text-burgundy-300 dark:text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-burgundy-700 text-white text-xs font-medium rounded-full shadow-lg">
                        {news.category}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {news.date && (
                      <time className="text-xs text-mountain-500 dark:text-mountain-400 flex items-center gap-1 mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    )}
                    
                    <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-3 line-clamp-2 group-hover:text-burgundy-700 dark:group-hover:text-burgundy-400 transition-colors font-[Georgia,'Times_New_Roman',Times,serif]">
                      {news.title}
                    </h3>
                    
                    <p className="text-mountain-600 dark:text-mountain-300 text-sm line-clamp-3 mb-4 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                      {news.excerpt}
                    </p>

                    {/* Read More Link */}
                    {news.externalUrl ? (
                      <a
                        href={news.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors group/link"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={`/news/${news.slug}`}
                        className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors group/link"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* No News - Stay Tuned UI */
            <div className="max-w-2xl mx-auto">
              <div className="bg-cream-50 dark:bg-mountain-700 rounded-2xl p-8 md:p-12 shadow-lg text-center border border-cream-200/50 dark:border-mountain-600/50">
                <div className="w-20 h-20 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-mountain-900 dark:text-cream-50 mb-4">
                  Stay Tuned!
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto leading-relaxed mb-6 font-[Georgia,'Times_New_Roman',Times,serif]">
                  We&apos;re working on bringing you the latest news and announcements from our community. 
                  Check back soon for updates on our activities and initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/news" className="btn-primary">
                    View Past News
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Events Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: 'url(/images/logos/hero-image.png)' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-cream-50/85 to-white/90 dark:from-mountain-900/95 dark:via-mountain-800/90 dark:to-mountain-900/95" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Celebrate With Us
            </p>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle mt-4 font-[Georgia,'Times_New_Roman',Times,serif]">
              Join us in celebrating our rich traditions and vibrant community through our annual and special events.
            </p>
          </div>

          {eventsData.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {eventsData.map((event) => {
                const eventDate = new Date(event.date);
                return (
                  <div key={event.id} className="card p-6 flex gap-6">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-burgundy-100 dark:bg-burgundy-900/50 rounded-lg py-3">
                        <span className="block text-3xl font-bold text-burgundy-700 dark:text-burgundy-400">{eventDate.getDate()}</span>
                        <span className="block text-sm text-burgundy-600 dark:text-burgundy-500 uppercase">
                          {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                        <span className="block text-xs text-burgundy-500 dark:text-burgundy-600">{eventDate.getFullYear()}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-mountain-900 dark:text-cream-50 mb-2 font-[Georgia,'Times_New_Roman',Times,serif]">{event.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-mountain-500 dark:text-mountain-400 mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                      <p className="text-mountain-600 dark:text-mountain-300 text-sm font-[Georgia,'Times_New_Roman',Times,serif]">{event.description}</p>
                      {event.registrationUrl && (
                        <Link
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors text-sm"
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
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/80 dark:bg-mountain-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg text-center border border-cream-200/50 dark:border-mountain-600/50">
                <div className="w-20 h-20 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-mountain-900 dark:text-cream-50 mb-4">
                  Stay Tuned!
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto leading-relaxed mb-6 font-[Georgia,'Times_New_Roman',Times,serif]">
                  We are currently planning exciting events for the community. Check back soon for updates on 
                  upcoming celebrations, festivals, and gatherings.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Contact Us for Updates
                  </Link>
                  <Link href="/join-us" className="btn-secondary">
                    Join Our Community
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/events" className="btn-secondary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Got Questions?
            </p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mt-4 font-[Georgia,'Times_New_Roman',Times,serif]">
              Learn more about the Himalayan Sherpa Club, our community, and our heritage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {/* FAQ Item 1 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden ">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left ">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    When did the Himalayan Sherpa Club establish?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  The Himalayan Sherpa Club was established in <strong className="text-burgundy-700 dark:text-burgundy-400">2011</strong> to unite Sherpas living in and around Sonoma County. Its mission is to preserve and promote Sherpa culture abroad, educate younger generations about their heritage, and collaborate with other organizations on community-based events.
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    What is the main goal of HSC?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  Our main goal is to preserve and promote Sherpa culture and establish a united and prosperous community with a unique and rich cultural heritage, and to strengthen the Sherpa community living in the North Bay Areas.
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How can I become a member of Himalayan Sherpa Club?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  To become a member of HSC, you must be of Nepalese origin, reside in Sonoma County, and be willing to volunteer for the organization whenever available. Membership is entirely based on voluntary contributions. Please fill out our <Link href="/join-us" className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300">membership form</Link> and submit.
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How to get involved in activities organized by HSC?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  As a member of HSC, you are welcome to participate in all events organized by the club. Since membership is entirely voluntary, your involvement depends on your availability and willingness to contribute. Check our <Link href="/events" className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300">Events page</Link> for upcoming activities.
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How to contact HSC members?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  You can directly email us through our <Link href="/contact" className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300">Contact Us page</Link> or call us at the given number on the same page.
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    Where is HSC office located?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  HSC does not have an official office yet. However, you can reach out to any of our <Link href="/about/functional-bodies" className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300">executive members</Link> for information and assistance.
                </div>
              </details>

              {/* FAQ Item 7 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    What is Sherpa?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed space-y-3">
                  <p>The Sherpa are one of the ethnic groups native to the most mountainous regions of Nepal, Tingri County in the Tibet Autonomous Region and the Himalayas. The term sherpa or sherwa derive from the Sherpa language words <strong className="text-burgundy-700 dark:text-burgundy-400">ཤར shar</strong> (&ldquo;east&rdquo;) and <strong className="text-burgundy-700 dark:text-burgundy-400">པ pa</strong> (&ldquo;people&rdquo;), which refer to their geographical origin of eastern Tibet.</p>
                  <p>Most Sherpa people live in the eastern regions of Nepal and Tingri County, though some live farther west in the Rolwaling Valley, Bigu and in the Helambu region north of Kathmandu. Sherpas establish gompas where they practice their religious traditions. The Sherpa language belongs to the south branch of the Tibeto-Burman languages.</p>
                  <Link href="/about/sherpa" className="inline-flex items-center gap-2 text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300">
                    Learn more about Sherpa heritage
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    Chronology of Sherpa History
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p className="mb-4 text-sm italic">Most dates are approximate</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1480</span><span>Sherpas originally came from Kham/Tibet</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1533</span><span>Sherpas cross Himalayas, settle in Khumbu</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1553</span><span>Settlement of Solu</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1667</span><span>Founding of Pangboche monastery</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1720</span><span>Founding of Zhung monastery</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1831</span><span>Founding of Khumjung monastery</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1916</span><span>Founding of Tengboche monastery</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1923</span><span>Founding of Chiwong monastery</span></div>
                    <div className="flex gap-3"><span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">1953</span><span>Tenzing Norgay & Edmund Hillary summit Everest</span></div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 9 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    Why do all Sherpas have the same last name?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed space-y-4">
                  <p>Even though all Sherpas share the same last name, they are distinguished by different clans, known as <strong className="text-burgundy-700 dark:text-burgundy-400">Roo</strong>. These clans determine whether individuals are related or not.</p>
                  <p><strong className="text-burgundy-700 dark:text-burgundy-400">Roo</strong>, a Sherpa word meaning &ldquo;bones,&rdquo; is inherited through the male lineage. This means a person&apos;s clan membership is determined by their father&apos;s lineage.</p>
                  <div className="bg-cream-100 dark:bg-mountain-700 rounded-lg p-4">
                    <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">Four Original Clans from Kham, Tibet:</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">Thimmi</span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">Tharktho</span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">Chawa</span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">Lama</span>
                    </div>
                  </div>
                  <p className="text-sm">Over time, these clans branched into several brother-clans including Salakha, Gole, Gorcha, Phinasa, Serwa, Gombawa, and many more. According to Sherpa customs, marriage within the same clan or brother-clans is strictly forbidden.</p>
                </div>
              </details>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/about/sherpa" className="btn-secondary">
              Explore Sherpa Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* Community Photos from Storyblok */}
      {galleryData.length > 0 && (
        <section className="py-20 bg-white dark:bg-mountain-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Captured Moments
              </p>
              <h2 className="section-title">Community Photos</h2>
              <p className="section-subtitle mt-4 font-[Georgia,'Times_New_Roman',Times,serif]">
                Glimpses of our vibrant community celebrations and gatherings.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryData.map((photo) => (
                <div key={photo.id} className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={photo.src}
                    alt={photo.alt || photo.caption || 'Community photo'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                  <span className="absolute top-2 right-2 px-2 py-1 bg-white/90 dark:bg-mountain-900/90 text-xs font-medium text-mountain-700 dark:text-mountain-300 rounded-full capitalize">
                    {photo.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/about/gallery" className="btn-secondary">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-forest-900" />
        
        {/* Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-20 opacity-10">
          <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="white"
              d="M0,100 L0,60 L120,80 L240,40 L360,70 L480,30 L600,60 L720,20 L840,50 L960,25 L1080,55 L1200,35 L1320,65 L1440,45 L1440,100 Z"
            />
          </svg>
        </div>

        <div className="relative container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto mb-10">
            Together, we share our values, support one another, and preserve our rich cultural heritage. 
            By giving and receiving, we create deeper bonds and strengthen our collective spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-us" className="btn-gold text-lg px-8 py-4">
              Become a Member
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="bg-white dark:bg-mountain-800 rounded-2xl shadow-xl dark:shadow-mountain-950/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-himalayan-600 to-himalayan-800 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-2xl font-serif italic opacity-90">
                      &quot;Your support helps us build a brighter future&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                  Please Support Us
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                  Help Us Build a Himalayan Community Hall
                </h2>
                <p className="text-mountain-600 dark:text-mountain-300 mb-6 leading-relaxed">
                  Your contribution will help us sustain our initiatives, support ongoing projects, 
                  and bring us closer to realizing our dream of building a Himalayan Community Hall. 
                  We sincerely appreciate your generosity and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/donate" className="btn-primary">
                    Make a Donation
                  </Link>
                  <Link href="/about/vision" className="btn-secondary">
                    Our Vision
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Facebook Connect Section */}
      <ConnectWithUs />
    </>
  );
}
