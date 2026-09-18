import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { Check, Compass } from 'lucide-react';

interface InternationalPresenceProps {
  currentLang: Language;
}

export const InternationalPresence: React.FC<InternationalPresenceProps> = ({ currentLang }) => {
  const t = siteTranslations.presence;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E8EDF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Visual Photography with Overlaid Light Info Panel */}
        <div className="relative rounded-2xl overflow-hidden border border-[#E8EDF1] shadow-md">
          
          {/* Main Background Photograph: High-Res Jakarta Modern Skyline & Business Hub */}
          <div className="h-[460px] sm:h-[520px] lg:h-[580px] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Jakarta central business district and modern financial towers"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle light gradient wash to protect readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 lg:to-transparent" />
          </div>

          {/* Overlaid Subtle Blue / White Information Panel */}
          <div className="absolute inset-y-0 left-0 max-w-xl lg:max-w-2xl p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#E8EDF1] shadow-xl">
              
              <div className="inline-flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-[#2D6A9F]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D6A9F]">
                  NATIONWIDE JURISDICTION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#173A5E] tracking-tight leading-tight font-sans-corporate mb-4">
                {t.headline[currentLang]}
              </h2>

              <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed mb-6">
                {t.sub[currentLang]}
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8EDF1] mb-6">
                <div>
                  <span className="text-2xl font-extrabold text-[#173A5E] block font-mono">
                    {t.stat1.num}
                  </span>
                  <span className="text-xs text-[#5B6B7C] font-medium">
                    {t.stat1.label[currentLang]}
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#173A5E] block font-mono">
                    {t.stat2.num}
                  </span>
                  <span className="text-xs text-[#5B6B7C] font-medium">
                    {t.stat2.label[currentLang]}
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#2D6A9F] block font-mono">
                    {t.stat3.num}
                  </span>
                  <span className="text-xs text-[#5B6B7C] font-medium">
                    {t.stat3.label[currentLang]}
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#B99A5C] block font-mono">
                    {t.stat4.num}
                  </span>
                  <span className="text-xs text-[#5B6B7C] font-medium">
                    {t.stat4.label[currentLang]}
                  </span>
                </div>
              </div>

              {/* Dedicated Japanese Desk Highlight */}
              <div className="p-3.5 bg-[#EAF3FA] rounded-xl border border-[#DCECF7]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#2D6A9F]" />
                  <h3 className="text-xs font-bold text-[#173A5E]">
                    {t.japanDesk.title[currentLang]}
                  </h3>
                </div>
                <p className="text-[11px] text-[#5B6B7C] leading-normal">
                  {t.japanDesk.desc[currentLang]}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
