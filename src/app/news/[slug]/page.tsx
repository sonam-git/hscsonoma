import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsArticleBySlug, getAllNewsSlugs } from '@/data/news';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Himalayan Sherpa Club of Sonoma',
    };
  }

  return {
    title: `${article.title} | HSC News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [{ url: article.image }],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-0">
        {/* Back Button */}
        <div className="container-custom mb-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-mountain-600 dark:text-mountain-400 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to News</span>
          </Link>
        </div>

        {/* Featured Image */}
        <div className="container-custom">
          <div className="relative aspect-[21/9] md:aspect-[21/8] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-fill"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-black/40" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-burgundy-700 text-white text-sm font-medium rounded-full">
                  {article.category}
                </span>
                {article.isRecent && (
                  <span className="px-3 py-1 bg-gold-500 text-mountain-900 text-sm font-medium rounded-full">
                    Recent
                  </span>
                )}
                {article.featured && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-3 max-w-4xl font-[Georgia,'Times_New_Roman',Times,serif]">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-cream-200">
                <time className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                </time>
                {article.source && (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Source: {article.source}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Article Body */}
            <article className="bg-white dark:bg-mountain-800 rounded-2xl p-6 md:p-10 shadow-lg">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* External Link CTA */}
              {article.externalUrl && (
                <div className="mt-10 pt-8 border-t border-cream-200 dark:border-mountain-700">
                  <div className="bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/30 dark:to-gold-900/20 rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-burgundy-600 rounded-full flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-lg font-bold text-mountain-900 dark:text-white mb-1">
                          Read the Full Article
                        </h3>
                        <p className="text-mountain-600 dark:text-mountain-400 text-sm">
                          View the original article on {article.source || 'the source website'}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                        >
                          <span>Read More</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* Share & Navigation */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-mountain-600 dark:text-mountain-400 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to All News</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-sm text-mountain-500 dark:text-mountain-400">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://hscsonoma.org/news/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream-100 dark:bg-mountain-800 text-mountain-600 dark:text-mountain-400 hover:bg-burgundy-100 dark:hover:bg-burgundy-900/50 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://hscsonoma.org/news/${article.slug}`)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream-100 dark:bg-mountain-800 text-mountain-600 dark:text-mountain-400 hover:bg-burgundy-100 dark:hover:bg-burgundy-900/50 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories CTA */}
      <section className="py-12 bg-gradient-to-br from-cream-100 to-cream-50 dark:from-mountain-900 dark:to-mountain-950 border-t border-cream-200 dark:border-mountain-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
            Explore More Community Stories
          </h2>
          <p className="text-mountain-600 dark:text-mountain-400 mb-6 max-w-2xl mx-auto">
            Discover more inspiring stories, achievements, and news from our Himalayan Sherpa community.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
