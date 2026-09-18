import { Testimonial, FaqItem } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    rating: 5,
    quote: {
      EN: "VPT helped our company navigate the immigration process smoothly. Their team was responsive, professional, and clear throughout the process. Managing expatriate deployments across our Jakarta technical center has become entirely predictable.",
      ID: "VPT membantu perusahaan kami menavigasi proses imigrasi dengan sangat lancar. Tim mereka sangat responsif, profesional, dan memberikan arahan yang jelas sepanjang proses penempatan ekspatriat.",
      JP: "VPTのおかげで、当社の駐在員派遣・就労ビザ取得が極めてスムーズに進みました。質問への回答が常に迅速かつ明瞭で、法改正の多いインドネシアにおいても安心して人事業務を委託できています。"
    },
    role: {
      EN: "HR Manager",
      ID: "Manajer HR",
      JP: "人事部マネージャー"
    },
    companyType: {
      EN: "Japanese Technology Company",
      ID: "Perusahaan Teknologi Jepang",
      JP: "日系大手IT・テクノロジー企業"
    },
    location: "Jakarta, Indonesia"
  },
  {
    id: "testimonial-2",
    rating: 5,
    quote: {
      EN: "The process was handled efficiently and professionally. We appreciated the consistent support from the VPT team, especially the dedicated bilingual account managers who understand the rigorous compliance standards of Japanese manufacturing groups.",
      ID: "Proses penanganan sangat efisien dan berstandar tinggi. Kami sangat mengapresiasi dukungan konsisten dari tim VPT, khususnya komunikasi bilingual yang sangat memahami kebutuhan kepatuhan manufaktur.",
      JP: "手続き全般が非常に効率的かつ高いプロ意識のもとで処理されました。日系製造業特有のコンプライアンス要件を深く理解したバイリンガル担当者の継続的なサポートに心から感謝しています。"
    },
    role: {
      EN: "Corporate Affairs Manager",
      ID: "Manajer Corporate Affairs",
      JP: "総務・法務部統括マネージャー"
    },
    companyType: {
      EN: "Japanese Manufacturing Company",
      ID: "Perusahaan Manufaktur Jepang",
      JP: "日系自動車・機械製造メーカー"
    },
    location: "Cikarang Industrial Estate, West Java"
  },
  {
    id: "testimonial-3",
    rating: 5,
    quote: {
      EN: "Incorporating our foreign investment firm (PT PMA) and securing multiple investor stay permits simultaneously was executed without a single delay. VPT's direct familiarity with BKPM and immigration authorities is unmatched.",
      ID: "Pendirian PT PMA kami beserta perolehan beberapa izin tinggal investor secara bersamaan terlaksana tanpa kendala satupun. Pemahaman regulasi VPT di BKPM dan Imigrasi sangat teruji.",
      JP: "外資法人（PT PMA）の設立登記から複数の投資家ビザ（Investor ITAS）の同時取得まで、一切の遅滞延着なく遂行されました。官公庁との折衝力と正確な法務アドバイスは群を抜いています。"
    },
    role: {
      EN: "Managing Director",
      ID: "Managing Director",
      JP: "マネージングディレクター（代表取締役）"
    },
    companyType: {
      EN: "European Renewable Energy Consortium",
      ID: "Konsorsium Energi Terbarukan Eropa",
      JP: "欧州系再生可能エネルギー企業"
    },
    location: "Sudirman Central Business District (SCBD)"
  }
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    tag: "Work Visa",
    question: {
      EN: "What visa do I need to work in Indonesia?",
      ID: "Visa apa yang saya butuhkan untuk bekerja di Indonesia?",
      JP: "インドネシアで就労するにはどのビザが必要ですか？"
    },
    answer: {
      EN: "Foreign nationals intending to work or receive compensation in Indonesia require a Working ITAS (Index E23, formerly C312). This requires a sponsoring Indonesian corporate entity (PT PMA or PT PMDN), an approved Foreign Worker Utilization Plan (RPTKA) from the Ministry of Manpower, and payment of the Skill Development Fund (DKP-TKA) at $100 USD/month. Performing commercial work on a business or tourist visa is strictly prohibited by Indonesian law.",
      ID: "Warga negara asing yang hendak bekerja atau menerima penghasilan di Indonesia wajib memiliki ITAS Kerja (Indeks E23, sebelumnya C312). Proses ini membutuhkan entitas sponsor di Indonesia (PT PMA/PT PMDN), pengesahan RPTKA dari Kementerian Ketenagakerjaan, serta pembayaran DKP-TKA sebesar $100 USD per bulan. Melakukan pekerjaan komersial dengan visa kunjungan dilarang oleh hukum imigrasi.",
      JP: "インドネシアで就労し給与等の報酬を得る外国人は、就労一時滞在許可証（Working ITAS / 旧C312、現Index E23）が必要です。受入先法人（PT PMA等）による労働省への外国人雇用計画（RPTKA）の事前申請と認可、および外国人雇用補償基金（DKP-TKA：月額100ドル）の納付が前提となります。商用ビザや観光ビザでの実務就労は不法就労として厳格に禁止されています。"
    }
  },
  {
    id: "faq-2",
    tag: "Immigration Terms",
    question: {
      EN: "What is ITAS?",
      ID: "Apa itu ITAS?",
      JP: "ITAS（一時滞在許可証）とは何ですか？"
    },
    answer: {
      EN: "ITAS stands for 'Izin Tinggal Terbatas' (Limited Stay Permit). It is an official immigration status granted to foreign nationals for residency in Indonesia, typically valid for 6 months, 1 year, or 2 years with multi-exit re-entry permits (MERP). The physical document is issued digitally as an e-ITAS accompanied by biometric photo and fingerprint records in the national immigration database.",
      ID: "ITAS adalah singkatan dari Izin Tinggal Terbatas. Ini adalah izin resmi yang diterbitkan Ditjen Imigrasi bagi WNA untuk menetap di Indonesia dalam kurun waktu tertentu (6 bulan, 1 tahun, atau 2 tahun) yang telah dilengkapi dengan izin keluar-masuk kembali berkali-kali (MERP). Dokumen ini diterbitkan secara digital dalam format e-ITAS.",
      JP: "ITASとは「Izin Tinggal Terbatas（一時滞在許可）」の略称です。就労、投資、留学、帯同家族などの目的でインドネシアに一定期間（半年、1年、2年等）居住する外国人に発給される正規の在留資格です。出国再入国許可（MERP）が自動付帯しており、現在は生体認証後に電子版（e-ITAS）として交付されます。"
    }
  },
  {
    id: "faq-3",
    tag: "Processing Time",
    question: {
      EN: "How long does the immigration process take?",
      ID: "Berapa lama proses pengurusan imigrasi berlangsung?",
      JP: "ビザ・ITASの取得にはどのくらいの期間がかかりますか？"
    },
    answer: {
      EN: "A standard Working ITAS application typically takes 10 to 14 business days from document submission to eVisa issuance. Investor ITAS requires approximately 7 to 10 business days. Standard multiple-entry business visas (D212) require 3 to 5 business days. VPT also offers priority expedited processing for urgent corporate relocation needs.",
      ID: "Pengurusan ITAS Kerja standar umumnya memakan waktu 10 hingga 14 hari kerja dari kelengkapan dokumen hingga terbitnya eVisa. ITAS Investor membutuhkan waktu sekitar 7 hingga 10 hari kerja, sedangkan visa bisnis multi-entry berkisar antara 3 hingga 5 hari kerja. VPT menyediakan jalur koordinasi prioritas untuk penugasan mendesak.",
      JP: "新規の就労ビザ・ITASの場合、必要書類が揃ってから労働省承認・入管eVisa発給まで通常10〜14営業日程度です。投資家ビザは7〜10営業日、数次商用ビザ（D212）は3〜5営業日です。お急ぎの役員着任には優先エクスプレス手続きも承っております。"
    }
  },
  {
    id: "faq-4",
    tag: "Requirements",
    question: {
      EN: "What documents are required?",
      ID: "Dokumen apa saja yang diperlukan?",
      JP: "申請に必要な書類は何ですか？"
    },
    answer: {
      EN: "Candidate documents generally include: a color scan of the passport (minimum 18 months validity), updated curriculum vitae, degree diploma matching the job role, proof of at least 5 years professional experience, and a formal red/white background photograph. Corporate sponsor documents include the company deed, AHU validation, NIB business identity, tax NPWP, and proof of BPJS employment registration.",
      ID: "Dokumen kandidat meliputi: pindaian paspor berwarna (masa berlaku min. 18 bulan), CV terbaru, ijazah pendidikan relevan, surat bukti pengalaman kerja minimal 5 tahun, dan pasfoto resmi. Dokumen perusahaan sponsor meliputi akta pendirian & perubahan, SK AHU Kemenkumham, NIB OSS, NPWP badan, dan bukti kepesertaan BPJS Ketenagakerjaan.",
      JP: "ご本人側書類：有効期限18ヶ月以上のパスポート全頁スキャン、英文履歴書、最終学歴卒業証明書、5年以上の関連職歴証明書、証明写真。受入企業側書類：定款および変更定款、法務人権省承認書（AHU）、事業基本番号（NIB）、納税番号（NPWP）、労働社会保障（BPJS）加入証明書等が必要です。VPTにて事前チェックリストをご提供します。"
    }
  },
  {
    id: "faq-5",
    tag: "Corporate Support",
    question: {
      EN: "Can VPT assist companies with foreign employees?",
      ID: "Dapatkah VPT membantu perusahaan dalam mengelola karyawan asing?",
      JP: "企業単位での外国人社員の一括管理・代行は可能ですか？"
    },
    answer: {
      EN: "Yes. VPT specializes in enterprise-scale foreign workforce management. We provide dedicated corporate account managers who oversee company-wide expatriate quotas, automate 60-day renewal alerts, execute batch RPTKA modifications, coordinate biometrics logistics, and handle mandatory civil/police notifications (SKTT & STM).",
      ID: "Tentu. VPT memiliki spesialisasi dalam manajemen tenaga kerja asing tingkat korporat. Kami menyediakan manajer akun khusus yang mengelola kuota TKA, sistem pengingat perpanjangan otomatis 60 hari sebelum kadaluarsa, amandemen RPTKA kolektif, pendampingan biometrik, hingga pendaftaran sipil SKTT & STM.",
      JP: "はい、可能です。多くの日系大手企業および多国籍企業様と年間コーポレート契約を締結しております。駐在員の雇用枠管理、ビザ有効期限の60日前自動アラート、RPTKAの一括変更申請、入管生体認証時の専任同行、入国後の外国人仮住民登録（SKTT・STM）まで包括的に代行します。"
    }
  },
  {
    id: "faq-6",
    tag: "Company Setup",
    question: {
      EN: "Can VPT assist with company establishment?",
      ID: "Dapatkah VPT membantu dalam pendirian perusahaan baru?",
      JP: "新規法人の設立やライセンス取得も依頼できますか？"
    },
    answer: {
      EN: "Yes. Our corporate legal division handles turnkey Foreign Investment Company (PT PMA) establishment under BKPM guidelines, including KBLI classification mapping, Notarial Deeds, Ministry of Law (Menkumham) legalization, OSS Risk-Based Licensing (NIB), tax registration (NPWP), and commercial bank account setup.",
      ID: "Ya. Divisi hukum korporat kami menangani pendirian PT PMA terpadu sesuai ketentuan BKPM, pemetaan klasifikasi usaha KBLI, pembuatan akta notaris, pengesahan SK Kemenkumham, perizinan OSS RBA (NIB), pendaftaran NPWP perusahaan, hingga pembukaan rekening bank operasional.",
      JP: "はい、承っております。外資系現地法人（PT PMA）の設立、外資規制（ネガティブリスト）に基づく事業コード（KBLI）の選定、公証人定款作成、法務人権省登記、OSSリスクベース事業許可（NIB）、法人税務番号（NPWP）取得までワンストップで代行いたします。"
    }
  },
  {
    id: "faq-7",
    tag: "Getting Started",
    question: {
      EN: "How do I start a consultation?",
      ID: "Bagaimana cara memulai sesi konsultasi?",
      JP: "相談や見積りの依頼はどのように行えばよいですか？"
    },
    answer: {
      EN: "You can initiate a consultation immediately through our online inquiry form, via direct corporate WhatsApp at +62 811 9882 1234, or by emailing info@visaprotechnology.co.id. For Japanese enterprises, inquiries may also be directed to our dedicated Japanese Desk (japan.desk@visaprotechnology.co.id). A senior consultant will respond within 2 business hours.",
      ID: "Anda dapat memulai konsultasi secara instan melalui formulir web kami, WhatsApp resmi +62 811 9882 1234, atau email ke info@visaprotechnology.co.id. Untuk korporasi Jepang, pertanyaan dapat diajukan ke Japan Desk kami (japan.desk@visaprotechnology.co.id). Konsultan kami akan merespons dalam kurun waktu 2 jam kerja.",
      JP: "本ウェブサイトのお問い合わせフォーム、公式WhatsApp（+62 811 9882 1234）、または電子メール（japan.desk@visaprotechnology.co.id）よりお気軽にご連絡ください。日本語専任担当者より、通常2営業時間以内にご要件のヒアリングとお見積り・スケジュール案をご案内いたします。"
    }
  }
];
