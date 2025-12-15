/**
 * Tests pour src/utils/csrf/index.ts
 * Note: Les tests de génération de token nécessitent crypto.randomUUID
 * disponible en runtime Edge/Node 19+. Ces tests vérifient la logique de validation.
 */

// Mock de l'environnement
jest.mock("@/env", () => ({
  getEnv: () => ({
    RESEND_API_KEY: "test-resend-api-key",
    CONTACT_EMAIL: "test@example.com",
    CSRF_SECRET: "test-csrf-secret-minimum-32-characters-long",
  }),
}));

import { verifyCSRFToken, verifyCSRFTokenSync } from "@/utils/csrf";

describe("csrf/index.ts", () => {
  describe("verifyCSRFToken", () => {
    it("rejette un token vide", async () => {
      expect(await verifyCSRFToken("")).toBe(false);
    });

    it("rejette un token null/undefined", async () => {
      expect(await verifyCSRFToken(null as unknown as string)).toBe(false);
      expect(await verifyCSRFToken(undefined as unknown as string)).toBe(false);
    });

    it("rejette un token mal formaté (pas assez de parties)", async () => {
      expect(await verifyCSRFToken("invalid")).toBe(false);
      expect(await verifyCSRFToken("part1:part2")).toBe(false);
    });

    it("rejette un token avec UUID invalide", async () => {
      const invalidToken = "not-a-uuid:1234567890:signature";
      expect(await verifyCSRFToken(invalidToken)).toBe(false);
    });

    it("rejette un token avec timestamp invalide", async () => {
      // UUID valide mais timestamp non numérique
      const invalidToken = "12345678-1234-4123-8123-123456789abc:not-a-number:signature";
      expect(await verifyCSRFToken(invalidToken)).toBe(false);
    });

    it("rejette un token expiré (plus de 15 minutes)", async () => {
      // Token avec timestamp vieux de 16 minutes
      const oldTimestamp = Date.now() - 16 * 60 * 1000;
      const expiredToken = `12345678-1234-4123-8123-123456789abc:${oldTimestamp}:fake-signature`;
      expect(await verifyCSRFToken(expiredToken)).toBe(false);
    });

    it("rejette un token avec signature invalide même si format correct", async () => {
      // Token bien formaté mais signature incorrecte
      const timestamp = Date.now();
      const tamperedToken = `12345678-1234-4123-8123-123456789abc:${timestamp}:invalid-signature`;
      expect(await verifyCSRFToken(tamperedToken)).toBe(false);
    });
  });

  describe("verifyCSRFTokenSync", () => {
    it("rejette un token vide", () => {
      expect(verifyCSRFTokenSync("")).toBe(false);
    });

    it("rejette un token mal formaté", () => {
      expect(verifyCSRFTokenSync("invalid")).toBe(false);
      expect(verifyCSRFTokenSync("a:b")).toBe(false);
    });

    it("rejette un token avec UUID invalide", () => {
      const timestamp = Date.now();
      expect(verifyCSRFTokenSync(`not-uuid:${timestamp}:sig`)).toBe(false);
    });

    it("rejette un token expiré", () => {
      const oldTimestamp = Date.now() - 16 * 60 * 1000;
      const expiredToken = `12345678-1234-4123-8123-123456789abc:${oldTimestamp}:signature`;
      expect(verifyCSRFTokenSync(expiredToken)).toBe(false);
    });

    it("accepte un token non expiré avec format valide (sans vérifier signature)", () => {
      const timestamp = Date.now();
      const token = `12345678-1234-4123-8123-123456789abc:${timestamp}:any-signature`;
      // verifyCSRFTokenSync ne vérifie pas la signature, seulement format et expiration
      expect(verifyCSRFTokenSync(token)).toBe(true);
    });

    it("accepte un UUID v4 valide", () => {
      const timestamp = Date.now();
      // UUID v4 valide (4 en position 13, 8/9/a/b en position 17)
      const validUuids = [
        "550e8400-e29b-41d4-a716-446655440000",
        "6ba7b810-9dad-41d9-80b4-00c04fd430c8",
        "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      ];

      validUuids.forEach((uuid) => {
        const token = `${uuid}:${timestamp}:signature`;
        expect(verifyCSRFTokenSync(token)).toBe(true);
      });
    });
  });

  describe("Format du token CSRF", () => {
    it("le format attendu est uuid:timestamp:signature", () => {
      const timestamp = Date.now();
      const parts = `12345678-1234-4123-8123-123456789abc:${timestamp}:signature`.split(":");

      expect(parts).toHaveLength(3);
      expect(parts[0]).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      expect(parseInt(parts[1], 10)).toBeGreaterThan(0);
      expect(parts[2].length).toBeGreaterThan(0);
    });
  });
});
