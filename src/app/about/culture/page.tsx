import { Metadata } from 'next';
import Image from 'next/image';

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
    description: 'Traditional Sherpa clothing includes the chuba (long robe), colorful aprons for women, and distinctive hats, often worn during festivals and special occasions.',
    icon: '👘',
  },
  {
    title: 'Cuisine',
    description: 'Sherpa cuisine features hearty, warming dishes like thukpa (noodle soup), momos (dumplings), and butter tea (po cha), reflecting the high-altitude origins of our ancestors.',
    icon: '🥟',
  },
  {
    title: 'Music & Dance',
    description: 'Traditional Sherpa music features drums, cymbals, and horns, accompanying vibrant dances performed during festivals and community celebrations.',
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
    name: 'Losar (Tibetan New Year)',
    timing: 'January/February',
    description: 'The most important festival, Losar celebrates the new year with family gatherings, feasting, traditional dances, and ceremonies spanning several days.',
    image: '/images/losar.jpg',
  },
  {
    name: 'Dumji',
    timing: 'May/June',
    description: 'A week-long festival celebrating the birth of Guru Rinpoche, featuring masked dances, religious ceremonies, and community feasting.',
    image: '/images/dumji.jpg',
  },
  {
    name: 'Mani Rimdu',
    timing: 'October/November',
    description: 'A three-day Buddhist festival featuring colorful masked dances, religious ceremonies, and the blessing of the community.',
    image: '/images/mani-rimdu.jpg',
  },
  {
    name: 'Lhosar',
    timing: 'December',
    description: 'The Sherpa-specific new year celebration, distinct from Tibetan Losar, featuring traditional rituals, food, and community gatherings.',
    image: '/images/lhosar.jpg',
  },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] lg:pt-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-800/90 to-mountain-900/95 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/culture-hero.jpg"
            alt="Sherpa cultural celebration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Sherpa Culture
          </h1>
          <p className="text-xl text-mountain-100 max-w-2xl mx-auto">
            A rich tapestry of Buddhist traditions, mountain heritage, and vibrant community life passed down through generations.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-center">
            <p className="text-xl text-mountain-600 dark:text-mountain-300 leading-relaxed">
              The Sherpa people originate from the Khumbu region of Nepal, in the shadow of Mount 
              Everest. Our culture is defined by our deep Buddhist faith, legendary mountaineering 
              heritage, and warm hospitality. At the Himalayan Sherpa Club of Sonoma, we work to 
              preserve and share these treasured traditions with new generations and our broader community.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Aspects Grid */}
      <section className="py-16 md:py-24 bg-earth-50 dark:bg-mountain-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white text-center mb-12">
            Pillars of Sherpa Culture
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {culturalAspects.map((aspect) => (
              <div
                key={aspect.title}
                className="bg-white dark:bg-mountain-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-5xl mb-4 block">{aspect.icon}</span>
                <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-3">
                  {aspect.title}
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300">
                  {aspect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white text-center mb-4">
            Festivals & Celebrations
          </h2>
          <p className="text-lg text-mountain-600 dark:text-mountain-400 text-center mb-12 max-w-2xl mx-auto">
            Our festivals are vibrant expressions of faith, community, and tradition. Join us in celebrating these special occasions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {festivals.map((festival) => (
              <div
                key={festival.name}
                className="group bg-earth-50 dark:bg-mountain-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
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
                    <span className="inline-block bg-wine-600 text-white text-sm px-3 py-1 rounded-full">
                      {festival.timing}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-mountain-600 dark:text-mountain-300">
                    {festival.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Preservation */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-wine-700 to-wine-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Preserving Our Heritage
              </h2>
              <div className="space-y-4 text-wine-100">
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
                <a
                  href="/events"
                  className="inline-block bg-white text-wine-700 px-6 py-3 rounded-lg font-semibold hover:bg-wine-50 transition-colors"
                >
                  Upcoming Events
                </a>
                <a
                  href="/join-us"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Join Our Community
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/cultural-preservation.jpg"
                alt="Children learning Sherpa traditions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Arts */}
      <section className="py-16 md:py-24 bg-earth-50 dark:bg-mountain-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white text-center mb-12">
            Traditional Arts & Crafts
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-wine-100 dark:bg-wine-900 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-2">
                Thangka Painting
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Intricate Buddhist scroll paintings depicting deities, mandalas, and religious scenes, created using traditional techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-wine-100 dark:bg-wine-900 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧶</span>
              </div>
              <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-2">
                Weaving & Textiles
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Hand-woven fabrics featuring traditional patterns, used for clothing, blankets, and ceremonial items.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-wine-100 dark:bg-wine-900 rounded-full flex items-center justify-center">
                <span className="text-3xl">🏺</span>
              </div>
              <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-2">
                Metalwork & Jewelry
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Traditional silver jewelry, prayer wheels, and ritual objects crafted with ancestral methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
