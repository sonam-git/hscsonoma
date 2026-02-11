import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data - In production, this would come from Storyblok
const newsArticles: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}> = {
  'sherpa-community-earthquake-relief-2024': {
    title: 'Sherpa Community Raises Funds for Nepal Earthquake Victims',
    excerpt: 'The Himalayan Sherpa Club of Sonoma organized a benefit event raising over $25,000 for earthquake relief efforts in remote Himalayan villages.',
    content: `
      <p>In a remarkable display of community solidarity, the Himalayan Sherpa Club of Sonoma organized a benefit event that raised over $25,000 for earthquake relief efforts in remote Himalayan villages.</p>
      
      <p>The fundraising event, held at the Sonoma Community Center, brought together over 200 community members, local business owners, and supporters from across Sonoma County. The evening featured traditional Sherpa cuisine, cultural performances, and an auction of Himalayan art and crafts.</p>
      
      <h2>Community Response</h2>
      <p>"When disaster strikes our homeland, the Sherpa community here in Sonoma feels it deeply," said club president Karma Sherpa. "This fundraiser was not just about raising money—it was about showing our brothers and sisters in Nepal that they are not forgotten."</p>
      
      <p>The funds raised will be directed to rebuilding efforts in the Solukhumbu district, where many of our community members have family ties. The money will help reconstruct homes, schools, and essential infrastructure damaged by the earthquake.</p>
      
      <h2>Local Business Support</h2>
      <p>Several local Sonoma County businesses contributed to the event's success. Wineries donated bottles for the auction, restaurants provided catering support, and local artists contributed works featuring Himalayan themes.</p>
      
      <p>"The generosity of our Sonoma community has been overwhelming," said event coordinator Nima Tenzing. "This disaster reminded us how connected we all are, across oceans and mountain ranges."</p>
      
      <h2>Ongoing Relief Efforts</h2>
      <p>The club has established an ongoing relief fund for those who wish to continue supporting earthquake recovery efforts. Donations can be made through the club's website or at monthly community meetings.</p>
    `,
    date: 'December 15, 2024',
    category: 'Community',
    image: '/images/news/earthquake-relief.jpg',
    author: 'HSCS Communications Team',
    readTime: '5 min read',
  },
  'sonoma-sherpas-wine-country-restaurants': {
    title: 'Sherpa Chefs Making Their Mark in Wine Country Restaurants',
    excerpt: 'From Everest base camps to Sonoma kitchens, Sherpa culinary traditions are finding a new home in wine country\'s finest restaurants.',
    content: `
      <p>From the high-altitude kitchens of Everest base camps to the sophisticated dining rooms of Sonoma County, Sherpa chefs are bringing their unique culinary heritage to wine country's food scene.</p>
      
      <h2>A Culinary Journey</h2>
      <p>For many Sherpa immigrants, the restaurant industry has provided both economic opportunity and a way to share their culture. Today, Sherpa chefs can be found in kitchens throughout Sonoma County, from casual eateries to Michelin-starred restaurants.</p>
      
      <p>"Cooking is in our blood," explains Pemba Sherpa, executive chef at a acclaimed Santa Rosa restaurant. "In the mountains, we learned to create nourishing, flavorful food with limited ingredients. That discipline and creativity translates well to any kitchen."</p>
      
      <h2>Fusion of Traditions</h2>
      <p>Several chefs are finding creative ways to blend Himalayan flavors with California's farm-to-table ethos. Momo dumplings made with locally raised pork, thukpa soup featuring Sonoma County vegetables, and butter tea infused with local herbs are appearing on menus across the region.</p>
      
      <h2>Community Connections</h2>
      <p>The restaurant industry has also become a hub for community building. Many Sherpa families have found employment and support networks through these culinary connections.</p>
      
      <p>"When a new family arrives from Nepal, one of the first things we do is help them find work," says Dawa Tenzing, who manages a popular Healdsburg restaurant. "The restaurant community takes care of its own."</p>
    `,
    date: 'November 28, 2024',
    category: 'Culture',
    image: '/images/news/sherpa-chefs.jpg',
    author: 'HSCS Communications Team',
    readTime: '7 min read',
  },
  'losar-2024-celebration-recap': {
    title: 'Losar 2024: A Celebration to Remember',
    excerpt: 'Over 250 community members gathered for our biggest Losar celebration yet, featuring traditional dances, food, and cultural performances.',
    content: `
      <p>The Himalayan Sherpa Club of Sonoma hosted its largest Losar (Tibetan New Year) celebration to date, welcoming over 250 community members for a day of cultural festivities, traditional performances, and community bonding.</p>
      
      <h2>A Day of Celebration</h2>
      <p>The celebration began early in the morning with traditional butter tea and khapse (fried pastries), setting the tone for a day steeped in Sherpa traditions. Families arrived in traditional dress, with many children wearing chubas and elaborate headpieces for the first time.</p>
      
      <p>"Seeing our young people dressed in traditional clothing, learning the dances, speaking Sherpa words—this is what Losar is all about," reflected elder Pasang Sherpa. "We are passing on our heritage."</p>
      
      <h2>Cultural Performances</h2>
      <p>The highlight of the day was the cultural performance program, featuring traditional Sherpa dances, songs, and a drama performed by the youth group. The performances showcased months of preparation and practice by community members of all ages.</p>
      
      <h2>Traditional Feast</h2>
      <p>The community feast featured an impressive spread of traditional dishes: momos, thukpa, sha phaley, and numerous vegetarian options. Volunteer cooks had spent days preparing the food, continuing a tradition of communal cooking that stretches back generations.</p>
    `,
    date: 'February 15, 2024',
    category: 'Events',
    image: '/images/news/losar-2024.jpg',
    author: 'HSCS Communications Team',
    readTime: '4 min read',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles[slug];
  
  if (!article) {
    return {
      title: 'Article Not Found | Himalayan Sherpa Club of Sonoma',
    };
  }

  return {
    title: `${article.title} | Himalayan Sherpa Club of Sonoma`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [{ url: article.image }],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({
    slug,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 pb-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-wine-600 text-white text-sm px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-mountain-200 text-sm">{article.date}</span>
            <span className="text-mountain-200 text-sm">•</span>
            <span className="text-mountain-200 text-sm">{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-mountain-200">By {article.author}</p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Excerpt */}
          <p className="text-xl text-mountain-600 dark:text-mountain-300 leading-relaxed mb-8 font-medium">
            {article.excerpt}
          </p>
          
          {/* Main Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-mountain-800 dark:prose-headings:text-white
              prose-p:text-mountain-600 dark:prose-p:text-mountain-300
              prose-a:text-wine-600 dark:prose-a:text-wine-400"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-mountain-200 dark:border-mountain-700">
            <h3 className="text-lg font-display font-bold text-mountain-800 dark:text-white mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.himalayansherpaclubsonoma.org/news/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.himalayansherpaclubsonoma.org/news/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Check out this article: https://www.himalayansherpaclubsonoma.org/news/${slug}`)}`}
                className="w-10 h-10 bg-mountain-600 rounded-full flex items-center justify-center text-white hover:bg-mountain-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Back to News */}
      <section className="py-8 bg-earth-50 dark:bg-mountain-800">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-wine-600 dark:text-wine-400 font-medium hover:text-wine-700 dark:hover:text-wine-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All News
          </Link>
        </div>
      </section>
    </main>
  );
}
