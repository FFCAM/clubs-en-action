import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webinaire: Gestion des EPI - Clubs en Action FFCAM",
  description: "Compte-rendu du webinaire sur la gestion des Équipements de Protection Individuelle (EPI) dans les clubs. Réglementation, vérification, outils et bonnes pratiques.",
};

export default function WebinarGestionEPI() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Webinaire du 16 décembre 2025
          </h1>
          <h2 className="text-2xl font-semibold text-ffcam mb-8 text-center">
            Gestion des EPI dans les clubs
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

          {/* En bref */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">En bref</h3>
            <p className="text-gray-700 mb-4">
              Ce webinaire, qui a réuni près de 100 participants (limite Zoom atteinte !), a abordé la réglementation européenne sur les EPI,
              les obligations de vérification, et les bonnes pratiques de gestion du matériel dans les clubs.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-amber-800 font-medium">
                Point clé : Les EPI doivent être vérifiés au moins une fois tous les 12 mois par une personne compétente.
              </p>
            </div>
          </div>

          {/* Animation et Interventions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Animation et Interventions</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Animation par :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nicolas Ritouet - Élu bénévole membre du Comité Directeur de la FFCAM, organisateur des webinaires participatifs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Interventions :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Yvan Binot</strong> - Formateur EPI, Centre de formation Petzl (Crolles)</li>
                  <li><strong>Stéphane</strong> - Section Matériel du CAF de Lyon</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ressources */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Les ressources</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://extranet-clubalpin.com/app/Administration/get.php?&i=284457&h=f627a18f1282517" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Recommandations fédérales pour la gestion du matériel dans les clubs (PDF)
                  </a>
                  <span className="text-gray-600"> - document officiel FFCAM</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://drive.google.com/file/d/1WxC9E8t_ueo3ila3xLmF2uXQsSvxwiUe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Présentation Petzl - Réglementation EPI (PDF)
                  </a>
                  <span className="text-gray-600"> - support de présentation d'Yvan Binot</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://www.petzl.com/FR/fr/Sport" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Site Petzl Sport
                  </a>
                  <span className="text-gray-600"> - notices techniques, fiches de suivi EPI, conseils d'entretien</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://www.petzl.com/INT/en/Professional/epi-tracking" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Application Petzl EPI
                  </a>
                  <span className="text-gray-600"> - gestion numérique des EPI (essai gratuit 45 jours)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://www.loxya.com" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Loxya
                  </a>
                  <span className="text-gray-600"> - plateforme de gestion de location (utilisée par le CAF Lyon)</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://epi-tranquille.fr" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    EPI Tranquille
                  </a>
                  <span className="text-gray-600"> - outil de gestion des EPI (en développement)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Réglementation EPI */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Réglementation des EPI</h3>
            <p className="text-gray-600 mb-6 italic">Présentation par Yvan Binot, formateur Petzl</p>

            <div className="space-y-6">
              {/* Définition EPI */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Qu'est-ce qu'un EPI ?</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Un EPI est un dispositif destiné à protéger une personne contre un ou plusieurs risques pour sa santé et sa sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Régi par le règlement européen 2016/425</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Le marquage CE est obligatoire</strong> pour les EPI - sans ce marquage, ce n'est pas un EPI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Exemples de non-EPI : Reverso, descendeur simple spéléo, descendeur Canyon (pas de marquage CE)</span>
                  </li>
                </ul>
              </div>

              {/* Catégories EPI */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Les 3 catégories d'EPI</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm text-gray-700">
                    <thead>
                      <tr className="bg-gray-100 text-gray-900">
                        <th className="border border-gray-300 px-4 py-2 text-left">Catégorie</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Risque</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Exemples</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Identification</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Catégorie 1</td>
                        <td className="border border-gray-300 px-4 py-2">Risque mineur</td>
                        <td className="border border-gray-300 px-4 py-2">Gants, protections auditives</td>
                        <td className="border border-gray-300 px-4 py-2">CE seul</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Catégorie 2</td>
                        <td className="border border-gray-300 px-4 py-2">Risque grave</td>
                        <td className="border border-gray-300 px-4 py-2">Casques sport, crampons</td>
                        <td className="border border-gray-300 px-4 py-2">CE seul</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Catégorie 3</td>
                        <td className="border border-gray-300 px-4 py-2">Risque mortel</td>
                        <td className="border border-gray-300 px-4 py-2">Protection chute en hauteur (harnais, longes, connecteurs...)</td>
                        <td className="border border-gray-300 px-4 py-2">CE + numéro organisme notifié (ex: CE 0082)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 mt-2 text-sm italic">Note : En activités de montagne, nous sommes principalement concernés par les EPI de catégorie 3 (risque de chute en hauteur)</p>
              </div>

              {/* Vérification */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Obligations de vérification</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Vérification périodique obligatoire au moins tous les 12 mois</strong> (norme EN 365)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Vérification journalière par l'utilisateur (avant, pendant, après utilisation)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Vérification après événement important (chute, choc...)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Contrôle uniquement visuel, tactile et fonctionnel (pas de test destructif)</span>
                  </li>
                </ul>
              </div>

              {/* Personne compétente */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Qui peut vérifier les EPI ?</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Il n'existe pas de diplôme ou formation officielle obligatoire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>On parle de <strong>"personne compétente"</strong> (norme EN 365)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Cette personne doit connaître les exigences réglementaires, les instructions du fabricant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Être capable d'identifier et d'évaluer les défauts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Formations disponibles : Petzl (3 jours), Béal, Camp, Kong...</span>
                  </li>
                </ul>
              </div>

              {/* Durée de vie */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Durée de vie des EPI (chez Petzl)</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Produits plastiques (casques) :</strong> 10 ans à partir de la date de fabrication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Produits textiles (harnais, sangles, cordes) :</strong> 10 ans à partir de la date de fabrication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Produits métalliques (mousquetons, descendeurs) :</strong> durée de vie illimitée, selon usure</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-2 text-sm italic">Note : Chaque fabricant définit ses propres durées de vie - consultez les notices techniques</p>
              </div>

              {/* Registre de sécurité */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Le registre de sécurité</h4>
                <p className="text-gray-700 mb-2">Chaque EPI doit avoir une fiche de vie contenant :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 text-gray-700 text-sm">
                  <div>• Type d'équipement et modèle</div>
                  <div>• Nom et coordonnées du fabricant</div>
                  <div>• Numéro de série</div>
                  <div>• Année de fabrication / date de fin de vie</div>
                  <div>• Date d'achat</div>
                  <div>• Date de première utilisation</div>
                  <div>• Historique des examens périodiques</div>
                  <div>• Statut de chaque vérification</div>
                  <div>• Date du prochain examen</div>
                  <div>• Nom et signature du contrôleur</div>
                </div>
                <p className="text-gray-600 mt-3 text-sm"><strong>Conservation :</strong> 5 ans pour les employeurs, 3 ans pour les clubs/associations après destruction du produit</p>
              </div>

              {/* Mise au rebut */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Quand rebuter un EPI ?</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Plus de 10 ans (plastique/textile chez Petzl)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>A subi une chute ou un effort important</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Résultat de vérification non satisfaisant ou doute sur la fiabilité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Historique d'utilisation inconnu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Usage obsolète</span>
                  </li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                  <p className="text-red-800">
                    <strong>Important :</strong> Les EPI rebutés doivent être détruits (couper les points d'encordement, scier les casques...)
                    et ne doivent jamais être donnés ou revendus. La vente d'EPI d'occasion est strictement interdite en France.
                  </p>
                </div>
              </div>

              {/* Boîte à quarantaine */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Conseil pratique : la boîte à quarantaine</h4>
                <p className="text-gray-700">
                  Mettez en place une "boîte à quarantaine" dans votre club : un endroit dédié où les produits
                  qui nécessitent une vérification (nouveaux achats, retours après incident, doute sur l'état...)
                  sont isolés en attendant d'être inspectés par une personne compétente.
                </p>
              </div>
            </div>
          </div>

          {/* Retour d'expérience CAF Lyon */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Retour d'expérience : CAF Lyon</h3>
            <p className="text-gray-600 mb-6 italic">Présentation par Stéphane, section Matériel</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Contexte</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Club de 2000 adhérents avec beaucoup de matériel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Création d'une section matériel avec 4 bénévoles (maintenant 8)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Passage d'une gestion papier à une gestion numérique</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-3">Actions mises en place</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Inventaire complet</strong> du matériel existant et mise au rebut du matériel obsolète</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Formation de sensibilisation</strong> de 2h par Camp pour l'équipe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Outil numérique Loxya</strong> pour la gestion des réservations et du matériel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Sécurisation de l'accès</strong> au local matériel (fin de l'accès libre pour les encadrants)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Système de boîtes</strong> pour le dépôt et le retour du matériel réservé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span><strong>Vérification systématique</strong> au retour avant remise en circulation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-3">Organisation</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Les cordes d'escalade restent gérées par la section Escalade (vérification annuelle de toutes les cordes en été)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Le matériel transverse (utilisé par plusieurs commissions) est géré par la section Matériel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Adresse mail dédiée pour les demandes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Questions-Réponses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Questions-Réponses</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Les DVA sont-ils des EPI ?</h4>
                <p className="text-gray-700">
                  Non, les DVA ne sont pas considérés comme des EPI au sens de la réglementation européenne.
                  Cependant, ils portent un marquage CE (répondent à une autre directive) et doivent être
                  gérés avec attention comme tout appareil de sécurité. Il est recommandé de suivre les
                  préconisations du fabricant et de faire les mises à jour régulièrement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Quelle est la responsabilité juridique en cas d'accident ?</h4>
                <p className="text-gray-700">
                  Le président de l'association porte la responsabilité principale. Les personnes déléguées
                  (responsables matériel, contrôleurs) partagent une part de responsabilité sur leur périmètre.
                  Le respect des procédures de vérification et la documentation (fiches de vie) permettent de
                  démontrer que les précautions ont été prises.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Comment marquer/identifier les cordes ?</h4>
                <p className="text-gray-700 mb-2">
                  C'est un défi car les marqueurs s'effacent et les gaines thermorétractables peuvent glisser sur les cordes dynamiques. Solutions possibles :
                </p>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>○ Gaines thermorétractables avec inscription</li>
                  <li>○ Code couleur avec traits de peinture</li>
                  <li>○ Association permanente à un sac de corde identifié</li>
                  <li>○ Couture en bout de corde (pour l'identification, pas la sécurité)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Comment gérer les sangles de coinceurs (friends) ?</h4>
                <p className="text-gray-700">
                  On ne peut pas apposer de produits chimiques (scotch, marqueur) sur les sangles.
                  Solutions : écrire sur l'étiquette produit, utiliser un morceau de gaine thermorétractable,
                  ou attendre les futures solutions avec puces RFID intégrées.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Ce webinaire compte-t-il comme formation EPI ?</h4>
                <p className="text-gray-700">
                  Non, ce webinaire est une sensibilisation et une introduction au sujet.
                  Les formations EPI durent de 2h (sensibilisation) à 3 jours (formation complète Petzl avec évaluation).
                </p>
              </div>
            </div>
          </div>

          {/* Outils mentionnés */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Outils de gestion mentionnés par les participants</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-gray-700">
                <thead>
                  <tr className="bg-gray-100 text-gray-900">
                    <th className="border border-gray-300 px-4 py-2 text-left">Outil</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Utilisé par</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Loxya</td>
                    <td className="border border-gray-300 px-4 py-2">Réservation/Location</td>
                    <td className="border border-gray-300 px-4 py-2">CAF Lyon</td>
                    <td className="border border-gray-300 px-4 py-2">Plateforme associative, pas spécifique EPI</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Application Petzl EPI</td>
                    <td className="border border-gray-300 px-4 py-2">Gestion EPI</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">Payant, 45 jours d'essai, multi-marques</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">EPI Tranquille</td>
                    <td className="border border-gray-300 px-4 py-2">Gestion EPI</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">En développement</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">Access (custom)</td>
                    <td className="border border-gray-300 px-4 py-2">Gestion EPI</td>
                    <td className="border border-gray-300 px-4 py-2">CAF Mulhouse</td>
                    <td className="border border-gray-300 px-4 py-2">Développement interne, non partageable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Formations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Se former à la vérification des EPI</h3>

            <div className="space-y-4">
              <p className="text-gray-700">
                Plusieurs fabricants proposent des formations à la vérification des EPI :
              </p>
              <ul className="space-y-2 ml-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>Petzl</strong> : Formation 3 jours à Crolles (1/2 journée théorie + 1,5 jour pratique + évaluation), recyclage tous les 3 ans recommandé</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>Béal, Camp, Kong</strong> : Formations de durées variables</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">○</span>
                  <span><strong>FFME</strong> : Propose des formations EPI</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour les encadrants FFCAM, le memento fédéral indique que peuvent être considérées comme personnes habilitées :
                les titulaires d'un DE alpinisme, les personnes ayant suivi une formation spécifique EPI dispensée par la Fédération
                ou un organisme habilité (Éducation nationale, fabricants...).
              </p>
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
