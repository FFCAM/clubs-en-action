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
    const { priority, ...rest } = props;
    return <img {...rest} alt={rest.alt || ''} />;
  },
}));

// Mock pour fetch qui sera utilisé dans les tests
if (typeof global.fetch !== 'function') {
  global.fetch = jest.fn();
}