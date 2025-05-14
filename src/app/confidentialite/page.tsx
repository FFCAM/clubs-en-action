'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">Clubs en Action</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-3xl pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-ffcam hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-gray-700 bg-white rounded-lg p-8 shadow">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-4">
              La protection de vos données personnelles est une priorité pour l'initiative Clubs en Action de la FFCAM (Fédération Française des Clubs Alpins et de Montagne). 
              Cette politique de confidentialité a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Collecte des données</h2>
            <p className="mb-4">
              Nous collectons les informations que vous nous fournissez volontairement via notre formulaire de contact :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Nom de votre club</li>
              <li>Contenu de vos messages et contributions</li>
              <li>Vos préférences concernant votre participation (intérêt pour suggérer un thème, partager une solution, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Utilisation des données</h2>
            <p className="mb-4">
              Les informations recueillies sont utilisées uniquement pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Vous recontacter suite à votre demande</li>
              <li>Organiser les webinaires et les initiatives collaboratives</li>
              <li>Vous envoyer des informations sur les prochains événements (uniquement si vous avez donné votre consentement)</li>
              <li>Améliorer la plateforme et les services proposés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conservation des données</h2>
            <p className="mb-4">
              Vos données sont conservées pour une durée de 3 ans à compter de votre dernière interaction avec notre initiative. 
              À l'issue de cette période, vos données seront soit supprimées, soit anonymisées à des fins statistiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Partage des données</h2>
            <p className="mb-4">
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos informations ne sont partagées qu'avec les membres 
              de l'équipe organisatrice des Clubs en Action au sein de la FFCAM, strictement dans le cadre des finalités mentionnées ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sécurité</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
              contre toute perte, accès non autorisé, divulgation ou destruction accidentelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Vos droits</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, veuillez nous contacter via le formulaire de contact sur notre site 
              ou par email à l'adresse suivante : <a href="mailto:vosdonnees@ffcam.fr" className="text-ffcam hover:underline">vosdonnees@ffcam.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p className="mb-4">
              Notre site n'utilise que des cookies strictement nécessaires au fonctionnement du site et à la sécurité de vos données.
              Ces cookies ne collectent pas d'informations utilisées à des fins de marketing ou pour suivre votre navigation sur Internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Modifications de la politique de confidentialité</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une date de mise à jour. 
              Nous vous encourageons à consulter régulièrement cette politique pour rester informé de nos pratiques.
            </p>
            <p className="mb-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter :
            </p>
            <p className="mb-4">
              <strong>Email :</strong> <a href="mailto:vosdonnees@ffcam.fr" className="text-ffcam hover:underline">vosdonnees@ffcam.fr</a>
            </p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-sm text-gray-400">
              FFCAM - Fédération Française des Clubs Alpins et de Montagne
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}