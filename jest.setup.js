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
    const { priority, fill, src, ...rest } = props;
    return <img src={typeof src === 'object' ? src.src : src} {...rest} alt={rest.alt || ''} />;
  },
}));

// Mock pour fetch qui sera utilisé dans les tests
if (typeof global.fetch !== 'function') {
  global.fetch = jest.fn();
}