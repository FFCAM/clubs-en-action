"use client";

import { ExternalLink, Users, Mail, MapPin } from "lucide-react";

interface Intervention {
  speaker: string;
  club: string;
  contact?: string;
  actions: string[];
  partners: {
    primary: string;
    secondary?: string;
    links?: string[];
  };
}

interface WebinarDetailedSummaryProps {
  interventions: Intervention[];
}

export default function WebinarDetailedSummary({ interventions }: WebinarDetailedSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Détail des interventions
      </h2>
      
      <div className="space-y-8">
        {interventions.map((intervention, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  {intervention.speaker}
                </h3>
                <p className="text-green-600 font-medium">{intervention.club}</p>
                {intervention.contact && (
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-1" />
                    <a 
                      href={`mailto:${intervention.contact}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {intervention.contact}
                    </a>
                  </div>
                )}
              </div>
              
              <div className="mt-4 lg:mt-0 lg:text-right">
                <h4 className="font-semibold text-gray-800 mb-2">Partenaires</h4>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-green-700">
                    {intervention.partners.primary}
                  </p>
                  {intervention.partners.secondary && (
                    <p className="text-sm text-gray-600">
                      {intervention.partners.secondary}
                    </p>
                  )}
                  {intervention.partners.links && (
                    <div className="flex flex-col space-y-1">
                      {intervention.partners.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {link.replace('https://', '').replace('http://', '')}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                Actions réalisées
              </h4>
              <ul className="space-y-2">
                {intervention.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2 text-sm font-bold">•</span>
                    <span className="text-sm leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}