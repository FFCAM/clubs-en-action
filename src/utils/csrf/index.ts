import { env } from "@/env";

/**
 * CSRF Protection Utils pour Cloudflare Edge Runtime
 * Utilise HMAC-SHA256 pour signer les tokens
 */

// Délai de validité d'un token (15 minutes)
const TOKEN_EXPIRATION = 15 * 60 * 1000;

// Regex pour valider le format UUID v4
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Génère une clé HMAC à partir du secret
 */
async function getHmacKey(): Promise<CryptoKey> {
  const secret = env.CSRF_SECRET;

  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);

  return crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

/**
 * Génère une signature HMAC pour les données
 */
async function signData(data: string): Promise<string> {
  const key = await getHmacKey();
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);

  const signature = await crypto.subtle.sign('HMAC', key, dataBuffer);

  // Convertit en base64url (compatible URL)
  const bytes = new Uint8Array(signature);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Vérifie une signature HMAC
 */
async function verifySignature(data: string, signature: string): Promise<boolean> {
  try {
    const expectedSignature = await signData(data);
    // Comparaison en temps constant pour éviter les timing attacks
    if (signature.length !== expectedSignature.length) return false;
    let result = 0;
    for (let i = 0; i < signature.length; i++) {
      result |= signature.charCodeAt(i) ^ expectedSignature.charCodeAt(i);
    }
    return result === 0;
  } catch {
    return false;
  }
}

/**
 * Génère un token CSRF signé
 * Format: uuid:timestamp:signature
 */
export async function generateCSRFToken(): Promise<string> {
  const uuid = crypto.randomUUID();
  const timestamp = Date.now();
  const data = `${uuid}:${timestamp}`;
  const signature = await signData(data);

  return `${data}:${signature}`;
}

/**
 * Vérifie la validité d'un token CSRF
 */
export async function verifyCSRFToken(token: string): Promise<boolean> {
  if (!token) return false;

  // Décomposition du token
  const parts = token.split(":");
  if (parts.length !== 3) return false;

  const [uuid, timestampStr, signature] = parts;

  // Validation du format UUID
  if (!UUID_REGEX.test(uuid)) return false;

  // Validation du timestamp
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Vérification de l'expiration
  if (Date.now() - timestamp > TOKEN_EXPIRATION) return false;

  // Vérification de la signature HMAC
  const data = `${uuid}:${timestampStr}`;
  return verifySignature(data, signature);
}

/**
 * Version synchrone pour compatibilité (vérifie seulement le format et l'expiration)
 * @deprecated Utiliser verifyCSRFToken à la place
 */
export function verifyCSRFTokenSync(token: string): boolean {
  if (!token) return false;

  const parts = token.split(":");
  if (parts.length !== 3) return false;

  const [uuid, timestampStr] = parts;

  if (!UUID_REGEX.test(uuid)) return false;

  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  return Date.now() - timestamp <= TOKEN_EXPIRATION;
}
