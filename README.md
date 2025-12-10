# Clubs en Action - FFCAM

[![Deploy to Cloudflare Pages](https://github.com/ffcam/clubs-en-action/actions/workflows/cloudflare-pages-deploy.yml/badge.svg)](https://github.com/ffcam/clubs-en-action/actions/workflows/cloudflare-pages-deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 Description du projet

**Clubs en Action** est une initiative collaborative portée par les bénévoles élus du comité directeur de la FFCAM dans le cadre du programme "Engagement Club Alpin". Cette plateforme facilite le partage d'expériences et de bonnes pratiques entre clubs et comités via des webinaires participatifs trimestriels.

### Objectifs principaux

- 🤝 Créer un réseau d'entraide direct entre clubs et comités
- 💡 Partager des solutions concrètes issues du terrain
- 🔧 Mutualiser les outils et méthodes qui fonctionnent
- 🌱 Renforcer la communauté FFCAM par l'échange

## 🛠 Stack technique

### Frontend
- **Framework** : [Next.js 15.5](https://nextjs.org/) avec App Router
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/) avec design system FFCAM
- **Composants** : React 19 avec composants serveur

### Backend & Infrastructure
- **Runtime** : Edge Runtime (Cloudflare Workers)
- **Hébergement** : [Cloudflare Pages](https://pages.cloudflare.com/)
- **Email** : [Resend](https://resend.com/) pour les notifications
- **Validation** : [Zod](https://zod.dev/) pour la validation des variables d'environnement
- **CDN** : Cloudflare avec cache automatique

### Outils de développement
- **Package Manager** : pnpm
- **Tests** : Jest + React Testing Library
- **CI/CD** : GitHub Actions
- **Linting** : ESLint + Next.js config

## 📋 Prérequis

- **Node.js** : v18.17+ ou v20.3+ (LTS recommandé)
- **pnpm** : v9.x ou v10.x
- **Git** : Pour cloner le repository

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/ffcam/clubs-en-action.git
cd clubs-en-action

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs (voir section Variables d'environnement)
```

## 💻 Développement

```bash
# Démarrer le serveur de développement avec Turbopack (recommandé)
pnpm dev

# Ou avec Webpack si nécessaire
pnpm dev:webpack

# Le site sera disponible sur http://localhost:3000
```

### Commandes utiles

```bash
# Lancer les tests
pnpm test

# Lancer les tests en mode watch
pnpm test:watch

# Vérifier le linting
pnpm lint

# Build de production
pnpm build

# Preview de la build Cloudflare Pages en local
pnpm preview
```

## 📁 Structure du projet

```
clubs-en-action/
├── public/                 # Assets statiques (images, fonts, etc.)
│   └── images/            # Images du site
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # Routes API (Edge Runtime)
│   │   │   ├── contact/  # Endpoint formulaire de contact
│   │   │   └── csrf/     # Génération token CSRF
│   │   ├── globals.css   # Styles globaux
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Page d'accueil
│   ├── components/        # Composants React
│   │   ├── forms/        # Composants de formulaire
│   │   ├── home/         # Sections de la page d'accueil
│   │   ├── layout/       # Header, Footer, etc.
│   │   └── ui/           # Composants UI réutilisables
│   ├── env.ts            # Validation des variables d'environnement (Zod)
│   └── utils/            # Fonctions utilitaires
│       ├── csrf/         # Protection CSRF
│       └── email.ts      # Envoi d'emails
├── __tests__/            # Tests unitaires
├── .github/workflows/    # CI/CD GitHub Actions
├── CLAUDE.md            # Instructions pour l'assistant IA
└── next.config.ts       # Configuration Next.js
```

## 🔌 API Endpoints

### POST `/api/contact`

Traite les soumissions du formulaire de contact avec protection CSRF et validation.

**Body (FormData):**
| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `name` | string | ✅ | Nom de l'expéditeur |
| `email` | string | ✅ | Email de l'expéditeur |
| `club` | string | ✅ | Nom du club |
| `message` | string | ✅ | Message |
| `csrf_token` | string | ✅ | Token CSRF |
| `theme` | string | ❌ | Thème suggéré |
| `solution` | string | ❌ | Solution à partager |
| `newsletter` | string | ❌ | Inscription newsletter |

**Cookie requis:** `csrf` (défini automatiquement par `/api/csrf`)

**Réponse succès (200):**
```json
{
  "success": true,
  "message": "Merci ! Votre message a bien été reçu."
}
```

### GET `/api/csrf`

Génère un token CSRF pour la protection des formulaires (Double Submit Cookie Pattern).

**Réponse:**
```json
{
  "success": true,
  "csrfToken": "uuid:timestamp:signature"
}
```

Le token est également stocké dans un cookie `csrf` (httpOnly, 15 min d'expiration).

## 🔒 Sécurité

- **CSRF** : Double Submit Cookie Pattern avec signature HMAC-SHA256
- **XSS** : Échappement HTML des données utilisateur dans les emails
- **Headers** : CSP, HSTS, X-Frame-Options, etc. configurés dans `next.config.ts`
- **Validation** : Zod pour les variables d'environnement, validation des emails

## 🔐 Variables d'environnement

### Variables requises

Les variables sont validées au démarrage avec [Zod](https://zod.dev/). L'application ne démarrera pas si une variable est manquante ou invalide.

| Variable | Description | Exemple |
|----------|-------------|----------|
| `RESEND_API_KEY` | Clé API pour l'envoi d'emails via Resend | `re_123abc...` |
| `CONTACT_EMAIL` | Email destinataire des formulaires | `contact@example.com` |
| `CSRF_SECRET` | Secret pour la signature HMAC des tokens CSRF (min. 32 caractères) | `openssl rand -base64 32` |

### Configuration

1. Créer un compte sur [Resend](https://resend.com/)
2. Générer une clé API
3. Copier `.env.example` vers `.env.local`
4. Remplir les valeurs dans `.env.local`

```bash
# .env.local
RESEND_API_KEY=re_votre_cle_api
CONTACT_EMAIL=votre@email.com
CSRF_SECRET=$(openssl rand -base64 32)
```

## 🧪 Tests

```bash
# Lancer tous les tests
pnpm test

# Tests en mode watch pour le développement
pnpm test:watch

# Tests avec coverage
pnpm test -- --coverage

# Tester un fichier spécifique
pnpm test -- __tests__/contact-form.test.tsx
```

### Structure des tests

- Tests unitaires des composants dans `__tests__/`
- Utilisation de React Testing Library
- Mocks pour les appels API et modules externes

## 🚀 Déploiement

### Déploiement automatique (recommandé)

Le projet utilise GitHub Actions pour le déploiement automatique :

1. **Pull Requests** : Tests automatiques à chaque PR
2. **Branch `main`** : Déploiement automatique sur Cloudflare Pages

### Déploiement manuel

```bash
# Build pour Cloudflare Pages
pnpm pages:build

# Preview en local avec Wrangler
pnpm preview

# Déployer manuellement
pnpm deploy
```

### Configuration Cloudflare Pages

1. Connecter le repository GitHub
2. Configuration de build :
   - Build command : `pnpm pages:build`
   - Build output : `.vercel/output/static`
   - Root directory : `/`
3. Variables d'environnement à configurer dans Cloudflare

### Domaine personnalisé

Le site est accessible sur :
- Production : `clubs-en-action.ffcam.fr` (à configurer)
- Preview : `*.clubs-en-action.pages.dev`

## 🤝 Comment contribuer

### Process de contribution

1. **Fork** le repository
2. **Créer** une branche descriptive :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   # ou
   git checkout -b fix/description-du-bug
   ```
3. **Développer** votre fonctionnalité avec des tests
4. **Vérifier** le code :
   ```bash
   pnpm test
   pnpm lint
   ```
5. **Commiter** avec un message clair :
   ```bash
   git commit -m "feat: ajouter la fonctionnalité X"
   # Suivre la convention : feat|fix|docs|style|refactor|test|chore
   ```
6. **Push** et créer une Pull Request

### Guidelines

- ✅ Écrire des tests pour les nouvelles fonctionnalités
- ✅ Maintenir la couverture de tests
- ✅ Suivre les conventions de code existantes
- ✅ Documenter les changements significatifs
- ✅ Mettre à jour le README si nécessaire

### 🎯 Roadmap - Améliorations prioritaires

#### Court terme
- [ ] Ajouter plus de webinaires programmés
- [ ] Améliorer l'accessibilité (WCAG 2.1 AA)
- [ ] Optimiser les performances (Core Web Vitals)
- [ ] Ajouter des animations subtiles

#### Moyen terme
- [ ] Système de gestion des inscriptions aux webinaires
- [ ] Interface d'administration pour gérer le contenu
- [ ] Notifications par email pour les rappels
- [ ] Intégration calendrier (Google Calendar, Outlook)

#### Long terme
- [ ] Base de données pour stocker les soumissions
- [ ] Espace membre avec historique des webinaires
- [ ] Plateforme de partage de ressources entre clubs
- [ ] Forum de discussion intégré

## 🐛 Signaler un problème

Pour signaler un bug ou suggérer une amélioration :
1. Vérifier les [issues existantes](https://github.com/ffcam/clubs-en-action/issues)
2. Créer une nouvelle issue avec un titre descriptif
3. Utiliser les templates fournis

## 📧 Contact

- **Questions techniques** : [n.ritouet@ffcam.fr](mailto:n.ritouet@ffcam.fr)
- **Questions sur l'initiative** : Via le formulaire de contact du site
- **Urgences** : Créer une issue sur GitHub

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  <p>Fait avec ❤️ par la communauté FFCAM</p>
  <p>
    <a href="https://ffcam.fr">ffcam.fr</a> •
    <a href="https://github.com/ffcam">GitHub</a>
  </p>
</div>