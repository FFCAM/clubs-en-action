# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm install` - Install dependencies (pnpm is required)
- `pnpm dev` - Start development server with Turbopack (recommended)
- `pnpm dev:webpack` - Start development server with Webpack (fallback option)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Next.js linter

### Testing
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:with-server` - Run tests with development server
- `pnpm test:integration` - Run integration tests only
- `pnpm test:all` - Run all tests with server and coverage
- `pnpm test -- __tests__/contact-form.test.tsx` - Test a single file
- `pnpm test -- --coverage` - Run tests with coverage report

### Deployment
- `pnpm pages:build` - Build for Cloudflare Pages using next-on-pages
- `pnpm preview` - Preview Cloudflare Pages build locally with Wrangler
- `pnpm deploy` - Deploy to Cloudflare Pages

## Architecture Overview

This is a Next.js 15 application using the App Router, deployed on Cloudflare Pages with edge runtime support.

### Core Technologies
- **Framework**: Next.js 15.5 with React 19 and App Router
- **Styling**: Tailwind CSS with custom FFCAM brand colors
- **Deployment**: Cloudflare Pages with Edge Runtime
- **Testing**: Jest with React Testing Library
- **Email**: Resend API for contact form notifications
- **Validation**: Zod for environment variables and runtime validation
- **Package Manager**: pnpm (required)

### Project Structure
- `/src/app/` - Next.js App Router pages and API routes
  - `/api/contact/` - Contact form submission endpoint with CSRF protection
  - `/api/csrf/` - CSRF token generation endpoint
  - `/confidentialite/` - Privacy policy page
  - `/webinaires/` - Webinar summary pages (French URLs)
    - `/outils-collaboratifs/` - Collaborative tools webinar summary
    - `/environnement-partenariats/` - Environment partnerships webinar detailed summary
  - Page components use `.tsx` extension
- `/src/components/` - Reusable React components
  - `/forms/` - Form components (e.g., ContactForm)
  - `/home/` - Homepage sections (Hero, FAQ, Solutions, Vision, Webinars)
  - `/layout/` - Layout components (Navbar, Footer)
  - `/ui/` - UI components library (FFCAMComponents)
  - `/webinars/` - Webinar-specific components (summaries, resources, Q&A sections)
- `/src/utils/` - Utility functions
  - `/csrf/` - CSRF token generation and verification
  - `email.ts` - Email sending functionality using Resend
- `/src/env.ts` - Environment variables validation with Zod (fails fast on missing vars)
- `/__tests__/` - Test files organized by component/feature

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
   - Webinar components in `/webinars/` for summaries, resources, and Q&A sections

4. **Security Headers**: Comprehensive security headers configured in `next.config.ts` including CSP, HSTS, and other protections.

5. **Testing Strategy**:
   - Component tests with user interaction simulation
   - API route testing with mocked dependencies
   - Path aliases configured for clean imports (`@/components`, `@/utils`, etc.)
   - Jest configuration in `jest.config.js` with jsdom environment
   - Test files in `__tests__/` directory

### Environment Variables Required
All variables are validated at startup with Zod (`src/env.ts`). The app will fail to start if any are missing.
- `RESEND_API_KEY` - API key for Resend email service
- `CONTACT_EMAIL` - Destination email for form submissions
- `CSRF_SECRET` - Secret for HMAC signing of CSRF tokens (minimum 32 characters)

### Cloudflare Integration
- Uses `@cloudflare/next-on-pages` for deployment
- KV namespace binding: `CLUBS_KV` (configured in wrangler.jsonc)
- Edge runtime required for all API routes
- Static assets served from `.vercel/output/static` directory
- Compatibility date: 2025-05-10 with nodejs_compat flag

### Font Loading
The application uses Poppins font loaded locally via Next.js font optimization (no external font requests).

### Webinar Management
- **URL Structure**: Uses French URLs (`/webinaires/`) for consistency with target audience
- **Navigation**: All internal links use absolute paths (`/#section`) to work properly from subpages
- **Content Organization**: Past webinars moved to dedicated summary pages with detailed content
- **Upcoming Webinars**: Future webinars displayed with calendar integration and Zoom links when available
- **Calendar Integration**: Uses add-to-calendar-button-react for calendar exports