import { Metadata } from 'next';
import MembershipForm from '@/components/forms/MembershipForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Us - Become a Member',
  description: 'Join the Himalayan Sherpa Club of Sonoma. Become a member and help us preserve Sherpa culture and strengthen our community.',
};

const membershipBenefits = [
  'Participate in cultural events and celebrations',
  'Connect with the Sherpa community in Sonoma',
  'Access to community resources and support',
  'Help preserve Sherpa heritage for future generations',
  'Vote in club elections and decisions',
  'Volunteer opportunities and leadership roles',
];

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-himalayan">
        <div className="relative container-custom text-center">
          <p className="font-tibetan text-xl text-gold-400 mb-4">༄༅། ང་ཚོ་དང་མཉམ་ཞུགས།</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Together, we share our values, support one another, and preserve our rich cultural heritage.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path className="fill-cream-50 dark:fill-mountain-900" d="M0,60 L0,30 L240,45 L480,20 L720,40 L960,15 L1200,35 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-cream-50 dark:bg-mountain-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-burgundy-600 dark:text-burgundy-400 font-medium mb-2 uppercase tracking-wide text-sm">
                Membership Benefits
              </p>
              <h2 className="section-title mb-6">Why Join HSC?</h2>
              <p className="text-lg text-mountain-600 dark:text-mountain-300 mb-8">
                By giving and receiving, we create deeper bonds, celebrate our traditions, 
                and strengthen our collective spirit. Together, We Thrive!
              </p>

              <ul className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-forest-100 dark:bg-forest-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-forest-700 dark:text-forest-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-mountain-700 dark:text-mountain-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-mountain-800 rounded-2xl shadow-xl dark:shadow-mountain-950/50 p-8">
              <h2 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-6">
                Membership Application
              </h2>
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-mountain-800">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-serif font-bold text-mountain-900 dark:text-cream-50 mb-4">
            Have Questions?
          </h3>
          <p className="text-mountain-600 dark:text-mountain-300 mb-6 max-w-xl mx-auto">
            We&apos;re here to help. Feel free to reach out to us for any questions about membership or our community.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
