import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.cloudflare.com scripts.simpleanalyticscdn.com; connect-src 'self' *.resend.com *.cloudflare.com queue.simpleanalyticscdn.com; img-src 'self' data: blob: queue.simpleanalyticscdn.com; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-ancestors 'self'; form-action 'self';",
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  poweredByHeader: false,
};

export default withPayload(nextConfig);
