'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  { id: 'history', label: 'History' },
  { id: 'clans', label: 'Clans' },
  { id: 'life', label: 'Life' },
  { id: 'tradition', label: 'Tradition' },
  { id: 'family-tree', label: 'Family Tree' },
];

export default function SherpaPage() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">ཤར་པ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            The Sherpa People
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Guardians of the Himalayas — A legacy of resilience, spirituality, and mountaineering excellence
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-white dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
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
                    ? 'bg-burgundy-700 text-white shadow-lg'
                    : 'text-mountain-600 dark:text-mountain-300 hover:bg-cream-100 dark:hover:bg-mountain-800 hover:text-burgundy-700 dark:hover:text-burgundy-400'
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
          {activeTab === 'history' && <HistoryTab />}
          {activeTab === 'clans' && <ClansTab />}
          {activeTab === 'life' && <LifeTab />}
          {activeTab === 'tradition' && <TraditionTab />}
          {activeTab === 'family-tree' && <FamilyTreeTab />}
        </div>
      </section>

      {/* Citation */}
      <section className="py-8 bg-cream-100 dark:bg-mountain-900 border-t border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <p className="text-sm text-mountain-600 dark:text-mountain-400 italic text-center max-w-4xl mx-auto">
            Some content on this page is adapted from the book <em className="font-medium">Story and Customs of the Sherpas</em> by Frances Klatzel, 
            based on the stories told by Tengboche Rinpoche, Ngawang Tenzin Zangbu. All rights belong to the original authors.
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
          <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
            Origin of the Sherpa People
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Sherpa people trace their origins to the Kham region of eastern Tibet. Approximately 600 years ago, 
              they migrated across the Himalayan passes to settle in the Solukhumbu region of Nepal. Their name, 
              &quot;Shar-Pa,&quot; literally translates to &quot;people from the east&quot; — a testament to their ancestral homeland.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              This historic migration was driven by the search for peaceful lands where they could practice their 
              Buddhist faith freely. Led by spiritual leaders and guided by ancient prophecies, the early Sherpas 
              crossed treacherous mountain passes at elevations over 19,000 feet, carrying their traditions, 
              religious texts, and way of life into the high valleys of Nepal.
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
            Upon arriving in Solukhumbu, the Sherpas established villages at elevations between 9,000 and 14,000 feet — 
            some of the highest permanent settlements on Earth. They developed a unique economy based on high-altitude 
            agriculture, yak herding, and trans-Himalayan trade between Tibet and the lowlands of Nepal and India.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Their adaptation to the extreme altitude gave them remarkable physiological advantages, including 
            enhanced oxygen-carrying capacity in their blood. This biological adaptation, combined with their 
            intimate knowledge of mountain terrain, would later establish them as the world&apos;s most renowned 
            high-altitude guides and mountaineers.
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
              Sir Edmund Hillary with Sherpa mountaineers — a partnership that changed history
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            The Mountaineering Era
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The 20th century brought Western explorers to the Himalayas, and with them came new opportunities 
              for the Sherpa people. Their unmatched skills in navigating high-altitude terrain, combined with 
              their strength, reliability, and cheerful disposition, made them indispensable to expeditions.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              In 1953, Tenzing Norgay Sherpa and Sir Edmund Hillary became the first confirmed climbers to reach 
              the summit of Mount Everest. This historic achievement brought global recognition to the Sherpa 
              people and established their legendary reputation as the &quot;Tigers of the Snow.&quot;
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Today, Sherpas continue to lead expeditions on the world&apos;s highest peaks, holding numerous 
              records for Everest summits and high-altitude achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Global Diaspora */}
      <div className="bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/20 dark:to-gold-900/20 rounded-2xl p-8 md:p-12 border border-burgundy-100 dark:border-burgundy-800">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
          The Global Sherpa Diaspora
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            From the high valleys of the Himalayas, Sherpas have journeyed across the world, bringing their 
            unique culture, work ethic, and warm hospitality to communities everywhere. Today, significant 
            Sherpa populations thrive in cities across North America, Europe, and beyond.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Here in Sonoma County, California, our Sherpa community has planted deep roots while maintaining 
            strong connections to our Himalayan heritage. The Himalayan Sherpa Club serves as a bridge between 
            generations, ensuring that our children know their ancestry while contributing to our adopted homeland.
          </p>
        </div>
      </div>
    </div>
  );
}

