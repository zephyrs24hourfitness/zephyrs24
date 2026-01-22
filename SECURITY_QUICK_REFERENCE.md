# 🔐 Security Features Quick Reference

## Core Security Utilities

### 1. DOMPurify Sanitization
```typescript
import { sanitizeHtml, sanitizeText } from '@/utils/security';

// For HTML content (with safe tags allowed)
const safeHtml = sanitizeHtml(userGeneratedHtml);
// Allowed tags: b, i, em, strong, a, p, br, ul, li, ol
// Allowed attributes: href, title, target

// For plain text (escapes all HTML)
const safeText = sanitizeText(userInput);
```

### 2. Input Validation
```typescript
import { 
  isValidEmail, 
  isValidUrl, 
  isValidPhoneNumber,
  safeJsonParse 
} from '@/utils/security';

// Email (RFC compliant, max 254 chars)
if (isValidEmail('user@example.com')) { }

// URL (only http/https, no javascript: or data:)
if (isValidUrl('https://example.com')) { }

// Phone (international format support)
if (isValidPhoneNumber('+1 (555) 123-4567')) { }

// JSON with type checking
const data = safeJsonParse(jsonString);
```

### 3. CSRF Protection
```typescript
import { generateCsrfToken } from '@/utils/security';

// Generate token on form load
const token = generateCsrfToken();

// Send with form submission
// Validate on backend
```

### 4. Rate Limiting
```typescript
import { RateLimiter } from '@/utils/security';

// Create limiter: maxAttempts, windowMs
const limiter = new RateLimiter(5, 60000); // 5 per minute

if (limiter.isAllowed('unique-key')) {
  // Allow action
} else {
  // Block: too many attempts
}

// Reset if needed
limiter.reset('unique-key');
```

### 5. Secure Storage
```typescript
import { secureStorage } from '@/utils/security';

// Set (uses sessionStorage, cleared on browser close)
secureStorage.setItem('token', authToken);

// Get
const token = secureStorage.getItem('token');

// Remove
secureStorage.removeItem('token');
```

### 6. Safe Errors
```typescript
import { safeErrorHandler } from '@/utils/security';

try {
  // risky operation
} catch (error) {
  const message = safeErrorHandler(error);
  // In prod: generic message
  // In dev: full error message
}
```

### 7. Environment Variables
```typescript
import { getSafeEnvVar } from '@/utils/security';
import { config } from '@/utils/config';

// Get with fallback
const apiKey = getSafeEnvVar('VITE_API_KEY', '');

// Check environment
if (config.app.isProduction) {
  // Production code
}
```

---

## Error Handling

### Error Boundary Component
```tsx
import { ErrorBoundary } from '@/utils/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary fallback={<CustomError />}>
      <YourApp />
    </ErrorBoundary>
  );
}
```

**What it does:**
- Catches React render errors
- Prevents white screen crashes
- Shows user-friendly messages
- Logs errors safely
- Ready for error tracking service integration

---

## Configuration

### Type-Safe Config
```typescript
import { config } from '@/utils/config';

config.security.enableStrictMode        // true
config.security.enableErrorReporting    // prod only
config.security.cspEnabled              // prod only

config.app.isDevelopment                // boolean
config.app.isProduction                 // boolean
config.app.environment                  // 'development' | 'production'

config.api.geminiKey                    // from .env
config.api.timeout                      // 30000ms

// Validate on startup
config.validate(); // Throws if required vars missing
```

---

## Environment Variables

### Development (.env.local)
```env
VITE_GEMINI_API_KEY=your_key_here
VITE_ENVIRONMENT=development
VITE_ENABLE_CSP=true
VITE_ENABLE_ERROR_REPORTING=false
VITE_MAINTENANCE_MODE=false
```

### Production (.env.production)
```env
VITE_ENVIRONMENT=production
VITE_ENABLE_CSP=true
VITE_ENABLE_ERROR_REPORTING=true
```

**⚠️ NEVER commit sensitive values to git!**

---

## TypeScript Strict Mode

### What's Enabled
✅ No implicit `any` types
✅ Strict null checks
✅ Strict function types
✅ Strict property initialization
✅ No unused variables
✅ No unused parameters
✅ No implicit returns
✅ No fallthrough switch cases
✅ Consistent file naming

