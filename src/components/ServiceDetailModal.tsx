import React from 'react';
import { Language, ServiceItem } from '../types';
import { X, Clock, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  currentLang: Language;
  onClose: () => void;
  onRequestConsultation: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  currentLang,
  onClose,
  onRequestConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#173A5E]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl border border-[#E8EDF1] overflow-hidden flex flex-col">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#E8EDF1] flex items-center justify-between bg-[#FAF9F6]">
          {/* Breadcrumbs */}
          <div className="flex items-center text-xs font-medium text-[#5B6B7C] overflow-hidden whitespace-nowrap">
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-[#2D6A9F]" />
            <span className="text-[#2D6A9F] font-semibold">{service.categoryName[currentLang]}</span>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-[#2D6A9F]" />
            <span className="truncate text-[#173A5E] font-bold">{service.name[currentLang]}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#E8EDF1] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors"
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
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {service.code && (
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#173A5E] text-white shadow-2xs">
                      {service.code}
                    </span>
                  )}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A9F] bg-[#EAF3FA] px-2.5 py-0.5 rounded">
                    {service.categoryName[currentLang]}
                  </span>
                  {service.subCategory && (
                    <span className="text-[11px] font-medium text-[#5B6B7C] bg-[#FAF9F6] border border-[#E8EDF1] px-2 py-0.5 rounded">
                      {service.subCategory[currentLang] || service.subCategory.ID}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173A5E] font-sans-corporate">
                  {service.name[currentLang]}
                </h2>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#5B6B7C]">
                  <Clock className="w-4 h-4 text-[#2D6A9F]" />
                  <span>Standard Processing SLA: <strong className="text-[#173A5E]">{service.duration[currentLang]}</strong></span>
                </div>
              </div>

              {/* Overview */}
              <div className="border-t border-[#E8EDF1] pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#173A5E] mb-2">
                  Service Overview
                </h3>
                <p className="text-sm sm:text-base text-[#5B6B7C] leading-relaxed">
                  {service.overview[currentLang]}
                </p>
              </div>

              {/* Who This Service Is For */}
              {service.whoFor[currentLang].length > 0 && (
                <div className="bg-[#FAF9F6] p-5 rounded-xl border border-[#E8EDF1]">
                  <h3 className="text-sm font-bold text-[#173A5E] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2D6A9F]" />
                    <span>Who This Service Is For</span>
                  </h3>
                  <ul className="space-y-2">
                    {service.whoFor[currentLang].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2933]">
                        <CheckCircle className="w-4 h-4 text-[#2D6A9F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {service.requirements[currentLang].length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#173A5E] mb-3">
                    Key Mandatory Requirements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.requirements[currentLang].map((req, idx) => (
                      <div key={idx} className="p-3 bg-white border border-[#E8EDF1] rounded-lg text-xs text-[#1F2933]">
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.processSteps.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#173A5E] mb-4">
                    Step-by-Step Execution Workflow
                  </h3>
                  <div className="space-y-3">
                    {service.processSteps.map((step) => (
                      <div key={step.step} className="p-4 bg-[#FAF9F6] border border-[#E8EDF1] rounded-xl flex items-start gap-4">
                        <span className="w-7 h-7 rounded-full bg-[#173A5E] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#173A5E]">
                            {step.title[currentLang]}
                          </h4>
                          <p className="text-xs text-[#5B6B7C] mt-1">
                            {step.desc[currentLang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Regulatory Information */}
              <div className="p-4 bg-[#EAF3FA] border border-[#DCECF7] rounded-xl flex items-start gap-3 text-xs text-[#173A5E]">
                <AlertCircle className="w-5 h-5 text-[#2D6A9F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Important Legal Notice</span>
                  <p className="text-[#5B6B7C]">{service.importantInfo[currentLang]}</p>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar on Desktop */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Image Card */}
              <div className="rounded-xl overflow-hidden border border-[#E8EDF1] shadow-2xs">
                <img
                  src={service.imageUrl}
                  alt={service.name[currentLang]}
                  className="w-full h-44 object-cover object-center"
                />
              </div>

              {/* Consultation Card */}
              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#E8EDF1] text-center">
                <h4 className="text-base font-bold text-[#173A5E] mb-1">
                  Ready to Proceed?
                </h4>
                <p className="text-xs text-[#5B6B7C] mb-5">
                  Our immigration attorneys and coordinators will review your candidate portfolio immediately.
                </p>

                <button
                  type="button"
                  onClick={() => onRequestConsultation(service)}
                  className="w-full inline-flex items-center justify-center py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs group"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-0.5" />
                </button>

                <a
                  href="https://wa.me/6281198821234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-xs font-semibold text-[#2D6A9F] hover:underline"
                >
                  Or ask via WhatsApp: +62 811 9882 1234
                </a>
              </div>

              {/* Service Details Fast Facts */}
              <div className="p-4 bg-white rounded-xl border border-[#E8EDF1] text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#5B6B7C]">Government Body:</span>
                  <span className="font-semibold text-[#173A5E]">Ditjen Imigrasi / Kemnaker</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#5B6B7C]">Japanese Support:</span>
                  <span className="font-semibold text-[#2D6A9F]">Available</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5B6B7C]">Delivery Format:</span>
                  <span className="font-semibold text-[#173A5E]">Official e-Visa / e-ITAS</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
