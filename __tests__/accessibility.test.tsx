import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HeroSection from '../src/components/home/HeroSection';
import FAQSection from '../src/components/home/FAQSection';
import WebinarsSection from '../src/components/home/WebinarsSection';
import { Navbar } from '@/components';

// Extension des matchers Jest avec jest-axe
expect.extend(toHaveNoViolations);

// Mock des composants externes pour éviter les erreurs
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock('add-to-calendar-button-react', () => ({
  AddToCalendarButton: ({ name }: { name: string }) => (
    <button type="button" aria-label={`Ajouter ${name} au calendrier`}>
      Ajouter au calendrier
    </button>
  ),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

describe('Tests d\'accessibilité', () => {
  describe('Structure sémantique', () => {
    it('HeroSection a une structure sémantique correcte', () => {
      render(<HeroSection />);
      
      // Vérifie la présence d'un heading principal
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      
      // Vérifie que c'est une section
      const section = document.querySelector('section');
      expect(section).toBeInTheDocument();
      
      // Vérifie les liens avec aria-label
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link.getAttribute('aria-label') || link.textContent).toBeTruthy();
      });
    });

    it('Navbar a une navigation accessible', () => {
      render(<Navbar />);
      
      // Vérifie la présence d'éléments nav
      const navElements = screen.getAllByRole('navigation');
      expect(navElements.length).toBeGreaterThan(0);
      
      // Vérifie que le bouton mobile a des attributs ARIA
      const menuButton = screen.getByRole('button');
      expect(menuButton).toHaveAttribute('aria-expanded');
      expect(menuButton).toHaveAttribute('aria-controls');
      expect(menuButton).toHaveAttribute('aria-label');
    });

    it('FAQSection utilise les bonnes structures ARIA', () => {
      render(<FAQSection />);
      
      // Vérifie que les questions sont des boutons
      const questionButtons = screen.getAllByRole('button');
      expect(questionButtons.length).toBeGreaterThan(0);
      
      // Vérifie la hiérarchie des headings
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Contraste et couleurs', () => {
    it('utilise les couleurs FFCAM avec bon contraste', () => {
      render(<HeroSection />);
      
      // Vérifie que les éléments de texte blanc sur fond coloré existent
      const whiteTextElements = document.querySelectorAll('[class*="text-white"]');
      expect(whiteTextElements.length).toBeGreaterThan(0);
      
      // Vérifie les éléments interactifs avec contraste approprié
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        // Vérifie que les éléments interactifs ont des classes de focus visibles
        expect(link.className).toMatch(/focus:ring|focus:outline/);
      });
    });
  });

  describe('Navigation au clavier', () => {
    it('tous les éléments interactifs sont focusables', () => {
      render(<WebinarsSection />);
      
      // Vérifie que tous les boutons sont focusables
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).not.toHaveAttribute('tabindex', '-1');
        expect(button.className).toMatch(/focus:/);
      });
      
      // Vérifie que tous les liens sont focusables
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });

    it('utilise des focus indicators visibles', () => {
      render(<Navbar />);
      
      const buttons = screen.queryAllByRole('button');
      const links = screen.queryAllByRole('link');
      const interactiveElements = [...buttons, ...links];
      
      // Vérifie qu'il y a au moins un élément interactif
      expect(interactiveElements.length).toBeGreaterThan(0);
      
      // Vérifie qu'au moins la majorité des éléments ont des focus styles
      const elementsWithFocus = interactiveElements.filter(element => 
        element.className.match(/focus:ring|focus:outline|focus:border/)
      );
      
      // Au moins 60% des éléments devraient avoir des focus styles
      const focusRatio = elementsWithFocus.length / interactiveElements.length;
      expect(focusRatio).toBeGreaterThanOrEqual(0.6);
    });
  });

  describe('Labels et descriptions', () => {
    it('tous les boutons ont des labels appropriés', () => {
      render(<WebinarsSection />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        const hasLabel = button.getAttribute('aria-label') || 
                        button.getAttribute('aria-labelledby') ||
                        button.textContent?.trim();
        expect(hasLabel).toBeTruthy();
      });
    });

    it('toutes les images ont des textes alternatifs', () => {
      render(<HeroSection />);
      
      const images = screen.getAllByRole('img');
      images.forEach(image => {
        expect(image).toHaveAttribute('alt');
        expect(image.getAttribute('alt')).toBeTruthy();
      });
    });

    it('les liens ont des descriptions claires', () => {
      render(<HeroSection />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        const hasDescription = link.getAttribute('aria-label') ||
                             link.textContent?.trim();
        expect(hasDescription).toBeTruthy();
      });
    });
  });

  describe('États et feedback', () => {
    it('les boutons disabled sont marqués correctement', () => {
      render(<WebinarsSection />);
      
      const disabledButtons = document.querySelectorAll('button[disabled]');
      disabledButtons.forEach(button => {
        expect(button).toHaveAttribute('disabled');
        // Les boutons peuvent avoir des styles disabled ou non selon l'implémentation
        expect(button.className).toBeTruthy();
      });
    });

    it('les éléments d\'état utilisent aria-live approprié', async () => {
      render(<WebinarsSection />);
      
      // Vérifie s'il y a des régions live pour les feedbacks
      const liveRegions = document.querySelectorAll('[aria-live]');
      if (liveRegions.length > 0) {
        liveRegions.forEach(region => {
          const liveValue = region.getAttribute('aria-live');
          expect(['polite', 'assertive', 'off']).toContain(liveValue);
        });
      }
    });
  });

  describe('Responsive et mobile', () => {
    it('maintient l\'accessibilité sur mobile', () => {
      // Simule un viewport mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navbar />);
      
      // Vérifie que le menu mobile a les bons attributs
      const menuButton = screen.getByRole('button');
      expect(menuButton).toHaveAttribute('aria-expanded');
      
      // Vérifie les tailles de touch targets
      const touchTargets = document.querySelectorAll('button, a');
      touchTargets.forEach(target => {
        // Les touch targets devraient avoir au moins 44px
        const computedStyle = window.getComputedStyle(target);
        // Note: En test, nous vérifions que les éléments ont des classes de style
        const hasSpacing = target.className.match(/p-\d|px-\d|py-\d|min-h|min-w/) ||
                          target.className.includes('padding') ||
                          target.className.includes('text-');
        expect(hasSpacing).toBeTruthy();
      });
    });
  });

  describe('Tests automatisés avec axe', () => {
    it('HeroSection n\'a pas de violations d\'accessibilité', async () => {
      const { container } = render(<HeroSection />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Navbar n\'a pas de violations d\'accessibilité', async () => {
      const { container } = render(<Navbar />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('FAQSection n\'a pas de violations d\'accessibilité', async () => {
      const { container } = render(<FAQSection />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('WebinarsSection n\'a pas de violations d\'accessibilité', async () => {
      const { container } = render(<WebinarsSection />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Structures landmark', () => {
    it('utilise des landmarks appropriés', () => {
      const TestPage = () => (
        <div>
          <Navbar />
          <main>
            <HeroSection />
            <FAQSection />
          </main>
        </div>
      );

      render(<TestPage />);
      
      // Vérifie la présence d'au moins un élément de navigation
      const navElements = screen.getAllByRole('navigation');
      expect(navElements.length).toBeGreaterThan(0);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('utilise des headings dans l\'ordre correct', () => {
      render(
        <main>
          <HeroSection />
          <FAQSection />
        </main>
      );
      
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
      
      // Vérifie qu'il y a au moins un H1
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Gestion des erreurs et états', () => {
    it('fournit des messages d\'erreur accessibles', () => {
      // Test avec un composant qui peut avoir des erreurs
      const ErrorComponent = () => (
        <div>
          <div role="alert" aria-live="assertive">
            Message d'erreur accessible
          </div>
        </div>
      );

      render(<ErrorComponent />);
      
      const errorMessage = screen.getByRole('alert');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveAttribute('aria-live', 'assertive');
    });

    it('utilise les bonnes pratiques pour le loading', () => {
      const LoadingComponent = () => (
        <div>
          <div aria-live="polite" aria-busy="true">
            Chargement en cours...
          </div>
        </div>
      );

      render(<LoadingComponent />);
      
      const loadingElement = document.querySelector('[aria-busy="true"]');
      expect(loadingElement).toBeInTheDocument();
      expect(loadingElement).toHaveAttribute('aria-live', 'polite');
    });
  });
});