"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FFCAMSection, FFCAMHeading } from "@/components";

const faqs = [
  {
    question: "Quel est le rapport entre cette initiative et la fédération ?",
    answer:
      "Cette initiative, portée par les bénévoles élus du comité directeur dans le cadre du programme \"Engagement Club Alpin\", vise à créer un réseau d'entraide direct sur les sujets opérationnels du quotidien. Elle complète les actions de la fédération, qui soutient pleinement cette démarche favorisant le partage d'expériences et de bonnes pratiques entre toutes les structures.",
  },
  {
    question: "Comment puis-je participer aux webinaires ?",
    answer:
      "Pour participer, il suffit de rejoindre le webinaire en utilisant le lien Zoom qui est indiqué dans les détails du webinaire. Les webinaires sont ouverts à tous les bénévoles des clubs et comités FFCAM.",
  },
  {
    question: "Puis-je proposer un thème ou partager mon expérience ?",
    answer:
      "Absolument ! Cette initiative vit grâce à vos contributions. Si vous avez développé une solution intéressante au sein de votre club ou si vous souhaitez proposer un thème qui vous tient à cœur, utilisez le formulaire de contact en précisant votre proposition. L'équipe d'animation prendra contact avec vous pour discuter des modalités.",
  },
  {
    question: "Ces webinaires sont-ils accessibles à tous les clubs et comités ?",
    answer:
      "Oui, ces webinaires sont accessibles à tous les clubs et comités FFCAM sans exception. Que vous soyez un petit club rural, une grande structure urbaine ou un comité, l'objectif est de favoriser les échanges entre toutes les entités FFCAM, quelle que soit leur taille ou leur région. Cette diversité fait la richesse des échanges.",
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
      <div className="max-w-3xl mx-auto text-center">
        <FFCAMHeading level={2}>Questions fréquentes</FFCAMHeading>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Vous vous posez des questions sur cette initiative ? Retrouvez ici les
          réponses aux interrogations les plus courantes sur les Clubs en
          Action.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
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
              <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FFCAMSection>
  );
}
