import React from 'react';
import { Language } from '../types';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  currentLang,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#173A5E]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl border border-[#E8EDF1] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8EDF1] flex items-center justify-between bg-[#FAF9F6]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A9F]">
            VISA PRO TECHNOLOGY • CORPORATE NARRATIVE
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#E8EDF1] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Storytelling Content */}
        <div className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-16 flex-1">
          
          {/* Section 1: Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B99A5C]">
                01 • OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173A5E] tracking-tight font-sans-corporate leading-tight">
                Born in Jakarta. Grounded in Precision.
              </h2>
              <p className="text-sm text-[#5B6B7C] leading-relaxed">
                Visa Pro Technology (VPT) was established to solve a fundamental friction faced by multinational enterprises entering Indonesia: regulatory opacity. For years, international companies struggled with shifting ministerial decrees, unclear visa timelines, and unreliable intermediaries.
              </p>
              <p className="text-sm text-[#5B6B7C] leading-relaxed">
                We founded VPT on institutional principles: absolute compliance, verifiable SLAs, and proactive communication. Today, we represent prominent Japanese manufacturing conglomerates, European energy leaders, and global technology innovators across Indonesia.
              </p>
            </div>
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#E8EDF1] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Modern corporate glass architecture in Jakarta"
                className="w-full h-72 object-cover object-center"
              />
            </div>
          </div>

          {/* Section 2: Our Approach */}
          <div className="border-t border-[#E8EDF1] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 rounded-xl overflow-hidden border border-[#E8EDF1] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                alt="Senior VPT immigration counsel in direct advisory session with corporate client"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F]">
                02 • OUR APPROACH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173A5E] font-sans-corporate">
                Human-Centered Advisory. Regulatory Certainty.
              </h3>
              <p className="text-sm text-[#5B6B7C] leading-relaxed">
                Every visa petition represents an executive's career, an engineer's mission, or a family's international relocation. We discard generic automated ticket queues in favor of dedicated senior legal consultants who understand your corporate context.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#1F2933]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
                  <span>Zero shortcuts — 100% legitimate government filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
                  <span>Direct bilingual correspondence in Japanese, English & Indonesian</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A9F]" />
                  <span>Transparent fee schedules with no hidden governmental disbursements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Who We Serve */}
          <div className="border-t border-[#E8EDF1] pt-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B99A5C] block mb-3">
              03 • WHO WE SERVE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173A5E] mb-6 font-sans-corporate">
              Specialized Solutions for Every Stakeholder
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 bg-[#FAF9F6] border border-[#E8EDF1] rounded-xl">
                <h4 className="font-bold text-[#173A5E] text-base mb-2">Japanese Enterprises</h4>
                <p className="text-xs text-[#5B6B7C] leading-relaxed">
                  Decades of experience with Toyota, Mitsubishi, and automotive supplier networks requiring stringent compliance and Japanese-speaking account coordinators.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E8EDF1] rounded-xl">
                <h4 className="font-bold text-[#173A5E] text-base mb-2">Foreign Investors & PMA</h4>
                <p className="text-xs text-[#5B6B7C] leading-relaxed">
                  Turnkey PT PMA formation, capital verification under BKPM rules, and expedited Investor Stay Permits (Index E28A) for directors and founders.
                </p>
              </div>
              <div className="p-5 bg-[#FAF9F6] border border-[#E8EDF1] rounded-xl">
                <h4 className="font-bold text-[#173A5E] text-base mb-2">Corporate HR & Legal Teams</h4>
                <p className="text-xs text-[#5B6B7C] leading-relaxed">
                  Outsourced expatriate quota management, centralized renewal monitoring, and swift biometric logistics across Greater Jakarta and Bali.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: How We Work */}
          <div className="border-t border-[#E8EDF1] pt-12 bg-[#EAF3FA] -mx-6 sm:-mx-10 lg:-mx-12 p-8 sm:p-10 rounded-b-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D6A9F] block mb-2">
                04 • HOW WE WORK
              </span>
              <h3 className="text-2xl font-bold text-[#173A5E] mb-3 font-sans-corporate">
                A Predictable, Risk-Engineered Engagement Model
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B7C] mb-6 leading-relaxed">
                When you partner with VPT, you receive a single point of contact, encrypted document repositories, real-time status trackers, and proactive 60-day renewal alerts before any permit expires.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="inline-flex items-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#173A5E] hover:bg-[#2D6A9F] rounded-lg transition-colors shadow-xs group"
              >
                <span>Initiate Corporate Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
