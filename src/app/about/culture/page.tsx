import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sherpa Culture | Himalayan Sherpa Club of Sonoma',
  description: 'Explore the rich cultural heritage of the Sherpa people, from Buddhist traditions and festivals to language, cuisine, and mountain traditions.',
  openGraph: {
    title: 'Sherpa Culture | Himalayan Sherpa Club of Sonoma',
    description: 'Explore the rich cultural heritage of the Sherpa people, from Buddhist traditions and festivals to language, cuisine, and mountain traditions.',
    type: 'website',
  },
};

const culturalAspects = [
  {
    title: 'Buddhist Heritage',
    description: 'The Sherpa people are predominantly Tibetan Buddhists, with spiritual practices deeply woven into daily life. Monasteries, prayer flags, and mantras are central to Sherpa culture.',
    icon: '🙏',
  },
  {
    title: 'Language',
    description: 'The Sherpa language belongs to the Tibeto-Burman family and uses a modified Tibetan script. Preserving our language is a key priority for the community.',
    icon: '📜',
  },
  {
    title: 'Traditional Dress',
    description: 'Traditional Sherpa clothing includes the chuba (long robe) for men, and Angi, a colorful apron for women, and distinctive hats called Chhiring kyingyap, often worn during festivals and special occasions.',
    icon: '👘',
  },
  {
    title: 'Cuisine',
    description: 'Sherpa cuisine features hearty, warming dishes like Shyakpa (stew), thukpa (noodle soup), Riki-kur (potato pancake), momos (dumplings), and butter tea (su chya), reflecting the high-altitude origins of our ancestors.',
    icon: '🥟',
  },
  {
    title: 'Music & Dance',
    description: 'Traditional Sherpa music and song features dranyen lute, accompanying vibrant dances performed during festivals and community celebrations.',
    icon: '🎵',
  },
  {
    title: 'Mountain Traditions',
    description: 'The Sherpa people have a unique relationship with the mountains, treating peaks as sacred and developing legendary skills in high-altitude climbing and guiding.',
    icon: '🏔️',
  },
];

const festivals = [
  {
    name: 'Losar (Sherpa New Year)',
    timing: 'February | March',
    description: 'The most important festival, Losar celebrates the new year with family gatherings, feasting, traditional dances, and ceremonies spanning several days.',
    image: '/images/sherpa/losar.png',
  },
  {
    name: 'Dumji',
    timing: 'June | July',
    description: 'A week-long festival celebrating the birth of Guru Rinpoche, featuring masked dances, religious ceremonies, and community feasting.',
    image: '/images/sherpa/dumji.jpg',
  },
  {
    name: 'Mani Rimdu',
    timing: 'October |November',
    description: 'A three-day Buddhist festival featuring colorful masked dances, religious ceremonies, and the blessing of the community.',
    image: '/images/sherpa/manirimdu.jpg',
  },
  {
    name: 'Phang-Ngi',
    timing: 'August',
    description: 'Phang-Ngi is a significant festival that traditionally takes place before the harvest season. Historically, Sherpa communities, primarily engaged in agriculture and farming, observed this festival as a time of celebration before the busy harvest period.',
    image: '/images/events/annual/phangi-party.jpeg',
  },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen">
        {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ཤར་པའི་རིག་གཞུང་།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Sherpa Culture
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            A rich tapestry of Buddhist traditions, mountain heritage, and vibrant community life passed down through generations.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center">
            <p className="text-lg md:text-xl text-mountain-600 dark:text-mountain-300 leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
              The Sherpa people originate from the Khumbu region of Nepal, in the shadow of Mount 
              Everest. Our culture is defined by our deep Buddhist faith, legendary mountaineering 
              heritage, and warm hospitality. At the Himalayan Sherpa Club of Sonoma, we work to 
              preserve and share these treasured traditions with new generations and our broader community.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Aspects Grid */}
      <section className="py-16 md:py-20 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Heritage
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-800 dark:text-cream-50">
              Pillars of Sherpa Culture
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {culturalAspects.map((aspect) => (
              <div
                key={aspect.title}
                className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">{aspect.icon}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-3">
                  {aspect.title}
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                  {aspect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-16 md:py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Celebrate With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-4">
              Festivals & Celebrations
            </h2>
            <p className="text-lg text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto font-[Georgia,'Times_New_Roman',Times,serif]">
              Our festivals are vibrant expressions of faith, community, and tradition. Join us in celebrating these special occasions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {festivals.map((festival) => (
              <div
                key={festival.name}
                className="group bg-white dark:bg-mountain-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-burgundy-700 text-white text-sm px-3 py-1 rounded-full">
                      {festival.timing}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                    {festival.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Preservation */}
      <section className="py-16 md:py-20 bg-gradient-wine text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-gold-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Preserving Our Heritage
              </h2>
              <div className="space-y-4 text-cream-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                <p>
                  As our community grows in Sonoma County, we remain deeply committed to 
                  preserving and passing on our cultural heritage to future generations.
                </p>
                <p>
                  Through language classes, cultural workshops, and community events, we 
                  ensure that young Sherpas born far from the Himalayas maintain a strong 
                  connection to their roots.
                </p>
                <p>
                  We also welcome friends and neighbors to learn about our traditions, 
                  fostering understanding and appreciation across cultures.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="inline-block bg-white text-burgundy-700 px-6 py-3 rounded-lg font-semibold hover:bg-cream-100 transition-colors"
                >
                  Upcoming Events
                </Link>
                <Link
                  href="/join-us"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/sherpa/sherpa-children.png"
                alt="Children learning Sherpa traditions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Arts */}
      <section className="py-16 md:py-20 bg-white dark:bg-mountain-800">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Artisan Heritage
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-800 dark:text-cream-50">
              Traditional Arts & Crafts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cream-50 dark:bg-mountain-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-2">
                Thangka Painting
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Intricate Buddhist scroll paintings depicting deities, mandalas, and religious scenes, created using traditional techniques.
              </p>
            </div>
            <div className="text-center bg-cream-50 dark:bg-mountain-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧶</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-2">
                Weaving & Textiles
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Hand-woven fabrics featuring traditional patterns, used for clothing, blankets, and ceremonial items.
              </p>
            </div>
            <div className="text-center bg-cream-50 dark:bg-mountain-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
                <span className="text-3xl">🏺</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-mountain-800 dark:text-cream-50 mb-2">
                Metalwork & Jewelry
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300 font-[Georgia,'Times_New_Roman',Times,serif]">
                Traditional silver jewelry, prayer wheels, and ritual objects crafted with ancestral methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}