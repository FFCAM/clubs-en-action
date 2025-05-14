import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

describe('Navbar', () => {
  it('rend le logo et le titre du site', () => {
    render(<Navbar />);
    
    // Vérifie que le titre du site est présent
    expect(screen.getByText('Clubs en Action')).toBeInTheDocument();
  });

  it('affiche tous les liens de navigation sur desktop', () => {
    render(<Navbar />);
    
    // Vérifie que les liens principaux sont présents
    expect(screen.getByText('Notre Vision')).toBeInTheDocument();
    expect(screen.getByText('Webinaires')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('ouvre et ferme le menu mobile quand on clique sur le bouton', () => {
    render(<Navbar />);
    
    // Au départ, le menu mobile est fermé
    expect(screen.queryByText('Notre Vision')).not.toHaveClass('block');
    
    // Trouver le bouton de menu (qui n'a pas de texte, juste une icône)
    const menuButton = screen.getByRole('button');
    
    // Ouvrir le menu
    fireEvent.click(menuButton);
    
    // Maintenant le menu mobile devrait être visible
    expect(screen.queryByTestId('mobile-menu')).toBeInTheDocument();
    
    // Fermer le menu
    fireEvent.click(menuButton);
    
    // Le menu mobile devrait être fermé
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('ferme le menu mobile quand on clique sur un lien', () => {
    render(<Navbar />);
    
    // Ouvrir le menu
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    
    // Une fois le menu ouvert, on devrait voir les liens
    expect(screen.queryByTestId('mobile-menu')).toBeInTheDocument();
    
    // Cliquer sur un lien du menu mobile
    const mobileLinks = screen.getAllByText('Notre Vision');
    // S'il y a plusieurs liens, prendre celui du menu mobile
    const mobileLinkIndex = mobileLinks.length > 1 ? 1 : 0;
    fireEvent.click(mobileLinks[mobileLinkIndex]);
    
    // Le menu mobile devrait être fermé
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
});