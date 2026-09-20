import React from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, MessageSquare, ArrowUp, Shield, Instagram } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenAbout: () => void;
  onOpenCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenAbout, onOpenCatalog }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const WHATSAPP_URL = 'https://wa.me/6287887484517';
  const INSTAGRAM_URL = 'https://www.instagram.com/visaproteknologi/';

  return (
    <footer className="bg-[#FAFCFF] border-t border-[#E2EAF1] pt-16 pb-12 text-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E2EAF1]">
          
          <div className="lg:col-span-5 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
    <img
      src="/logo.png"
      alt="Visa Pro Teknologi"
      className="w-full h-full object-contain"
    />
  </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold tracking-tight text-[#0A192F] leading-none font-sans-corporate">
                  VISA PRO <span className="font-light text-[#1F4E79]">TEKNOLOGI</span>
                </span>
                <span className="text-[9px] tracking-[0.16em] uppercase text-[#4A5D73] font-semibold mt-1">
                  Visa & Immigration Consulting
                </span>
              </div>
            </div>

            <p className="text-xs text-[#4A5D73] leading-relaxed max-w-sm">
              {currentLang === 'ID'
                ? 'Visa Pro Teknologi (VPT) adalah konsultan legalitas korporasi dan keimigrasian terpercaya di Indonesia. Melayani perizinan kerja TKA, pendirian PT PMA, visa internasional, dan asistensi VIP terpadu.'
                : currentLang === 'JP'
                ? 'Visa Pro Technology（VPT）は、インドネシア就労ビザ（ITAS）、外資法人設立（PT PMA）、各種公認申請手続きを包括的に支援する法務・入国管理コンサルティングファームです。'
                : 'Visa Pro Technology (VPT) is a premier corporate immigration and statutory legal advisory firm providing expatriate mobility, PT PMA setup, outbound visas, and executive VIP support.'}
            </p>

            {/* Social Icons & Direct Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Visa Pro Teknologi"
                className="w-8 h-8 rounded-lg bg-[#112F45]/5 hover:bg-[#112F45] text-[#112F45] hover:text-white border border-[#CBDCE9] flex items-center justify-center transition-all shadow-2xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Visa Pro Teknologi"
                className="w-8 h-8 rounded-lg bg-[#112F45]/5 hover:bg-[#25D366] text-[#112F45] hover:text-white border border-[#CBDCE9] flex items-center justify-center transition-all shadow-2xs"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@visaprotechnology.com"
                aria-label="Email Visa Pro Teknologi"
                className="w-8 h-8 rounded-lg bg-[#112F45]/5 hover:bg-[#112F45] text-[#112F45] hover:text-white border border-[#CBDCE9] flex items-center justify-center transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+62215208899"
                aria-label="Telephone Visa Pro Teknologi"
                className="w-8 h-8 rounded-lg bg-[#112F45]/5 hover:bg-[#112F45] text-[#112F45] hover:text-white border border-[#CBDCE9] flex items-center justify-center transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#0A192F] font-semibold pt-2">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#1F4E79]" />
                <span>BKPM & OSS-RBA Registered</span>
              </div>
              <span className="text-[#CBDCE9]">•</span>
              <span className="text-[#4A5D73]">Molina Verified</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Column 1: Services */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#0A192F] mb-4">
                {currentLang === 'ID' ? 'Kategori Layanan' : currentLang === 'JP' ? '業務一覧' : 'Official Services'}
              </h4>
              <ul className="space-y-2.5 text-[#4A5D73]">
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Izin Kerja TKA & ITAS' : 'Expatriate ITAS & TKA'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Visa Masuk RI (C & D)' : 'Indonesia Entry Visas'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Visa Luar Negeri & Paspor' : 'Overseas Visas & Passports'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'PT PMA & OSS Licensing' : 'PT PMA Incorporation'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Mutasi Paspor, SKTT & EPO' : 'Civil SKTT & EPO Permits'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Airport VIP & ABTC Card' : 'Airport VIP Fast-Track'}
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#1F4E79] transition-colors text-left cursor-pointer">
                    {currentLang === 'ID' ? 'Penerjemah Tersumpah' : 'Sworn Translation & Add-ons'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#0A192F] mb-4">
                {currentLang === 'ID' ? 'Perusahaan' : currentLang === 'JP' ? '企業案内' : 'Company'}
              </h4>
              <ul className="space-y-2.5 text-[#4A5D73]">
                <li>
                  <button onClick={onOpenAbout} className="hover:text-[#1F4E79] transition-colors cursor-pointer">
                    {currentLang === 'ID' ? 'Tentang VPT' : currentLang === 'JP' ? 'VPTについて' : 'About VPT'}
                  </button>
                </li>
                <li>
                  <a href="#why-vpt" className="hover:text-[#1F4E79] transition-colors">
                    {currentLang === 'ID' ? 'Keunggulan Strategis' : currentLang === 'JP' ? '当社の強み' : 'Why VPT'}
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#1F4E79] transition-colors">
                    {currentLang === 'ID' ? 'Alur & Prosedur' : currentLang === 'JP' ? '業務手順' : 'Our Process'}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#1F4E79] transition-colors">
                    {currentLang === 'ID' ? 'Testimoni Klien' : currentLang === 'JP' ? '顧客の声' : 'Client Testimonials'}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#1F4E79] transition-colors">
                    {currentLang === 'ID' ? 'Pertanyaan Umum' : currentLang === 'JP' ? 'よくある質問' : 'Regulatory FAQ'}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#1F4E79] transition-colors">
                    {currentLang === 'ID' ? 'Hubungi Kami' : currentLang === 'JP' ? 'お問い合わせ' : 'Contact Us'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Compliance & Legal */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#0A192F] mb-4">
                {currentLang === 'ID' ? 'Legalitas & Kepatuhan' : currentLang === 'JP' ? '規約・コンプライアンス' : 'Compliance & Legal'}
              </h4>
              <ul className="space-y-2.5 text-[#4A5D73]">
                <li className="hover:text-[#1F4E79] cursor-pointer">
                  Corporate Privacy Policy
                </li>
                <li className="hover:text-[#1F4E79] cursor-pointer">
                  Client Confidentiality NDA
                </li>
                <li className="hover:text-[#1F4E79] cursor-pointer">
                  Anti-Bribery & FCPA
                </li>
                <li className="hover:text-[#1F4E79] cursor-pointer">
                  Immigration Decree Notice
                </li>
                <li className="hover:text-[#1F4E79] cursor-pointer">
                  Terms of Service
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Office Contact Highlights */}
        <div className="py-8 border-b border-[#E2EAF1] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#4A5D73]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#1F4E79] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0A192F] block">Jakarta Headquarters</strong>
              <span>Menara Astra, 37th Floor, Jl. Jend. Sudirman Kav. 5-6, Jakarta 10220</span>
            </div>
          </div>

       

          <div className="flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-[#1F4E79] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0A192F] block">Corporate Contact</strong>
              <span>WA: +62 878 8748 4517 • Email: info@visaprotechnology.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5D73]">
          <p>
            © {new Date().getFullYear()} PT Visa Pro Technology Indonesia. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#1F4E79] transition-colors cursor-pointer"
          >
            <span>{currentLang === 'ID' ? 'Kembali ke atas' : currentLang === 'JP' ? 'トップへ戻る' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};