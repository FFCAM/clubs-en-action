'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Si vous avez un logo, vous pouvez l'ajouter ici */}
              <span className="text-xl font-bold text-gray-900">Clubs en Action</span>
            </Link>
          </div>
          
          <div data-testid="desktop-menu" className="hidden md:flex md:items-center md:gap-8">
            <Link href="#vision" className="text-sm font-medium text-gray-600 hover:text-ffcam">
              Notre Vision
            </Link>
            <Link href="#webinaires" className="text-sm font-medium text-gray-600 hover:text-ffcam">
              Webinaires
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-ffcam">
              Solutions
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-ffcam">
              Contact
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              data-testid="menu-button"
              className="flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-ffcam"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link 
              href="#vision" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-ffcam"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Vision
            </Link>
            <Link 
              href="#webinaires" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-ffcam"
              onClick={() => setMobileMenuOpen(false)}
            >
              Webinaires
            </Link>
            <Link 
              href="#solutions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-ffcam"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-ffcam"
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