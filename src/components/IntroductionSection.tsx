import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface IntroductionSectionProps {
  currentLang: Language;
  onOpenAboutModal: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  currentLang,
  onOpenAboutModal,
}) => {
  const t = siteTranslations.intro;

  const valuePoints = [
    currentLang === 'JP'
      ? "頻繁な入国管理法・労働法規の改正に対応する迅速な実務力"
      : currentLang === 'ID'
      ? "Kepatuhan hukum 100% tanpa denda atau hambatan operasional"
      : "100% compliance record with zero regulatory interruptions",
    currentLang === 'JP'
      ? "日系企業や多国籍企業向けの専任アカウントマネージャー制"
      : currentLang === 'ID'
      ? "Komunikasi transparan dalam Bahasa Indonesia, Inggris, dan Jepang"
      : "Dedicated corporate desk with Japanese & English fluency",
    currentLang === 'JP'
      ? "ジャカルタ（中央・南）およびバリ島での確かな官公庁パイプライン"
      : currentLang === 'ID'
      ? "Jaringan kantor terpadu di Jakarta (HQ) dan Bali"
      : "Seamless inter-agency liaison: Kemnaker, BKPM, and Ditjen Imigrasi",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FAFCFF] border-y border-[#E2EAF1] overflow-hidden">
      
      {/* Subtle Sapphire Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1F4E79]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, Heading & Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Eyebrow */}
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
  {currentLang === 'ID'
    ? 'Tentang VPT'
    : currentLang === 'JP'
    ? 'VPTについて'
    : 'About VPT'}
</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight leading-[1.15]">
              {t.headline[currentLang]}
            </h2>
            
            {/* Sapphire Accent Gradient Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#112F45] via-[#1F4E79] to-[#2D6A9F] mt-6 rounded-full" />

            {/* Key Value Points */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              {valuePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4E79]" />
                  </div>
                  <span className="text-sm sm:text-[14.5px] font-medium text-[#2B3B4E] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Explanations & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2 lg:pt-8">
            <div className="space-y-5 text-base sm:text-lg text-[#4A5D73] leading-relaxed">
              <p className="font-normal">{t.paragraph1[currentLang]}</p>
              <p className="text-sm sm:text-base text-[#5E7287] leading-relaxed">{t.paragraph2[currentLang]}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2EAF1] flex items-center justify-between">
              <button
                type="button"
                id="intro-discover-vpt-btn"
                onClick={onOpenAboutModal}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#112F45] hover:text-[#1F4E79] tracking-wide transition-colors cursor-pointer"
              >
                <span>{t.cta[currentLang]}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#112F45]/10 text-[#112F45] transition-all group-hover:bg-[#112F45] group-hover:text-white group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <span className="text-[11px] font-semibold text-[#5E7287] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#E2EAF1] shadow-2xs">
                Est. Indonesia • Reg. 2011
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Grid: Photography Card + Executive Governance Card */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Image Banner */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#CBDCE9] shadow-sm relative group">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="VPT corporate consultants in briefing with multinational executive team"
              className="w-full h-72 sm:h-84 object-cover object-center transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent" />
          </div>

          {/* Clean Executive Card */}
          <div className="md:col-span-5 bg-white/90 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-[#CBDCE9] shadow-sm flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-[#1F4E79] mb-3">
              <Shield className="w-3.5 h-3.5 text-[#1F4E79]" />
              <span>EXECUTIVE FIDUCIARY RESPONSIBILITY</span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-[#0A192F] mb-3 leading-snug">
              {currentLang === 'JP'
                ? "企業のコンプライアンスを守り、駐在員の安全を担保する"
                : currentLang === 'ID'
                ? "Menjaga Kepatuhan Hukum & Kenyamanan Penugasan"
                : "Protecting Corporate Governance & Expat Mobility"}
            </h3>

            <p className="text-xs sm:text-[13.5px] text-[#4A5D73] leading-relaxed">
              {currentLang === 'JP'
                ? "在留資格の不備は、企業ブランドへの失墜や重い罰則、業務停止命令に直結します。VPTは単なる代行業者ではなく、貴社の法務・人事部門の信頼できる外部パートナーとして機能します。"
                : currentLang === 'ID'
                ? "Kekeliruan izin tinggal dapat berdampak pada reputasi dan sanksi operasional. VPT bertindak sebagai perpanjangan tangan tim legal dan HR perusahaan Anda."
                : "Immigration non-compliance carries severe institutional risk in Indonesia. We serve as a strategic legal extension to your global mobility and Human Resources apparatus."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};