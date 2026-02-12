import { NextRequest, NextResponse } from 'next/server';
import { sendMultipleEmails, isEmailConfigured, EmailOptions } from '@/lib/email';
import {
  performSecurityChecks,
  getClientIP,
  sanitizeInput,
  sanitizeEmail,
} from '@/lib/security';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  // Security fields
  _honeypot?: string;
  _timestamp?: number;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (data.phone && !/^[\d\s\-+()]{7,20}$/.test(data.phone)) {
    errors.push('Please provide a valid phone number');
  }

  // Length limits
  if (data.name && data.name.length > 100) {
    errors.push('Name is too long');
  }

  if (data.subject && data.subject.length > 200) {
    errors.push('Subject is too long');
  }

  if (data.message && data.message.length > 5000) {
    errors.push('Message is too long (max 5000 characters)');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check if email service is configured
    if (!isEmailConfigured()) {
      console.error('Gmail SMTP credentials are not configured');
      return NextResponse.json(
        { success: false, message: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Extract and sanitize form data
    const formData: ContactFormData = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeEmail(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      subject: sanitizeInput(body.subject || ''),
      message: sanitizeInput(body.message || ''),
      _honeypot: body._honeypot,
      _timestamp: body._timestamp,
    };

    // Perform security checks
    const securityCheck = performSecurityChecks({
      ip: clientIP,
      honeypot: formData._honeypot,
      timestamp: formData._timestamp,
      email: formData.email,
      content: `${formData.name} ${formData.subject} ${formData.message}`,
    });

    if (!securityCheck.passed) {
      console.warn(`Security check failed for IP ${clientIP}:`, securityCheck.errors);
      return NextResponse.json(
        { success: false, message: securityCheck.errors[0] || 'Security validation failed' },
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER || '';

    // Email to admin (with sanitized content)
    const adminMessage: EmailOptions = {
      to: adminEmail,
      replyTo: formData.email,
      subject: `[HSCS Contact] ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #722F37, #8B4049); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-size: 12px;">
              <strong>Security Info:</strong> IP: ${clientIP} | Time: ${new Date().toISOString()}
            </div>
            <h2 style="color: #1a1a1a; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
              </tr>
              ${formData.phone ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.subject}</td>
              </tr>
            </table>
            <h3 style="color: #1a1a1a; margin-top: 20px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="padding: 15px; background: #333; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              Himalayan Sherpa Club of Sonoma • Contact Form Submission
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Security Info: IP: ${clientIP} | Time: ${new Date().toISOString()}

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Subject: ${formData.subject}

Message:
${formData.message}

---
Himalayan Sherpa Club of Sonoma
      `,
    };

    // Auto-reply to sender
    const autoReplyMessage: EmailOptions = {
      to: formData.email,
      subject: 'Thank you for contacting Himalayan Sherpa Club of Sonoma',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #722F37, #8B4049); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Reaching Out!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <p style="font-size: 16px; color: #333;">Dear ${formData.name},</p>
            <p style="font-size: 16px; color: #333;">
              Thank you for contacting the Himalayan Sherpa Club of Sonoma. We have received your message 
              and will get back to you as soon as possible, typically within 1-2 business days.
            </p>
            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #722F37; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #722F37;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              <p style="margin-bottom: 0;">${formData.message.substring(0, 200)}${formData.message.length > 200 ? '...' : ''}</p>
            </div>
            <p style="font-size: 16px; color: #333;">
              In the meantime, feel free to explore our website for more information about our community, 
              upcoming events, and membership opportunities.
            </p>
            <p style="font-size: 16px; color: #333;">
              Warm regards,<br>
              <strong>Himalayan Sherpa Club of Sonoma</strong>
            </p>
          </div>
          <div style="padding: 20px; background: #333; text-align: center;">
            <p style="color: #fff; margin: 0 0 10px 0;">Follow us on social media</p>
            <p style="margin: 0;">
              <a href="https://www.facebook.com/profile.php?id=100070462585968" style="color: #fff; margin: 0 10px;">Facebook</a>
              <a href="https://www.instagram.com/hsc_sonoma/" style="color: #fff; margin: 0 10px;">Instagram</a>
            </p>
          </div>
        </div>
      `,
      text: `
Dear ${formData.name},

Thank you for contacting the Himalayan Sherpa Club of Sonoma. We have received your message and will get back to you as soon as possible, typically within 1-2 business days.

Your Message Summary:
Subject: ${formData.subject}
${formData.message.substring(0, 200)}${formData.message.length > 200 ? '...' : ''}

In the meantime, feel free to explore our website for more information about our community, upcoming events, and membership opportunities.

Warm regards,
Himalayan Sherpa Club of Sonoma
      `,
    };

    // Send emails
    await sendMultipleEmails([adminMessage, autoReplyMessage]);

    console.log(`Contact form submitted successfully from IP: ${clientIP}`);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
