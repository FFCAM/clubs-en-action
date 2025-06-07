import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from '../src/components/home/HeroSection';
import FAQSection from '../src/components/home/FAQSection';
import WebinarsSection from '../src/components/home/WebinarsSection';
import { Navbar } from '@/components';

// Mock des composants externes
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
    <button type="button">Ajouter au calendrier</button>
  ),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

describe('Tests de contenu stable', () => {
  describe('Éléments de marque et identité', () => {
    it('affiche toujours le nom du site "Clubs en Action"', () => {
      render(<Navbar />);
      expect(screen.getByText('Clubs en Action')).toBeInTheDocument();
    });

    it('utilise le logo FFCAM', () => {
      render(<Navbar />);
      const logo = screen.getByAltText(/logo ffcam/i);
      expect(logo).toBeInTheDocument();
      expect(logo.getAttribute('src')).toContain('Logo-FFCAM.png');
    });

    it('contient toujours une référence à FFCAM dans les textes alternatifs', () => {
      render(<HeroSection />);
      const ffcamElements = screen.getAllByAltText(/ffcam/i);
      expect(ffcamElements.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation principale stable', () => {
    it('contient toujours les liens de navigation essentiels', () => {
      render(<Navbar />);
      
      // Ces liens sont peu susceptibles de changer
      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(screen.getByText('Webinaires')).toBeInTheDocument();
    });

    it('les liens pointent vers les bonnes sections', () => {
      render(<Navbar />);
      
      const contactLink = screen.getAllByText('Contact')[0].closest('a');
      const webinairesLink = screen.getAllByText('Webinaires')[0].closest('a');
      
      expect(contactLink?.getAttribute('href')).toBe('#contact');
      expect(webinairesLink?.getAttribute('href')).toBe('#webinaires');
    });
  });

  describe('Structure des sections principales', () => {
    it('HeroSection contient toujours des boutons d\'action', () => {
      render(<HeroSection />);
      
      // Ces boutons sont essentiels à la navigation
      const discoverButton = screen.getByLabelText(/découvrir/i);
      const proposeButton = screen.getByLabelText(/proposer/i);
      
      expect(discoverButton).toBeInTheDocument();
      expect(proposeButton).toBeInTheDocument();
    });

    it('WebinarsSection contient toujours les sections structurelles', () => {
      render(<WebinarsSection />);
      
      // Ces titres de section sont peu susceptibles de changer
      expect(screen.getByText('Webinaires Participatifs')).toBeInTheDocument();
      expect(screen.getByText('Le Format')).toBeInTheDocument();
      expect(screen.getByText('L\'Organisation')).toBeInTheDocument();
      expect(screen.getByText('La Participation')).toBeInTheDocument();
    });

    it('FAQSection a toujours un titre principal', () => {
      render(<FAQSection />);
      expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
    });
  });

  describe('Mots-clés métier stable', () => {
    it('contient toujours des références aux "clubs"', () => {
      render(<HeroSection />);
      
      // Le terme "clubs" est central au projet
      const clubsReferences = document.body.textContent?.match(/clubs?/gi) || [];
      expect(clubsReferences.length).toBeGreaterThan(0);
    });

    it('contient des références aux "webinaires"', () => {
      render(<WebinarsSection />);
      
      // Le terme "webinaires" est central au projet - utilise getAllByText car il peut y en avoir plusieurs
      const webinairesTexts = screen.getAllByText(/webinaires/i);
      expect(webinairesTexts.length).toBeGreaterThan(0);
    });

    it('fait référence à l\'aspect "participatif" ou "collaboration"', () => {
      render(<WebinarsSection />);
      
      // Concepts centraux du projet
      const participatifText = screen.queryByText(/participatif/i);
      const collaborationText = document.body.textContent?.includes('collaboration');
      
      expect(participatifText || collaborationText).toBeTruthy();
    });
  });

  describe('Éléments d\'interface stable', () => {
    it('utilise toujours des boutons pour les interactions', () => {
      render(<WebinarsSection />);
      
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
      
      // Vérifie que les boutons ont du contenu ou des labels
      buttons.forEach(button => {
        const hasContent = button.textContent || button.getAttribute('aria-label');
        expect(hasContent).toBeTruthy();
      });
    });

    it('utilise des liens pour la navigation', () => {
      render(<HeroSection />);
      
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
      
      // Vérifie que les liens ont des destinations
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    it('structure le contenu avec des headings', () => {
      render(<WebinarsSection />);
      
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
      
      // Vérifie qu'il y a au moins un heading de niveau 2
      const h2Elements = screen.getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibilité stable', () => {
    it('utilise toujours des images avec texte alternatif', () => {
      render(<HeroSection />);
      
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });

    it('utilise des liens avec destinations valides', () => {
      render(<HeroSection />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        // Vérifie que c'est soit une ancre, soit une URL valide
        expect(href?.startsWith('#') || href?.startsWith('http')).toBe(true);
      });
    });

    it('utilise des couleurs de marque cohérentes', () => {
      render(<WebinarsSection />);
      
      // Vérifie la présence des classes de couleur FFCAM
      const ffcamElements = document.querySelectorAll('[class*="ffcam"]');
      expect(ffcamElements.length).toBeGreaterThan(0);
    });
  });

  describe('Types de contenu stable', () => {
    it('propose toujours au moins un webinaire ou thème', () => {
      render(<WebinarsSection />);
      
      // Soit des webinaires programmés, soit des thèmes à venir - utilise getAllByText car il peut y en avoir plusieurs
      const hasWebinars = screen.queryAllByText(/prochains webinaires/i);
      const hasThemes = screen.queryAllByText(/thèmes/i);
      
      expect(hasWebinars.length > 0 || hasThemes.length > 0).toBeTruthy();
    });

    it('contient toujours des questions FAQ', () => {
      render(<FAQSection />);
      
      // Il devrait toujours y avoir des questions
      const questionButtons = screen.getAllByRole('button');
      expect(questionButtons.length).toBeGreaterThan(1);
    });

    it('fournit toujours des moyens de contact', () => {
      render(<HeroSection />);
      
      // Lien vers la section contact
      const contactLink = screen.getByLabelText(/proposer|contact/i);
      expect(contactLink).toBeInTheDocument();
      expect(contactLink.getAttribute('href')).toBe('#contact');
    });
  });

  describe('Cohérence technique stable', () => {
    it('utilise des IDs pour les sections principales', () => {
      render(<FAQSection />);
      
      // Les IDs de section sont nécessaires pour la navigation
      const section = document.querySelector('#faq');
      expect(section).toBeInTheDocument();
    });

    it('maintient une structure HTML sémantique', () => {
      render(<HeroSection />);
      
      // Vérifie la présence de sections
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('utilise des classes CSS consistantes', () => {
      render(<WebinarsSection />);
      
      // Vérifie la présence de classes Tailwind communes
      const tailwindElements = document.querySelectorAll('[class*="flex"], [class*="grid"], [class*="bg-"]');
      expect(tailwindElements.length).toBeGreaterThan(0);
    });
  });
});