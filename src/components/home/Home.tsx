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

const Home = () => {
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
};

export default Home; 