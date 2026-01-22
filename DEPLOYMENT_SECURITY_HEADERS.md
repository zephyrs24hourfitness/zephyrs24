# Security Headers Configuration for Deployment

## For Nginx

```nginx
# Security Headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

# Content Security Policy
add_header Content-Security-Policy "
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' https://api.emailjs.com https://generativelanguage.googleapis.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self'
" always;

# HSTS (HTTP Strict Transport Security)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# Disable browsers from MIME type sniffing
add_header X-Content-Type-Options "nosniff" always;

# Prevent page from being displayed in a frame
add_header X-Frame-Options "SAMEORIGIN" always;

# Enable browser XSS protection
add_header X-XSS-Protection "1; mode=block" always;
```

## For Apache

```apache
# Security Headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# Content Security Policy
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com https://generativelanguage.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"

# HSTS
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

## For Express.js (Node.js Backend)

```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet for basic security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
      connectSrc: ["'self'", "https://api.emailjs.com", "https://generativelanguage.googleapis.com"],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"]
    }
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  },
  xContentTypeOptions: true,
  xFrameOptions: { action: 'deny' },
  xXssProtection: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));

// Additional security middleware
app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ limit: '10kb', extended: true }));

// CORS configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['https://yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);

module.exports = app;
```

## For Vercel / Netlify

### vercel.json
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com https://generativelanguage.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
        }
      ]
    }
  ]
}
```

### netlify.toml
```toml
[[headers]]
for = "/*"

[headers.values]
X-Content-Type-Options = "nosniff"
X-Frame-Options = "DENY"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Strict-Transport-Security = "max-age=31536000; includeSubDomains"
Permissions-Policy = "geolocation=(), microphone=(), camera=()"
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com https://generativelanguage.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
```

## Content Security Policy (CSP) Breakdown

The CSP header in the configurations above protects against:

| Directive | Protection |
|-----------|-----------|
| `default-src 'self'` | Only allow resources from same origin |
| `script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com` | Only allow scripts from trusted sources |
| `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` | Only allow styles from trusted sources |
| `img-src 'self' data: https:` | Allow images from self, data URIs, and HTTPS |
| `connect-src 'self' https://api.emailjs.com https://generativelanguage.googleapis.com` | Only allow API calls to trusted services |
| `frame-ancestors 'none'` | Prevent page from being framed (clickjacking protection) |
| `base-uri 'self'` | Only allow base href from same origin |
| `form-action 'self'` | Only allow form submissions to same origin |

## Testing Security Headers

Use these tools to verify your security headers:

1. [Security Headers Tool](https://securityheaders.com/) - Paste your domain
2. [Mozilla Observatory](https://observatory.mozilla.org/) - Comprehensive security scan
3. [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS certificate testing

## HSTS Preload Submission

After HSTS is working properly, submit your domain to:
[HSTS Preload List](https://hstspreload.org/)

This ensures even first-time visitors use HTTPS.

## Regular Updates

- Review and update security headers quarterly
- Monitor CSP violations in production
- Update allowed domains as services change
- Test headers after any deployment
