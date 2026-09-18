import React from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { HeroSection } from '../../components/ui/hero-section-2';
import { ShieldCheck, Award, Fingerprint, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroVPTProps {
  currentLang: Language;
  onExploreServices: () => void;
  onTalkToTeam: () => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export const HeroVPT: React.FC<HeroVPTProps> = ({
  currentLang,
  onExploreServices,
  onTalkToTeam,
  onOpenConsultation,
}) => {
  const t = siteTranslations.hero;

  const sloganMap: Record<Language, string> = {
    EN: 'INDONESIA WORK VISA & CORPORATE LEGAL COUNSEL',
    ID: 'KONSULTAN PERIZINAN KERJA EKSPATRIAT & PT PMA',
    JP: 'インドネシア就労ビザ・PT PMA法人設立法務コンサルティング',
  };

  const titleNode = (
    <>
      <span className="block">{t.title1[currentLang]}</span>
      <span className="block font-serif-editorial italic font-normal text-primary my-1">
        {t.title2[currentLang]}
      </span>
      <span className="block">{t.title3[currentLang]}</span>
    </>
  );

  const quickBadges = [
    {
      label: currentLang === 'JP' ? '就労ビザ E23' : currentLang === 'ID' ? 'ITAS Kerja E23' : 'Working ITAS (E23)',
      tag: 'Fast-Track',
      onClick: () => onOpenConsultation?.('Working ITAS (E23)'),
    },
    {
      label: currentLang === 'JP' ? '外資法人設立 PT PMA' : currentLang === 'ID' ? 'Pendirian PT PMA' : 'PT PMA Setup',
      tag: 'OSS-RBA',
      onClick: () => onOpenConsultation?.('PT PMA Establishment'),
    },
    {
      label: currentLang === 'JP' ? '空港VIP待遇' : currentLang === 'ID' ? 'VIP Airport Track' : 'VIP Airport Fast Track',
      tag: 'CGK/DPS',
      onClick: () => onOpenConsultation?.('Airport VIP Fast Track'),
    },
    {
      label: currentLang === 'JP' ? 'ゴールデンビザ' : currentLang === 'ID' ? 'Golden Visa 5-10 Th' : 'Golden Visa 5-10Y',
      tag: 'Priority',
      onClick: () => onOpenConsultation?.('Golden Visa'),
    },
  ];

  const floatingBadge = (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-border shadow-xl text-foreground max-w-xs"
    >
      <div className="flex items-center justify-between pb-2 border-b border-border mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-deep-blue flex items-center justify-center text-white">
            <Fingerprint className="w-3.5 h-3.5 text-gold" />
          </div>
          <div>
            <span className="text-[9px] font-extrabold tracking-widest text-deep-blue uppercase block leading-none">
              REPUBLIK INDONESIA
            </span>
            <span className="text-[8px] text-primary font-semibold block mt-0.5">
              e-ITAS Expat Mobility Pass
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-secondary text-primary border border-primary/20">
          <Check className="w-2.5 h-2.5 text-emerald-600" />
          VERIFIED
        </span>
      </div>

      <div className="flex items-center justify-between text-[10px]">
        <div>
          <span className="text-muted-foreground block text-[8px] uppercase">Compliance</span>
          <span className="font-bold text-deep-blue">Kemnaker & BKPM</span>
        </div>
        <div className="text-right">
          <span className="text-muted-foreground block text-[8px] uppercase">Service SLA</span>
          <span className="font-bold text-gold">2026 Ready</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <HeroSection
      className="pt-20 md:pt-16 border-b border-border"
      logo={{
        url: '', // We use text & badge for clean rendering
        alt: 'Visa Pro Technology Logo',
        text: 'Visa Pro Technology',
      }}
      slogan={sloganMap[currentLang]}
      title={titleNode}
      subtitle={t.subtitle[currentLang]}
      callToAction={{
        text: t.ctaPrimary[currentLang],
        onClick: onExploreServices,
      }}
      secondaryAction={{
        text: t.ctaSecondary[currentLang],
        onClick: onTalkToTeam,
      }}
      quickBadges={quickBadges}
      backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
      contactInfo={{
        website: 'visaprotechnology.com',
        phone: '+62 812-3456-7890',
        address: 'SCBD Lot 28, Sudirman, Jakarta',
      }}
      floatingBadge={floatingBadge}
    />
  );
};
