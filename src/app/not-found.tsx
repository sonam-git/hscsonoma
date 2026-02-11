import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-earth-50 dark:bg-mountain-900 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <span className="text-8xl font-display font-bold text-wine-600">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-mountain-800 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-mountain-600 dark:text-mountain-300 mb-8">
          The page you're looking for seems to have wandered off into the mountains. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-wine-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-wine-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-wine-600 text-wine-600 dark:text-wine-400 px-8 py-3 rounded-lg font-semibold hover:bg-wine-50 dark:hover:bg-wine-900/20 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
