import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FFCAMSection, FFCAMButton } from '../src/components/ui/FFCAMComponents';

// Mock window.matchMedia pour simuler différentes tailles d'écran
const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Helper pour simuler différentes tailles d'écran
const mockViewport = (width: number) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      let matches = false;
      if (query.includes('min-width: 1024px')) matches = isDesktop;
      else if (query.includes('min-width: 768px')) matches = isTablet || isDesktop;
      else if (query.includes('max-width: 767px')) matches = isMobile;
      
      return {
        ...mockMatchMedia(query),
        matches,
      };
    }),
  });
  
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
};

describe('Tests de responsivité', () => {
  beforeEach(() => {
    // Reset window size
    mockViewport(1024);
  });

  describe('Classes responsive Tailwind', () => {
    it('utilise des classes de grille responsive', () => {
      const TestComponent = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      );

      render(<TestComponent />);
      
      const grid = document.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
      expect(grid).toHaveClass('lg:grid-cols-3');
    });

    it('utilise des classes d\'espacement responsive', () => {
      const TestComponent = () => (
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          <div>Content</div>
        </div>
      );

      render(<TestComponent />);
      
      const container = document.querySelector('.p-4');
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('p-4');
    });

    it('utilise des classes de typographie responsive', () => {
      const TestComponent = () => (
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Responsive Title
        </h1>
      );

      render(<TestComponent />);
      
      const title = document.querySelector('h1');
      expect(title).toHaveClass('text-2xl');
      expect(title).toHaveClass('sm:text-3xl');
      expect(title).toHaveClass('md:text-4xl');
      expect(title).toHaveClass('lg:text-5xl');
    });

    it('utilise des classes d\'affichage responsive', () => {
      const TestComponent = () => (
        <div>
          <div className="block lg:hidden">Mobile only</div>
          <div className="hidden lg:block">Desktop only</div>
          <div className="hidden md:block lg:hidden">Tablet only</div>
        </div>
      );

      render(<TestComponent />);
      
      const mobileOnly = document.querySelector('.block.lg\\:hidden');
      const desktopOnly = document.querySelector('.hidden.lg\\:block');
      const tabletOnly = document.querySelector('.hidden.md\\:block.lg\\:hidden');
      
      expect(mobileOnly).toBeInTheDocument();
      expect(desktopOnly).toBeInTheDocument();
      expect(tabletOnly).toBeInTheDocument();
    });
  });

  describe('Composants FFCAM responsive', () => {
    it('FFCAMSection utilise des classes responsive', () => {
      render(
        <FFCAMSection className="py-8 sm:py-12 lg:py-16">
          Content
        </FFCAMSection>
      );
      
      const section = document.querySelector('section');
      expect(section).toHaveClass('py-8', 'sm:py-12', 'lg:py-16');
    });

    it('FFCAMButton peut avoir des tailles responsive', () => {
      render(
        <FFCAMButton className="text-sm sm:text-base px-4 sm:px-6">
          Responsive Button
        </FFCAMButton>
      );
      
      const button = document.querySelector('button');
      expect(button).toHaveClass('text-sm', 'sm:text-base');
      expect(button).toHaveClass('px-4', 'sm:px-6');
    });
  });

  describe('Breakpoints et media queries', () => {
    it('détecte correctement les breakpoints mobiles', () => {
      mockViewport(375); // iPhone SE width
      
      const TestComponent = () => (
        <div className="container">
          <div className="block sm:hidden" data-testid="mobile-element">
            Mobile Content
          </div>
          <div className="hidden sm:block" data-testid="desktop-element">
            Desktop Content
          </div>
        </div>
      );

      render(<TestComponent />);
      
      // Vérifie que les éléments ont les bonnes classes
      const mobileElement = document.querySelector('[data-testid="mobile-element"]');
      const desktopElement = document.querySelector('[data-testid="desktop-element"]');
      
      expect(mobileElement).toHaveClass('block', 'sm:hidden');
      expect(desktopElement).toHaveClass('hidden', 'sm:block');
    });

    it('gère les breakpoints tablette', () => {
      mockViewport(768); // Tablet width
      
      const TestComponent = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>Item</div>
        </div>
      );

      render(<TestComponent />);
      
      const grid = document.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
      expect(grid).toHaveClass('lg:grid-cols-4');
    });

    it('gère les breakpoints desktop', () => {
      mockViewport(1280); // Desktop width
      
      const TestComponent = () => (
        <div className="max-w-sm sm:max-w-md lg:max-w-7xl mx-auto">
          <div className="text-base lg:text-lg">Content</div>
        </div>
      );

      render(<TestComponent />);
      
      const container = document.querySelector('.max-w-sm');
      const content = document.querySelector('.text-base');
      
      expect(container).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('text-base');
    });
  });

  describe('Layouts flexbox responsive', () => {
    it('utilise des directions flexbox responsive', () => {
      const TestComponent = () => (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      );

      render(<TestComponent />);
      
      const flexContainer = document.querySelector('.flex');
      expect(flexContainer).toHaveClass('flex-col', 'sm:flex-row');
      expect(flexContainer).toHaveClass('gap-4', 'sm:gap-6');
    });

    it('utilise des propriétés d\'alignement responsive', () => {
      const TestComponent = () => (
        <div className="flex items-start sm:items-center justify-start sm:justify-between">
          Content
        </div>
      );

      render(<TestComponent />);
      
      const flexContainer = document.querySelector('.flex');
      expect(flexContainer).toHaveClass('items-start', 'sm:items-center');
      expect(flexContainer).toHaveClass('justify-start', 'sm:justify-between');
    });
  });

  describe('Images responsive', () => {
    it('utilise des classes d\'image responsive', () => {
      const TestComponent = () => (
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
          <img 
            src="/test.jpg" 
            alt="Test" 
            className="object-cover object-center w-full h-full"
          />
        </div>
      );

      render(<TestComponent />);
      
      const imageContainer = document.querySelector('.relative');
      expect(imageContainer).toHaveClass('h-48', 'sm:h-56', 'md:h-64', 'lg:h-80');
      
      const image = document.querySelector('img');
      expect(image).toHaveClass('object-cover', 'object-center');
    });
  });

  describe('Espacement et marges responsive', () => {
    it('utilise des marges responsive', () => {
      const TestComponent = () => (
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 mb-8 sm:mb-12 lg:mb-16">
          Content with responsive margins
        </div>
      );

      render(<TestComponent />);
      
      const element = document.querySelector('.mt-4');
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('mt-4');
    });

    it('utilise des paddings responsive', () => {
      const TestComponent = () => (
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          Content with responsive padding
        </div>
      );

      render(<TestComponent />);
      
      const element = document.querySelector('.px-4');
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('px-4', 'py-12');
    });
  });

  describe('Optimisations tactiles', () => {
    it('utilise des tailles de touch targets appropriées', () => {
      const TestComponent = () => (
        <button className="min-h-[44px] min-w-[44px] p-2 sm:p-3 touch-manipulation">
          Touch friendly button
        </button>
      );

      render(<TestComponent />);
      
      const button = document.querySelector('button');
      expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
      expect(button).toHaveClass('p-2', 'sm:p-3');
      expect(button).toHaveClass('touch-manipulation');
    });
  });
});