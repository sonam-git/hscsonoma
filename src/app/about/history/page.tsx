import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our History | Himalayan Sherpa Club of Sonoma',
  description: 'Learn about the history of the Himalayan Sherpa Club of Sonoma County, from our founding to our growth as a vibrant community organization.',
  openGraph: {
    title: 'Our History | Himalayan Sherpa Club of Sonoma',
    description: 'Learn about the history of the Himalayan Sherpa Club of Sonoma County, from our founding to our growth as a vibrant community organization.',
    type: 'website',
  },
};

const timelineEvents = [
  {
    year: '2010',
    title: 'Community Beginnings',
    description: 'A small group of Sherpa families in Sonoma County began gathering informally to celebrate cultural traditions and support one another.',
  },
  {
    year: '2012',
    title: 'First Cultural Celebration',
    description: 'The community organized its first public Losar (Tibetan New Year) celebration, attracting Sherpa families from across Northern California.',
  },
  {
    year: '2014',
    title: 'Official Formation',
    description: 'The Himalayan Sherpa Club of Sonoma was officially established as a nonprofit organization, with founding members creating a formal structure for community activities.',
  },
  {
    year: '2015',
    title: 'Nepal Earthquake Response',
    description: 'Following the devastating 2015 Nepal earthquake, the club mobilized to raise funds and provide support to affected communities in the Himalayan region.',
  },
  {
    year: '2017',
    title: 'Community Center Vision',
    description: 'The club began planning for a permanent community center to serve as a hub for cultural activities, education, and gatherings.',
  },
  {
    year: '2019',
    title: 'Growing Membership',
    description: 'Membership grew to over 100 families, representing one of the largest Sherpa communities in Northern California.',
  },
  {
    year: '2020',
    title: 'Virtual Community',
    description: 'Adapted to the pandemic by hosting virtual events, online language classes, and digital cultural programs to keep the community connected.',
  },
  {
    year: '2022',
    title: 'Youth Programs Launch',
    description: 'Launched dedicated youth programs including language classes, cultural education, and leadership development for the next generation.',
  },
  {
    year: '2024',
    title: 'Continuing the Legacy',
    description: 'Today, the club continues to grow and thrive, serving as a vital link between Sherpa heritage and the Sonoma County community.',
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
rff      <section className="relative h-[50vh] min-h-[400px] lg:pt-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-800/90 to-mountain-900/95 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/history-hero.jpg"
            alt="Historical photo of Sherpa community"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our History
          </h1>
          <p className="text-xl text-mountain-100 max-w-2xl mx-auto">
            From humble beginnings to a thriving community, discover the journey of the Himalayan Sherpa Club of Sonoma.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-xl text-mountain-600 dark:text-mountain-300 leading-relaxed">
              The Himalayan Sherpa Club of Sonoma has grown from informal gatherings of a few 
              families to become one of the most vibrant Sherpa community organizations in 
              Northern California. Our history is a testament to the resilience, cultural pride, 
              and community spirit that defines the Sherpa people.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-earth-50 dark:bg-mountain-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white text-center mb-16">
            Our Journey Through Time
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-wine-300 dark:bg-wine-600 transform md:-translate-x-1/2" />
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-wine-500 rounded-full border-4 border-white dark:border-mountain-800 transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white dark:bg-mountain-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="inline-block px-3 py-1 bg-wine-100 dark:bg-wine-900 text-wine-700 dark:text-wine-300 text-sm font-medium rounded-full mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-display font-bold text-mountain-800 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founding-members.jpg"
                alt="Founding members of the Himalayan Sherpa Club"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white mb-6">
                The Founding Story
              </h2>
              <div className="space-y-4 text-mountain-600 dark:text-mountain-300">
                <p>
                  The Himalayan Sherpa Club of Sonoma was born from the simple desire of Sherpa 
                  families to maintain their cultural connections while building new lives in 
                  Sonoma County's beautiful wine country.
                </p>
                <p>
                  In the early 2010s, a handful of families began hosting informal gatherings, 
                  sharing traditional foods, celebrating festivals, and supporting each other 
                  through the challenges of immigration and adaptation.
                </p>
                <p>
                  As word spread, more families joined these gatherings. What started as intimate 
                  family celebrations grew into community-wide events, eventually leading to the 
                  formal establishment of our organization in 2014.
                </p>
                <p>
                  Today, we honor the vision of our founders by continuing to grow and evolve 
                  while staying true to our roots and the values that brought us together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 md:py-24 bg-wine-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Looking to the Future
          </h2>
          <p className="text-xl text-wine-100 mb-8">
            As we continue to grow, our commitment to preserving Sherpa culture, supporting our 
            community, and building bridges with our Sonoma County neighbors remains stronger 
            than ever. Join us in writing the next chapter of our story.
          </p>
          <a
            href="/join-us"
            className="inline-block bg-white text-wine-700 px-8 py-4 rounded-lg font-semibold hover:bg-wine-50 transition-colors"
          >
            Become a Member
          </a>
        </div>
      </section>
    </main>
  );
}
