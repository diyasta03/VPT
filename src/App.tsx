import React, { useState } from 'react';
import { Language, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroPrismaVPT } from './components/HeroPrismaVPT';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesInteractive } from './components/ServicesInteractive';
import { FeaturedService } from './components/FeaturedService';
import { WhyVPT } from './components/WhyVPT';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InternationalPresence } from './components/InternationalPresence';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceCatalogModal } from './components/ServiceCatalogModal';
import { AboutModal } from './components/AboutModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ID');

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<string>('all');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<ServiceItem | string | null>(null);

  const handleOpenCatalog = (categoryId: string = 'all') => {
    setCatalogInitialCategory(categoryId);
    setIsCatalogOpen(true);
  };

  const handleOpenConsultation = (service?: ServiceItem | string) => {
    setConsultationService(service || null);
    setIsConsultationOpen(true);
  };

  // Handler transisi mulus dari breadcrumb ServiceDetailModal kembali ke ServiceCatalogModal
  const handleBackToCategory = (categoryId: string = 'all') => {
    setSelectedService(null);
    setCatalogInitialCategory(categoryId);
    setIsCatalogOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-[#0A192F] font-sans antialiased selection:bg-[#EAF3FA] selection:text-[#112F45]">
      
      {/* 1. Navbar murni langsung di posisi paling atas */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenCatalog={() => handleOpenCatalog('all')}
      />

      {/* 2. Hero Section Utama */}
      <main>
        <HeroPrismaVPT
          currentLang={currentLang}
          onExploreServices={() => handleScrollToSection('services')}
          onTalkToTeam={() => handleScrollToSection('contact')}
          onOpenConsultation={(serviceName) => handleOpenConsultation(serviceName)}
          onOpenCatalog={() => handleOpenCatalog('all')}
        />

        {/* Section: Introduction */}
        <IntroductionSection
          currentLang={currentLang}
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* Section: Interactive Services Directory */}
        <ServicesInteractive
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
          onOpenCatalog={(categoryId) => handleOpenCatalog(categoryId || 'all')}
        />

        {/* Section: Why VPT */}
        <WhyVPT currentLang={currentLang} />

        {/* Section: Process Timeline */}
        <ProcessTimeline currentLang={currentLang} />

        {/* Section: Testimonials */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Section: FAQ */}
        <FaqSection
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section: Final CTA */}
        <FinalCta
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToContact={() => handleScrollToSection('contact')}
        />

        {/* Section: Contact */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenCatalog={() => handleOpenCatalog('all')}
      />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        currentLang={currentLang}
        onClose={() => setSelectedService(null)}
        onRequestConsultation={(srv) => {
          setSelectedService(null);
          handleOpenConsultation(srv);
        }}
        onBackToCategory={handleBackToCategory}
      />

      <ServiceCatalogModal
        isOpen={isCatalogOpen}
        currentLang={currentLang}
        initialCategory={catalogInitialCategory}
        onClose={() => setIsCatalogOpen(false)}
        onSelectService={(srv) => {
          setIsCatalogOpen(false);
          setSelectedService(srv);
        }}
      />

      <AboutModal
        isOpen={isAboutOpen}
        currentLang={currentLang}
        onClose={() => setIsAboutOpen(false)}
        onOpenConsultation={() => {
          setIsAboutOpen(false);
          handleOpenConsultation();
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        initialService={consultationService}
        currentLang={currentLang}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}