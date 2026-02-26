import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webinaire: Que la montagne est belle… Sous les étoiles ! - Clubs en Action FFCAM",
  description: "Découvrez l'opération Que la montagne est belle 2026 sur le thème « Sous les étoiles ». Compte-rendu du webinaire du 10 février 2026 avec retours d'expérience des clubs.",
};

export default function WebinarMontagneSousLesEtoiles() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Webinaire du 10 février 2026
          </h1>
          <h2 className="text-2xl font-semibold text-ffcam mb-8 text-center">
            Que la montagne est belle… Sous les étoiles !
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
                  <strong>📹 Replay disponible :</strong> L&apos;enregistrement vidéo du webinaire est disponible sur simple demande via le <Link href="/#contact" className="underline hover:text-blue-900">formulaire de contact</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              L&apos;année 2026 marque le 21e anniversaire de cette opération phare de la protection du milieu montagnard à la fédération. Depuis le début de l&apos;aventure, pas moins de <strong>300 actions</strong> ont été réalisées par les clubs sur des thèmes variés tels que la biodiversité en montagne, la forêt, le pastoralisme, les sentiers, les refuges ou la réduction de notre empreinte carbone.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Cette année, c&apos;est sur le thème <strong>« Sous les étoiles »</strong> que les clubs peuvent candidater jusqu&apos;au 1er avril, pour ensuite réaliser leur action au cours de l&apos;année.
            </p>
          </div>

          {/* Animation et Interventions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Animation et interventions</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Animation par :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Alexandra VAUDATIN</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Interventions :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Lucie LAUDRIN et Anne BEAUX (CAF de Cornimont)</li>
                  <li>Alix MILLUCCI (Club alpin Nice Mercantour et animateur en astronomie)</li>
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
                  <a href="https://www.ffcam.fr/que-la-montagne-est-belle.html" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Page dédiée sur le site FFCAM
                  </a>
                  <span className="text-gray-600"> – présentation du dispositif et du thème annuel</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-ffcam mr-2">•</span>
                <div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQLMB/viewform" target="_blank" rel="noopener noreferrer" className="text-ffcam hover:underline font-medium">
                    Le formulaire pour participer au projet
                  </a>
                  <span className="text-gray-600"> – à remplir en ligne</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Sujets abordés */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sujets abordés</h3>

            <div className="space-y-6">
              {/* Présentation QLMB */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Présentation de l&apos;opération « Que la montagne est belle ! »</h4>
                <p className="text-gray-700 mb-3">
                  Un appel à projet avec un fil rouge, une thématique renouvelée chaque année. Depuis 2005, un thème est proposé et les clubs sont ensuite libres de s&apos;approprier la dynamique initiée par ce programme fédérateur. Des critères sélectifs sont demandés aux clubs souhaitant bénéficier de l&apos;aide financière associée au dispositif.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-blue-800 font-medium">
                    Subventions : deux montants selon le type de projet : 200€ ou 400€
                  </p>
                </div>
              </div>

              {/* Calendrier */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Calendrier :</h4>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Annonce du thème le <strong>1er février</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Dépôt des dossiers (questionnaire en ligne) avant le <strong>1er avril</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Examen des dossiers jusqu&apos;au <strong>15 avril</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Sélection avant le <strong>30 avril</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Mise en place des actions et versement des subventions de <strong>mi-septembre 2026 à mi-mars 2027</strong></span>
                  </li>
                </ul>
                <p className="text-gray-600 italic mt-3 ml-4">
                  → Décision d&apos;étendre durant la saison hivernale, pour avoir des opérations durant l&apos;automne et l&apos;hiver, d&apos;où la possibilité d&apos;un versement mi-mars.
                </p>
              </div>

              {/* Thème 2026 */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Thème 2026 : « Sous les étoiles »</h4>
                <p className="text-gray-700 mb-3">
                  Un thème poétique et scientifique, adaptable à toutes les saisons, créant des échos avec la faune nocturne, le bivouac, le brame du cerf et les soirées contes…
                </p>
                <div className="pl-4 border-l-2 border-ffcam mb-4">
                  <p className="text-gray-700">
                    <strong>Idée d&apos;un membre du CAF Esterel :</strong> organiser une sortie dans le Mercantour, dans un refuge qui dispose d&apos;une lunette astronomique. Discussion avec le gardien sur sa gestion éco-responsable de son refuge. Possibilité de voir les gardiens du parc italien Alpi Marittime sur le thème « à la recherche des glaciers perdus »… Et possibilité d&apos;effectuer les trajets en mobilité douce (train, VTT, puis à pied) : tendre vers la neutralité carbone.
                  </p>
                </div>
                <p className="text-gray-600 italic ml-4">
                  → Il avait été question de faire de la neutralité carbone un thème à part entière QLMB lors des propositions à Chambéry, mais il a été décidé que cette dimension pourrait/devrait rester transversale. N&apos;hésitez pas à encourager les démarches bas-carbone dans vos clubs à chacune de vos sorties !
                </p>
              </div>

              {/* Exemples concrets */}
              <div>
                <h4 className="font-semibold text-ffcam mb-3">Exemples concrets des éditions précédentes</h4>

                <div className="space-y-6">
                  {/* CAF Cornimont */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3">CAF de Cornimont (Vosges)</h5>
                    <p className="text-gray-700 mb-3">
                      Leur idée : aller jusqu&apos;à un site d&apos;escalade avec les adhérent·es, passer une nuit en refuge et suivre le cycle de l&apos;eau en vélo, avec quelques animations. Fête de l&apos;eau en parallèle dans le village où le Club a présenté son exposition sur le thème de l&apos;eau. 300€ subventionnés par la FFCAM, utiles pour l&apos;exposition et la sortie au refuge.
                    </p>
                    <p className="text-gray-700">
                      À partir du moment où est sortie la thématique, les membres actives de la commission environnement de ce club vosgien ont utilisé QLMB comme un outil pour créer des moments fédérateurs, faire du lien entre des pratiquants de commissions diverses (<em>« des personnes différentes avec des sensibilités différentes »</em>). Par le biais de la thématique environnementale et autour des événements issus de cette dynamique QLMB, le réseau s&apos;élargit et une belle énergie se crée.
                    </p>
                  </div>

                  {/* CAF Lyon */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3">CAF de Lyon (Rhône)</h5>
                    <p className="text-gray-700 mb-3">
                      Un concours de photos de vacances autour du thème de l&apos;eau. Et un week-end en refuge multi-activités (rando alpine, trail et VTT avec un glaciologue qui a fait une animation sur le glacier des Evettes) + une fresque de la montagne et une conférence avec la Ligue pour la protection des oiseaux (LPO) sur la faune en hiver.
                    </p>
                    <p className="text-gray-700">
                      Une équipe-projet s&apos;est créée et s&apos;est réjouie de voir que des adhérents divers ont été intéressés par leurs propositions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Questions-Réponses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Réponses aux questions des participants</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-ffcam mb-2">Pour qu&apos;un événement soit réussi, il faut une bonne communication. Comment faire pour s&apos;approprier les affiches de la fédération ? Est-ce qu&apos;on pourra être aidés à ce niveau-là ?</h4>
                <p className="text-gray-700">
                  Il serait possible de créer des kits, clé en main, sur la recherche de financement notamment, mais aussi sur la création d&apos;affiches de communication. Possibilité aussi d&apos;organiser des mini-formations pour apprendre à utiliser Canva par exemple…
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Dans les Pays de la Loire, nous sommes 27 clubs dans toute la région. Il est donc difficile de tous les fédérer pour monter un projet commun… Peut-on déposer plusieurs dossiers au sein d&apos;une même région ?</h4>
                <p className="text-gray-700">
                  Tout à fait. Dans le formulaire de candidature, il est possible d&apos;indiquer si l&apos;on est un club, un comité départemental, ou un comité régional, donc oui ! Les clubs ne sont en aucun cas en concurrence au sein des différents comités, et la fédération sera ravie de voir se monter plusieurs projets.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Y a-t-il une garantie pour que le dérangement de la faune nocturne occasionné par nos observations soit pris en compte ? À Chambéry, on se bat contre le trail à la lampe frontale, donc comment faire pour ne pas risquer d&apos;encourager ces pratiques perturbatrices avec le thème de cette année ?</h4>
                <p className="text-gray-700">
                  En effet, il est important de communiquer sur les conditions dans lesquelles ces rencontres avec la faune peuvent se faire. On peut tout à fait faire une conférence sur le fait de renoncer à ces observations nocturnes, plutôt que d&apos;organiser une sortie en grand groupe dans la forêt. Il est important de prendre en compte que notre simple présence dérange (c&apos;est la raison même de l&apos;activité nocturne de la grande majorité des animaux dits « nocturnes » : au contact des humains les sorties diurnes leur sont devenues dangereuses).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">La fédération prévoit-elle une communication partagée sur toutes les initiatives des clubs a posteriori ?</h4>
                <p className="text-gray-700">
                  Nous allons sélectionner des initiatives qui nous paraissent intéressantes dans les dossiers, pour créer un véritable reportage lors de la mise en place des projets. Cependant, on ne pourra malheureusement pas couvrir tout le monde… N&apos;hésitez pas à nous alimenter en contenu multimédia, avec les réactions audio ou écrites des participants, des petites vidéos, des photos, etc.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Peut-on bénéficier des subventions QLMB si l&apos;on monte un projet qui intègre peu la dimension « sous les étoiles » ?</h4>
                <p className="text-gray-700">
                  La fédération propose d&apos;autres appels à projets. Il ne faut pas que QLMB vous bloque et vous rajoute des contraintes. Essayez plutôt de voir si votre projet peut être soutenu par d&apos;autres dispositifs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Concernant le remplissage du formulaire en ligne, pourrait-on avoir une trame qui permet ensuite de répondre facilement aux questions lors de nos réunions en commission ?</h4>
                <p className="text-gray-700">
                  Toutes les questions sont sur la même page, donc en réunion vous pouvez remplir ensemble. Le formulaire est disponible sur la page des Clubs en Action ou directement sur le site de la FFCAM.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ffcam mb-2">Concernant le dérangement de la faune, les éleveurs m&apos;ont aussi témoigné la problématique qu&apos;ils rencontrent avec leurs brebis : des gestations qui n&apos;arrivent pas à terme à cause du dérangement par les sportifs. Les sorties pour voir le lever du soleil par exemple occasionnent de vraies perturbations.</h4>
                <p className="text-gray-700">
                  QLMB peut être une très bonne occasion d&apos;aborder ce sujet dans le club et avec les adhérents ! Une documentation scientifique existe. Elle peut être une super base de réflexion pour échanger là-dessus.
                </p>
              </div>
            </div>
          </div>

          {/* Liste des participants */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Liste des participants</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="space-y-1">
                <p>• Thierry ROGER – CAF Nice Mercantour, commission environnement</p>
                <p>• Alix MILLUCCI – CAF Nice Mercantour, commission environnement et animateur en astronomie</p>
                <p>• Lucie LAUDRIN – CAF de Cornimont</p>
                <p>• Anne BEAUX – CAF de Cornimont</p>
                <p>• Jean-Jacques – CAF de l&apos;Esterel</p>
                <p>• Marinette BONDOUX – CAF de Dijon</p>
                <p>• Bernard THIRIET – CAF de Dijon</p>
                <p>• Catherine BONDOUX – CAF de Dijon</p>
                <p>• Marie-Hélène ENRICI – CAF « Les Amis du Vieux Lyon »</p>
                <p>• Claude – CAF d&apos;Annecy</p>
                <p>• Paul PEHARPRE – CAF d&apos;Annecy</p>
                <p>• Christel – CAF de Lyon</p>
                <p>• Paul THEROND – CAF d&apos;Aix-en-Provence</p>
                <p>• Geneviève DALEGRE – CAF de Nantes-Atlantique</p>
                <p>• Nicolas TRAPPLER – CAF de Belfort</p>
              </div>

              <div className="space-y-1">
                <p>• Robin – CAF de Lons-le-Saunier (QLMB 2025)</p>
                <p>• Jessica PLANADE – CAF Corse Sud (deux éditions de QLMB + cette année)</p>
                <p>• Jérôme DAL – GUM de Grenoble</p>
                <p>• Nathalie AUBEL – CAF de Besançon, commission « Milieu montagnard »</p>
                <p>• Myriam LIGIER – CAF de Passy</p>
                <p>• Maryse DUGUE – CAF de Chambéry (QLMB 2023 et 2025 + cette année)</p>
                <p>• Josiane – CAF de Vesoul</p>
                <p>• Chris – CAF de Montbéliard</p>
                <p>• Monique RIEUTORD – CAF de Nîmes</p>
                <p>• Jean-François L. – CAF de Romans-sur-Isère</p>
                <p>• Juliane GONINET – stagiaire FFCAM</p>
                <p>• Jean-Charles FOUGERI – CAF d&apos;Anjou, commission Environnement</p>
                <p>• Véronique ABADIE – CAF Cannes Côte d&apos;Azur</p>
                <p>• Agnès CRAPART – CAF de Voiron, référente Milieu Montagnard</p>
                <p>• Agnès MÉTIVIER – CAF Ile-de-France, vice-présidente Milieu Montagnard</p>
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
