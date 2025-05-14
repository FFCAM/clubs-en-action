'use client';

import {
  Navbar,
  Footer,
  HeroSection,
  VisionSection,
  WebinarsSection,
  // SolutionsSection, // Temporairement masqué - à réactiver ultérieurement
  ContactForm
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <WebinarsSection />
      {/* <SolutionsSection /> */}
      <ContactForm />
      <Footer />
    </main>
  );
}