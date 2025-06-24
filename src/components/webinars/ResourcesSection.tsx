"use client";

import { useState, useEffect } from "react";

export default function ResourcesSection() {
  const toolsData = [
    {
      name: "Google Workspace for Nonprofits",
      description: "Suite collaborative complète avec Gmail, Drive, Docs, Sheets et Meet",
      type: "Propriétaire",
      origin: "États-Unis",
      dataLocation: "Multiples (UE disponible)",
      price: "Gratuit pour les associations éligibles",
      targetClub: "Moyen à gros club",
      usedBy: "FFCAM, Club alpin de Lyon-Villeurbanne",
      link: "https://www.google.com/nonprofits/offerings/workspace/"
    },
    {
      name: "Office 365",
      description: "Suite Microsoft avec Word, Excel, PowerPoint, Teams et OneDrive",
      type: "Propriétaire",
      origin: "États-Unis",
      dataLocation: "Multiples (France disponible)",
      price: "À partir de 5€/utilisateur/mois",
      targetClub: "Moyen à gros club",
      usedBy: "Club Alpin de St Etienne",
      link: "https://www.microsoft.com/fr-fr/microsoft-365"
    },
    {
      name: "Nextcloud",
      description: "Plateforme open source pour stockage, collaboration et communication",
      type: "Open Source",
      origin: "Allemagne",
      dataLocation: "Selon hébergeur choisi",
      price: "Gratuit (auto-hébergé) ou hébergé dès 3€/utilisateur/mois",
      targetClub: "Moyen club (avec compétences techniques)",
      usedBy: "GUM Grenoble",
      link: "https://nextcloud.com"
    },
    {
      name: "Infomaniak",
      description: "Suite collaborative suisse avec kDrive, kMeet et kChat",
      type: "Propriétaire",
      origin: "Suisse",
      dataLocation: "Suisse",
      price: "À partir de 4.99€/utilisateur/mois",
      targetClub: "Moyen à gros club",
      usedBy: "",
      link: "https://www.infomaniak.com"
    },
    {
      name: "Zoho",
      description: "Suite complète avec mail, documents, CRM et gestion de projets",
      type: "Propriétaire",
      origin: "Inde",
      dataLocation: "Multiples (UE disponible)",
      price: "Version gratuite disponible, pro dès 3€/utilisateur/mois",
      targetClub: "Petit à moyen club",
      usedBy: "",
      link: "https://www.zoho.com"
    },
    {
      name: "Proton",
      description: "Suite sécurisée avec mail chiffré, drive et calendrier",
      type: "Propriétaire",
      origin: "Suisse",
      dataLocation: "Suisse",
      price: "Version gratuite limitée, pro dès 6.99€/utilisateur/mois",
      targetClub: "Petit à moyen club",
      usedBy: "",
      link: "https://proton.me"
    },
    {
      name: "Framasoft",
      description: "Suite d'outils libres et éthiques (Framapad, Framadate, etc.)",
      type: "Open Source",
      origin: "France",
      dataLocation: "France",
      price: "Gratuit",
      targetClub: "Petit à moyen club",
      usedBy: "",
      link: "https://framasoft.org"
    },
    {
      name: "Compte Gmail",
      description: "Compte Gmail personnel avec Drive et outils Google basiques",
      type: "Propriétaire",
      origin: "États-Unis",
      dataLocation: "Multiples (UE disponible)",
      price: "Gratuit",
      targetClub: "Petit club",
      usedBy: "De nombreux petits clubs",
      link: "https://gmail.com"
    }
  ];

  // Utiliser l'ordre initial côté serveur, puis mélanger côté client
  const [tools, setTools] = useState(toolsData);

  useEffect(() => {
    // Mélanger uniquement côté client pour éviter l'erreur d'hydratation
    const shuffled = [...toolsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setTools(shuffled);
  }, []);

  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Ressources et Outils</h2>
      <p className="text-gray-600 mb-8">
        Découvrez les différents outils collaboratifs présentés lors du webinaire, avec leurs caractéristiques et tarifs.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
              <span className={`text-sm px-3 py-1 rounded-full ${
                tool.type === "Open Source" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {tool.type}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{tool.description}</p>
            <div className="space-y-1 mb-4">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Origine :</span> {tool.origin}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Données hébergées :</span> {tool.dataLocation}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Adapté pour :</span> {tool.targetClub}
              </p>
              {tool.usedBy && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Utilisé par :</span> {tool.usedBy}
                </p>
              )}
              <p className="text-sm font-medium text-gray-700">{tool.price}</p>
            </div>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              En savoir plus
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}