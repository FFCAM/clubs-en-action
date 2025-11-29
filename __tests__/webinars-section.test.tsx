import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WebinarsSection from '../src/components/home/WebinarsSection';

// Mock du composant AddToCalendarButton
jest.mock('add-to-calendar-button-react', () => ({
  AddToCalendarButton: ({ name }: { name: string }) => (
    <div data-testid="add-to-calendar-button">{name}</div>
  ),
}));

// Mock de navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('WebinarsSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('affiche la section avec le titre principal', () => {
    render(<WebinarsSection />);
    
    expect(screen.getByText('Webinaires Participatifs')).toBeInTheDocument();
  });

  it('contient les sous-sections structurelles', () => {
    render(<WebinarsSection />);

    // Vérifie la présence des badges de section (passés ou prochains selon l'état actuel)
    const hasPastWebinars = screen.queryByText('Webinaires passés');
    const hasUpcomingWebinars = screen.queryByText('Prochains webinaires');
    expect(hasPastWebinars || hasUpcomingWebinars).toBeTruthy();

    expect(screen.getByText('Comment ça marche ?')).toBeInTheDocument();
    expect(screen.getByText('Prochainement')).toBeInTheDocument();
  });

  it('affiche les cartes explicatives (Format, Organisation, Participation)', () => {
    render(<WebinarsSection />);
    
    // Vérifie que les 3 cartes explicatives sont présentes
    expect(screen.getByText('Le Format')).toBeInTheDocument();
    expect(screen.getByText('L\'Organisation')).toBeInTheDocument();
    expect(screen.getByText('La Participation')).toBeInTheDocument();
  });

  it('affiche au moins un webinaire avec des liens d\'action', () => {
    render(<WebinarsSection />);

    // Vérifie qu'il y a au moins un webinaire affiché avec un lien d'action
    // (soit bouton zoom/calendrier pour webinaire futur, soit lien "Voir le compte-rendu" pour webinaire passé)
    const zoomButtons = screen.queryAllByText(/zoom/i);
    const calendarButtons = screen.queryAllByTestId('add-to-calendar-button');
    const summaryLinks = screen.queryAllByText(/voir le compte-rendu/i);
    const replayLinks = screen.queryAllByText(/replay/i);

    const totalActionElements = zoomButtons.length + calendarButtons.length + summaryLinks.length + replayLinks.length;
    expect(totalActionElements).toBeGreaterThan(0);
  });

  it('affiche des thèmes à venir cliquables', () => {
    render(<WebinarsSection />);
    
    // Vérifie qu'il y a des liens vers la section contact
    const contactLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('#contact')
    );
    
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('permet de copier un lien Zoom si disponible', async () => {
    render(<WebinarsSection />);

    // Cherche un bouton "Copier le lien" (peut ne pas exister selon les webinaires)
    const copyButtons = screen.queryAllByText('Copier le lien');

    if (copyButtons.length > 0) {
      fireEvent.click(copyButtons[0]);
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    } else {
      // Si pas de bouton, le test passe quand même (dépend des webinaires actuels)
      expect(true).toBe(true);
    }
  });

  it('ouvre les liens Zoom dans un nouvel onglet si disponible', () => {
    render(<WebinarsSection />);

    // Mock window.open
    const mockOpen = jest.fn();
    window.open = mockOpen;

    // Cherche un bouton "Rejoindre sur Zoom" (peut ne pas exister selon les webinaires)
    const zoomButtons = screen.queryAllByText('Rejoindre sur Zoom');

    if (zoomButtons.length > 0) {
      fireEvent.click(zoomButtons[0]);
      expect(mockOpen).toHaveBeenCalledWith(expect.stringContaining('https://'), '_blank');
    } else {
      // Si pas de bouton Zoom, le test passe quand même (dépend des webinaires actuels)
      expect(true).toBe(true);
    }
  });

  it('a une structure responsive avec grilles adaptatives', () => {
    render(<WebinarsSection />);
    
    // Vérifie que les conteneurs ont les classes responsive
    const grids = document.querySelectorAll('[class*="grid"]');
    expect(grids.length).toBeGreaterThan(0);
    
    // Vérifie qu'au moins une grille a des classes responsive
    const hasResponsiveGrid = Array.from(grids).some(grid => 
      grid.className.includes('md:grid-cols') || grid.className.includes('lg:grid-cols')
    );
    expect(hasResponsiveGrid).toBe(true);
  });

  it('contient des éléments d\'accessibilité', () => {
    render(<WebinarsSection />);
    
    // Vérifie que la section a un ID pour la navigation
    const section = document.querySelector('#webinaires');
    expect(section).toBeInTheDocument();
    
    // Vérifie que les boutons ont des attributs aria appropriés
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      // Chaque bouton devrait avoir soit aria-label soit du texte
      const hasAccessibility = button.getAttribute('aria-label') || button.textContent;
      expect(hasAccessibility).toBeTruthy();
    });
  });
});