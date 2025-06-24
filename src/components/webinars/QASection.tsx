"use client";

import { useState } from "react";

const qaData: { id: number; question: string; answer: string }[] = [
  {
    id: 1,
    question: "Est-ce nécessaire d'être ingénieur pour mettre en place ces solutions ?",
    answer: "Certaines solutions nécessitent un peu de compétences techniques si on ne veut pas passer par un prestataire (comme Nextcloud), mais la majorité des autres solutions ne nécessitent que de savoir cliquer et de suivre des instructions. Si plusieurs clubs sont intéressés, nous pourrions mettre en place une documentation détaillée pour adopter les solutions les plus populaires dans nos clubs."
  }
];

export default function QASection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions & Réponses</h2>
      {qaData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Les questions et réponses du webinaire seront ajoutées prochainement.
          </p>
          <p className="text-gray-500 mt-2">
            Nous sommes en train de traiter l'enregistrement pour extraire les échanges les plus pertinents.
          </p>
          <p className="text-gray-500 mt-2">
            Plus de questions seront ajoutées quand nous aurons eu le temps de finir l'analyse de l'enregistrement.
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-8">
            Retrouvez les principales questions posées lors du webinaire et nos réponses détaillées.
          </p>
          <div className="space-y-4">
            {qaData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left flex items-start py-2 hover:text-blue-600 transition-colors group"
            >
              <svg
                className={`w-6 h-6 transform transition-transform mr-3 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-blue-600 ${
                  openItems.includes(item.id) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">{item.question}</h3>
            </button>
            {openItems.includes(item.id) && (
              <div className="mt-4 pl-4 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-center mt-6 italic">
        Plus de questions seront ajoutées quand nous aurons eu le temps de finir l'analyse de l'enregistrement.
      </p>
        </>
      )}
    </section>
  );
}