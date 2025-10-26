import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webinaire: Refuges Phares pour l'environnement - Clubs en Action FFCAM",
  description: "Découvrez les initiatives des Refuges Phares pour l'environnement. Compte-rendu du webinaire du 20 octobre 2025 avec présentation des outils de sensibilisation.",
};

export default function WebinarRefugesPhares() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Webinaire du 20 octobre 2025
          </h1>
          <h2 className="text-2xl font-semibold text-ffcam mb-8 text-center">
            Refuges Phares pour l'environnement
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>📹 Replay disponible :</strong> L'enregistrement vidéo du webinaire est disponible sur simple demande via le <Link href="/#contact" className="underline hover:text-blue-900">formulaire de contact</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Animation et Interventions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Animation et Interventions</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Animation par :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Hélène Constanty - vice-présidente environnement FFCAM et club alpin Nice Mercantour (06)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Interventions :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Laurence Audrain - bénévole référente Refuges Phares (05)</li>
                  <li>Antoine Arnaud - gardien refuge des lacs de Vens (06)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ressources */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Les ressources</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://www.ffcam.fr/refuges-phares.html" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Page dédiée sur le site FFCAM
                  </a>
                  <span className="text-gray-600"> - présentation des différentes initiatives</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://www.youtube.com/watch?v=refuges-phares" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Vidéo de présentation du jeu de piste
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <span className="text-gray-700">Pour acheter le quiz : </span>
                  <a href="https://www.ffcam.fr/boutique" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    boutique FFCAM
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <span className="text-gray-700">Contact : </span>
                  <a href="mailto:refugesphares@ffcam.fr" className="text-ffcam hover:underline font-medium">
                    refugesphares@ffcam.fr
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Sujets abordés */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sujets abordés</h3>

            <div className="space-y-6">
              {/* Présentation des initiatives */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Présentation des initiatives existantes :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>le quiz du CAF de Briançon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>les animations en refuge, par des bénévoles ou avec des services civiques dans les Hautes-Alpes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>le jeu de piste "Par les chemins du refuge"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>un éco-tour organisé par les Hautes-Alpes à destination des encadrants d'activités montagne des clubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>le voyage d'études ERASMUS + organisé en 2023 par le club de Nice pour les gardiennes et gardiens et référents refuges afin de découvrir les bonnes pratiques environnementales des refuges du club alpin allemand.</span>
                  </li>
                </ul>
              </div>

              {/* Genèse du projet */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Genèse du projet par Laurence Audrain :</h4>
                <div className="text-gray-700 space-y-3">
                  <p>
                    L'initiative a été lancée par le CAF de Briançon en 2022 avec une vision des refuges comme des lieux qui peuvent éclairer et donc sensibiliser les gens sur une certaine éthique environnementale (d'où la notion de refuges phares). Le groupe de bénévoles souhaitait développer deux axes de sensibilisation à partir des refuges : l'environnement montagnard et la gestion durable du bâtiment. Un quiz a été conçu, qui permet d'animer des échanges autour de ces sujets et des projets pédagogiques avec des scolaires. Des services civiques ont été recrutés, en appui aux bénévoles. Des animations ont été proposées dans plusieurs refuges au cours de l'été 2022.
                  </p>
                  <p>
                    En parallèle, la FFCAM a testé la mise en place d'outils d'éducation à l'environnement et au développement durable en refuge à travers le jeu de piste "Par les chemins du refuge". Ces initiatives ont ensuite été rassemblées sous la marque fédérale Refuges phares pour l'environnement.
                  </p>
                  <p>
                    L'objectif est maintenant de continuer à développer ces actions sur l'ensemble du territoire en faisant connaître ce dispositif afin que les personnes intéressées puissent se l'approprier.
                  </p>
                </div>
              </div>

              {/* Témoignage Antoine Arnaud */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Témoignage d'Antoine Arnaud, gardien du refuge des lacs de Vens :</h4>
                <div className="text-gray-700 space-y-3">
                  <p>Le jeu de piste a été mis en place au refuge des lacs de Vens en 2025. Les retours sont très positifs :</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>il y a peu de travail pour adapter les supports au refuge car le cadre est préétabli et cela facilite la tâche.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>les supports génèrent des échanges intéressants avec le public. Ils sont simples d'accès, les gens les lisent et se sentent concernés. Ils aident le gardien à faire comprendre facilement les enjeux du refuge sans que cela lui prenne trop de temps.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>les écoles sont demandeuses des supports en amont pour préparer les sorties.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>le dispositif donne envie aux gardiens d'aller plus loin dans ce qu'ils proposent pour être encore plus en accord avec ce qu'ils affichent.</span>
                    </li>
                  </ul>
                  <div className="mt-3 pl-4 border-l-2 border-ffcam">
                    <p className="font-medium mb-1">→ Exemple concret :</p>
                    <p>La mise en place de petits sacs de déchets à redescendre suite à une demande d'un groupe ayant lu les panneaux. L'équipe du refuge a donc installé une caisse avec ces sachets à disposition. Cela a permis de descendre plus d'une tonne de déchets sur le dos des randonneurs au cours de la saison 2025.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Questions-Réponses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Réponses aux questions des participants</h3>

            <div className="space-y-6">
              {/* Question 1 */}
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Quels refuges sont équipés du jeu de piste actuellement ?</h4>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>○ Refuge des Aiguilles d'Arves</li>
                  <li>○ Refuge de la Pointe-Percée</li>
                  <li>○ Refuge de l'Alpe de Villar d'Arène</li>
                  <li>○ Refuge de Vénasque</li>
                  <li>○ Refuge de Nice</li>
                  <li>○ Refuge du Pavé</li>
                  <li>○ Refuge des lacs de Vens</li>
                </ul>
                <p className="mt-2 text-gray-700 italic">Des projets sont à l'étude dans au moins 3 autres refuges pour l'été 2026</p>
              </div>

              {/* Question 2 */}
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Quelles sont les conditions pour la mise en place du jeu de piste, est-ce que cela représente une grosse charge de travail ?</h4>
                <p className="text-gray-700 mb-3">Cela ne demande pas trop de temps, mais nécessite une petite équipe :</p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>○ le gardien ou la gardienne,</li>
                  <li>○ quelqu'un dans le club ou le comité sensible à ce sujet (référent refuge, référent environnement),</li>
                  <li>○ une personne de la fédération qui coordonne ce travail et apporte le budget pour le graphisme et l'impression,</li>
                  <li>○ des personnes ressources si nécessaire sur les sujets à aborder.</li>
                </ul>
                <p className="mt-3 text-gray-700">La réalisation des supports s'étale sur quelques mois mais ne prend pas énormément de temps car les modèles sont déjà établis. La charge de travail consiste à :</p>
                <ul className="ml-4 space-y-1 text-gray-700 mt-2">
                  <li>○ rédiger les textes et les corriger,</li>
                  <li>○ trouver de belles photos libres de droits pour illustrer les supports ainsi que des photos représentatives du site pour aider la graphiste à réaliser les fonds de carte,</li>
                  <li>○ se mettre en lien avec les institutions susceptibles d'être intéressées et concernées par ce dispositif (office de tourisme, parc national, réserve naturelle…). Ces institutions peuvent être partie prenante dans la réalisation des supports (fournir des images, relire les textes, assurer un relai de communication),</li>
                  <li>○ les éléments techniques sur le bâtiment s'élaborent avec le gardien et si besoin la personnes salariée du service hébergement de la fédération.</li>
                </ul>
              </div>

              {/* Question 3 */}
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Si on n'est pas dans un club gestionnaire de refuge, que peut-on faire ?</h4>
                <p className="text-gray-700 mb-3">Il est tout à fait possible de proposer des initiatives Refuges phares pour l'environnement sans être gestionnaire de refuge. Cela peut être par exemple :</p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>○ proposer des sorties dans des refuges disposant du jeu de piste ou du quiz et s'appuyer dessus lors de la sortie,</li>
                  <li>○ organiser des conférences ou animations en lien avec les refuges et l'environnement,</li>
                  <li>○ proposer des animations ou temps de préparation à la montée en refuge en s'appuyant sur les outils existants,</li>
                  <li>○ tout autre initiative partant des refuges (en tant que sujet) comme lieux de sensibilisation à l'environnement.</li>
                </ul>
                <p className="mt-3 text-gray-700">N'hésitez pas à nous contacter si vous avez des questions à ce sujet (<a href="mailto:refugesphares@ffcam.fr" className="text-ffcam hover:underline">refugesphares@ffcam.fr</a>).</p>
              </div>

              {/* Question 4 */}
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Est-ce qu'il est prévu de faire un lien avec la décarbonation du sport ?</h4>
                <p className="text-gray-700 mb-2">Refuges phares pour l'environnement est une porte d'entrée pour l'éducation à l'environnement à partir des refuges, mais n'aborde pas tous les enjeux environnementaux.</p>
                <p className="text-gray-700">Si vous souhaitez aller plus loin sur ces sujets, nous vous invitons à prendre contact avec les associations qui portent déjà ce genre d'initiative (Mountain Wilderness avec la campagne Changer d'approche par exemple).</p>
                <p className="text-gray-700 mt-2 italic">Antoine Arnaud ajoute qu'il réfléchit à des solutions pour l'accès en transport en commun au point de départ du sentier menant à son refuge, avec le gardien du refuge voisin.</p>
              </div>
            </div>
          </div>

          {/* Liste des participants */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Liste des participants</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="space-y-1">
                <p>• Baptiste André - FFCAM Pôle hébergement</p>
                <p>• Thaïs Bert - FFCAM</p>
                <p>• Charles Rouche - président club guillestre Queyras 05</p>
                <p>• Luc Palgen - CAF Clermont Auvergne</p>
                <p>• Marie-Hélène ENRICI - CAF "Les Amis du Vieux Lyon" - référente Environnement du club</p>
                <p>• Olivier Mailland - Président CAF Mâcon</p>
                <p>• Chantal Aounil - CAF Casablanca</p>
                <p>• Vincent Delobel - Président CAF Nîmes Cévennes (Gard)</p>
                <p>• Marion Rivollet - gardienne du refuge du Nid d'Aigle</p>
                <p>• Philippe ANDRE - Caf Crau Alpilles et comité régional Paca</p>
                <p>• Bernadette DELAYEN - CAF de LEZEENNES, Trésorière CD Nord, cadre fédéral</p>
              </div>

              <div className="space-y-1">
                <p>• Marie-Hélène Champeval - Région Nouvelle Aquitaine / massif pyrénéen - référente environnement CAF Marsas, future instructrice avenir montagne</p>
                <p>• Jérôme Prost - Référent refuge de la Valmasque, CAF Nice Mercantour</p>
                <p>• Aline Perinet - Caf St Laurent du Var</p>
                <p>• Guy Adam - CAF CRAU ALPILLES 13</p>
                <p>• Françoise Kouchner - présidente commission environnement</p>
                <p>• Marie - Temple Ecrins</p>
                <p>• Marinette Bondoux</p>
                <p>• Jean-François Leroy - CAF Romans Isère</p>
                <p>• Hervé DESBOEUF - Président du CR Nouvelle-Aquitaine</p>
              </div>
            </div>
          </div>

          {/* Retour à la page principale */}
          <div className="mt-8 text-center">
            <Link
              href="/#webinaires"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-ffcam hover:bg-ffcam-dark rounded-lg transition-colors"
            >
              ← Retour aux webinaires
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
