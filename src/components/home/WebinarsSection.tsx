"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Calendar, Star, UserPlus, Video, Copy, Check } from "lucide-react";
import { FFCAMSection, FFCAMHeading, FFCAMSubheading, FFCAMCard, FFCAMBadge, FFCAMButton } from "@/components";

// Dynamic import pour éviter les erreurs d'hydratation
const AddToCalendarButton = dynamic(
  () => import("add-to-calendar-button-react").then((mod) => ({ default: mod.AddToCalendarButton })),
  { 
    ssr: false,
    loading: () => (
      <FFCAMButton 
        variant="primary"
        size="sm"
        disabled
        className="w-full justify-center"
      >
        Chargement...
      </FFCAMButton>
    )
  }
);

export default function WebinarsSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = async (text: string, webinarId: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(webinarId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const nextWebinars = [
    {
      id: 1,
      title: "Outils collaboratifs dans les Clubs",
      date: "2025-06-23",
      time: "20:00",
      endTime: "21:30",
      description: "Explorez les outils numériques qui facilitent la collaboration au sein de votre club : communication interne, gestion de projets, partage de documents, organisation d'événements. Des solutions concrètes présentées par des clubs qui les utilisent au quotidien.",
      zoomLink: "https://us02web.zoom.us/j/82223666901"
    },
    {
      id: 2,
      title: "Environnement : Comment tisser des liens avec les associations environnementales locales et les gestionnaires d'espaces naturels protégés",
      date: "2025-06-30",
      time: "18:00",
      endTime: "19:30",
      description: "Découvrez comment développer des partenariats avec les associations environnementales et les gestionnaires d'espaces protégés pour enrichir vos activités tout en préservant la nature.",
      zoomLink: null // Lien à venir
    },
    {
      id: 3,
      title: "La charte montagne",
      date: null, // Date à définir
      time: null,
      endTime: null,
      description: "Comprendre et appliquer la charte montagne dans vos activités de club. Échangez sur les bonnes pratiques, les défis rencontrés et les solutions trouvées pour concilier pratique sportive et respect de l'environnement montagnard.",
      zoomLink: null // Lien à venir
    }
  ];

  const upcomingThemes = [
    "Suite d'outils collaboratifs",
    "Gestion des EPIs",
    "Gestion de bibliothèque",
    "Communication interne",
    "Recruter et valoriser les bénévoles",
    "Trouver des partenariats / sponsors",
    "Mise en place d'outils administratifs",
    "Proposez vos thèmes",
  ];

  return (
    <FFCAMSection id="webinaires" background="light">
      <div className="max-w-2xl mx-auto text-center">
        <FFCAMHeading level={2}>
          Webinaires Participatifs
        </FFCAMHeading>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Des sessions d&apos;échange trimestrielles où les clubs présentent
          leurs solutions concrètes issues du terrain. Un espace d&apos;entraide directe
          entre clubs, par les clubs et pour les clubs, pour enrichir nos pratiques.
        </p>
      </div>

        {/* Prochains webinaires */}
        {nextWebinars.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 text-center">
              <FFCAMBadge className="inline-flex items-center px-3 py-1 mb-2">
                <Calendar className="w-4 h-4 mr-1" /> Prochains webinaires
              </FFCAMBadge>
            </div>
            <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {nextWebinars.map((webinar) => (
                <FFCAMCard key={webinar.id} className="p-6">
                  <div className="space-y-4">
                    <FFCAMHeading level={3} className="text-xl">
                      {webinar.title}
                    </FFCAMHeading>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-ffcam" />
                        <span className="font-medium">
                          {webinar.date ? (
                            new Date(webinar.date).toLocaleDateString('fr-FR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })
                          ) : (
                            "Septembre 2025 (date à définir)"
                          )}
                        </span>
                      </div>
                      {webinar.time && (
                        <div className="flex items-center gap-2">
                          <Video className="w-5 h-5 text-ffcam" />
                          <span className="font-medium">
                            {webinar.time}{webinar.endTime ? `-${webinar.endTime}` : ''}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600">{webinar.description}</p>
                    <div className="flex flex-col gap-3 pt-4">
                      {webinar.date && webinar.time ? (
                        <div className="w-full">
                          <AddToCalendarButton
                            name={webinar.title}
                            language="fr"
                            description={webinar.description + (webinar.zoomLink ? `\n\nLien Zoom: ${webinar.zoomLink}` : "\n\nLien Zoom à venir")}
                            startDate={webinar.date}
                            startTime={webinar.time}
                            endTime={webinar.endTime || ""}
                            timeZone="Europe/Paris"
                            location="En ligne (Zoom)"
                            options={['Apple','Google','Outlook.com','Yahoo','iCal']}
                            label="Ajouter au calendrier"
                            lightMode="light"
                            size="4"
                            buttonStyle="round"
                            listStyle="modal"
                          />
                        </div>
                      ) : (
                        <FFCAMButton 
                          variant="primary"
                          size="sm"
                          disabled
                          className="justify-center w-full"
                        >
                          Date à venir
                        </FFCAMButton>
                      )}
                      {webinar.zoomLink ? (
                        <>
                          <FFCAMButton
                            variant="secondary"
                            size="sm"
                            icon={<Video className="w-4 h-4" />}
                            onClick={() => window.open(webinar.zoomLink, '_blank')}
                            className="justify-center w-full"
                          >
                            Rejoindre sur Zoom
                          </FFCAMButton>
                          <FFCAMButton
                            variant="secondary"
                            size="sm"
                            icon={copiedId === webinar.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            onClick={() => copyToClipboard(webinar.zoomLink!, webinar.id)}
                            className="justify-center w-full"
                          >
                            {copiedId === webinar.id ? "Lien copié !" : "Copier le lien"}
                          </FFCAMButton>
                        </>
                      ) : (
                        <FFCAMButton
                          variant="secondary"
                          size="sm"
                          disabled
                          icon={<Video className="w-4 h-4" />}
                          className="justify-center w-full"
                        >
                          Lien Zoom à venir
                        </FFCAMButton>
                      )}
                    </div>
                  </div>
                </FFCAMCard>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <div className="mb-8 text-center">
            <FFCAMBadge className="inline-flex items-center px-3 py-1 mb-2">
              <Video className="w-4 h-4 mr-1" /> Comment ça marche ?
            </FFCAMBadge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FFCAMCard className="relative p-8 overflow-hidden group">
            <div className="absolute w-24 h-24 transition rounded-full -right-4 -top-4 bg-ffcam/5 group-hover:scale-150" />
            <FFCAMSubheading className="relative">
              Le Format
            </FFCAMSubheading>
            <p className="relative mt-4 text-gray-600">
              Sur un thème donné (ex: &quot;Booster sa communication
              interne&quot;), 2 ou 3 clubs présentent leur approche, leurs
              outils, leurs réussites. Suivi d&apos;un temps d&apos;échange pour
              adapter ces solutions à votre contexte et créer des liens directs entre clubs.
            </p>
          </FFCAMCard>

          <FFCAMCard className="relative p-8 overflow-hidden group">
            <div className="absolute w-24 h-24 transition rounded-full -right-4 -top-4 bg-ffcam/5 group-hover:scale-150" />
            <FFCAMSubheading className="relative">
              L&apos;Organisation
            </FFCAMSubheading>
            <p className="relative mt-4 text-gray-600">
              Des sessions en ligne de 1h30, organisées environ tous les 3 mois
              par les clubs pour les clubs. Une initiative collaborative, animée par des 
              bénévoles passionnés, pour mutualiser nos expertises et renforcer
              nos compétences collectives dans une ambiance conviviale.
            </p>
          </FFCAMCard>

          <FFCAMCard className="relative p-8 overflow-hidden group">
            <div className="absolute w-24 h-24 transition rounded-full -right-4 -top-4 bg-ffcam/5 group-hover:scale-150" />
            <FFCAMSubheading className="relative">
              La Participation
            </FFCAMSubheading>
            <p className="relative mt-4 text-gray-600">
              Vous pouvez simplement assister, poser des questions, ou proposer
              de présenter vos solutions lors d&apos;un prochain webinaire.
              L&apos;objectif est de créer une communauté active de clubs qui partagent
              leurs expériences et développent ensemble des solutions adaptées à leurs besoins.
            </p>
          </FFCAMCard>
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <FFCAMBadge className="inline-flex items-center px-3 py-1 mb-2">
              <Star className="w-4 h-4 mr-1" /> Prochainement
            </FFCAMBadge>
            <FFCAMHeading level={3} className="mt-2">
              Thèmes envisagés
            </FFCAMHeading>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingThemes.map((theme) => (
              <Link
                key={theme}
                href="#contact"
                className="flex items-center gap-4 p-6 transition bg-white border-2 shadow-sm group rounded-xl border-ffcam/20 hover:border-ffcam hover:shadow-lg hover:bg-ffcam/5"
              >
                <div className="flex items-center justify-center w-12 h-12 transition rounded-lg shrink-0 bg-ffcam/10 text-ffcam group-hover:bg-ffcam group-hover:text-white">
                  {theme === "Proposez vos thèmes" ? (
                    <UserPlus className="w-6 h-6" />
                  ) : (
                    <Calendar className="w-6 h-6" />
                  )}
                </div>
                <p className="font-medium text-gray-900 group-hover:text-ffcam-dark">{theme}</p>
              </Link>
            ))}
          </div>
        </div>
    </FFCAMSection>
  );
}
