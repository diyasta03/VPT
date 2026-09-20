import React, { useState } from 'react';
import { Language } from '../types';
import { faqData } from '../data/websiteContent';
import { siteTranslations } from '../data/translations';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqSectionProps {
  currentLang: Language;
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang, onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = siteTranslations.faq;

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headings & Direct Support Callout */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
              {currentLang === 'ID'
                ? 'Klarifikasi & Pertanyaan Umum'
                : currentLang === 'JP'
                ? 'よくあるご質問・法的解釈'
                : 'Regulatory Clarifications'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate leading-[1.12]">
              <span>{t.title[currentLang]}</span> <br />
              <span className="font-serif-editorial italic font-normal text-[#1F4E79]">
                {t.subtitle[currentLang]}
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#4A5D73] leading-relaxed">
              {t.helpNote[currentLang]}
            </p>

            <div className="mt-8">
              <button
                type="button"
                id="faq-ask-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-xl transition-colors shadow-xs group cursor-pointer"
              >
                <span>{t.askBtn[currentLang]}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-12 p-4 bg-white rounded-2xl border border-[#CBDCE9] shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#112F45]/10 flex items-center justify-center text-[#112F45] shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#0A192F]">
                    {currentLang === 'ID'
                      ? 'Konsultasi Langsung Tersedia'
                      : currentLang === 'JP'
                      ? '専門コンサルタントによる個別対応'
                      : 'Direct Counsel Available'}
                  </h3>
                  <p className="text-[11px] text-[#4A5D73]">
                    {currentLang === 'ID'
                      ? 'Rata-rata respons: di bawah 2 jam kerja'
                      : currentLang === 'JP'
                      ? '平均応答時間：2営業時間以内'
                      : 'Average response: under 2 business hours'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Smooth Accordion with 7 Core Questions */}
          <div className="lg:col-span-7 divide-y divide-[#E2EAF1] bg-white rounded-2xl border border-[#CBDCE9] p-6 sm:p-8 shadow-xs">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-start justify-between text-left gap-4 py-2 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0A192F] group-hover:text-[#1F4E79] transition-colors">
                      {item.question[currentLang]}
                    </span>
                    <span className="shrink-0 mt-1 w-6 h-6 rounded-full bg-[#112F45]/10 group-hover:bg-[#112F45]/20 text-[#112F45] flex items-center justify-center transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 pb-3 text-xs sm:text-sm text-[#4A5D73] leading-relaxed">
                          {item.answer[currentLang]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};