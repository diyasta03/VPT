import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface IntroductionSectionProps {
  currentLang: Language;
  onOpenAboutModal: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  currentLang,
  onOpenAboutModal,
}) => {
  const t = siteTranslations.intro;

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-[#E8EDF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow + Large Statement */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-4">
              {t.eyebrow[currentLang]}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173A5E] tracking-tight leading-[1.18] font-sans-corporate">
              {t.headline[currentLang]}
            </h2>
            
            {/* Subtle blue accent line */}
            <div className="w-16 h-1 bg-[#2D6A9F] mt-6 rounded-full" />

            {/* Key Value Points */}
            <div className="mt-10 space-y-3.5">
              {[
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
                  : "Seamless inter-agency liaison: Kemnaker, BKPM, and Ditjen Imigrasi"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#2D6A9F] shrink-0" />
                  <span className="text-sm font-medium text-[#1F2933]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Explanations & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-5 text-base sm:text-lg text-[#5B6B7C] leading-relaxed">
              <p>{t.paragraph1[currentLang]}</p>
              <p className="text-sm sm:text-base text-[#5B6B7C]">{t.paragraph2[currentLang]}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8EDF1] flex items-center justify-between">
              <button
                type="button"
                id="intro-discover-vpt-btn"
                onClick={onOpenAboutModal}
                className="inline-flex items-center text-sm font-bold text-[#173A5E] hover:text-[#2D6A9F] tracking-wide transition-colors group cursor-pointer"
              >
                <span>{t.cta[currentLang]}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <span className="text-xs font-semibold text-[#5B6B7C] uppercase tracking-wider">
                Est. Indonesia • Reg. 2011
              </span>
            </div>
          </div>

        </div>

        {/* Secondary Professional Photography Grid with subtle captions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 rounded-xl overflow-hidden border border-[#E8EDF1] shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="VPT corporate consultants in briefing with multinational executive team"
              className="w-full h-72 sm:h-80 object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 bg-[#FAF9F6] rounded-xl p-8 border border-[#E8EDF1] flex flex-col justify-center h-full">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B99A5C] mb-2">
              EXECUTIVE FIDUCIARY RESPONSIBILITY
            </span>
            <h3 className="text-xl font-bold text-[#173A5E] mb-3">
              {currentLang === 'JP'
                ? "企業のコンプライアンスを守り、駐在員の安全を担保する"
                : currentLang === 'ID'
                ? "Menjaga Kepatuhan Hukum & Kenyamanan Penugasan"
                : "Protecting Corporate Governance & Expat Mobility"}
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
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
