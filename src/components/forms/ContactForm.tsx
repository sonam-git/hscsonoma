'use client';

import { useState, useEffect, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

// Generate a simple client-side token
function generateClientToken(timestamp: number): string {
  const data = `${timestamp}-hsc-contact-form`;
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Security: Track when form was loaded
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  // Security: Honeypot field (invisible to users, bots will fill it)
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    // Record when form was loaded for timing validation
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Client-side validation
    if (formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Please enter a longer message');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Security fields
          _honeypot: honeypot, // Should be empty
          _timestamp: formLoadTime,
          _token: generateClientToken(formLoadTime),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Something went wrong');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
      // Reset form load time for next submission
      setFormLoadTime(Date.now());
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from real users, bots will fill it */}
      <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="label-text">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          className="input-field"
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-text">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={254}
          className="input-field"
          placeholder="your.email@example.com"
          autoComplete="email"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label-text">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={20}
          className="input-field"
          placeholder="(555) 123-4567"
          autoComplete="tel"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="label-text">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          maxLength={200}
          className="input-field"
          placeholder="Subject"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-text">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          maxLength={5000}
          className="input-field resize-none"
          placeholder="How can we help you?"
        />
        <p className="text-xs text-mountain-500 dark:text-mountain-400 mt-1">
          {formData.message.length}/5000 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-forest-100 dark:bg-forest-900/50 text-forest-800 dark:text-forest-300 rounded-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 rounded-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
    </form>
  );
}
