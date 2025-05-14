import { NextResponse } from "next/server";
import { generateCSRFToken } from "../../../utils/csrf";

// Required for Cloudflare Pages with Next.js app router
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    // Génération d'un nouveau token CSRF
    const csrfToken = await generateCSRFToken();

    // Création de la réponse
    const response = NextResponse.json(
      {
        success: true,
        csrfToken,
      },
      { status: 200 },
    );

    // Configuration du cookie avec le même token (Double Submit Cookie Pattern)
    // Nous utilisons seulement le token, sans l'inclure dans une signature cryptographique
    response.cookies.set("csrf", csrfToken, {
      httpOnly: true, // Non accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // Uniquement sur HTTPS en production
      sameSite: "lax", // Plus permissif que "strict" mais toujours sécurisé contre CSRF
      path: "/", // Disponible sur tout le domaine
      maxAge: 15 * 60, // 15 minutes (correspond à TOKEN_EXPIRATION)
    });

    return response;
  } catch (error) {
    console.error("Erreur lors de la génération du token CSRF:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la génération du token CSRF",
      },
      { status: 500 },
    );
  }
}
