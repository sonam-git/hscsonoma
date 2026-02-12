import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Himalayan Sherpa Club of Sonoma. We welcome your questions, suggestions, and feedback.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ང་ཚོར་འབྲེལ་བ།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Tashi Delek & Namaste!
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            We welcome your questions, suggestions, and feedback
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Row 1: Welcome Message + Contact Form */}
      <section className="py-16 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Welcome Message */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl p-6 md:p-8 shadow-lg h-fit">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                Welcome
              </h2>
              <p className="text-sm md:text-base text-mountain-600 dark:text-mountain-300 leading-relaxed mb-4">
                Since the Himalayan Sherpa Club (HSC) does not have a physical office and all of our members 
                volunteer their time, we kindly invite you to reach out to us via the provided email for any 
                suggestions, questions, or concerns. We will respond to your message as promptly as possible.
              </p>
              <p className="text-sm md:text-base text-mountain-600 dark:text-mountain-300 leading-relaxed mb-4">
                You are also welcome to contact any of our executive members directly if needed. Our team is 
                always happy to assist you to the best of their ability as their time permits.
              </p>
              <p className="text-mountain-500 dark:text-mountain-400 italic text-sm mb-4">
                Thank you for your understanding and support.
              </p>
              <p className="text-base md:text-lg font-serif font-semibold text-burgundy-700 dark:text-burgundy-400">
                Thuchi Chey | Danyabaad | Thank You
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Contact Information Grid */}
      <section className="py-12 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-8 text-center">
            Contact Information
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Email Card */}
            <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 dark:from-burgundy-900/40 dark:to-burgundy-900/20 rounded-xl p-5 border border-burgundy-200 dark:border-burgundy-800 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-burgundy-200 dark:bg-burgundy-800/50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-mountain-900 dark:text-cream-50 mb-1">Email</h3>
              <a href="mailto:clubhimalayansherpa@gmail.com" className="text-xs md:text-sm text-burgundy-700 dark:text-burgundy-400 hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors font-medium break-all">
                clubhimalayansherpa@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-cream-50 to-cream-100 dark:from-mountain-700/40 dark:to-mountain-700/20 rounded-xl p-5 border border-cream-200 dark:border-mountain-600 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-cream-200 dark:bg-mountain-600/50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-mountain-900 dark:text-cream-50 mb-1">Location</h3>
              <p className="text-xs md:text-sm text-mountain-600 dark:text-mountain-300">Sonoma Valley, CA 95476 USA</p>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10 rounded-xl p-5 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-blue-200 dark:bg-blue-800/50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-mountain-900 dark:text-cream-50 mb-2">Social Media</h3>
              <div className="flex flex-col gap-1">
                <a
                  href="https://www.facebook.com/profile.php?id=100070462585968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Facebook →
                </a>
                <a
                  href="https://www.instagram.com/hsc_sonoma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                >
                  Instagram →
                </a>
              </div>
            </div>

            {/* Executive Body Card */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/30 dark:to-gold-900/10 rounded-xl p-5 border border-gold-200 dark:border-gold-800/30 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-gold-200 dark:bg-gold-800/50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-gold-700 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm text-mountain-900 dark:text-cream-50 mb-1">Executive Body</h3>
              <p className="text-xs text-mountain-600 dark:text-mountain-300 mb-2">Contact our committee members directly.</p>
              <a href="/about/functional-bodies" className="text-xs md:text-sm text-burgundy-600 dark:text-burgundy-400 font-medium hover:underline inline-flex items-center gap-1">
                View Team
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Non-Profit Info Banner */}
          <div className="mt-8 bg-gradient-to-r from-burgundy-50 via-burgundy-100 to-burgundy-50 dark:from-burgundy-900/30 dark:via-burgundy-900/40 dark:to-burgundy-900/30 rounded-xl p-5 border border-burgundy-200 dark:border-burgundy-800 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold text-sm text-mountain-900 dark:text-cream-50">Non-Profit Organization</h3>
            </div>
            <p className="text-xs text-mountain-600 dark:text-mountain-300 max-w-xl mx-auto">
              HSC is incorporated as a non-profit and tax-exempt charitable organization 
              under section 501(c)(3) of the Internal Revenue Code.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
