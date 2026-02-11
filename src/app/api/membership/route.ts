import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface MembershipFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  membershipType: 'individual' | 'family' | 'student' | 'senior' | 'lifetime';
  interests: string[];
  volunteerInterest: boolean;
  message?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateMembershipForm(data: MembershipFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters long');
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters long');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.phone || !/^[\d\s\-+()]{7,}$/.test(data.phone)) {
    errors.push('Please provide a valid phone number');
  }

  if (!data.address || data.address.trim().length < 5) {
    errors.push('Please provide a valid address');
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.push('Please provide a valid city');
  }

  if (!data.state || data.state.trim().length < 2) {
    errors.push('Please provide a valid state');
  }

  if (!data.zipCode || !/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
    errors.push('Please provide a valid ZIP code');
  }

  const validMembershipTypes = ['individual', 'family', 'student', 'senior', 'lifetime'];
  if (!data.membershipType || !validMembershipTypes.includes(data.membershipType)) {
    errors.push('Please select a valid membership type');
  }

  return { valid: errors.length === 0, errors };
}

const membershipPricing: Record<string, string> = {
  individual: '$50/year',
  family: '$75/year',
  student: '$25/year',
  senior: '$35/year',
  lifetime: '$500 (one-time)',
};

export async function POST(request: NextRequest) {
  try {
    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is not configured');
      return NextResponse.json(
        { success: false, message: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const formData: MembershipFormData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      membershipType: body.membershipType,
      interests: body.interests || [],
      volunteerInterest: body.volunteerInterest || false,
      message: body.message || '',
    };

    // Validate form data
    const validation = validateMembershipForm(formData);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'membership@himalayansherpaclubsonoma.org';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@himalayansherpaclubsonoma.org';

    const fullName = `${formData.firstName} ${formData.lastName}`;
    const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`;

    // Email to admin
    const adminMessage = {
      to: adminEmail,
      from: fromEmail,
      replyTo: formData.email,
      subject: `[HSCS Membership] New ${formData.membershipType} Application - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #722F37, #8B4049); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Membership Application</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: #722F37; color: white; padding: 10px 15px; border-radius: 5px; margin-bottom: 20px;">
              <strong>Membership Type:</strong> ${formData.membershipType.charAt(0).toUpperCase() + formData.membershipType.slice(1)} 
              (${membershipPricing[formData.membershipType]})
            </div>
            
            <h2 style="color: #1a1a1a; margin-top: 0;">Applicant Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullAddress}</td>
              </tr>
            </table>
            
            <h3 style="color: #1a1a1a; margin-top: 20px;">Interests & Involvement</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Interests:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                  ${formData.interests.length > 0 ? formData.interests.join(', ') : 'None specified'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Volunteer:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                  ${formData.volunteerInterest ? '✅ Interested in volunteering' : 'Not specified'}
                </td>
              </tr>
            </table>
            
            ${formData.message ? `
            <h3 style="color: #1a1a1a; margin-top: 20px;">Additional Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
            ` : ''}
          </div>
          <div style="padding: 15px; background: #333; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              Himalayan Sherpa Club of Sonoma • Membership Application
            </p>
          </div>
        </div>
      `,
      text: `
New Membership Application

Membership Type: ${formData.membershipType} (${membershipPricing[formData.membershipType]})

Applicant Information:
Name: ${fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${fullAddress}

Interests: ${formData.interests.length > 0 ? formData.interests.join(', ') : 'None specified'}
Volunteer Interest: ${formData.volunteerInterest ? 'Yes' : 'No'}

${formData.message ? `Additional Message:\n${formData.message}` : ''}

---
Himalayan Sherpa Club of Sonoma
      `,
    };

    // Auto-reply to applicant
    const autoReplyMessage = {
      to: formData.email,
      from: fromEmail,
      subject: 'Welcome! Your HSCS Membership Application Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #722F37, #8B4049); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to Our Community!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <p style="font-size: 16px; color: #333;">Dear ${formData.firstName},</p>
            <p style="font-size: 16px; color: #333;">
              Thank you for your interest in joining the Himalayan Sherpa Club of Sonoma! We are thrilled 
              to receive your membership application and look forward to welcoming you to our community.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #722F37; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #722F37;">Your Application Summary:</h3>
              <p><strong>Membership Type:</strong> ${formData.membershipType.charAt(0).toUpperCase() + formData.membershipType.slice(1)}</p>
              <p><strong>Annual Fee:</strong> ${membershipPricing[formData.membershipType]}</p>
            </div>
            
            <h3 style="color: #333;">What's Next?</h3>
            <ol style="color: #333;">
              <li>Our membership team will review your application within 2-3 business days.</li>
              <li>You'll receive payment instructions via email.</li>
              <li>Once payment is received, your membership will be activated.</li>
              <li>You'll receive a welcome packet with information about upcoming events and member benefits.</li>
            </ol>
            
            <h3 style="color: #333;">Member Benefits Include:</h3>
            <ul style="color: #333;">
              <li>Access to all community events and celebrations</li>
              <li>Voting rights in club elections</li>
              <li>Discounts on cultural programs and workshops</li>
              <li>Connection with the Sherpa community in Sonoma County</li>
              <li>Newsletter and updates on community news</li>
            </ul>
            
            <p style="font-size: 16px; color: #333;">
              If you have any questions in the meantime, please don't hesitate to reach out.
            </p>
            <p style="font-size: 16px; color: #333;">
              Warm regards,<br>
              <strong>Himalayan Sherpa Club of Sonoma</strong><br>
              Membership Committee
            </p>
          </div>
          <div style="padding: 20px; background: #333; text-align: center;">
            <p style="color: #fff; margin: 0 0 10px 0;">Follow us on social media</p>
            <p style="margin: 0;">
              <a href="https://facebook.com/himalayansherpaclubsonoma" style="color: #fff; margin: 0 10px;">Facebook</a>
              <a href="https://instagram.com/hscssonoma" style="color: #fff; margin: 0 10px;">Instagram</a>
            </p>
          </div>
        </div>
      `,
      text: `
Dear ${formData.firstName},

Thank you for your interest in joining the Himalayan Sherpa Club of Sonoma! We are thrilled to receive your membership application and look forward to welcoming you to our community.

Your Application Summary:
- Membership Type: ${formData.membershipType}
- Annual Fee: ${membershipPricing[formData.membershipType]}

What's Next?
1. Our membership team will review your application within 2-3 business days.
2. You'll receive payment instructions via email.
3. Once payment is received, your membership will be activated.
4. You'll receive a welcome packet with information about upcoming events and member benefits.

Member Benefits Include:
- Access to all community events and celebrations
- Voting rights in club elections
- Discounts on cultural programs and workshops
- Connection with the Sherpa community in Sonoma County
- Newsletter and updates on community news

If you have any questions in the meantime, please don't hesitate to reach out.

Warm regards,
Himalayan Sherpa Club of Sonoma
Membership Committee
      `,
    };

    // Send emails
    await Promise.all([
      sgMail.send(adminMessage),
      sgMail.send(autoReplyMessage),
    ]);

    return NextResponse.json(
      { success: true, message: 'Your membership application has been submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Membership form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    );
  }
}
