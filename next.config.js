/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
      {
        protocol: 'https',
        hostname: 'www.himalayansherpaclubsonoma.org',
      },
    ],
  },
  async redirects() {
    return [
      // Old page redirects (301 = permanent)
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/donate.html',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/donations',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/news.html',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/events.html',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/photos',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/ceremonies.html',
        destination: '/life-ceremonies',
        permanent: true,
      },
      {
        source: '/life-ceremonies.html',
        destination: '/life-ceremonies',
        permanent: true,
      },
      {
        source: '/membership.html',
        destination: '/membership',
        permanent: true,
      },
      {
        source: '/join',
        destination: '/membership',
        permanent: true,
      },
      {
        source: '/join-us',
        destination: '/membership',
        permanent: true,
      },
      // Catch common .html extensions
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      // Trailing slash normalization
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
