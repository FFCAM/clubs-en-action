"use client";

import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ffcam-light to-ffcam-dark py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Logo-FFCAM.png"
              alt="Logo FFCAM"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-lg font-medium">Clubs en Action</p>
          </div>
          <p className="text-center text-sm text-white">
            Fait avec amour par les bénévoles de la FFCAM ❤️
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
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
            <span className="text-white/60">•</span>
            <Link
              href="/confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
          <div className="mt-2">
            <Link
              href="https://www.ffcam.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              © {new Date().getFullYear()} Fédération française des clubs
              alpins et de montagne
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
