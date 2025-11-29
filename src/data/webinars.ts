/**
 * Webinars data source
 *
 * This file centralizes all webinar information.
 * TODO: Replace with CMS data fetching when implemented
 */

export interface Webinar {
  id: number;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  time: string; // HH:MM format
  endTime: string; // HH:MM format
  description: string;
  recordingLink?: string; // For past webinars
  zoomLink?: string; // For upcoming webinars
}

/**
 * All webinars sorted by date (oldest first)
 */
export const webinars: Webinar[] = [
  {
    id: 1,
    title: "Outils collaboratifs dans les Clubs",
    date: "2025-06-23",
    time: "20:00",
    endTime: "21:30",
    description: "Exploration des outils numériques qui facilitent la collaboration au sein de votre club : communication interne, gestion de projets, partage de documents, organisation d'événements. Des solutions concrètes présentées par des clubs qui les utilisent au quotidien.",
    recordingLink: "/webinaires/outils-collaboratifs"
  },
  {
    id: 2,
    title: "Environnement et partenariats",
    date: "2025-06-30",
    time: "18:00",
    endTime: "19:30",
    description: "Découvrez comment développer des partenariats avec les associations environnementales et les gestionnaires d'espaces protégés pour enrichir vos activités tout en préservant la nature.",
    recordingLink: "/webinaires/environnement-partenariats"
  },
  {
    id: 3,
    title: "Refuges phares pour l'environnement",
    date: "2025-10-20",
    time: "18:30",
    endTime: "20:00",
    description: "Découvrez comment votre club peut s'engager dans la préservation de l'environnement à travers le programme des refuges phares. Échanges sur les bonnes pratiques, initiatives locales et partenariats durables.",
    recordingLink: "/webinaires/refuges-phares"
  },
  {
    id: 4,
    title: "Gestion des EPIs dans les clubs",
    date: "2025-12-15",
    time: "19:00",
    endTime: "20:30",
    description: "Présentation de la réglementation et des responsabilités liées aux Équipements de Protection Individuelle (EPIs) dans les clubs, suivie de retours d'expérience sur les solutions mises en place par les clubs pour gérer ces équipements.",
  }
];

/**
 * Get past webinars (date < today)
 * Sorted by date descending (most recent first)
 */
export function getPastWebinars(): Webinar[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison

  return webinars
    .filter(webinar => new Date(webinar.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get upcoming webinars (date >= today)
 * Sorted by date ascending (soonest first)
 */
export function getNextWebinars(): Webinar[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison

  return webinars
    .filter(webinar => new Date(webinar.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
