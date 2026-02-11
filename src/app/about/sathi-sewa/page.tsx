'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Yangjum Sherpa, BS',
    degree: 'Molecular & Cell Biology',
    school: 'UC Santa Cruz 2022',
    image: '/images/sathi-sewa/yangjum.jpeg',
  },
  {
    name: 'Pemba Lhaki Sherpa, BS',
    degree: 'Biochemistry & Molecular Biology',
    school: 'UC Davis 2022',
    image: '/images/sathi-sewa/pemba-lhaki.jpg',
  },
  {
    name: 'Nima Nuru Sherpa, BS',
    degree: 'Global Disease Biology',
    school: 'UC Davis 2022',
    image: '/images/sathi-sewa/nima-nuru.jpg',
  },
  {
    name: 'Tenzing Sherpa, BA',
    degree: 'Molecular & Cell Biology',
    school: 'UC Berkeley 2023',
    image: '/images/sathi-sewa/tenzing-sherpa.jpg',
  },
];

const services = [
  {
    title: 'Medical Translation & Interpretation',
    description: 'Need help understanding a doctor\'s instructions, filling out forms, or talking to a healthcare provider? We offer free medical translation and interpretation support, so you can attend your appointments with confidence and peace of mind.',
    icon: '🗣️',
  },
  {
    title: 'Health Education Workshops',
    description: 'We host workshops in Nepali on important topics such as diabetes, high blood pressure, stress management, and more. These sessions are designed to be culturally relevant, easy to understand, and practical for everyday use.',
    icon: '📚',
  },
  {
    title: 'Community Resource Support',
    description: 'Sathi Sewa goes beyond translation. We help connect community members to free clinics, medical check-ups, mental health resources, local wellness programs, and advocacy and support groups.',
    icon: '🤝',
  },
];

const missionPoints = [
  'Providing accessible and culturally sensitive health education.',
  'Offering free translation and interpretation support during medical visits.',
  'Connecting individuals with critical health and wellness resources.',
  'Advocating for a more inclusive healthcare environment.',
];

export default function SathiSewaPage() {
  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30">
            <Image
              src="/images/sathi-sewa/sathi-sewa-logo.jpg"
              alt="Sathi Sewa Logo"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Sathi Sewa
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Bridging the Language Gap, Empowering the Community
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-950" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-mountain-700 dark:text-mountain-300 leading-relaxed mb-8">
                <strong className="text-teal-700 dark:text-teal-400">Sathi Sewa</strong> is a heart-led initiative 
                founded by dedicated members of the Himalayan Sherpa Club along with like-minded individuals who are 
                passionate about uplifting the Nepali community in the Bay Area.
              </p>
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                Recognizing the challenges faced by many Nepali immigrants—especially in navigating the healthcare 
                system due to language barriers—Sathi Sewa was born as a response to a deeply felt need within the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cream-50 dark:from-teal-900/20 dark:to-mountain-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌱</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white">
                Our Story
              </h2>
            </div>
            <div className="bg-white dark:bg-mountain-800/50 rounded-2xl p-8 md:p-10 shadow-lg border border-teal-100 dark:border-teal-800">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-6">
                  Sathi Sewa began with a group of volunteers from the Himalayan Sherpa Club based in Sonoma who saw 
                  a recurring issue: Nepali-speaking community members were struggling to access healthcare, understand 
                  medical instructions, and communicate effectively with doctors due to a lack of language support.
                </p>
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-6">
                  These barriers not only created confusion but also placed lives at risk. From this shared concern grew 
                  a mission—to become the helping hand that stands beside individuals as they journey through complex 
                  healthcare systems.
                </p>
                <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed italic border-l-4 border-teal-500 pl-6 bg-teal-50 dark:bg-teal-900/30 py-4 rounded-r-lg">
                  &quot;Sathi&quot; means &quot;friend&quot; in Nepali, and true to its name, Sathi Sewa serves as a supportive friend, 
                  walking alongside community members with compassion, understanding, and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💡</span>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl text-teal-100 leading-relaxed">
                A world where language is never a barrier to quality healthcare.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-xl border border-cream-200 dark:border-mountain-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🤝</span>
                <h2 className="text-2xl font-bold text-mountain-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-mountain-700 dark:text-mountain-300 mb-4">
                To empower the Nepali community by:
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center text-teal-700 dark:text-teal-400 text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-mountain-600 dark:text-mountain-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-cream-100 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🛠️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white">
                Our Services
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-lg border border-cream-200 dark:border-mountain-700 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-mountain-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-mountain-600 dark:text-mountain-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-cream-50 dark:from-teal-900/20 dark:to-mountain-800 rounded-2xl p-8 md:p-10 border border-teal-100 dark:border-teal-800">
              <h3 className="text-xl font-bold text-mountain-900 dark:text-white mb-6">
                We Help Connect You To:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-mountain-800 rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">🏥</span>
                  <span className="text-mountain-700 dark:text-mountain-300">Free clinics and medical check-ups</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-mountain-800 rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">🧠</span>
                  <span className="text-mountain-700 dark:text-mountain-300">Mental health resources</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-mountain-800 rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">💪</span>
                  <span className="text-mountain-700 dark:text-mountain-300">Local wellness programs</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-mountain-800 rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">📢</span>
                  <span className="text-mountain-700 dark:text-mountain-300">Advocacy and support groups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Statement */}
      <section className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-teal-100">
              Sathi Sewa is more than a service—it&apos;s a <strong className="text-white">movement of compassion and empowerment</strong>. 
              Together, we&apos;re building a healthier, more informed, and united Nepali community in the Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              Meet The Team
            </h2>
            <p className="text-lg text-mountain-700 dark:text-mountain-300">
              Our dedicated volunteers bringing healthcare access to the community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-cream-200 dark:border-mountain-700"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-mountain-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-teal-700 dark:text-teal-400 mb-1">
                    {member.degree}
                  </p>
                  <p className="text-xs text-mountain-500 dark:text-mountain-400">
                    {member.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-100 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Support or Want to Volunteer?
            </h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              If you&apos;re looking for support, or would like to volunteer, please reach out. 
              We&apos;re here to help—always.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-800 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
