"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FFCAMSection, FFCAMHeading } from "@/components";

const faqs = [
  {
    question: "Quel est le rapport entre cette initiative et la fédération ?",
    answer:
      "Cette initiative est complémentaire aux actions de la fédération. Il s'agit d'un réseau d'entraide direct entre clubs, sur des sujets opérationnels du quotidien. La fédération soutient cette démarche qui renforce les liens entre clubs et permet de partager les bonnes pratiques, tout en restant concentrée sur ses missions stratégiques. L'initiative \"les clubs en action\" permet simplement un partage d'expérience horizontal, sans nécessiter de mobiliser les ressources fédérales.",
  },
  {
    question: "Comment puis-je participer aux webinaires ?",
    answer:
      "L'inscription aux webinaires est simple et gratuite. Il vous suffit de remplir le formulaire de contact en bas de page en précisant que vous souhaitez participer au prochain webinaire. Vous recevrez alors un lien de connexion quelques jours avant l'événement. Les webinaires sont ouverts à tous les bénévoles des clubs FFCAM.",
  },
  {
    question: "Puis-je proposer un thème ou partager mon expérience ?",
    answer:
      "Absolument ! Cette initiative vit grâce à vos contributions. Si vous avez développé une solution intéressante au sein de votre club ou si vous souhaitez proposer un thème qui vous tient à cœur, utilisez le formulaire de contact en précisant votre proposition. L'équipe d'animation prendra contact avec vous pour discuter des modalités.",
  },
  {
    question: "Ces webinaires sont-ils accessibles à tous les clubs ?",
    answer:
      "Oui, ces webinaires sont accessibles à tous les clubs FFCAM sans exception. Que vous soyez un petit club rural ou une grande structure urbaine, l'objectif est justement de favoriser les échanges entre clubs de toutes tailles et de toutes régions. Cette diversité fait la richesse des échanges.",
  },
  {
    question:
      "Y a-t-il des enregistrements disponibles des précédents webinaires ?",
    answer:
      "Oui, nous enregistrons tous les webinaires avec l'accord des participants. Les synthèses et enregistrements sont ensuite mis à disposition des clubs participants. Si vous souhaitez accéder à ces ressources, merci de nous contacter via le formulaire en bas de page.",
  },
  {
    question: "Comment est financée cette initiative ?",
    answer:
      "Cette initiative est entièrement bénévole et ne nécessite que très peu de ressources pour fonctionner. Les webinaires utilisent des outils de visioconférence gratuits et l'animation est assurée par des bénévoles passionnés. La création et la maintenance du site sont également réalisées bénévolement.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FFCAMSection id="faq" background="white">
      <div className="mx-auto max-w-3xl text-center">
        <FFCAMHeading level={2}>Questions fréquentes</FFCAMHeading>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Vous vous posez des questions sur cette initiative ? Retrouvez ici les
          réponses aux interrogations les plus courantes sur les Clubs en
          Action.
        </p>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-5 flex justify-between items-center rounded-xl ${
                openIndex === index
                  ? "bg-ffcam text-white shadow-md"
                  : "bg-white text-gray-900 border border-gray-200 hover:border-ffcam hover:shadow-sm"
              } transition-all duration-300`}
            >
              <div className="flex items-center">
                <HelpCircle
                  className={`h-5 w-5 mr-3 ${openIndex === index ? "text-white" : "text-ffcam"}`}
                />
                <span className="font-medium">{faq.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-white" : "text-ffcam"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FFCAMSection>
  );
}
