#!/bin/bash

# LaunchKit Setup Script
# This script helps you configure LaunchKit with real services

set -e

echo "==================================="
echo "  LaunchKit Setup"
echo "==================================="
echo ""

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "Error: Node.js 18+ required. Current version: $(node -v)"
  exit 1
fi

echo "Node.js version: $(node -v) ✓"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install
echo ""

# Check for .env.local
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example"
  echo "Please edit .env.local with your actual values:"
  echo ""
  echo "  Required:"
  echo "    - DATABASE_URL (PostgreSQL connection string)"
  echo "    - BETTER_AUTH_SECRET (random 32+ char string)"
  echo "    - STRIPE_SECRET_KEY"
  echo "    - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
  echo "    - STRIPE_WEBHOOK_SECRET"
  echo "    - STRIPE_PRO_PRICE_ID"
  echo "    - STRIPE_BUSINESS_PRICE_ID"
  echo "    - RESEND_API_KEY"
  echo ""
  echo "  Optional:"
  echo "    - GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET"
  echo "    - GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET"
  echo ""
else
  echo ".env.local already exists ✓"
fi

# Generate BETTER_AUTH_SECRET if needed
if grep -q "change-me-to-a-random-secret-key-at-least-32-chars" .env.local 2>/dev/null; then
  NEW_SECRET=$(openssl rand -base64 32)
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s/change-me-to-a-random-secret-key-at-least-32-chars/$NEW_SECRET/" .env.local
  else
    sed -i "s/change-me-to-a-random-secret-key-at-least-32-chars/$NEW_SECRET/" .env.local
  fi
  echo "Generated new BETTER_AUTH_SECRET ✓"
fi

echo ""
echo "==================================="
echo "  Setup Complete!"
echo "==================================="
echo ""
echo "Next steps:"
echo "  1. Edit .env.local with your service credentials"
echo "  2. Run 'npx drizzle-kit push' to set up the database"
echo "  3. Run 'npm run dev' to start the development server"
echo ""
echo "For deployment:"
echo "  1. Push to GitHub"
echo "  2. Import in Vercel"
echo "  3. Add environment variables in Vercel dashboard"
echo "  4. Set up Stripe webhook endpoint"
echo ""
