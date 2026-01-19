import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webinaire: Les nouvelles formations à l'environnement - Clubs en Action FFCAM",
  description: "Découvrez le nouveau brevet fédéral Instructeur Avenir Montagne, dédié à la redirection écologique et à la protection des milieux naturels. Compte-rendu du webinaire du 14 janvier 2026.",
};

export default function WebinarFormationsEnvironnement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Webinaire du 14 janvier 2026
          </h1>
          <h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
            Les nouvelles formations à l'environnement
          </h2>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  <strong>📹 Replay disponible :</strong> L'enregistrement vidéo du webinaire est disponible sur simple demande via le <Link href="/#contact" className="underline hover:text-green-900">formulaire de contact</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Intervenants */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intervenants</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Fabien Ibarra</li>
              <li>Eric Roussillon</li>
              <li>Yves Friquet</li>
              <li>Evelyne Guignard</li>
            </ul>
          </div>

          {/* Le nouveau brevet */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Le nouveau brevet « Avenir Montagne »</h3>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-medium">
                Un nouveau brevet fédéral Instructeur « Avenir Montagne » a été créé en 2024, expérimenté en 2025, et entre en application en 2026.
              </p>
            </div>
            <p className="text-gray-700">
              C'est un brevet fédéral Instructeur dédié à la <strong>redirection écologique</strong> et à la <strong>protection des milieux naturels et montagnards</strong>.
            </p>
          </div>

          {/* Objectifs et rôles */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Objectifs et rôles de l'instructeur</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Objectifs du brevet :</h4>
                <p className="text-gray-700">
                  Former des cadres FFCAM (Animateur, BF1/BF2/BF3), dans toutes les activités, des instructeurs capables d'accompagner les cadres, les adhérents, les clubs et les comités territoriaux dans l'adaptation de leurs pratiques afin de :
                </p>
                <ul className="mt-2 space-y-1 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Faire face aux enjeux climatiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Participer à la redirection écologique globale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Préserver le milieu naturel et sa biodiversité</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-3">Rôles du breveté « Avenir Montagne » :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Former des initiateurs et des cadres, dans toutes les activités, aux principes de la redirection écologique et de la protection des milieux naturels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Initier et accompagner le changement des pratiques dans les clubs et les comités territoriaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Diffuser les connaissances pour la redirection écologique globale et la protection des milieux naturels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Contribuer au déploiement des dispositifs fédéraux (Label CIMES…) conjointement avec le référent dédié</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Participer au réseau national des brevetés « Avenir Montagne » en coordination avec la Commission Environnement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Développer et entretenir des relations partenariales avec les acteurs des territoires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Exercer une veille sur l'actualisation des connaissances et sur l'adaptation des pratiques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Programme de formation */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Programme de formation</h3>

            <p className="text-gray-700 mb-4">La formation comprend <strong>4 modules</strong> :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">1. Redirection écologique</h4>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">2. Préservation des milieux et de la biodiversité</h4>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">3. Changement des pratiques</h4>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">4. Communication et promotion</h4>
              </div>
            </div>
          </div>

          {/* Promotion 2025-2026 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Promotion Instructeur Avenir Montagne 2025-2026</h3>
            <p className="text-gray-600 mb-4 italic">Certification en février 2026</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Les premiers instructeurs :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>9 instructeurs</strong> ont testé la formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Régions d'origine :</strong> Hauts-de-France, Pays de la Loire, Nouvelle-Aquitaine, Aura, PACA, Bourgogne-Franche-Comté</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">Organisation de la formation :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Période 1 :</strong> Juin - Centre de formation du CREPS Vallon-Pont-d'Arc</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Période 2 :</strong> Octobre - FFCAM Chambéry</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">Formateurs :</h4>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>CREPS Vallon-Pont-d'Arc</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Garde de la réserve des gorges de l'Ardèche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Ingénieure océanographe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Formateur Arts et Métiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Responsable communication</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">Modalités :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Certification sur dossier</strong> (1 certification/an)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Frais de formation :</strong> cours et hébergement pris en charge par la FFCAM, déplacements par les CT (engagement de l'instructeur)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Promotion 2026-2027 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Promotion Instructeur Avenir Montagne 2026-2027</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-gray-700">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Étape</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Période</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Détails</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Candidature</td>
                    <td className="border border-gray-300 px-4 py-3">1er décembre 2025 à fin février 2026</td>
                    <td className="border border-gray-300 px-4 py-3">Dépôt des dossiers de candidature</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sélection</td>
                    <td className="border border-gray-300 px-4 py-3">Début mars 2026</td>
                    <td className="border border-gray-300 px-4 py-3">12 personnes choisies dans les régions non pourvues en 2025</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Formation à Vallon-Pont-d'Arc</td>
                    <td className="border border-gray-300 px-4 py-3">Avril 2026</td>
                    <td className="border border-gray-300 px-4 py-3">
                      En partenariat avec le CREPS Rhône-Alpes<br />
                      <em>Module : Redirection écologique</em><br />
                      <em>Module : Préservation des milieux et de la biodiversité</em>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Formation à Chambéry</td>
                    <td className="border border-gray-300 px-4 py-3">Octobre 2026</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <em>Module : Changement des pratiques</em><br />
                      <em>Module : Communication et promotion</em>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Certification</td>
                    <td className="border border-gray-300 px-4 py-3">Février 2027</td>
                    <td className="border border-gray-300 px-4 py-3">Certification Avenir Montagne sur dossier + UFCA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Modules expérimentaux 2026 */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Modules expérimentaux « Avenir Montagne » en 2026</h3>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <p className="text-amber-800 font-medium">
                À destination des cadres (BF1/BF2/BF3), sur la base de la sensibilité et la bonne volonté de chacun(e).
              </p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2 ml-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>10 modules</strong> expérimentaux mis en place</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>2 journées</strong> de formation par module</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span>Délivrance d'un BF2 ou MONITEUR (à préciser)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>Aide financière fédérale</strong> en soutien pour chaque module mis en place par l'intermédiaire des opérateurs de formation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Et ensuite */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Et ensuite...</h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="font-semibold text-green-700 mr-2">2026/2027 :</span>
                <span>Mise à jour du module environnement pour l'UFCA</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-green-700 mr-2">2027/2028 :</span>
                <span>Module environnement inclus dans le thème 4 des fiches de compétences INITIÉ et PERFECTIONNÉ</span>
              </div>
              <div className="mt-4 ml-4">
                <p className="text-gray-600 italic">Formats de formation envisagés :</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Formation type classique et/ou avec pratique sur le terrain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Formation en ligne type MOOC avec validation des acquis (à l'étude)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retour à la page principale */}
          <div className="mt-8 text-center">
            <Link
              href="/#webinaires"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
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
