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
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-2">
            {currentLang === 'ID'
              ? 'Reputasi & Kepercayaan Klien'
              : currentLang === 'JP'
              ? 'クライアントの信頼と実績'
              : 'Client Discretion & Endorsement'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate">
            {t.heading[currentLang]}
          </h2>
        </div>

        {/* Editorial Single Large Testimonial Presentation */}
        <div className="bg-white rounded-2xl border border-[#CBDCE9] p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(10,25,47,0.04)] relative overflow-hidden">
          
          {/* Abstract background watermark symbol */}
          <div className="absolute top-6 right-8 opacity-5 select-none pointer-events-none text-[#112F45]">
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
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6 text-[#1F4E79]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Large Editorial Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl text-[#0A192F] font-medium leading-relaxed font-serif-editorial mb-8">
                “{activeTestimonial.quote[currentLang]}”
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#E2EAF1]">
                <div className="flex items-center gap-4">
                  {/* Abstract silhouette corporate monogram */}
                  <div className="w-12 h-12 rounded-full bg-[#112F45]/10 border border-[#CBDCE9] flex items-center justify-center text-[#112F45]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0A192F]">
                      — {activeTestimonial.role[currentLang]}
                    </h3>
                    <p className="text-xs text-[#4A5D73]">
                      {activeTestimonial.companyType[currentLang]} • {activeTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-[#CBDCE9] bg-white hover:bg-[#112F45]/5 text-[#112F45] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-mono font-bold text-[#4A5D73] px-2">
                    0{currentIndex + 1} / 0{testimonialsData.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-[#CBDCE9] bg-white hover:bg-[#112F45]/5 text-[#112F45] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          
        </div>

      </div>
    </section>
  );
};