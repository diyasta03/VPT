import React, { useState } from 'react';
import { Language, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroVPT } from './components/HeroVPT';
import { HeroPrismaVPT } from './components/HeroPrismaVPT';
import DemoOne from '../components/ui/demo';
import HeroSectionDemo from '../components/ui/hero-section-demo';
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
import { Layers } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [heroStyle, setHeroStyle] = useState<'prisma-vpt' | 'editorial' | 'prisma-original' | 'split-clip'>('prisma-vpt');

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

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2933] font-sans antialiased selection:bg-[#EAF3FA] selection:text-[#173A5E]">
      
      {/* Top Banner with Hero Style Selector */}
      <div className="bg-[#173A5E] text-white text-[11px] py-1.5 px-4 border-b border-[#2D6A9F]/40 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5C] animate-pulse" />
          <span className="font-semibold tracking-wider">
            VISA PRO TECHNOLOGY • INDONESIAN CORPORATE & IMMIGRATION COUNSEL
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="w-3 h-3 text-[#DCECF7]" />
          <span className="hidden sm:inline text-[#DCECF7]">Hero Concept:</span>
          <div className="inline-flex rounded-full bg-[#122A44] p-0.5 border border-[#2D6A9F]/40 flex-wrap">
            <button
              type="button"
              onClick={() => setHeroStyle('prisma-vpt')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                heroStyle === 'prisma-vpt' ? 'bg-[#B99A5C] text-[#0E1E30]' : 'text-[#DCECF7] hover:text-white'
              }`}
            >
              Prisma VPT ✨
            </button>
            <button
              type="button"
              onClick={() => setHeroStyle('editorial')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                heroStyle === 'editorial' ? 'bg-[#2D6A9F] text-white' : 'text-[#DCECF7] hover:text-white'
              }`}
            >
              Editorial Light
            </button>
            <button
              type="button"
              onClick={() => setHeroStyle('prisma-original')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                heroStyle === 'prisma-original' ? 'bg-[#2D6A9F] text-white' : 'text-[#DCECF7] hover:text-white'
              }`}
            >
              Prisma Raw Demo
            </button>
            <button
              type="button"
              onClick={() => setHeroStyle('split-clip')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                heroStyle === 'split-clip' ? 'bg-[#2D6A9F] text-white' : 'text-[#DCECF7] hover:text-white'
              }`}
            >
              Split-Clip
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenCatalog={() => handleOpenCatalog('all')}
      />

      {/* Hero Section (Toggleable between Prisma VPT, Editorial Light, Prisma Raw Demo, and Split-Clip) */}
      <main>
        {heroStyle === 'prisma-vpt' ? (
          <HeroPrismaVPT
            currentLang={currentLang}
            onExploreServices={() => handleScrollToSection('services')}
            onTalkToTeam={() => handleScrollToSection('contact')}
            onOpenConsultation={(serviceName) => handleOpenConsultation(serviceName)}
            onOpenCatalog={() => handleOpenCatalog('all')}
          />
        ) : heroStyle === 'editorial' ? (
          <HeroVPT
            currentLang={currentLang}
            onExploreServices={() => handleScrollToSection('services')}
            onTalkToTeam={() => handleScrollToSection('contact')}
            onOpenConsultation={(serviceName) => handleOpenConsultation(serviceName)}
          />
        ) : heroStyle === 'prisma-original' ? (
          <div className="pt-24 px-4 pb-12 bg-[#000] text-white">
            <DemoOne />
          </div>
        ) : (
          <div className="pt-24 bg-[#FAF9F6]">
            <HeroSectionDemo />
          </div>
        )}

        {/* Section 6: Introduction */}
        <IntroductionSection
          currentLang={currentLang}
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        {/* Section 7 & 8: Interactive Services Directory & Category Preview */}
        <ServicesInteractive
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
          onOpenCatalog={(categoryId) => handleOpenCatalog(categoryId || 'all')}
        />

        {/* Section 9: Featured Service (Working Visa & ITAS) */}
        <FeaturedService
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Section 10: Why VPT */}
        <WhyVPT currentLang={currentLang} />

        {/* Section 11: Process Timeline */}
        <ProcessTimeline currentLang={currentLang} />

        {/* Section 12: Testimonials */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Section 13: International Presence */}
        <InternationalPresence currentLang={currentLang} />

        {/* Section 14: FAQ */}
        <FaqSection
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 15: Final CTA */}
        <FinalCta
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToContact={() => handleScrollToSection('contact')}
        />

        {/* Section 16: Contact */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Section 20: Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
      />

      {/* Modals */}
      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        currentLang={currentLang}
        onClose={() => setSelectedService(null)}
        onRequestConsultation={(srv) => {
          setSelectedService(null);
          handleOpenConsultation(srv);
        }}
      />

      {/* Service Catalog Discovery Modal */}
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

      {/* Storytelling About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        currentLang={currentLang}
        onClose={() => setIsAboutOpen(false)}
        onOpenConsultation={() => {
          setIsAboutOpen(false);
          handleOpenConsultation();
        }}
      />

      {/* Consultation & Quick Audit Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        initialService={consultationService}
        currentLang={currentLang}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}
