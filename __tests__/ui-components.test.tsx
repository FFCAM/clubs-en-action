import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { 
  FFCAMButton, 
  FFCAMCard, 
  FFCAMHeading, 
  FFCAMSubheading, 
  FFCAMBadge, 
  FFCAMSection 
} from '../src/components/ui/FFCAMComponents';

describe('Composants UI FFCAM', () => {
  describe('FFCAMButton', () => {
    it('rend un bouton avec le texte correct', () => {
      render(<FFCAMButton>Test Button</FFCAMButton>);
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });

    it('applique les variantes de style correctement', () => {
      const { rerender } = render(<FFCAMButton variant="primary">Primary</FFCAMButton>);
      let button = screen.getByRole('button');
      expect(button.className).toMatch(/bg-ffcam/);

      rerender(<FFCAMButton variant="secondary">Secondary</FFCAMButton>);
      button = screen.getByRole('button');
      expect(button.className).toMatch(/bg-white.*text-ffcam/);
    });

    it('applique les tailles correctement', () => {
      const { rerender } = render(<FFCAMButton size="sm">Small</FFCAMButton>);
      let button = screen.getByRole('button');
      expect(button.className).toMatch(/px-3.*py-1/);

      rerender(<FFCAMButton size="lg">Large</FFCAMButton>);
      button = screen.getByRole('button');
      expect(button.className).toMatch(/px-6.*py-3/);
    });

    it('gère l\'état disabled', () => {
      render(<FFCAMButton disabled>Disabled</FFCAMButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      // Le bouton disabled a des styles appropriés
      expect(button.className).toMatch(/focus:ring/);
    });

    it('affiche une icône quand fournie', () => {
      const TestIcon = () => <svg data-testid="test-icon" />;
      render(<FFCAMButton icon={<TestIcon />}>With Icon</FFCAMButton>);
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('exécute la fonction onClick', () => {
      const mockClick = jest.fn();
      render(<FFCAMButton onClick={mockClick}>Clickable</FFCAMButton>);
      fireEvent.click(screen.getByRole('button'));
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('applique les classes personnalisées', () => {
      render(<FFCAMButton className="custom-class">Custom</FFCAMButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('FFCAMCard', () => {
    it('rend une carte avec le contenu', () => {
      render(<FFCAMCard>Card Content</FFCAMCard>);
      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('applique les classes de style de base', () => {
      render(<FFCAMCard>Content</FFCAMCard>);
      const card = screen.getByText('Content').closest('div');
      expect(card).toHaveClass('rounded-lg', 'bg-white', 'shadow-md');
    });

    it('applique les classes personnalisées', () => {
      render(<FFCAMCard className="custom-card">Content</FFCAMCard>);
      const card = screen.getByText('Content').closest('div');
      expect(card).toHaveClass('custom-card');
    });
  });

  describe('FFCAMHeading', () => {
    it('rend différents niveaux de heading', () => {
      const { rerender } = render(<FFCAMHeading level={1}>H1 Title</FFCAMHeading>);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

      rerender(<FFCAMHeading level={2}>H2 Title</FFCAMHeading>);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

      rerender(<FFCAMHeading level={3}>H3 Title</FFCAMHeading>);
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('applique les bonnes classes selon le niveau', () => {
      const { rerender } = render(<FFCAMHeading level={1}>H1</FFCAMHeading>);
      let heading = screen.getByRole('heading', { level: 1 });
      expect(heading.className).toMatch(/text-4xl|text-5xl/);

      rerender(<FFCAMHeading level={2}>H2</FFCAMHeading>);
      heading = screen.getByRole('heading', { level: 2 });
      expect(heading.className).toMatch(/text-3xl|text-4xl/);
    });

    it('applique les classes personnalisées', () => {
      render(<FFCAMHeading level={2} className="custom-heading">Title</FFCAMHeading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveClass('custom-heading');
    });
  });

  describe('FFCAMSubheading', () => {
    it('rend un sous-titre', () => {
      render(<FFCAMSubheading>Subtitle</FFCAMSubheading>);
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
    });

    it('applique les classes de style appropriées', () => {
      render(<FFCAMSubheading>Subtitle</FFCAMSubheading>);
      const subtitle = screen.getByText('Subtitle');
      expect(subtitle.className).toMatch(/text-xl.*font-semibold/);
    });
  });

  describe('FFCAMBadge', () => {
    it('rend un badge avec le contenu', () => {
      render(<FFCAMBadge>Badge Text</FFCAMBadge>);
      expect(screen.getByText('Badge Text')).toBeInTheDocument();
    });

    it('applique les classes de style de badge', () => {
      render(<FFCAMBadge>Badge</FFCAMBadge>);
      const badge = screen.getByText('Badge');
      expect(badge.className).toMatch(/rounded-full.*bg-ffcam/);
    });

    it('supporte les classes personnalisées', () => {
      render(<FFCAMBadge className="custom-badge">Badge</FFCAMBadge>);
      const badge = screen.getByText('Badge');
      expect(badge).toHaveClass('custom-badge');
    });
  });

  describe('FFCAMSection', () => {
    it('rend une section avec le contenu', () => {
      render(<FFCAMSection>Section Content</FFCAMSection>);
      const section = document.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(screen.getByText('Section Content')).toBeInTheDocument();
    });

    it('applique différents arrière-plans', () => {
      const { rerender } = render(<FFCAMSection background="white">Content</FFCAMSection>);
      let section = document.querySelector('section');
      expect(section).toHaveClass('bg-white');

      rerender(<FFCAMSection background="light">Content</FFCAMSection>);
      section = document.querySelector('section');
      expect(section).toHaveClass('bg-gray-50');

      rerender(<FFCAMSection background="dark">Content</FFCAMSection>);
      section = document.querySelector('section');
      expect(section).toHaveClass('bg-ffcam-dark');
    });

    it('applique un ID quand fourni', () => {
      render(<FFCAMSection id="test-section">Content</FFCAMSection>);
      const section = document.querySelector('#test-section');
      expect(section).toBeInTheDocument();
    });

    it('applique les classes personnalisées', () => {
      render(<FFCAMSection className="custom-section">Content</FFCAMSection>);
      const section = document.querySelector('section');
      expect(section).toHaveClass('custom-section');
    });

    it('utilise le padding responsif par défaut', () => {
      render(<FFCAMSection>Content</FFCAMSection>);
      const section = document.querySelector('section');
      expect(section?.className).toMatch(/py-16.*md:py-24/);
    });
  });

  describe('Intégration et cohérence', () => {
    it('tous les composants utilisent les couleurs FFCAM', () => {
      render(
        <div>
          <FFCAMButton>Button</FFCAMButton>
          <FFCAMBadge>Badge</FFCAMBadge>
          <FFCAMHeading level={2}>Heading</FFCAMHeading>
        </div>
      );

      const ffcamElements = document.querySelectorAll('[class*="ffcam"]');
      expect(ffcamElements.length).toBeGreaterThan(0);
    });

    it('les composants ont des classes focus appropriées', () => {
      render(<FFCAMButton>Focusable</FFCAMButton>);
      const button = screen.getByRole('button');
      expect(button.className).toMatch(/focus:/);
    });

    it('les composants supportent les classes Tailwind responsive', () => {
      render(
        <FFCAMSection className="md:py-32">
          <FFCAMHeading level={2} className="lg:text-6xl">Responsive</FFCAMHeading>
        </FFCAMSection>
      );

      const section = document.querySelector('section');
      const heading = screen.getByRole('heading');
      
      expect(section).toHaveClass('md:py-32');
      expect(heading).toHaveClass('lg:text-6xl');
    });
  });
});