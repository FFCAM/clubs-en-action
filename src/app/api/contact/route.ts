import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmail } from "../../../utils/email";
import { verifyCSRFToken } from "../../../utils/csrf";
import { isValidEmail } from "../../../utils/validation";

// Assurez-vous que la variable d'environnement RESEND_API_KEY est configurée dans votre projet Cloudflare

// Required for Cloudflare Pages with Next.js app router
export const runtime = "edge";

// Utilisation de l'interface du module email.ts
interface ContactFormData {
  name: string;
  email: string;
  club: string;
  "suggest-theme"?: string;
  "share-solution"?: string;
  participate?: string;
  feedback?: string;
  "help-organize"?: string;
  theme?: string;
  solution?: string;
  message: string;
  newsletter?: string;
  timestamp?: string;
  csrf_token?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract and validate form data
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const club = formData.get("club")?.toString();
    const message = formData.get("message")?.toString();
    const csrfToken = formData.get("csrf_token")?.toString();

    // Double Submit Cookie Pattern: get CSRF token from cookie
    const cookieCsrfToken = request.cookies.get("csrf")?.value;

    // Validate CSRF token (Double Submit Cookie Pattern)
    const isValidToken = await verifyCSRFToken(csrfToken || '');
    if (!csrfToken || !cookieCsrfToken || csrfToken !== cookieCsrfToken || !isValidToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Jeton de sécurité invalide ou expiré. Veuillez rafraîchir la page et réessayer.",
        },
        { status: 403 },
      );
    }

    // Validate email format
    if (!isValidEmail(email || '')) {
      return NextResponse.json(
        {
          success: false,
          error: "L'adresse email fournie n'est pas valide",
        },
        { status: 400 },
      );
    }

    // Validate required fields
    if (!name || !email || !club || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Tous les champs obligatoires doivent être remplis",
        },
        { status: 400 },
      );
    }

    // Construct data object
    const data: ContactFormData = {
      name,
      email,
      club,
      message,
      timestamp: new Date().toISOString(),
    };

    // Add optional fields
    const optionalFields = [
      "suggest-theme",
      "share-solution",
      "participate",
      "feedback",
      "help-organize",
      "theme",
      "solution",
      "newsletter",
      "csrf_token",
    ];

    optionalFields.forEach((field) => {
      const value = formData.get(field)?.toString();
      if (value) {
        data[field as keyof ContactFormData] = value;
      }
    });

    // Log the form submission for debugging
    console.log("Nouvelle soumission de formulaire:", data);

    // Adresse de destination pour recevoir les notifications du formulaire
    const destinationEmail = process.env.CONTACT_EMAIL;
    if (!destinationEmail) {
      console.error("CONTACT_EMAIL environment variable is not set");
      return NextResponse.json(
        {
          success: false,
          error: "Configuration serveur incomplète. Veuillez contacter l'administrateur.",
        },
        { status: 500 },
      );
    }

    try {
      // Utiliser la fonction d'envoi d'email définie dans utils/email.ts
      const emailResult = await sendContactFormEmail(data, destinationEmail);

      if (emailResult && "success" in emailResult && !emailResult.success) {
        console.error("Erreur lors de l'envoi de l'email:", emailResult.error);
        // On continue malgré l'erreur d'envoi
      } else if (emailResult && "success" in emailResult) {
        console.log("Email envoyé avec succès via Resend, ID:", emailResult.id);
      }
    } catch (emailError) {
      console.error("Exception lors de l'envoi de l'email:", emailError);
      // On continue malgré l'erreur d'envoi
    }

    return NextResponse.json(
      {
        success: true,
        message: `Merci ${name}! Votre message a bien été reçu. L'équipe de Clubs en Action vous répondra dans les plus brefs délais.`,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors du traitement de votre demande",
      },
      { status: 500 },
    );
  }
}
