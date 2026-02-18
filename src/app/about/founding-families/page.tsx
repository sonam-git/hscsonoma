import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FounderImageModal from '@/components/FounderImageModal';

export const metadata: Metadata = {
  title: 'Founding Families | Himalayan Sherpa Club of Sonoma',
  description: 'Learn about Chhiring Sherpa, Ongda Sherpa, and Ngima Sherpa—the pioneers who established the Sherpa community in Sonoma.',
  openGraph: {
    title: 'Founding Families | Himalayan Sherpa Club of Sonoma',
    description: 'Learn about Chhiring Sherpa, Ongda Sherpa, and Ngima Sherpa—the pioneers who established the Sherpa community in Sonoma.',
    type: 'website',
  },
};

const founders = [
  {
    name: 'Chhiring Sherpa',
    image: '/images/founding-families/chhiring.jpg',
  },
  {
    name: 'Ongda Sherpa',
    image: '/images/founding-families/ongda.jpg',
  },
  {
    name: 'Nima Sherpa',
    image: '/images/founding-families/nima.jpg',
  },
];

export default function FoundingFamiliesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། གསར་འཛུགས་མཛད་པའི་ཁྱིམ་ཚང་།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Founding Families
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            The pioneers who planted the seeds of Sherpa community in Sonoma
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Origins
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                How Our Roots Were Planted in Sonoma
              </h2>
            </div>
            
            <div className="space-y-8 text-mountain-600 dark:text-mountain-300 text-lg leading-relaxed">
              <p>
                For generations, the Sherpa people lived humble lives in the high Himalayas, cultivating 
                potatoes, buckwheat, and turnips, and trading with Tibetan merchants across rugged mountain 
                trails. Everything changed in 1953, when the world first turned its eyes to the Sherpas 
                during the historic ascent of Mt. Everest by Sir Edmund Hillary and Tenzing Norgay Sherpa. 
                Their legendary strength and mountaineering skills gave rise to a flourishing trekking and 
                climbing industry in Nepal—opening the doors to new connections with climbers from around 
                the world, including many Americans.
              </p>
              
              <p>
                It was through these connections that, in the early 1990s, <strong className="text-mountain-900 dark:text-cream-50">Chhiring Sherpa</strong> found 
                his way to Sonoma. While working as a trekking guide in Nepal, he formed friendships with 
                American travelers who invited him to visit this peaceful corner of Northern California. 
                Inspired by the beauty and opportunities of the area, Chhiring made Sonoma his new home.
              </p>

              <p>
                A few years later, <strong className="text-mountain-900 dark:text-cream-50">Ongda Sherpa</strong>—also a trekking guide—followed 
                a similar path to the United States. After winning the Diversity Visa (DV) lottery, he joined 
                Chhiring in Sonoma. Not long after, their friend <strong className="text-mountain-900 dark:text-cream-50">Nima Sherpa</strong>, 
                who had been living in Colorado, also relocated to Sonoma to reunite with his close companions. 
                The three settled in Glen Ellen and became the first Sherpas to establish roots in the area.
              </p>

              <p>
                As time passed, they slowly began inviting family members, helping them settle into this new 
                and welcoming place. Word of opportunity, safety, and community spirit spread—gradually shaping 
                a growing Sherpa community in Sonoma.
              </p>

              <p>
                Today, what started with three friends has grown into a vibrant community of over 30 Sherpa 
                families. More than 20 children have been born here, calling Sonoma their true home. In 2011, 
                the Himalayan Sherpa Club was founded to preserve and celebrate the culture, language, and 
                traditions of the Sherpa people. It stands not only as a symbol of their journey but also as 
                a gift to the younger generation—a way for them to stay connected to their heritage while 
                thriving in a new land.
              </p>

              <p className="text-xl italic text-burgundy-700 dark:text-burgundy-400 text-center py-4">
                The Sherpa spirit—resilient, kind, and deeply rooted in culture—continues to flourish in Sonoma, 
                bridging the high mountains of Nepal with the rolling hills of California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '1990s', label: 'First Sherpas Arrived' },
              { value: '3', label: 'Founding Pioneers' },
              { value: '30+', label: 'Sherpa Families Today' },
              { value: '20+', label: 'Children Born Here' },
            ].map((stat, index) => (
              <div key={index} className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-6 shadow-lg">
                <p className="text-2xl md:text-3xl font-serif font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured in Sonoma Magazine */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/founding-families/sonomamag.jpeg"
            alt="Sonoma Magazine Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-mountain-900/95 dark:via-mountain-800/90 dark:to-mountain-900/95" />
        </div>
    
        <div className="relative container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium mb-4">
                Featured in Sonoma Magazine – Fall 2011
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                Faces of Sonoma
              </h2>
            </div>

            <div className="bg-white dark:bg-mountain-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <p className="text-md text-mountain-600 dark:text-mountain-300 leading-relaxed mb-8">
                  <strong className="text-mountain-900 dark:text-cream-50">Chhiring Sherpa, Ongda Sherpa, and Nima Sherpa</strong>—pioneers 
                  of the Sherpa community in Sonoma—were honored in the Fall 2011 edition of Sonoma Magazine, 
                  under the &quot;Faces of Sonoma&quot; section. Written by Kate Williams and photographed by Robbi Pengelly, 
                  their story highlighted the journey of these three men from the mountains of Nepal to the 
                  peaceful hills of Sonoma. As the first Sherpas to settle in the area, their resilience, hard 
                  work, and dedication helped lay the foundation for a growing Sherpa community that continues 
                  to thrive today.
                </p>

                {/* Founder Photos */}
                <FounderImageModal founders={founders} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-burgundy-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">
              Their Legacy Lives On
            </h2>
            <p className="text-xl text-cream-200 leading-relaxed mb-8">
              The vision of our founding pioneers continues to guide the Himalayan Sherpa Club today. 
              Through cultural events, community support, and educational programs, we honor their 
              journey while building a brighter future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/introduction" className="btn-gold">
                Learn About Our Mission
              </Link>
              <Link href="/join-us" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200">
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                Explore More About Us
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Discover our rich history, vibrant culture, and the traditions we cherish.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/about/history" className="btn-primary">
               History
              </Link>
              <Link href="/about/culture" className="btn-secondary">
                 Culture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
