import React, { useState } from 'react';
import { Language, ServiceCategory, ServiceItem } from '../types';
import { siteTranslations } from '../data/translations';
import { serviceCategories } from '../data/servicesData';
import { ArrowRight, ChevronRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ServicesInteractiveProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenCatalog: (categoryId?: string) => void;
}

export const ServicesInteractive: React.FC<ServicesInteractiveProps> = ({
  currentLang,
  onSelectService,
  onOpenCatalog,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(serviceCategories[0]);
  const [activeSubCatFilter, setActiveSubCatFilter] = useState<string>('all');
  const [highlightPreview, setHighlightPreview] = useState<boolean>(false);
  const t = siteTranslations.servicesSection;

  const currentActiveCategory = serviceCategories[activeCategoryIndex] || serviceCategories[0];

  const handleRowClick = (cat: ServiceCategory, idx: number) => {
    setActiveCategoryIndex(idx);
    setSelectedCategory(cat);
    setActiveSubCatFilter('all');
  };

  const handleViewCategoryDetails = (cat: ServiceCategory) => {
    setSelectedCategory(cat);
    setActiveSubCatFilter('all');
    setHighlightPreview(true);
    setTimeout(() => {
      setHighlightPreview(false);
    }, 2500);

    const element = document.getElementById('service-preview-panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Available subcategories for the selected category
  const subCategories = React.useMemo(() => {
    const set = new Set<string>();
    selectedCategory.services.forEach(s => {
      if (s.subCategory) {
        set.add(s.subCategory[currentLang] || s.subCategory.ID);
      }
    });
    return Array.from(set);
  }, [selectedCategory, currentLang]);

  const displayedServices = React.useMemo(() => {
    if (activeSubCatFilter === 'all') {
      return selectedCategory.services;
    }
    return selectedCategory.services.filter(
      s => (s.subCategory?.[currentLang] || s.subCategory?.ID) === activeSubCatFilter
    );
  }, [selectedCategory, activeSubCatFilter, currentLang]);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-3">
            COMPREHENSIVE PRACTICE AREAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173A5E] tracking-tight font-sans-corporate leading-tight">
            {t.heading[currentLang]}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B6B7C]">
            {t.subheading[currentLang]}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#2D6A9F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hoverTip[currentLang]}</span>
          </div>
        </div>

        {/* Interactive Service Directory: 7-Row List + Dynamic Preview Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Large Vertical List of 7 Categories */}
          <div className="lg:col-span-7 divide-y divide-[#E8EDF1] border-y border-[#E8EDF1] bg-white rounded-xl shadow-xs overflow-hidden">
            {serviceCategories.map((category, idx) => {
              const isActive = activeCategoryIndex === idx;
              const isPanelSelected = selectedCategory.id === category.id;

              return (
                <div
                  key={category.id}
                  id={`service-row-${category.id}`}
                  onMouseEnter={() => setActiveCategoryIndex(idx)}
                  onClick={() => handleRowClick(category, idx)}
                  className={`group relative p-5 sm:p-6 transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-[#EAF3FA]/80' : 'hover:bg-[#FAF9F6]'
                  }`}
                >
                  {/* Subtle active indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#2D6A9F] transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Number */}
                      <span className={`text-sm sm:text-base font-bold font-mono tracking-wider transition-colors pt-0.5 ${
                        isActive ? 'text-[#2D6A9F]' : 'text-[#5B6B7C]'
                      }`}>
                        {category.number}
                      </span>

                      {/* Category Name & Short Description */}
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-[#173A5E]' : 'text-[#1F2933]'
                        }`}>
                          {category.title[currentLang]}
                        </h3>
                        <p className={`mt-1.5 text-xs sm:text-sm text-[#5B6B7C] line-clamp-2 max-w-lg transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-80'
                        }`}>
                          {category.description[currentLang]}
                        </p>
                      </div>
                    </div>

                    {/* Arrow with micro-interaction */}
                    <div className="shrink-0 pt-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? 'bg-[#173A5E] text-white translate-x-1 shadow-xs'
                          : 'bg-[#EAF3FA] text-[#2D6A9F] group-hover:bg-[#DCECF7]'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Photography & Category Highlight */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-xl overflow-hidden border border-[#E8EDF1] bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAF3FA]">
                <img
                  src={currentActiveCategory.imageUrl}
                  alt={currentActiveCategory.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173A5E]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DCECF7]">
                    CATEGORY {currentActiveCategory.number}
                  </span>
                  <h4 className="text-xl font-bold mt-1 text-white">
                    {currentActiveCategory.title[currentLang]}
                  </h4>
                </div>
              </div>

              {/* Quick Summary Box */}
              <div className="p-5 bg-white border-t border-[#E8EDF1]">
                <p className="text-xs text-[#5B6B7C] leading-relaxed">
                  {currentActiveCategory.description[currentLang]}
                </p>
                
                <div className="mt-4 pt-3 border-t border-[#E8EDF1] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#173A5E]">
                    {currentActiveCategory.services.length} Specialized Solutions
                  </span>
                  <button
                    type="button"
                    id={`btn-view-category-details-${currentActiveCategory.id}`}
                    onClick={() => handleViewCategoryDetails(currentActiveCategory)}
                    className="text-xs font-bold text-white bg-[#173A5E] hover:bg-[#2D6A9F] px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer"
                  >
                    <span>
                      {currentLang === 'ID'
                        ? 'Lihat Daftar Layanan'
                        : currentLang === 'JP'
                        ? 'サービス一覧を見る'
                        : 'View Category Details'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 8: SERVICE CATEGORY PREVIEW PANEL */}
        <div
          id="service-preview-panel"
          className={`mt-12 bg-white rounded-2xl border p-6 sm:p-8 lg:p-10 shadow-xs scroll-mt-28 transition-all duration-500 ${
            highlightPreview
              ? 'border-[#2D6A9F] ring-4 ring-[#2D6A9F]/20 shadow-md'
              : 'border-[#E8EDF1]'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8EDF1]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B99A5C]">
                PREVIEWING DIRECTORY
              </span>
              <h3 className="text-2xl font-bold text-[#173A5E] mt-1">
                {selectedCategory.title[currentLang]}
              </h3>
            </div>
            
            <button
              type="button"
              id="btn-explore-all-catalog"
              onClick={() => onOpenCatalog(selectedCategory.id)}
              className="inline-flex items-center text-xs font-bold text-[#2D6A9F] hover:text-[#173A5E] uppercase tracking-wider self-start sm:self-auto bg-[#EAF3FA] px-4 py-2 rounded-lg"
            >
              <span>{t.exploreAllServices[currentLang]}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Subcategory Pills if applicable */}
          {subCategories.length > 0 && (
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveSubCatFilter('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                  activeSubCatFilter === 'all'
                    ? 'bg-[#173A5E] text-white shadow-xs'
                    : 'bg-[#FAF9F6] border border-[#E8EDF1] text-[#5B6B7C] hover:text-[#173A5E]'
                }`}
              >
                All ({selectedCategory.services.length})
              </button>
              {subCategories.map((sub) => {
                const count = selectedCategory.services.filter(
                  s => (s.subCategory?.[currentLang] || s.subCategory?.ID) === sub
                ).length;
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setActiveSubCatFilter(sub)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                      activeSubCatFilter === sub
                        ? 'bg-[#2D6A9F] text-white shadow-xs'
                        : 'bg-[#FAF9F6] border border-[#E8EDF1] text-[#5B6B7C] hover:text-[#173A5E]'
                    }`}
                  >
                    {sub} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Clean List of Services in this Category */}
          <div className="mt-6 divide-y divide-[#E8EDF1]">
            {displayedServices.slice(0, 10).map((service) => (
              <div
                key={service.id}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {service.code && (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#173A5E] text-white shadow-2xs">
                        {service.code}
                      </span>
                    )}
                    {service.subCategory && (
                      <span className="text-[10px] font-semibold text-[#2D6A9F] bg-[#EAF3FA] px-2 py-0.5 rounded">
                        {service.subCategory[currentLang] || service.subCategory.ID}
                      </span>
                    )}
                    <h4 className="text-base font-bold text-[#173A5E] group-hover:text-[#2D6A9F] transition-colors">
                      {service.name[currentLang]}
                    </h4>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#5B6B7C] bg-[#EAF3FA] px-2 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-[#2D6A9F]" />
                      {service.duration[currentLang]}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6B7C] max-w-2xl">
                    {service.shortDescription[currentLang]}
                  </p>
                </div>

                <button
                  type="button"
                  id={`btn-view-details-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center justify-center shrink-0 px-4 py-2 text-xs font-bold text-[#173A5E] group-hover:text-white bg-[#EAF3FA] group-hover:bg-[#173A5E] rounded-md transition-all shadow-2xs"
                >
                  <span>{t.viewDetails[currentLang]}</span>
                </button>
              </div>
            ))}
          </div>

          {displayedServices.length > 10 && (
            <div className="mt-6 pt-4 border-t border-[#E8EDF1] flex items-center justify-between">
              <span className="text-xs text-[#5B6B7C]">
                Showing 10 of {displayedServices.length} specialized services in this section
              </span>
              <button
                type="button"
                onClick={() => onOpenCatalog(selectedCategory.id)}
                className="text-xs font-bold text-[#2D6A9F] hover:text-[#173A5E] inline-flex items-center"
              >
                <span>View All {displayedServices.length} in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
