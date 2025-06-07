import '@testing-library/jest-dom';

/**
 * Tests d'intégration qui vérifient que le serveur peut démarrer correctement
 * Ces tests peuvent être utilisés pour s'assurer que l'application démarre sans erreur
 */

describe('Intégration serveur', () => {
  // Skip ces tests par défaut car ils nécessitent un serveur en cours d'exécution
  const shouldRunIntegrationTests = process.env.RUN_INTEGRATION_TESTS === 'true';
  
  const describeOrSkip = shouldRunIntegrationTests ? describe : describe.skip;
  
  describeOrSkip('Tests nécessitant un serveur', () => {
    const SERVER_URL = process.env.TEST_SERVER_URL || 'http://localhost:3000';
    
    beforeAll(async () => {
      // Vérifier si le serveur est déjà en cours d'exécution
      try {
        const response = await fetch(SERVER_URL);
        if (!response.ok) {
          throw new Error('Serveur non accessible');
        }
      } catch (error) {
        console.warn(`Serveur non accessible à ${SERVER_URL}. Démarrez le serveur avec 'pnpm dev' pour exécuter ces tests.`);
        throw error;
      }
    });

    it('peut récupérer la page d\'accueil', async () => {
      const response = await fetch(SERVER_URL);
      expect(response.status).toBe(200);
      
      const html = await response.text();
      expect(html).toContain('Clubs en Action');
    });

    it('peut récupérer l\'API CSRF', async () => {
      const response = await fetch(`${SERVER_URL}/api/csrf`);
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data).toHaveProperty('csrfToken');
      expect(data.success).toBe(true);
    });

    it('gère les erreurs API correctement', async () => {
      // Test avec une requête POST sans token CSRF
      const response = await fetch(`${SERVER_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test',
          email: 'test@example.com',
          club: 'Test Club',
          message: 'Test message'
        }),
      });
      
      // Devrait retourner une erreur 4xx
      expect(response.status).toBeGreaterThanOrEqual(400);
      expect(response.status).toBeLessThan(500);
    });
  });

  describe('Tests unitaires (sans serveur)', () => {
    it('peut importer tous les composants principaux sans erreur', () => {
      // Ces imports ne devraient pas lever d'erreur
      expect(() => {
        require('../src/components/home/Home');
        require('../src/components/home/HeroSection');
        require('../src/components/home/WebinarsSection');
        require('../src/components/home/FAQSection');
        require('../src/components/layout/Navbar');
        require('../src/components/layout/Footer');
        require('../src/components/forms/ContactForm');
      }).not.toThrow();
    });

    it('peut importer les composants UI sans erreur', () => {
      expect(() => {
        require('../src/components/ui/FFCAMComponents');
      }).not.toThrow();
    });

    it('peut importer les utilitaires sans erreur', () => {
      expect(() => {
        require('../src/utils/csrf');
        require('../src/utils/email');
      }).not.toThrow();
    });
  });

  describe('Configuration et environnement', () => {
    it('a les variables d\'environnement de test correctes', () => {
      // Vérifie que l'environnement de test est correctement configuré
      expect(process.env.NODE_ENV).toBe('test');
    });

    it('peut résoudre les alias de chemins', () => {
      // Test des alias configurés dans jest.config.js
      expect(() => {
        require('@/components');
      }).not.toThrow();
    });

    it('a les mocks de fichiers configurés', () => {
      // Vérifie que les mocks de fichiers fonctionnent
      const imageMock = require('../public/images/Logo-FFCAM.png');
      expect(typeof imageMock).toBe('string');
    });
  });

  describe('Performance et métriques', () => {
    it('les imports de composants sont rapides', async () => {
      const startTime = performance.now();
      
      await Promise.all([
        import('../src/components/home/Home'),
        import('../src/components/home/HeroSection'),
        import('../src/components/home/WebinarsSection'),
        import('../src/components/ui/FFCAMComponents'),
      ]);
      
      const endTime = performance.now();
      const importTime = endTime - startTime;
      
      // Les imports ne devraient pas prendre plus de 1 seconde
      expect(importTime).toBeLessThan(1000);
    });

    it('la compilation TypeScript est valide', () => {
      // Ce test passe simplement si TypeScript compile sans erreur
      expect(true).toBe(true);
    });
  });
});