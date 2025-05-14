import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

// Mock des composants pour faciliter les tests
jest.mock('@/components', () => ({
  Navbar: () => <div data-testid="navbar">Navbar Mock</div>,
  Footer: () => <div data-testid="footer">Footer Mock</div>,
  HeroSection: () => <div data-testid="hero-section">HeroSection Mock</div>,
  VisionSection: () => <div data-testid="vision-section">VisionSection Mock</div>,
  WebinarsSection: () => <div data-testid="webinars-section">WebinarsSection Mock</div>,
  ContactForm: () => <div data-testid="contact-form">ContactForm Mock</div>,
}));

describe('Page d\'accueil', () => {
  it('rend la page sans erreur', () => {
    render(<Home />);
    
    // Vérifie que les composants principaux sont présents
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('vision-section')).toBeInTheDocument();
    expect(screen.getByTestId('webinars-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('a la structure correcte avec le main wrapper', () => {
    render(<Home />);
    
    // Vérifie que le conteneur principal a la classe appropriée
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('min-h-screen');
  });
});