'use client';

import { useState, FormEvent } from 'react';

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

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
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
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            className="input-field"
            placeholder="First name"
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
            className="input-field"
            placeholder="Last name"
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
          className="input-field"
          placeholder="your.email@example.com"
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
          className="input-field"
          placeholder="(555) 123-4567"
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
          className="input-field"
          placeholder="123 Main St"
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
            className="input-field"
            placeholder="Sonoma"
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
            className="input-field"
            placeholder="95476"
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
          <option value="individual">Individual Member</option>
          <option value="family">Family Membership</option>
          <option value="student">Student Member</option>
          <option value="supporting">Supporting Member</option>
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
          className="input-field resize-none"
          placeholder="Tell us more about yourself or why you'd like to join..."
        />
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
