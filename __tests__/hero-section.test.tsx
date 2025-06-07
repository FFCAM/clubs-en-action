import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from '../src/components/home/HeroSection';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, ...props }: any) => <img alt={alt} {...props} />,
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe('HeroSection', () => {
  it('affiche le titre principal de la page', () => {
    render(<HeroSection />);
    
    // Vérifie que le titre est présent (structure H1)
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading.textContent).toMatch(/innovons|clubs/i);
  });

  it('contient des boutons d\'action principaux', () => {
    render(<HeroSection />);
    
    // Vérifie qu'il y a des liens/boutons d'action
    const discoverLink = screen.getByLabelText(/découvrir/i);
    const proposeLink = screen.getByLabelText(/proposer/i);
    
    expect(discoverLink).toBeInTheDocument();
    expect(proposeLink).toBeInTheDocument();
    
    // Vérifie que les liens pointent vers les bonnes sections
    expect(discoverLink.getAttribute('href')).toBe('#webinaires');
    expect(proposeLink.getAttribute('href')).toBe('#contact');
  });

  it('affiche une image de fond', () => {
    render(<HeroSection />);
    
    // Vérifie la présence d'une image de fond
    const backgroundImage = screen.getByAltText(/montagnes/i);
    expect(backgroundImage).toBeInTheDocument();
  });

  it('affiche une image de contenu responsive', () => {
    render(<HeroSection />);
    
    // Vérifie la présence de l'image de contenu (webinaires)
    const contentImages = screen.getAllByAltText(/webinaires/i);
    expect(contentImages.length).toBeGreaterThanOrEqual(1);
  });

  it('contient une section de webinaires à venir', () => {
    render(<HeroSection />);
    
    // Vérifie la présence d'informations sur les prochains webinaires
    expect(screen.getByText(/prochains webinaires/i)).toBeInTheDocument();
    
    // Vérifie qu'il y a un lien vers les détails
    const detailsLink = screen.getByLabelText(/voir.*webinaires/i);
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink.getAttribute('href')).toBe('#webinaires');
  });

  it('a une structure responsive avec classes adaptatives', () => {
    render(<HeroSection />);
    
    // Vérifie que le conteneur principal a des classes responsive
    const section = document.querySelector('section');
    expect(section).toHaveClass('py-20', 'sm:py-28');
    
    // Vérifie la grille responsive
    const grid = document.querySelector('.lg\\:grid-cols-12');
    expect(grid).toBeInTheDocument();
  });

  it('utilise des classes pour l\'accessibilité et l\'UX', () => {
    render(<HeroSection />);
    
    // Vérifie que les boutons ont des classes focus appropriées
    const buttons = screen.getAllByRole('link');
    buttons.forEach(button => {
      expect(button.className).toMatch(/focus:outline-none|focus:ring/);
    });
  });

  it('contient des éléments avec animation/transition', () => {
    render(<HeroSection />);
    
    // Vérifie la présence d'éléments animés
    const animatedElement = document.querySelector('.animate-pulse');
    expect(animatedElement).toBeInTheDocument();
    
    // Vérifie les transitions sur les boutons
    const transitionElements = document.querySelectorAll('[class*="transition"]');
    expect(transitionElements.length).toBeGreaterThan(0);
  });

  it('a une structure sémantique appropriée', () => {
    render(<HeroSection />);
    
    // Vérifie que c'est une section
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
    
    // Vérifie la hiérarchie des headings
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  it('affiche des informations sur les dates de webinaires', () => {
    render(<HeroSection />);
    
    // Vérifie qu'il y a des informations de date/heure
    const dateElements = document.querySelectorAll('[class*="font-medium"]');
    expect(dateElements.length).toBeGreaterThan(0);
    
    // Vérifie la structure de la liste des webinaires
    const webinarsList = document.querySelector('.space-y-2');
    expect(webinarsList).toBeInTheDocument();
  });

  it('utilise les bonnes classes de couleur FFCAM', () => {
    render(<HeroSection />);
    
    // Vérifie l'utilisation des couleurs de la marque
    const ffcamColorElements = document.querySelectorAll('[class*="ffcam"]');
    expect(ffcamColorElements.length).toBeGreaterThan(0);
    
    // Vérifie spécifiquement l'utilisation de ffcam-red
    const redElements = document.querySelectorAll('[class*="ffcam-red"]');
    expect(redElements.length).toBeGreaterThan(0);
  });
});