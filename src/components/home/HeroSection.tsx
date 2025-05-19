"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Image de montagne en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/images/mountains.jpg"
          alt="Montagnes FFCAM avec mer de nuages"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ffcam/70 to-ffcam-dark/70 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl drop-shadow-md">
              <span className="block">Ensemble, innovons</span>
              <span className="block text-white">pour nos <span className="text-ffcam-red">clubs</span></span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow">
              Chaque jour, les clubs FFCAM font face à des défis similaires sans
              toujours avoir l&apos;occasion de partager leurs solutions. Notre
              réponse : des webinaires participatifs où les clubs échangent
              leurs expériences concrètes sur des sujets du quotidien (gestion,
              communication, outils...), dans un esprit d&apos;entraide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#webinaires"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-ffcam transition hover:bg-ffcam hover:text-white"
              >
                Découvrir les webinaires
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Proposer une solution
              </Link>
            </div>

            <div className="mt-12 flex">
              <div className="flex items-center gap-2 rounded-full bg-ffcam-dark/40 backdrop-blur-sm px-4 py-2 shadow-md border border-white/20">
                <span className="h-2 w-2 rounded-full bg-ffcam-red animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Prochain webinaire : lundi 23 juin • 20h à 21h30
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-ffcam-red transition-colors"
                >
                  S&apos;inscrire
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 mt-10 lg:mt-0">
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
              <Image
                src="/images/collaboration.png"
                alt="Adhérents FFCAM collaborant ensemble"
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
