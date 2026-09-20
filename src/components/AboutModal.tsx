import React from 'react';
import { Language } from '../types';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0A192F]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFCFF] w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#CBDCE9] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2EAF1] flex items-center justify-between bg-white">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4E79]">
            VISA PRO TECHNOLOGY • CORPORATE NARRATIVE
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAFCFF] border border-[#CBDCE9] hover:bg-[#112F45]/10 text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer"
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79]">
                01 • {currentLang === 'ID' ? 'KILAS SEJARAH' : currentLang === 'JP' ? '設立背景' : 'OUR STORY'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-sans-corporate leading-tight">
                {currentLang === 'ID'
                  ? 'Lahir di Jakarta. Berakar pada Presisi.'
                  : currentLang === 'JP'
                  ? 'ジャカルタ発。高精度な法務・入管コンサルティング。'
                  : 'Born in Jakarta. Grounded in Precision.'}
              </h2>
              <p className="text-sm text-[#4A5D73] leading-relaxed">
                {currentLang === 'ID'
                  ? 'Visa Pro Teknologi (VPT) didirikan untuk menyelesaikan hambatan mendasar perusahaan multinasional saat berekspansi ke Indonesia: ketidakpastian regulasi. Bertahun-tahun, korporasi global menghadapi perubahan regulasi mendadak, durasi pengurusan visa yang tidak transparan, dan minimnya transparansi perantara.'
                  : currentLang === 'JP'
                  ? 'Visa Pro Technology（VPT）は、インドネシアへ進出する多国籍企業が直面する制度の不透明さや手続きの停滞を解消するために設立されました。目まぐるしく改定される省令通達や不透明な認可期間に対し、確かな法的確実性を提供します。'
                  : 'Visa Pro Technology (VPT) was established to solve a fundamental friction faced by multinational enterprises entering Indonesia: regulatory opacity. For years, international companies struggled with shifting ministerial decrees, unclear visa timelines, and unreliable intermediaries.'}
              </p>
              <p className="text-sm text-[#4A5D73] leading-relaxed">
                {currentLang === 'ID'
                  ? 'Kami mendirikan VPT berdasarkan standar kepatuhan mutlak, jaminan SLA terverifikasi, dan komunikasi proaktif. Saat ini, kami mendampingi manufaktur multinasional, grup energi, dan entitas teknologi terkemuka di Indonesia.'
                  : currentLang === 'JP'
                  ? 'VPTは完全な法令遵守、明確なSLA、迅速な日本語・英語対応を掲げ、大手自動車メーカーサプライヤーやエネルギー・IT系グローバル企業を強力に支援しています。'
                  : 'We founded VPT on institutional principles: absolute compliance, verifiable SLAs, and proactive communication. Today, we represent prominent manufacturing conglomerates, energy leaders, and global technology innovators across Indonesia.'}
              </p>
            </div>
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#CBDCE9] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Modern corporate architecture in Jakarta"
                className="w-full h-72 object-cover object-center"
              />
            </div>
          </div>

          {/* Section 2: Our Approach */}
          <div className="border-t border-[#E2EAF1] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden border border-[#CBDCE9] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
                alt="Senior VPT immigration counsel in advisory session"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79]">
                02 • {currentLang === 'ID' ? 'PENDEKATAN KAMI' : currentLang === 'JP' ? 'サービス方針' : 'OUR APPROACH'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-sans-corporate">
                {currentLang === 'ID'
                  ? 'Konsultasi Berbasis Kepastian Hukum.'
                  : currentLang === 'JP'
                  ? '人を中心に据えた確かな法務・許認可実務。'
                  : 'Human-Centered Advisory. Regulatory Certainty.'}
              </h3>
              <p className="text-sm text-[#4A5D73] leading-relaxed">
                {currentLang === 'ID'
                  ? 'Setiap permohonan visa dan izin tinggal mewakili karier para eksekutif dan proyek strategis perusahaan. Kami mendampingi Anda melalui konsultan senior berdedikasi dengan pemahaman hukum keimigrasian yang mendalam.'
                  : currentLang === 'JP'
                  ? 'すべてのビザ申請は企業の重要プロジェクトや駐在員のキャリアに直結します。自動返信や無機質な対応ではなく、経験豊富な専任担当者が貴社の事業環境に即して伴走します。'
                  : 'Every visa petition represents an executive’s career, an engineer’s mission, or a critical corporate relocation. We discard generic automated queues in favor of dedicated senior legal consultants.'}
              </p>
              <div className="pt-2 space-y-2.5 text-xs text-[#0A192F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E79] shrink-0" />
                  <span>{currentLang === 'ID' ? '100% legalitas resmi melalui sistem kementerian RI' : currentLang === 'JP' ? '法令順守・完全正規ルートによる官公庁申請' : 'Zero shortcuts — 100% legitimate government filings'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E79] shrink-0" />
                  <span>{currentLang === 'ID' ? 'Komunikasi langsung dalam Bahasa Indonesia, Inggris & Jepang' : currentLang === 'JP' ? '日本語・英語・インドネシア語によるシームレスな窓口対応' : 'Direct bilingual correspondence in Japanese, English & Indonesian'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E79] shrink-0" />
                  <span>{currentLang === 'ID' ? 'Struktur biaya transparan tanpa pungutan tersembunyi' : currentLang === 'JP' ? '明朗な料金体系・官庁実費の完全透明化' : 'Transparent fee schedules with no hidden disbursements'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Who We Serve */}
          <div className="border-t border-[#E2EAF1] pt-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-3">
              03 • {currentLang === 'ID' ? 'KLIEN KAMI' : currentLang === 'JP' ? '対象クライアント' : 'WHO WE SERVE'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-6 font-sans-corporate">
              {currentLang === 'ID'
                ? 'Solusi Tepat Sasaran untuk Setiap Kebutuhan'
                : currentLang === 'JP'
                ? 'ステークホルダーごとの専門ソリューション'
                : 'Specialized Solutions for Every Stakeholder'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-[#CBDCE9] rounded-2xl shadow-2xs">
                <h4 className="font-bold text-[#0A192F] text-base mb-2">
                  {currentLang === 'ID' ? 'Korporasi & Perusahaan Jepang' : currentLang === 'JP' ? '日系企業・現地法人' : 'Japanese Enterprises'}
                </h4>
                <p className="text-xs text-[#4A5D73] leading-relaxed">
                  {currentLang === 'ID'
                    ? 'Pengalaman menangani rantai pasok industri manufaktur, otomotif, dan logistik yang membutuhkan standar kepatuhan tinggi dan Japanese Desk.'
                    : currentLang === 'JP'
                    ? '高いコンプライアンス基準が求められる製造業・自動車サプライチェーン・商社様向けの日本語専任サポート実績が多数ございます。'
                    : 'Extensive experience with automotive supply networks and trading houses requiring stringent compliance and dedicated Japanese-speaking support.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#CBDCE9] rounded-2xl shadow-2xs">
                <h4 className="font-bold text-[#0A192F] text-base mb-2">
                  {currentLang === 'ID' ? 'Investor Asing & PT PMA' : currentLang === 'JP' ? '外国人投資家・PT PMA' : 'Foreign Investors & PMA'}
                </h4>
                <p className="text-xs text-[#4A5D73] leading-relaxed">
                  {currentLang === 'ID'
                    ? 'Pendirian PT PMA dari awal, verifikasi modal sesuai regulasi BKPM/OSS-RBA, serta izin tinggal Investor (E28A) untuk direksi.'
                    : currentLang === 'JP'
                    ? 'BKPM／OSS-RBA規則に則った外資系法人（PT PMA）設立、資本金確認、役員向け投資家ビザ（E28A）の取得を包括的に代行。'
                    : 'Turnkey PT PMA formation, capital verification under BKPM/OSS-RBA rules, and expedited Investor Stay Permits (E28A) for directors.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#CBDCE9] rounded-2xl shadow-2xs">
                <h4 className="font-bold text-[#0A192F] text-base mb-2">
                  {currentLang === 'ID' ? 'Tim HR & Legal Korporat' : currentLang === 'JP' ? '人事部・法務部チーム' : 'Corporate HR & Legal Teams'}
                </h4>
                <p className="text-xs text-[#4A5D73] leading-relaxed">
                  {currentLang === 'ID'
                    ? 'Manajemen kuota RPTKA terpadu, pemantauan masa berlaku izin tinggal, dan pendampingan biometrik teratur di Jabodetabek & Bali.'
                    : currentLang === 'JP'
                    ? '外国人雇用枠（RPTKA）の期日管理、有効期限アラート、ジャカルタ首都圏およびバリ島での生体認証（バイオメトリクス）同行支援。'
                    : 'Outsourced expatriate quota management, centralized renewal monitoring, and swift biometric logistics across Greater Jakarta and Bali.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: How We Work */}
          <div className="border-t border-[#E2EAF1] pt-10 bg-[#112F45]/5 -mx-6 sm:-mx-10 lg:-mx-12 p-8 sm:p-10 rounded-b-3xl border-b border-[#CBDCE9]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F4E79] block mb-2">
                04 • {currentLang === 'ID' ? 'ALUR KERJA' : currentLang === 'JP' ? '業務モデル' : 'HOW WE WORK'}
              </span>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-3 font-sans-corporate">
                {currentLang === 'ID'
                  ? 'Model Pendampingan Terstruktur & Terukur'
                  : currentLang === 'JP'
                  ? 'リスクを最小化する確実な業務フロー'
                  : 'A Predictable, Risk-Engineered Engagement Model'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D73] mb-6 leading-relaxed">
                {currentLang === 'ID'
                  ? 'Bersama VPT, Anda mendapatkan satu kontak penanggung jawab (single point of contact), penyimpanan dokumen yang terenkripsi aman, dan peringatan perpanjangan izin 60 hari sebelum jatuh tempo.'
                  : currentLang === 'JP'
                  ? 'VPTとのパートナーシップにより、専任担当者の一元管理、安全な暗号化ドキュメント保管、および有効期限60日前の自動アラート通知体制をご利用いただけます。'
                  : 'When you partner with VPT, you receive a single point of contact, encrypted document repositories, real-time status trackers, and proactive 60-day renewal alerts before any permit expires.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="inline-flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#112F45] hover:bg-[#1F4E79] rounded-xl transition-all shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span>
                  {currentLang === 'ID'
                    ? 'Mulai Konsultasi Korporasi'
                    : currentLang === 'JP'
                    ? '個別コンサルティングを申し込む'
                    : 'Initiate Corporate Consultation'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};