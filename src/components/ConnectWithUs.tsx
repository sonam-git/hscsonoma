'use client';

import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Facebook SDK
const FacebookEmbed = dynamic(() => import('./FacebookEmbed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-cream-100 dark:bg-mountain-700 rounded-xl animate-pulse flex items-center justify-center">
      <div className="text-center text-mountain-500 dark:text-mountain-400">
        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <p>Loading Facebook...</p>
      </div>
    </div>
  ),
});

// Dynamic import for Instagram embed
const InstaEmbed = dynamic(() => import('./InstaEmbed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-cream-100 dark:bg-mountain-700 rounded-xl animate-pulse flex items-center justify-center">
      <div className="text-center text-mountain-500 dark:text-mountain-400">
        <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        </svg>
        <p>Loading Instagram...</p>
      </div>
    </div>
  ),
});

export default function ConnectWithUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-himalayan-50 via-cream-50 to-burgundy-50 dark:from-mountain-900 dark:via-mountain-850 dark:to-mountain-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
            Stay Connected
          </p>
          <h2 className="section-title">Follow Us on Social Media</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Stay updated with our latest news, events, and community activities. 
            Join our online community to connect with fellow members.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Facebook Embed */}
          <div className="w-full max-w-[400px] bg-white dark:bg-mountain-800 rounded-2xl shadow-xl dark:shadow-mountain-950/50 overflow-hidden p-4">
            <FacebookEmbed 
              width={380}
              height={500}
              showTimeline={true}
              showEvents={true}
              smallHeader={false}
              hideCover={false}
            />
          </div>

          {/* Instagram Embed */}
          <div className="w-full max-w-[400px] bg-white dark:bg-mountain-800 rounded-2xl shadow-xl dark:shadow-mountain-950/50 overflow-hidden p-4">
            <InstaEmbed 
              width={380}
              height={500}
              username="hsc_sonoma_ca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
