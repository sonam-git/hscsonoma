export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  isRecent: boolean;
  externalUrl?: string;
  source?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "five-sherpa-siblings-makalu",
    title: "Five Sherpa siblings make history on Mt Makalu",
    excerpt:
      "Five Sherpa siblings from Sankhuwasabha today scaled the world's fifth highest mountain...",
    content: `Five Sherpa siblings from Sankhuwasabha today scaled the world's fifth highest mountain, Mt Makalu, together, setting a historic record in the mountaineering world.

The Sherpa Siblings include Ang Dawa Sherpa, Muktu Lakpa Sherpa, Ngima Dorchi Sherpa, Pechumbe Sherpa, and their sister Pasang Yangi Sherpa.

This remarkable achievement marks the first time in history that five siblings have summited an 8,000-meter peak together. The Sherpa siblings, who come from a family with deep mountaineering roots, trained extensively for this expedition.

Their success highlights the extraordinary mountaineering heritage of the Sherpa people and serves as an inspiration to climbers around the world.`,
    date: "May 16, 2025",
    category: "News",
    image: "/images/news/makalu-summit.jpg",
    featured: true,
    isRecent: true,
    externalUrl:
      "https://thehimalayantimes.com/nepal/five-sherpa-siblings-make-history-on-mt-makalu",
    source: "The Himalayan Times",
  },
  {
    slug: "sherpas-launch-second-careers-wine-country",
    title: "Sherpas launch second careers in Wine Country, as restaurateurs",
    excerpt:
      "A small community of sherpas from Nepal now run locally favorite restaurants in Sonoma County. To...",
    content: `A small community of Sherpas from Nepal now run locally favorite restaurants in Sonoma County. Their journey from the high peaks of the Himalayas to California's Wine Country is a remarkable story of adaptation, entrepreneurship, and community building.

These former mountaineers and guides have brought their legendary hospitality and work ethic to the restaurant industry, creating beloved dining establishments that have become fixtures in the local culinary scene.

From authentic Himalayan cuisine to fusion dishes that blend their heritage with California flavors, these Sherpa-owned restaurants represent a unique chapter in both Sherpa diaspora history and Sonoma County's diverse food culture.

Many of these restaurateurs maintain strong ties to their homeland, supporting earthquake relief efforts and educational initiatives in Nepal while building new lives for their families in America.`,
    date: "April 23, 2025",
    category: "News",
    image: "/images/news/sherpa-launch.jpeg",
    featured: true,
    isRecent: false,
    externalUrl:
      "https://www.pressdemocrat.com/article/lifestyle/sherpas-launch-second-careers-in-wine-country-as-restaurateurs/",
    source: "Press Democrat",
  },
  {
    slug: "farmhouse-sonoma-opens",
    title: "A sneak peek at newly opened Farmhouse Sonoma",
    excerpt:
      "The former Palms Grill, which closed in 2021, has been reborn under new ownership as Farmhouse...",
    content: `The former Palms Grill, which closed in 2021, has been reborn under new ownership as Farmhouse Sonoma. The restaurant, located in the heart of Sonoma, brings a fresh take on farm-to-table dining with a focus on locally sourced ingredients.

Under the new management, Farmhouse Sonoma has transformed the space while honoring the building's history. The menu features seasonal dishes that celebrate the bounty of Sonoma County's farms and vineyards.

The opening has been welcomed by locals who missed having a neighborhood gathering spot in this location. The restaurant aims to create a warm, welcoming atmosphere that brings the community together.

With an emphasis on sustainability and supporting local producers, Farmhouse Sonoma represents the evolving culinary landscape of Wine Country.`,
    date: "April 21, 2025",
    category: "News",
    image: "/images/news/farmhouse.jpeg",
    featured: false,
    isRecent: true,
    externalUrl:
      "https://www.sonomanews.com/2025/04/21/a-sneak-peek-at-newly-opened-farmhouse-sonoma/",
    source: "Sonoma Index-Tribune",
  },
  {
    slug: "sonoma-grille-flag-everest",
    title: "Climber waves Sonoma Grille flag atop Mount Everest",
    excerpt:
      "During his May 15 ascent, Pasang Tshering Sherpa waved the flag for Sonoma Grille, the popular...",
    content: `During his May 15 ascent, Pasang Tshering Sherpa waved the flag for Sonoma Grille, the popular restaurant in downtown Sonoma, at the summit of Mount Everest.

The gesture was a tribute to the Sherpa community in Sonoma County and the restaurant that has become a gathering place for locals and visitors alike. Sonoma Grille, known for its warm hospitality and delicious food, holds a special place in the hearts of the local Sherpa community.

Pasang Tshering Sherpa's successful summit marked another achievement in his distinguished mountaineering career. By carrying the restaurant's flag to the top of the world, he created a unique connection between Sonoma's Wine Country and the highest peak on Earth.

The image of the Sonoma Grille flag fluttering at 29,032 feet has become a symbol of the strong bonds between the Sherpa community's Himalayan roots and their adopted home in California.`,
    date: "April 21, 2025",
    category: "News",
    image: "/images/news/sonomagrill-flag.jpeg",
    featured: true,
    isRecent: false,
    externalUrl:
      "https://www.sonomanews.com/2022/06/21/climber-waves-sonoma-grille-flag-atop-mount-everest/",
    source: "Sonoma Index-Tribune",
  },
  {
    slug: "la-casa-everest-celebration",
    title:
      "Celebrating Sonoma's La Casa restaurant at the peak of Mount Everest",
    excerpt:
      "La Casa's flag is sitting on top of the world, some 29,032 feet towering in the sky. At the peak of...",
    content: `La Casa's flag is sitting on top of the world, some 29,032 feet towering in the sky. At the peak of Mount Everest, a climber proudly displayed the flag of La Casa, one of Sonoma's most beloved restaurants.

This extraordinary moment connects the high Himalayas with the rolling vineyards of Sonoma County in a unique celebration of the Sherpa community's dual heritage. La Casa, known for its delicious food and warm atmosphere, has been a cornerstone of the local dining scene.

The restaurant's connection to the Sherpa community runs deep, and seeing its flag at the summit of Everest represents the incredible journey these community members have taken — from the mountains of Nepal to the heart of Wine Country.

For the team at La Casa and the broader Sherpa community in Sonoma, this moment is a source of immense pride and a reminder of their remarkable heritage.`,
    date: "April 21, 2025",
    category: "News",
    image: "/images/news/lacasa-flag.jpeg",
    featured: true,
    isRecent: false,
    externalUrl:
      "https://www.sonomanews.com/2023/06/10/celebrating-sonomas-la-casa-restaurant-at-the-peak-of-mount-everest/",
    source: "Sonoma Index-Tribune",
  },
  {
    slug: "raising-funds-for-quake-victims",
    title: "Raising Funds for quake victims",
    excerpt:
      "The Sonoma community came together for a 'Wine Country Dinner – Sherpa Family Benefit' Thursday, May...",
    content: `The Sonoma community came together for a 'Wine Country Dinner – Sherpa Family Benefit' Thursday, demonstrating the strong bonds between the local community and the Sherpa families affected by devastating earthquakes in Nepal.

The fundraising event brought together local restaurants, wineries, and community members in a show of solidarity. Dozens of local businesses donated food, wine, and services to support the cause.

The evening featured authentic Sherpa cuisine alongside local Wine Country favorites, live entertainment, and heartfelt stories from community members about the impact of the earthquakes on their families and villages in Nepal.

Funds raised went directly to earthquake relief efforts, supporting rebuilding homes, schools, and monasteries in affected regions of Nepal. The success of the event highlighted the generosity of the Sonoma community and the deep connections that bind the Sherpa diaspora to their homeland.`,
    date: "April 10, 2025",
    category: "News",
    image: "/images/news/fundraising.jpg",
    featured: false,
    isRecent: false,
    externalUrl:
      "https://www.sonomanews.com/2015/05/19/raising-funds-for-quake-victims/",
    source: "Sonoma Index-Tribune",
  },
  {
    slug: "sonoma-sherpas-plan-benefit",
    title: "Sonoma Sherpas plan benefit",
    excerpt:
      "A group of Sonoma Sherpas, some with guiding experience on Mt. Everest and at least 10 successful...",
    content: `A group of Sonoma Sherpas, some with guiding experience on Mt. Everest and at least 10 successful summits between them, are planning a benefit to support their community both locally and in Nepal.

The organizers, who include members of the Himalayan Sherpa Club of Sonoma, are drawing on their extensive networks in both the mountaineering world and the local restaurant industry to create a memorable event.

The benefit aims to raise funds for various community initiatives, including scholarships for Sherpa youth, support for elderly community members, and development projects in Sherpa villages in Nepal.

This initiative reflects the Sherpa community's commitment to supporting each other and maintaining strong connections with their homeland while building prosperous lives in Sonoma County.`,
    date: "April 10, 2025",
    category: "News",
    image: "/images/news/benefit.jpg",
    featured: false,
    isRecent: false,
    externalUrl:
      "https://www.sonomanews.com/2014/04/25/sonoma-sherpas-plan-benefit/",
    source: "Sonoma Index-Tribune",
  },
  {
    slug: "sonoma-man-summits-k2",
    title: "Sonoma man summits K2, world's most dangerous mountain",
    excerpt:
      "At the end of July, Ang D Sherpa, the member of Himalayan Sherpa Club, flew back to his home in...",
    content: `At the end of July, Ang D Sherpa, a member of the Himalayan Sherpa Club, flew back to his home in Sonoma after successfully summiting K2, the world's second-highest and most dangerous mountain.

K2, at 8,611 meters (28,251 feet), is known among climbers as the "Savage Mountain" due to its extreme difficulty and high fatality rate. Only about 300 people have ever reached its summit, compared to thousands who have climbed Everest.

Ang D Sherpa's successful ascent represents an extraordinary achievement, even for someone from a community legendary for their high-altitude climbing abilities. The climb required weeks of acclimatization, careful planning, and navigating some of the most treacherous terrain on Earth.

Upon returning to Sonoma, Ang D was welcomed as a hero by his family and the local Sherpa community. His achievement has inspired young Sherpas and demonstrated that the mountaineering spirit remains strong in the diaspora.`,
    date: "April 10, 2025",
    category: "News",
    image: "/images/news/k2-summit.jpg",
    featured: true,
    isRecent: false,
    externalUrl:
      "https://www.sonomanews.com/2023/08/24/sonoma-man-summits-k2-worlds-most-dangerous-mountain/",
    source: "Sonoma Index-Tribune",
  },
   {
    slug: "everest-restaurant-climbs-to-flavorful-heights-in-cotati",
    title: "Everest Restaurant Climbs To Flavorful Heights in Cotati",
    excerpt:
      "A mix of Nepalese, Indian and Chinese dishes showcase the culinary diversity of the Himalayas at Cotati's Everest Restauranteve.",
    content: `In May, legendary Everest climber Kami Rita carried a small flag bearing the logo for Everest restaurants in Petaluma and Cotati on his record-breaking 30th ascent up the 29,032-foot peak. With eyebrows and lashes encrusted with ice, Rita snapped a quick picture at the snowy summit, planting the small banner and smiling like a man ready for a warm cup of daal.`,
    date: "July 24 , 2024",
    category: "News",
    image: "/images/news/everest-cotati.jpg",
    featured: true,
    isRecent: false,
    externalUrl:
      "https://www.sonomamag.com/everest-restaurant-climbs-to-flavorful-heights-in-cotati/",
    source: "Sonoma Magazine",
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}
