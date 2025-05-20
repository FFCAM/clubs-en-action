module.exports = {
  ci: {
    collect: {
      // Utiliser un serveur statique pour les fichiers générés par Next.js
      staticDistDir: '.vercel/output/static',
      // Fallback sur un démarrage de serveur si nécessaire
      startServerCommand: 'pnpm start',
      url: ['http://localhost:3000/'],
      numberOfRuns: 1, // Réduire à 1 pour accélérer la CI
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        skipAudits: [
          'uses-http2',
          'canonical', // Souvent ignoré en environnement de développement/test
          'is-crawlable', // Ignoré car les environnements de test ont souvent noindex
        ],
        // Permettre plus de temps pour le CI
        maxWaitForLoad: 60000,
        throttlingMethod: 'simulate',
        formFactor: 'desktop',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Personnalisation des seuils pour différentes métriques
        'categories:performance': ['warn', { minScore: 0.7 }], // Moins strict en CI
        'categories:accessibility': ['error', { minScore: 0.9 }], // Focus sur accessibilité
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['warn', { minScore: 0.85 }],
        
        // Métriques spécifiques à l'accessibilité qu'on veut garantir
        'color-contrast': ['error', { minScore: 1 }],
        'document-title': ['error', { minScore: 1 }],
        'html-has-lang': ['error', { minScore: 1 }],
        'meta-viewport': ['error', { minScore: 1 }],
        'heading-order': ['error', { minScore: 1 }],
        'html-has-lang': ['error', { minScore: 1 }],
        'image-alt': ['error', { minScore: 1 }],
        
        // Désactiver quelques assertions trop strictes pour le CI
        'unused-javascript': 'off',
        'offscreen-images': 'off',
        'uses-responsive-images': 'off',
        'uses-rel-preconnect': 'off',
        'render-blocking-resources': 'off',
        'uses-optimized-images': 'off',
        'uses-text-compression': 'off',
        'largest-contentful-paint': 'off',
        'first-contentful-paint': 'off',
        'first-meaningful-paint': 'off',
        'server-response-time': 'off',
      },
    },
  },
};