# LaunchKit Setup Checklist

Everything you need to do to go from code to a sellable product.

## Phase 1: Service Accounts (Your Manual Work)

### Database (Required)
- [ ] Create a [Neon](https://neon.tech) account (free tier available)
- [ ] Create a new project
- [ ] Copy the connection string to `DATABASE_URL` in `.env.local`
- [ ] Run `npm run db:push` to create tables

### Authentication (Required)
- [ ] Generate a random secret: `openssl rand -base64 32`
- [ ] Set `BETTER_AUTH_SECRET` in `.env.local`
- [ ] Set `BETTER_AUTH_URL` to your domain

### OAuth Providers (Optional but Recommended)
- [ ] **Google:** Create OAuth credentials at [console.cloud.google.com](https://console.cloud.google.com)
  - Create OAuth 2.0 Client ID
  - Add authorized redirect URI: `https://yourdomain.com/api/auth/callback/google`
  - Copy Client ID and Secret to `.env.local`
- [ ] **GitHub:** Create OAuth App at [github.com/settings/developers](https://github.com/settings/developers)
  - Set callback URL: `https://yourdomain.com/api/auth/callback/github`
  - Copy Client ID and Secret to `.env.local`

### Stripe Payments (Required)
- [ ] Create a [Stripe](https://stripe.com) account
- [ ] Get API keys from Dashboard > Developers > API Keys
- [ ] Set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] Create products and prices:
  - Pro plan: $29/month recurring
  - Business plan: $99/month recurring
- [ ] Copy price IDs to `STRIPE_PRO_PRICE_ID` and `STRIPE_BUSINESS_PRICE_ID`
- [ ] Set up webhook endpoint (see below)

### Stripe Webhooks
- [ ] Go to Stripe Dashboard > Developers > Webhooks
- [ ] Add endpoint: `https://yourdomain.com/api/stripe/webhook`
- [ ] Select events:
  - `checkout.session.completed`
  - `invoice.payment_succeeded`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
- [ ] Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### Email (Required)
- [ ] Create a [Resend](https://resend.com) account
- [ ] Get API key from Dashboard > API Keys
- [ ] Set `RESEND_API_KEY` in `.env.local`
- [ ] Verify your domain in Resend (for production)
- [ ] Update `FROM_EMAIL` in `src/lib/email.ts`

## Phase 2: Test Everything Locally

```bash
# Start development server
npm run dev

# Test these flows:
# 1. Visit http://localhost:3000 — landing page loads
# 2. Click "Get Started" — register page
# 3. Create account — should work with email/password
# 4. Login — should redirect to dashboard
# 5. Dashboard — should show your plan
# 6. Billing — click upgrade, should go to Stripe checkout
# 7. Complete checkout (use Stripe test card 4242 4242 4242 4242)
# 8. Verify webhook processed — check Stripe dashboard
# 9. Settings — update profile
# 10. Dark mode toggle — should work
```

## Phase 3: Deploy to Vercel

- [ ] Push code to GitHub
- [ ] Import project in [Vercel](https://vercel.com)
- [ ] Add all environment variables in Vercel dashboard
- [ ] Deploy
- [ ] Update `BETTER_AUTH_URL` to production URL
- [ ] Update `NEXT_PUBLIC_APP_URL` to production URL
- [ ] Update OAuth redirect URIs to production URLs
- [ ] Update Stripe webhook endpoint to production URL

## Phase 4: Marketing & Launch

### Brand Assets
- [ ] Design a logo (or use a placeholder)
- [ ] Create favicon (32x32 and 16x16 PNG)
- [ ] Create OG image (1200x630 PNG) — replace `public/og.svg`
- [ ] Take screenshots of:
  - Landing page (desktop + mobile)
  - Pricing page
  - Login page
  - Dashboard overview
  - Billing page
  - Settings page

### Content
- [ ] Write a compelling Product Hunt description
- [ ] Create 5-6 gallery images for Product Hunt
- [ ] Write a maker comment
- [ ] Draft Reddit posts for r/SaaS, r/webdev, r/nextjs
- [ ] Write a Dev.to article about the tech stack
- [ ] Prepare a 2-3 minute demo video or GIF

### Launch
- [ ] Submit to Product Hunt
- [ ] Post on Reddit
- [ ] Publish Dev.to article
- [ ] Share on Twitter/X
- [ ] Submit to Hacker News (Show HN)

## Environment Variables Reference

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
BETTER_AUTH_SECRET="your-random-secret"
BETTER_AUTH_URL="https://yourdomain.com"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRO_PRICE_ID="price_..."
STRIPE_BUSINESS_PRICE_ID="price_..."

# Email
RESEND_API_KEY="re_..."

# App
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NEXT_PUBLIC_APP_NAME="LaunchKit"
```
