"use client";

import { Lightbulb, Users, MessageSquare } from "lucide-react";
import { FFCAMSection, FFCAMHeading, FFCAMSubheading, FFCAMCard } from "@/components";

export default function VisionSection() {
  return (
    <FFCAMSection id="vision" background="light">
      <div className="mx-auto max-w-2xl text-center">
        <FFCAMHeading level={2}>
          Notre Vision
        </FFCAMHeading>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Construisons ensemble une communauté de clubs qui s&apos;entraident
          et partagent leurs expériences et solutions pour face aux
          défis quotidiens.
        </p>
      </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FFCAMCard className="group relative overflow-hidden p-8">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <Lightbulb className="h-6 w-6" />
              </div>
              <FFCAMSubheading>
                Des solutions concrètes
              </FFCAMSubheading>
              <p className="mt-4 text-gray-600">
                Découvrez des solutions éprouvées par d&apos;autres clubs. Des
                approches pragmatiques qui répondent aux problématiques réelles
                des clubs FFCAM.
              </p>
            </div>
          </FFCAMCard>

          <FFCAMCard className="group relative overflow-hidden p-8">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <Users className="h-6 w-6" />
              </div>
              <FFCAMSubheading>
                Par les clubs, pour les clubs
              </FFCAMSubheading>
              <p className="mt-4 text-gray-600">
                Ce sont les clubs eux-mêmes qui partagent leurs expériences. Pas
                de théorie, juste des retours d&apos;expérience sincères et
                accessibles.
              </p>
            </div>
          </FFCAMCard>

          <FFCAMCard className="group relative overflow-hidden p-8">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ffcam/10 text-ffcam">
                <MessageSquare className="h-6 w-6" />
              </div>
              <FFCAMSubheading>
                Entraide et partage
              </FFCAMSubheading>
              <p className="mt-4 text-gray-600">
                Un espace d&apos;échange bienveillant où vous pouvez poser vos
                questions, apporter vos idées et renforcer les liens entre
                clubs.
              </p>
            </div>
          </FFCAMCard>
        </div>
      </FFCAMSection>
  );
}
