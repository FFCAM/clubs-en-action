"use client";

import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

interface Speaker {
  name: string;
  topic: string;
  description: string;
}

interface WebinarPastPresentationProps {
  title: string;
  date: string;
  time: string;
  description: string;
  videoNote?: string;
  topics: string[];
  speakers: Speaker[];
}

export default function WebinarPastPresentation({
  title,
  date,
  time,
  description,
  videoNote,
  topics,
  speakers
}: WebinarPastPresentationProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                À propos du webinaire
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {description}
              </p>
              
              {videoNote && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100-2 1 1 0 000 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>📹 Vidéo :</strong> {videoNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Sujets abordés
              </h4>
              <ul className="space-y-3">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Clubs intervenants
              </h3>
              <div className="space-y-6">
                {speakers.map((speaker, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 text-green-500 mr-2" />
                      <h4 className="font-semibold text-gray-900">{speaker.name}</h4>
                    </div>
                    <h5 className="font-medium text-green-600 mb-2">{speaker.topic}</h5>
                    <p className="text-gray-600 text-sm">{speaker.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}