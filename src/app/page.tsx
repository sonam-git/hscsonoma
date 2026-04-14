import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HeroPhotoReel from "@/components/HeroPhotoReel";
import ConnectWithUs from "@/components/ConnectWithUs";
import styles from "@/components/hero3d.module.css";
import {
  getHomeHero,
  getHomeNews,
  getHomeEvents,
} from "@/lib/storyblok-home";

export const metadata: Metadata = {
  title:
    "Himalayan Sherpa Club of Sonoma | Sherpa Community in Wine Country California",
  description:
    "The Himalayan Sherpa Club of Sonoma is a 501(c)(3) non-profit uniting Sherpa people in Sonoma County & Wine Country, California. Join our community for cultural events, Losar celebrations, and Sherpa heritage preservation in the North Bay Area.",
  keywords: [
    "Sherpa Sonoma",
    "Sherpa Wine Country",
    "Sherpa community California",
    "Himalayan Sherpa Club",
    "Himalayan Sherpa Sonoma",
    "Sherpa people Sonoma County",
    "Sherpa in North Bay",
    "Nepali community Sonoma",
    "Sherpa culture California",
    "Losar celebration Sonoma",
    "Sherpa events Wine Country",
    "Himalayan community North Bay",
    "Sherpa organization in California",
    "Tibetan Buddhist community Sonoma",
    "Mount Everest Sherpa Sonoma",
    "Sherpa heritage preservation",
    "Nepali Sherpa Sonoma",
    "Himalayan festivals California",
    "Sherpa non-profit organization",
    "Phangi Party Sonoma",
    "Himalayan Sherpa events",
    "Himalayan cup soccer tournament",
    "Sherpa organization in Sonoma County",
    "Himalayan Sonoma FC",
    "Labor Day Soccer Tournament Sonoma",
    "Everest Summiter in Sonoma",
    "Mountaineer in Sonoma",
  ],
  alternates: {
    canonical: "https://www.himalayansherpaclubsonoma.org",
  },
  openGraph: {
    title: "Himalayan Sherpa Club of Sonoma | Sherpa Community in Wine Country",
    description:
      "Join the vibrant Sherpa community in Sonoma County. Cultural events, Losar celebrations, and heritage preservation in North Bay California Wine Country.",
    url: "https://www.himalayansherpaclubsonoma.org",
    siteName: "Himalayan Sherpa Club of Sonoma",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan Sherpa Club of Sonoma - Sherpa Community in Wine Country California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Sherpa Club of Sonoma | Sherpa Community in Wine Country",
    description:
      "Join the vibrant Sherpa community in Sonoma County, California. Cultural events, festivals, and heritage preservation.",
    images: ["/images/og-image.jpg"],
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Himalayan Sherpa Club of Sonoma",
  alternateName: ["HSC Sonoma", "Sherpa Club Sonoma", "Himalayan Sherpa Club"],
  description:
    "A 501(c)(3) non-profit organization dedicated to preserving and promoting Sherpa culture, heritage, and values in Sonoma County and the North Bay Area of California.",
  url: "https://www.himalayansherpaclubsonoma.org",
  logo: "https://www.himalayansherpaclubsonoma.org/images/logos/HSC-logo-dark-border.png",
  image: "https://www.himalayansherpaclubsonoma.org/images/og-image.jpg",
  foundingDate: "2011",
  areaServed: {
    "@type": "Place",
    name: "Sonoma County, California",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.2919,
      longitude: -122.458,
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonoma",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: ["https://www.facebook.com/HimalayanSherpaClubSonoma"],
  nonprofitStatus: "501(c)(3)",
  keywords:
    "Sherpa, Himalayan, Sonoma, Wine Country, California, Nepal, Tibetan Buddhist, Losar, cultural heritage, community organization",
};

// Local Business JSON-LD for better local SEO
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CivicStructure",
  name: "Himalayan Sherpa Club of Sonoma",
  description:
    "Sherpa community organization in Sonoma County Wine Country, California. Preserving Himalayan heritage and culture.",
  url: "https://www.himalayansherpaclubsonoma.org",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonoma",
    addressRegion: "California",
    postalCode: "95476",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.2919,
    longitude: -122.458,
  },
  areaServed: [
    "Sonoma County",
    "Santa Rosa",
    "Petaluma",
    "Napa",
    "North Bay Area",
    "Wine Country California",
  ],
};

