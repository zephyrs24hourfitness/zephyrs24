/**
 * Security utilities for production React application
 * Handles XSS prevention, input validation, and other security concerns
 */

import DOMPurify from 'dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol'],
    ALLOWED_ATTR: ['href', 'title', 'target'],
    FORCE_BODY: false,
    RETURN_TRUSTED_TYPE: false
  });
};

/**
 * Sanitize plain text (escapes HTML)
 */
export const sanitizeText = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate URL to prevent javascript: and data: protocols
 */
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return /^https?:$/.test(parsedUrl.protocol);
  } catch {
    return false;
  }
};

/**
 * Validate phone number format
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Get safe environment variable (with fallback)
 */
export const getSafeEnvVar = (key: string, defaultValue: string = ''): string => {
  const value = (import.meta.env[key] as string) || defaultValue;
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return String(value);
};

/**
 * Rate limit helper - Simple client-side rate limiting
 * Returns true if action is allowed, false if rate limited
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}

/**
 * CSRF token helper
 */
export const generateCsrfToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Secure storage helper - uses sessionStorage for sensitive data
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      console.error('Failed to set secure storage item:', error);
    }
  },
  
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error('Failed to get secure storage item:', error);
      return null;
    }
  },
  
  removeItem: (key: string): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove secure storage item:', error);
    }
  }
};

/**
 * Error handler - safe error logging without exposing sensitive info
 */
export const safeErrorHandler = (error: unknown): string => {
  if (error instanceof Error) {
    // In production, don't expose stack traces
    const isProduction = import.meta.env.MODE === 'production';
    if (isProduction) {
      console.error('An error occurred:', error.message);
      return 'An unexpected error occurred. Please try again later.';
    }
    return error.message;
  }
  return 'An unexpected error occurred';
};

/**
 * Validate and sanitize JSON data
 */
export const safeJsonParse = (data: string): Record<string, unknown> | null => {
  try {
    const parsed: unknown = JSON.parse(data);
    // Ensure it's an object, not an array or primitive
    if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
    console.warn('Invalid JSON structure');
    return null;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;
  }
};
