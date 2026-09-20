import React from 'react';
import { Language, ServiceItem } from '../types';
import { X, Clock, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, ChevronRight, MessageSquare } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  currentLang: Language;
  onClose: () => void;
  onRequestConsultation: (service: ServiceItem) => void;
  onBackToCategory?: (categoryId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  currentLang,
  onClose,
  onRequestConsultation,
  onBackToCategory,
}) => {
  if (!service) return null;

  const WHATSAPP_NUMBER = '6287887484517';

  const handleBreadcrumbClick = (catId?: string) => {
    if (onBackToCategory) {
      onBackToCategory(catId || 'all');
    } else {
      onClose();
    }
  };

  const handleWhatsAppDirect = () => {
    const message = currentLang === 'JP'
      ? `Visa Pro Teknologi 様、【${service.name.JP || service.name.EN}】について直接ご相談させていただきたく存じます。`
      : currentLang === 'EN'
      ? `Hello Visa Pro Teknologi, I would like to inquire about ${service.name.EN}.`
      : `Halo Visa Pro Teknologi, saya ingin berkonsultasi mengenai layanan ${service.name.ID}.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0A192F]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFCFF] w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#CBDCE9] overflow-hidden flex flex-col">
        
        {/* Top Header Bar dengan Breadcrumbs Interaktif */}
        <div className="px-6 py-4 border-b border-[#E2EAF1] flex items-center justify-between bg-white shrink-0">
          {/* Interactive Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-[#4A5D73] overflow-hidden whitespace-nowrap">
            <button
              type="button"
              onClick={() => handleBreadcrumbClick('all')}
              className="hover:text-[#1F4E79] hover:underline transition-colors cursor-pointer"
            >
              {currentLang === 'ID' ? 'Semua Katalog' : currentLang === 'JP' ? 'サービス一覧' : 'Services'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-[#CBDCE9]" />
            <button
              type="button"
              onClick={() => handleBreadcrumbClick(service.categoryId)}
              className="text-[#1F4E79] font-bold hover:underline transition-colors cursor-pointer"
            >
              {service.categoryName[currentLang]}
            </button>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-[#CBDCE9]" />
            <span className="truncate text-[#0A192F] font-bold">
              {service.name[currentLang]}
            </span>
          </nav>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAFCFF] border border-[#CBDCE9] hover:bg-[#112F45]/10 text-[#0A192F] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Title & Duration */}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-2.5">
                  {service.code && (
                    <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-md bg-[#112F45] text-white shadow-2xs">
                      {service.code}
                    </span>
                  )}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4E79] bg-[#112F45]/5 border border-[#CBDCE9] px-2.5 py-0.5 rounded-md">
                    {service.categoryName[currentLang]}
                  </span>
                  {service.subCategory && (
                    <span className="text-[11px] font-medium text-[#4A5D73] bg-white border border-[#CBDCE9] px-2.5 py-0.5 rounded-md">
                      {service.subCategory[currentLang] || service.subCategory.ID}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] font-sans-corporate tracking-tight">
                  {service.name[currentLang]}
                </h2>

                <div className="mt-3.5 flex items-center gap-2 text-xs font-medium text-[#4A5D73]">
                  <Clock className="w-4 h-4 text-[#1F4E79]" />
                  <span>
                    {currentLang === 'ID' ? 'Standar Estimasi SLA:' : currentLang === 'JP' ? '標準所要日数:' : 'Standard Processing SLA:'}{' '}
                    <strong className="text-[#0A192F]">{service.duration[currentLang]}</strong>
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="border-t border-[#E2EAF1] pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F4E79] mb-2">
                  {currentLang === 'ID' ? 'Ringkasan Layanan' : currentLang === 'JP' ? '業務概要' : 'Service Overview'}
                </h3>
                <p className="text-sm sm:text-base text-[#4A5D73] leading-relaxed">
                  {service.overview[currentLang]}
                </p>
              </div>

              {/* Who This Service Is For */}
              {service.whoFor[currentLang] && service.whoFor[currentLang].length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-[#CBDCE9] shadow-2xs">
                  <h3 className="text-sm font-bold text-[#0A192F] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1F4E79]" />
                    <span>
                      {currentLang === 'ID'
                        ? 'Target & Subjek Layanan'
                        : currentLang === 'JP'
                        ? '対象となるお客様'
                        : 'Who This Service Is For'}
                    </span>
                  </h3>
                  <ul className="space-y-2.5">
                    {service.whoFor[currentLang].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A192F]">
                        <CheckCircle className="w-4 h-4 text-[#1F4E79] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {service.requirements[currentLang] && service.requirements[currentLang].length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F4E79] mb-3">
                    {currentLang === 'ID' ? 'Persyaratan Dokumen Utama' : currentLang === 'JP' ? '主要提出要件・書類' : 'Key Mandatory Requirements'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.requirements[currentLang].map((req, idx) => (
                      <div key={idx} className="p-3.5 bg-white border border-[#CBDCE9] rounded-xl text-xs text-[#0A192F] shadow-2xs">
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F4E79] mb-4">
                    {currentLang === 'ID' ? 'Tahapan & Alur Pengerjaan' : currentLang === 'JP' ? '申請・手続きフロー' : 'Step-by-Step Execution Workflow'}
                  </h3>
                  <div className="space-y-3">
                    {service.processSteps.map((step) => (
                      <div key={step.step} className="p-4 bg-white border border-[#CBDCE9] rounded-2xl flex items-start gap-4 shadow-2xs">
                        <span className="w-7 h-7 rounded-xl bg-[#112F45] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#0A192F]">
                            {step.title[currentLang]}
                          </h4>
                          <p className="text-xs text-[#4A5D73] mt-1 leading-relaxed">
                            {step.desc[currentLang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Regulatory Information */}
              <div className="p-4 bg-[#112F45]/5 border border-[#CBDCE9] rounded-2xl flex items-start gap-3.5 text-xs text-[#0A192F]">
                <AlertCircle className="w-5 h-5 text-[#1F4E79] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-[#0A192F]">
                    {currentLang === 'ID' ? 'Catatan Regulasi Penting' : currentLang === 'JP' ? '法務・入管規定上の重要留意事項' : 'Important Legal Notice'}
                  </span>
                  <p className="text-[#4A5D73] leading-relaxed">{service.importantInfo[currentLang]}</p>
                </div>
              </div>

            </div>

            {/* Sidebar Column on Desktop */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Image Card */}
              <div className="rounded-2xl overflow-hidden border border-[#CBDCE9] shadow-2xs">
                <img
                  src={service.imageUrl}
                  alt={service.name[currentLang]}
                  className="w-full h-44 object-cover object-center"
                />
              </div>

              {/* Consultation Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#CBDCE9] text-center shadow-xs">
                <h4 className="text-base font-bold text-[#0A192F] mb-1">
                  {currentLang === 'ID' ? 'Ajukan Konsultasi Resmi' : currentLang === 'JP' ? '専門窓口へ相談する' : 'Ready to Proceed?'}
                </h4>
                <p className="text-xs text-[#4A5D73] mb-5 leading-relaxed">
                  {currentLang === 'ID'
                    ? 'Konsultan keimigrasian VPT siap melakukan audit kelayakan dan verifikasi regulasi terhadap dokumen Anda.'
                    : currentLang === 'JP'
                    ? '専任コンサルタントが要件審査および手続きスケジュールを迅速に検証いたします。'
                    : 'Our immigration attorneys and coordinators will review your candidate portfolio immediately.'}
                </p>

                <button
                  type="button"
                  onClick={() => onRequestConsultation(service)}
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-xl transition-all shadow-md hover:shadow-lg group cursor-pointer"
                >
                  <span>{currentLang === 'ID' ? 'Mulai Konsultasi' : currentLang === 'JP' ? '申請相談をリクエスト' : 'Request Consultation'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#1F4E79] hover:text-[#112F45] bg-[#FAFCFF] hover:bg-[#112F45]/5 border border-[#CBDCE9] rounded-xl transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +62 878 8748 4517</span>
                </button>
              </div>

              {/* Service Details Fast Facts */}
              <div className="p-4 bg-white rounded-2xl border border-[#CBDCE9] text-xs space-y-2.5 shadow-2xs">
                <div className="flex justify-between py-1 border-b border-[#E2EAF1]">
                  <span className="text-[#4A5D73]">{currentLang === 'ID' ? 'Instansi Terkait:' : 'Government Body:'}</span>
                  <span className="font-bold text-[#0A192F]">Ditjen Imigrasi / Kemnaker</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E2EAF1]">
                  <span className="text-[#4A5D73]">{currentLang === 'ID' ? 'Layanan Bahasa Jepang:' : 'Japanese Support:'}</span>
                  <span className="font-bold text-[#1F4E79]">Available (専任対応)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#4A5D73]">{currentLang === 'ID' ? 'Format Penerbitan:' : 'Delivery Format:'}</span>
                  <span className="font-bold text-[#0A192F]">Official e-Visa / e-ITAS</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};