import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components';

// Mock de fetch pour tester les appels API
global.fetch = jest.fn();

describe('Formulaire de contact', () => {
  beforeEach(() => {
    // Reset des mocks entre les tests
    jest.clearAllMocks();
    
    // Mock par défaut pour le token CSRF
    (global.fetch as jest.Mock).mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve({ success: true, csrfToken: 'fake-csrf-token' }),
        ok: true,
      })
    );
  });

  it('rend le formulaire avec tous les champs requis', async () => {
    render(<ContactForm />);
    
    // Attendre que le formulaire soit chargé (après récupération du token CSRF)
    await waitFor(() => {
      expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
    });
    
    // Vérifier les champs obligatoires
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Votre club/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    
    // Vérifier la présence des checkboxes
    expect(screen.getByLabelText(/suggérer un thème/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/partager une solution/i)).toBeInTheDocument();
    
    // Attendre que le bouton soit activé avec le bon texte
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /Envoyer ma contribution/i });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  it('affiche les champs conditionnels quand les checkboxes sont cochées', async () => {
    render(<ContactForm />);
    
    // Attendre le chargement du formulaire
    await waitFor(() => {
      expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
    });
    
    // Les champs spécifiques ne devraient pas être visibles initialement
    expect(screen.queryByLabelText(/Quel thème souhaiteriez-vous/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Quelle solution souhaitez-vous/i)).not.toBeInTheDocument();
    
    // Cocher la checkbox "suggérer un thème"
    fireEvent.click(screen.getByLabelText(/suggérer un thème/i));
    
    // Le champ de thème devrait maintenant être visible
    expect(screen.getByLabelText(/Quel thème souhaiteriez-vous/i)).toBeInTheDocument();
    
    // Cocher la checkbox "partager une solution"
    fireEvent.click(screen.getByLabelText(/partager une solution/i));
    
    // Le champ de solution devrait maintenant être visible
    expect(screen.getByLabelText(/Quelle solution souhaitez-vous/i)).toBeInTheDocument();
  });

  it('valide les champs obligatoires avant soumission', async () => {
    render(<ContactForm />);
    
    // Attendre le chargement du formulaire et l'activation du bouton
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /Envoyer ma contribution/i });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
    
    // Cliquer sur le bouton de soumission sans remplir les champs
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma contribution/i }));
    
    // Vérifier que fetch n'a été appelé qu'une fois (pour le token CSRF)
    expect(global.fetch).toHaveBeenCalledTimes(1);
    
    // Reporter HTML5 validation erreur n'est pas possible dans jsdom, 
    // mais on peut vérifier que les champs sont toujours vides
    expect(screen.getByLabelText(/Nom/i)).toHaveValue('');
  });

  it('affiche un message de succès après une soumission réussie', async () => {
    render(<ContactForm />);
    
    // Attendre le chargement du formulaire et l'activation du bouton
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /Envoyer ma contribution/i });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
    
    // Remplir les champs obligatoires
    fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Votre club/i), { target: { value: 'Club Test' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Ceci est un message de test' } });
    
    // Réinitialiser les mocks pour la nouvelle requête
    (global.fetch as jest.Mock).mockClear();
    
    // Mock de la réponse de l'API pour la soumission du formulaire
    (global.fetch as jest.Mock).mockImplementationOnce(() => 
      Promise.resolve({
        json: () => Promise.resolve({ 
          success: true, 
          message: 'Merci Test User! Votre message a bien été reçu.' 
        }),
        ok: true,
      })
    );
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma contribution/i }));
    
    // Vérifier que le message de succès s'affiche
    await waitFor(() => {
      expect(screen.getByText(/Envoi réussi/i)).toBeInTheDocument();
      expect(screen.getByText(/Merci Test User! Votre message a bien été reçu./i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('affiche un message d\'erreur si la soumission échoue', async () => {
    render(<ContactForm />);
    
    // Attendre le chargement du formulaire et l'activation du bouton
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /Envoyer ma contribution/i });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
    
    // Remplir les champs obligatoires
    fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Votre club/i), { target: { value: 'Club Test' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Ceci est un message de test' } });
    
    // Réinitialiser les mocks pour la nouvelle requête
    (global.fetch as jest.Mock).mockClear();
    
    // Mock d'une erreur lors de la soumission du formulaire
    (global.fetch as jest.Mock).mockImplementationOnce(() => 
      Promise.resolve({
        json: () => Promise.resolve({ 
          success: false, 
          error: 'Une erreur est survenue lors de l\'envoi du formulaire' 
        }),
        ok: false,
        status: 500
      })
    );
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma contribution/i }));
    
    // Vérifier que le message d'erreur s'affiche
    await waitFor(() => {
      // Sélectionner plus précisément le message d'erreur
      const errorText = screen.getByText('Erreur', { exact: true });
      expect(errorText).toBeInTheDocument();
      
      // Vérifier le message d'erreur détaillé
      const errorDetailsText = screen.getByText('Une erreur est survenue lors de l\'envoi du formulaire', { exact: true });
      expect(errorDetailsText).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});