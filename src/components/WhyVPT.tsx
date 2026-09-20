import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { motion } from 'framer-motion';

interface WhyVPTProps {
  currentLang: Language;
}

export const WhyVPT: React.FC<WhyVPTProps> = ({ currentLang }) => {
  const t = siteTranslations.whyVpt;

  return (
    <section id="why-vpt" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
  {currentLang === 'ID'
    ? 'Keunggulan Strategis'
    : currentLang === 'JP'
    ? '戦略的優位性'
    : 'Strategic Advantage'}
</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate leading-[1.14]">
            <span>{t.heading1[currentLang]}</span> <br />
            <span className="font-serif-editorial italic font-normal text-[#1F4E79]">
              {t.heading2[currentLang]}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5D73]">
            {t.sub[currentLang]}
          </p>
        </div>

        {/* Instead of 5 generic cards: Large Typographic Editorial Items */}
        <div className="divide-y divide-[#E2EAF1] border-y border-[#E2EAF1]">
          {t.items.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-[#F0F5FA]/60 px-4 -mx-4 rounded-xl transition-colors"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1F4E79] tracking-wider block">
                  {item.num}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#16425B]">
                  PILLAR {item.num}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] group-hover:text-[#1F4E79] transition-colors font-sans-corporate">
                  {item.title[currentLang]}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[#4A5D73] leading-relaxed">
                  {item.desc[currentLang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};