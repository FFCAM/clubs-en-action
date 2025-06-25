"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Webinaire Participatif FFCAM",
    subtitle: "Les Outils Collaboratifs",
    content: (
      <div className="text-center">
        <div className="p-8 mb-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <p className="mb-4 text-2xl text-gray-700">
            <span className="mr-3 text-blue-500">📅</span>
            23 juin 2025 • 20h-21h30
          </p>
          <p className="text-xl text-gray-600">
            Premier webinaire de l'initiative "Clubs en Action"
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8 text-lg text-gray-600">
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">👥</span>
            Par les clubs
          </div>
          <div className="flex items-center">
            <span className="mx-4 text-gray-400">→</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-red-500">🤝</span>
            Pour les clubs
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Qu'est-ce qu'un Webinaire Participatif ?",
    content: (
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="flex items-center mb-4 text-2xl font-semibold text-blue-600">
              💡 Le Concept
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Des sessions trimestrielles d'échange où les clubs présentent leurs solutions concrètes issues du terrain.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="flex items-center mb-4 text-2xl font-semibold text-green-600">
              👥 L'Origine
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Initiative du programme "Engagement Club Alpin" portée par les élus du comité directeur fédéral depuis mars 2025.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="mb-4 text-xl font-semibold text-blue-800">Format des Webinaires</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">⏰ 1h30 en ligne, tous les 3 mois</li>
              <li className="flex items-center">📊 2-3 clubs présentent leurs solutions</li>
              <li className="flex items-center">💬 Temps d'échange et adaptation</li>
            </ul>
          </div>
          
          <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
            <h4 className="mb-4 text-xl font-semibold text-red-800">Comment Participer ?</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">👀 Assister et poser des questions</li>
              <li className="flex items-center">🤝 Proposer vos solutions</li>
              <li className="flex items-center">🔗 Créer des liens entre clubs</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Par les Clubs, Pour les Clubs",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-8 mx-auto max-w-6xl">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-blue-100 rounded-full">
              <span className="text-3xl text-blue-600">🔗</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Mutualisation</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Partage direct des savoir-faire et développement de solutions adaptées aux réalités locales
            </p>
          </div>
          
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-green-100 rounded-full">
              <span className="text-3xl text-green-600">🤝</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Entraide</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Réseau d'entraide bienveillant où chacun apporte son expertise et bénéficie de celle des autres
            </p>
          </div>
          
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mx-auto mb-4 w-20 h-20 bg-red-100 rounded-full">
              <span className="text-3xl text-red-600">💪</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Renforcement</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Renforcement des liens entre clubs et mutualisation des forces pour multiplier nos ressources
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <blockquote className="text-xl italic text-center text-gray-700">
            "Construisons ensemble une communauté de clubs qui s'entraident et partagent directement leurs expériences et solutions face aux défis quotidiens"
          </blockquote>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Les Outils Collaboratifs: Un Levier pour nos Clubs",
    content: (
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
            <h3 className="flex items-center mb-4 text-2xl font-semibold">
              🛠️ Qu'est-ce qu'un Outil Collaboratif ?
            </h3>
            <p className="text-lg leading-relaxed">
              Des solutions numériques qui facilitent le travail en équipe, la communication et le partage d'informations au sein de votre club.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="mb-4 text-xl font-semibold text-gray-800">Domaines d'application</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-700">💬 Communication interne</div>
              <div className="flex items-center text-gray-700">✅ Gestion de projets</div>
              <div className="flex items-center text-gray-700">📄 Partage de documents</div>
              <div className="flex items-center text-gray-700">📅 Organisation d'événements</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="flex items-center mb-4 text-xl font-semibold text-green-800">
              🚀 Productivité Accrue
            </h4>
            <p className="text-gray-700">
              Optimisez le temps précieux de vos bénévoles en automatisant les tâches répétitives et en facilitant la coordination.
            </p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="flex items-center mb-4 text-xl font-semibold text-blue-800">
              🗄️ Pérennité des Documents
            </h4>
            <p className="text-gray-700">
              Centralisez et sécurisez la mémoire de votre club. Fini les documents perdus lors des changements d'équipe !
            </p>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="flex items-center mb-4 text-xl font-semibold text-purple-800">
              👥 Facilitation du Bénévolat
            </h4>
            <p className="text-gray-700">
              Rendez l'engagement plus accessible en simplifiant les processus et en améliorant la communication.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Cas Pratique: Le Petit Club (70% des clubs)",
    content: (
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="flex items-center mb-4 text-2xl font-semibold text-blue-600">
              🏔️ Club Alpin de Montville
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">👥 100 adhérents</div>
              <div className="flex items-center">💼 3 bénévoles au bureau</div>
              <div className="flex items-center">⏰ Temps limité pour l'administratif</div>
              <div className="flex items-center">💰 Budget serré</div>
            </div>
          </div>
          
          <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="mb-3 text-lg font-semibold text-yellow-800">Défis Principaux</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Coordination des sorties</li>
              <li>• Communication avec les adhérents</li>
              <li>• Partage de documents</li>
              <li>• Planification d'événements</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="mb-4 text-xl font-semibold text-gray-800">Solutions Simples et Efficaces</h4>
          
          <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <span className="mr-3 text-2xl">🔍</span>
              <h5 className="text-lg font-semibold text-green-800">Outils Google gratuits</h5>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• <strong>Gmail</strong> : Communication avec les adhérents</div>
              <div>• <strong>Google Drive</strong> : Stockage et partage de fichiers</div>
              <div>• <strong>Google Docs</strong> : Rédaction collaborative de documents</div>
              <div>• <strong>Google Sheets</strong> : Listes d'adhérents, budgets</div>
              <div>• <strong>Google Agenda</strong> : Planification des sorties</div>
            </div>
            <div className="mt-3 text-xs text-green-600">✓ Gratuit • ✓ Familier • ✓ Collaboratif</div>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <span className="mr-3 text-2xl">❤️</span>
              <h5 className="text-lg font-semibold text-blue-800">Alternatives libres</h5>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div>• <strong>Framadate</strong> : Différents outils de collaborations</div>
              <div>• <strong>Nextcloud</strong> : Stockage et collaboration</div>
              <div>• <strong>LibreOffice Online</strong> : Édition de documents</div>
            </div>
            <div className="mt-3 text-xs text-blue-600">✓ Souveraineté des données • ✓ Open source</div>
          </div>
          
          <div className="p-4 text-center bg-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">
              💡 Coût : 0€ • Temps de mise en place : 1-2h
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Cas Pratique: Moyens et Gros Clubs",
    content: (
      <div className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="flex items-center mb-4 text-2xl font-semibold text-blue-600">
              🏔️ Clubs Alpins Moyens & Gros
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">👥 400 à 2000+ adhérents</div>
              <div className="flex items-center">💼 8 à 25 bénévoles au bureau</div>
              <div className="flex items-center">🥾 4 à 12 sections d'activités</div>
              <div className="flex items-center">🏢 Locaux multiples + équipements</div>
            </div>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <h4 className="mb-3 text-lg font-semibold text-orange-800">Défis Spécifiques</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Coordination entre sections</li>
              <li>• Gestion documentaire structurée</li>
              <li>• Communication professionnelle</li>
              <li>• Archivage et historique</li>
              <li>• Sécurité des données</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="mb-4 text-xl font-semibold text-gray-800">Solutions Structurées</h4>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <span className="mr-3 text-xl">🔍</span>
                <h5 className="text-lg font-semibold text-blue-800">Google Workspace for Nonprofits</h5>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>• Gmail professionnel</div>
                <div>• Drive partagé</div>
                <div>• Google Meet</div>
                <div>• Stockage illimité (gros clubs)</div>
              </div>
              <div className="mt-2 text-xs text-blue-600">✓ Gratuit pour les associations • ✓ Sécurisé</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-2">
                <span className="mr-3 text-xl">Ⓜ️</span>
                <h5 className="text-lg font-semibold text-green-800">Microsoft 365</h5>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>• Outlook</div>
                <div>• Teams</div>
                <div>• SharePoint (gros clubs)</div>
                <div>• Power Platform</div>
              </div>
              <div className="mt-2 text-xs text-green-600">✓ Complet • ✓ Versions gratuites</div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <span className="mr-3 text-xl">☁️</span>
                <h5 className="text-lg font-semibold text-purple-800">Nextcloud</h5>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>• Stockage privé</div>
                <div>• Collaboration</div>
                <div>• Talk (visio)</div>
                <div>• Contrôle total</div>
              </div>
              <div className="mt-2 text-xs text-purple-600">✓ Open source • ✓ Auto-hébergé • ✓ Extensible (plugins)</div>
            </div>
          </div>
          
          <div className="p-4 text-center bg-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">
              💰 Coût : 0€ (versions gratuites pour associations) à 5-20€/utilisateur/mois
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Questions / Réponses",
    content: (
      <div className="text-center">
        <p className="mb-8 text-2xl text-gray-700">
          N'hésitez pas à poser vos questions ou à partager vos remarques.
        </p>
        <div className="text-6xl text-blue-600">
          ❓
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Votre Retour sur Investissement Temps (ROTI)",
    content: (
      <div className="text-center">
        <p className="mb-8 text-2xl text-gray-700">
          Sur une échelle de 1 à 5, où 1 = temps perdu et 5 = temps très bien investi,
          comment évaluez-vous ce webinaire ?
        </p>
        <div className="flex justify-center space-x-8 text-6xl text-blue-600">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <p className="mt-8 text-xl text-gray-600">
          Votre avis est précieux pour améliorer nos futurs événements.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Devenez Acteur des Prochains Webinaires !",
    content: (
      <div className="space-y-8">
        <div className="p-8 text-center text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
          <h3 className="mb-4 text-3xl font-bold">Nous Avons Besoin de Vous !</h3>
          <p className="text-xl leading-relaxed">
            Cette initiative vit grâce à vos contributions. Partagez vos expériences, proposez vos thèmes, enrichissons ensemble notre communauté.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="flex items-center text-2xl font-semibold text-gray-800">
              💡 Proposer des Thèmes
            </h4>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h5 className="mb-4 text-lg font-semibold text-blue-600">Thèmes Envisagés</h5>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center text-gray-700">🛠️ Gestion des EPIs</div>
                <div className="flex items-center text-gray-700">📚 Gestion de bibliothèque</div>
                <div className="flex items-center text-gray-700">👥 Recruter et valoriser les bénévoles</div>
                <div className="flex items-center text-gray-700">🤝 Trouver des partenariats/sponsors</div>
                <div className="flex items-center text-gray-700">📄 Outils administratifs</div>
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                <strong>Vos idées sont les bienvenues !</strong> Quels défis rencontrez-vous dans votre club ?
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="flex items-center text-2xl font-semibold text-gray-800">
              📊 Présenter vos Solutions
            </h4>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h5 className="mb-4 text-lg font-semibold text-green-600">Domaines de Contribution</h5>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h6 className="mb-2 font-semibold text-blue-800">🔧 Solutions Techniques</h6>
                  <p className="text-sm text-gray-700">Outils numériques, applications, automatisations</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h6 className="mb-2 font-semibold text-green-800">👥 Gestion du Bénévolat</h6>
                  <p className="text-sm text-gray-700">Recrutement, formation, fidélisation, reconnaissance</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h6 className="mb-2 font-semibold text-purple-800">🌱 Environnement</h6>
                  <p className="text-sm text-gray-700">Pratiques durables, sensibilisation, partenariats</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h6 className="mb-2 font-semibold text-orange-800">💡 Innovation</h6>
                  <p className="text-sm text-gray-700">Nouvelles approches, expérimentations réussies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 text-center bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="mb-3 text-xl font-semibold text-blue-800">Prochain Webinaire</h4>
          <p className="mb-2 text-lg text-gray-700">
            📅 Date : 30 juin à 18h
          </p>
          <p className="text-lg text-gray-700">
            🏷️ Thème : Environnement : Tisser des liens avec les associations locales et gestionnaires d'espaces naturels protégés
          </p>
        </div>
      </div>
    ),
  },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative slide-container" style={{ minHeight: "600px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div
            className="absolute right-0 bottom-0 left-0 h-32 opacity-10"
            style={{
              background: "linear-gradient(45deg, #3b82f6 0%, #1e40af 50%, #dc2626 100%)",
              clipPath: "polygon(0 100%, 15% 60%, 35% 80%, 50% 40%, 70% 70%, 85% 30%, 100% 50%, 100% 100%)",
            }}
          />
        </div>

        <div className="flex relative z-10 flex-col justify-center items-center p-16 h-full">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">{slide.title}</h2>
          {slide.subtitle && (
            <h3 className="mb-8 text-3xl font-semibold text-blue-600">{slide.subtitle}</h3>
          )}
          <div className="w-full max-w-4xl">{slide.content}</div>
        </div>

        <div className="flex absolute bottom-4 left-1/2 z-20 items-center space-x-4 transform -translate-x-1/2">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full transition-colors shadow-lg ${
              currentSlide === 0
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            }`}
            disabled={currentSlide === 0}
            style={{ pointerEvents: currentSlide === 0 ? 'none' : 'auto' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="px-4 py-2 font-medium text-gray-700 bg-white rounded-lg shadow-lg">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className={`p-3 rounded-full transition-colors shadow-lg ${
              currentSlide === slides.length - 1
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            }`}
            disabled={currentSlide === slides.length - 1}
            style={{ pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}