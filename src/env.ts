import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY est requise"),
  CONTACT_EMAIL: z.string().email("CONTACT_EMAIL doit être un email valide"),
  CSRF_SECRET: z.string().min(32, "CSRF_SECRET doit faire au moins 32 caractères"),
});

export const env = envSchema.parse(process.env);
