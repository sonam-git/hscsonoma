/**
 * Security utilities for form protection
 * Includes: Rate limiting, honeypot detection, spam filtering, input sanitization, and bot detection
 */

// ============================================
// RATE LIMITING (In-memory for serverless)
// ============================================
interface RateLimitEntry {
  count: number;
  firstRequest: number;
  lastRequest: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per hour per IP

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Clean up old entries
  if (entry && now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitStore.delete(ip);
  }

  const currentEntry = rateLimitStore.get(ip);

  if (!currentEntry) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now, lastRequest: now });
    return { allowed: true };
  }

  if (currentEntry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((currentEntry.firstRequest + RATE_LIMIT_WINDOW - now) / 1000);
    return { allowed: false, retryAfter };
  }

  currentEntry.count++;
  currentEntry.lastRequest = now;
  rateLimitStore.set(ip, currentEntry);
  return { allowed: true };
}

// ============================================
// HONEYPOT DETECTION
// ============================================
export function isHoneypotTriggered(honeypotValue: string | undefined): boolean {
  // If honeypot field has any value, it's a bot
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

// ============================================
// TIME-BASED BOT DETECTION
// ============================================
const MIN_FORM_FILL_TIME = 3000; // 3 seconds minimum to fill form (bots are instant)
const MAX_FORM_FILL_TIME = 30 * 60 * 1000; // 30 minutes maximum (token expiry)

export function validateFormTiming(timestamp: number | undefined): { valid: boolean; reason?: string } {
  if (!timestamp) {
    return { valid: false, reason: 'Missing timestamp' };
  }

  const now = Date.now();
  const timeTaken = now - timestamp;

  if (timeTaken < MIN_FORM_FILL_TIME) {
    return { valid: false, reason: 'Form submitted too quickly' };
  }

  if (timeTaken > MAX_FORM_FILL_TIME) {
    return { valid: false, reason: 'Form session expired' };
  }

  return { valid: true };
}

// ============================================
// SPAM CONTENT DETECTION
// ============================================
const SPAM_PATTERNS = [
  // Common spam keywords
  /\b(viagra|cialis|casino|lottery|winner|congratulations|claim\s+your\s+prize)\b/i,
  // Crypto/financial scams
  /\b(bitcoin|crypto\s+investment|forex|trading\s+signal|make\s+money\s+fast)\b/i,
  // Suspicious URLs
  /\b(bit\.ly|tinyurl|goo\.gl|t\.co|shorturl)\b/i,
  // Multiple URLs (more than 3)
  /(https?:\/\/[^\s]+){4,}/i,
  // Excessive caps (more than 50% caps in long text)
  // Russian/Cyrillic characters (common in spam)
  /[\u0400-\u04FF]{10,}/,
  // Phone number harvesting patterns
  /\b(call\s+now|dial|text\s+us)\s*[:@]?\s*[\d\-+()]{10,}/i,
  // SEO spam
  /\b(buy\s+cheap|discount|free\s+shipping|order\s+now|limited\s+offer)\b/i,
  // Adult content
  /\b(xxx|porn|adult\s+content|18\+|nude)\b/i,
  // HTML injection attempts
  /<script|<iframe|javascript:|onclick|onerror/i,
  // SQL injection patterns
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b.*\b(FROM|INTO|WHERE|TABLE)\b)/i,
  // Repeated characters (spam indicator)
  /(.)\1{9,}/,
];

const SUSPICIOUS_EMAIL_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  'temp-mail.org', '10minutemail.com', 'fakeinbox.com', 'trashmail.com',
  'maildrop.cc', 'yopmail.com', 'getairmail.com', 'dispostable.com',
];

export function detectSpam(content: string): { isSpam: boolean; reasons: string[] } {
  const reasons: string[] = [];

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(content)) {
      reasons.push(`Suspicious pattern detected`);
      break; // One match is enough
    }
  }

  // Check for excessive uppercase (more than 40% in texts longer than 20 chars)
  if (content.length > 20) {
    const upperCount = (content.match(/[A-Z]/g) || []).length;
    const letterCount = (content.match(/[a-zA-Z]/g) || []).length;
    if (letterCount > 0 && upperCount / letterCount > 0.4) {
      reasons.push('Excessive uppercase characters');
    }
  }

  // Check for too many links
  const linkCount = (content.match(/https?:\/\//g) || []).length;
  if (linkCount > 3) {
    reasons.push('Too many URLs');
  }

  return { isSpam: reasons.length > 0, reasons };
}

export function isSuspiciousEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return true;

  // Check against known disposable email domains
  if (SUSPICIOUS_EMAIL_DOMAINS.some(d => domain.includes(d))) {
    return true;
  }

  // Check for suspicious patterns in email
  const suspiciousEmailPatterns = [
    /^[a-z]{1,2}\d{6,}@/i, // Single letter followed by many numbers
    /^test\d*@/i, // test emails
    /^admin@/i, // Impersonation attempts
    /^info@/i,
    /^noreply@/i,
    /\+.*@/, // Plus addressing (sometimes used for spam)
  ];

  return suspiciousEmailPatterns.some(p => p.test(email));
}

// ============================================
// INPUT SANITIZATION
// ============================================
export function sanitizeInput(input: string): string {
  if (!input) return '';

  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove script content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Escape special characters
    .replace(/[&<>"']/g, (char) => {
      const escapeMap: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
      };
      return escapeMap[char] || char;
    })
    // Remove null bytes
    .replace(/\0/g, '')
    // Trim whitespace
    .trim();
}

export function sanitizeEmail(email: string): string {
  if (!email) return '';
  
  return email
    .toLowerCase()
    .trim()
    // Remove any whitespace
    .replace(/\s/g, '')
    // Basic email sanitization
    .replace(/[<>]/g, '');
}

// ============================================
// NOTE: Token validation removed - not effective for client-side forms
// Security is handled by: honeypot, timing, rate limiting, spam detection
// ============================================

// ============================================
// COMBINED SECURITY CHECK
// ============================================
export interface SecurityCheckResult {
  passed: boolean;
  errors: string[];
}

export interface SecurityCheckOptions {
  ip: string;
  honeypot?: string;
  timestamp?: number;
  email: string;
  content: string;
}

export function performSecurityChecks(options: SecurityCheckOptions): SecurityCheckResult {
  const errors: string[] = [];

  // 1. Rate limiting
  const rateLimit = checkRateLimit(options.ip);
  if (!rateLimit.allowed) {
    errors.push(`Too many requests. Please try again in ${rateLimit.retryAfter} seconds.`);
  }

  // 2. Honeypot check
  if (isHoneypotTriggered(options.honeypot)) {
    // Don't reveal this is a honeypot - just silently reject
    errors.push('Invalid submission');
  }

  // 3. Timing check
  if (options.timestamp) {
    const timing = validateFormTiming(options.timestamp);
    if (!timing.valid) {
      errors.push(timing.reason || 'Invalid form submission');
    }
  }

  // 4. Email validation
  if (isSuspiciousEmail(options.email)) {
    errors.push('Please use a valid email address');
  }

  // 5. Spam detection
  const spamCheck = detectSpam(options.content);
  if (spamCheck.isSpam) {
    errors.push('Your message was flagged as potential spam. Please revise and try again.');
  }

  return {
    passed: errors.length === 0,
    errors,
  };
}

// ============================================
// GET CLIENT IP FROM REQUEST
// ============================================
export function getClientIP(request: Request): string {
  // Try various headers that might contain the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback
  return 'unknown';
}
