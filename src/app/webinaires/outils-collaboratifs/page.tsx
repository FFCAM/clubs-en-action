import { Metadata } from "next";
import Link from "next/link";
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