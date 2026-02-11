import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  about: [
    { name: 'Introduction', href: '/about/introduction' },
    { name: 'Our Mission', href: '/about/introduction#mission' },
    { name: 'Sherpa History', href: '/about/sherpa' },
    { name: 'Founding Families', href: '/about/founding-families' },
    { name: 'Our Vision', href: '/about/vision' },
  ],
  community: [
    { name: 'Events', href: '/events' },
    { name: 'News & Media', href: '/news' },
    { name: 'Join Us', href: '/join-us' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ],
  culture: [
    { name: 'Sherpa Life', href: '/about/sherpa' },
    { name: 'Sherpa Clans', href: '/about/sherpa' },
    { name: 'Traditions', href: '/about/sherpa' },
    { name: 'Family Tree', href: '/about/sherpa' },
  ],
};

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100070462585968',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hsc_sonoma/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:clubhimalayansherpa@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-900 dark:bg-mountain-950 text-cream-100">
      {/* Mountain Divider */}
      <div className="bg-cream-50 dark:bg-mountain-900">
        <svg viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            className="fill-mountain-900 dark:fill-mountain-950"
            d="M0,100 L0,60 L120,80 L240,40 L360,70 L480,30 L600,60 L720,20 L840,50 L960,25 L1080,55 L1200,35 L1320,65 L1440,45 L1440,100 Z"
          />
        </svg>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logos/HSC-logo-dark-border.png"
                  alt="HSC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-tibetan text-lg text-gold-400">
                  ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
                </p>
                <p className="text-sm font-semibold text-cream-200">
                  HIMALAYAN SHERPA CLUB OF SONOMA
                </p>
              </div>
            </Link>
            <p className="text-cream-300 mb-6 max-w-md">
              A 501(c)(3) non-profit organization dedicated to preserving and promoting 
              Sherpa culture, heritage, and values in the North Bay Area of California.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream-400 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Sonoma Valley, CA 95476 USA</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-mountain-800 dark:bg-mountain-700 text-cream-300 hover:bg-burgundy-700 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* US-Nepal Flag */}
            <div className="mt-6">
              <Image
                src="/images/hero/us-nepal-flag.png"
                alt="US-Nepal Friendship"
                width={80}
                height={50}
                className="opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">About HSC</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Culture Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-4">Sherpa Culture</h4>
            <ul className="space-y-2">
              {footerLinks.culture.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mountain-700 dark:border-mountain-600 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream-400 text-center md:text-left">
            Copyright © 2011 - {currentYear} Himalayan Sherpa Club Of Sonoma, USA | All rights reserved
          </p>
          <p className="text-xs text-cream-500 text-center md:text-right">
            HSC is incorporated as a non-profit and tax-exempt charitable organization 
            under section 501(c)(3) of the Internal Revenue Code
          </p>
        </div>
      </div>
    </footer>
  );
}
