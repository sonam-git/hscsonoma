import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, isEmailConfigured } from '@/lib/email';
import { sanitizeEmail } from '@/lib/security';

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
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
    const email = sanitizeEmail(body.email || '');

    // Validate email
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send notification email to admin
    const adminEmail = process.env.GMAIL_USER || process.env.CONTACT_EMAIL;
    
    if (!adminEmail) {
      return NextResponse.json(
        { success: false, message: 'Admin email not configured' },
        { status: 500 }
      );
    }

    await sendEmail({
      to: adminEmail,
      subject: '📬 New Newsletter Subscriber - HSC Sonoma',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #722F37, #2C3E50); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .email-box { background: white; padding: 15px 20px; border-radius: 8px; border-left: 4px solid #D4AF37; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📬 New Newsletter Subscriber</h1>
            </div>
            <div class="content">
              <p>A new visitor has subscribed to the HSC newsletter!</p>
              
              <div class="email-box">
                <strong>Email Address:</strong><br>
                <a href="mailto:${email}" style="color: #722F37; font-size: 18px;">${email}</a>
              </div>
              
              <p style="color: #666; font-size: 14px;">
                <strong>Subscribed on:</strong> ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
              
              <p style="color: #666; font-size: 14px;">
                You can add this email to your newsletter mailing list (e.g., Mailchimp, Google Groups, etc.)
              </p>
            </div>
            <div class="footer">
              <p>Himalayan Sherpa Club of Sonoma</p>
              <p>This is an automated notification from your website.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Newsletter Subscriber\n\nEmail: ${email}\nSubscribed on: ${new Date().toLocaleString()}`,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! You will receive updates about our events and community news.',
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}
