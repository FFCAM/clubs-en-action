"use client";

import { ExternalLink, Users, MapPin, Leaf } from "lucide-react";

export default function WebinarResourcesEnvironnement() {
  const partnerships = [
    {
      category: "Associations nationales",
      partners: [
        {
          name: "LPO (Ligue pour la Protection des Oiseaux)",
          url: "https://www.lpo.fr",
          description: "Biodiv'Sports, protection des espèces d'oiseaux en montagne"
        },
        {
          name: "Ferus",
          url: "https://www.ferus.fr",
          description: "Protection des grands prédateurs, sensibilisation aux chiens de protection"
        },
        {
          name: "Réseau CPIE",
          url: "https://www.cpie.fr",
          description: "Centres Permanents d'Initiatives pour l'Environnement dans toute la France"
        },
        {
          name: "Une Bouteille À La Mer",
          url: "https://www.unebouteillealamer.org",
          description: "Mobilisation des acteurs de l'outdoor pour des solutions environnementales"
        }
      ]
    },
    {
      category: "Dispositifs et réseaux",
      partners: [
        {
          name: "Biodiv'Sports",
          url: "https://biodiv-sports.fr",
          description: "Dispositif national pour concilier sports de nature et biodiversité"
        },
        {
          name: "Collectif pour une Transition Citoyenne",
          url: "https://transition-citoyenne.org",
          description: "Réseau d'associations pour la transition écologique"
        },
        {
          name: "Réserves Naturelles de France",
          url: "https://reserves-naturelles.org",
          description: "Réseau des réserves naturelles nationales et régionales"
        },
        {
          name: "Conservatoire d'Espaces Naturels",
          url: "https://reseau-cen.org",
          description: "Réseau d'associations de protection et gestion des espaces naturels"
        }
      ]
    },
    {
      category: "Organismes institutionnels",
      partners: [
        {
          name: "Office français de la biodiversité (OFB)",
          url: "https://www.ofb.gouv.fr",
          description: "Établissement public pour la protection de la biodiversité"
        },
        {
          name: "Atmo Auvergne-Rhône-Alpes",
          url: "https://www.atmoauvergnerhonealpes.fr",
          description: "Surveillance de la qualité de l'air, partenaire du film 'Notre Air'"
        },
        {
          name: "Educ'Alpes",
          url: "https://www.educalpes.fr",
          description: "Association d'éducation à la montagne alpine, créatrice de la Fresque de la Montagne"
        }
      ]
    }
  ];

  const actions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Formation et sensibilisation",
      examples: [
        "Conférences sur les glaciers et le changement climatique",
        "Randonnées commentées sur l'eau et la biodiversité",
        "Sessions d'information sur l'escalade et la biodiversité",
        "Formations sur les espaces naturels protégés"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Opérations citoyennes",
      examples: [
        "Entretien des sentiers très fréquentés",
        "Entretien des tourbières en partenariat avec les PNR",
        "Nettoyage des tags sur les rochers",
        "Balisage des zones de protection hivernale"
      ]
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sciences participatives",
      examples: [
        "Pose d'enregistreurs de chant des lagopèdes",
        "Relevés de traces d'ours",
        "Observation et recueil de données naturalistes",
        "Participation aux programmes de suivi des espèces"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Ressources et Partenaires
      </h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Types d'actions mises en place
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-green-600 mr-3">
                  {action.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{action.title}</h4>
              </div>
              <ul className="space-y-2">
                {action.examples.map((example, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2 text-xs">•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Partenaires identifiés
        </h3>
        <div className="space-y-8">
          {partnerships.map((category, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {category.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">{partner.name}</h5>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-700">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-lg font-semibold text-green-800 mb-2">
              Conseils pour développer vos partenariats
            </h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Identifiez les acteurs présents sur votre territoire</li>
              <li>• Participez aux moments institutionnels et événements locaux</li>
              <li>• Développez des relations dans la durée par le réseautage</li>
              <li>• Proposez des actions concrètes et des collaborations gagnant-gagnant</li>
              <li>• Mobilisez l'engagement environnemental de vos adhérents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}