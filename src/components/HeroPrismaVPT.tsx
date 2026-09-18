import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { GlobeFlights } from './ui/three-interactive-globe';

/* ---------------- WordsPullUp Animation ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.22em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.05em] -right-[0.35em] text-[0.42em] text-[#C59B27] font-normal leading-none">*</span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
};

/* ---------------- Hero Props ---------------- */
interface HeroPrismaVPTProps {
  currentLang: Language;
  onExploreServices: () => void;
  onTalkToTeam: () => void;
  onOpenConsultation: (serviceName?: string) => void;
  onOpenCatalog?: () => void;
  onOpenCatalogWithCategory?: (categoryId: string, searchKeyword?: string) => void;
}

export const HeroPrismaVPT: React.FC<HeroPrismaVPTProps> = ({
  currentLang,
  onExploreServices,
  onTalkToTeam,
  onOpenConsultation,
  onOpenCatalog,
  onOpenCatalogWithCategory,
}) => {
  const content = {
    badge: {
      EN: "CORPORATE LAW & IMMIGRATION COUNSEL • INDONESIA",
      ID: "KONSULTAN HUKUM KORPORAT & KEIMIGRASIAN INDONESIA",
      JP: "インドネシア企業法務・外国人就労ビザ顧問",
    },
    headline: {
      EN: "VISA PRO",
      ID: "VISA PRO",
      JP: "VISA PRO",
    },
    headlineSecondary: {
      EN: "TECHNOLOGY",
      ID: "TECHNOLOGY",
      JP: "TECHNOLOGY",
    },
    tagline: {
      EN: "Institutional Certainty for Foreign Investment & Expatriate Mobility",
      ID: "Kepastian Regulasi, Legalitas PMA & Akses Keimigrasian Terpadu",
      JP: "外資系企業の確かな進出と外国人材の円滑な就労手続き",
    },
    description: {
      EN: "Premier legal advisory for foreign direct investments (PT PMA), statutory licensing under OSS-RBA, corporate compliance, and expatriate working visas (ITAS) across Indonesia.",
      ID: "Mitra hukum strategis untuk penanaman modal asing (PT PMA), kepatuhan izin OSS RBA, dan legalitas izin tinggal ekspatriat (ITAS) dengan transparansi regulasi penuh.",
      JP: "外資法人設立（PT PMA）、OSS-RBA事業ライセンス取得、外国人就労ビザ（ITAS）手続きをワンストップで支援するインドネシア法務チーム。",
    },
    primaryCta: {
      EN: "Book Regulatory Consultation",
      ID: "Jadwalkan Konsultasi",
      JP: "法務相談を予約",
    },
    secondaryCta: {
      EN: "Explore 40+ Practice Areas",
      ID: "Lihat 40+ Layanan",
      JP: "40以上の取扱分野",
    },
    stats: [
      { label: { EN: "Statutory Approval Rate", ID: "Tingkat Persetujuan", JP: "許認可取得率" }, val: "99.4%" },
      { label: { EN: "Expatriates Managed", ID: "Ekspatriat Terkelola", JP: "支援外国人材" }, val: "1,250+" },
      { label: { EN: "Foreign Direct Investments", ID: "Investasi PMA Binaan", JP: "外資支援実績" }, val: "380+" },
    ]
  };

  // Handler saat kartu micro-badge di globe diklik
  const handleSelectGlobeCategory = (categoryId: string, searchKeyword?: string) => {
    if (onOpenCatalogWithCategory) {
      onOpenCatalogWithCategory(categoryId, searchKeyword);
    } else if (onOpenCatalog) {
      onOpenCatalog();
    } else {
      onOpenConsultation(searchKeyword || categoryId);
    }
  };

  return (
    <section className="relative w-full bg-[#FBFBFA] text-[#191C1E] flex flex-col justify-between overflow-hidden pt-16 sm:pt-20 pb-0 transition-all">
      
      {/* 1. Subtle Elegant Ambient Warmth */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      {/* 2. Main Hero Grid: Left Content + Right 3D Cobe Globe */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Branding & Direct Action */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            
            {/* Regulatory Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-3.5 self-start shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{content.badge[currentLang]}</span>
            </motion.div>

            {/* Headline */}
            <h1 
              className="font-sans font-bold tracking-[-0.035em] text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.65rem] leading-[0.98] select-none text-stone-900"
            >
              <span className="block">
                <WordsPullUp text={content.headline[currentLang]} />
              </span>
              <span className="block text-stone-800 mt-1 sm:mt-1.5">
                <WordsPullUp text={content.headlineSecondary[currentLang]} />
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-stone-700 font-medium tracking-tight max-w-2xl">
              {content.tagline[currentLang]}
            </p>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3.5 text-xs sm:text-sm md:text-[15px] text-stone-600 leading-relaxed font-normal max-w-xl"
              style={{ lineHeight: 1.65 }}
            >
              {content.description[currentLang]}
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <motion.button
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => onOpenConsultation('Comprehensive Legal & Immigration')}
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#1A1E24] hover:bg-black text-white py-2 pl-6 pr-2 text-sm sm:text-base font-semibold transition-all hover:gap-4 shadow-md active:scale-98 cursor-pointer"
              >
                <span>{content.primaryCta[currentLang]}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#303642] text-white transition-transform group-hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.button>

              <motion.button
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-stone-50 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-800 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#C59B27]" />
                <span>{content.secondaryCta[currentLang]}</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column: Rotating 3D Globe with Clickable Dynamic Micro-Badges & Controls */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Soft Ambient Radial Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-100/50 via-amber-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Cobe Globe */}
              <div className="w-full h-full relative p-2">
                <GlobeFlights
                  speed={0.0022}
                  onSelectCategory={handleSelectGlobeCategory}
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Credential Ribbon */}
      <div className="relative z-10 w-full border-t border-stone-200/80 bg-white/70 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="border-l border-stone-200 pl-4">
                <div 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-stone-900"
                >
                  {stat.val}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-medium uppercase tracking-wider mt-0.5">
                  {stat.label[currentLang]}
                </div>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1 flex items-center gap-2.5 text-xs text-stone-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>Licensed Legal & Immigration Practice in Indonesia</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};