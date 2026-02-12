'use client';


interface Business {
  name: string;
  address: string;
  description?: string;
  mapUrl?: string;
}

interface Region {
  name: string;
  emoji: string;
  businesses: Business[];
}

const regions: Region[] = [
  {
    name: 'Sonoma Area',
    emoji: '🍇',
    businesses: [
      {
        name: 'Taste of The Himalayas',
        address: '464 1st St E, Sonoma, CA 95476',
        description: 'Nepalese & Himalayan cuisine in Sonoma\'s downtown.',
        mapUrl: 'https://maps.google.com/?q=464+1st+St+E,+Sonoma,+CA+95476',
      },
      {
        name: 'Sonoma Grille & Bar',
        address: '165 W Napa St, Sonoma, CA 95476',
        mapUrl: 'https://maps.google.com/?q=165+W+Napa+St,+Sonoma,+CA+95476',
      },
      {
        name: 'La Casa Restaurant & Bar',
        address: '121 E Spain St, Sonoma, CA 95476',
        mapUrl: 'https://maps.google.com/?q=121+E+Spain+St,+Sonoma,+CA+95476',
      },
      {
        name: 'Farmhouse Sonoma',
        address: '18999 Sonoma Hwy 12, Sonoma, CA 95476',
        mapUrl: 'https://maps.google.com/?q=18999+Sonoma+Hwy+12,+Sonoma,+CA+95476',
      },
      {
        name: 'Sonoma Taxi',
        address: 'Sonoma, CA 95476',
        mapUrl: 'https://maps.google.com/?Sonoma,+CA+95476',
      }
    ],
  },
  {
    name: 'Napa Area',
    emoji: '🍷',
    businesses: [
      {
        name: 'Yak & Yeti',
        address: '3150 Jefferson St, Napa, CA 94558',
        description: 'Nepalese & Indian/Himalayan restaurant in Napa.',
        mapUrl: 'https://maps.google.com/?q=3150+Jefferson+St,+Napa,+CA+94558',
      },
      {
        name: 'Himalayan Sherpa Kitchen',
        address: '1148 Main St, St. Helena, CA 94574',
        description: 'Authentic Himalayan cuisine in St. Helena.',
        mapUrl: 'https://maps.google.com/?q=1148+Main+St,+St.+Helena,+CA+94574',
      },
      {
        name: 'Boba and More',
        address: '1136 Main St, St. Helena, CA 94574',
        mapUrl: 'https://maps.google.com/?q=1136+Main+St,+St.+Helena,+CA+94574',
      }
    ],
  },
  {
    name: 'Petaluma / Cotati Area',
    emoji: '🍝',
    businesses: [
      {
        name: 'Everest Indian Restaurant',
        address: '56 E Washington St, Petaluma, CA 94952',
        mapUrl: 'https://maps.google.com/?q=56+E+Washington+St,+Petaluma,+CA+94952',
      },
      {
        name: 'Everest Restaurant (Cotati)',
        address: '572 E Cotati Ave, Cotati, CA 94931',
        mapUrl: 'https://maps.google.com/?q=572+E+Cotati+Ave,+Cotati,+CA+94931',
      },
    ],
  },
    {
    name: 'San Rafael / Marin Area',
    emoji: '🥟',
    businesses: [
      {
        name: 'Himalayan Kitchen Marin',
        address: '227 3rd St, San Rafael, CA 94901',
        mapUrl: 'https://maps.google.com/?q=227+3rd+St,+San+Rafael,+CA+94901',
      },
    ],
  },
];

export default function SherpaBusinessesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ཤེར་པ་རིམ་ལས་ཁུངས།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Sherpa Businesses
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Supporting Sherpa-owned businesses in the North Bay Area
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
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Community
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
              Sherpa Entrepreneurs in the Bay Area
            </h2>
            <p className="text-lg text-mountain-600 dark:text-mountain-300 leading-relaxed">
              The Sherpa community has established a strong presence in the restaurant and hospitality 
              industry across the North Bay Area. These businesses not only bring authentic Himalayan 
              flavors and warm hospitality to California but also represent the hard work and 
              entrepreneurial spirit of our community members. We encourage you to visit and support 
              these local establishments.
            </p>
          </div>

          {/* Business Regions */}
          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region.name} className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{region.emoji}</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                    {region.name}
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {region.businesses.map((business) => (
                    <div
                      key={business.name}
                      className="bg-white dark:bg-mountain-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-cream-200 dark:border-mountain-700"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-2">
                            {business.name}
                          </h4>
                          <div className="flex items-start gap-2 text-mountain-600 dark:text-mountain-300">
                            <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-burgundy-600 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{business.address}</span>
                          </div>
                          {business.description && (
                            <p className="mt-2 text-mountain-500 dark:text-mountain-400 text-sm">
                              {business.description}
                            </p>
                          )}
                        </div>
                        
                        {business.mapUrl && (
                          <a
                            href={business.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-600 hover:bg-burgundy-700 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Directions
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
