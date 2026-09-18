import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

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
  const getInitialInterest = () => {
    if (!initialService) return 'Working Visa & ITAS (E23/C312)';
    if (typeof initialService === 'string') return initialService;
    return initialService.name[currentLang];
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: getInitialInterest(),
    preferredLanguage: currentLang === 'JP' ? 'Japanese' : currentLang === 'ID' ? 'Indonesian' : 'English',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#173A5E]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#E8EDF1] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8EDF1] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2D6A9F]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#173A5E]">
              Corporate Consultation & Eligibility Audit
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#E8EDF1] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EAF3FA] text-[#2D6A9F] flex items-center justify-center mx-auto border border-[#DCECF7]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#173A5E]">
                Consultation Request Logged
              </h4>
              <p className="text-xs text-[#5B6B7C] max-w-xs mx-auto leading-relaxed">
                Thank you. An immigration specialist fluent in {formData.preferredLanguage} will review your parameters and follow up within 2 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#5B6B7C]">
                Receive immediate clarity on sponsorship requirements, visa index suitability, and processing timelines under current Indonesian ministerial regulations.
              </p>

              <div>
                <label className="block text-xs font-bold text-[#173A5E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kenji Tanaka / Alexander Scott"
                  className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1">
                    Company / Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. PT Toyota Tsusho"
                    className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corp@domain.com"
                    className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 811..."
                    className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#173A5E] mb-1">
                    Language Preference
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                  >
                    <option value="English">English</option>
                    <option value="Japanese">Japanese (日本語)</option>
                    <option value="Indonesian">Bahasa Indonesia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173A5E] mb-1">
                  Primary Scope of Inquiry
                </label>
                <input
                  type="text"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  placeholder="e.g. Working ITAS for 4 Japanese engineers, PT PMA establishment"
                  className="w-full bg-[#FAF9F6] px-3 py-2 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs group disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit for Confidential Review</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5B6B7C]">
                <ShieldCheck className="w-3 h-3 text-[#2D6A9F]" />
                <span>Strict Non-Disclosure Agreement (NDA) Protected</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
