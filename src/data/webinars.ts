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
  summaryLink?: string; // Link to the summary page for past webinars
  zoomLink?: string; // For upcoming webinars
  zoomAccessCode?: string; // Access code for Zoom meeting
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
    summaryLink: "/webinaires/outils-collaboratifs"
  },
  {
    id: 2,
    title: "Environnement et partenariats",
    date: "2025-06-30",
    time: "18:00",
    endTime: "19:30",
    description: "Découvrez comment développer des partenariats avec les associations environnementales et les gestionnaires d'espaces protégés pour enrichir vos activités tout en préservant la nature.",
    summaryLink: "/webinaires/environnement-partenariats"
  },
  {
    id: 3,
    title: "Refuges phares pour l'environnement",
    date: "2025-10-20",
    time: "18:30",
    endTime: "20:00",
    description: "Découvrez comment votre club peut s'engager dans la préservation de l'environnement à travers le programme des refuges phares. Échanges sur les bonnes pratiques, initiatives locales et partenariats durables.",
    summaryLink: "/webinaires/refuges-phares"
  },
  {
    id: 4,
    title: "Gestion des EPIs dans les clubs",
    date: "2025-12-16",
    time: "19:00",
    endTime: "20:30",
    description: "Présentation de la réglementation et des responsabilités liées aux Équipements de Protection Individuelle (EPIs) dans les clubs, suivie de retours d'expérience sur les solutions mises en place par les clubs pour gérer ces équipements.",
    summaryLink: "/webinaires/gestion-epi"
  },
  {
    id: 5,
    title: "Les nouvelles formations à l'environnement",
    date: "2026-01-14",
    time: "18:30",
    endTime: "20:00",
    description: "Découvrez le nouveau brevet fédéral Instructeur Avenir Montagne, dédié à la redirection écologique et à la protection des milieux naturels et montagnards.",
    summaryLink: "/webinaires/formations-environnement"
  },
  {
    id: 6,
    title: "Que la montagne est belle... sous les étoiles !",
    date: "2026-02-10",
    time: "18:30",
    endTime: "20:00",
    description: "Découvrez comment organiser en 2026 dans votre club une opération Que la Montagne est belle ! qui met en valeur vos pratiques sportives respectueuses des milieux naturels. Le thème choisi cette année : sous les étoiles. Webinaire animé par Alexandra Vaudatin, membre de la commission environnement.",
    zoomLink: "https://us02web.zoom.us/j/86312694778",
    zoomAccessCode: "534955"
  },
  {
    id: 7,
    title: "Ramassage de déchets en montagne",
    date: "2026-04-21",
    time: "18:30",
    endTime: "20:00",
    description: "Découvrez comment organiser dans votre club une opération de ramassage de déchets en montagne, grâce au partenariat entre la FFCAM et le programme Montagne zéro déchet de Mountain riders. Webinaire animé par la commission environnement avec notre partenaire Mountain riders."
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
