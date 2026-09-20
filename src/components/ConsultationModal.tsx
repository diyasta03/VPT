import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { X, CheckCircle2, Send, ShieldCheck, ChevronDown } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  initialService?: ServiceItem | string | null;
  currentLang: Language;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  initialService,
  currentLang,
  onClose,
}) => {
  const serviceCategories = [
    {
      id: 'cat-1',
      value: 'Expatriate Services & Working ITAS',
      label: {
        EN: '01 — Expatriate Work ITAS & Quota (E23/RPTKA)',
        ID: '01 — Izin Kerja TKA & ITAS (E23/RPTKA)',
        JP: '01 — 外国人就労ビザ・労働許可（ITAS/RPTKA）',
      },
    },
    {
      id: 'cat-2',
      value: 'Indonesia Visas C & D Series',
      label: {
        EN: '02 — Indonesia Entry Visas (C & D Series)',
        ID: '02 — Visa Masuk Indonesia (C & D Series)',
        JP: '02 — インドネシア入国ビザ（C・Dシリーズ）',
      },
    },
    {
      id: 'cat-3',
      value: 'Overseas Visas & Passport RI',
      label: {
        EN: '03 — Overseas Visas & Indonesian Passport',
        ID: '03 — Visa Luar Negeri & Paspor RI',
        JP: '03 — 海外渡航ビザ・インドネシア旅券',
      },
    },
    {
      id: 'cat-4',
      value: 'Foreign Investment PT PMA Setup',
      label: {
        EN: '04 — Foreign Investment PT PMA & OSS Setup',
        ID: '04 — Pendirian PT PMA & Legalitas OSS',
        JP: '04 — 外資法人設立・事業認可（PT PMA）',
      },
    },
    {
      id: 'cat-5',
      value: 'Civil SKTT & Stay Services',
      label: {
        EN: '05 — Civil Registration, SKTT & Exit Permit (EPO)',
        ID: '05 — Layanan Sipil SKTT & Purna Izin Tinggal (EPO)',
        JP: '05 — 外国人市民登録・終了許可（EPO）',
      },
    },
    {
      id: 'cat-6',
      value: 'Airport VIP Fast-Track & Concierge',
      label: {
        EN: '06 — Airport VIP Fast-Track & APEC Card',
        ID: '06 — Airport VIP Fast-Track & Kartu APEC',
        JP: '06 — 空港VIPファストトラック・APECカード',
      },
    },
    {
      id: 'cat-7',
      value: 'Sworn Translation & Add-ons',
      label: {
        EN: '07 — Sworn Translation & Travel Support Add-ons',
        ID: '07 — Penerjemah Tersumpah & Travel Add-ons',
        JP: '07 — 法定公認翻訳・渡航支援サポート',
      },
    },
    {
      id: 'cat-other',
      value: 'Other',
      label: {
        EN: '08 — Other / Custom Legal Services',
        ID: '08 — Lainnya / Kebutuhan Hukum Khusus',
        JP: '08 — その他・個別法務相談',
      },
    },
  ];

  const getInitialInterest = () => {
    if (!initialService) return serviceCategories[0].value;
    if (typeof initialService === 'string') return initialService;
    return initialService.name[currentLang];
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedCategory: serviceCategories[0].value,
    customCategoryText: '',
    preferredLanguage: currentLang === 'JP' ? 'Japanese' : currentLang === 'ID' ? 'Indonesian' : 'English',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const WHATSAPP_NUMBER = '6281198821234';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const activeService =
      formData.selectedCategory === 'Other'
        ? `Lainnya / Other (${formData.customCategoryText || 'Spesifik'})`
        : formData.selectedCategory;

    const greeting =
      currentLang === 'JP'
        ? 'Visa Pro Teknologi ご担当者様、個別相談の申し込みを送信いたします。'
        : currentLang === 'EN'
        ? 'Hello Visa Pro Teknologi, I submitted a consultation request via the website modal.'
        : 'Halo Visa Pro Teknologi, saya mengajukan permintaan konsultasi resmi melalui website.';

    const textParts = [
      greeting,
      `\n\n• *Nama / Name:* ${formData.name}`,
      `\n• *Perusahaan / Company:* ${formData.company}`,
      `\n• *Email:* ${formData.email}`,
      `\n• *Telepon / WhatsApp:* ${formData.phone}`,
      `\n• *Kategori Layanan:* ${activeService}`,
      formData.notes ? `\n• *Detail Kebutuhan:* ${formData.notes}` : '',
      `\n• *Bahasa Pilihan:* ${formData.preferredLanguage}`,
    ]
      .filter(Boolean)
      .join('');

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textParts)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A192F]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFCFF] w-full max-w-xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#CBDCE9] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2EAF1] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F4E79]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A192F]">
              {currentLang === 'ID'
                ? 'Konsultasi & Audit Kepatuhan Regulasi'
                : currentLang === 'JP'
                ? '個別相談・法的要件事前審査'
                : 'Corporate Consultation & Eligibility Audit'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAFCFF] border border-[#CBDCE9] hover:bg-[#112F45]/10 text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#112F45]/10 text-[#112F45] flex items-center justify-center mx-auto border border-[#CBDCE9]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0A192F]">
                {currentLang === 'ID'
                  ? 'Permintaan Konsultasi Diterima'
                  : currentLang === 'JP'
                  ? 'ご相談リクエストを受け付けました'
                  : 'Consultation Request Logged'}
              </h4>
              <p className="text-xs text-[#4A5D73] max-w-sm mx-auto leading-relaxed">
                {currentLang === 'ID'
                  ? `Terima kasih. Konsultan berdedikasi kami yang fasih berbahasa ${formData.preferredLanguage} akan segera menganalisis dokumen dan menghubungi Anda.`
                  : currentLang === 'JP'
                  ? `送信ありがとうございました。${formData.preferredLanguage}対応の専任コンサルタントが確認の上、迅速にご案内いたします。`
                  : `Thank you. An immigration specialist fluent in ${formData.preferredLanguage} will review your parameters and follow up within 2 business hours.`}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-xl transition-colors cursor-pointer"
                >
                  {currentLang === 'ID' ? 'Selesai' : currentLang === 'JP' ? '閉じる' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#4A5D73] leading-relaxed">
                {currentLang === 'ID'
                  ? 'Dapatkan kepastian hukum, kelayakan indeks visa, dan estimasi waktu proses resmi langsung dari konsultan korporat Visa Pro Teknologi.'
                  : currentLang === 'JP'
                  ? 'インドネシア最新法規に基づくスポンサー要件、ビザ区分適合性、および手続きスケジュールを明確にご案内いたします。'
                  : 'Receive immediate clarity on sponsorship requirements, visa index suitability, and processing timelines under current Indonesian ministerial regulations.'}
              </p>

              {/* Service Selection Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#0A192F] mb-1.5" htmlFor="modal-service-category">
                  {currentLang === 'ID'
                    ? 'Pilih Kategori Layanan *'
                    : currentLang === 'JP'
                    ? 'ご希望のサービス分野を選択 *'
                    : 'Select Service Category *'}
                </label>
                <div className="relative">
                  <select
                    id="modal-service-category"
                    value={formData.selectedCategory}
                    onChange={(e) => setFormData({ ...formData, selectedCategory: e.target.value })}
                    className="w-full appearance-none bg-white px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79] cursor-pointer"
                  >
                    {serviceCategories.map((cat) => (
                      <option key={cat.id} value={cat.value}>
                        {cat.label[currentLang]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#4A5D73] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Conditional Input for "Other" Category */}
              {formData.selectedCategory === 'Other' && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-bold text-[#1F4E79] mb-1.5">
                    {currentLang === 'ID'
                      ? 'Sebutkan Layanan yang Anda Butuhkan *'
                      : currentLang === 'JP'
                      ? 'ご希望のサービス内容をご記入ください *'
                      : 'Specify Required Service *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customCategoryText}
                    onChange={(e) => setFormData({ ...formData, customCategoryText: e.target.value })}
                    placeholder={
                      currentLang === 'ID'
                        ? 'Contoh: Perpanjangan KITAS Lansia, Audit Kepatuhan TKA'
                        : currentLang === 'JP'
                        ? '例：リタイアメントビザ更新、法務デューデリジェンス等'
                        : 'e.g. Retirement Visa Renewal, Compliance Audit'
                    }
                    className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#1F4E79] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79]"
                  />
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                  {currentLang === 'ID' ? 'Nama Lengkap *' : currentLang === 'JP' ? 'お名前 *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={currentLang === 'ID' ? 'e.g. Budi Santoso / Kenji Tanaka' : 'e.g. Kenji Tanaka / Alexander Scott'}
                  className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                    {currentLang === 'ID' ? 'Perusahaan / Entitas *' : currentLang === 'JP' ? '貴社名・組織名 *' : 'Company / Entity *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. PT Toyota Tsusho"
                    className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                    {currentLang === 'ID' ? 'Email Kantor *' : currentLang === 'JP' ? '業務メールアドレス *' : 'Business Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corp@domain.com"
                    className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                    {currentLang === 'ID' ? 'WhatsApp / Telepon *' : currentLang === 'JP' ? 'お電話番号 / WhatsApp *' : 'WhatsApp / Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 811..."
                    className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                    {currentLang === 'ID' ? 'Pilihan Bahasa Konsultasi' : currentLang === 'JP' ? '対応希望言語' : 'Language Preference'}
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                  >
                    <option value="English">English</option>
                    <option value="Japanese">Japanese (日本語)</option>
                    <option value="Indonesian">Bahasa Indonesia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A192F] mb-1.5">
                  {currentLang === 'ID' ? 'Detail Tambahan / Catatan' : currentLang === 'JP' ? '補足事項・備考' : 'Additional Notes / Timelines'}
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    currentLang === 'ID'
                      ? 'Contoh: Jadwal kedatangan 2 minggu lagi, butuh pendampingan biometrik'
                      : currentLang === 'JP'
                      ? '例：2週間後の渡航予定、ジャカルタでの生体認証サポート希望'
                      : 'e.g. Estimated arrival in 2 weeks, need biometric escort'
                  }
                  className="w-full bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-xl transition-all shadow-md hover:shadow-lg group disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>
                      {currentLang === 'ID' ? 'Mengirim Permohonan...' : currentLang === 'JP' ? '送信中...' : 'Submitting Request...'}
                    </span>
                  ) : (
                    <>
                      <span>
                        {currentLang === 'ID'
                          ? 'Kirim Permohonan ke WhatsApp'
                          : currentLang === 'JP'
                          ? 'WhatsAppで相談を送信'
                          : 'Submit for Confidential Review'}
                      </span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#4A5D73]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F4E79]" />
                <span>Strict Non-Disclosure Agreement (NDA) Protected</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};