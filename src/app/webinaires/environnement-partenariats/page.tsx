import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Webinaire: Environnement et Partenariats - Clubs en Action FFCAM",
  description: "Découvrez comment développer des partenariats avec les associations environnementales et les gestionnaires d'espaces protégés. Compte-rendu du webinaire du 30 juin 2025.",
};

export default function WebinarEnvironnementPartenariats() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Webinaire du 30 juin 2025
          </h1>
          <h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
            Réseau des référents milieux montagnards /environnement
          </h2>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 max-w-4xl mx-auto">
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
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              « Comment et pourquoi tisser des liens avec<br />
              les associations de protection de l'environnement<br />
              et les entités gestionnaires d'espaces naturels de son territoire ? »
            </h3>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">EN BREF :</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                    <span className="text-xl mr-2">⇨</span> La diversité des partenaires potentiels :
                  </h5>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700">- les associations de protection et/ou sensibilisation de l'environnement présentes sur nos territoires, souvent membres de réseaux à l'échelle nationale : LPO, Centres Permanents d'Initiatives pour l'Environnement (CPIE), Biodiv' Sports...</li>
                    <li className="text-gray-700">- les entités gestionnaires d'espaces naturels, par exemple les réserves naturelles, Conservatoire d'espaces naturels (<a href="https://reseau-cen.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://reseau-cen.org/</a>)</li>
                    <li className="text-gray-700">- Les acteurs institutionnels : parcs naturels régionaux (PNR), intercommunalités, agglomérations, métropoles, Parcs nationaux, ...</li>
                    <li className="text-gray-700">- des acteurs parfois moins connus à connaître : Collectif pour une Transition Citoyenne, Ferus, association Une Bouteille À La Mer...</li>
                  </ul>
                  <p className="text-gray-700 mt-3 ml-6">Et .... les bonnes idées et carnets d'adresses des adhérents du CAF, souvent engagés par ailleurs au-delà du Club Alpin</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                    <span className="text-xl mr-2">⇨</span> Des partenariats toujours riches,
                  </h5>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700">- Des actions de formation et de sensibilisation, en salle ou sur le terrain</li>
                    <li className="text-gray-700">- en direction des différents publics des clubs et comités : pratiquants, encadrants, groupes espoirs ...</li>
                    <li className="text-gray-700">- des opérations citoyennes : où les CAF répondent présents pour entretenir des sentiers, participer à des recueils de données par l'observation ou la pose de matériels d'enregistrement, voire intervenir dans le domaine social en accompagnant dans le massif de l'Estérel de jeunes exclus temporairement de l'éducation nationale...</li>
                    <li className="text-gray-700">- Les CAF peuvent devenir des forces de propositions.</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                    <span className="text-xl mr-2">⇨</span> .... Et qui font souvent boule de neige
                  </h5>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700">- Les relations entre CAF et partenaires s'établissent, se nouent, s'enrichissent dans le temps, rebondissent d'un sujet à un autre, ce qui permet de diversifier les actions</li>
                    <li className="text-gray-700">- Le bon vieux principe du réseautage fonctionne toujours. Ne pas hésiter à être présent dans des moments institutionnels (inauguration d'une maison de Parc, commissions, instances de consultation) ou tous lieux de relationnels plus ou moins informels. Le CAF devient un interlocuteur visible et légitime, ce qui lui permet d'être aussi consulté et écouté.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              L'ESSENTIEL AU FIL DU WEBINAIRE
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Les thématiques abordées lors des différentes interventions sont présentées dans l'ordre du déroulé du webinaire, afin de faciliter leur repérage dans l'enregistrement du webinaire.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Intervenant<br/>Club/comité</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Actions</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Partenaires 1</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Partenaires 2 (en compléments)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Monique Perraud</strong><br/>
                      <span className="text-sm text-gray-600">référente environnement<br/>CAF Saint-Étienne</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Conférence sur les glaciers<br/>
                      Randonnée sur l'eau commentée
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Collectif pour une Transition Citoyenne, Loire (CTC 42)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      <a href="https://ctc-42.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ctc-42.org/</a><br/>
                      <a href="https://transition-citoyenne.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://transition-citoyenne.org/</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Monique Perraud</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Un autre partenaire précieux à connaître : les Centres Permanents d'Initiatives pour l'Environnement (CPIE), ici La Maison de L'eau
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Centre Permanent d'Initiatives pour l'Environnement CPIE
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Réseau de CPIE dans toute la France : <a href="https://www.cpie.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.cpie.fr</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Patrick Lart</strong><br/>
                      <span className="text-sm text-gray-600">Responsable Milieu Montagnard<br/>CAF Valence</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Réunions d'information et sensibilisation sur Escalade et biodiversité avec J-F Leroy, notamment autour de la falaise de Saou
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Biodiv' Sports
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Dispositif national visant à concilier les pratiques de sports de nature et la préservation de la biodiversité, conçu et co-animé par la LPO.<br/>
                      <a href="https://biodiv-sports.fr/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://biodiv-sports.fr/</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Patrick Lart</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Relations avec la réserve naturelle du Vercors<br/>
                      ⇨ Formation sur les espaces naturels protégés
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      La Réserve naturelle nationale (RNN) des Hauts-Plateaux du Vercors
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Les RNN sont des espaces délimités soumis à une réglementation particulière et interdisant certaines activités nuisibles à la faune et à la flore.<br/>
                      <a href="https://reserves-naturelles.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://reserves-naturelles.org/</a><br/>
                      La Réserve naturelle nationale est gérée par le parc naturel régional (PNR) du Vercors
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Luc Palgen</strong><br/>
                      <span className="text-sm text-gray-600">Référent environnement<br/>CAF Clermont-Ferrand</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Journée d'information/rencontre entre encadrants d'escalade et le gestionnaire de site naturel<br/>
                      Journée de sensibilisation avec le groupe espoir des jeunes escalade d'Occitanie
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Syndicat mixte de gestion des gorges du Gardon
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Luc Palgen</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Le CAF de Clermont-F s'est porté volontaire pour :<br/>
                      - l'entretien des sentiers très fréquentés du massif du Sancy, avec l'encadrement technique de la RN, dans la bonne humeur partagée<br/>
                      - l'entretien des tourbières dans le PNR
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Réserve naturelle nationale de Chastreix-Sancy, gérée par le Parc naturel régional (PNR) des Volcans d'Auvergne.<br/>
                      Parc des Volcans d'Auvergne
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Réserve naturelle de France<br/>
                      <a href="https://reserves-naturelles.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://reserves-naturelles.org/</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Aline Perinet</strong><br/>
                      <span className="text-sm text-gray-600">Responsable Milieu Montagnard<br/>CAF Saint Laurent du Var</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Partenariat avec la LPO dans le cadre de Biodiv'
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      LPO
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Ligue pour la protection des oiseaux<br/>
                      <a href="https://www.lpo.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.lpo.fr</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Françoise Kouchner</strong><br/>
                      <span className="text-sm text-gray-600">CAF Grenoble-Oisans<br/>Membre de la Commission fédérale environnement</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Balisage des zones de protection hivernale des Tetras Lyre dans le massif de la Chartreuse, en collaboration avec le parc naturel régional de Chartreuse.<br/>
                      Pose, en ski de randonnée, d'enregistreurs de chant des lagopèdes dans le massif Belledonne avec la LPO.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>J-F Leroy</strong><br/>
                      <span className="text-sm text-gray-600">Futur instructeur avenir montagne, référent environnement<br/>CAF Romans et CD Drôme<br/>Membre de la Commission fédérale environnement</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      D'actions ponctuelles autour d'une convention à la participation pérenne à une commission permanente au niveau de l'Agglomération de Valence
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>J-F Leroy</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Participation au Biodiv'Sports, un dispositif national visant à concilier les pratiques de sports de nature et la préservation de la biodiversité
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      dispositif Biodiv'Sports
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Dispositif conçu et co-animé par la LPO<br/>
                      <a href="https://biodiv-sports.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://biodiv-sports.fr</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Jocelyne Durand</strong><br/>
                      <span className="text-sm text-gray-600">présidente<br/>CAF Corse du sud</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Partenariat avec l'Office de la Biodiversité<br/>
                      Randonnées organisées notamment avec une association travaillant sur le patrimoine des murets de pierre<br/>
                      Randonnées avec un botaniste
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      OFB (L'Office français de la biodiversité)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      L'Office français de la biodiversité (OFB)<br/>
                      <a href="https://www.ofb.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://www.ofb.gouv.fr/</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>J-Jacques Bianchi</strong><br/>
                      <span className="text-sm text-gray-600">référent environnement<br/>CAF Esterel</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Nettoyage des tags sur les rochers depuis 5 à 7 ans<br/>
                      Autres interventions sur les balisages sauvages
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      En coordination avec police municipale de Saint-Raphaël<br/>
                      L'ONF<br/>
                      L'OFB
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>J-Jacques Bianchi</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Dans le domaine social : journée d'accompagnement dans l'Estérel de jeunes exclus temporairement de l'éducation nationale
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Police nationale<br/>
                      Éducation nationale
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Vincent Delobel</strong><br/>
                      <span className="text-sm text-gray-600">Caf Nîmes-Cévennes</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Depuis 2 ans Comité départemental siège dans la commission tourisme du parc national des Cévennes
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      commission tourisme du parc national des Cévennes
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Monique Perraud</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Prépare une future intervention du CAF dans les classes de l'école primaire, lors des journées de l'environnement
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Éducation nationale
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Georges Larrieu</strong><br/>
                      <span className="text-sm text-gray-600">CAF Bayonne Pays Basque</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Le CAF est présent dans les débats sur la cohabitation entre les différents usagers en montagne, par exemple les perturbations des troupeaux liées à la pratique du trail.<br/>
                      Le CAF intervient aussi dans la création du futur PNR du pays basque.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Gestionnaire Natura 2000<br/>
                      Futur PNR en création
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Patrick Lart</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Le CAF Intervient sur les questions de mobilité, notamment grâce à la diffusion du film « Notre Air »<br/>
                      <em className="text-xs">Le film : Quand la montagne rencontre la science. Des athlètes de haut niveau de la montagne mesurent la qualité de l'air pour comprendre son impact sur leurs performances et comment la pollution de l'air influence notre santé et notre environnement, avec des témoignages de scientifiques, citoyens et décideurs</em>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      en partenariat avec Atmo Auvergne-Rhône-Alpes
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Atmo Auvergne-Rhône-Alpes<br/>
                      <a href="https://www.atmo-auvergnerhonealpes.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://www.atmo-auvergnerhonealpes.fr</a><br/>
                      <em className="text-xs">Pour diffuser le film, contacter les producteurs : association Une Bouteille À La Mer, qui a pour objectif de mobiliser les acteurs de l'outdoor, marques, sportifs, transporteurs, revendeurs, professionnels de l'environnement afin de mettre en place des solutions simples et concrètes pour respecter l'environnement.</em><br/>
                      <a href="https://www.unebouteillealamer.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://www.unebouteillealamer.org</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Vincent Delobel</strong><br/>
                      <span className="text-sm text-gray-600">Vice-Président milieu montagnard<br/>CAF Nîmes-Cévennes</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Réflexion en cours sur la solution de minibus<br/>
                      Souhaite échanger là-dessus
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Annie-Solange</strong><br/>
                      <span className="text-sm text-gray-600">CAF de Pau</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Le CAF a fonctionné plusieurs années avec un minibus. Vendu ensuite. Puis rachat d'un autre minibus
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Chantal Pretot</strong><br/>
                      <span className="text-sm text-gray-600">référente environnement<br/>CAF Vesoul</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      CAF Vesoul<br/>
                      - En lien avec la LPO sur question des falaises d'escalade<br/>
                      - En relation avec le PNR du Haut-Jura<br/>
                      - minibus : système de contrat de location avec un garage
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Jessica Planade</strong><br/>
                      <span className="text-sm text-gray-600">CAF Corse du Sud</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Un week-end par an de marche autour des étangs de la plaine orientale. Sorties organisées par Michel Muracciole, du CAF 2A et retraité du conservatoire du littoral, qui assure la présentation et les explications des structures naturelles et aménagements des territoires.<br/>
                      Il fait intervenir Isabelle Guyot, ornithologue, qui présente les espèces d'oiseaux croisées aux participants munis de jumelles.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Aline Martin</strong><br/>
                      <span className="text-sm text-gray-600">référente environnement<br/>CAF Auch et CD Gers</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Sciences participatives : Participer aux relevés de traces d'ours<br/>
                      Conférence sur les grands prédateurs organisée avec Ferus
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      En partenariat avec l'association Ferus, contactée par le CAF à l'origine sur la problématique des chiens de protection.
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Ferus, association de protection des grands prédateurs en France, par la concertation et le dialogue avec des éleveurs<br/>
                      <a href="https://www.ferus.fr/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://www.ferus.fr/</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Marie-Hélène Champeval</strong><br/>
                      <span className="text-sm text-gray-600">référente environnement<br/>CAF Marsas, future instructrice avenir montagne<br/>Membre de la Commission fédérale environnement</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Questions abordées en club :<br/>
                      Les patous<br/>
                      Les déplacements /mobilités<br/>
                      Et quid de la fresque de la montagne ?
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>J-F Leroy</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      La fresque de la montagne, forgée par l'association d'éducation à la montagne alpine Educ 'Alpes, avec qui la FFCAM est en relation par la Commission fédérale Environnement.<br/>
                      Une approche différente et complémentaire de la fresque du climat
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      L'association Educ 'Alpes
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      <a href="https://www.educalpes.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://www.educalpes.fr</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Laurent Nourdin</strong><br/>
                      <span className="text-sm text-gray-600">Vice-Président Milieu Montagnard du CAF Haut-Doubs<br/>Commission fédérale Environnement</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      W-end de sensibilisation au changement climatique et les impacts sur les glaciers avec Ludovic Ravanel, glaciologue géomorphologue<br/>
                      Conférence avec Bernard Francou
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              LES PARTICIPANTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p>• Lucie Verney, alternante FFCAM</p>
                <p>• Aline Martin, référente environnement CAF Auch et CD Gers</p>
                <p>• Jocelyne Durand, présidente CAF Corse du sud</p>
                <p>• Jessica Planade, CAF Corse du Sud</p>
                <p>• Maryse Dugue, référente environnement CAF Annemasse</p>
                <p>• Camille Chaulaic, CAF Annemasse</p>
                <p>• Annie-Solange Viroleau-Croharé, CAF Pau</p>
                <p>• Etienne Subervie, CAF Pau</p>
                <p>• Fabienne Bordenave, CAF Pau</p>
                <p>• Marie-Pascale Jeannin, CAF Belfort</p>
                <p>• Nicolas Trappler, CAF Belfort</p>
                <p>• Claude Marion, CAF Besançon</p>
                <p>• Eric Roussillon, CAF Besançon, futur instructeur avenir montagne</p>
                <p>• Alain Guéniot, CAF Crest + 3 autres personnes de ce club</p>
                <p>• Véronique Abadie, CAF Cannes</p>
                <p>• Aline Périnet, CAF Saint Laurent du Var</p>
                <p>• Mathias Schmitt, CD Gard, club Uz'escalade, référent environnement interclub Uzès, Clarensac, Roc and Pof, caf Bagnols</p>
                <p>• Jean-Jacques Bianchi, référent environnement CAF Esterel</p>
                <p>• Jean-Charles Fougeri, référent environnement CAF Anjou</p>
                <p>• Georges Larrieu, CAF Bayonne Pays Basque</p>
                <p>• Jeanne Bodin, CAF Aix</p>
                <p>• Patrick Lart, CAF Valence</p>
              </div>
              
              <div className="space-y-1">
                <p>• Jean-François Leroy, référent environnement CAF Romans et CD Drôme, futur instructeur avenir montagne</p>
                <p>• Monique Perraud, référente environnement CAF Saint-Etienne</p>
                <p>• Chantal Pretot, référente environnement CAF Vesoul</p>
                <p>• Luc Palgen, référent environnement CAF Clermont</p>
                <p>• Vincent Delobel, président CAF Nimes Cévennes</p>
                <p>• Monique Rieutord, CAF Nimes et CR Occitanie</p>
                <p>• Florence Blanchet, référente environnement CAF Avignon</p>
                <p>• Marie-Hélène Champeval, référente environnement CAF Marsas, future instructrice avenir montagne</p>
                <p>• Laurence Audrain, référente environnement CAF Briançon</p>
                <p>• Sophie Laurent, CAF Marseille</p>
                <p>• Bernadette Delayen, référente environnement CAF Lezennes, future instructrice avenir montagne</p>
                <p>• Ingrid Marcadella, CR AURA</p>
                <p>• Cédric Georget, CAF Tarbes et CR Occitanie</p>
                <p>• Jean-Claude Ortion, CR Pays de la Loire</p>
                <p>• Alexandra Vaudantin, CAF Lyon Villeurbanne</p>
                <p>• Perrine Corre, Pascal Rosset et Chloé Blondeau, CAF Saint Gervais</p>
                <p>• Hélène Constanty, Vice-présidente milieu montagnard, référente environnement CAF Nice, membre de la commission fédérale environnement</p>
                <p>• Françoise Kouchner, Présidente commission fédérale environnement, CAF Grenoble Oisans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}