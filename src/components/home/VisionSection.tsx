"use client";

import { Lightbulb, Users, MessageSquare } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="vision" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre Vision
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Construisons ensemble une communauté de clubs qui s&apos;entraident
            et partagent leurs expériences et solutions pour faire face aux
            défis quotidiens.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Des solutions concrètes
              </h3>
              <p className="mt-4 text-gray-600">
                Découvrez des solutions éprouvées par d&apos;autres clubs. Des
                approches pragmatiques qui répondent aux problématiques réelles
                des clubs FFCAM.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Par les clubs, pour les clubs
              </h3>
              <p className="mt-4 text-gray-600">
                Ce sont les clubs eux-mêmes qui partagent leurs expériences. Pas
                de théorie, juste des retours d&apos;expérience sincères et
                accessibles.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Entraide et partage
              </h3>
              <p className="mt-4 text-gray-600">
                Un espace d&apos;échange bienveillant où vous pouvez poser vos
                questions, apporter vos idées et renforcer les liens entre
                clubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
