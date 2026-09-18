import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  currentLang: Language;
  onOpenConsultation: () => void;
  onScrollToContact: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  currentLang,
  onOpenConsultation,
  onScrollToContact,
}) => {
  const t = siteTranslations.finalCta;

  return (
    <section className="py-20 lg:py-28 bg-[#EAF3FA] relative overflow-hidden border-b border-[#DCECF7]">
      
      {/* Subtle architectural abstract graphic overlay */}
      <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-[#DCECF7]/50 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-white/60 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-4">
          SEAMLESS ONBOARDING & MIGRATION
        </span>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173A5E] tracking-tight font-sans-corporate mb-6 leading-tight">
          {t.headline[currentLang]}
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#5B6B7C] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.subtext[currentLang]}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            type="button"
            id="final-cta-request-btn"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-all shadow-md hover:shadow-lg group"
          >
            <span>{t.primaryBtn[currentLang]}</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            id="final-cta-contact-btn"
            onClick={onScrollToContact}
            className="inline-flex items-center justify-center px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#173A5E] bg-white hover:bg-[#FAF9F6] border border-[#DCECF7] rounded-lg transition-colors shadow-2xs"
          >
            <PhoneCall className="w-4 h-4 mr-2 text-[#2D6A9F]" />
            <span>{t.secondaryBtn[currentLang]}</span>
          </button>
        </div>

        {/* Reassurance notes */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#5B6B7C]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
            <span>No Obligation Advisory</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
            <span>Strict NDA Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
            <span>Dedicated Japanese Desk</span>
          </div>
        </div>

      </div>
    </section>
  );
};
