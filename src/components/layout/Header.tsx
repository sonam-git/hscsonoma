'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

// SVG Icon Components
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
    />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const MissionIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
    />
  </svg>
);

const VisionIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
    />
  </svg>
);

const FamilyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
    />
  </svg>
);

const FunctionalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MountainIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M5 3l4 9-2 1 5 7h4l5-7-2-1 4-9M12 3v9" 
    />
  </svg>
);

const SoccerIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
      d="M12 2l2 5h-4l2-5m0 20l-2-5h4l-2 5M2 12l5-2v4l-5-2m20 0l-5 2v-4l5 2" 
    />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
    />
  </svg>
);

const GalleryIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const BusinessIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
    />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

const NewsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
    />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const JoinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
    />
  </svg>
);

const DonateIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'About',
    href: '/about',
    icon: AboutIcon,
    children: [
      { name: 'Introduction & Mission', href: '/about/introduction', icon: MissionIcon },
      { name: 'Our Vision', href: '/about/vision', icon: VisionIcon },
      { name: 'Our History', href: '/about/history', icon: HistoryIcon },
      { name: 'Founding Families', href: '/about/founding-families', icon: FamilyIcon },
      { name: 'Functional Bodies', href: '/about/functional-bodies', icon: FunctionalIcon },
      { name: 'About Sherpa', href: '/about/sherpa', icon: MountainIcon },
      { name: 'Sherpa Businesses', href: '/about/sherpa-businesses', icon: BusinessIcon },
      { name: 'HSFC', href: '/about/hsfc', icon: SoccerIcon },
      { name: 'Sathi Sewa', href: '/about/sathi-sewa', icon: HeartIcon },
      { name: 'Gallery', href: '/about/gallery', icon: GalleryIcon },
    ],
  },
  { name: 'Events', href: '/events', icon: CalendarIcon },
  { name: 'News', href: '/news', icon: NewsIcon },
  { name: 'Contact', href: '/contact', icon: ContactIcon },
  { name: 'Join Us', href: '/join-us', icon: JoinIcon },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'shadow-lg dark:shadow-mountain-950/50'
            : ''
        }`}
      >
        {/* Fixed Background Image - doesn't move or resize */}
        <div 
          className="absolute inset-0 dark:brightness-50"
          style={{
            backgroundImage: 'url(/images/logos/menu-bar.jpg)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 96px',
            backgroundPosition: 'top center',
          }}
        />
        
        {/* Light/Dark Overlay for background */}
        <div className="absolute inset-0 bg-white/70 dark:bg-mountain-900/80" />
        
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/60 dark:bg-mountain-900/70 backdrop-blur-sm'
            : 'bg-white/40 dark:bg-mountain-700/60'
        }`} />
        
      <div className="container-custom relative">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex-shrink-0">
              <Image
                src="/images/logos/HSC-logo-dark-border.png"
                alt="HSC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="font-tibetan text-[15px] sm:text-md font-bold transition-colors text-burgundy-800 dark:text-burgundy-300">
                ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
              </p>
              <p className="jaini-purva-regular text-lg sm:text-xl tracking-wider uppercase transition-colors text-blue-900 dark:text-cream-50">
                HIMALAYAN SHERPA CLUB
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-blue-900 dark:text-cream-50 hover:text-burgundy-700 dark:hover:text-burgundy-400 hover:bg-burgundy-50/80 dark:hover:bg-burgundy-900/30 hover:scale-105 hover:shadow-md ${pathname.startsWith(item.href) ? 'text-burgundy-700 dark:text-burgundy-400 bg-burgundy-100/80 dark:bg-burgundy-900/50 shadow-md font-bold border-b-2 border-burgundy-500' : ''}`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      <IconComponent />
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-blue-900 dark:text-cream-50 hover:text-burgundy-700 dark:hover:text-burgundy-400 hover:bg-burgundy-50/80 dark:hover:bg-burgundy-900/30 hover:scale-105 hover:shadow-md ${pathname === item.href ? 'text-burgundy-700 dark:text-burgundy-400 bg-burgundy-100/80 dark:bg-burgundy-900/50 shadow-md font-bold border-b-2 border-burgundy-500' : ''}`}
                      onMouseEnter={() => setActiveDropdown(null)}
                    >
                      <IconComponent />
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle isScrolled={isScrolled} />
            </div>
            
            {/* Donate Button */}
            <Link
              href="/donate"
              className="ml-2 btn-gold text-sm py-2 flex items-center gap-2"
            >
              <DonateIcon />
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden flex-shrink-0">
            <ThemeToggle isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors text-blue-900 dark:text-cream-50 hover:bg-burgundy-50/80 dark:hover:bg-burgundy-900/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

        {/* Horizontal Submenu for About - Desktop - Full Width */}
        <div
          className={`hidden xl:block transition-all duration-300 overflow-hidden ${
            activeDropdown === 'About' || pathname.startsWith('/about') ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
          onMouseEnter={() => setActiveDropdown('About')}
          onMouseLeave={() => { if (!pathname.startsWith('/about')) setActiveDropdown(null); }}
        >
          <div className="w-full flex items-center justify-center gap-1 py-2 border-t bg-cream-50/95 dark:bg-mountain-800/95 border-cream-200 dark:border-mountain-700 backdrop-blur-sm">
            {navigation.find(item => item.name === 'About')?.children?.map((child) => {
              const ChildIcon = child.icon;
              return (
                <Link
                  key={child.name}
                  href={child.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    pathname === child.href 
                      ? 'text-white bg-burgundy-600 dark:bg-burgundy-500 shadow-md'
                      : 'text-blue-900 dark:text-cream-100 hover:text-burgundy-700 dark:hover:text-burgundy-400 hover:bg-burgundy-100/80 dark:hover:bg-burgundy-900/40'
                  }`}
                >
                  <ChildIcon />
                  <span className="hidden xl:inline">{child.name}</span>
                  <span className="xl:hidden">{child.name.split(' ')[0]}</span>
                </Link>
              );
            })}
          </div>
        </div>

      <div className="container-custom relative">
        {/* Mobile Menu */}
        <div
          className={`xl:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="bg-white dark:bg-mountain-800 rounded-xl shadow-xl dark:shadow-mountain-950/50 mt-2 p-4 space-y-2">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 font-semibold rounded-lg transition-all duration-200 ${
                          pathname.startsWith(item.href)
                            ? 'text-burgundy-700 dark:text-burgundy-400 bg-burgundy-100 dark:bg-burgundy-900/50 border-l-4 border-burgundy-500'
                            : 'text-mountain-700 dark:text-mountain-200 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <IconComponent />
                          {item.name}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`pl-4 space-y-1 ${activeDropdown === item.name ? 'block' : 'hidden'}`}>
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                                pathname === child.href 
                                  ? 'text-burgundy-700 dark:text-burgundy-400 bg-burgundy-100 dark:bg-burgundy-900/50 font-semibold border-l-4 border-burgundy-500' 
                                  : 'text-mountain-600 dark:text-mountain-300 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30 hover:text-burgundy-700 dark:hover:text-burgundy-400'
                              }`}
                            >
                              <ChildIcon />
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2.5 font-semibold rounded-lg transition-all duration-200 ${
                        pathname === item.href 
                          ? 'text-burgundy-700 dark:text-burgundy-400 bg-burgundy-100 dark:bg-burgundy-900/50 border-l-4 border-burgundy-500' 
                          : 'text-mountain-700 dark:text-mountain-200 hover:bg-burgundy-50 dark:hover:bg-burgundy-900/30 hover:text-burgundy-700 dark:hover:text-burgundy-400'
                      }`}
                    >
                      <IconComponent />
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 w-full text-center btn-gold mt-4"
            >
              <DonateIcon />
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}