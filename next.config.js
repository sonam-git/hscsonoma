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
    return [];
  },
};

module.exports = nextConfig;
