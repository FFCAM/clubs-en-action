"use client";

import Link from "next/link";
import { Trophy, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-ffcam" />
            <p className="text-lg font-medium">Clubs en Action</p>
          </div>
          <p className="text-center text-sm text-gray-400">
            Fait avec amour par les bénévoles de la FFCAM ❤️
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a
              href="https://github.com/ffcam/clubs-en-action"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                Code source
              </span>
            </a>
            <span className="text-gray-600">•</span>
            <Link
              href="/confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
