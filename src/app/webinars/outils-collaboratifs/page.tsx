import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Presentation from "@/components/webinars/Presentation";
import QASection from "@/components/webinars/QASection";
import ResourcesSection from "@/components/webinars/ResourcesSection";
import ParticipantSharing from "@/components/webinars/ParticipantSharing";

export const metadata: Metadata = {
  title: "Webinaire: Les Outils Collaboratifs - Clubs en Action FFCAM",
  description: "Découvrez les outils collaboratifs pour dynamiser votre club FFCAM. Présentation, questions-réponses et ressources du webinaire du 23 juin 2025.",
};

export default function WebinarOutilsCollaboratifs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Webinaire: Les Outils Collaboratifs
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Enregistrement en cours de traitement :</strong> L'enregistrement vidéo du webinaire est en train d'être nettoyé et sera disponible prochainement.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <Presentation />
        </div>
        
        <div className="mb-12">
          <QASection />
        </div>
        
        <div className="mb-12">
          <ResourcesSection />
        </div>
        
        <div className="mb-12">
          <ParticipantSharing />
        </div>
      </div>
      <Footer />
    </div>
  );
}