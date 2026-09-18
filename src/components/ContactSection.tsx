import React, { useState } from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, Building } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = siteTranslations.contact;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Expatriate Services & Working ITAS',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      category: 'Expatriate Services & Working ITAS',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-[#E8EDF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-3">
            DIRECT ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173A5E] tracking-tight font-sans-corporate">
            {t.headline[currentLang]}
          </h2>
          <p className="mt-4 text-base text-[#5B6B7C]">
            {t.sub[currentLang]}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Locations */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* General & Japan Desk Inquiries */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-[#E8EDF1]">
              <h3 className="text-lg font-bold text-[#173A5E] mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#2D6A9F]" />
                <span>Contact VPT</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] flex items-center justify-center text-[#2D6A9F] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#173A5E] block">Email</span>
                    <a href="mailto:info@visaprotechnology.co.id" className="text-[#2D6A9F] hover:underline">
                      info@visaprotechnology.co.id
                    </a>
                    <span className="text-[11px] text-[#5B6B7C] block mt-0.5">
                      Japan Desk: <a href="mailto:japan.desk@visaprotechnology.co.id" className="hover:underline text-[#173A5E]">japan.desk@visaprotechnology.co.id</a>
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] flex items-center justify-center text-[#2D6A9F] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#173A5E] block">Telephone</span>
                    <a href="tel:+62215208899" className="text-[#1F2933] hover:text-[#2D6A9F]">
                      +62 21 520 8899 (Jakarta HQ)
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] flex items-center justify-center text-[#2D6A9F] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#173A5E] block">Corporate WhatsApp</span>
                    <a
                      href="https://wa.me/6281198821234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2D6A9F] font-semibold hover:underline"
                    >
                      +62 811 9882 1234
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#E8EDF1]">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] flex items-center justify-center text-[#2D6A9F] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#173A5E] block">{t.hoursTitle[currentLang]}</span>
                    <p className="text-[#5B6B7C] whitespace-pre-line text-xs">
                      {t.hoursDesc[currentLang]}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Office Locations: Jakarta & Bali */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-[#E8EDF1] space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D6A9F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#173A5E]">{t.officeAddressTitle[currentLang]}</h4>
                  <p className="text-[#5B6B7C] whitespace-pre-line text-xs mt-1">
                    {t.officeAddressDesc[currentLang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-[#E8EDF1]">
                <MapPin className="w-5 h-5 text-[#B99A5C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#173A5E]">{t.baliOfficeTitle[currentLang]}</h4>
                  <p className="text-[#5B6B7C] text-xs mt-1">
                    {t.baliOfficeDesc[currentLang]}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl p-8 sm:p-10 border border-[#E8EDF1] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#EAF3FA] text-[#2D6A9F] flex items-center justify-center mx-auto mb-4 border border-[#DCECF7]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#173A5E]">
                  {t.successTitle[currentLang]}
                </h3>
                <p className="text-sm text-[#5B6B7C] max-w-md mx-auto leading-relaxed">
                  {t.successDesc[currentLang]}
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#173A5E] bg-white border border-[#E8EDF1] hover:bg-[#EAF3FA] rounded-md transition-colors"
                  >
                    {t.sendAnother[currentLang]}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#173A5E] mb-6">
                  {t.formTitle[currentLang]}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-name">
                      {t.nameLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder[currentLang]}
                      className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-company">
                      {t.companyLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.companyPlaceholder[currentLang]}
                      className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-email">
                      {t.emailLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@company.com"
                      className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-phone">
                      {t.phoneLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 811..."
                      className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-category">
                    {t.categoryLabel[currentLang]}
                  </label>
                  <select
                    id="contact-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  >
                    <option value="Expatriate Services & Working ITAS">01 — Expatriate Services & Working ITAS (E23/C312)</option>
                    <option value="Investor ITAS & Golden Visa">02 — Investor ITAS & Golden Visa Indonesia</option>
                    <option value="Multiple-Entry Business Visa">03 — Multiple-Entry Business Visa (D212)</option>
                    <option value="Foreign Investment PT PMA Setup">04 — Foreign Investment PT PMA Company Setup</option>
                    <option value="Japan Corporate Outbound Visa">05 — Japan Corporate Outbound Visa for WNI</option>
                    <option value="Civil SKTT & Stay Services">06 — Civil SKTT, Domicile & Stay Services</option>
                    <option value="Airport VIP Fast-Track & Concierge">07 — Airport VIP Fast-Track & Concierge</option>
                    <option value="Sworn Translation & Apostille">08 — Sworn Translation & Apostille Legalization</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1.5" htmlFor="contact-message">
                    {t.messageLabel[currentLang]} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder[currentLang]}
                    className="w-full bg-white px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.sending[currentLang]}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn[currentLang]}</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#5B6B7C] text-center">
                  Protected under VPT Corporate Data Security & NDA Protocols.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
