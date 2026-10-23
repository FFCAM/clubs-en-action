#!/usr/bin/env node

/**
 * Build Cloudflare Pages avec la Vercel CLI verrouillée dans le lockfile.
 *
 * Laissé seul, next-on-pages ne détecte pas la Vercel CLI locale avec pnpm 10
 * et lance `pnpm dlx vercel build`, qui télécharge la dernière version publiée.
 * On lance donc `vercel build` nous-mêmes, puis next-on-pages en --skip-build.
 */

const { execSync } = require('child_process');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

// Même fichier que celui généré par next-on-pages : vercel build en a besoin
// pour ne pas tenter un `vercel pull` (qui exige un compte Vercel lié)
const PROJECT_JSON = '.vercel/project.json';
if (!existsSync(PROJECT_JSON)) {
  mkdirSync('.vercel', { recursive: true });
  writeFileSync(
    PROJECT_JSON,
    JSON.stringify({ projectId: '_', orgId: '_', settings: { framework: 'nextjs' } })
  );
}

execSync('pnpm exec vercel build', { stdio: 'inherit' });
execSync('pnpm exec next-on-pages --skip-build', { stdio: 'inherit' });
