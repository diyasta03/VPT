import React from 'react';
import { Language, ServiceItem } from '../types';
import { siteTranslations } from '../data/translations';
import { serviceCategories } from '../data/servicesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeaturedServiceProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const FeaturedService: React.FC<FeaturedServiceProps> = ({
  currentLang,
  onSelectService,
}) => {
  const t = siteTranslations.featured;
  const workingVisaService = serviceCategories[0].services[0]; // Working Visa & ITAS

  return (
    <section className="py-20 bg-white border-y border-[#E8EDF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visually Strong Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E8EDF1] shadow-md bg-[#FAF9F6]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Expatriate corporate director and specialist working in modern Indonesian office"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Subtle floating feature badge */}
            <div className="absolute -bottom-5 right-6 sm:right-10 bg-white border border-[#E8EDF1] p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EAF3FA] flex items-center justify-center text-[#2D6A9F] shrink-0 font-bold text-sm">
                  E23
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#B99A5C] block">
                    GOVERNMENT STATUS
                  </span>
                  <p className="text-xs font-bold text-[#173A5E]">
                    Standard Indonesian Expat Work Visa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] mb-3 block">
              {t.eyebrow[currentLang]}
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173A5E] tracking-tight mb-4 font-sans-corporate">
              {t.title[currentLang]}
            </h2>

            <p className="text-base text-[#5B6B7C] leading-relaxed mb-8">
              {t.description[currentLang]}
            </p>

            {/* Simple Process: 01 Consultation, 02 Documentation, 03 Application, 04 Completion */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F2933] block mb-4">
                STREAMLINED EXECUTION PATHWAY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.steps.map((step) => (
                  <div
                    key={step.num}
                    className="bg-[#EAF3FA] rounded-lg p-3.5 border border-[#DCECF7] text-center sm:text-left"
                  >
                    <span className="text-xs font-mono font-bold text-[#2D6A9F] block mb-1">
                      {step.num}
                    </span>
                    <span className="text-xs font-bold text-[#173A5E] block leading-tight">
                      {step.name[currentLang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Checklist */}
            <div className="mb-8 space-y-2.5">
              {[
                currentLang === 'JP'
                  ? "労働省外国人雇用認可（RPTKA）の適格職種コード選定"
                  : currentLang === 'ID'
                  ? "Pengesahan RPTKA Kemnaker & Pembayaran DKP-TKA resmi"
                  : "Guaranteed RPTKA approval & skill development fund compliance",
                currentLang === 'JP'
                  ? "入国管理局での生体認証（指紋・顔写真）専任スタッフ同行"
                  : currentLang === 'ID'
                  ? "Pendampingan sesi biometrik di kantor imigrasi setempat"
                  : "Accompanied biometric registration at local immigration offices",
                currentLang === 'JP'
                  ? "入国後の外国人仮住民票（SKTT）および警察届（STM）一括付帯"
                  : currentLang === 'ID'
                  ? "Layanan lengkap mencakup pendaftaran Dukcapil SKTT & STM Kepolisian"
                  : "Includes subsequent civil registration (SKTT) and police notification (STM)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#1F2933]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A9F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                id="btn-featured-explore"
                onClick={() => onSelectService(workingVisaService)}
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold tracking-wider uppercase text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs group"
              >
                <span>{t.cta[currentLang]}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
