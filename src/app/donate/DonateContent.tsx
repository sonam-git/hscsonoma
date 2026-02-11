'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DonateContent() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Himalayan Sherpa Club of Sonoma\n464 1st St E Suite F\nSonoma, CA 95476\nUnited States');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-cream-50 dark:bg-mountain-950">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ང་ཚོར་ཞལ་འདེབས་གནང་རོགས།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Support Our Community
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Your generous donation helps preserve Sherpa culture, support community programs, and make a lasting impact
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-950" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white dark:bg-mountain-900 border-b border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-100 dark:bg-burgundy-900/50 text-burgundy-700 dark:text-burgundy-400 rounded-full text-sm font-medium mb-6">
              <span>🏛️</span>
              <span>501(c)(3) Tax-Exempt Organization</span>
            </div>
            <p className="text-lg text-mountain-700 dark:text-mountain-300 leading-relaxed">
              The Himalayan Sherpa Club of Sonoma is a registered 501(c)(3) non-profit organization. 
              Your donation is <strong className="text-burgundy-700 dark:text-burgundy-400">tax-deductible</strong> to 
              the fullest extent allowed by law. Every contribution, big or small, makes a meaningful difference 
              in preserving our heritage and strengthening our community.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              Ways to Give
            </h2>
            <p className="text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto">
              Choose the donation method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PayPal Donation */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-xl border border-cream-200 dark:border-mountain-700 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mountain-900 dark:text-white">
                    Donate Online
                  </h3>
                  <p className="text-mountain-500 dark:text-mountain-400">
                    Secure payment via PayPal
                  </p>
                </div>
              </div>

              <p className="text-mountain-600 dark:text-mountain-400 mb-6 flex-grow">
                Make a quick and secure donation using PayPal. You can use your PayPal account or pay with any major credit or debit card. No PayPal account required.
              </p>

              <div className="space-y-4">
                {/* PayPal Form */}
                <form action="https://www.paypal.com/donate" method="post" target="_top" className="w-full">
                  <input type="hidden" name="hosted_button_id" value="7ACZ2G4UHZ7EQ" />
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#0070ba] hover:bg-[#005ea6] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                    </svg>
                    Donate with PayPal
                  </button>
                </form>

                <p className="text-xs text-center text-mountain-500 dark:text-mountain-400">
                  You&apos;ll be redirected to PayPal&apos;s secure payment page
                </p>
              </div>

              {/* Payment Icons */}
              <div className="mt-6 pt-6 border-t border-cream-200 dark:border-mountain-700">
                <p className="text-xs text-mountain-500 dark:text-mountain-400 text-center mb-3">Accepted payment methods</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-8 bg-white dark:bg-mountain-700 rounded flex items-center justify-center border border-cream-200 dark:border-mountain-600">
                    <span className="text-xs font-bold text-blue-600">VISA</span>
                  </div>
                  <div className="w-12 h-8 bg-white dark:bg-mountain-700 rounded flex items-center justify-center border border-cream-200 dark:border-mountain-600">
                    <span className="text-xs font-bold text-red-500">MC</span>
                  </div>
                  <div className="w-12 h-8 bg-white dark:bg-mountain-700 rounded flex items-center justify-center border border-cream-200 dark:border-mountain-600">
                    <span className="text-xs font-bold text-blue-800">AMEX</span>
                  </div>
                  <div className="w-12 h-8 bg-white dark:bg-mountain-700 rounded flex items-center justify-center border border-cream-200 dark:border-mountain-600">
                    <span className="text-xs font-bold text-orange-500">Disc</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mail-in Donation */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl p-8 shadow-xl border border-cream-200 dark:border-mountain-700 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-burgundy-100 dark:bg-burgundy-900/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mountain-900 dark:text-white">
                    Donate by Mail
                  </h3>
                  <p className="text-mountain-500 dark:text-mountain-400">
                    Send a check
                  </p>
                </div>
              </div>

              <p className="text-mountain-600 dark:text-mountain-400 mb-6 flex-grow">
                Prefer to donate by check? Follow these simple steps to mail your tax-deductible contribution directly to us.
              </p>

              <div className="bg-cream-50 dark:bg-mountain-900/50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-mountain-500 dark:text-mountain-400 mb-1">Make check payable to:</p>
                  <p className="font-semibold text-mountain-900 dark:text-white">Himalayan Sherpa Club</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-mountain-500 dark:text-mountain-400 mb-1">On the memo line, write:</p>
                  <p className="font-semibold text-mountain-900 dark:text-white">Himalayan Sherpa Club of Sonoma</p>
                </div>

                <div className="pt-4 border-t border-cream-200 dark:border-mountain-700">
                  <p className="text-sm font-medium text-mountain-500 dark:text-mountain-400 mb-2">Mail your check to:</p>
                  <address className="not-italic text-mountain-900 dark:text-white">
                    <p className="font-semibold">Himalayan Sherpa Club of Sonoma</p>
                    <p>464 1st St E Suite F</p>
                    <p>Sonoma, CA 95476</p>
                    <p>United States</p>
                  </address>
                </div>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="mt-4 inline-flex items-center justify-center gap-2 text-burgundy-700 dark:text-burgundy-400 hover:text-burgundy-800 dark:hover:text-burgundy-300 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Donation Supports */}
      <section className="py-16 bg-gradient-to-br from-burgundy-50 to-gold-50 dark:from-burgundy-900/20 dark:to-gold-900/20 border-t border-cream-200 dark:border-mountain-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mountain-900 dark:text-white mb-4">
              Your Donation Makes a Difference
            </h2>
            <p className="text-mountain-600 dark:text-mountain-400 max-w-2xl mx-auto">
              Every contribution helps us achieve our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
              <div className="w-14 h-14 bg-burgundy-100 dark:bg-burgundy-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="font-bold text-mountain-900 dark:text-white mb-2">
                Cultural Preservation
              </h3>
              <p className="text-sm text-mountain-600 dark:text-mountain-400">
                Protecting and celebrating Sherpa traditions, language, and heritage for future generations
              </p>
            </div>

            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
              <div className="w-14 h-14 bg-gold-100 dark:bg-gold-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold text-mountain-900 dark:text-white mb-2">
                Youth Programs
              </h3>
              <p className="text-sm text-mountain-600 dark:text-mountain-400">
                Educational initiatives and scholarships for Sherpa youth in our community
              </p>
            </div>

            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
              <div className="w-14 h-14 bg-mountain-100 dark:bg-mountain-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-mountain-900 dark:text-white mb-2">
                Community Support
              </h3>
              <p className="text-sm text-mountain-600 dark:text-mountain-400">
                Assistance for community members during times of need and celebration
              </p>
            </div>

            <div className="bg-white dark:bg-mountain-800/50 rounded-xl p-6 text-center shadow-lg border border-cream-200 dark:border-mountain-700">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-bold text-mountain-900 dark:text-white mb-2">
                Nepal Initiatives
              </h3>
              <p className="text-sm text-mountain-600 dark:text-mountain-400">
                Supporting development and relief efforts in Sherpa villages back home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-white dark:bg-mountain-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-mountain-800 to-mountain-900 dark:from-mountain-700 dark:to-mountain-800 rounded-2xl p-8 md:p-10 text-center">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-mountain-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tax-Deductible Donations
            </h3>
            <p className="text-cream-200 mb-6">
              The Himalayan Sherpa Club of Sonoma is a registered 501(c)(3) non-profit organization. 
              All donations are tax-deductible to the fullest extent allowed by law. 
              You will receive a receipt for your records.
            </p>
            <p className="text-sm text-cream-300">
              For questions about donations, please contact us at{' '}
              <a href="mailto:clubhimalayansherpa@gmail.com" className="text-gold-400 hover:text-gold-300 underline">
                clubhimalayansherpa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-cream-100 dark:bg-mountain-800 border-t border-cream-200 dark:border-mountain-700">
        <div className="container-custom text-center">
          <p className="text-mountain-700 dark:text-mountain-300 mb-4">
            Have questions about donating or want to discuss other ways to support our mission?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-burgundy-700 dark:text-burgundy-400 hover:text-burgundy-800 dark:hover:text-burgundy-300 font-semibold transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
