#!/usr/bin/env bash
# Getting Started Script - Production Security Setup

echo "🔒 Zephyrs Fitness - Production Security Setup"
echo "=============================================="
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
if npm install; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Step 2: Setup environment
echo "🔑 Step 2: Setting up environment variables..."
if [ ! -f .env.local ]; then
    echo "Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your API keys:"
    echo "   nano .env.local"
    echo "   or"
    echo "   code .env.local"
else
    echo "✅ .env.local already exists"
fi
echo ""

# Step 3: Run security checks
echo "🔐 Step 3: Running security checks..."
echo ""

echo "Running ESLint..."
npm run lint
LINT_STATUS=$?

echo ""
echo "Running TypeScript check..."
npm run type-check
TYPE_STATUS=$?

echo ""
echo "Running security audit..."
npm run security:audit
AUDIT_STATUS=$?

echo ""
echo "=============================================="
echo "✅ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your actual API keys"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "Before deploying to production:"
echo "1. Review SECURITY.md"
echo "2. Configure server headers (DEPLOYMENT_SECURITY_HEADERS.md)"
echo "3. Run: npm run build"
echo "4. Test: npm run preview"
echo ""
echo "📚 Documentation:"
echo "   - SECURITY.md - Security best practices"
echo "   - PRODUCTION_SECURITY.md - Implementation guide"
echo "   - DEPLOYMENT_SECURITY_HEADERS.md - Server configuration"
echo "   - SECURITY_QUICK_REFERENCE.md - Quick lookup"
echo ""

if [ $LINT_STATUS -eq 0 ] && [ $TYPE_STATUS -eq 0 ]; then
    echo "🎉 All security checks passed!"
else
    echo "⚠️  Some security checks need attention. Please review above."
fi
