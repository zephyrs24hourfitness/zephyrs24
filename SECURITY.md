# Security & Production Guidelines

## Overview
This document outlines security best practices and production deployment guidelines for the Zephyrs Fitness React application.

## Table of Contents
1. [Security Features](#security-features)
2. [Environment Configuration](#environment-configuration)
3. [Code Security](#code-security)
4. [Build & Deployment](#build--deployment)
5. [Monitoring & Logging](#monitoring--logging)
6. [Compliance](#compliance)

## Security Features

### 1. XSS (Cross-Site Scripting) Prevention
- **DOMPurify Integration**: All user-generated content is sanitized using DOMPurify
- **Content Sanitization Functions**:
  - `sanitizeHtml()` - For HTML content with allowed tags
  - `sanitizeText()` - For plain text (escapes HTML)
- **Usage Example**:
  ```tsx
  import { sanitizeHtml } from '@/utils/security';
  
  const safeContent = sanitizeHtml(userInput);
  return <div dangerouslySetInnerHTML={{ __html: safeContent }} />;
  ```

### 2. Security Headers
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing attacks
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - Browser XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Control referrer information
- `Permissions-Policy` - Disable dangerous APIs (geolocation, microphone, camera)

### 3. Input Validation
- **Email Validation**: `isValidEmail()` - RFC-compliant format check
- **URL Validation**: `isValidUrl()` - Prevents javascript: and data: protocols
- **Phone Validation**: `isValidPhoneNumber()` - Validates phone number format
- **JSON Validation**: `safeJsonParse()` - Safe JSON parsing with type checking

### 4. Error Handling
- **Error Boundary Component**: Catches React component errors
  - Prevents stack traces from being exposed in production
  - Shows user-friendly error messages
  - Usage:
    ```tsx
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
    ```
- **Safe Error Handler**: `safeErrorHandler()` - Logs errors safely

### 5. CSRF Protection
- **Token Generation**: `generateCsrfToken()` - Generates cryptographically secure tokens
- **Usage for Forms**: Store token in session and validate on submission

### 6. Rate Limiting
- **Client-Side Rate Limiter**: `RateLimiter` class
  ```tsx
  const limiter = new RateLimiter(5, 60000); // 5 attempts per 60 seconds
  
  if (limiter.isAllowed('form-submit')) {
    // Process form
  } else {
    // Show "too many requests" message
  }
  ```

### 7. Secure Storage
- **Session Storage**: `secureStorage` - Uses sessionStorage (not localStorage)
  - Automatically cleared when browser closes
  - Usage:
    ```tsx
    import { secureStorage } from '@/utils/security';
    
    secureStorage.setItem('token', authToken);
    const token = secureStorage.getItem('token');
    ```

### 8. TypeScript Strict Mode
- Full strict type checking enabled
- No implicit any types
- Strict null checks
- Unused variables and parameters detection
- No unreachable code
- Comprehensive error detection

## Environment Configuration

### Setup
1. **Copy environment template**:
   ```bash
   cp .env.example .env.local
   ```

2. **Update variables** (never commit .env.local):
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   VITE_ENABLE_ERROR_REPORTING=true
   ```

3. **Available Variables**:
   - `VITE_GEMINI_API_KEY` - API key for AI features
   - `VITE_ENVIRONMENT` - dev/production
   - `VITE_ENABLE_CSP` - Enable Content Security Policy
   - `VITE_ENABLE_ERROR_REPORTING` - Send errors to monitoring service
   - `VITE_MAINTENANCE_MODE` - Enable maintenance mode

### Production Environment (.env.production)
Automatically loaded when building for production:
```
VITE_ENVIRONMENT=production
VITE_ENABLE_CSP=true
VITE_ENABLE_ERROR_REPORTING=true
```

## Code Security

### ESLint Security Rules
Run ESLint to catch security issues:
```bash
npm run lint
```

**Enforced Rules**:
- No eval() or Function() constructor
- No unsafe regex patterns
- No script URLs
- Type-safe practices
- No floating promises

### TypeScript Best Practices
- Always use `const` and `let`, never `var`
- Use strict equality (`===` and `!==`)
- Explicit function return types
- No `any` types allowed
- Handle all async operations properly

### Dependency Security
```bash
# Audit dependencies for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Check outdated dependencies
npm outdated
```

## Build & Deployment

### Development Build
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

**Build Features**:
- Code minification and obfuscation
- Code splitting (vendor, animations chunks)
- Disabled source maps in production
- Tree-shaking for dead code elimination
- Optimized bundle size

### Build Output
- Built files in `/dist` directory
- Ready for deployment to CDN/static hosting
- All security headers configured

### Deployment Checklist
- [ ] Environment variables configured
- [ ] SSL/TLS certificate installed
- [ ] Security headers enabled on server
- [ ] CORS configured appropriately
- [ ] API rate limiting configured
- [ ] Error reporting service integrated
- [ ] Monitoring/logging enabled
- [ ] Content Security Policy configured
- [ ] Regular dependency updates scheduled

## Monitoring & Logging

### Error Tracking Integration
To integrate with error tracking services (Sentry, LogRocket, etc.):

1. **Edit ErrorBoundary.tsx**:
   ```tsx
   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
     if (import.meta.env.MODE === 'production') {
       // Send to Sentry
       Sentry.captureException(error);
     }
   }
   ```

2. **Add API error handling**:
   ```tsx
   import { safeErrorHandler } from '@/utils/security';
   
   try {
     await apiCall();
   } catch (error) {
     const message = safeErrorHandler(error);
     // Log to error tracking service
   }
   ```

### Console Logging (Production)
- Warnings and errors only
- No sensitive information in logs
- Use `console.error()` for errors
- Use `console.warn()` for warnings

## Compliance

### Security Standards
- ✅ OWASP Top 10 protections
- ✅ Content Security Policy (CSP)
- ✅ XSS prevention (DOMPurify)
- ✅ CSRF token support
- ✅ Secure headers
- ✅ Type-safe code (TypeScript strict mode)

### Data Protection
- No sensitive data in localStorage (use sessionStorage)
- No API keys in frontend code (use .env variables)
- No personal data exposure in errors
- GDPR-compliant error handling

### Regular Security Audits
- Run `npm audit` before deployment
- Review dependency updates monthly
- Test security headers on production
- Monitor error logs for patterns

## Quick Security Checklist

Before deploying to production:

```
Security
- [ ] All dependencies audited (npm audit)
- [ ] No console.log of sensitive data
- [ ] ErrorBoundary wraps app
- [ ] DOMPurify used for user content
- [ ] Input validation in place
- [ ] API keys in .env files

Code Quality
- [ ] No ESLint errors/warnings
- [ ] TypeScript strict mode passes
- [ ] No unused variables
- [ ] Explicit return types

Build
- [ ] Build succeeds (npm run build)
- [ ] No build warnings
- [ ] Source maps disabled in production
- [ ] Chunk size warnings reviewed

Deployment
- [ ] HTTPS/SSL enabled
- [ ] Security headers configured
- [ ] CORS policies set
- [ ] Environment variables set
- [ ] Error tracking integrated
- [ ] Monitoring enabled
```

## Resources
- [OWASP React Security](https://owasp.org/www-community/attacks/DOM_based_XSS_Prevention_Cheat_Sheet)
- [DOMPurify Documentation](https://github.com/cure53/DOMPurify)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

## Support
For security issues, do not open public issues. Please follow responsible disclosure practices.
