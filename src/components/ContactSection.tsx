import React, { useState } from 'react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, Building, ChevronDown } from 'lucide-react';

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
    customCategory: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Nomor WhatsApp Resmi Visa Pro Teknologi (@visaprotechnology)
  const WHATSAPP_NUMBER = '6287887484517';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedCategoryText =
      formData.category === 'Other'
        ? `Lainnya / Other (${formData.customCategory || 'Kebutuhan Khusus'})`
        : formData.category;

    // Rangkai pesan otomatis ke WhatsApp resmi Visa Pro Teknologi
    const greeting = currentLang === 'JP'
      ? 'Visa Pro Teknologi ご担当者様、公式ウェブサイトのお問い合わせフォームよりご連絡いたします。'
      : currentLang === 'EN'
      ? 'Hello Visa Pro Teknologi, I submitted an official inquiry via your corporate website.'
      : 'Halo Visa Pro Teknologi, saya mengirimkan formulir konsultasi resmi melalui website.';

    const textParts = [
      greeting,
      `\n\n• *Nama / Name:* ${formData.name}`,
      formData.company ? `\n• *Perusahaan / Company:* ${formData.company}` : '',
      `\n• *Email:* ${formData.email}`,
      `\n• *Telepon / Phone:* ${formData.phone}`,
      `\n• *Kategori Layanan:* ${selectedCategoryText}`,
      formData.message ? `\n• *Detail Kebutuhan:* ${formData.message}` : '',
    ].filter(Boolean).join('');

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textParts)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Langsung buka WhatsApp di tab baru
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      category: 'Expatriate Services & Working ITAS',
      customCategory: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFCFF] border-b border-[#E2EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
            {currentLang === 'ID'
              ? 'HUBUNGI KAMI LANGSUNG'
              : currentLang === 'JP'
              ? 'お問い合わせ窓口'
              : 'DIRECT ENGAGEMENT'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate">
            {t.headline[currentLang]}
          </h2>
          <p className="mt-4 text-base text-[#4A5D73]">
            {t.sub[currentLang]}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Locations */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* General & Japan Desk Inquiries */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#CBDCE9] shadow-2xs">
              <h3 className="text-lg font-bold text-[#0A192F] mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#1F4E79]" />
                <span>Contact VPT</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#112F45]/10 flex items-center justify-center text-[#112F45] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A192F] block">Email</span>
                    <a href="mailto:info@visaprotechnology.com" className="text-[#1F4E79] hover:underline font-medium">
                      info@visaprotechnology.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#112F45]/10 flex items-center justify-center text-[#112F45] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A192F] block">Corporate WhatsApp</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        currentLang === 'JP'
                          ? 'Visa Pro Teknologi 様、直接ご相談させていただきたく存じます。'
                          : currentLang === 'ID'
                          ? 'Halo Visa Pro Teknologi, saya ingin berkonsultasi langsung melalui WhatsApp.'
                          : 'Hello Visa Pro Teknologi, I would like to consult via WhatsApp directly.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F4E79] font-semibold hover:underline"
                    >
                      +62 878 8748 4517
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#E2EAF1]">
                  <div className="w-8 h-8 rounded-lg bg-[#112F45]/10 flex items-center justify-center text-[#112F45] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A192F] block">{t.hoursTitle[currentLang]}</span>
                    <p className="text-[#4A5D73] whitespace-pre-line text-xs">
                      {t.hoursDesc[currentLang]}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Office Locations: Jakarta */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#CBDCE9] shadow-2xs space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1F4E79] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0A192F]">{t.officeAddressTitle[currentLang]}</h4>
                  <p className="text-[#4A5D73] whitespace-pre-line text-xs mt-1">
                    {t.officeAddressDesc[currentLang]}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#CBDCE9] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#112F45]/10 text-[#112F45] flex items-center justify-center mx-auto mb-4 border border-[#CBDCE9]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A192F]">
                  {t.successTitle[currentLang]}
                </h3>
                <p className="text-sm text-[#4A5D73] max-w-md mx-auto leading-relaxed">
                  {t.successDesc[currentLang]}
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#FAFCFF] border border-[#CBDCE9] hover:bg-[#F0F5FA] rounded-md transition-colors cursor-pointer"
                  >
                    {t.sendAnother[currentLang]}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0A192F] mb-6">
                  {t.formTitle[currentLang]}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-name">
                      {t.nameLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder[currentLang]}
                      className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-company">
                      {t.companyLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.companyPlaceholder[currentLang]}
                      className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-email">
                      {t.emailLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@company.com"
                      className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-phone">
                      {t.phoneLabel[currentLang]} *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 811..."
                      className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-category">
                    {t.categoryLabel[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full appearance-none bg-[#FAFCFF] px-3.5 py-2.5 pr-10 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79] cursor-pointer"
                    >
                      <option value="Expatriate Services & Working ITAS">
                        {currentLang === 'ID'
                          ? '01 — Keimigrasian & Izin Kerja TKA (ITAS / RPTKA)'
                          : currentLang === 'JP'
                          ? '01 — 外国人就労ビザ・労働許可（ITAS / RPTKA）'
                          : '01 — Expatriate Services & Working ITAS'}
                      </option>
                      <option value="Indonesia Visas C & D Series">
                        {currentLang === 'ID'
                          ? '02 — Visa Masuk Indonesia (C & D Series)'
                          : currentLang === 'JP'
                          ? '02 — インドネシア入国ビザ（C・Dシリーズ）'
                          : '02 — Indonesia Entry Visas (C & D Series)'}
                      </option>
                      <option value="Overseas Visas & Passport RI">
                        {currentLang === 'ID'
                          ? '03 — Visa Luar Negeri & Paspor WNI'
                          : currentLang === 'JP'
                          ? '03 — 海外渡航ビザ・インドネシア旅券'
                          : '03 — Overseas Visas & Indonesian Passports'}
                      </option>
                      <option value="Foreign Investment PT PMA Setup">
                        {currentLang === 'ID'
                          ? '04 — Legalitas Perusahaan & PT PMA (OSS-RBA)'
                          : currentLang === 'JP'
                          ? '04 — 外資系法人設立・事業ライセンス（PT PMA）'
                          : '04 — Corporate Legal & Foreign Investment PT PMA'}
                      </option>
                      <option value="Civil SKTT & Stay Services">
                        {currentLang === 'ID'
                          ? '05 — Layanan Sipil WNA & Purna-Izin Tinggal (EPO)'
                          : currentLang === 'JP'
                          ? '05 — 外国人市民登録・滞在許可管理（EPO）'
                          : '05 — Civil Registry & Exit Permits (EPO)'}
                      </option>
                      <option value="Airport VIP Fast-Track & Concierge">
                        {currentLang === 'ID'
                          ? '06 — Layanan Eksekutif, VIP & Fast-Track (Kartu APEC)'
                          : currentLang === 'JP'
                          ? '06 — 空港VIP優先ファストトラック・APECカード'
                          : '06 — Executive VIP Priority & Airport Fast-Track'}
                      </option>
                      <option value="Sworn Translation & Travel Add-ons">
                        {currentLang === 'ID'
                          ? '07 — Layanan Tambahan (Penerjemah Tersumpah & Asuransi)'
                          : currentLang === 'JP'
                          ? '07 — 法定公認翻訳・海外旅行保険サポート'
                          : '07 — Sworn Translation & Travel Support Services'}
                      </option>
                      <option value="Other">
                        {currentLang === 'ID'
                          ? '08 — Lainnya / Kebutuhan Khusus'
                          : currentLang === 'JP'
                          ? '08 — その他・個別相談'
                          : '08 — Other / Custom Legal Services'}
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#4A5D73] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Input Khusus jika memilih "Other" */}
                {formData.category === 'Other' && (
                  <div className="animate-in fade-in duration-200">
                    <label className="block text-xs font-bold text-[#1F4E79] mb-1.5" htmlFor="contact-custom-category">
                      {currentLang === 'ID'
                        ? 'Sebutkan Layanan yang Anda Butuhkan *'
                        : currentLang === 'JP'
                        ? 'ご希望のサービス内容をご記入ください *'
                        : 'Specify Required Service *'}
                    </label>
                    <input
                      id="contact-custom-category"
                      type="text"
                      required
                      value={formData.customCategory}
                      onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                      placeholder={
                        currentLang === 'ID'
                          ? 'Contoh: Perpanjangan KITAS Lansia, Audit Kepatuhan TKA'
                          : currentLang === 'JP'
                          ? '例：リタイアメントビザ更新、法務デューデリジェンス等'
                          : 'e.g. Retirement Visa Renewal, Compliance Audit'
                      }
                      className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#1F4E79] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79]"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="contact-message">
                    {t.messageLabel[currentLang]} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder[currentLang]}
                    className="w-full bg-[#FAFCFF] px-3.5 py-2.5 text-sm text-[#0A192F] border border-[#CBDCE9] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-lg transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
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

                <p className="text-[11px] text-[#4A5D73] text-center">
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