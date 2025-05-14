# Clubs en Action - Documentation technique

[![Deploy to Cloudflare Pages](https://github.com/ffcam/clubs-en-action/actions/workflows/cloudflare-pages-deploy.yml/badge.svg)](https://github.com/ffcam/clubs-en-action/actions/workflows/cloudflare-pages-deploy.yml)

## Description du projet

"Clubs en Action" est une plateforme web permettant aux clubs de la FFCAM (Fédération Française des Clubs Alpins et de Montagne) de partager leurs solutions et bonnes pratiques via des webinaires trimestriels.

## Stack technique

- **Framework frontend** : [Next.js](https://nextjs.org/) (React)
- **CSS** : [Tailwind CSS](https://tailwindcss.com/)
- **Hébergement/Déploiement** : [Cloudflare Pages](https://pages.cloudflare.com/)
- **Email** : [Resend](https://resend.com/) pour l'envoi des notifications de formulaire

## Prérequis

- Node.js (v22 LTS)
- pnpm

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/ffcam/clubs-en-action.git
cd clubs-en-action

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs
```

## Développement

```bash
# Démarrer le serveur de développement
pnpm dev

# Le site sera disponible sur http://localhost:3000
```

## Structure du projet

```
clubs-en-action/
├── public/            # Fichiers statiques
├── src/
│   ├── app/           # Pages et API routes (Next.js App Router)
│   │   ├── api/       # Points d'entrée API
│   │   └── page.tsx   # Page principale
│   └── utils/         # Fonctions utilitaires
├── .env.example       # Template pour les variables d'environnement
└── next.config.ts     # Configuration Next.js
```

## API

### `/api/contact`

Point d'entrée pour le traitement du formulaire de contact.

```typescript
// POST /api/contact
// Traite les données du formulaire et envoie un email via Resend
```

> **Note importante :** Actuellement, le formulaire envoie simplement les soumissions par email à une adresse unique. Pour l'avenir, il est prévu de développer une solution de collecte plus robuste et collaborative (base de données, interface d'administration, etc.).

## Variables d'environnement

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `RESEND_API_KEY` | Clé API pour Resend | Oui |
| `CONTACT_EMAIL` | Email destinataire des notifications | Oui |

Ces variables sont suffisantes pour le système actuel basé sur les emails. Lorsque la solution de collecte évoluera, des variables supplémentaires pour la connexion à une base de données seront nécessaires.

## Tests

```bash
# Lancer les tests 
pnpm test
```

## Déploiement

Le projet est configuré pour être déployé sur Cloudflare Pages. Le déploiement s'effectue automatiquement via GitHub Actions lorsque des modifications sont poussées sur la branche principale.

```bash
# Construction pour la production
pnpm build

# Déploiement manuel sur Cloudflare Pages (si nécessaire)
pnpm deploy
```

### Automatisation CI/CD

Des workflows GitHub Actions sont configurés pour :
- Tester automatiquement les Pull Requests
- Déployer automatiquement sur Cloudflare Pages à chaque push sur la branche main
- Voir le dossier `.github/workflows` pour plus de détails sur la configuration

## Comment contribuer

1. Forkez le dépôt
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### Améliorations prioritaires

- Développement d'une solution de collecte et de gestion des données formulaire plus robuste et collaborative pour remplacer le système actuel basé uniquement sur des emails
- Mise en place d'une interface d'administration pour gérer les soumissions
- Ajout de fonctionnalités pour faciliter la communication entre les contributeurs
- Création d'une plateforme permettant la publication de projets de clubs, où chaque club pourra présenter ses solutions et partager ses ressources directement

## Contact pour les développeurs

Pour les questions techniques, contactez [n.ritouet@ffcam.fr](mailto:n.ritouet@ffcam.fr).

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.