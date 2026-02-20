'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Executive Committee (Board Members) - Since 2017
const executiveMembers = [
  { name: 'Pemba T Sherpa', role: 'President', image: '/images/functional-bodies/board-member/pemba-t-sherpa.jpg' },
  { name: 'Tashi J Sherpa', role: 'Vice President', image: '/images/functional-bodies/board-member/tashi-j-sherpa.jpg' },
  { name: 'Sonam J Sherpa', role: 'Secretary', image: '/images/functional-bodies/board-member/sonam-j-sherpa.jpg' },
  { name: 'Nawang P Sherpa', role: 'Treasurer', image: '/images/functional-bodies/board-member/nawang-sherpa.jpg' },
  { name: 'Tenzing Sherpa', role: 'Board Member', image: '/images/functional-bodies/board-member/tenzing-sherpa.jpg' },
  { name: 'Dawa Sherpa', role: 'Board Member', image: '/images/functional-bodies/board-member/dawa-sherpa.jpg' },
  { name: 'Wangchhe Sherpa', role: 'Board Member', image: '/images/functional-bodies/board-member/wangchhe.jpg' },
  { name: 'Nima N Sherpa', role: 'Board Member', image: '/images/functional-bodies/board-member/nima-nuru.jpg' },
  { name: 'Pemba Lhaki Sherpa', role: 'Board Member', image: '/images/functional-bodies/board-member/pemba-lhaki.jpg' },
];

// Founder Members
const founderMembers = [
  { name: 'Nima Sherpa', image: '/images/functional-bodies/founder-member/nima-sherpa.jpg' },
  { name: 'Chhiring Sherpa', image: '/images/functional-bodies/founder-member/chhiring-sherpa.jpg' },
  { name: 'Pemba N Sherpa', image: '/images/functional-bodies/founder-member/pemba-n-sherpa.jpg' },
  { name: 'Mingma T Sherpa', image: '/images/functional-bodies/founder-member/mingma-t-sherpa.jpg' },
  { name: 'Pasang N Sherpa', image: '/images/functional-bodies/founder-member/pasang-n-sherpa.jpg' },
  { name: 'Pasang K Sherpa', image: '/images/functional-bodies/founder-member/pasang-k-sherpa.jpg' },
  { name: 'Lhakpa Sherpa', image: '/images/functional-bodies/founder-member/lhakpa-sherpa.jpg' },
  { name: 'Mingma Sherpa', image: '/images/functional-bodies/founder-member/mingma-sherpa.jpg' },
  { name: 'Gyaljen Sherpa', image: '/images/functional-bodies/founder-member/gyaljen-sherpa.jpg' },
  { name: 'Tshering N Sherpa', image: '/images/functional-bodies/founder-member/tshering-n-sherpa.jpg' },
  { name: 'Gombu Sherpa', image: '/images/functional-bodies/founder-member/gombu-sherpa.jpg' },
  { name: 'Pasang T Sherpa', image: '/images/functional-bodies/founder-member/pasang-t-sherpa.jpg' },
  { name: 'Tenji Sherpa', image: '/images/functional-bodies/founder-member/tenji-sherpa.jpg' },
  { name: 'Nawang G Sherpa', image: '/images/functional-bodies/founder-member/nawang-g-sherpa.jpg' },
  { name: 'Pasang Sherpa', image: '/images/functional-bodies/founder-member/pasang-sherpa.jpg' },
  { name: "Sonoma Women's Group", image: '/images/logos/HSC-logo-dark-border.png', isGroup: true },
];

// Advisory Committee
const advisoryMembers = [
  { name: 'Nima Sherpa', image: '/images/functional-bodies/advisory/nima-sherpa.jpg' },
  { name: 'Thukten Sherpa', image: '/images/functional-bodies/advisory/Thukten-sherpa.jpg' },
  { name: 'Ang T Sherpa', image: '/images/functional-bodies/advisory/ang-t-sherpa.png' },
];

// SVG Icon Components for tabs
const ExecutiveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const FounderIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" 
    />
  </svg>
);

const AdvisoryIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
    />
  </svg>
);

const ExBoardIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
    />
  </svg>
);

