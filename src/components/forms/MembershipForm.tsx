'use client';

import { useState, useEffect, FormEvent } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  membershipType: string;
  volunteerInterest: string[];
  message: string;
}

const volunteerOptions = [
  'Cultural Events',
  'Youth Programs',
  'Fundraising',
  'Community Outreach',
  'Administrative Support',
  'Translation/Language',
];

// Generate a simple client-side token
function generateClientToken(timestamp: number): string {
  const data = `${timestamp}-hsc-membership-form`;
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export default function MembershipForm() {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zipCode: '',
    membershipType: 'individual',
    volunteerInterest: [],
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      volunteerInterest: prev.volunteerInterest.includes(option)
        ? prev.volunteerInterest.filter(item => item !== option)
        : [...prev.volunteerInterest, option],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Client-side validation
    if (formData.firstName.trim().length < 2 || formData.lastName.trim().length < 2) {
      setErrorMessage('Please enter your full name');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!/^[\d\s\-+()]{7,}$/.test(formData.phone)) {
      setErrorMessage('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          interests: formData.volunteerInterest,
          volunteerInterest: formData.volunteerInterest.length > 0,
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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: 'CA',
        zipCode: '',
        membershipType: 'individual',
        volunteerInterest: [],
        message: '',
      });
      // Reset form load time for next submission
      setFormLoadTime(Date.now());
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from real users, bots will fill it */}
      <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="label-text">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            maxLength={50}
            className="input-field"
            placeholder="First name"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="label-text">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            maxLength={50}
            className="input-field"
            placeholder="Last name"
            autoComplete="family-name"
          />
        </div>
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
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={20}
          className="input-field"
          placeholder="(555) 123-4567"
          autoComplete="tel"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="label-text">
          Street Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          maxLength={200}
          className="input-field"
          placeholder="123 Main St"
          autoComplete="street-address"
        />
      </div>

      {/* City, State, Zip */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label htmlFor="city" className="label-text">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            maxLength={100}
            className="input-field"
            placeholder="Sonoma"
            autoComplete="address-level2"
          />
        </div>
        <div>
          <label htmlFor="state" className="label-text">
            State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="input-field"
            autoComplete="address-level1"
          >
            <option value="CA">CA</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="zipCode" className="label-text">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            maxLength={10}
            pattern="^\d{5}(-\d{4})?$"
            className="input-field"
            placeholder="95476"
            autoComplete="postal-code"
          />
        </div>
      </div>

      {/* Membership Type */}
      <div>
        <label htmlFor="membershipType" className="label-text">
          Membership Type <span className="text-red-500">*</span>
        </label>
        <select
          id="membershipType"
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="individual">General Member</option>
          <option value="family">Lifetime Member</option>
        </select>
      </div>

      {/* Volunteer Interests */}
      <div>
        <label className="label-text">
          Volunteer Interests (Optional)
        </label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {volunteerOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.volunteerInterest.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="w-4 h-4 text-burgundy-600 dark:text-burgundy-400 border-mountain-300 dark:border-mountain-600 rounded focus:ring-burgundy-500 dark:bg-mountain-700"
              />
              <span className="text-sm text-mountain-700 dark:text-mountain-300">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-text">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          maxLength={2000}
          className="input-field resize-none"
          placeholder="Tell us more about yourself or why you'd like to join..."
        />
        <p className="text-xs text-mountain-500 dark:text-mountain-400 mt-1">
          {formData.message.length}/2000 characters
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
            Submitting...
          </span>
        ) : (
          'Submit Application'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-forest-100 dark:bg-forest-900/50 text-forest-800 dark:text-forest-300 rounded-lg flex items-start gap-2">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-medium">Application Submitted!</p>
            <p className="text-sm mt-1">Thank you for your interest in joining HSC. We&apos;ll review your application and get back to you soon.</p>
          </div>
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
