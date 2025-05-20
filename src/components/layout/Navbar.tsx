"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/Logo-FFCAM.png"
                alt="Logo FFCAM - Fédération française des clubs alpins et de montagne"
                width={160}
                height={60}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-2 text-lg font-bold text-gray-900">
                Clubs en Action
              </span>
            </Link>
          </div>

          <div
            data-testid="desktop-menu"
            className="hidden md:flex md:items-center md:gap-8"
            role="navigation"
            aria-label="Menu principal"
          >
            <Link
              href="#vision"
              className="text-sm font-medium text-gray-800 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:ring-offset-2 rounded"
            >
              Notre Vision
            </Link>
            <Link
              href="#webinaires"
              className="text-sm font-medium text-gray-800 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:ring-offset-2 rounded"
            >
              Webinaires
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-gray-800 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:ring-offset-2 rounded"
            >
              Solutions
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-800 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:ring-offset-2 rounded"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              data-testid="menu-button"
              className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-ffcam/10 hover:text-ffcam transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menu principal"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="md:hidden bg-white border-b border-gray-200 shadow-sm"
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link
              href="#vision"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-ffcam/10 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:bg-ffcam/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Vision
            </Link>
            <Link
              href="#webinaires"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-ffcam/10 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:bg-ffcam/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Webinaires
            </Link>
            <Link
              href="#solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-ffcam/10 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:bg-ffcam/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-ffcam/10 hover:text-ffcam transition-colors focus:outline-none focus:ring-2 focus:ring-ffcam focus:bg-ffcam/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
