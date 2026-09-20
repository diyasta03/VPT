import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { Globe, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const t = siteTranslations.nav;

  const navLinks = [
    { id: "about", label: t.about[currentLang], href: "#about", onClick: onOpenAbout },
    { id: "services", label: t.services[currentLang], href: "#services" },
    { id: "why-vpt", label: t.whyVpt[currentLang], href: "#why-vpt" },
    { id: "process", label: t.process[currentLang], href: "#process" },
    { id: "testimonials", label: t.testimonials[currentLang], href: "#testimonials" },
    { id: "faq", label: t.faq[currentLang], href: "#faq" },
    { id: "contact", label: t.contact[currentLang], href: "#contact" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 160;
      const sectionIds = navLinks.map((item) => item.id);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
      setMobileMenuOpen(false);
      return;
    }

    const targetEl = document.getElementById(link.id);
    if (targetEl) {
      e.preventDefault();
      const navbarHeight = 85;
      const targetPosition = targetEl.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setActiveSection(link.id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 sm:px-4 lg:px-8 pt-2 sm:pt-4 pointer-events-none">
      {/* Frosted Translucent Glass Container */}
      <div 
        className={`w-full max-w-[1360px] mx-auto rounded-2xl sm:rounded-full transition-all duration-500 ease-out border pointer-events-auto backdrop-blur-2xl ${
          scrolled
            ? 'bg-white/75 border-white/70 shadow-[0_16px_36px_-12px_rgba(10,25,47,0.14),0_0_0_1px_rgba(255,255,255,0.4)_inset] py-2 sm:py-2.5 px-3 sm:px-5 lg:px-7'
            : 'bg-white/50 border-white/50 shadow-[0_8px_24px_-8px_rgba(10,25,47,0.06),0_0_0_1px_rgba(255,255,255,0.6)_inset] py-2.5 sm:py-3 px-3 sm:px-5 lg:px-7'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          
            {/* 1. SISI KIRI: Logo Brand (Bisa shrink secara halus bila ruang sempit) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('hero');
            }}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink min-w-0"
            aria-label="Visa Pro Technology Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden flex items-center justify-center bg-white/70 backdrop-blur-md border border-white/80 p-1 shadow-2xs transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/logo.png"
                alt="Visa Pro Technology"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] sm:text-[16px] lg:text-[17px] font-extrabold tracking-tight text-[#0A192F] leading-none font-sans-corporate truncate">
                VISA PRO <span className="font-light text-[#1F4E79]">TEKNOLOGI</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.14em] uppercase text-[#4A5D73] font-semibold mt-1 hidden sm:block truncate">
                Visa & Immigration Consulting
              </span>
            </div>
          </a>


          {/* 2. SISI TENGAH: Translucent Nav Capsule */}
          <nav className="hidden 2xl:flex items-center justify-center flex-1 max-w-3xl mx-3">
            <div className="flex items-center justify-between w-full p-1 rounded-full bg-slate-900/[0.04] backdrop-blur-md border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredIdx === idx;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative flex-1 text-center px-3 py-1.5 text-[12.5px] font-medium transition-colors rounded-full whitespace-nowrap ${
                      isActive
                        ? 'text-[#0A192F] font-semibold'
                        : 'text-[#4A5D73] hover:text-[#0A192F]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionIndicator"
                        className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.8)_inset] -z-10"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}

                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-white/50 rounded-full -z-10"
                        transition={{ duration: 0.15 }}
                      />
                    )}

                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* 3. SISI KANAN: Controls & Aksi */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto 2xl:ml-0">
            {/* Language Switcher Semi-Transparan */}
            <div className="hidden sm:flex items-center bg-slate-900/[0.04] backdrop-blur-md rounded-full p-0.5 border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]">
              <Globe className="w-3.5 h-3.5 text-[#1F4E79] ml-1.5 mr-0.5 opacity-80" />
              {(['EN', 'ID', 'JP'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onSelectLang(lang)}
                  className={`px-2 py-0.5 text-[10.5px] font-bold rounded-full transition-all cursor-pointer ${
                    currentLang === lang
                      ? 'bg-white/90 text-[#0A192F] shadow-xs'
                      : 'text-[#64748B] hover:text-[#0A192F]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Katalog Button (Hanya tampil di layar sangat lebar agar tidak menekan tombol konsultasi) */}
            <button
              onClick={onOpenCatalog}
              type="button"
              className="hidden xl:inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#16425B] hover:text-[#0A192F] px-2.5 py-1.5 rounded-full hover:bg-white/40 backdrop-blur-sm transition-all cursor-pointer shrink-0"
            >
              <Compass className="w-3.5 h-3.5 text-[#1F4E79]" />
              <span className="whitespace-nowrap">{t.catalog[currentLang]}</span>
            </button>

            {/* Tombol Konsultasi (Auto-fit & Anti-Overflow) */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className={`group relative inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full text-white bg-[#112F45]/95 hover:bg-[#0C2436] backdrop-blur-md shadow-[0_4px_16px_rgba(17,47,69,0.3),0_0_0_1px_rgba(255,255,255,0.15)_inset] active:scale-95 transition-all cursor-pointer shrink-0 max-w-[170px] sm:max-w-none ${
                currentLang === 'JP'
                  ? 'px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[10.5px] sm:text-[11px] font-bold tracking-tight'
                  : 'px-3 sm:px-4 py-1.5 sm:py-2 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider'
              }`}
            >
              <span className="truncate whitespace-nowrap">{t.consultation[currentLang]}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Hamburger Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-1.5 sm:p-2 text-[#0A192F] rounded-xl sm:rounded-full bg-white/50 backdrop-blur-md border border-white/60 hover:bg-white/80 active:scale-95 transition-all cursor-pointer ml-0.5 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Translucent Frosted Sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="2xl:hidden fixed inset-x-2.5 sm:inset-x-5 top-16 sm:top-20 z-50 max-h-[82vh] flex flex-col rounded-3xl bg-white/85 backdrop-blur-3xl border border-white/80 shadow-[0_20px_50px_rgba(10,25,47,0.18),0_0_0_1px_rgba(255,255,255,0.5)_inset] overflow-hidden pointer-events-auto"
          >
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between py-3 px-4 rounded-2xl text-[14.5px] font-semibold transition-all ${
                      isActive
                        ? 'bg-[#112F45] text-white shadow-xs'
                        : 'text-[#2B3B4E] hover:text-[#0A192F] hover:bg-white/50 active:bg-white/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </a>
                );
              })}
            </div>

            <div className="p-4 border-t border-white/50 bg-white/40 backdrop-blur-md flex flex-col gap-2.5 shrink-0">
              <div className="flex items-center justify-center gap-1.5 bg-white/60 backdrop-blur-sm p-1.5 rounded-2xl border border-white/80 shadow-2xs">
                {(['EN', 'ID', 'JP'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => onSelectLang(lang)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      currentLang === lang
                        ? 'bg-white text-[#0A192F] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#16425B] bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white rounded-xl transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#1F4E79]" />
                <span>{t.catalog[currentLang]}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45]/95 hover:bg-[#0C2436] rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>{t.consultation[currentLang]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};