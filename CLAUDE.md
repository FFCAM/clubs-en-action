# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm install` - Install dependencies (pnpm is required)
- `pnpm dev` - Start development server with Turbopack (recommended)
- `pnpm dev:webpack` - Start development server with Webpack
- `pnpm build` - Build for production
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm lint` - Run Next.js linter

### Deployment
- `pnpm pages:build` - Build for Cloudflare Pages using next-on-pages
- `pnpm preview` - Preview Cloudflare Pages build locally with Wrangler
- `pnpm deploy` - Deploy to Cloudflare Pages

### Test a single file
```bash
pnpm test -- __tests__/contact-form.test.tsx
```

## Architecture Overview

This is a Next.js 15 application using the App Router, deployed on Cloudflare Pages with edge runtime support.

### Core Technologies
- **Framework**: Next.js 15.3.1 with React 19 and App Router
- **Styling**: Tailwind CSS with custom FFCAM brand colors
- **Deployment**: Cloudflare Pages with Edge Runtime
- **Testing**: Jest with React Testing Library
- **Email**: Resend API for contact form notifications

### Project Structure
- `/src/app/` - Next.js App Router pages and API routes
  - `/api/contact/` - Contact form submission endpoint with CSRF protection
  - `/api/csrf/` - CSRF token generation endpoint
  - Page components use `.tsx` extension
- `/src/components/` - Reusable React components
  - `/forms/` - Form components (e.g., ContactForm)
  - `/home/` - Homepage sections (Hero, FAQ, Solutions, etc.)
  - `/layout/` - Layout components (Navbar, Footer)
  - `/ui/` - UI components library (FFCAMComponents)
- `/src/utils/` - Utility functions
  - `/csrf/` - CSRF token generation and verification
  - `email.ts` - Email sending functionality using Resend

### Key Architectural Patterns

1. **Edge Runtime Compatibility**: All API routes must include `export const runtime = "edge"` for Cloudflare Pages compatibility.

2. **CSRF Protection**: Double Submit Cookie Pattern implementation
   - Token generated in `/api/csrf/` and stored as httpOnly cookie
   - Token must be included in form submissions and validated server-side
   - Tokens expire after 15 minutes

3. **Component Organization**: 
   - Section components are organized by feature (e.g., `home/` folder)
   - Each major section has its own component file
   - Shared UI components are in `ui/FFCAMComponents.tsx`

4. **Security Headers**: Comprehensive security headers configured in `next.config.ts` including CSP, HSTS, and other protections.

5. **Testing Strategy**:
   - Component tests with user interaction simulation
   - API route testing with mocked dependencies
   - Path aliases configured for clean imports (`@/components`, `@/utils`, etc.)

### Environment Variables Required
- `RESEND_API_KEY` - API key for Resend email service
- `CONTACT_EMAIL` - Destination email for form submissions

### Cloudflare Integration
- Uses `@cloudflare/next-on-pages` for deployment
- KV namespace binding: `CLUBS_KV` (configured in wrangler.jsonc)
- Edge runtime required for all API routes
- Static assets served from `.vercel/output/static` directory

### Font Loading
The application uses Poppins font loaded locally via Next.js font optimization (no external font requests).