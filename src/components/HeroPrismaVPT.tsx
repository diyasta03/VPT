import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
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
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.22em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.05em] -right-[0.35em] text-[0.42em] text-[#1F4E79] font-normal leading-none">*</span>
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
    <section 
      id="hero"
      className="relative w-full min-h-[calc(100vh-2rem)] bg-[#FAFCFF] text-[#0A192F] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-0 transition-all"
    >
      {/* 1. Ambient Lighting Layers */}
      <div className="absolute top-10 right-0 sm:right-1/4 w-[320px] sm:w-[550px] lg:w-[700px] aspect-square bg-gradient-to-b from-[#1F4E79]/12 via-[#16425B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-28 w-80 sm:w-96 aspect-square bg-[#2D6A9F]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px] opacity-25 -z-10" />

      {/* 2. Main Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Teks & Aksi */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            {/* Headline Responsif */}
            <h1 className="font-sans font-extrabold tracking-tight text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.65rem] select-none text-[#0A192F]">
              <span className="block tracking-tight">
                <WordsPullUp text={content.headline[currentLang]} />
              </span>
              <span className="block bg-gradient-to-r from-[#16425B] via-[#1F4E79] to-[#2B608A] bg-clip-text text-transparent mt-1 pb-1">
                <WordsPullUp text={content.headlineSecondary[currentLang]} />
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-3.5 sm:mt-5 text-base sm:text-lg lg:text-xl text-[#2B3B4E] font-medium tracking-tight max-w-xl lg:max-w-2xl leading-snug">
              {content.tagline[currentLang]}
            </p>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm md:text-[15px] text-[#4A5D73] leading-relaxed max-w-lg lg:max-w-xl font-normal"
            >
              {content.description[currentLang]}
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <motion.button
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                onClick={() => onOpenConsultation('Comprehensive Legal & Immigration')}
                className="group relative inline-flex items-center justify-between sm:justify-center gap-3 sm:gap-4 rounded-full bg-[#112F45] hover:bg-[#0C2436] text-white py-2.5 sm:py-2 pl-6 pr-2.5 text-sm sm:text-base font-medium transition-all shadow-[0_8px_20px_-4px_rgba(17,47,69,0.3)] hover:shadow-[0_12px_25px_-4px_rgba(17,47,69,0.4)] active:scale-[0.98] cursor-pointer"
              >
                <span className="font-semibold tracking-wide">{content.primaryCta[currentLang]}</span>
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#1F4E79] text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-[#256196]">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 hover:bg-[#F3F7FA] px-5 py-3 text-xs sm:text-sm font-semibold text-[#16425B] border border-[#CBDCE9] shadow-xs hover:border-[#1F4E79]/50 transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#1F4E79]" />
                <span>{content.secondaryCta[currentLang]}</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column: Globe Container Responsif */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full mt-2 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Radial Glow di Belakang Globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#16425B]/25 via-[#1F4E79]/15 to-transparent blur-2xl sm:blur-3xl pointer-events-none -z-10" />

              {/* Interactive Globe Container */}
              <div className="w-full h-full relative flex items-center justify-center">
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
      <div className="relative z-10 w-full border-t border-[#E2EAF1] bg-white/80 backdrop-blur-md py-4 sm:py-5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            
            {content.stats.map((stat, idx) => (
              <div key={idx} className="border-l border-[#D4E2ED] pl-3.5 sm:pl-4">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0A192F]">
                  {stat.val}
                </div>
                <div className="text-[9px] sm:text-xs text-[#5E7287] font-medium uppercase tracking-wider mt-0.5 leading-tight">
                  {stat.label[currentLang]}
                </div>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 flex items-center gap-2.5 text-xs text-[#2B3B4E] font-medium pt-2 sm:pt-0 border-t md:border-t-0 border-[#E2EAF1]/60">
              <ShieldCheck className="w-4 h-4 text-[#16425B] shrink-0" />
              <span className="leading-snug">Licensed Legal & Immigration Practice in Indonesia</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};