/**
 * CSRF Protection Utils simplifiée pour Cloudflare
 */

// Délai de validité d'un token (15 minutes)
const TOKEN_EXPIRATION = 15 * 60 * 1000;

/**
 * Génère un token CSRF simple
 */
export async function generateCSRFToken(): Promise<string> {
  // Utilisation directe de randomUUID de l'API Web Crypto
  const uuid = crypto.randomUUID();
  const timestamp = Date.now();

  // Format simple: uuid:timestamp
  return `${uuid}:${timestamp}`;
}

/**
 * Vérifie la validité d'un token CSRF
 */
export function verifyCSRFToken(token: string): boolean {
  if (!token) return false;

  // Décomposition du token
  const parts = token.split(":");
  if (parts.length !== 2) return false;

  const [timestampStr] = parts;
  const timestamp = parseInt(timestampStr, 10);

  // Vérification de l'expiration uniquement
  return Date.now() - timestamp <= TOKEN_EXPIRATION;
}
