import { env } from "@/env";

/**
 * Échappe les caractères HTML pour prévenir les attaques XSS
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface EmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

export interface ContactFormData {
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
}

/**
 * Envoie un email via l'API Resend
 */
export async function sendEmail(options: {
  from?: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
  reply_to?: string;
}): Promise<EmailResult> {

  try {
    // Préparer les données pour l'API Resend
    const payload = {
      from: options.from || "Clubs en Action <noreply@calmo.app>",
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      reply_to: options.reply_to,
    };

    // Appel à l'API Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Traiter la réponse
    const data = (await response.json()) as { id?: string; error?: { message?: string } };

    if (!response.ok || data.error) {
      const errorMessage =
        (data.error?.message) || "Erreur inconnue lors de l'envoi de l'email";
      console.error("Erreur Resend:", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }

    // Succès
    console.log("Email envoyé avec succès via Resend, ID:", data.id);
    return {
      success: true,
      id: data.id,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    console.error("Exception lors de l'envoi de l'email:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Envoie une notification pour le formulaire de contact
 */
export async function sendContactFormEmail(
  formData: ContactFormData,
  toEmail: string,
): Promise<EmailResult> {
  const subject = `Nouveau message de ${formData.name} (${formData.club})`;

  // Créer le corps du message en texte brut
  let textBody = `Nouveau message reçu via le formulaire de Clubs en Action\n\n`;
  textBody += `Nom: ${formData.name}\n`;
  textBody += `Email: ${formData.email}\n`;
  textBody += `Club: ${formData.club}\n`;
  textBody += `Message: ${formData.message}\n\n`;

  if (formData["suggest-theme"]) textBody += `Suggérer un thème: Oui\n`;
  if (formData["share-solution"]) textBody += `Partager une solution: Oui\n`;
  if (formData.participate) textBody += `Participer: Oui\n`;
  if (formData.feedback) textBody += `Commentaires: Oui\n`;
  if (formData["help-organize"]) textBody += `Aider à organiser: Oui\n`;
  if (formData.theme) textBody += `Thème suggéré: ${formData.theme}\n`;
  if (formData.solution) textBody += `Solution: ${formData.solution}\n`;
  if (formData.newsletter) textBody += `Inscription newsletter: Oui\n`;
  
  // Ajouter un format pour Google Sheets
  textBody += `\n\n--- FORMAT POUR GOOGLE SHEETS ---\n`;
  const dateSoumission = new Date().toLocaleDateString('fr-FR');
  const suggestTheme = formData["suggest-theme"] ? "Oui" : "Non";
  const shareSolution = formData["share-solution"] ? "Oui" : "Non";
  const participate = formData.participate ? "Oui" : "Non";
  const feedback = formData.feedback ? "Oui" : "Non";
  const helpOrganize = formData["help-organize"] ? "Oui" : "Non";
  const newsletter = formData.newsletter ? "Oui" : "Non";
  
  // Nettoyer les champs textuels pour éviter les problèmes de formatage
  const cleanName = formData.name.replace(/\t|\n/g, " ");
  const cleanEmail = formData.email.replace(/\t|\n/g, " ");
  const cleanClub = formData.club.replace(/\t|\n/g, " ");
  const cleanTheme = formData.theme ? formData.theme.replace(/\t|\n/g, " ") : "";
  const cleanSolution = formData.solution ? formData.solution.replace(/\t|\n/g, " ").substring(0, 100) + (formData.solution.length > 100 ? "..." : "") : "";
  
  // Créer une ligne copiable pour Google Sheets
  textBody += `${dateSoumission}\t${cleanName}\t${cleanEmail}\t${cleanClub}\t${suggestTheme}\t${shareSolution}\t${participate}\t${feedback}\t${helpOrganize}\t${cleanTheme}\t${cleanSolution}\t${newsletter}\n`;
  textBody += `\n(Colonnes: Date\tNom\tEmail\tClub\tSuggère un thème\tPartage solution\tParticipe\tFeedback\tAide à organiser\tThème suggéré\tSolution\tNewsletter)\n`;

  // Créer le corps du message en HTML (avec échappement XSS)
  let htmlBody = `<h2>Nouveau message reçu via le formulaire de Clubs en Action</h2>`;
  htmlBody += `<p><strong>Nom:</strong> ${escapeHtml(formData.name)}</p>`;
  htmlBody += `<p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>`;
  htmlBody += `<p><strong>Club:</strong> ${escapeHtml(formData.club)}</p>`;
  htmlBody += `<p><strong>Message:</strong> ${escapeHtml(formData.message)}</p>`;

  if (formData["suggest-theme"])
    htmlBody += `<p><strong>Suggérer un thème:</strong> Oui</p>`;
  if (formData["share-solution"])
    htmlBody += `<p><strong>Partager une solution:</strong> Oui</p>`;
  if (formData.participate)
    htmlBody += `<p><strong>Participer:</strong> Oui</p>`;
  if (formData.feedback)
    htmlBody += `<p><strong>Commentaires:</strong> Oui</p>`;
  if (formData["help-organize"])
    htmlBody += `<p><strong>Aider à organiser des webinaires:</strong> Oui</p>`;
  if (formData.theme)
    htmlBody += `<p><strong>Thème suggéré:</strong> ${escapeHtml(formData.theme)}</p>`;
  if (formData.solution)
    htmlBody += `<p><strong>Solution:</strong> ${escapeHtml(formData.solution)}</p>`;
  if (formData.newsletter)
    htmlBody += `<p><strong>Inscription newsletter:</strong> Oui</p>`;
    
  // Ajouter un format pour Google Sheets en HTML (avec échappement XSS)
  htmlBody += `<br><hr><h3>Format pour Google Sheets</h3>`;
  htmlBody += `<pre style="font-family: monospace; background-color: #f5f5f5; padding: 10px; border: 1px solid #ddd; border-radius: 4px; overflow-x: auto;">${escapeHtml(dateSoumission)}\t${escapeHtml(cleanName)}\t${escapeHtml(cleanEmail)}\t${escapeHtml(cleanClub)}\t${suggestTheme}\t${shareSolution}\t${participate}\t${feedback}\t${helpOrganize}\t${escapeHtml(cleanTheme)}\t${escapeHtml(cleanSolution)}\t${newsletter}</pre>`;
  htmlBody += `<p><small><em>Colonnes: Date | Nom | Email | Club | Suggère un thème | Partage solution | Participe | Feedback | Aide à organiser | Thème suggéré | Solution | Newsletter</em></small></p>`;
  
  // Ajout d'instructions pour le copier-coller
  htmlBody += `<p><small>Pour copier dans Google Sheets : sélectionnez le texte ci-dessus, copiez-le (Ctrl+C), puis collez-le dans votre feuille Google Sheets en sélectionnant l'option "Diviser le texte en colonnes" depuis le menu "Données".</small></p>`;

  // Inclure l'email de l'expéditeur dans le sujet pour faciliter la réponse
  const subject2 = `${subject} <${formData.email}>`;

  // Envoi de l'email
  return sendEmail({
    to: toEmail,
    subject: subject2,
    text: textBody,
    html: htmlBody,
    reply_to: formData.email,
  });
}
