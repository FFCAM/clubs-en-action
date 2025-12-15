/**
 * Tests pour src/utils/email.ts
 */

// Mock de l'environnement avant l'import
jest.mock("@/env", () => ({
  getEnv: () => ({
    RESEND_API_KEY: "test-resend-api-key",
    CONTACT_EMAIL: "test@example.com",
    CSRF_SECRET: "test-csrf-secret-minimum-32-characters-long",
  }),
}));

// Mock de fetch global
const mockFetch = jest.fn();
global.fetch = mockFetch;

import { sendEmail, sendContactFormEmail, ContactFormData } from "@/utils/email";

describe("email.ts", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe("escapeHtml (testé via sendContactFormEmail)", () => {
    it("échappe les caractères HTML dangereux dans les emails", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      const maliciousData: ContactFormData = {
        name: '<script>alert("xss")</script>',
        email: "test@example.com",
        club: "Club <b>Test</b>",
        message: "Message avec <img src=x onerror=alert(1)>",
      };

      await sendContactFormEmail(maliciousData, "dest@example.com");

      // Vérifier que fetch a été appelé
      expect(mockFetch).toHaveBeenCalledTimes(1);

      // Récupérer le body envoyé
      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      // Vérifier que le HTML est échappé
      expect(body.html).not.toContain("<script>");
      expect(body.html).toContain("&lt;script&gt;");
      expect(body.html).not.toContain("<b>");
      expect(body.html).toContain("&lt;b&gt;");
      expect(body.html).not.toContain("<img");
      expect(body.html).toContain("&lt;img");
    });

    it("échappe les guillemets et apostrophes", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      const dataWithQuotes: ContactFormData = {
        name: 'Test "avec" des \'guillemets\'',
        email: "test@example.com",
        club: "Club & Co",
        message: "Message normal",
      };

      await sendContactFormEmail(dataWithQuotes, "dest@example.com");

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.html).toContain("&quot;");
      expect(body.html).toContain("&#39;");
      expect(body.html).toContain("&amp;");
    });
  });

  describe("sendEmail", () => {
    it("envoie un email avec succès", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "email-123" }),
      });

      const result = await sendEmail({
        to: "dest@example.com",
        subject: "Test Subject",
        text: "Test content",
      });

      expect(result.success).toBe(true);
      expect(result.id).toBe("email-123");
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.resend.com/emails",
        expect.objectContaining({
          method: "POST",
          headers: {
            Authorization: "Bearer test-resend-api-key",
            "Content-Type": "application/json",
          },
        })
      );
    });

    it("gère les erreurs de l'API Resend", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: { message: "Invalid API key" } }),
      });

      const result = await sendEmail({
        to: "dest@example.com",
        subject: "Test",
        text: "Test",
      });

      expect(result.success).toBe(false);
      expect(result.error).toBe("Invalid API key");
    });

    it("gère les exceptions réseau", async () => {
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      const result = await sendEmail({
        to: "dest@example.com",
        subject: "Test",
        text: "Test",
      });

      expect(result.success).toBe(false);
      expect(result.error).toBe("Network error");
    });

    it("utilise l'expéditeur par défaut si non spécifié", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      await sendEmail({
        to: "dest@example.com",
        subject: "Test",
        text: "Test",
      });

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.from).toBe("Clubs en Action <noreply@calmo.app>");
    });
  });

  describe("sendContactFormEmail", () => {
    it("formate correctement le sujet avec nom et club", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      const formData: ContactFormData = {
        name: "Jean Dupont",
        email: "jean@example.com",
        club: "CAF Paris",
        message: "Mon message",
      };

      await sendContactFormEmail(formData, "dest@example.com");

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.subject).toContain("Jean Dupont");
      expect(body.subject).toContain("CAF Paris");
      expect(body.reply_to).toBe("jean@example.com");
    });

    it("inclut les champs optionnels quand présents", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      const formData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        club: "Test Club",
        message: "Message",
        theme: "Thème suggéré",
        solution: "Ma solution",
        "suggest-theme": "true",
        newsletter: "true",
      };

      await sendContactFormEmail(formData, "dest@example.com");

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.html).toContain("Thème suggéré");
      expect(body.html).toContain("Ma solution");
      expect(body.html).toContain("Suggérer un thème:");
      expect(body.html).toContain("Inscription newsletter:");
      expect(body.text).toContain("Thème suggéré");
    });

    it("génère le format Google Sheets dans le body", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "test-id" }),
      });

      const formData: ContactFormData = {
        name: "Test",
        email: "test@example.com",
        club: "Club",
        message: "Message",
      };

      await sendContactFormEmail(formData, "dest@example.com");

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.text).toContain("FORMAT POUR GOOGLE SHEETS");
      expect(body.html).toContain("Format pour Google Sheets");
    });
  });
});
