'use client';

import Image from 'next/image';

const achievements = [
  {
    title: 'Winner Himalayan Cup 2018',
    description: 'HSFC secured their first Himalayan Cup title in 2017 with a hard-fought victory over Creative Nepal Youth Center, triumphing 4-3 in a highly competitive match held at Adele Harrison Middle School Field. This milestone victory marked a significant achievement in the club\'s history, showcasing their skill, determination, team spirit, and huge support from their community.',
    type: 'winner',
  },
  {
    title: 'Winner Sonoma Running Cup 2022 | Runner Up 2023',
    description: 'In 2022, HSFC claimed their second trophy by winning the Sonoma Running Cup, a tournament organized by the Lions Club of Sonoma County, securing a 4-3 victory over Santa Rosa FC (SRFC) in a thrilling final. The following year, they finished as runners-up in the 2023 edition, falling 4-2 in the final against Santa Rosa FC, demonstrating their continued competitive presence in the tournament.',
    type: 'winner',
  },
  {
    title: 'Runner Up Himalayan Cup 2017 & 2022',
    description: 'HSFC finished as runners-up in the Himalayan Cup on two occasions, falling short in the 2017 final against EBU and again in 2022 against Aviyan Bay Area. Both finals were held in Sonoma during the Labor Day weekend, highlighting the team\'s consistent competitive performance in the tournament.',
    type: 'runner-up',
  },
  {
    title: 'Aviyan Bay Area Cup Winner 2023 (35+)',
    description: 'HSFC\'s 35+ team secured first position in Aviyan Bay Area Cup in 2023.',
    type: 'winner',
  },
  {
    title: 'President Cup 2023 Winner (35+)',
    description: 'HSFC\'s 35+ team secured first position in President Cup in 2023 beating LA Gurans FC.',
    type: 'winner',
  },
  {
    title: 'Dashain Khasi Cup (30+) Winner',
    description: 'HSFC\'s 30+ team won the Dashain Khasi Cup, held in San Francisco on the occasion of Nepali festival of Dashain.',
    type: 'winner',
  },
  {
    title: 'President Cup 2024 Runner Up (35+)',
    description: 'HSFC\'s 35+ team finished as runners-up in the President Cup 2024.',
    type: 'runner-up',
  },
];

const tournaments = [
  'NAC Tournaments',
  'Gurkha League',
  'Gurkha Cup',
  'Himalayan Cup',
  'Dashain & Tihar Cup',
  'Sonoma Running Cup',
];

export default function HSFCPage() {
  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/images/hsfc/hsfc-logo.png"
              alt="HSFC Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Himalayan Sonoma Football Club
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Unity, Strength, and Friendship for the Community
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-950" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-6">
                About HSFC
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-6">
                  The <strong className="text-green-700 dark:text-green-400">Himalayan Sonoma Football Club (HSFC)</strong> was 
                  founded in 2014 by Mr. Pemba T. Sherpa and a group of young Sherpa individuals from Sonoma. The club&apos;s 
                  mission is to unite the Himalayan communities and foster strength and friendship among them.
                </p>
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-6">
                  With over <strong>30 players ranging from ages 15 to 65</strong>, HSFC is an inclusive soccer club open 
                  to all members of the Himalayan communities. While affiliated with the Himalayan Sherpa Club of Sonoma, 
                  HSFC operates independently, managed by a team of volunteers, professionals, and players.
                </p>
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                  The club holds training sessions on <strong>Saturday and Sunday mornings</strong> and participates in 
                  various leagues and tournaments throughout the year.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hsfc/team.jpg"
                alt="HSFC Team Photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium text-lg">HSFC Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-cream-50 dark:from-green-900/20 dark:to-mountain-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              Our Mission & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-8 text-center shadow-lg border border-green-100 dark:border-green-800">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl text-mountain-900 dark:text-white mb-3">Unity</h3>
              <p className="text-mountain-600 dark:text-mountain-400">
                Bringing together Himalayan communities through the love of the beautiful game, 
                creating bonds that extend beyond the pitch.
              </p>
            </div>
            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-8 text-center shadow-lg border border-green-100 dark:border-green-800">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-bold text-xl text-mountain-900 dark:text-white mb-3">Strength</h3>
              <p className="text-mountain-600 dark:text-mountain-400">
                Building physical fitness, mental resilience, and community strength through 
                teamwork, training, and competitive play.
              </p>
            </div>
            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-8 text-center shadow-lg border border-green-100 dark:border-green-800">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-bold text-xl text-mountain-900 dark:text-white mb-3">Friendship</h3>
              <p className="text-mountain-600 dark:text-mountain-400">
                Fostering lasting friendships among players, families, and supporters, 
                creating a supportive community for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments & Leagues */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              Tournaments & Leagues
            </h2>
            <p className="text-lg text-mountain-700 dark:text-mountain-300">
              HSFC participates in various competitive leagues and tournaments throughout the year
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {tournaments.map((tournament) => (
              <div
                key={tournament}
                className="bg-white dark:bg-mountain-800 rounded-xl p-6 text-center shadow-md border border-cream-200 dark:border-mountain-700 hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mb-2 block">⚽</span>
                <p className="font-medium text-mountain-900 dark:text-white">{tournament}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream-50 to-green-50 dark:from-mountain-900 dark:to-green-900/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              🏆 Honors & Achievements
            </h2>
            <p className="text-lg text-mountain-700 dark:text-mountain-300">
              In a short time, HSFC has achieved significant success thanks to the dedication of its 
              coaches, volunteers, players, parents, and management team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-mountain-800 rounded-xl p-6 shadow-lg border-l-4 ${
                  achievement.type === 'winner'
                    ? 'border-l-gold-500'
                    : 'border-l-gray-400'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.type === 'winner'
                      ? 'bg-gold-100 dark:bg-gold-900/50'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <span className="text-2xl">
                      {achievement.type === 'winner' ? '🥇' : '🥈'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-mountain-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-mountain-600 dark:text-mountain-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-white dark:bg-mountain-900">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the HSFC Family!
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              We heartily welcome interested individuals to join our Football Club. Whether you&apos;re 
              a seasoned player or just starting out, there&apos;s a place for you on our team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-800 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg"
              >
                Contact Us to Join
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <p className="text-green-200 text-sm mt-6">
              Training sessions: Saturday & Sunday mornings
            </p>
          </div>
        </div>
      </section>

      {/* Club Info */}
      <section className="py-12 bg-cream-100 dark:bg-mountain-800 border-t border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">30+</p>
              <p className="text-mountain-600 dark:text-mountain-400">Active Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">15-65</p>
              <p className="text-mountain-600 dark:text-mountain-400">Age Range</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">Since 2014</p>
              <p className="text-mountain-600 dark:text-mountain-400">Established</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
