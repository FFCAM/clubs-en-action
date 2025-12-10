/**
 * Tests pour src/env.ts - Validation Zod des variables d'environnement
 *
 * Note: Ces tests vérifient le schéma Zod directement, pas le module env.ts
 * car celui-ci exécute la validation au moment de l'import.
 */

import { z } from "zod";

// Recréer le schéma pour les tests (identique à src/env.ts)
const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY est requise"),
  CONTACT_EMAIL: z.string().email("CONTACT_EMAIL doit être un email valide"),
  CSRF_SECRET: z.string().min(32, "CSRF_SECRET doit faire au moins 32 caractères"),
});

describe("env.ts - Validation Zod", () => {
  describe("RESEND_API_KEY", () => {
    it("accepte une clé API valide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123456789",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(true);
    });

    it("rejette une clé API vide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain("RESEND_API_KEY");
      }
    });

    it("rejette si RESEND_API_KEY est manquante", () => {
      const result = envSchema.safeParse({
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(false);
    });
  });

  describe("CONTACT_EMAIL", () => {
    it("accepte un email valide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "contact@ffcam.fr",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(true);
    });

    it("rejette un email invalide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "not-an-email",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain("CONTACT_EMAIL");
        expect(result.error.issues[0].message).toContain("email");
      }
    });

    it("rejette un email vide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(false);
    });

    it("rejette si CONTACT_EMAIL est manquante", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(false);
    });
  });

  describe("CSRF_SECRET", () => {
    it("accepte un secret de 32 caractères", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(32),
      });

      expect(result.success).toBe(true);
    });

    it("accepte un secret de plus de 32 caractères", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(64),
      });

      expect(result.success).toBe(true);
    });

    it("rejette un secret de moins de 32 caractères", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "a".repeat(31),
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain("CSRF_SECRET");
        expect(result.error.issues[0].message).toContain("32");
      }
    });

    it("rejette un secret vide", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "test@example.com",
        CSRF_SECRET: "",
      });

      expect(result.success).toBe(false);
    });

    it("rejette si CSRF_SECRET est manquante", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "re_123",
        CONTACT_EMAIL: "test@example.com",
      });

      expect(result.success).toBe(false);
    });
  });

  describe("Validation complète", () => {
    it("accepte un environnement complet et valide", () => {
      const validEnv = {
        RESEND_API_KEY: "re_abcdef123456",
        CONTACT_EMAIL: "contact@clubs-en-action.fr",
        CSRF_SECRET: "super-secret-key-that-is-at-least-32-chars",
      };

      const result = envSchema.safeParse(validEnv);
      expect(result.success).toBe(true);
    });

    it("rejette si toutes les variables sont manquantes", () => {
      const result = envSchema.safeParse({});

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBe(3);
      }
    });

    it("retourne toutes les erreurs en une seule validation", () => {
      const result = envSchema.safeParse({
        RESEND_API_KEY: "",
        CONTACT_EMAIL: "invalid",
        CSRF_SECRET: "short",
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        // Devrait avoir 3 erreurs distinctes
        expect(result.error.issues.length).toBe(3);
      }
    });
  });
});
