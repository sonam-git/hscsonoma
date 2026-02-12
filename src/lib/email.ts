import nodemailer from 'nodemailer';

// Create reusable transporter using Gmail SMTP
const createTransporter = () => {
  // Validate required environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const transporter = createTransporter();
  
  const fromEmail = process.env.GMAIL_USER;
  
  await transporter.sendMail({
    from: `"Himalayan Sherpa Club of Sonoma" <${fromEmail}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    replyTo: options.replyTo,
  });
}

export async function sendMultipleEmails(emails: EmailOptions[]): Promise<void> {
  await Promise.all(emails.map(email => sendEmail(email)));
}

export function isEmailConfigured(): boolean {
  return !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}
