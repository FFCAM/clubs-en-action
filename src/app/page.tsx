'use client';

import {
  Navbar,
  Footer,
  HeroSection,
  VisionSection,
  WebinarsSection,
  // SolutionsSection, // Temporairement masqué - à réactiver ultérieurement
  FAQSection,
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
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  );
}