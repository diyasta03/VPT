import React from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, MessageSquare, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenAbout: () => void;
  onOpenCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenAbout, onOpenCatalog }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8EDF1] pt-16 pb-12 text-[#1F2933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8EDF1]">
          
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#173A5E] flex items-center justify-center text-white shadow-xs">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L12 18L20 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L7.5 5.5" stroke="#DCECF7" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="1.5" fill="#B99A5C" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold tracking-tight text-[#173A5E] leading-none font-sans-corporate">
                  VISA PRO <span className="font-light text-[#2D6A9F]">TECHNOLOGY</span>
                </span>
                <span className="text-[9px] tracking-[0.16em] uppercase text-[#5B6B7C] font-semibold mt-1">
                  Immigration & Corporate Legal
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6B7C] leading-relaxed max-w-sm">
              Visa Pro Technology (VPT) is a licensed Indonesian corporate immigration and corporate legal advisory firm providing end-to-end expatriate mobility, licensing, and VIP support for multinational enterprises and investors.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#173A5E] font-medium pt-2">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#2D6A9F]" />
                <span>BKPM Registered</span>
              </div>
              <span>•</span>
              <div>Ditjen Imigrasi Molina Verified</div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Column 1: Services */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#173A5E] mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-[#5B6B7C]">
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Expatriate Services & ITAS
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Investor & Golden Visas
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Multiple-Entry Visas (D212)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Corporate Legalities & PT PMA
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Civil & Stay Services (SKTT)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Airport Fast-Track VIP
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCatalog} className="hover:text-[#2D6A9F] transition-colors text-left">
                    Sworn Translation & Apostille
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#173A5E] mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-[#5B6B7C]">
                <li>
                  <button onClick={onOpenAbout} className="hover:text-[#2D6A9F] transition-colors">
                    About VPT
                  </button>
                </li>
                <li>
                  <a href="#why-vpt" className="hover:text-[#2D6A9F] transition-colors">
                    Why VPT
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#2D6A9F] transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#2D6A9F] transition-colors">
                    Client Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#2D6A9F] transition-colors">
                    Regulatory FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#2D6A9F] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Regulatory */}
            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#173A5E] mb-4">
                Compliance & Legal
              </h4>
              <ul className="space-y-2.5 text-[#5B6B7C]">
                <li className="hover:text-[#2D6A9F] cursor-pointer">
                  Corporate Privacy Policy
                </li>
                <li className="hover:text-[#2D6A9F] cursor-pointer">
                  Client Confidentiality NDA
                </li>
                <li className="hover:text-[#2D6A9F] cursor-pointer">
                  Anti-Bribery & FCPA Compliance
                </li>
                <li className="hover:text-[#2D6A9F] cursor-pointer">
                  Ministry Decree Disclaimer
                </li>
                <li className="hover:text-[#2D6A9F] cursor-pointer">
                  Terms of Representation
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Office Contact Highlights */}
        <div className="py-8 border-b border-[#E8EDF1] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5B6B7C]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#2D6A9F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#173A5E] block">Jakarta Headquarters</strong>
              <span>Menara BCA, 50th Fl, Grand Indonesia, Jakarta Pusat 10310</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#B99A5C] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#173A5E] block">Bali Regional Office</strong>
              <span>Sunset Road No. 88, Kuta, Badung, Bali 80361</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-[#2D6A9F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#173A5E] block">Instant Communications</strong>
              <span>WA: +62 811 9882 1234 • Email: info@visaprotechnology.co.id</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6B7C]">
          <p>
            © {new Date().getFullYear()} PT Visa Pro Technology Indonesia. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173A5E] hover:text-[#2D6A9F] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
