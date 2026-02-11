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

      {/* Welcome Message */}
      <section className="py-16 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="text-lg text-mountain-600 dark:text-mountain-300 leading-relaxed mb-6">
                Since the Himalayan Sherpa Club (HSC) does not have a physical office and all of our members 
                volunteer their time, we kindly invite you to reach out to us via the provided email for any 
                suggestions, questions, or concerns. We will respond to your message as promptly as possible.
              </p>
              <p className="text-lg text-mountain-600 dark:text-mountain-300 leading-relaxed mb-8">
                You are also welcome to contact any of our executive members directly if needed. Our team is 
                always happy to assist you to the best of their ability as their time permits.
              </p>
              <p className="text-mountain-500 dark:text-mountain-400 italic mb-6">
                Thank you for your understanding and support.
              </p>
              <p className="text-xl font-serif font-semibold text-burgundy-700 dark:text-burgundy-400">
                Thuchi Chey | Danyabaad | Thank You
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Email - Primary */}
                <div className="bg-burgundy-50 dark:bg-burgundy-900/30 rounded-xl p-6 border border-burgundy-100 dark:border-burgundy-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-mountain-900 dark:text-cream-50 mb-1">Email</h3>
                      <a href="mailto:clubhimalayansherpa@gmail.com" className="text-xl text-burgundy-700 dark:text-burgundy-400 hover:text-burgundy-800 dark:hover:text-burgundy-300 transition-colors font-medium">
                        clubhimalayansherpa@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream-100 dark:bg-mountain-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mountain-900 dark:text-cream-50 mb-1">Location</h3>
                    <p className="text-mountain-600 dark:text-mountain-300">Sonoma Valley, CA 95476 USA</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream-100 dark:bg-mountain-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy-700 dark:text-burgundy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mountain-900 dark:text-cream-50 mb-1">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=100070462585968"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mountain-600 dark:text-mountain-300 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/hsc_sonoma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mountain-600 dark:text-mountain-300 hover:text-burgundy-700 dark:hover:text-burgundy-400 transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* HSC Executive Body */}
              <div className="mt-8 bg-gold-50 dark:bg-gold-900/20 rounded-xl p-6 border border-gold-200 dark:border-gold-800/30">
                <h3 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">HSC Executive Body</h3>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm mb-4">
                  You can also reach out to any of our executive committee members directly for assistance.
                </p>
                <a href="/about/functional-bodies" className="text-burgundy-600 dark:text-burgundy-400 font-medium hover:underline inline-flex items-center gap-2">
                  View Executive Committee
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-burgundy-50 dark:bg-burgundy-900/30 rounded-xl p-6 border border-burgundy-100 dark:border-burgundy-800">
                <h3 className="font-semibold text-mountain-900 dark:text-cream-50 mb-2">Non-Profit Organization</h3>
                <p className="text-mountain-600 dark:text-mountain-300 text-sm">
                  HSC is incorporated as a non-profit and tax-exempt charitable organization 
                  under section 501(c)(3) of the Internal Revenue Code.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-50 dark:bg-mountain-900 rounded-2xl shadow-xl dark:shadow-mountain-950/50 p-8">
              <h2 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
