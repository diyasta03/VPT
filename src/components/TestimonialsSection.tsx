import React, { useState } from 'react';
import { Language } from '../types';
import { testimonialsData } from '../data/websiteContent';
import { siteTranslations } from '../data/translations';
import { Star, ChevronLeft, ChevronRight, Shield, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = siteTranslations.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E8EDF1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-2">
            CLIENT DISCRETION & ENDORSEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173A5E] tracking-tight font-sans-corporate">
            {t.heading[currentLang]}
          </h2>
        </div>

        {/* Editorial Single Large Testimonial Presentation */}
        <div className="bg-white rounded-2xl border border-[#E8EDF1] p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(23,58,94,0.03)] relative overflow-hidden">
          
          {/* Abstract background watermark symbol */}
          <div className="absolute top-6 right-8 opacity-5 select-none pointer-events-none text-[#173A5E]">
            <Building2 className="w-48 h-48" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              {/* Star Rating (5 Stars in Muted Gold) */}
              <div className="flex items-center gap-1.5 mb-6 text-[#B99A5C]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Large Editorial Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl text-[#173A5E] font-medium leading-relaxed font-serif-editorial mb-8">
                “{activeTestimonial.quote[currentLang]}”
              </blockquote>

              {/* Attribution (No fake names, strictly professional role & general company type) */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#E8EDF1]">
                <div className="flex items-center gap-4">
                  {/* Abstract silhouette corporate monogram */}
                  <div className="w-12 h-12 rounded-full bg-[#EAF3FA] border border-[#DCECF7] flex items-center justify-center text-[#2D6A9F]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#173A5E]">
                      — {activeTestimonial.role[currentLang]}
                    </h3>
                    <p className="text-xs text-[#5B6B7C]">
                      {activeTestimonial.companyType[currentLang]} • {activeTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-[#E8EDF1] bg-[#FAF9F6] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-mono font-bold text-[#5B6B7C] px-2">
                    0{currentIndex + 1} / 0{testimonialsData.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-[#E8EDF1] bg-[#FAF9F6] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Confidentiality Mandate Notice */}
          <div className="mt-8 pt-4 border-t border-[#FAF9F6] flex items-center gap-2 text-xs text-[#5B6B7C]">
            <Shield className="w-3.5 h-3.5 text-[#B99A5C] shrink-0" />
            <p className="italic">{t.confidentialNote[currentLang]}</p>
          </div>

        </div>

      </div>
    </section>
  );
};