// User icon for fallback when no image is available
const UserIcon = () => (
  <svg className="w-8 h-8 text-mountain-400 dark:text-mountain-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

// Ex-Board Members data
const exBoardMembers2015_2017 = [
  { role: 'President', name: 'Tsering Namgyal Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/tshering-n-sherpa.jpg' },
  { role: 'Vice President', name: 'Kasa Dawa Sherpa', location: 'Sonoma', image: '/images/functional-bodies/ex-member/kasa.jpg' },
  { role: 'Secretary', name: 'Gombu Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/gombu-sherpa.jpg' },
  { role: 'Treasurer', name: 'Mingma Lhamu Sherpa', location: 'Sonoma', image: '/images/functional-bodies/ex-member/mingma-l-sherpa.jpg' },
];

const boardMembers2015_2017 = [
  { name: 'Chhiring Diki Sherpa', location: 'Sonoma', image: '/images/functional-bodies/ex-member/chhiring-diki.jpg' },
  { name: 'Ming Kipa Sherpa', location: 'Sonoma', image: '/images/functional-bodies/ex-member/ming-sherpa.jpg' },
  { name: 'Mingma Sherpa', location: 'American Canyon', image: '/images/functional-bodies/ex-member/mingma.jpg' },
  { name: 'Pemba Nuru Sherpa', location: 'Napa', image: '/images/functional-bodies/founder-member/pemba-n-sherpa.jpg' },
  { name: 'Kandu Sherpa', location: 'Sonoma', image: '/images/functional-bodies/ex-member/kandu-sherpa.jpg' },
];

const exBoardMembers2011_2015 = [
  { role: 'President', name: 'Nima Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/nima-sherpa.jpg' },
  { role: 'Vice President', name: 'Geljen Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/gyaljen-sherpa.jpg' },
  { role: 'Secretary', name: 'Lakpa Dorchi Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/lhakpa-sherpa.jpg' },
  { role: 'Treasurer', name: 'Mingma Tenzing Sherpa', location: 'Sonoma', image: '/images/functional-bodies/founder-member/mingma-t-sherpa.jpg' },
];

const boardMembers2011_2015 = [
  { name: 'Pasang Sherpa', image: '/images/functional-bodies/ex-member/pasang-makalu-sherpa.jpg' },
  { name: 'Pasang Nuru Sherpa', image: '/images/functional-bodies/founder-member/pasang-n-sherpa.jpg' },
  { name: 'Pasang Temba Sherpa', image: '/images/functional-bodies/founder-member/pasang-t-sherpa.jpg' },
    { name: 'Pasang Sherpa', image: '/images/functional-bodies/ex-member/pasang-mama-sherpa.jpg' },
];

type TabType = 'executive' | 'founder' | 'advisory' | 'ex-board';

export default function FunctionalBodiesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('executive');
  const contentRef = useRef<HTMLElement>(null);

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    // Scroll content section into view when tab is clicked
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const tabs = [
    { id: 'executive' as TabType, label: 'Executive', icon: ExecutiveIcon },
    { id: 'founder' as TabType, label: 'Founder', icon: FounderIcon },
    { id: 'advisory' as TabType, label: 'Advisory', icon: AdvisoryIcon },
    { id: 'ex-board' as TabType, label: 'Ex-Board', icon: ExBoardIcon },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-44 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ལས་འགན་འཛིན་པའི་ཁོངས་མི་།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Functional Bodies
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            The dedicated teams that guide and serve our community
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation - positioned below header (small screens) / header + submenu (large screens) */}
      <div className="sticky top-24 md:top-[140px] z-40 bg-gradient-to-r from-burgundy-800 via-mountain-800 to-burgundy-800 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-1 md:gap-2 py-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-1.5 px-3 md:px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'text-burgundy-900 bg-white shadow-md scale-105'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <IconComponent />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-cream-50 dark:bg-mountain-900 scroll-mt-[140px] md:scroll-mt-[200px]">
        <div className="container-custom">
          <div className="min-h-[500px]">
            {/* Executive Committee */}
            {activeTab === 'executive' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Executive Committee
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    <span className="text-burgundy-600 dark:text-burgundy-400 font-semibold">Since 2017</span> — Our elected leaders who manage operations and guide our community forward.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {executiveMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-mountain-950/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-64 overflow-hidden bg-mountain-100 dark:bg-mountain-700">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain object-top"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-burgundy-600 dark:text-burgundy-400 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Founder Members */}
            {activeTab === 'founder' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Founder Members
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    The visionary individuals and families who established the Himalayan Sherpa Club of Sonoma.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {founderMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-mountain-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-mountain-950/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`relative h-48 overflow-hidden ${member.isGroup ? 'bg-cream-100 dark:bg-mountain-700 flex items-center justify-center' : 'bg-mountain-100 dark:bg-mountain-700'}`}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={`${member.isGroup ? 'object-contain p-6' : 'object-contain object-top'}`}
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-sm md:text-base font-semibold text-mountain-900 dark:text-cream-50">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advisory Committee */}
            {activeTab === 'advisory' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Advisory Committee
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    Experienced members providing guidance, wisdom, and mentorship to our organization.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {advisoryMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-mountain-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-mountain-950/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-64 overflow-hidden bg-mountain-100 dark:bg-mountain-700">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain object-top"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-mountain-900 dark:text-cream-50">
                          {member.name}
                        </h3>
                        <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mt-1">
                          Advisory Member
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ex-Board Members */}
            {activeTab === 'ex-board' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                    Ex-Board Members
                  </h2>
                  <p className="text-lg text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
                    Former board members who have served and contributed to our community&apos;s growth.
                  </p>
                </div>
                
                <div className="max-w-5xl mx-auto space-y-12">
                  {/* Executive Committee 2015-2017 */}
                  <div className="bg-white dark:bg-mountain-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="text-center mb-8">
                      <span className="inline-block px-4 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium mb-3">
                        2015 - 2017
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                        Executive Committee
                      </h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {exBoardMembers2015_2017.map((member, index) => (
                        <div key={index} className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-4 text-center flex flex-col items-center">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-400 dark:border-gold-500 shadow mb-2 flex items-center justify-center bg-mountain-100 dark:bg-mountain-800">
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <UserIcon />
                            )}
                          </div>
                          <p className="text-burgundy-600 dark:text-burgundy-400 text-sm font-medium mb-1">{member.role}</p>
                          <p className="text-mountain-900 dark:text-cream-50 font-semibold text-sm">{member.name}</p>
                          <p className="text-mountain-500 dark:text-mountain-400 text-xs">{member.location}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-mountain-200 dark:border-mountain-600 pt-6">
                      <p className="text-center text-burgundy-600 dark:text-burgundy-400 text-sm font-medium mb-4">Board Members</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {boardMembers2015_2017.map((member, idx) => (
                          <div key={idx} className="flex flex-col items-center bg-cream-50 dark:bg-mountain-700 rounded-lg px-3 py-2 min-w-[100px]">
                              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-400 dark:border-gold-500 shadow mb-2 flex items-center justify-center bg-mountain-100 dark:bg-mountain-800">
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <UserIcon />
                            )}
                          </div>
                            <span className="text-mountain-700 dark:text-mountain-300 text-xs font-medium text-center">
                              {member.name}
                            </span>
                            {member.location && (
                              <span className="text-[10px] text-mountain-500 dark:text-mountain-400">{member.location}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Executive Committee 2011-2015 */}
                  <div className="bg-white dark:bg-mountain-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="text-center mb-8">
                      <span className="inline-block px-4 py-1 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium mb-3">
                        2011 - 2015
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50">
                        Executive Committee
                      </h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {exBoardMembers2011_2015.map((member, index) => (
                        <div key={index} className="bg-cream-50 dark:bg-mountain-700 rounded-xl p-4 text-center flex flex-col items-center">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-400 dark:border-gold-500 shadow mb-2 flex items-center justify-center bg-mountain-100 dark:bg-mountain-800">
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <UserIcon />
                            )}
                          </div>
                          <p className="text-burgundy-600 dark:text-burgundy-400 text-sm font-medium mb-1">{member.role}</p>
                          <p className="text-mountain-900 dark:text-cream-50 font-semibold text-sm">{member.name}</p>
                          <p className="text-mountain-500 dark:text-mountain-400 text-xs">{member.location}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-mountain-200 dark:border-mountain-600 pt-6">
                      <p className="text-center text-burgundy-600 dark:text-burgundy-400 text-sm font-medium mb-4">Board Members</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {boardMembers2011_2015.map((member, idx) => (
                          <div key={idx} className="flex flex-col items-center bg-cream-50 dark:bg-mountain-700 rounded-lg px-3 py-2 min-w-[100px]">
                               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-400 dark:border-gold-500 shadow mb-2 flex items-center justify-center bg-mountain-100 dark:bg-mountain-800">
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <UserIcon />
                            )}
                          </div>
                            <span className="text-mountain-700 dark:text-mountain-300 text-xs font-medium text-center">
                              {member.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Thank You Message */}
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gold-600 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto italic">
                      We are deeply grateful to all past leaders whose dedication and vision helped establish 
                      and grow the Himalayan Sherpa Club of Sonoma.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-2">
                Want to Get Involved?
              </h3>
              <p className="text-mountain-600 dark:text-mountain-300">
                Join our community and help preserve Sherpa heritage in Sonoma.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/join-us" className="btn-primary">
                Join Us
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
