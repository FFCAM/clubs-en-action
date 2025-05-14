"use client";

import Link from "next/link";
import { Calendar, Star, UserPlus } from "lucide-react";

export default function WebinarsSection() {
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
    <section id="webinaires" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Webinaires Participatifs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des sessions d&apos;échange trimestrielles où les clubs présentent
            leurs solutions concrètes. Posez vos questions, partagez vos idées,
            et repartez avec des solutions adaptables à votre contexte.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <h3 className="relative text-xl font-semibold text-gray-900">
              Le Format
            </h3>
            <p className="relative mt-4 text-gray-600">
              Sur un thème donné (ex: &quot;Booster sa communication
              interne&quot;), 2 ou 3 clubs présentent leur approche, leurs
              outils, leurs réussites. Suivi d&apos;un temps d&apos;échange pour
              adapter ces solutions à votre contexte.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <h3 className="relative text-xl font-semibold text-gray-900">
              L&apos;Organisation
            </h3>
            <p className="relative mt-4 text-gray-600">
              Des sessions en ligne de 1h30, organisées environ tous les 3 mois.
              Une animation par des bénévoles passionnés, dans une ambiance
              conviviale et constructive. Ouvert à tous les bénévoles des clubs
              FFCAM.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <h3 className="relative text-xl font-semibold text-gray-900">
              La Participation
            </h3>
            <p className="relative mt-4 text-gray-600">
              Vous pouvez simplement assister, poser des questions, ou proposer
              de présenter vos solutions lors d&apos;un prochain webinaire.
              Toutes les contributions sont précieuses !
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center mb-2 rounded-full bg-ffcam/10 px-3 py-1 text-sm font-medium text-ffcam">
              <Star className="mr-1 h-4 w-4" /> Prochainement
            </span>
            <h3 className="text-2xl font-semibold text-gray-900">
              Thèmes envisagés
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingThemes.map((theme) => (
              <Link
                key={theme}
                href="#contact"
                className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition border-2 border-ffcam/20 hover:border-ffcam hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam group-hover:bg-ffcam group-hover:text-white transition">
                  {theme === "Proposez vos thèmes" ? (
                    <UserPlus className="h-6 w-6" />
                  ) : (
                    <Calendar className="h-6 w-6" />
                  )}
                </div>
                <p className="font-medium text-gray-900">{theme}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