// Revalidate every 30 seconds for fresher Storyblok content
export const revalidate = 30;

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Fetch data from Storyblok (with fallbacks to static content)
  const [heroData, latestNewsData, eventsData] = await Promise.all(
    [getHomeHero(), getHomeNews(3), getHomeEvents(4)],
  );

  // Hardcoded featured news (media coverage)
  const featuredNews = [
    {
      id: "1",
      title: "Raising Funds for Quake Victims in Nepal 2015",
      excerpt:
        "Our community came together to support earthquake relief efforts in Nepal, demonstrating the strong bonds that connect us across continents.",
      image: "/images/news/fundraising.jpg",
      category: "Community",
      date: "2024-04-15",
      slug: "raising-funds-for-quake-victims",
    },
    {
      id: "2",
      title: "Raising Funds for Everest Avalanche Victims 2014",
      excerpt:
        "Local Sherpa community organizes fund raising event to help the Everest Avalanche victims 2014.",
      image: "/images/news/benefit.jpg",
      category: "Events",
      date: "2024-03-20",
      slug: "raising-funds-for-everest-avalanche-victims",
    },
    {
      id: "3",
      title: "Sonoma Man Summits K2 holding Guinness Book Record",
      excerpt:
        "A member of our community achieves the remarkable feat of summiting K2, the world's most dangerous mountain.",
      image: "/images/news/k2-summit.jpg",
      category: "Achievement",
      date: "2024-02-10",
      slug: "sonoma-man-summits-k2",
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      {/* Hero Section - Desktop */}
      <section className="relative min-h-screen hidden md:flex items-center justify-center overflow-hidden">
        {/* 3D Background Image - Desktop only - positioned between header and photo reel */}
        <div
          className={`absolute top-16 bottom-28 left-0 right-0 ${styles.heroBg}`}
        >
          <Image
            src={heroData.backgroundImage}
            alt={heroData.backgroundAlt}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center select-none pointer-events-none"
            sizes="100vw"
            quality={85}
          />
          {/* Dark Blue Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/50 to-mountain-900/60" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content - Desktop */}
        <div className="relative z-10 container-custom text-center px-4">
          {/* Tibetan Text */}
          <p className="font-tibetan text-3xl lg:text-4xl text-gold-400 mb-4 animate-fade-in">
            ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
          </p>

          {/* Club Name */}
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 text-shadow animate-slide-up">
            Himalayan Sherpa Club
            <span className="text-gold-300 inline"> of Sonoma</span>
          </h1>

          {/* Tagline */}
          <p className="satisfy-regular text-2xl lg:text-3xl text-cream-100 mb-10 animate-fade-in">
            "Preserving Heritage, Uniting Community."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center animate-fade-in">
            <Link href="/join-us" className="btn-primary text-lg px-8 py-4">
              Become a Member
            </Link>
            <Link href="/donate" className="btn-gold text-lg px-8 py-4">
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mountain Silhouette Bottom (Zig-Zag Border) - Desktop */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-10">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="fill-cream-50 dark:fill-mountain-900"
              d="M0,120 L0,80 L120,60 L240,90 L360,40 L480,70 L600,30 L720,80 L840,50 L960,90 L1080,35 L1200,75 L1320,55 L1440,85 L1440,120 Z"
            />
          </svg>
        </div>

        {/* 3D Photo Reel at Bottom - Desktop */}
        <HeroPhotoReel />
      </section>

      {/* Hero Section - Mobile (New Structured Layout) */}
      <section className="md:hidden flex flex-col bg-white dark:bg-mountain-900">
        {/* Row 1: Tibetan Script Header */}
        <div className="bg-gradient-to-r from-burgundy-800 via-burgundy-700 to-burgundy-800 py-3 px-4">
          <p className="font-tibetan text-lg text-gold-400 text-center tracking-wide">
            ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
          </p>
        </div>

        {/* Row 2: Hero Image - adjusted height to fit photo reel in viewport */}
        <div className="relative" style={{ height: "60vh" }}>
          <Image
            src={
              heroData.isFromStoryblok
                ? heroData.backgroundImage
                : heroData.mobileImage || "/images/hsc-heroimage.png"
            }
            alt={
              heroData.isFromStoryblok
                ? heroData.backgroundAlt
                : heroData.mobileAlt || "Himalayan Sherpa Club"
            }
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: "center top" }}
            quality={80}
          />
          {/* Subtle gradient overlay at bottom for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-950 to-transparent" />

          {/* Vertical text label like reference */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <div className="bg-burgundy-800/90 backdrop-blur-sm py-3 px-1.5 rounded-r-lg shadow-lg min-w-[24px] flex items-center justify-center">
              <p className="text-[9px] font-bold text-gold-400 uppercase tracking-[0.15em] writing-vertical whitespace-nowrap">
                Since 2011
              </p>
            </div>
          </div>
        </div>

        {/* Photo Reel - Mobile (positioned between hero image and content) */}
        <div className="relative z-20 w-full">
          <HeroPhotoReel inline />
        </div>

        {/* Row 3, 4, 5: Content Section */}
        <div className="bg-white dark:bg-mountain-900 px-5 py-6 space-y-4">
          {/* Row 3: Club Name */}
          <h1 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 text-center leading-tight">
            Himalayan Sherpa Club
            <span className="text-burgundy-700 dark:text-gold-400">
              {" "}
              of Sonoma
            </span>
          </h1>

          {/* Row 4: Tagline */}
          <p className="satisfy-regular text-lg text-mountain-600 dark:text-cream-200 text-center">
            "Preserving Heritage, Uniting Community."
          </p>

          {/* Row 5: CTA Buttons - Two columns */}
          <div className="flex gap-3 pt-2">
            <Link
              href="/join-us"
              className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white text-sm font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Become a Member
            </Link>
            <Link
              href="/donate"
              className="flex-1 bg-gold-500 hover:bg-gold-600 text-mountain-900 text-sm font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-burgundy-700 via-gold-500 to-burgundy-700" />
      </section>

      {/* About Section */}
      <section className="py-10 bg-cream-50 dark:bg-mountain-900">
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
                <p className="text-burgundy-700 dark:text-burgundy-400 font-bold text-3xl">
                  2011
                </p>
                <p className="text-mountain-600 dark:text-mountain-300">
                  Year Established
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                About HSC
              </p>
              <h2 className="section-title">From the Peaks to the Vineyards</h2>
              <p className="text-md text-mountain-600 dark:text-mountain-300 mb-6 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                The Himalayan Sherpa Club of Sonoma is a non-profit,
                non-political organization, officially established in January
                2011 under California state law. We are recognized as a
                501(c)(3) tax-exempt charitable organization by the IRS.
              </p>
              <p className="text-md text-mountain-600 dark:text-mountain-300 mb-8 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                Our mission is to preserve and promote Sherpa culture, heritage,
                and values. We are deeply committed to fostering a strong,
                united, and thriving Sherpa community in the North Bay Area of
                California.
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

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Culture */}
            <div className="relative bg-white/90 dark:bg-mountain-800/90 backdrop-blur-sm rounded-2xl text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50 overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url(/images/logos/sherpa-transparent-box.png)",
                  backgroundSize: "120% 120%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Large SVG as watermark background */}
              <div className="absolute inset-0 flex items-center justify-center z-[1] opacity-[0.08] dark:opacity-[0.06]">
                <svg
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-burgundy-700 dark:text-burgundy-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-mountain-900 dark:text-cream-50 mb-2 sm:mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">
                  Preserve Culture
                </h3>
                <p className="text-sm sm:text-base text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif] leading-relaxed max-w-xs">
                  Protecting and promoting Sherpa cultural and linguistic
                  heritage for future generations.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="relative bg-white/90 dark:bg-mountain-800/90 backdrop-blur-sm rounded-2xl text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50 overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url(/images/logos/sherpa-transparent-box.png)",
                  backgroundSize: "120% 120%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Large SVG as watermark background */}
              <div className="absolute inset-0 flex items-center justify-center z-[1] opacity-[0.08] dark:opacity-[0.06]">
                <svg
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-forest-700 dark:text-forest-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-mountain-900 dark:text-cream-50 mb-2 sm:mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">
                  Unite Community
                </h3>
                <p className="text-sm sm:text-base text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif] leading-relaxed max-w-xs">
                  Building strong bonds and supporting one another as we thrive
                  in our new home.
                </p>
              </div>
            </div>

            {/* Future */}
            <div className="relative bg-white/90 dark:bg-mountain-800/90 backdrop-blur-sm rounded-2xl text-center hover:shadow-xl dark:hover:shadow-mountain-950/50 transition-shadow border border-cream-200/50 dark:border-mountain-600/50 overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url(/images/logos/sherpa-transparent-box.png)",
                  backgroundSize: "120% 120%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* Large SVG as watermark background */}
              <div className="absolute inset-0 flex items-center justify-center z-[1] opacity-[0.08] dark:opacity-[0.06]">
                <svg
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-gold-700 dark:text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              </div>
              <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-mountain-900 dark:text-cream-50 mb-2 sm:mb-3 font-[Georgia,'Times_New_Roman',Times,serif]">
                  Inspire Youth
                </h3>
                <p className="text-sm sm:text-base text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif] leading-relaxed max-w-xs">
                  Engaging younger generations in Sherpa traditions through
                  community events and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section (Hardcoded Media Coverage) */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              What The Media Says
            </p>
            <h2 className="section-title">Featured Stories</h2>
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
                    {new Date(news.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
                    aria-label={`Read more about ${news.title}`}
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/news" className="btn-secondary mt-4 md:mt-0">
            View All News
          </Link>
        </div>
      </section>

     {/* Events Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url(/images/logos/hero-image.png)" }}
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
              Join us in celebrating our rich traditions and vibrant community
              through our annual and special events.
            </p>
          </div>

          {eventsData.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {eventsData.map((event) => {
                const eventDate = event.date ? new Date(event.date) : null;
                const isValidDate = eventDate && !isNaN(eventDate.getTime());
                
                return (
                  <div 
                    key={event.id} 
                    className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200 dark:border-mountain-700"
                  >
                    <div className="grid md:grid-cols-2">
                      {/* Left Column - Text Content */}
                      <div className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                        {/* Featured Badge */}
                        {event.isFeatured && (
                          <div className="mb-3">
                            <span className="px-3 py-1 bg-gold-500 text-mountain-900 text-xs font-bold rounded-full shadow-md">
                              Featured Event
                            </span>
                          </div>
                        )}
                        
                        {/* Date Badge */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-16 text-center">
                            <div className="bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl py-2 px-1">
                              {isValidDate ? (
                                <>
                                  <span className="block text-2xl font-bold text-burgundy-700 dark:text-burgundy-400">
                                    {eventDate.getDate()}
                                  </span>
                                  <span className="block text-xs text-burgundy-600 dark:text-burgundy-500 uppercase font-medium">
                                    {eventDate.toLocaleDateString("en-US", { month: "short" })}
                                  </span>
                                  <span className="block text-[10px] text-burgundy-500 dark:text-burgundy-600">
                                    {eventDate.getFullYear()}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="block text-lg font-bold text-burgundy-700 dark:text-burgundy-400">
                                    TBD
                                  </span>
                                  <span className="block text-[10px] text-burgundy-500 dark:text-burgundy-600 uppercase">
                                    Date
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-mountain-900 dark:text-cream-50 mb-2 font-[Georgia,'Times_New_Roman',Times,serif]">
                              {event.title}
                            </h3>
                            
                            {/* Time & Location */}
                            <div className="flex flex-col gap-1 text-sm text-mountain-500 dark:text-mountain-400">
                              <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{event.time && event.time.trim() ? event.time : 'TBD'}</span>
                              </span>
                              {event.location && (
                                <span className="flex items-center gap-2">
                                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>{event.location}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-mountain-600 dark:text-mountain-300 text-sm md:text-base leading-relaxed mb-5 font-[Georgia,'Times_New_Roman',Times,serif]">
                          {event.description}
                        </p>
                        
                        {/* Registration Link */}
                        {event.registrationUrl && (
                          <div>
                            <Link
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-700 hover:bg-burgundy-800 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                              Register Now
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                      
                      {/* Right Column - Image */}
                      <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[300px] order-1 md:order-2 overflow-hidden">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-fit w-full h-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 dark:from-burgundy-900/50 dark:to-mountain-600 flex items-center justify-center">
                            <svg
                              className="w-20 h-20 text-burgundy-300 dark:text-burgundy-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-mountain-500 dark:text-mountain-400 text-lg">
                No upcoming events at the moment. Please check back later.
              </p>
            </div>
          )}
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

          {latestNewsData &&
          latestNewsData.length > 0 &&
          latestNewsData.some((news) => news.title) ? (
            <div
              className={`grid gap-8 ${
                latestNewsData.filter((news) => news.title).length === 1
                  ? "max-w-md mx-auto"
                  : latestNewsData.filter((news) => news.title).length === 2
                    ? "md:grid-cols-2 max-w-3xl mx-auto"
                    : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {latestNewsData
                .filter((news) => news.title)
                .map((news) => (
                  <article
                    key={news.id}
                    className="group bg-cream-50 dark:bg-mountain-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    {news.image && !news.image.includes("placeholder") ? (
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
                        <svg
                          className="w-16 h-16 text-burgundy-300 dark:text-burgundy-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
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
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {new Date(news.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
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
                          aria-label={`Read more about ${news.title} (opens in new tab)`}
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={`/news/${news.slug}`}
                          className="inline-flex items-center text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors group/link"
                          aria-label={`Read more about ${news.title}`}
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
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
                  <svg
                    className="w-10 h-10 text-burgundy-700 dark:text-burgundy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-mountain-900 dark:text-cream-50 mb-4">
                  Stay Tuned!
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto leading-relaxed mb-6 font-[Georgia,'Times_New_Roman',Times,serif]">
                  We&apos;re working on bringing you the latest news and
                  announcements from our community. Check back soon for updates
                  on our activities and initiatives.
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/news/hero-ai-image.png"
            alt="Wine Country Background"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-mountain-900/95 dark:via-mountain-800/90 dark:to-mountain-900/95" />
        </div>

        {/* Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-20 opacity-10">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,100 L0,60 L120,80 L240,40 L360,70 L480,30 L600,60 L720,20 L840,50 L960,25 L1080,55 L1200,35 L1320,65 L1440,45 L1440,100 Z"
            />
          </svg>
        </div>

        <div className="relative container-custom text-center">
          <h2 className="section-title">Join Our Community</h2>
          <p className="text-xl text-gray-600 dark:text-cream-200 max-w-2xl mx-auto mb-10">
            Together, we share our values, support one another, and preserve our
            rich cultural heritage. By giving and receiving, we create deeper
            bonds and strengthen our collective spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-us" className="btn-primary text-lg px-8 py-4">
              Become a Member
            </Link>
            <Link href="/contact" className="btn-secondary">
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
              <div className="relative aspect-[4/3] md:aspect-auto min-h-[300px]">
                <Image
                  src="/images/sherpa/sherpa-children.png"
                  alt="Sherpa Children - Your support helps us build a brighter future"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-2xl font-serif italic opacity-90 drop-shadow-lg">
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
                  Your contribution will help us sustain our initiatives,
                  support ongoing projects, and bring us closer to realizing our
                  dream of building a Himalayan Community Hall. We sincerely
                  appreciate your generosity and support.
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
  
      {/* FAQ Section */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Got Questions?
            </p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mt-4 font-[Georgia,'Times_New_Roman',Times,serif]">
              Learn more about the Himalayan Sherpa Club, our community, and our
              heritage.
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
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p>
                    The Himalayan Sherpa Club was established in{" "}
                    <strong className="text-burgundy-700 dark:text-burgundy-400">
                      2011
                    </strong>{" "}
                    to unite Sherpas living in and around Sonoma County. Its
                    mission is to preserve and promote Sherpa culture abroad,
                    educate younger generations about their heritage, and
                    collaborate with other organizations on community-based
                    events.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    What is the main goal of HSC?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p>
                    Our main goal is to preserve and promote Sherpa culture and
                    establish a united and prosperous community with a unique
                    and rich cultural heritage, and to strengthen the Sherpa
                    community living in the North Bay Areas.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How can I become a member of Himalayan Sherpa Club?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p>
                    To become a member of HSC, you must be of Nepalese origin,
                    reside in Sonoma County, and be willing to volunteer for the
                    organization whenever available. Membership is entirely
                    based on voluntary contributions. Please fill out our{" "}
                    <Link
                      href="/join-us"
                      className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300"
                    >
                      membership form
                    </Link>{" "}
                    and submit.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How to get involved in activities organized by HSC?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p>
                    As a member of HSC, you are welcome to participate in all
                    events organized by the club. Since membership is entirely
                    voluntary, your involvement depends on your availability and
                    willingness to contribute. Check our{" "}
                    <Link
                      href="/events"
                      className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300"
                    >
                      Events page
                    </Link>{" "}
                    for upcoming activities.
                  </p>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    How to contact HSC members?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p>
                    You can directly email us through our{" "}
                    <Link
                      href="/contact"
                      className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300"
                    >
                      Contact Us page
                    </Link>{" "}
                    or call us at the given number on the same page.
                  </p>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    Where is HSC office located?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed space-y-3">
                  <p>
                    HSC does not have a physical office yet. However, you can
                    reach out to any of our{" "}
                    <Link
                      href="/about/functional-bodies"
                      className="text-burgundy-700 dark:text-burgundy-400 underline hover:text-burgundy-800 dark:hover:text-burgundy-300"
                    >
                      executive members
                    </Link>{" "}
                    for information and assistance.
                  </p>
                </div>
              </details>

              {/* FAQ Item 7 */}
              <details className="group bg-white dark:bg-mountain-800 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                  <span className="text-lg font-semibold text-mountain-900 dark:text-cream-50 pr-4">
                    What is Sherpa?
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed space-y-3">
                  <p>
                    The Sherpa are one of the ethnic groups native to the most
                    mountainous regions of Nepal, Tingri County in the Tibet
                    Autonomous Region and the Himalayas. The term sherpa or
                    sherwa derive from the Sherpa language words{" "}
                    <strong className="text-burgundy-700 dark:text-burgundy-400">
                      ཤར shar
                    </strong>{" "}
                    (&ldquo;east&rdquo;) and{" "}
                    <strong className="text-burgundy-700 dark:text-burgundy-400">
                      པ pa
                    </strong>{" "}
                    (&ldquo;people&rdquo;), which refer to their geographical
                    origin of eastern Tibet.
                  </p>
                  <p>
                    Most Sherpa people live in the eastern regions of Nepal and
                    Tingri County, though some live farther west in the
                    Rolwaling Valley, Bigu and in the Helambu region north of
                    Kathmandu. Sherpas establish gompas where they practice
                    their religious traditions. The Sherpa language belongs to
                    the south branch of the Tibeto-Burman languages.
                  </p>
                  <Link
                    href="/about/sherpa"
                    className="inline-flex items-center gap-2 text-burgundy-700 dark:text-burgundy-400 font-medium hover:text-burgundy-800 dark:hover:text-burgundy-300"
                  >
                    Learn more about Sherpa heritage
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
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
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed">
                  <p className="mb-4 text-sm italic">
                    Most dates are approximate
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1480
                      </span>
                      <span>Sherpas originally came from Kham/Tibet</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1533
                      </span>
                      <span>Sherpas cross Himalayas, settle in Khumbu</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1553
                      </span>
                      <span>Settlement of Solu</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1667
                      </span>
                      <span>Founding of Pangboche monastery</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1720
                      </span>
                      <span>Founding of Zhung monastery</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1831
                      </span>
                      <span>Founding of Khumjung monastery</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1916
                      </span>
                      <span>Founding of Tengboche monastery</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1923
                      </span>
                      <span>Founding of Chiwong monastery</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-semibold text-burgundy-700 dark:text-burgundy-400 w-12">
                        1953
                      </span>
                      <span>
                        Tenzing Norgay & Edmund Hillary summit Everest
                      </span>
                    </div>
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
                    <svg
                      className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-mountain-600 dark:text-mountain-300 leading-relaxed space-y-4">
                  <p>
                    Even though all Sherpas share the same last name, they are
                    distinguished by different clans, known as{" "}
                    <strong className="text-burgundy-700 dark:text-burgundy-400">
                      Roo
                    </strong>
                    . These clans determine whether individuals are related or
                    not.
                  </p>
                  <p>
                    <strong className="text-burgundy-700 dark:text-burgundy-400">
                      Roo
                    </strong>
                    , a Sherpa word meaning &ldquo;bones,&rdquo; is inherited
                    through the male lineage. This means a person&apos;s clan
                    membership is determined by their father&apos;s lineage.
                  </p>
                  <div className="bg-cream-100 dark:bg-mountain-700 rounded-lg p-4">
                    <h4 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">
                      Some major clans in Sherpa
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Thimmi
                      </span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Minyakpa
                      </span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Chyawa
                      </span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Lama
                      </span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Ngompa
                      </span>
                      <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium">
                        Parwi-Tso
                      </span>
                    </div>
                  </div>
                  <p className="text-sm">
                    Over time, these clans branched into several brother-clans
                    including Salakha, Gole, Gorcha, Phinasa, Serwa, Gombawa,
                    and many more. According to Sherpa customs, marriage within
                    the same clan or brother-clans is strictly forbidden.
                  </p>
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
      {/* Facebook Connect Section */}
      <ConnectWithUs />
    </>
  );
}
