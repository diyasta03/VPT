import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenConsultation: () => void;
  onOpenAbout: () => void;
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenConsultation,
  onOpenAbout,
  onOpenCatalog,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = siteTranslations.nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.about[currentLang], href: "#about", onClick: onOpenAbout },
    { label: t.services[currentLang], href: "#services" },
    { label: t.whyVpt[currentLang], href: "#why-vpt" },
    { label: t.process[currentLang], href: "#process" },
    { label: t.testimonials[currentLang], href: "#testimonials" },
    { label: t.faq[currentLang], href: "#faq" },
    { label: t.contact[currentLang], href: "#contact" },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-b border-[#E8EDF1] py-3.5'
          : 'bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Visa Pro Technology Home"
          >
  <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-white">
  <img
    src="/logo.png"
    alt="Visa Pro Technology"
    className="w-full h-full object-contain"
  />
</div>
            <div className="flex flex-col">
              <span className="text-[17px] font-extrabold tracking-tight text-[#173A5E] leading-none font-sans-corporate">
                VISA PRO <span className="font-light text-[#2D6A9F]">TECHNOLOGY</span>
              </span>
              <span className="text-[10px] tracking-[0.14em] uppercase text-[#5B6B7C] font-semibold mt-1">
                Immigration & Corporate Legal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="px-3 py-1.5 text-[14px] font-medium text-[#1F2933] hover:text-[#2D6A9F] transition-colors rounded-md hover:bg-[#EAF3FA]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Language Switcher & Consultation CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#EAF3FA] rounded-full p-1 border border-[#DCECF7]">
              <Globe className="w-3.5 h-3.5 text-[#2D6A9F] ml-1.5 mr-1" />
              {(['EN', 'ID', 'JP'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onSelectLang(lang)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    currentLang === lang
                      ? 'bg-white text-[#173A5E] shadow-xs'
                      : 'text-[#5B6B7C] hover:text-[#173A5E]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Catalog Button */}
            <button
              onClick={onOpenCatalog}
              type="button"
              className="text-xs font-semibold text-[#2D6A9F] hover:text-[#173A5E] px-2.5 py-2 transition-colors"
            >
              {t.catalog[currentLang]}
            </button>

            {/* Primary Consultation Button */}
            <button
              type="button"
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs group"
            >
              <span>{t.consultation[currentLang]}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center bg-[#EAF3FA] rounded-full p-0.5 border border-[#DCECF7]">
              {(['EN', 'ID', 'JP'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onSelectLang(lang)}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
                    currentLang === lang
                      ? 'bg-white text-[#173A5E]'
                      : 'text-[#5B6B7C]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#173A5E] rounded-md hover:bg-[#EAF3FA]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8EDF1] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="block py-2.5 text-[15px] font-medium text-[#1F2933] border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#2D6A9F] bg-[#EAF3FA] rounded-md"
              >
                {t.catalog[currentLang]}
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] rounded-md shadow-xs"
              >
                {t.consultation[currentLang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
