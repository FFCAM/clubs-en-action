'use client';

import Link from 'next/link';
import { Share2, Sparkles, Trophy, ArrowRight } from 'lucide-react';

export default function SolutionsSection() {
  // Section temporairement cachée - sera réactivée ultérieurement
  const SHOW_SOLUTIONS_SECTION = false;
  
  if (!SHOW_SOLUTIONS_SECTION) {
    return null;
  }
  
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-ffcam/10 text-ffcam">
            <Sparkles className="mr-1 h-4 w-4" />
            En développement
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Plateforme de Solutions
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Bientôt, une plateforme participative pour co-créer, partager et découvrir les solutions mises en place par les clubs.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
              <Share2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Partage de solutions</h3>
            <p className="mt-4 text-gray-600">
              Une base de connaissances collective où chaque club peut partager ses solutions, 
              classées par thèmes, avec documentation et retours d'expérience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
              <Trophy className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Valorisation des initiatives</h3>
            <p className="mt-4 text-gray-600">
              Mettez en lumière les initiatives innovantes de votre club et inspirez 
              d'autres bénévoles à travers la fédération.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
              <Sparkles className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Co-création de ressources</h3>
            <p className="mt-4 text-gray-600">
              Collaborez avec d'autres clubs pour développer de nouvelles méthodes, 
              outils ou formations adaptés à nos besoins spécifiques.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-ffcam px-6 py-3 font-semibold text-white transition hover:bg-ffcam-dark"
          >
            Participer au développement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}