"use client";

import { useState } from "react";
import Image from "next/image";

// Expandable Card Component for long text content
function ExpandableCard({
  id,
  title,
  shortText,
  fullText,
  gradientClasses,
  borderClasses,
  isExpanded,
  onToggle,
}: {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  gradientClasses: string;
  borderClasses: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}) {
  const needsExpand = fullText.length > shortText.length;

  return (
    <div className={`${gradientClasses} rounded-xl p-6 border ${borderClasses} h-full flex flex-col`}>
      <h4 className="font-bold text-mountain-900 dark:text-white mb-3">
        {title}
      </h4>
      <div className="flex-grow">
        <p className="text-sm text-mountain-600 dark:text-mountain-400">
          {isExpanded ? fullText : shortText}
        </p>
      </div>
      {needsExpand && (
        <button
          onClick={() => onToggle(id)}
          className="mt-4 text-sm font-medium text-burgundy-600 dark:text-burgundy-400 hover:text-burgundy-800 dark:hover:text-burgundy-300 flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Read less</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Read more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
}

const tabs = [
  { id: "history", label: "History" },
  { id: "clans", label: "Clans" },
  { id: "life", label: "Life" },
  { id: "tradition", label: "Tradition" },
  { id:"culture", label: "Culture" },
  { id: "family-tree", label: "Family Tree" },
];

export default function SherpaPage() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">ཤེར་པ་།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            The Sherpa People
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Guardians of the Himalayas — A legacy of resilience, spirituality,
            and mountaineering excellence
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              className="fill-white dark:fill-mountain-900"
              d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 dark:bg-mountain-900/95 backdrop-blur-md shadow-md border-b border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-burgundy-700 text-white shadow-lg"
                    : "text-mountain-600 dark:text-mountain-300 hover:bg-cream-100 dark:hover:bg-mountain-800 hover:text-burgundy-700 dark:hover:text-burgundy-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {activeTab === "history" && <HistoryTab />}
          {activeTab === "clans" && <ClansTab />}
          {activeTab === "life" && <LifeTab />}
          {activeTab === "tradition" && <TraditionTab />}
           {activeTab === "culture" && <CultureTab />}
          {activeTab === "family-tree" && <FamilyTreeTab />}
        </div>
      </section>

      {/* Citation */}
      <section className="py-8 bg-cream-100 dark:bg-mountain-900 border-t border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <p className="text-sm text-mountain-600 dark:text-mountain-400 italic text-center max-w-4xl mx-auto">
            Some content on this page is adapted from the book{" "}
            <em className="font-medium">Story and Customs of the Sherpas</em> by
            Frances Klatzel, based on the stories told by Tengboche Rinpoche,
            Ngawang Tenzin Zangbu. All rights belong to the original authors.
          </p>
        </div>
      </section>
    </main>
  );
}

function HistoryTab() {
  return (
    <div className="space-y-12">
      {/* Origin Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
            Origin of the Sherpa People
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Sherpa people trace their origins to the Kham region of
              eastern Tibet. Approximately 600 years ago, they migrated across
              the Himalayan passes to settle in the Solukhumbu region of Nepal.
              Their name, &quot;Shar-Pa,&quot; literally translates to
              &quot;people from the east&quot; — a testament to their ancestral
              homeland.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              This historic migration was driven by the search for peaceful
              lands where they could practice their Buddhist faith freely. Led
              by spiritual leaders and guided by ancient prophecies, the early
              Sherpas crossed treacherous mountain passes at elevations over
              19,000 feet, carrying their traditions, religious texts, and way
              of life into the high valleys of Nepal.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpapeople.jpg"
            alt="Sherpa people in traditional dress"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Settlement & Adaptation */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-12 shadow-lg">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
          Settlement & Adaptation
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Upon arriving in Solukhumbu, the Sherpas established villages at
            elevations between 9,000 and 14,000 feet — some of the highest
            permanent settlements on Earth. They developed a unique economy
            based on high-altitude agriculture, yak herding, and trans-Himalayan
            trade between Tibet and the lowlands of Nepal and India.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Their adaptation to the extreme altitude gave them remarkable
            physiological advantages, including enhanced oxygen-carrying
            capacity in their blood. This biological adaptation, combined with
            their intimate knowledge of mountain terrain, would later establish
            them as the world&apos;s most renowned high-altitude guides and
            mountaineers.
          </p>
        </div>
      </div>

      {/* Mountaineering Legacy */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/Sir-Ed-Hillary-Kunchok-Chombi.jpg"
            alt="Sir Edmund Hillary with Sherpa mountaineers"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white text-sm">
              Sir Edmund Hillary with Sherpa mountaineers — a partnership that
              changed history
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            The Mountaineering Era
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The 20th century brought Western explorers to the Himalayas, and
              with them came new opportunities for the Sherpa people. Their
              unmatched skills in navigating high-altitude terrain, combined
              with their strength, reliability, and cheerful disposition, made
              them indispensable to expeditions.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              In 1953, Tenzing Norgay Sherpa and Sir Edmund Hillary became the
              first confirmed climbers to reach the summit of Mount Everest.
              This historic achievement brought global recognition to the Sherpa
              people and established their legendary reputation as the
              &quot;Tigers of the Snow.&quot;
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Today, Sherpas continue to lead expeditions on the world&apos;s
              highest peaks, holding numerous records for Everest summits and
              high-altitude achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Global Diaspora */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-12 border border-cream-200 dark:border-mountain-700 shadow-lg">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
          The Global Sherpa Diaspora
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            From the high valleys of the Himalayas, Sherpas have journeyed
            across the world, bringing their unique culture, work ethic, and
            warm hospitality to communities everywhere. Today, significant
            Sherpa populations thrive in cities across North America, Europe,
            and beyond.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Here in Sonoma County, California, our Sherpa community has planted
            deep roots while maintaining strong connections to our Himalayan
            heritage. The Himalayan Sherpa Club serves as a bridge between
            generations, ensuring that our children know their ancestry while
            contributing to our adopted homeland.
          </p>
        </div>
      </div>
    </div>
  );
}

function ClansTab() {
  const majorClans = [
    {
      name: "Thimmi",
      subClans: ["Paldorje", "Salaka", "Khambache", "Gobarma", "Chhusherwa", "Pya-Phullo", "Murmin", "Nawa", "Dhompa", "Lhungbuwa", "Shire", "Dotup"],
    },
    {
      name: "Minyakpa",
      subClans: ["Shire", "Taktok", "Pinasa", "Ngemaray", "Pangkarma", "Sharwa", "Dhongpa", "Garza", "Nyendawa", "Sharitokpa", "Gole", "Khapa Shaore"],
    },
    {
      name: "Lama",
      subClans: ["Lama Gonpa", "Lama Sharwa"],
    },
    {
      name: "Chyawa",
      subClans: ["Nawa", "Lhukpa"],
    },
    {
      name: "Ngompa",
      subClans: ["Chakpa", "Tompa", "Dhakpo", "Zhuwa", "Dhawa"],
    },
    {
      name: "Parwi-Tso",
      subClans: ["Ronggi-Sharwa"],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
          The Six Major Sherpa Clans
        </h2>
        <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
          The Sherpa community is organized into six major clans, called &quot;Ru&quot; or &quot;Chhawa,&quot; 
          each with their own sub-clans tracing lineage to the ancient families who first migrated from Tibet. 
          These clans form the foundation of Sherpa social structure and identity.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-cream-200 dark:border-mountain-700 shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-burgundy-700 to-burgundy-800">
              <th className="px-6 py-4 text-left text-white font-bold text-lg w-1/6">
                <div className="flex items-center gap-2">
                  <span className="text-gold-400">#</span>
                  Major Clan
                </div>
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-lg">
                Sub-Clans (Ru)
              </th>
              <th className="px-6 py-4 text-center text-white font-bold text-lg w-24">
                Count
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cream-200 dark:divide-mountain-700">
            {majorClans.map((clan, index) => (
              <tr 
                key={clan.name} 
                className={`${index % 2 === 0 ? 'bg-white dark:bg-mountain-800/30' : 'bg-cream-50 dark:bg-mountain-800/50'} hover:bg-cream-100 dark:hover:bg-mountain-700/50 transition-colors`}
              >
                <td className="px-6 py-5 border-l-4 border-burgundy-600">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400">
                      {index + 1}
                    </span>
                    <span className="font-bold text-lg text-mountain-900 dark:text-white">
                      {clan.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {clan.subClans.map((subClan) => (
                      <span 
                        key={subClan} 
                        className="px-3 py-1.5 bg-cream-100 dark:bg-mountain-700 rounded-full text-sm text-mountain-700 dark:text-mountain-200 border border-cream-200 dark:border-mountain-600"
                      >
                        {subClan}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400">
                    {clan.subClans.length}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {majorClans.map((clan, index) => (
          <div 
            key={clan.name}
            className="bg-white dark:bg-mountain-800/50 rounded-xl overflow-hidden shadow-lg border-l-4 border-burgundy-600"
          >
            {/* Clan Header */}
            <div className="px-5 py-4 bg-cream-50 dark:bg-mountain-800 flex items-center justify-between border-b border-cream-200 dark:border-mountain-700">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-xl text-mountain-900 dark:text-white">
                    {clan.name}
                  </h3>
                  <p className="text-xs text-mountain-500 dark:text-mountain-400">
                    Major Clan
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400">
                {clan.subClans.length} sub-clans
              </span>
            </div>
            
            {/* Sub-clans */}
            <div className="px-5 py-4">
              <p className="text-xs uppercase tracking-wide text-mountain-500 dark:text-mountain-400 mb-3 font-medium">
                Sub-Clans (Ru)
              </p>
              <div className="flex flex-wrap gap-2">
                {clan.subClans.map((subClan) => (
                  <span 
                    key={subClan} 
                    className="px-3 py-1.5 bg-cream-100 dark:bg-mountain-700 rounded-full text-sm text-mountain-700 dark:text-mountain-200 border border-cream-200 dark:border-mountain-600"
                  >
                    {subClan}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
          <p className="text-3xl font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">6</p>
          <p className="text-mountain-600 dark:text-mountain-400 text-sm">Major Clans</p>
        </div>
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
          <p className="text-3xl font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">
            {majorClans.reduce((acc, clan) => acc + clan.subClans.length, 0)}
          </p>
          <p className="text-mountain-600 dark:text-mountain-400 text-sm">Total Sub-Clans</p>
        </div>
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
          <p className="text-3xl font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">600+</p>
          <p className="text-mountain-600 dark:text-mountain-400 text-sm">Years of Heritage</p>
        </div>
      </div>

      {/* Clan Structure Info */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-12 border border-cream-200 dark:border-mountain-700 shadow-lg">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
          Clan Structure & Significance
        </h3>
        <div className="space-y-4">
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            The clan system plays a vital role in Sherpa society. Clan membership is patrilineal, 
            passed from father to children. <strong className="text-burgundy-700 dark:text-burgundy-400">&quot;Ru&quot;</strong> (meaning &quot;bones&quot; in Sherpa) 
            represents the ancestral lineage inherited through the male line.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Marriage within the same clan or sub-clan is traditionally prohibited, a practice that 
            strengthened inter-clan bonds and prevented genetic issues in the small mountain communities. 
            This exogamous marriage system ensured healthy genetic diversity while creating strong 
            alliances between different clan families.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Each clan carries its own history, legends, and specific traditions. During important 
            ceremonies, festivals, and rites of passage, clan identity remains central to how 
            Sherpas organize themselves and maintain their cultural heritage.
          </p>
        </div>
      </div>
    </div>
  );
}

function LifeTab() {
  return (
    <div className="space-y-12">
      {/* Traditional Life */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
            Life in the High Himalayas
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Traditional Sherpa life revolves around the rhythms of the
              mountains — the changing seasons, the migration of yak herds to
              high pastures in summer, and the agricultural cycles in the lower
              villages. This harmonious relationship with nature has shaped
              every aspect of Sherpa culture.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Homes are built of stone with wooden beams, designed to withstand
              harsh winters while providing warmth and shelter. The heart of
              every Sherpa home is the kitchen, where the family gathers around
              the hearth for meals, stories, and warmth.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpawomen.jpg"
            alt="Sherpa women in traditional life"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Women's Role */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpawoman.jpg"
            alt="Sherpa woman in traditional dress"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            The Role of Women
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Sherpa women have always been the backbone of their communities.
              While men often traveled for trade or expeditions, women managed
              households, farms, and children with remarkable strength and
              capability. They are equal partners in family decisions and
              community affairs.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Women are also the primary keepers of cultural traditions —
              teaching children songs, stories, and religious practices. Their
              skills in weaving, cooking traditional foods, and preparing
              ceremonial items are essential to maintaining Sherpa heritage.
            </p>
          </div>
        </div>
      </div>

      {/* Food & Cuisine */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
              Traditional Cuisine
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                Sherpa cuisine reflects the challenges and bounty of
                high-altitude living. Staples include tsampa (roasted barley
                flour), potatoes, and yak products — butter, cheese, and meat.
                The famous butter tea (po cha) provides essential calories and
                hydration in the cold climate.
              </p>
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                <strong>Riki Kur</strong> is a beloved traditional dish — a
                hearty stew of potatoes mixed with yak butter and cheese. Momos
                (dumplings), thukpa (noodle soup), and shakpa (meat and
                vegetable stew) are also central to Sherpa meals, especially
                during festivals and gatherings.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/sherpa/sherpa-food-Riki-Kur.jpg"
              alt="Traditional Sherpa food - Riki Kur"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                Riki Kur — Traditional Sherpa comfort food
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Life Aspects */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 border border-cream-200 dark:border-mountain-700 shadow-lg">
          <div className="w-12 h-12 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🏔️</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">
            Yak Herding
          </h4>
          <p className="text-mountain-600 dark:text-mountain-400">
            Yaks are essential to Sherpa life, providing milk, butter, meat,
            wool, and transportation. Families move with their herds to high
            pastures (kharka) during summer months.
          </p>
        </div>
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 border border-cream-200 dark:border-mountain-700 shadow-lg">
          <div className="w-12 h-12 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🌾</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">
            Agriculture
          </h4>
          <p className="text-mountain-600 dark:text-mountain-400">
            At lower elevations, Sherpas cultivate potatoes, barley, buckwheat,
            and vegetables. Terraced fields carved into mountainsides
            demonstrate their agricultural ingenuity.
          </p>
        </div>
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 border border-cream-200 dark:border-mountain-700 shadow-lg">
          <div className="w-12 h-12 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📿</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">
            Spiritual Practice
          </h4>
          <p className="text-mountain-600 dark:text-mountain-400">
            Daily life is interwoven with Buddhist practice — morning prayers,
            offerings at home shrines, circumambulating stupas, and visiting
            monasteries are integral to Sherpa daily routine.
          </p>
        </div>
      </div>
    </div>
  );
}

function TraditionTab() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12">
      {/* Buddhism */}
      <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
          Traditions & Spirituality
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          Sherpa culture is deeply rooted in Tibetan Buddhism, with traditions
          that guide every aspect of life from birth to death and beyond.
        </p>
      </div>

      {/* Religious Life */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            Buddhist Foundation
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Sherpa people follow the Nyingma school of Tibetan Buddhism,
              the oldest of the four major schools. Monasteries like Tengboche,
              Thame, and Pangboche serve as spiritual and cultural centers of
              the community.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Prayer flags flutter on every ridge, mani stones carved with
              sacred mantras line the trails, and the chant &quot;Om Mani Padme
              Hum&quot; echoes through the valleys. These visible expressions of
              faith are believed to spread blessings to all beings carried by
              the wind.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpa-expedition.jpg"
            alt="Sherpa spiritual and expedition traditions"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Festivals */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-12 shadow-lg">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-8 text-center">
          Major Festivals & Celebrations
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-burgundy-600 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">
              Losar (New Year)
            </h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              The most important Sherpa festival, celebrating the Sherpa New
              Year with prayers, feasting, dancing, and visiting friends and
              family. Houses are cleaned, special foods prepared, and new prayer
              flags hung to welcome the new year.
            </p>
          </div>
          <div className="border-l-4 border-gold-500 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">
              Dumji
            </h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A multi-day village festival honoring Guru Rinpoche
              (Padmasambhava), who brought Buddhism to the Himalayas. Features
              masked dances, rituals, and community celebrations that rotate
              between sponsoring families.
            </p>
          </div>
          <div className="border-l-4 border-mountain-500 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">
              Mani Rimdu
            </h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A spectacular three-day festival held at Tengboche and other
              monasteries in Solukhumbu area, featuring elaborate masked dances
              (chhyam) that depict the victory of Buddhism over evil. Attracts
              visitors from across the Himalayan region.
            </p>
          </div>
          <div className="border-l-4 border-burgundy-400 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">
              Nyungne
            </h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A purification ritual involving fasting, silence, and intensive
              prayer over several days. Participants dedicate their practice to
              the benefit of all sentient beings and the accumulation of
              spiritual merit.
            </p>
          </div>
        </div>
      </div>

      {/* Traditions */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpa-prayers.jpg"
            alt="Traditional Sherpa prayer ceremony"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            Sherpa Prayers
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Sherpas’ prayers to the small deities all around them are
              called Lha Chödub. Sherpas recite these prayers because it is
              important to reflect before beginning any task. For example, if
              you keep yourself and your home clean, you are less likely to fall
              ill. Similarly, if you pray, the deities will support you in your
              good endeavors. Even if your enemies wish you bad luck, their
              efforts will not succeed. During the third month, Sherpas pray for
              a good harvest. In the sixth month, they perform Yerchang, a
              ritual to bring luck to their herds and animals. Sherpas also
              offer prayers when building a new house or before embarking on a
              long journey. There are different deities to worship during life
              and others at the time of death. Shitro prayers are offered to two
              kinds of deities at once: Shiwa – kind and benevolent deities.
              Trowo – wrathful and fierce deities. The Thoedol describes these
              deities. Shitro may be performed for someone while they are still
              alive (Shitro Srog-ngo) or as part of their funeral rites. Nyungne
              is a special puja dedicated to Phakpa Chenrezig. This puja is
              performed on significant days, such as when the Buddha attained
              Dewachen (liberation). It may be conducted for the benefit of an
              entire village or within one’s home. During Nyungne, the
              participants—villagers, anis (nuns), and thrawas (monks)—follow
              strict practices: On the first day, they eat only one meal but
              abstain from meat and chang (local beer). On the following two
              days, they observe complete fasting—no food, water, or even
              swallowing saliva—and maintain absolute silence. Throughout the
              three days, they engage in prostrations and prayers.
            </p>
          </div>
        </div>
      </div>

      {/* Life Ceremonies */}
      <div className="grid md:grid-cols-3 gap-6">
        <ExpandableCard
          title="Birth Ceremonies"
          shortText="Babies are named by lamas who consult astrological charts. A naming ceremony welcomes the child to the community, often with the name reflecting auspicious meanings or the day of birth."
          fullText="Babies are named by lamas who consult astrological charts. A naming ceremony welcomes the child to the community, often with the name reflecting auspicious meanings or the day of birth."
          gradientClasses="bg-white dark:bg-mountain-800/50"
          borderClasses="border-cream-200 dark:border-mountain-700"
          id="birth-ceremonies"
          isExpanded={expandedCard === "birth-ceremonies"}
          onToggle={handleToggle}
        />
        <ExpandableCard
          title="Marriage Customs"
          shortText="A Sherpa wedding consists of several stages: Sodene – the engagement or proposal. Demchang – the formal agreement, which sets the year and month of the final ceremony. Pechang – the consultation to determine the exact date of the wedding..."
          fullText="A Sherpa wedding consists of several stages: Sodene – the engagement or proposal. Demchang – the formal agreement, which sets the year and month of the final ceremony. Pechang – the consultation to determine the exact date of the wedding. Zendi – the final ceremony, during which the bride moves into the groom's home. For the Sodene, the local village lama is invited to the groom's house to perform a puja called Serkim. The groom's relatives gather for a meal before going to the bride's house to formally propose. They bring chang (rice beer) specially brewed for the occasion. If the bride and her parents accept the proposal, the Zendi ceremony is scheduled anytime between one month and two years later. A special day is chosen, and the families call the ngagpa (village lama) to perform the puja for the Zendi. The Zendi begins with the Lhapsang puja, first conducted at the groom's house. His family prepares tso (special cones of cooked rice) and displays the kholu (a flag symbolizing the wheel of life). All of his relatives gather to eat and drink. Then, the procession moves to the bride's house, carrying more special chang, which they present to her parents and relatives. While offering the chang, they pray to Guru Rinpoche and present kattas (white ceremonial scarves) to her family. A representative from each family then formally introduces the families and offers blessings for good fortune. The village lamas compose a speech for this occasion, known as the mola, which must be read by an experienced speaker. The bride's family gifts her presents and property as part of her official inheritance. A group of carefully chosen young women—who have both parents and are considered lucky—carry these belongings in a procession to the groom's home. Along the way, the groom's relatives and neighbors meet the procession at designated points to welcome the couple and present chang and kattas. This welcoming tradition is repeated when they arrive at the groom's house."
          gradientClasses="bg-white dark:bg-mountain-800/50"
          borderClasses="border-cream-200 dark:border-mountain-700"
          id="marriage-customs"
          isExpanded={expandedCard === "marriage-customs"}
          onToggle={handleToggle}
        />
        <ExpandableCard
          title="Sherpa Funerals"
          shortText="The sem is the mind of a person, while the loong is the energy of their mind. After death, the loong (energy) leaves the body but continues to exist. When a person dies, a lama is called to perform Phowa, a ritual aimed at guiding the spirit..."
          fullText="The sem is the mind of a person, while the loong is the energy of their mind. After death, the loong (energy) leaves the body but continues to exist. When a person dies, a lama is called to perform Phowa, a ritual aimed at guiding the spirit. The lama performing Phowa must merge his energy with that of the deceased to generate positive energy for their transition. He uses prayers and pulls the deceased's hair to encourage the spirit to leave through the head. A person's body heat may exit from various points, such as the soles of the feet, hands, eyes, ears, nose, mouth, or the top of the head. The spirit follows the path of this exit. If it leaves through the front or back passages, it is believed to lead to an unfortunate rebirth. Exiting through the nose or eyes may result in rebirth as either an animal or a human. However, if the spirit departs through the crown of the head, it may reach Dewachen (a pure realm). The lama conducting Phowa must be well-practiced in meditation to direct the spirit toward the head and prevent it from leaving through undesirable pathways. Later, lamas sit by the body and read the Thoedol—instructions guiding the spirit on which path to follow in the afterlife. They continue praying and offer tsog (ritual offerings). Funeral customs vary, but typically, the body is kept for three days before being taken to the cremation site. After being washed, the body is cremated as an offering to the deities. Special prayers, called Dum, are conducted every seven days following the death. Depending on the family's financial situation, these prayers can continue for up to fifteen days. A Shitro ritual is also performed to purify and gain merit for the deceased's spirit. Even if a person has never practiced meditation in their lifetime, Shitro is believed to cleanse their spirit. For example, if gold is dirty and blackened, heating and cleaning it can restore its shine. Similarly, our minds are unstable, clouded by desires and aversions—like dirt on a window. Through prayers, meditation, and Shitro rituals, we can cleanse this 'window' to perceive ourselves more clearly. Each evening, the family places sur (an offering of tsampa) on hot coals as food for the spirit of the deceased. The Bar-do is the state of existence between lives. By the end of 49 days after death, the person's next life is determined, and they may be reborn. When a child under the age of eight passes away, a special funeral called Len-chang torma is performed for the child's benefit and that of the parents. During the ceremony, tormas and tsampa food pellets are replaced hourly during prayer repetitions. The funeral lasts between three and four days, sometimes extending to fifteen. Dung-chog is a puja (ritual) performed for high lamas. While it appears similar to Phowa, its purpose differs. Dung-chog is conducted later to allow the lama's mind and energy to disengage. This energy is believed to travel to a deity's pure realm, from where it may reincarnate. The Dung-chog puja helps smooth the path this energy must follow."
          gradientClasses="bg-white dark:bg-mountain-800/50"
          borderClasses="border-cream-200 dark:border-mountain-700"
          id="sherpa-funerals"
          isExpanded={expandedCard === "sherpa-funerals"}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

function FamilyTreeTab() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
          Preserving Our Roots, One Generation at a Time
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          Explore a beautifully detailed family tree capturing generations of
          Sherpa history and heritage
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="bg-white dark:bg-mountain-800/50 rounded-3xl p-8 md:p-12 border border-cream-200 dark:border-mountain-700 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
            {/* Tree Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-burgundy-600/30 transform rotate-3">
                <svg
                  className="w-16 h-16 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v18m0-18c-3 3-6 3-9 0m9 0c3 3 6 3 9 0m-9 6c-2 2-4 2-6 0m6 0c2 2 4 2 6 0m-6 6c-1.5 1.5-3 1.5-4.5 0m4.5 0c1.5 1.5 3 1.5 4.5 0"
                  />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-mountain-900 dark:text-white mb-3">
                Sherpa Tribal Family Tree
              </h3>
              <p className="text-mountain-600 dark:text-mountain-400 mb-4">
                Created by{" "}
                <strong className="text-burgundy-700 dark:text-burgundy-400">
                  Thukten Philip Sherpa
                </strong>
                , a dedicated member and advisor of the Himalayan Sherpa Club of
                Sonoma
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-mountain-800 rounded-full shadow">
                  <svg
                    className="w-4 h-4 text-green-600"
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
                  Launched: Nov 1, 2010
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-mountain-800 rounded-full shadow">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Updated: Apr 9, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed text-lg">
              This rich archive contains{" "}
              <strong className="text-mountain-900 dark:text-white">
                9,127 relatives
              </strong>{" "}
              and
              <strong className="text-mountain-900 dark:text-white">
                {" "}
                7,628 photos
              </strong>
              , capturing generations of Sherpa history and heritage.
              Thukten&apos;s heartfelt journey began with inspiration from his
              father and contributions from fellow Sherpas. This project honors
              the language, culture, and identity of the Sherpa people,
              reconnecting families across borders.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://khumjung.tribalpages.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-burgundy-600/30 hover:shadow-2xl hover:shadow-burgundy-600/40 hover:-translate-y-1"
            >
              <span>Visit the Sherpa Tribal Family Tree</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-mountain-900 dark:bg-mountain-800 rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="tree-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#tree-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              About the Sherpa Tribal Family Tree
            </h3>
            <p className="text-burgundy-400 font-medium">
              A Message from the Creator
            </p>
          </div>

          {/* Quote */}
          <div className="relative">
            <svg
              className="absolute -top-4 -left-2 w-12 h-12 text-gold-500/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-cream-100 text-lg md:text-xl leading-relaxed italic pl-8">
              <p className="mb-6">
                This project began with my father&apos;s words in 1989—reminding
                me how important it is to know our roots. Inspired by the
                efforts of others and driven by the desire to preserve our
                identity, I created this page to document the stories, names,
                and connections that make up our Sherpa heritage.
              </p>
              <p className="mb-8">
                It&apos;s not just a family tree—it&apos;s a living archive of
                who we are, where we come from, and how we&apos;re all
                connected. I invite everyone to explore, contribute, and help
                keep our history alive for future generations.
              </p>
            </blockquote>
            <footer className="flex items-center gap-4 pl-8">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-mountain-900 font-bold text-lg">
                TP
              </div>
              <div>
                <cite className="not-italic font-bold text-white text-lg">
                  Thukten Philip Sherpa
                </cite>
                <p className="text-cream-300 text-sm">
                  Creator & Curator of the Sherpa Tribal Family Tree
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { value: "9,127", label: "Relatives Documented", icon: "👥" },
          { value: "7,628", label: "Photos Archived", icon: "📸" },
          { value: "15+", label: "Years of Work", icon: "⏳" },
          { value: "∞", label: "Generations Connected", icon: "🔗" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="text-3xl mb-2 block">{stat.icon}</span>
            <p className="text-2xl md:text-3xl font-bold text-burgundy-700 dark:text-burgundy-400 mb-1">
              {stat.value}
            </p>
            <p className="text-mountain-600 dark:text-mountain-400 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* How to Contribute */}
      <div className="bg-cream-50 dark:bg-mountain-800/50 rounded-2xl p-8 md:p-10 border border-cream-200 dark:border-mountain-700">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h4 className="text-xl font-bold text-mountain-900 dark:text-white mb-2">
              Want to Contribute Your Family Information?
            </h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              Help grow this living archive by adding your family&apos;s
              stories, photos, and connections. Visit the family tree website to
              explore and contribute.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://khumjung.tribalpages.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
            >
              <span>Explore & Contribute</span>
              <svg
                className="w-5 h-5"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CultureTab() {
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
      timing: 'October | November',
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

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="font-tibetan text-xl text-burgundy-600 dark:text-burgundy-400 mb-4">༄༅། ཤར་པའི་རིག་གཞུང་།</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
          Sherpa Culture
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          The Sherpa people originate from the Khumbu region of Nepal, in the shadow of Mount 
          Everest. Our culture is defined by our deep Buddhist faith, legendary mountaineering 
          heritage, and warm hospitality. At the Himalayan Sherpa Club of Sonoma, we work to 
          preserve and share these treasured traditions with new generations and our broader community.
        </p>
      </div>

      {/* Cultural Aspects Grid */}
      <div>
        <div className="text-center mb-8">
          <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
            Our Heritage
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50">
            Pillars of Sherpa Culture
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalAspects.map((aspect) => (
            <div
              key={aspect.title}
              className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-200 dark:border-mountain-700"
            >
              <div className="w-14 h-14 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">{aspect.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2">
                {aspect.title}
              </h4>
              <p className="text-mountain-600 dark:text-mountain-300 text-sm">
                {aspect.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Festivals Section */}
      <div>
        <div className="text-center mb-8">
          <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
            Celebrate With Us
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
            Festivals & Celebrations
          </h3>
          <p className="text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto">
            Our festivals are vibrant expressions of faith, community, and tradition. Join us in celebrating these special occasions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {festivals.map((festival) => (
            <div
              key={festival.name}
              className="group bg-white dark:bg-mountain-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-200 dark:border-mountain-700"
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
                <h4 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2">
                  {festival.name}
                </h4>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">
                  {festival.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Preservation */}
      <div className="bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gold-400 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Mission
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Preserving Our Heritage
            </h3>
            <div className="space-y-4 text-cream-200">
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
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/sherpa/sherpa-children.png"
              alt="Children learning Sherpa traditions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Traditional Arts */}
      <div>
        <div className="text-center mb-8">
          <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
            Artisan Heritage
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50">
            Traditional Arts & Crafts
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white dark:bg-mountain-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-200 dark:border-mountain-700">
            <div className="w-16 h-16 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2">
              Thangka Painting
            </h4>
            <p className="text-mountain-600 dark:text-mountain-300 text-sm">
              Intricate Buddhist scroll paintings depicting deities, mandalas, and religious scenes, created using traditional techniques.
            </p>
          </div>
          <div className="text-center bg-white dark:bg-mountain-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-200 dark:border-mountain-700">
            <div className="w-16 h-16 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧶</span>
            </div>
            <h4 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2">
              Weaving & Textiles
            </h4>
            <p className="text-mountain-600 dark:text-mountain-300 text-sm">
              Hand-woven fabrics featuring traditional patterns, used for clothing, blankets, and ceremonial items.
            </p>
          </div>
          <div className="text-center bg-white dark:bg-mountain-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-200 dark:border-mountain-700">
            <div className="w-16 h-16 mx-auto mb-4 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏺</span>
            </div>
            <h4 className="text-lg font-bold text-mountain-900 dark:text-cream-50 mb-2">
              Metalwork & Jewelry
            </h4>
            <p className="text-mountain-600 dark:text-mountain-300 text-sm">
              Traditional silver jewelry, prayer wheels, and ritual objects crafted with ancestral methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
