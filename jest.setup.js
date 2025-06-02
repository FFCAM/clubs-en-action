// jest.setup.js
require('@testing-library/jest-dom');

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Remove 'priority' prop to avoid React warning in tests
    const { priority, ...rest } = props;
    // Ensure alt attribute is present for accessibility
    const imgProps = { 
      ...rest,
      alt: rest.alt || '' // Use empty alt for decorative images if not provided
    };
    return <img {...imgProps} />;
  },
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

// Mock pour fetch qui sera utilisé dans les tests
if (typeof global.fetch !== 'function') {
  global.fetch = jest.fn();
}

// Supprimer les warnings liés à l'API Web Crypto
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => {
      const crypto = require('crypto');
      return crypto.randomBytes(arr.length);
    },
    subtle: {}
  },
});

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => Math.random().toString(36).substring(2, 15),
  },
});