### Type Safety Benefits
- Catch bugs at compile time
- No runtime type errors
- Explicit intent in code
- Better IDE support
- Safer refactoring

---

## Code Quality & Security

### ESLint Rules Enforced
✅ No `eval()`
✅ No `Function()` constructor
✅ No unsafe regex
✅ No script URLs
✅ Explicit return types
✅ No floating promises
✅ Security patterns detected
✅ Object injection warnings

### Running Checks
```bash
npm run lint              # Check security issues
npm run lint:fix          # Auto-fix issues
npm run type-check        # TypeScript validation
npm run security:audit    # Check dependencies
```

---

## Production Build Optimizations

### What's Configured
✅ Code splitting
  - `vendor` chunk (react, react-dom, etc.)
  - `animations` chunk (framer-motion)
  - Tree-shaking for unused code

✅ Minification
  - Terser for JavaScript
  - CSS minification
  - HTML minification

✅ No Source Maps
  - Prevents exposing source code
  - Reduces bundle size

✅ Security Headers
  - XSS protection
  - Clickjacking prevention
  - MIME type sniffing prevention

### Build Command
```bash
npm run build
# Output: dist/
# Ready for deployment
```

---

## Security Headers

### Applied to Development & Production
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: [comprehensive policy]
Strict-Transport-Security: [HSTS]
```

### CSP Directives
| Directive | Allows |
|-----------|--------|
| default-src | 'self' only |
| script-src | self, Tailwind CDN |
| style-src | self, Google Fonts |
| img-src | self, https, data URIs |
| font-src | self, Google Fonts |
| connect-src | self, EmailJS, Gemini API |
| frame-ancestors | 'none' (no framing) |
| form-action | 'self' only |

See `DEPLOYMENT_SECURITY_HEADERS.md` for server config.

---

## Common Patterns

### Form Submission with Validation
```tsx
import { isValidEmail, RateLimiter } from '@/utils/security';

const limiter = new RateLimiter(3, 60000);

function ContactForm() {
  const handleSubmit = (email: string) => {
    if (!limiter.isAllowed('contact-form')) {
      setError('Too many submissions');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Invalid email');
      return;
    }
    
    // Submit safely
  };
}
```

### User Generated Content Display
```tsx
import { sanitizeHtml } from '@/utils/security';

function UserComment({ content }: { content: string }) {
  const safe = sanitizeHtml(content);
  return (
    <div dangerouslySetInnerHTML={{ __html: safe }} />
  );
}
```

### API Call with Error Handling
```tsx
import { safeErrorHandler } from '@/utils/security';

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    const message = safeErrorHandler(error);
    console.error(message);
    // Log to error tracking service
    throw error;
  }
}
```

### Secure Token Management
```tsx
import { secureStorage } from '@/utils/security';

function useAuthToken() {
  const setToken = (token: string) => {
    secureStorage.setItem('authToken', token);
  };
  
  const getToken = () => {
    return secureStorage.getItem('authToken');
  };
  
  const clearToken = () => {
    secureStorage.removeItem('authToken');
  };
  
  return { setToken, getToken, clearToken };
}
```

---

## Checklist Before Deployment

```
Pre-Deployment Security Checklist
□ npm run lint passes
□ npm run type-check passes
□ npm run security:audit passes
□ npm run build succeeds
□ No console.log of secrets
□ ErrorBoundary wraps app
□ Environment variables set
□ Security headers configured on server
□ HTTPS/SSL enabled
□ CORS policies set
□ Error tracking integrated
□ Monitoring enabled
□ Rate limiting on backend
□ Tested in production mode locally
```

---

## Resources

📚 **Documentation**
- [SECURITY.md](./SECURITY.md) - Full security guide
- [PRODUCTION_SECURITY.md](./PRODUCTION_SECURITY.md) - Implementation guide
- [DEPLOYMENT_SECURITY_HEADERS.md](./DEPLOYMENT_SECURITY_HEADERS.md) - Server config

🔗 **External Resources**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [React Security](https://reactjs.org/docs/dom-elements.html)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

🛠️ **Testing Tools**
- [Security Headers Tool](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

**Your app is now production-ready with enterprise-grade security! 🚀**
