/**
 * Utilitaires de validation
 */

/**
 * Regex pour valider les adresses email
 * Format: [caractères non-espace/arobase]@[caractères non-espace/arobase].[caractères non-espace/arobase]
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Vérifie si une adresse email est valide
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  return EMAIL_REGEX.test(email);
}
