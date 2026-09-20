import { ServiceCategory } from '../../types';

export const category6Executive: ServiceCategory = {
  number: "06",
  id: "executive-priority-services",
  title: {
    EN: "Executive Services & Priority Solutions",
    ID: "Layanan Eksekutif & Prioritas (Executive Services)",
    JP: "エグゼクティブ・特急優先サービス（Executive Services）"
  },
  description: {
    EN: "High-value VIP mobility, APEC Business Travel Card (ABTC), Airport VIP Fast-Track & Escort, on-site external audit defense, and expedited 1-day express processing for urgent corporate mandates.",
    ID: "Layanan VIP bernilai tambah untuk kecepatan proses, kenyamanan perjalanan eksekutif, pendampingan audit resmi, dan penanganan kebutuhan korporasi darurat berkecepatan tinggi.",
    JP: "APECビジネストラベルカード（ABTC）、主要国際空港VIPファストトラック・エスコート、入管・労働監査の専門官同行、最短1営業日の超特急（One Day Service）許認可処理。"
  },
  imageUrl: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Executive business traveler enjoying seamless priority airport fast-track lounge",
  services: [
    {
      id: "apec-business-travel-card",
      categoryId: "executive-priority-services",
      code: "ABTC-APEC",
      categoryName: { EN: "Executive Services", ID: "Layanan Eksekutif", JP: "VIPサービス" },
      name: {
        EN: "APEC Business Travel Card (ABTC / Kartu APEC)",
        ID: "Kartu APEC (ABTC - APEC Business Travel Card)",
        JP: "APECビジネストラベルカード（ABTC取得代行）"
      },
      shortDescription: {
        EN: "Facilitation of the APEC Business Travel Card (physical card & virtual ABTC) for Indonesian business executives, granting 5 years of visa-free travel and dedicated priority lanes across 19 APEC economies.",
        ID: "Pengurusan Kartu Perjalanan Bisnis APEC (ABTC Fisik & Virtual) bagi pebisnis WNI, memberikan fasilitas bebas visa dan antrean khusus di 19 negara ekonomi APEC selama 5 tahun.",
        JP: "インドネシア人役員・経営者向けAPECビジネストラベルカード（実物カード・バーチャルABTC）の取得申請。アジア太平洋19カ国への5年間ビザ免除入国および主要空港専用優先レーン利用。"
      },
      overview: {
        EN: "The ABTC is the gold standard for international mobility within the Asia-Pacific region, covering Australia, Japan, South Korea, China, Singapore, and 14 other economies. Cardholders bypass visa applications and utilize priority diplomatic/crew lanes at international airports.",
        ID: "Fasilitas mobilitas internasional eksklusif yang membebaskan pebisnis dari pengajuan visa berkali-kali ke 19 negara anggota APEC selama 5 tahun. VPT mendampingi verifikasi rekomendasi asosiasi bisnis (KADIN/Apindo), SKCK Mabes Polri, hingga persetujuan Ditjen Imigrasi.",
        JP: "オーストラリア、日本、韓国、中国、シンガポール等を含むAPEC加盟19カ国において、ビザなしでの短期商談入国（最大60〜90日滞在）と空港特設ファストトラック利用が可能となる最高峰の渡航資格です。"
      },
      whoFor: {
        EN: ["Corporate directors, commissioners, and senior executives with regional business travel", "Export-import business owners and regional partners"],
        ID: ["Direktur, Komisaris, dan pimpinan korporasi yang aktif melakukan perjalanan bisnis regional", "Pemilik bisnis ekspor-impor dan pelaku usaha investasi lintas negara"],
        JP: ["アジア太平洋地域への出張頻度が高い現地法人役員・経営幹部", "輸出入企業経営者および国際ビジネス開発担当役員"]
      },
      requirements: {
        EN: ["Indonesian passport valid min 2 years", "Clean Police Clearance (SKCK Mabes Polri)", "Recommendation letter from Indonesian Chamber of Commerce (KADIN) or business association", "Corporate financial and corporate tax dossiers"],
        ID: ["Paspor RI dengan masa berlaku minimal 2 tahun", "SKCK resmi dari Mabes Polri", "Surat rekomendasi dari asosiasi pengusaha (KADIN / Asosiasi terkait)", "Legalitas perusahaan dan bukti SPT Tahunan Badan & Pribadi"],
        JP: ["残存2年以上のインドネシア旅券", "国家警察本部（Mabes Polri）発行の無犯罪証明書（SKCK）", "インドネシア商工会議所（KADIN）または加盟業界団体の推薦状", "法人登記書類および直近の法人・個人納税証明書"]
      },
      processSteps: [
        { step: "01", title: { EN: "Association & Police Clearance", ID: "Rekomendasi KADIN & SKCK", JP: "商工会議所推薦・警察証明取得" }, desc: { EN: "Securing KADIN business endorsement and national police certificate.", ID: "Penyusunan berkas untuk rekomendasi KADIN dan pengurusan SKCK Mabes Polri.", JP: "KADIN推薦書および国家警察無犯罪証明の受領。" } },
        { step: "02", title: { EN: "Immigration Filing", ID: "Pengajuan ke Ditjen Imigrasi", JP: "入国管理局本庁申請" }, desc: { EN: "Submission to the Directorate General of Immigration ABTC division.", ID: "Pendaftaran resmi di Direktorat Jenderal Imigrasi pusat.", JP: "入国管理局総局ABTC担当窓口での本申請手続き。" } },
        { step: "03", title: { EN: "Pre-Clearance & Card Issuance", ID: "Persetujuan 19 Negara & Kartu Terbit", JP: "加盟国クリアランス・カード受領" }, desc: { EN: "Multi-country clearance coordination and delivery of active ABTC.", ID: "Monitoring persetujuan negara-negara APEC hingga kartu fisik/virtual terbit.", JP: "加盟各国の承認ステータス管理およびABTCカードの受領。" } }
      ],
      duration: { EN: "Pre-clearance: 2 – 4 months (Inter-government approval)", ID: "Proses approval antar-negara: 2 – 4 bulan", JP: "加盟国承認審査: 2〜4ヶ月" },
      importantInfo: { EN: "Valid for 5 years with unlimited entries into qualifying economies.", ID: "Berlaku selama 5 tahun penuh dengan hak masuk berulang tanpa visa tambahan.", JP: "5年間有効。対象エコノミーへの回数無制限のビザ免除入国が認められます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "airport-vip-fast-track",
      categoryId: "executive-priority-services",
      code: "AIRPORT-VIP",
      categoryName: { EN: "Executive Services", ID: "Layanan Eksekutif", JP: "VIPサービス" },
      name: {
        EN: "Airport VIP Fast-Track & Executive Escort",
        ID: "Airport VIP Fast-Track & Escort",
        JP: "主要国際空港VIPファストトラック & アテンドエスコート"
      },
      shortDescription: {
        EN: "Seamless airside VIP meet-and-greet, expedited priority immigration and customs clearance, baggage assistance, and executive transport transfer at Soekarno-Hatta (CGK) and Ngurah Rai (DPS).",
        ID: "Layanan penjemputan VIP di bandara Soekarno-Hatta (CGK) & Ngurah Rai (DPS), prioritas antrean imigrasi & bea cukai, penanganan bagasi, hingga transfer kendaraan eksekutif.",
        JP: "ジャカルタ（スカルノハッタCGK）およびバリ（ングラライDPS）空港での航空機ドア口VIP出迎え、専用入国審査・税関優先通過、手荷物受取代行、専用車送迎連携。"
      },
      overview: {
        EN: "Designed for corporate dignitaries, high-level delegates, and international executives, VPT's airport team greets passengers directly at the aerobridge gate, navigates dedicated diplomatic or VIP immigration channels in minutes, handles baggage claim, and escorts travelers directly to waiting executive transport.",
        ID: "Menghilangkan antrean panjang saat kedatangan dan keberangkatan internasional. Petugas representatif VPT menyambut tamu langsung di garbarata pesawat, mengawal proses pemeriksaan imigrasi prioritas, membantu penanganan koper, hingga pengantaran ke mobil jemputan.",
        JP: "長時間の入国審査列を完全に回避。専任スタッフがボーディングブリッジでお出迎えし、VIP専用レーンでの迅速な査証確認・税関通過、バゲッジクレームでの荷物ピックアップから送迎車両への乗車までを完全エスコートします。"
      },
      whoFor: {
        EN: ["International board members, CEOs, and corporate VIPs", "First-time arriving expatriates and families needing welcoming assistance", "Delegations and conference keynote speakers with tight schedules"],
        ID: ["Direksi dan komisaris korporasi multinasional", "TKA yang baru pertama kali tiba di Indonesia beserta anggota keluarganya", "Delegasi bisnis dan pembicara seminar dengan jadwal ketat"],
        JP: ["日本本社役員・海外親会社CEO・エグゼクティブ出張者", "初めてインドネシアに赴任する駐在員および帯同家族", "分刻みのスケジュールで行動する国際ビジネス視察団"]
      },
      requirements: {
        EN: ["Flight itinerary (flight number, arrival date and time)", "Passport photo page & copy of valid visa/e-VoA", "Contact number and pick-up driver details"],
        ID: ["Detail tiket penerbangan (nomor penerbangan, tanggal dan jam kedatangan)", "Foto paspor & copy e-Visa / e-VoA yang valid", "Nomor kontak tamu dan identitas penjemput/kendaraan"],
        JP: ["確定フライト旅程表（便名、到着日時）", "パスポート顔写真ページおよび事前取得ビザ（e-VoA/ITAS等）写し", "本人連絡先および出迎え車両・ドライバー情報"]
      },
      processSteps: [
        { step: "01", title: { EN: "Gate Meet & Greet", ID: "Penyambutan di Pintu Pesawat", JP: "降機時ボーディングゲート出迎え" }, desc: { EN: "Dedicated concierge waiting at the aerobridge with personalized name signage.", ID: "Petugas VPT menyambut penumpang di garbarata dengan papan nama resmi.", JP: "専用ネームボードを掲示し降機ゲート直前でお出迎え。" } },
        { step: "02", title: { EN: "Expedited Clearance", ID: "Jalur Cepat Imigrasi", JP: "VIP優先レーン入国手続き" }, desc: { EN: "Priority immigration stamp in under 5 minutes.", ID: "Pemeriksaan paspor di loket khusus tanpa antre.", JP: "優先窓口でのスピーディーなパスポート審査。" } },
        { step: "03", title: { EN: "Baggage & Escort to Car", ID: "Pengambilan Bagasi & Menuju Mobil", JP: "手荷物運搬・専用車へご案内" }, desc: { EN: "Porterage service and escort directly to waiting vehicle.", ID: "Bantuan pengambilan koper dan pendampingan hingga masuk kendaraan penjemput.", JP: "手荷物ピックアップ代行および待機車両へのスムーズな誘導。" } }
      ],
      duration: { EN: "10 – 15 minutes airport transit (vs 60-90 mins standard queue)", ID: "10 – 15 menit selesai (bebas antre 1-2 jam)", JP: "所要時間約10〜15分（通常1〜2時間の行列を回避）" },
      importantInfo: { EN: "Available for both International Arrivals and Departures at CGK and DPS.", ID: "Tersedia untuk Kedatangan (Arrival) dan Keberangkatan (Departure) di CGK & DPS.", JP: "ジャカルタおよびバリの両空港における到着・出発双方で手配可能です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "external-audit-assistance",
      categoryId: "executive-priority-services",
      code: "AUDIT-LEGAL",
      categoryName: { EN: "Executive Services", ID: "Layanan Eksekutif", JP: "VIPサービス" },
      name: {
        EN: "External Audit & Inspection Legal Assistance",
        ID: "Pendampingan Audit Eksternal (Keimigrasian & Kemnaker)",
        JP: "入国管理局・労働省立入検査・法務監査同行サポート"
      },
      shortDescription: {
        EN: "Strategic on-site legal representation and compliance defense during official immigration inspections (Wasdakim) and Ministry of Manpower labor audits at corporate offices or industrial plants.",
        ID: "Pendampingan hukum langsung di lokasi kantor atau pabrik saat inspeksi resmi Pengawasan dan Penindakan Keimigrasian (Wasdakim) serta Pengawas Ketenagakerjaan Kemenaker.",
        JP: "入国管理局監視取締部（Wasdakim）および労働省監査官による事業所・工場への抜き打ち立入調査、外国人就労実態検査への弁護士・専門コンサルタント立会同行。"
      },
      overview: {
        EN: "Immigration and labor enforcement authorities routinely conduct surprise field inspections to verify expatriate work permit validity, job title alignment, understudy presence, and statutory wage adherence. VPT provides rapid on-site counsel to verify inspection credentials, safeguard corporate rights, and ensure amicable resolution without disruption to operations.",
        ID: "Menghadapi pemeriksaan mendadak aparat terkait legalitas TKA di lokasi kerja. Tim VPT mendampingi manajemen perusahaan secara profesional, memverifikasi surat tugas pengawas, menyiapkan arsip pembuktian kepatuhan, serta meminimalisir risiko sanksi administrasi atau penyegelan.",
        JP: "突然の入管査察や労働基準監督官の臨検に対し、法的知見を有する専門チームが即座に現場へ同行。令状・身分証の確認、査察官への対応窓口、提示書類の整理を行い、不当な摘発や操業停止リスクを未然に防ぎます。"
      },
      whoFor: {
        EN: ["Corporate factories with foreign technical specialists on site", "Companies receiving official invitation letters (Panggilan Klarifikasi) from Immigration", "Multinationals conducting proactive compliance health-checks"],
        ID: ["Pabrik dan kantor operasional yang mempekerjakan tenaga kerja asing", "Perusahaan yang menerima surat panggilan klarifikasi resmi dari Kantor Imigrasi / Pengawas Ketenagakerjaan", "Manajemen yang ingin memastikan seluruh berkas TKA 100% aman sebelum inspeksi"],
        JP: ["多くの外国人技術者が常駐する製造工場・プラント", "入国管理局から出頭要請書（Surat Panggilan）を受領した現地法人", "定期的な法務・就労コンプライアンス総点検を希望する企業"]
      },
      requirements: {
        EN: ["Copy of inspection notification or official summons letter", "Complete expatriate dossiers (Passports, ITAS, RPTKA, Notifikasi, DKP-TKA)", "Company legalities and TKI understudy appointment letters"],
        ID: ["Copy surat tugas petugas / surat panggilan dari instansi terkait", "Seluruh berkas TKA yang diperiksa (Paspor, ITAS, Pengesahan RPTKA, bukti DKP-TKA)", "SK penunjukan TKI pendamping dan laporan ketenagakerjaan perusahaan"],
        JP: ["査察令状または出頭通知書の写し", "対象外国人の全許認可書類（旅券、ITAS、RPTKA認可、DKP-TKA納付証）", "インドネシア人後継者選任書および労働関係法定書類"]
      },
      processSteps: [
        { step: "01", title: { EN: "Emergency Briefing", ID: "Konsultasi & Telaah Berkas Kilat", JP: "緊急ブリーフィング・事実関係整理" }, desc: { EN: "Rapid review of the inspection scope and documentation.", ID: "Pemeriksaan cepat status berkas TKA dan identifikasi potensi celah.", JP: "指摘事項の事前整理および対応方針の策定。" } },
        { step: "02", title: { EN: "On-Site Legal Representation", ID: "Pendampingan di Lokasi / Kantor", JP: "立入調査立会・質疑応答補佐" }, desc: { EN: "VPT legal team joins company management during the audit session.", ID: "Konsultan VPT hadir mendampingi manajemen dalam sesi tanya-jawab resmi.", JP: "当局担当官との面談同席および証拠書類の適正提示。" } },
        { step: "03", title: { EN: "Official Closure & Minutes", ID: "Penyusunan Berita Acara & Kliring", JP: "調査調書確認・正式クローズ" }, desc: { EN: "Reviewing inspection minutes and formal closing of the inquiry.", ID: "Penandatanganan Berita Acara Pemeriksaan yang aman dan konfirmasi status bersih.", JP: "立入検査調書（BAP）の文言精査および無事解決の確定。" } }
      ],
      duration: { EN: "On-demand emergency response (within 2–4 hours)", ID: "Respon darurat on-demand (2 – 4 jam tim tiba di lokasi)", JP: "緊急オンデマンド対応（最短2〜4時間で現場急行）" },
      importantInfo: { EN: "Protects company executives and avoids unwarranted passport detentions or deportations.", ID: "Melindungi hak hukum perusahaan dan mencegah penyitaan paspor atau sanksi deportasi sepihak.", JP: "不当な旅券没収や身柄拘束、強制退去処分を未然に回避します。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "fast-track-express-processing",
      categoryId: "executive-priority-services",
      code: "EXPRESS-1DAY",
      categoryName: { EN: "Executive Services", ID: "Layanan Eksekutif", JP: "VIPサービス" },
      name: {
        EN: "Express & One Day Fast-Track Processing",
        ID: "Layanan Fast-Track / Express Service (One Day Service)",
        JP: "超特急申請代行（Express / Super Express / 1日即日完了）"
      },
      shortDescription: {
        EN: "Dedicated priority dispatch for urgent immigration and manpower filings, cutting processing times down to Express (3-5 days), Super Express (2-3 days), or One Day Service (1 business day) for HPK, RPTKA, ITAS, and e-Visas.",
        ID: "Layanan percepatan resmi untuk kebutuhan mendesak, mencakup jalur Express (3-5 hari), Super Express (2-3 hari), hingga One Day Service (1 hari kerja) untuk pengurusan HPK, RPTKA, ITAS, dan e-Visa.",
        JP: "緊急出張や査証満了直前の非常事態に対応する特急手配。通常1〜2週間かかる労働省HPK・RPTKA、入管e-Visa、ITAS手続きをExpress（3〜5日）、Super Express（2〜3日）、最短即日（One Day Service）で完了。"
      },
      overview: {
        EN: "When critical corporate projects, plant breakdowns, or imminent visa expirations demand zero downtime, standard governmental queues are insufficient. VPT utilizes priority institutional desks and dedicated processing liaisons to accelerate approvals legally within hours.",
        ID: "Solusi penyelamat saat visa akan overstay atau tenaga ahli harus segera tiba di lokasi proyek. Dengan koordinasi langsung bersama desk prioritas kementerian, seluruh alur verifikasi dapat dipacu secara sah sesuai koridor regulasi.",
        JP: "突発的なプラント故障、重要商談、またはビザ失効寸前の緊急事態において、最短リードタイムで正規認可を取得。特設優先ルートを通じ、安全かつ適法に超特急発行を実現します。"
      },
      whoFor: {
        EN: ["Enterprises with technical emergencies needing engineers on-site immediately", "Expatriates whose visas are expiring within 48-72 hours", "Urgent executive business travel with zero advance notice"],
        ID: ["Perusahaan dengan keadaan darurat mesin/pabrik yang butuh insinyur datang segera", "TKA dengan sisa izin tinggal kritis (kurang dari 3 hari)", "Eksekutif yang ditugaskan mendadak ke Indonesia"],
        JP: ["生産ライン停止など即刻エンジニアの入国が必要な企業", "在留期限の残存日数が3日未満の緊急更新案件", "急遽インドネシア渡航が決定したエグゼクティブ"]
      },
      requirements: {
        EN: ["Complete prerequisite documents ready for immediate upload", "Corporate urgency statement letter", "Authorization for dedicated liaison dispatch"],
        ID: ["Seluruh dokumen persyaratan dasar sudah lengkap dan siap upload", "Surat keterangan urgensi dari direksi perusahaan", "Surat kuasa khusus untuk tim percepatan VPT"],
        JP: ["即時提出可能な必要書類一式", "受入企業代表者による緊急理由申立書", "特急専任担当者への委任状"]
      },
      processSteps: [
        { step: "01", title: { EN: "1-Hour Pre-Audit", ID: "Audit Kilat 1 Jam", JP: "1時間以内超速書類審査" }, desc: { EN: "Immediate review ensuring error-free filing.", ID: "Pemeriksaan tuntas dokumen dalam 60 menit.", JP: "不備・差戻しゼロを期す即時データチェック。" } },
        { step: "02", title: { EN: "Priority Queue Injection", ID: "Pemasukan Jalur Prioritas", JP: "優先審査枠への直接投入" }, desc: { EN: "Direct assignment to priority adjudicators.", ID: "Pengawalan langsung di loket / verifikator prioritas kementerian.", JP: "所管官庁の優先審査ラインでの集中的承認処理。" } },
        { step: "03", title: { EN: "Same-Day Delivery", ID: "Penerbitan Hari yang Sama", JP: "即日認可・電子交付" }, desc: { EN: "Official decree or e-Visa issued and delivered.", ID: "Surat keputusan / e-Visa resmi terbit dalam 24 jam.", JP: "24時間以内での正式認可書・e-Visaの受領・納品。" } }
      ],
      duration: { EN: "1 – 3 business days (One Day Service available)", ID: "1 – 3 hari kerja (Tersedia One Day Service 24 Jam)", JP: "最短1営業日（24時間以内即日対応）" },
      importantInfo: { EN: "100% legal compliance with official PNBP state treasury fees.", ID: "100% sah dan resmi sesuai mekanisme PNBP dan regulasi pemerintah.", JP: "政府公式の優先処理枠に則り、適法かつ安全に完了します。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
