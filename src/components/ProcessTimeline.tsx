import React, { useState } from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';

interface ProcessTimelineProps {
  currentLang: Language;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ currentLang }) => {
  const t = siteTranslations.process;
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
            {currentLang === 'ID'
              ? 'Prosedur & Alur Kerja'
              : currentLang === 'JP'
              ? '業務プロセス'
              : 'Methodical Rigor'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate">
            {t.heading[currentLang]}
          </h2>
          <p className="mt-4 text-base text-[#4A5D73]">
            {t.subheading[currentLang]}
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline (hidden on small screens) */}
        <div className="hidden lg:block relative mb-12">
          
          {/* Thin connecting line */}
          <div className="absolute top-7 left-12 right-12 h-0.5 bg-[#CBDCE9] -z-0" />
          
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {t.steps.map((step, idx) => {
              const isHoveredOrActive = activeStep === idx;
              
              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="group cursor-pointer flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200"
                >
                  {/* Step Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 border-2 ${
                      isHoveredOrActive
                        ? 'bg-[#112F45] text-white border-[#112F45] shadow-sm scale-110'
                        : 'bg-white text-[#5E7287] border-[#CBDCE9] group-hover:border-[#1F4E79] group-hover:text-[#1F4E79]'
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Step Title */}
                  <h3 className={`mt-4 text-base font-bold transition-colors ${
                    isHoveredOrActive ? 'text-[#0A192F]' : 'text-[#5E7287]'
                  }`}>
                    {step.title[currentLang]}
                  </h3>

                  {/* Short Description */}
                  <p className={`mt-2 text-xs text-[#4A5D73] leading-relaxed transition-opacity duration-200 ${
                    isHoveredOrActive ? 'opacity-100 font-medium text-[#0A192F]' : 'opacity-80'
                  }`}>
                    {step.desc[currentLang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#CBDCE9] space-y-8 max-w-lg mx-auto">
          {t.steps.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#1F4E79] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#112F45]" />
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#CBDCE9] shadow-2xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#1F4E79]">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0A192F]">
                    {step.title[currentLang]}
                  </h3>
                </div>
                <p className="text-xs text-[#4A5D73] leading-relaxed mt-2">
                  {step.desc[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};