function ClansTab() {
  const clans = [
    { name: 'Thami Chhawa', description: 'One of the ancient founding clans, associated with the Thami region.' },
    { name: 'Shangbu Chhawa', description: 'A prominent clan with roots in Buddhist monasticism.' },
    { name: 'Sholu Chhawa', description: 'From the Solu region, known for agricultural traditions.' },
    { name: 'Khambu Chhawa', description: 'Tracing direct lineage to the Kham region of Tibet.' },
    { name: 'Lhapa Chhawa', description: 'Known for their spiritual and healing traditions.' },
    { name: 'Yawa Chhawa', description: 'Associated with the yak-herding traditions of high pastures.' },
    { name: 'Mindok Chhawa', description: 'A clan with strong trading heritage.' },
    { name: 'Chusherwa Chhawa', description: 'From water-blessed valleys, known for their resilience.' },
    { name: 'Goparma Chhawa', description: 'Guardians of sacred locations.' },
    { name: 'Gardza Chhawa', description: 'Associated with protective traditions.' },
    { name: 'Pinasa Chhawa', description: 'Known for artistic and cultural contributions.' },
    { name: 'Paldorje Chhawa', description: 'Linked to religious scholarly traditions.' },
    { name: 'Pankarma Chhawa', description: 'Traders and community builders.' },
    { name: 'Salaka Chhawa', description: 'Known for craftsmanship.' },
    { name: 'Serwa Chhawa', description: 'Associated with gold and prosperity.' },
    { name: 'Nawa Chhawa', description: 'Newcomer clan, showing the community&apos;s growth.' },
    { name: 'Murmin Chhawa', description: 'Agricultural specialists.' },
    { name: 'Chyawa Chhawa', description: 'Known for their hospitality traditions.' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
          The Eighteen Original Clans
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          The Sherpa community is organized into eighteen original clans, called &quot;Ru&quot; or &quot;Chhawa,&quot; 
          each tracing their lineage to the ancient families who first migrated from Tibet. These clans 
          form the foundation of Sherpa social structure and identity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clans.map((clan, index) => (
          <div
            key={clan.name}
            className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-burgundy-600"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 font-bold text-sm">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-mountain-900 dark:text-white mb-2">{clan.name}</h3>
                <p className="text-sm text-mountain-600 dark:text-mountain-400">{clan.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/20 dark:to-gold-900/20 rounded-2xl p-8 md:p-12 border border-burgundy-100 dark:border-burgundy-800">
        <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
          Clan Structure & Significance
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            The clan system plays a vital role in Sherpa society. Clan membership is patrilineal, passed 
            from father to children. Marriage within the same clan is traditionally prohibited, a practice 
            that strengthened inter-clan bonds and prevented genetic issues in the small mountain communities.
          </p>
          <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
            Each clan carries its own history, legends, and specific traditions. During important ceremonies, 
            festivals, and rites of passage, clan identity remains central to how Sherpas organize themselves 
            and maintain their cultural heritage.
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
          <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
            Life in the High Himalayas
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Traditional Sherpa life revolves around the rhythms of the mountains — the changing seasons, 
              the migration of yak herds to high pastures in summer, and the agricultural cycles in the 
              lower villages. This harmonious relationship with nature has shaped every aspect of Sherpa culture.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Homes are built of stone with wooden beams, designed to withstand harsh winters while providing 
              warmth and shelter. The heart of every Sherpa home is the kitchen, where the family gathers 
              around the hearth for meals, stories, and warmth.
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
              Sherpa women have always been the backbone of their communities. While men often traveled for 
              trade or expeditions, women managed households, farms, and children with remarkable strength 
              and capability. They are equal partners in family decisions and community affairs.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Women are also the primary keepers of cultural traditions — teaching children songs, stories, 
              and religious practices. Their skills in weaving, cooking traditional foods, and preparing 
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
                Sherpa cuisine reflects the challenges and bounty of high-altitude living. Staples include 
                tsampa (roasted barley flour), potatoes, and yak products — butter, cheese, and meat. 
                The famous butter tea (po cha) provides essential calories and hydration in the cold climate.
              </p>
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                <strong>Riki Kur</strong> is a beloved traditional dish — a hearty stew of potatoes mixed 
                with yak butter and cheese. Momos (dumplings), thukpa (noodle soup), and shakpa (meat and 
                vegetable stew) are also central to Sherpa meals, especially during festivals and gatherings.
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
              <p className="text-white text-sm font-medium">Riki Kur — Traditional Sherpa comfort food</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Life Aspects */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-burgundy-50 to-cream-50 dark:from-burgundy-900/20 dark:to-mountain-800/50 rounded-xl p-6 border border-burgundy-100 dark:border-burgundy-800">
          <div className="w-12 h-12 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🏔️</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">Yak Herding</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            Yaks are essential to Sherpa life, providing milk, butter, meat, wool, and transportation. 
            Families move with their herds to high pastures (kharka) during summer months.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gold-50 to-cream-50 dark:from-gold-900/20 dark:to-mountain-800/50 rounded-xl p-6 border border-gold-100 dark:border-gold-800">
          <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🌾</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">Agriculture</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            At lower elevations, Sherpas cultivate potatoes, barley, buckwheat, and vegetables. 
            Terraced fields carved into mountainsides demonstrate their agricultural ingenuity.
          </p>
        </div>
        <div className="bg-gradient-to-br from-mountain-50 to-cream-50 dark:from-mountain-700/20 dark:to-mountain-800/50 rounded-xl p-6 border border-mountain-100 dark:border-mountain-700">
          <div className="w-12 h-12 bg-mountain-100 dark:bg-mountain-700/50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📿</span>
          </div>
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">Spiritual Practice</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            Daily life is interwoven with Buddhist practice — morning prayers, offerings at home shrines, 
            circumambulating stupas, and visiting monasteries are integral to Sherpa daily routine.
          </p>
        </div>
      </div>
    </div>
  );
}

function TraditionTab() {
  return (
    <div className="space-y-12">
      {/* Buddhism */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
          Traditions & Spirituality
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          Sherpa culture is deeply rooted in Tibetan Buddhism, with traditions that guide every aspect 
          of life from birth to death and beyond.
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
              The Sherpa people follow the Nyingma school of Tibetan Buddhism, the oldest of the four 
              major schools. Monasteries like Tengboche, Thame, and Pangboche serve as spiritual and 
              cultural centers of the community.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Prayer flags flutter on every ridge, mani stones carved with sacred mantras line the trails, 
              and the chant &quot;Om Mani Padme Hum&quot; echoes through the valleys. These visible expressions 
              of faith are believed to spread blessings to all beings carried by the wind.
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
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">Losar (New Year)</h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              The most important Sherpa festival, celebrating the Tibetan New Year with prayers, feasting, 
              dancing, and visiting friends and family. Houses are cleaned, special foods prepared, and 
              new prayer flags hung to welcome the new year.
            </p>
          </div>
          <div className="border-l-4 border-gold-500 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">Dumji</h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A multi-day village festival honoring Guru Rinpoche (Padmasambhava), who brought Buddhism 
              to the Himalayas. Features masked dances, rituals, and community celebrations that rotate 
              between sponsoring families.
            </p>
          </div>
          <div className="border-l-4 border-mountain-500 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">Mani Rimdu</h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A spectacular three-day festival held at Tengboche and other monasteries, featuring 
              elaborate masked dances (cham) that depict the victory of Buddhism over evil. Attracts 
              visitors from across the Himalayan region.
            </p>
          </div>
          <div className="border-l-4 border-burgundy-400 pl-6">
            <h4 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">Nyungne</h4>
            <p className="text-mountain-600 dark:text-mountain-400">
              A purification ritual involving fasting, silence, and intensive prayer over several days. 
              Participants dedicate their practice to the benefit of all sentient beings and the 
              accumulation of spiritual merit.
            </p>
          </div>
        </div>
      </div>

      {/* Funeral Traditions */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sherpa/sherpa-funeral.jpeg"
            alt="Traditional Sherpa funeral ceremony"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            Death & Funeral Traditions
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Sherpa funeral traditions reflect deep Buddhist beliefs about death, impermanence, and rebirth. 
              When a person dies, lamas are called to perform prayers and rituals to guide the soul through 
              the bardo (intermediate state) toward a favorable rebirth.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Traditional sky burials, cremation, or burial are practiced depending on circumstances and 
              the family&apos;s wishes. Prayers continue for 49 days after death, marking the soul&apos;s journey. 
              Memorial ceremonies are held on anniversaries, and families often sponsor prayer ceremonies 
              at monasteries for the benefit of the deceased.
            </p>
          </div>
        </div>
      </div>

      {/* Life Ceremonies */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-burgundy-50 to-cream-50 dark:from-burgundy-900/20 dark:to-mountain-800/50 rounded-xl p-6 border border-burgundy-100 dark:border-burgundy-800">
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">Birth Ceremonies</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            Babies are named by lamas who consult astrological charts. A naming ceremony welcomes the 
            child to the community, often with the name reflecting auspicious meanings or the day of birth.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gold-50 to-cream-50 dark:from-gold-900/20 dark:to-mountain-800/50 rounded-xl p-6 border border-gold-100 dark:border-gold-800">
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">Marriage Customs</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            Traditional marriages involve elaborate negotiations between families, auspicious date selection, 
            and multi-day celebrations with feasting, chang (local beer), and dancing.
          </p>
        </div>
        <div className="bg-gradient-to-br from-mountain-50 to-cream-50 dark:from-mountain-700/20 dark:to-mountain-800/50 rounded-xl p-6 border border-mountain-100 dark:border-mountain-700">
          <h4 className="font-bold text-mountain-900 dark:text-white mb-3">House Blessings</h4>
          <p className="text-sm text-mountain-600 dark:text-mountain-400">
            New homes are blessed by lamas with prayers and rituals. Sacred symbols are placed above 
            doorways, and juniper smoke purifies the space to welcome positive energies.
          </p>
        </div>
      </div>
    </div>
  );
}

function FamilyTreeTab() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
          Sherpa Family Tree Project
        </h2>
        <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
          Preserving our ancestral connections for future generations
        </p>
      </div>

      <div className="bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/20 dark:to-gold-900/20 rounded-2xl p-8 md:p-12 border border-burgundy-100 dark:border-burgundy-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🌳</span>
          </div>
          <h3 className="text-2xl font-bold text-mountain-900 dark:text-white mb-6">
            Coming Soon: Interactive Family Tree
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none text-center">
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Himalayan Sherpa Club is developing a comprehensive family tree project to document 
              and preserve the genealogical connections of Sherpa families in our community and beyond. 
              This interactive tool will help members trace their ancestry and connect with relatives 
              across the global Sherpa diaspora.
            </p>
            <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
              Our goal is to create a living document that grows with each generation, ensuring that 
              our children and grandchildren can understand their heritage and the network of family 
              relationships that bind our community together.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-mountain-900 dark:text-white mb-4">
            Project Goals
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">✓</span>
              <span className="text-mountain-600 dark:text-mountain-400">Document family lineages of Sonoma Sherpa families</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">✓</span>
              <span className="text-mountain-600 dark:text-mountain-400">Connect with ancestral villages in Solukhumbu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">✓</span>
              <span className="text-mountain-600 dark:text-mountain-400">Preserve stories and photos of ancestors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">✓</span>
              <span className="text-mountain-600 dark:text-mountain-400">Create searchable database by clan affiliation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center text-burgundy-700 dark:text-burgundy-400 text-sm">✓</span>
              <span className="text-mountain-600 dark:text-mountain-400">Enable members to contribute their family information</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-mountain-900 dark:text-white mb-4">
            How to Participate
          </h4>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-mountain-600 dark:text-mountain-400 leading-relaxed mb-4">
              We invite all Sherpa families to contribute to this important cultural preservation project. 
              Your participation helps build a comprehensive record for future generations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-burgundy-600 dark:text-burgundy-400">1.</span>
                <span className="text-mountain-600 dark:text-mountain-400">Gather information about your family tree</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy-600 dark:text-burgundy-400">2.</span>
                <span className="text-mountain-600 dark:text-mountain-400">Collect old photographs and documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy-600 dark:text-burgundy-400">3.</span>
                <span className="text-mountain-600 dark:text-mountain-400">Record stories from elder family members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-burgundy-600 dark:text-burgundy-400">4.</span>
                <span className="text-mountain-600 dark:text-mountain-400">Contact us to submit your information</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
        >
          <span>Contact Us to Contribute</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
