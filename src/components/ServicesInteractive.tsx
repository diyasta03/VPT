import React from 'react';
import { Language, ServiceCategory, ServiceItem } from '../types';
import { serviceCategories } from '../data/servicesData';
import { siteTranslations } from '../data/translations';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface ServicesInteractiveProps {
  currentLang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation?: (serviceName?: string) => void;
  onOpenCatalog: (categoryId?: string) => void;
}

// Visual foto, bendera, dan badge untuk 7 kategori resmi
const categoryVisualMap: Record<number, { img: string;  badge: string }> = {
  0: {
    badge: 'ITAS & TKA',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  1: {
    badge: 'C & D SERIES',
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  },
  2: {
    badge: 'OUTBOUND',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  },
  3: {
    badge: 'PT PMA / OSS',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  4: {
    badge: 'CIVIL & EPO',
    img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
  },
  5: {
    badge: 'VIP PRIORITY',
    img: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=800&q=80',
  },
  6: {
    badge: 'TRAVEL ADDONS',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
  },
};

export const ServicesInteractive: React.FC<ServicesInteractiveProps> = ({
  currentLang,
  onOpenCatalog,
}) => {
  const t = siteTranslations.servicesSection;

  // Aksi Klik: Membuka Popup Katalog dan langsung menuju kategori yang dipilih
  const handleDetailClick = (e: React.MouseEvent, category: ServiceCategory) => {
    e.stopPropagation();
    if (typeof onOpenCatalog === 'function') {
      onOpenCatalog(category.id);
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1F4E79]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#112F45]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
  {currentLang === 'ID'
    ? 'Layanan'
    : currentLang === 'JP'
    ? 'サービス'
    : 'Services'}
</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight leading-tight">
              {t.heading[currentLang]}
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#4A5D73]">
              {t.subheading[currentLang]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenCatalog && onOpenCatalog('all')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-[#112F45] border border-[#CBDCE9] shadow-xs transition-all self-start md:self-auto cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#1F4E79]" />
            <span>{t.exploreAllServices[currentLang]}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 7 Kartu Kategori Resmi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((category, idx) => {
            const visual = categoryVisualMap[idx] || categoryVisualMap[0];
            const cardImage = category.imageUrl || visual.img;

            return (
              <div
                key={category.id}
                className="group relative h-[450px] sm:h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_25px_-5px_rgba(10,25,47,0.12)] hover:shadow-[0_18px_38px_-5px_rgba(10,25,47,0.22)] transition-all duration-300 flex flex-col justify-between p-6 bg-slate-900 border border-slate-200/50"
              >
                {/* 1. Foto Latar Belakang Kategori */}
                <img
                  src={cardImage}
                  alt={category.title[currentLang]}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  loading="eager"
                />

                {/* 2. Gradient Overlay Gelap Bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/55 to-black/20 z-10 pointer-events-none" />

                {/* 3. Header Atas Kartu */}
                <div className="relative z-20 flex items-center justify-between">
                 

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {visual.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#DCECF7] bg-[#112F45]/80 backdrop-blur-md px-2 py-1 rounded-full">
                      #{category.number}
                    </span>
                  </div>
                </div>

                {/* 4. Konten Bawah Kartu */}
                <div className="relative z-20 mt-auto">
                  <span className="text-[13px] font-bold text-sky-300 tracking-wide block mb-1">
                    Kategori {category.number}
                  </span>

                  <h3 className="text-xl sm:text-[22px] font-black text-white tracking-tight leading-tight line-clamp-2 mb-2 drop-shadow-sm">
                    {category.title[currentLang]}
                  </h3>

                  <p className="text-xs text-slate-200/90 line-clamp-2 leading-relaxed mb-5 font-normal">
                    {category.description[currentLang]}
                  </p>

                  {/* Satu Tombol Tunggal Penuh: Detail & Persyaratan */}
                  <button
                    type="button"
                    onClick={(e) => handleDetailClick(e, category)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/95 hover:bg-white text-[#0A192F] text-xs font-bold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer group/btn"
                  >
                    <span>
                      {currentLang === 'ID'
                        ? 'Detail & Persyaratan Layanan'
                        : currentLang === 'JP'
                        ? '詳細・要件を確認する'
                        : 'View Details & Requirements'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#112F45] transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onOpenCatalog && onOpenCatalog('all')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#112F45] hover:bg-[#0C2436] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#112F45]/25 hover:shadow-xl transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#CBDCE9]" />
            <span>Lihat Seluruh 40+ Rincian Dokumen di Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};