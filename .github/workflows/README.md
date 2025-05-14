# Workflows GitHub Actions

Ce dossier contient les workflows GitHub Actions pour l'automatisation du déploiement et des tests du projet Clubs en Action. Ces workflows utilisent Node.js 22 LTS.

## Workflows disponibles

### `cloudflare-pages-deploy.yml`

Déclenché lors des pushes sur la branche `main` ou manuellement via l'interface GitHub.

Ce workflow :
1. Construit l'application avec Next.js
2. Déploie automatiquement le résultat sur Cloudflare Pages

### `pull-request.yml`

Déclenché lors de la création ou mise à jour d'une Pull Request vers la branche `main`.

Ce workflow :
1. Vérifie la qualité du code (lint)
2. Vérifie les types TypeScript
3. Construit l'application pour s'assurer qu'elle compile correctement
4. Ajoute un commentaire dans la PR pour indiquer le statut

## Configuration des secrets

Pour que ces workflows fonctionnent correctement, vous devez configurer les secrets suivants dans les paramètres de votre dépôt GitHub :

| Nom du secret | Description |
|---------------|-------------|
| `CLOUDFLARE_API_TOKEN` | Token API Cloudflare avec les permissions pour déployer sur Pages |
| `CLOUDFLARE_ACCOUNT_ID` | ID de votre compte Cloudflare |
| `RESEND_API_KEY` | Clé API pour le service d'emails Resend (pour les tests) |
| `CONTACT_EMAIL` | Email de contact (pour les tests) |

### Comment obtenir ces valeurs

1. **Cloudflare API Token** : 
   - Accédez à votre [tableau de bord Cloudflare](https://dash.cloudflare.com/profile/api-tokens)
   - Créez un nouveau token avec les permissions "Cloudflare Pages: Edit"

2. **Cloudflare Account ID** :
   - Visible dans l'URL de votre tableau de bord Cloudflare : `https://dash.cloudflare.com/<ACCOUNT_ID>/...`

## Personnalisation

Pour modifier les workflows :
1. Éditez les fichiers YAML dans ce dossier
2. Committez et poussez les changements
3. Les nouveaux workflows seront automatiquement appliqués

## Remarques

- Le déploiement automatique est configuré uniquement pour la branche `main`
- Tous les tests doivent passer avant que les Pull Requests puissent être fusionnées
- Pour un déploiement manuel, utilisez le bouton "Run workflow" dans l'interface GitHub Actions