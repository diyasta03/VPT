import { ServiceCategory } from '../../types';

export const category1Expatriate: ServiceCategory = {
  number: "01",
  id: "expatriate-services",
  title: {
    EN: "Expatriate Services & Work Permits",
    ID: "Keimigrasian & Izin Kerja TKA (Expatriate Services)",
    JP: "外国人就労許可・駐在員法務（Expatriate Services）"
  },
  description: {
    EN: "Dedicated category for full legal compliance and work permit management for foreign workers (TKA) and investors in Indonesia under Kemnaker and Immigration regulations.",
    ID: "Kategori khusus untuk pengurusan legalitas Tenaga Kerja Asing (TKA) dan Investor secara penuh demi kepatuhan regulasi keimigrasian dan ketenagakerjaan di Indonesia.",
    JP: "インドネシア労働省（Kemnaker）および法務人権省入国管理局の規定に完全準拠した、外国人駐在員・専門技術者・役員・投資家の総合就労・滞在認可管理。"
  },
  imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Professional corporate expatriate specialist and legal consultant in Jakarta",
  services: [
    {
      id: "working-visa-itas",
      categoryId: "expatriate-services",
      code: "E23",
      categoryName: {
        EN: "Expatriate Services",
        ID: "Keimigrasian & Izin Kerja TKA",
        JP: "外国人就労許可"
      },
      name: {
        EN: "Working Visa & Working ITAS (Index E23)",
        ID: "Working Visa & ITAS Kerja",
        JP: "就労ビザ & ITAS（Index E23）"
      },
      shortDescription: {
        EN: "End-to-end e-Visa and Limited Stay Permit (ITAS) service for new expatriates and renewals, covering both short-term (1-6 months) and long-term (7-24 months).",
        ID: "Halaman layanan pengurusan e-Visa Kerja dan Izin Tinggal Terbatas (ITAS) untuk TKA baru maupun perpanjangan, baik jangka pendek (1–6 bulan) maupun jangka panjang (7–24 bulan).",
        JP: "新規および更新の外国人駐在員向けe-Visaおよび一時滞在許可証（ITAS）。短期（1〜6ヶ月）および長期（7〜24ヶ月）の両方に対応。"
      },
      overview: {
        EN: "The Working ITAS (Index E23) is the mandatory statutory permit for foreign nationals performing professional duties or receiving remuneration within an Indonesian corporate sponsor. VPT handles the petition through Kemnaker TKA Online and Molina Immigration portal from RPTKA, billing DKP-TKA, e-Visa issuance to biometric validation and digital ITAS issuance.",
        ID: "Working Visa & ITAS Kerja merupakan izin legal utama bagi Tenaga Kerja Asing (TKA) yang bekerja di Indonesia. Meliputi pengurusan RPTKA Kemnaker, billing DKP-TKA ($100/bulan), e-Visa Kerja hingga perekaman biometrik dan penerbitan e-ITAS resmi.",
        JP: "インドネシア国内企業で就労・役員就任する外国人に必須となる就労滞在許可証です。労働省RPTKA承認、外国人雇用補償基金（DKP-TKA）納付、e-Visa発給から入国後の生体認証登録・e-ITAS受領までを一括代行します。"
      },
      whoFor: {
        EN: [
          "Foreign directors, commissioners, and senior executives",
          "Specialized expatriate engineers, technicians, and advisors",
          "Short-term project engineers (1–6 months)",
          "Long-term multinational corporate assignees (7–24 months)"
        ],
        ID: [
          "Direktur dan Komisaris asing di PT PMA / PT PMDN",
          "Tenaga ahli, insinyur spesialis, dan konsultan teknis asing",
          "TKA penugasan proyek jangka pendek (1–6 bulan)",
          "TKA penugasan operasional jangka panjang (7–24 bulan)"
        ],
        JP: [
          "現地法人PT PMAの取締役・監査役（役員）",
          "日系企業・外資系企業からの派遣駐在員・マネージャー",
          "短期プロジェクト技術指導員（1〜6ヶ月）",
          "長期製造ライン・管理部門責任者（7〜24ヶ月）"
        ]
      },
      requirements: {
        EN: [
          "Valid passport with minimum 18 months validity",
          "Expatriate CV, educational degree, and certificate of employment",
          "Sponsoring entity corporate dossier (NIB, Akta, SK Menkumham, NPWP, BPJS)",
          "Formal employment contract & corporate organizational chart",
          "DKP-TKA Manpower Development Fund payment ($100/month)"
        ],
        ID: [
          "Paspor berlaku minimal 18 bulan",
          "CV, ijazah pendidikan terakhir, dan surat pengalaman kerja",
          "Legalitas perusahaan sponsor (NIB, Akta Pendirian/Perubahan, SK Menkumham, NPWP, BPJS)",
          "Draft kontrak kerja dan bagan struktur organisasi perusahaan",
          "Bukti setor DKP-TKA Kemenaker (US$ 100/bulan per TKA)"
        ],
        JP: [
          "有効期間18ヶ月以上のパスポート",
          "英文履歴書、最終学歴卒業証明書、職歴証明書",
          "受入企業の会社定款、法人認可証（NIB、NPWP、BPJS等）",
          "雇用契約書および社内組織図",
          "労働省外国人雇用補償基金（DKP-TKA：月額100ドル）納付書"
        ]
      },
      processSteps: [
        {
          step: "01",
          title: { EN: "Eligibility & Job Quota Audit", ID: "Audit Kualifikasi & Kuota Jabatan", JP: "職位・受入枠事前審査" },
          desc: { EN: "Verification of job title against Kepmenaker 228/2019 and Indonesian co-worker counterpart assignment.", ID: "Pemeriksaan kesesuaian jabatan dengan Kepmenaker 228/2019 serta penunjukan TKI Pendamping.", JP: "大臣令に基づく就任可能職位、資格要件およびカウンターパート配置確認。" }
        },
        {
          step: "02",
          title: { EN: "RPTKA Approval & DKP-TKA", ID: "Pengesahan RPTKA & Billing DKP-TKA", JP: "RPTKA認可およびDKP-TKA納付" },
          desc: { EN: "Securing Kemnaker HPK feasibility assessment and official RPTKA decree.", ID: "Pengajuan Penilaian Kelayakan (HPK) hingga terbit Keputusan Pengesahan RPTKA dan kode billing DKP-TKA.", JP: "労働省雇用計画書（RPTKA）審査承認および基金納付手続き。" }
        },
        {
          step: "03",
          title: { EN: "e-Visa Issuance", ID: "Penerbitan e-Visa Kerja", JP: "入国管理局e-Visa発給" },
          desc: { EN: "Immigration electronic visa issuance granting legal entry into Indonesian territory.", ID: "Proses verifikasi imigrasi dan penerbitan e-Visa resmi untuk masuk ke Indonesia.", JP: "入国管理局ポータルでの電子就労ビザ発行と渡航手配。" }
        },
        {
          step: "04",
          title: { EN: "Biometrics & e-ITAS Delivery", ID: "Biometrik & e-ITAS Terbit", JP: "生体認証登録・e-ITAS受領" },
          desc: { EN: "Biometric photo and fingerprint capture at local immigration office and digital ITAS issuance.", ID: "Perekaman foto & sidik jari di kantor imigrasi setempat dan penyerahan e-ITAS resmi.", JP: "管轄入国管理局での写真・指紋登録およびデジタルITAS交付。" }
        }
      ],
      duration: { EN: "10 – 14 business days (Express available: 5-7 days)", ID: "10 – 14 hari kerja (Jalur Express: 5-7 hari)", JP: "通常 10〜14営業日（特急: 5〜7営業日）" },
      importantInfo: { EN: "Complies with the latest Indonesian Ministry of Manpower Regulations and Directorate General of Immigration circulars.", ID: "Sesuai regulasi Peraturan Pemerintah No. 34/2021 dan Kepmenaker No. 228/2019.", JP: "労働法令および入国管理最新規定に完全準拠。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "investor-itas",
      categoryId: "expatriate-services",
      code: "E28A/E28B",
      categoryName: {
        EN: "Expatriate Services",
        ID: "Keimigrasian & Izin Kerja TKA",
        JP: "外国人就労許可"
      },
      name: {
        EN: "Investor ITAS (1 Year & 2 Years)",
        ID: "Investor ITAS",
        JP: "投資家ビザ & ITAS（Investor ITAS 1年・2年）"
      },
      shortDescription: {
        EN: "Special limited stay permit for foreign direct shareholders/investors in Indonesian foreign-owned companies (PT PMA) with 1-year or 2-year validity options.",
        ID: "Izin tinggal khusus bagi Penanam Modal Asing (PMA) / investor di Indonesia dengan pilihan masa berlaku 1 tahun atau 2 tahun.",
        JP: "インドネシア外資系現地法人（PT PMA）の外国人出資者・株主向け滞在許可。1年間または2年間の有効期間から選択可能。"
      },
      overview: {
        EN: "Investor ITAS exempts qualifying foreign shareholders who hold minimum capital shares in a PT PMA from the requirement of obtaining a Kemnaker RPTKA and exempts them from the $100/month DKP-TKA tax if serving as Director/Commissioner. VPT manages the entire BKPM OSS-RBA capital verification and immigration petition.",
        ID: "Izin tinggal khusus bagi Penanam Modal Asing (PMA) / investor di Indonesia dengan pilihan masa berlaku 1 tahun atau 2 tahun. Bebas dari kewajiban RPTKA dan iuran DKP-TKA Kemnaker apabila memenuhi threshold kepemilikan saham.",
        JP: "PT PMAの出資持分基準（最低10億ルピア以上の自己株式保有）を満たす外国人投資家向けの長期滞在許可。取締役就任時は労働省RPTKAや毎月100ドルの雇用補償基金が免除される特典があります。"
      },
      whoFor: {
        EN: [
          "Foreign shareholders holding shares in an active PT PMA",
          "Foreign Directors/Commissioners holding qualifying equity stakes",
          "Venture capitalists and international founders establishing operations in Indonesia"
        ],
        ID: [
          "Pemegang saham asing di PT PMA (minimal kepemilikan saham Rp 10 Miliar untuk Direktur / Rp 1 Miliar untuk Non-Direktur)",
          "Direktur atau Komisaris asing yang memiliki saham di perusahaan",
          "Investor internasional yang mendirikan bisnis di Indonesia"
        ],
        JP: [
          "PT PMAの外国人株主・共同創業者",
          "出資比率条件を満たす外国人取締役・監査役",
          "インドネシア進出を図る国際投資家"
        ]
      },
      requirements: {
        EN: [
          "Passport valid for minimum 18 months (1 yr ITAS) or 30 months (2 yr ITAS)",
          "Deed of Establishment & Latest Amendments showing share ownership",
          "SK Menkumham approvals verifying paid-up capital",
          "NIB (Business Identification Number) & BKPM Investment Registration",
          "Personal bank statement showing minimum funds"
        ],
        ID: [
          "Paspor berlaku minimal 18 bulan (ITAS 1 Thn) atau 30 bulan (ITAS 2 Thn)",
          "Akta Pendirian dan Perubahan terakhir yang mencantumkan nama pemegang saham",
          "SK Kemenkumham terkait pengesahan modal",
          "NIB OSS RBA dan izin usaha perusahaan sponsor",
          "Rekening koran pribadi dengan saldo yang memadai"
        ],
        JP: [
          "パスポート（1年ITASは18ヶ月以上、2年ITASは30ヶ月以上の残存期間）",
          "出資額が明記された最新の会社設立定款・変更定款（Akta）",
          "法務人権省（SK Menkumham）認可書",
          "投資調整庁（BKPM）OSS-RBAのNIBおよび事業許可証",
          "本人名義の銀行残高証明書"
        ]
      },
      processSteps: [
        {
          step: "01",
          title: { EN: "Shareholding & Equity Audit", ID: "Verifikasi Saham & Modal", JP: "出資比率・株主名簿確認" },
          desc: { EN: "Validating deed percentages against latest BKPM/Immigration threshold.", ID: "Pemeriksaan nilai nominal saham di Akta dan OSS RBA.", JP: "最新の投資調整庁および入国管理局基準への適合確認。" }
        },
        {
          step: "02",
          title: { EN: "e-Visa Application", ID: "Pengajuan e-Visa Investor", JP: "投資家e-Visa電子申請" },
          desc: { EN: "Submitting electronic visa application through Directorate General of Immigration.", ID: "Pengajuan izin tinggal terbatas investor melalui portal resmi Ditjen Imigrasi.", JP: "入国管理局ポータルを通じた電子投資家ビザの発行手続き。" }
        },
        {
          step: "03",
          title: { EN: "Arrival & Biometrics", ID: "Kedatangan & Perekaman Biometrik", JP: "入国および生体認証登録" },
          desc: { EN: "Completion of biometric registration and electronic ITAS issuance.", ID: "Pengambilan biometrik di kantor imigrasi dan terbitnya e-ITAS.", JP: "入国後の写真・指紋登録およびデジタルITAS受領。" }
        }
      ],
      duration: { EN: "7 – 10 business days", ID: "7 – 10 hari kerja", JP: "通常 7〜10営業日" },
      importantInfo: { EN: "No Kemnaker RPTKA required if registered as a shareholder director/commissioner.", ID: "Bebas RPTKA Kemnaker dan DKP-TKA bagi pemegang saham yang menjabat Direktur/Komisaris.", JP: "株主兼取締役の場合、労働省雇用計画書（RPTKA）の取得が免除されます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "rptka-services",
      categoryId: "expatriate-services",
      code: "RPTKA",
      categoryName: {
        EN: "Expatriate Services",
        ID: "Keimigrasian & Izin Kerja TKA",
        JP: "外国人就劳許可"
      },
      name: {
        EN: "RPTKA Services (Ministry of Manpower)",
        ID: "RPTKA Services",
        JP: "外国人雇用計画書（RPTKA）認可代行"
      },
      shortDescription: {
        EN: "Specific service for securing the Expatriate Placement Plan (RPTKA) at Kemnaker, covering Feasibility Assessment (HPK) through New and Renewal RPTKA approvals.",
        ID: "Layanan spesifik pengurusan Rencana Penggunaan Tenaga Kerja Asing (RPTKA) di Kemenaker, mencakup Penilaian Kelayakan (HPK) hingga Pengesahan RPTKA Baru/Perpanjangan.",
        JP: "インドネシア労働省におけるRPTKA（外国人雇用計画書）の事前審査・妥当性評価（HPK）から新規認可・期間更新まで完全対応。"
      },
      overview: {
        EN: "Every enterprise employing foreign workers in Indonesia must hold an approved RPTKA issued by the Ministry of Manpower. VPT navigates the online TKA system, prepares the compulsory Indonesian counterpart training program, handles the virtual or offline HPK interview, and finalizes the legal approval.",
        ID: "Layanan spesifik pengurusan Rencana Penggunaan Tenaga Kerja Asing (RPTKA) di Kemenaker, mencakup Penilaian Kelayakan (HPK) hingga Pengesahan RPTKA Baru/Perpanjangan. VPT menangani persiapan berkas TKI pendamping, program alih teknologi, hingga verifikasi wawancara kelayakan.",
        JP: "外国人就労者を雇用するすべての法人は労働省のRPTKA承認を得る必要があります。VPTはオンラインTKAシステムの申請、インドネシア人カウンターパート育成計画の策定、妥当性評価（HPK）ヒアリング対応から最終認可取得までを統括します。"
      },
      whoFor: {
        EN: [
          "Enterprises hiring new expatriates across management or technical domains",
          "Companies extending existing RPTKA quotas for continued operations",
          "Contractors handling infrastructure projects requiring specialized foreign expertise"
        ],
        ID: [
          "Perusahaan yang akan merekrut TKA baru untuk posisi manajerial atau spesialis",
          "Perusahaan yang ingin memperpanjang masa berlaku RPTKA lama",
          "Perusahaan yang melakukan perubahan alokasi jabatan atau penambahan kuota TKA"
        ],
        JP: [
          "外国人社員を新規採用または日本本社から受け入れる現地法人",
          "既存の雇用計画枠の有効期限を更新する企業",
          "技術移転・インフラ建設に伴う短期・長期外国人技師の雇用企業"
        ]
      },
      requirements: {
        EN: [
          "Company legal documents (NIB, Deed, SK Menkumham, Tax NPWP, BPJS Ketenagakerjaan)",
          "Draft employment contract and organizational hierarchy chart",
          "Designation of Indonesian understudy worker (TKI Pendamping)",
          "Technology and skill transfer education program document"
        ],
        ID: [
          "Legalitas perusahaan (Akta, SK Menkumham, NIB OSS RBA, NPWP, BPJS)",
          "Alasan penggunaan TKA dan bagan organisasi perusahaan",
          "Penunjukan Tenaga Kerja Pendamping (TKI Pendamping) WNI",
          "Rencana program pendidikan dan pelatihan alih keahlian/teknologi"
        ],
        JP: [
          "企業の基本法的書類（定款、法務省認可書、NIB、納税番号、労働保険証）",
          "外国人雇用理由書および会社組織体制図",
          "インドネシア人後継者・補佐員（TKI Pendamping）の選任書類",
          "技術移転・研修教育計画書"
        ]
      },
      processSteps: [
        {
          step: "01",
          title: { EN: "Dossier & Quota Preparation", ID: "Penyusunan Berkas & Rencana Quota", JP: "書類作成・受入枠計画立案" },
          desc: { EN: "Drafting corporate organizational chart and technology transfer commitments.", ID: "Penyusunan profil jabatan, bagan organisasi, dan rencana alih teknologi.", JP: "組織図作成および技術移転研修計画書の策定。" }
        },
        {
          step: "02",
          title: { EN: "HPK Feasibility Assessment", ID: "Penilaian Kelayakan (HPK)", JP: "妥当性評価（HPK）審査" },
          desc: { EN: "Ministry of Manpower reviewer examination and validation interview.", ID: "Sidang verifikasi kelayakan oleh tim penilai Kemnaker secara online/offline.", JP: "労働省担当官による計画の妥当性評価ヒアリング対応。" }
        },
        {
          step: "03",
          title: { EN: "Official RPTKA Decree", ID: "Pengesahan RPTKA Terbit", JP: "RPTKA正式認可証発給" },
          desc: { EN: "Issuance of the legal RPTKA approval decree by Ministry of Manpower.", ID: "Penerbitan Surat Keputusan Pengesahan RPTKA resmi dari Kemenaker.", JP: "労働省大臣決定に基づく正式な外国人雇用計画認可書の受領。" }
        }
      ],
      duration: { EN: "5 – 8 business days", ID: "5 – 8 hari kerja", JP: "通常 5〜8営業日" },
      importantInfo: { EN: "Required prior to submitting any Working ITAS (E23) application.", ID: "Merupakan syarat mutlak sebelum pengajuan visa kerja dan ITAS di Ditjen Imigrasi.", JP: "就労ビザ（E23）申請における最重要の事前認可です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "perubahan-status-jabatan-tka",
      categoryId: "expatriate-services",
      code: "AMEND-TKA",
      categoryName: {
        EN: "Expatriate Services",
        ID: "Keimigrasian & Izin Kerja TKA",
        JP: "外国人就労許可"
      },
      name: {
        EN: "TKA Status & Position Amendments",
        ID: "Perubahan Status & Jabatan TKA",
        JP: "外国人就労者（TKA）役職・スポンサー変更手続き"
      },
      shortDescription: {
        EN: "Administrative services for expatriates already in Indonesia, covering Job Title Changes, Corporate Sponsor Transfers (switching employers), Work Location Additions, and Dual Job Titles.",
        ID: "Layanan administrasi TKA yang sudah bekerja di Indonesia, meliputi Alih Jabatan, Alih Sponsor (pindah perusahaan), Penambahan Lokasi Kerja, hingga Pengurusan Rangkap Jabatan TKA.",
        JP: "すでにインドネシア国内に在留する外国人社員の昇任・役職変更、転籍（スポンサー企業変更）、勤務地追加、兼務認可手続き。"
      },
      overview: {
        EN: "Regulatory compliance mandates that any change in an expatriate's title (e.g. Manager to Director), corporate sponsor, work site locations, or holding dual positions across group entities must be properly amended in both Kemnaker TKA Online and Immigration systems to avoid legal deportations or administrative fines.",
        ID: "Layanan administrasi TKA yang sudah bekerja di Indonesia, meliputi Alih Jabatan, Alih Sponsor (pindah perusahaan), Penambahan Lokasi Kerja, hingga Pengurusan Rangkap Jabatan TKA. Seluruh perubahan disinkronkan antara Kemenaker dan Ditjen Imigrasi.",
        JP: "管理職から役員への昇格、グループ企業間での転籍、工場・営業所の勤務地追加、取締役兼任など、就労実態の変更に伴う労働省および入国管理局での届出・認可更新を迅速に行います。"
      },
      whoFor: {
        EN: [
          "Expatriates promoted or transferred to new positions within the company",
          "Foreign professionals moving from one company sponsor to another (Transfer of Sponsorship)",
          "Managers supervising multiple operational sites across Indonesian provinces",
          "Directors holding dual appointments in affiliated corporate entities"
        ],
        ID: [
          "TKA yang mengalami promosi atau alih jabatan internal (misal: General Manager menjadi Direktur)",
          "TKA yang pindah bekerja ke perusahaan sponsor baru tanpa harus keluar dari Indonesia",
          "TKA yang memiliki wilayah kerja lebih dari satu provinsi (Penambahan Lokasi)",
          "TKA yang merangkap jabatan di dua perusahaan terafiliasi"
        ],
        JP: [
          "昇任・社内異動により職名が変更となった駐在員",
          "インドネシア国内で転職・転籍する外国人プロフェッショナル",
          "ジャカルタ本社と地方工場など複数の拠点を管轄するマネージャー",
          "関連会社間で役員職を兼務する経営者"
        ]
      },
      requirements: {
        EN: [
          "Original Passport and current active e-ITAS",
          "Existing RPTKA decree and IMTA/notifikasi",
          "Board resolution or corporate decree stating position/sponsor change",
          "New sponsor entity corporate dossier (if transferring employers)",
          "Updated corporate organizational structure"
        ],
        ID: [
          "Paspor asli dan e-ITAS yang masih aktif",
          "Keputusan Pengesahan RPTKA dan notifikasi lama",
          "Surat Keputusan direksi atau Akta terkait perubahan jabatan",
          "Legalitas perusahaan sponsor baru (jika alih sponsor)",
          "Bagan organisasi dan deskripsi tanggung jawab baru"
        ],
        JP: [
          "パスポート原本および現行の有効なe-ITAS",
          "現行のRPTKA認可書および通知書",
          "職位変更または転籍に関する社内決定書・定款",
          "新スポンサー企業の基本定款・認可書類（転籍時）",
          "改定後の組織体制図"
        ]
      },
      processSteps: [
        {
          step: "01",
          title: { EN: "Regulatory Review", ID: "Analisis Persyaratan", JP: "変更要件・法規適合確認" },
          desc: { EN: "Confirming feasibility under existing RPTKA quota and immigration policy.", ID: "Pengecekan ketersediaan kuota jabatan di RPTKA dan regulasi imigrasi.", JP: "変更後の役職基準および受入可能枠の適合性精査。" }
        },
        {
          step: "02",
          title: { EN: "Kemnaker Amendment", ID: "Perubahan Notifikasi Kemnaker", JP: "労働省通知書変更手続き" },
          desc: { EN: "Updating TKA Online records, securing revised notification.", ID: "Pengajuan revisi jabatan/sponsor di sistem TKA Online Kemenaker.", JP: "TKAオンラインでの登録情報更新および新通知書受領。" }
        },
        {
          step: "03",
          title: { EN: "Immigration Synchronization", ID: "Sinkronisasi Data Imigrasi", JP: "入国管理局データ更新" },
          desc: { EN: "Updating biometric stay permit record at immigration jurisdiction.", ID: "Penyelarasan data izin tinggal di kantor imigrasi setempat.", JP: "管轄入国管理局での滞在許可証記載事項の変更手続き完了。" }
        }
      ],
      duration: { EN: "7 – 12 business days", ID: "7 – 12 hari kerja", JP: "通常 7〜12営業日" },
      importantInfo: { EN: "Smooth transfer of sponsorship without requiring the expatriate to leave Indonesia.", ID: "Dapat diproses tanpa TKA harus keluar dari wilayah Indonesia (alih sponsor legal).", JP: "国外退去することなく国内での転籍手続きが可能です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "itap-permanent-stay",
      categoryId: "expatriate-services",
      code: "ITAP",
      categoryName: {
        EN: "Expatriate Services",
        ID: "Keimigrasian & Izin Kerja TKA",
        JP: "外国人就労許可"
      },
      name: {
        EN: "Permanent Stay Permit (ITAP TKA / Investor)",
        ID: "Izin Tinggal Tetap (ITAP TKA/Investor)",
        JP: "永住許可証（ITAP）・5年MERP・外国人住民登録"
      },
      shortDescription: {
        EN: "Status conversion service from ITAS to ITAP (Permanent Stay Permit), ITAP renewals, 5-year Multiple Re-Entry Permits (MERP), foreign national ID card (KTP Orang Asing), and Family Card (KK).",
        ID: "Layanan konversi status dari ITAS ke ITAP (Izin Tinggal Tetap), perpanjangan ITAP, hingga perpanjangan MERP (Izin Keluar Masuk Berulang) durasi 5 tahun, lengkap dengan pendaftaran KTP Orang Asing & KK.",
        JP: "一時滞在（ITAS）から永住許可（ITAP）への資格変更、ITAP更新、5年間有効の再入国許可（MERP）、外国人住民登録証（KTP-OA）および家族カード（KK）の取得支援。"
      },
      overview: {
        EN: "The Permanent Stay Permit (ITAP) is the highest tier of stay authorization in Indonesia, granting a 5-year validity (and subsequent lifetime status). Foreign corporate executives, long-term investors, and professionals who have held ITAS continuously for minimum required years qualify for this prestigious conversion.",
        ID: "Izin Tinggal Tetap (ITAP) merupakan tingkat izin tinggal tertinggi bagi WNA di Indonesia dengan masa berlaku 5 tahun dan dapat diperpanjang tanpa batas. VPT memfasilitasi alih status dari ITAS ke ITAP, penerbitan MERP 5 tahun, serta pendaftaran KTP-OA di Dinas Dukcapil.",
        JP: "インドネシアにおいて最上位の在留資格となる永住許可証（ITAP）。連続してITASを保持している外国人役員・主要投資家・専門家を対象とし、5年ごとの更新および最終的な無期限資格取得、外国人用住民登録（KTP Orang Asing）の交付までフルサポートします。"
      },
      whoFor: {
        EN: [
          "Senior corporate directors and commissioners holding continuous ITAS for 3+ years",
          "Major foreign investors with continuous shareholding in Indonesia",
          "Expatriates seeking long-term residential stability and ease of travel"
        ],
        ID: [
          "Direktur atau Komisaris yang telah memegang ITAS berturut-turut minimal 3 tahun",
          "Investor asing dengan kepemilikan modal stabil di Indonesia",
          "Ekspatriat senior yang ingin kepastian izin tinggal jangka panjang"
        ],
        JP: [
          "3年以上連続してITASを保持している現地法人取締役・監査役",
          "継続的な出資実績を有する主要外国人投資家",
          "長期的な生活基盤の確立と頻繁な出入国を行うエグゼクティブ"
        ]
      },
      requirements: {
        EN: [
          "Valid passport with minimum 3 years validity",
          "Current active e-ITAS with proof of continuous tenure",
          "Company sponsorship documents (Deed, NIB, SK Menkumham, Tax NPWP)",
          "Statement of integration and compliance with Indonesian laws",
          "Recommendation from the Regional Immigration Office (Kanwil) and Ditjen Imigrasi"
        ],
        ID: [
          "Paspor berlaku minimal 3 tahun",
          "e-ITAS aktif dan bukti kepemilikan ITAS berturut-turut",
          "Legalitas perusahaan sponsor lengkap",
          "Surat pernyataan integrasi ke masyarakat Indonesia",
          "Rekomendasi dari Kantor Wilayah Kemenkumham dan Ditjen Imigrasi"
        ],
        JP: [
          "残存期間3年以上のパスポート",
          "現行のe-ITASおよび継続滞在の証明書類",
          "受入企業の完備された基本法人書類（定款、NIB、納税番号等）",
          "法令遵守・現地社会統合に関する誓約書",
          "法務人権省地方事務所（Kanwil）および入国管理局本庁からの推薦認可書"
        ]
      },
      processSteps: [
        {
          step: "01",
          title: { EN: "Tenure & Legal Audit", ID: "Audit Masa Tinggal & Legalitas", JP: "滞在年数・適格性審査" },
          desc: { EN: "Verifying eligibility under Law No. 6/2011 on Immigration.", ID: "Pemeriksaan syarat minimal durasi ITAS dan rekam jejak kepatuhan hukum.", JP: "入国管理法に基づく連続滞在要件および法令遵守履歴の精査。" }
        },
        {
          step: "02",
          title: { EN: "Kanwil & Ditjen Approval", ID: "Rekomendasi Kanwil & Ditjen", JP: "地方事務局および本庁認可" },
          desc: { EN: "Securing ministerial approval from the Regional Office and Central Directorate.", ID: "Pengurusan rekomendasi di Kantor Wilayah Kemenkumham hingga terbit persetujuan pusat Ditjen Imigrasi.", JP: "法務人権省地方支局（Kanwil）から入国管理局総局への上申認可手続き。" }
        },
        {
          step: "03",
          title: { EN: "e-ITAP & 5-Year MERP", ID: "Penerbitan e-ITAP & MERP 5 Tahun", JP: "e-ITAPおよび5年MERP交付" },
          desc: { EN: "Biometrics and issuance of 5-year electronic ITAP and multiple re-entry permit.", ID: "Perekaman biometrik dan penerbitan kartu e-ITAP serta izin keluar-masuk (MERP) 5 tahun.", JP: "生体認証登録、5年間有効の永住許可証および数次再入国許可の発給。" }
        },
        {
          step: "04",
          title: { EN: "Civil Registry (KTP-OA & KK)", ID: "Pendaftaran KTP Orang Asing & KK", JP: "外国人KTPおよび住民票登録" },
          desc: { EN: "Official Dukcapil registration for Foreign National Identity Card and Family Card.", ID: "Pendaftaran identitas resmi di Dinas Kependudukan dan Pencatatan Sipil (Dukcapil).", JP: "市民登録局（Dukcapil）での外国人住民カード（KTP-OA）および家族カード交付。" }
        }
      ],
      duration: { EN: "20 – 30 business days", ID: "20 – 30 hari kerja", JP: "通常 20〜30営業日" },
      importantInfo: { EN: "Grants 5 years legal stay, 5-year multiple re-entry permit, and local Indonesian banking convenience.", ID: "Masa berlaku 5 tahun, bebas keluar-masuk Indonesia, dan hak mendapatkan KTP Orang Asing.", JP: "5年間の滞在期間が付与され、頻繁な更新手続きの負担が解消されます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
