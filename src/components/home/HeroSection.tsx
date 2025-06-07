"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden sm:py-28">
      {/* Image de montagne en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/images/mountains.webp"
          alt="Montagnes FFCAM avec mer de nuages"
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ffcam/70 to-ffcam-dark/70 mix-blend-multiply" />
      </div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-md">
              <span className="block">Ensemble, innovons</span>
              <span className="block text-white">
                pour nos <span className="text-ffcam-red">clubs</span>
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white sm:mt-6 sm:text-lg md:text-xl drop-shadow">
              Chaque jour, les clubs FFCAM font face à des défis similaires et
              disposent d&apos;une riche expérience à partager. Notre initiative
              : créer des espaces d&apos;échange directs entre clubs, où vous
              partagez vos solutions concrètes sur des sujets du quotidien
              (vie associative, environnement, outils numériques, ...), dans un esprit de
              collaboration et d&apos;entraide mutuelle.
            </p>

            <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4 sm:mt-8 md:mt-10">
              <Link
                href="#webinaires"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition bg-white rounded-lg sm:px-6 sm:text-base text-ffcam hover:bg-ffcam hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ffcam"
                aria-label="Découvrir les webinaires"
              >
                Découvrir les webinaires
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition border border-white rounded-lg sm:px-6 sm:text-base hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1"
                aria-label="Proposer une solution"
              >
                Proposer une solution
              </Link>
            </div>

            {/* Image mobile - visible uniquement sur petits écrans */}
            <div className="mt-8 lg:hidden">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-sm border border-white/30 sm:h-56 md:h-64">
                <Image
                  src="/images/webinaires-clubs-en-action.png"
                  alt="Webinaires Clubs en Action - FFCAM"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ffcam/20 to-ffcam-dark/20 backdrop-filter backdrop-brightness-90"></div>
              </div>
            </div>

            <div className="mt-8 space-y-3 lg:mt-12">
              <div className="inline-flex items-center gap-2 px-3 py-2 border rounded-full shadow-md sm:px-4 bg-ffcam-dark/40 backdrop-blur-sm border-white/20">
                <span
                  className="w-2 h-2 rounded-full bg-ffcam-red animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-white sm:text-sm">
                  Prochains webinaires
                </span>
              </div>
              <div className="space-y-2 text-xs text-white sm:text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-medium">23 juin • 20h-21h30 :</span>
                  <span>Outils collaboratifs dans les Clubs</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-medium">30 juin • 18h-19h30 :</span>
                  <span>Environnement et partenariats</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-medium">Sept. (date à définir) :</span>
                  <span>La charte montagne</span>
                </div>
              </div>
              <Link
                href="#webinaires"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-white transition-colors rounded-lg sm:px-4 sm:text-sm bg-white/20 hover:bg-ffcam-red focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1"
                aria-label="Voir tous les webinaires"
              >
                Voir les détails
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Image desktop - visible uniquement sur grands écrans */}
          <div className="hidden mt-10 lg:block lg:col-span-5 lg:mt-0">
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
              <Image
                src="/images/webinaires-clubs-en-action.png"
                alt="Webinaires Clubs en Action - FFCAM"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ffcam/20 to-ffcam-dark/20 backdrop-filter backdrop-brightness-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
