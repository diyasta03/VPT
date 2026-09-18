import { ServiceCategory } from '../../types';

export const category4Corporate: ServiceCategory = {
  number: "04",
  id: "corporate-legalities",
  title: {
    EN: "Corporate Legal Services & Corporate Licensing",
    ID: "Legalitas Perusahaan & Lisensi Korporasi (Corporate Legal Services)",
    JP: "会社設立・法人法務ライセンス（Corporate Legal Services）"
  },
  description: {
    EN: "End-to-end corporate law consultation, company incorporation (PT PMA & PT PMDN), OSS RBA business licensing, GMS amendments, tax registration, and regulatory compliance in Indonesia.",
    ID: "Layanan konsultasi hukum, pendirian entitas usaha, perizinan berusaha OSS RBA, perubahan struktur RUPS, pendaftaran pajak, dan pemenuhan laporan kepatuhan korporasi di Indonesia.",
    JP: "外資法人（PT PMA）および内資法人（PT PMDN）の設立登記、OSS RBA事業認可、株主総会（RUPS）決議変更、輸入許可、税務登録（Coretax）および四半期投資報告（LKPM）。"
  },
  imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Modern corporate skyscraper district in Sudirman Jakarta",
  services: [
    {
      id: "pt-pma-pmdn-establishment",
      categoryId: "corporate-legalities",
      code: "ESTABLISHMENT",
      categoryName: { EN: "Corporate Legal Services", ID: "Legalitas Perusahaan", JP: "法人法務" },
      name: {
        EN: "Company Incorporation (PT PMA & PT PMDN)",
        ID: "Pendirian Perusahaan (PT PMA & PT PMDN)",
        JP: "現地法人設立登記（PT PMA / PT PMDN）"
      },
      shortDescription: {
        EN: "Full incorporation service for Foreign Investment Companies (PT PMA) and Local Entities (PT PMDN), including Notarial Deed, AHU Ministry of Law approval, NIB, and tax set-up.",
        ID: "Layanan pendirian perusahaan Penanaman Modal Asing (PT PMA) dan Penanaman Modal Dalam Negeri (PT PMDN) secara lengkap hingga NIB dan NPWP terbit.",
        JP: "外資系現地法人（PT PMA）および内資企業（PT PMDN）の設立定款作成、法務人権省（AHU）認可、基本許認可（NIB）取得までの包括的代行。"
      },
      overview: {
        EN: "VPT guides foreign and local founders through KBLI business classification mapping under the Positive Investment List (Perpres 10/2021), drafting Articles of Association, executing notarial deeds, and securing the Ministry of Law & Human Rights (AHU) decree.",
        ID: "Pendampingan komprehensif pendirian badan usaha berbadan hukum di Indonesia. Mulai dari pengecekan nama PT, pemilihan bidang usaha KBLI sesuai Daftar Positif Investasi, Akta Notaris, SK Pengesahan Kemenkumham, hingga penerbitan NIB.",
        JP: "大統領令（ポジティブ投資リスト）に基づくKBLI事業分類の選定、会社名事前調査、公証人定款作成、法務省認可書受領およびOSS-RBAでのNIB発給を一気通貫で実施します。"
      },
      whoFor: {
        EN: ["International corporations establishing manufacturing or trading subsidiaries in Indonesia", "Foreign entrepreneurs setting up PMA entities", "Local domestic businesses incorporating PT PMDN"],
        ID: ["Investor asing dan korporasi global yang ingin membuka anak usaha di Indonesia", "Pengusaha yang membutuhkan entitas legal berbadan hukum", "Perusahaan lokal yang berekspansi ke PT PMDN"],
        JP: ["インドネシアに子会社・拠点を新設する日本企業・海外法人", "自己資金でPT PMAを設立する外国人創業者", "現地内資法人（PT PMDN）を設立する事業者"]
      },
      requirements: {
        EN: ["Passport copies of foreign shareholders/directors (or KTP/NPWP for Indonesian founders)", "Corporate parent legal profile (if subsidiary)", "Proposed company name (3 words in Indonesian)", "Detailed business activity description (KBLI)"],
        ID: ["KTP & NPWP pendiri (untuk PT PMDN) atau Paspor pemegang saham asing (untuk PT PMA)", "Profil legalitas perusahaan induk (jika anak perusahaan)", "Usulan nama perusahaan (minimal 3 kata)", "Rincian bidang usaha sesuai KBLI 2020"],
        JP: ["株主・取締役のパスポート写し（外国人の場合）またはKTP・NPWP（インドネシア人の場合）", "親会社登記簿謄本（法人の場合）", "希望会社名（インドネシア語3単語）", "定款記載予定の事業内容（KBLI 2020）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Name Search & KBLI Mapping", ID: "Pengecekan Nama & Pemetaan KBLI", JP: "社名調査・事業分類選定" }, desc: { EN: "Checking name reservation at Kemenkumham and selecting KBLI codes.", ID: "Pemesanan nama perusahaan dan penentuan klasifikasi KBLI 2020.", JP: "法務省システムでの社名重複確認とKBLIコード選定。" } },
        { step: "02", title: { EN: "Notarial Deed & AHU Decree", ID: "Akta Notaris & SK Kemenkumham", JP: "公証人定款作成・法務省認可" }, desc: { EN: "Execution of deed and securing official Ministry decree.", ID: "Penandatanganan Akta Notaris dan terbitnya SK Menkumham.", JP: "公証人役場での定款署名および法務人権省設立認可。" } },
        { step: "03", title: { EN: "NIB & Corporate Tax ID", ID: "Penerbitan NIB & NPWP Perusahaan", JP: "NIB基本許認可・納税番号受領" }, desc: { EN: "OSS RBA generation of Business Identification Number and NPWP.", ID: "Penerbitan NIB melalui portal OSS RBA dan aktivasi NPWP Badan.", JP: "OSS RBAシステムでのNIB取得および法人納税番号発行。" } }
      ],
      duration: { EN: "7 – 10 business days", ID: "7 – 10 hari kerja", JP: "通常 7〜10営業日" },
      importantInfo: { EN: "Foreign PT PMA entities require minimum investment commitment per current BKPM guidelines.", ID: "PT PMA wajib memenuhi ketentuan nilai investasi minimum sesuai regulasi BKPM.", JP: "PT PMAの設立には投資調整庁（BKPM）が定める最低投資金額要件が適用されます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "rups-corporate-restructuring",
      categoryId: "corporate-legalities",
      code: "RUPS-AMEND",
      categoryName: { EN: "Corporate Legal Services", ID: "Legalitas Perusahaan", JP: "法人法務" },
      name: {
        EN: "GMS & Corporate Structural Amendments (RUPS)",
        ID: "Layanan RUPS & Perubahan Struktur Perusahaan",
        JP: "株主総会（RUPS）決議・役員変更・定款変更登記"
      },
      shortDescription: {
        EN: "Full legal execution of General Meeting of Shareholders (GMS / RUPS) decisions, Circular Resolutions, Notarial Deeds, and Ministry of Law & Human Rights (AHU) approvals for changes in Directors, Commissioners, Shares, Capital, or Domicile.",
        ID: "Layanan administrasi keputusan RUPS meliputi Draft Circular Resolution, Akta Notaris, SK Kemenkumham, Perubahan Direksi/Komisaris, Pengalihan Saham, Perubahan Anggaran Dasar, dan Domisili.",
        JP: "定時・臨時株主総会（RUPS）または持ち回り決議書の起草、公証人議事録認証、法務省届出・承認、取締役・監査役異動、株式譲渡、資本金変更、定款改定手続き。"
      },
      overview: {
        EN: "Whenever a corporation restructures its board, transfers equity, injects capital, expands business objectives (KBLI), or changes registered office address, statutory filings with the Ministry of Law and OSS RBA are legally required. VPT provides full corporate secretarial and legal drafting support.",
        ID: "Pengurusan perubahan legalitas korporasi resmi. Meliputi penyusunan draft RUPS/Keputusan Sirkuler, pembuatan Akta Perubahan di Notaris rekanan, hingga terbitnya Surat Keputusan (SK) atau Surat Penerimaan Pemberitahuan dari Ditjen AHU Kemenkumham serta update profil OSS.",
        JP: "役員の就任・辞任、株主間での持分譲渡、増資・減資、事業目的追加、本店所在地の移転など、株主総会決議に基づく法務省登記およびOSS RBAデータの同期を正確に行います。"
      },
      whoFor: {
        EN: ["Enterprises rotating expatriate or local directors and commissioners", "Companies undergoing mergers, share transfers, or capital increases", "Firms changing registered office domicile"],
        ID: ["Perusahaan yang melakukan pergantian Direksi atau Komisaris", "Korporasi yang mengalihkan kepemilikan saham atau menambah modal setor", "Perusahaan yang pindah alamat kantor operasional atau menambah bidang KBLI"],
        JP: ["駐在員の帰任・赴任に伴い役員変更を行う日系・外資現地法人", "出資持分を譲渡または増資する企業", "オフィス移転に伴い登記住所を変更する法人"]
      },
      requirements: {
        EN: ["Current Deed of Establishment and latest amendment deeds with SK Menkumham", "Shareholders' resolution or signed Circular Resolution", "Passport/KTP of outgoing and incoming directors/commissioners", "Share transfer agreements (if applicable)"],
        ID: ["Akta Pendirian dan seluruh Akta Perubahan terakhir beserta SK Menkumham", "Draft Keputusan RUPS / Circular Resolution yang ditandatangani pemegang saham", "Identitas (Paspor/KTP/NPWP) pengurus lama dan pengurus baru", "Akta Jual Beli Saham (jika ada pengalihan saham)"],
        JP: ["設立定款および直近の変更定款一式・法務省認可書", "株主による署名済み株主総会議事録または持ち回り決議書", "新旧役員の身分証明書（パスポート/KTP/NPWP）", "株式譲渡契約書（持分移転がある場合）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Drafting Resolution", ID: "Penyusunan Draft RUPS", JP: "決議書起草・精査" }, desc: { EN: "Drafting circular resolution according to Company Law No. 40/2007.", ID: "Penyusunan rancangan keputusan sirkuler pemegang saham sesuai UU PT.", JP: "インドネシア会社法に則した株主決議文案の作成。" } },
        { step: "02", title: { EN: "Notarial Deed Execution", ID: "Akta Notaris Perubahan", JP: "公証人公正証書作成" }, desc: { EN: "Formal notarial recording of resolutions.", ID: "Penandatanganan Akta Berita Acara RUPS di hadapan Notaris.", JP: "公証人による総会議事録公正証書の作成。" } },
        { step: "03", title: { EN: "AHU Approval & OSS Sync", ID: "SK Kemenkumham & Update OSS", JP: "法務省承認・OSS同期" }, desc: { EN: "Securing Ministry approval and syncing records on OSS RBA.", ID: "Penerbitan SK/Pemberitahuan Kemenkumham dan update data di OSS RBA.", JP: "法務人権省認可書（SK）受領およびOSS-RBAデータの即時更新。" } }
      ],
      duration: { EN: "5 – 8 business days", ID: "5 – 8 hari kerja", JP: "通常 5〜8営業日" },
      importantInfo: { EN: "Essential prerequisite before amending expatriate Director/Commissioner work permits.", ID: "Syarat wajib sebelum melakukan perubahan ITAS Kerja Direktur/Komisaris di Imigrasi & Kemnaker.", JP: "役員ビザ（ITAS）の変更手続きを行う前の必須前提条件となります。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "oss-rba-licensing",
      categoryId: "corporate-legalities",
      code: "OSS-RBA",
      categoryName: { EN: "Corporate Legal Services", ID: "Legalitas Perusahaan", JP: "法人法務" },
      name: {
        EN: "OSS RBA Business Licensing & Standard Certificates",
        ID: "Perizinan Berusaha (OSS RBA)",
        JP: "OSS-RBA事業許認可（NIB・標準証明書・業種別認可）"
      },
      shortDescription: {
        EN: "Procurement of Online Single Submission (OSS RBA) licenses, Business Identification Number (NIB), Polygon spatial mapping (PKKPR), and Standard Certificates for Low, Medium, and High-Risk business activities.",
        ID: "Pengurusan perizinan berusaha berbasis risiko (OSS RBA) mencakup NIB, Peta Poligon PKKPR, dan Sertifikat Standar / Izin Usaha Risiko Rendah, Menengah, hingga Tinggi.",
        JP: "リスクベース総合電子許認可システム（OSS RBA）による事業基本番号（NIB）、空間利用適格性（PKKPRポリゴン図面）、低・中・高リスク事業向け標準証明書および営業許可の取得代行。"
      },
      overview: {
        EN: "Under Government Regulation PP 5/2021, business licenses in Indonesia are categorized by risk level. VPT navigates the technical verifications, environmental statements (SPPL/UKL-UPL), and regional technical approvals required to make your licenses fully operational and verified.",
        ID: "Layanan pemenuhan komitmen perizinan berusaha di portal OSS RBA. Membantu perusahaan menyelesaikan verifikasi teknis instansi kementerian/dinas terkait agar izin berstatus 'Telah Terverifikasi' dan sah digunakan untuk operasional komersial.",
        JP: "政令2021年第5号に基づく事業リスク区分に応じた許認可手続き。環境管理誓約（SPPL/UKL-UPL）、所管省庁による技術審査対応、有効化（有効ステータスへの更新）まで完全対応します。"
      },
      whoFor: {
        EN: ["Manufacturing factories requiring spatial and environmental compliance", "Trading, logistics, and service corporations activating KBLI permits", "Companies expanding into new commercial sectors"],
        ID: ["Pabrik dan industri manufaktur yang memerlukan verifikasi PKKPR dan lingkungan", "Perusahaan distribusi, perdagangan, dan jasa yang membutuhkan izin terverifikasi", "Perusahaan yang menambah lini bisnis baru di OSS"],
        JP: ["工場・倉庫等の立地および環境認可を要する製造業", "輸入卸売・流通・IT・サービス業などの許認可有効化を求める企業", "新事業分野へ進出する現地法人"]
      },
      requirements: {
        EN: ["Company NIB and OSS access credentials", "Office/factory land and building lease agreements", "Building Approval (PBG) & SLF (if applicable)", "Coordinates / spatial layout for polygon mapping"],
        ID: ["Akun OSS RBA dan NIB perusahaan", "Perjanjian sewa kantor / gudang / pabrik dan PBB", "Persetujuan Bangunan Gedung (PBG) / SLF (jika disyaratkan)", "Titik koordinat lokasi untuk pemetaan peta poligon PKKPR"],
        JP: ["OSS RBAログインアカウントおよび企業基本情報", "オフィス・工場・倉庫の賃貸借契約書および固定資産税（PBB）納付書", "建築認可（PBG）および使用適格証（SLF）（対象業種の場合）", "空間利用PKKPR用の敷地境界・座標データ"]
      },
      processSteps: [
        { step: "01", title: { EN: "Risk Assessment & Mapping", ID: "Analisis Risiko KBLI & PKKPR", JP: "業種リスク分析・立地適合審査" }, desc: { EN: "Determining statutory risk level and spatial zoning.", ID: "Pemeriksaan tingkat risiko KBLI dan kesesuaian tata ruang tata kota.", JP: "各KBLIのリスク判定および都市計画用途地域の確認。" } },
        { step: "02", title: { EN: "Technical Commitment Filing", ID: "Pemenuhan Komitmen Standar", JP: "技術基準適合申請" }, desc: { EN: "Drafting technical SOPs, environmental filings, and polygon drawings.", ID: "Pengunggahan dokumen standar teknis dan peta poligon.", JP: "環境誓約書提出および省庁指定の技術審査対応。" } },
        { step: "03", title: { EN: "Verified License Issuance", ID: "Penerbitan Izin Terverifikasi", JP: "有効化認可証交付" }, desc: { EN: "Securing verified OSS Standard Certificate.", ID: "Penerbitan Sertifikat Standar atau Izin definitif berstatus Terverifikasi.", JP: "正式認可印付き標準証明書（Sertifikat Standar）の発行受領。" } }
      ],
      duration: { EN: "5 – 15 business days (depending on sector risk)", ID: "5 – 15 hari kerja (tergantung tingkat risiko)", JP: "通常 5〜15営業日（業種・リスク区分による）" },
      importantInfo: { EN: "Operational activities cannot commence legally until required standard certificates are verified.", ID: "Aktivitas komersial secara hukum mewajibkan sertifikat standar berstatus 'Telah Terverifikasi'.", JP: "認可が「有効（Terverifikasi）」となることで適法な営業活動が可能となります。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "corporate-tax-import-compliance",
      categoryId: "corporate-legalities",
      code: "COMPLIANCE-TAX",
      categoryName: { EN: "Corporate Legal Services", ID: "Legalitas Perusahaan", JP: "法人法務" },
      name: {
        EN: "Import Licensing, Corporate Tax & Statutory Compliance",
        ID: "Perizinan Impor, Pajak & Kepatuhan Korporasi",
        JP: "輸入許可・外国人NPWP（Coretax）・法定四半期報告（LKPM/WLK）"
      },
      shortDescription: {
        EN: "Specialized corporate compliance services: Iron & Steel Import Approval (PI Besi Baja) & Technical Consideration (Pertek), Foreign National Tax Registration (NPWP WNA + Coretax integration), Mandatory Manpower Reporting (WLK), and Quarterly Investment Activity Reports (LKPM).",
        ID: "Layanan perizinan impor (PI Besi Baja & Pertek Kemendag/Kemenperin), NPWP WNA + sistem Coretax, Wajib Lapor Ketenagakerjaan (WLK), dan Laporan Kegiatan Penanaman Modal (LKPM).",
        JP: "鉄鋼等の品目別輸入承認（PI Besi Baja）および工業省技術配慮書（Pertek）、外国人個人納税番号（NPWP）取得と最新税務システム（Coretax）登録、労働省法定報告（WLK）、投資調整庁四半期報告（LKPM）。"
      },
      overview: {
        EN: "Indonesian operating entities must maintain continuous regulatory standing across Ministry of Trade, Ministry of Industry, Directorate General of Taxes (DGT), Ministry of Manpower, and Ministry of Investment (BKPM). VPT manages these critical recurring and specialized compliance obligations.",
        ID: "Menjaga kepatuhan legalitas perusahaan agar terhindar dari sanksi pencabutan izin usaha atau pembekuan NIB. Mencakup pelaporan investasi berkala LKPM setiap 3 bulan, pendaftaran WLK online, aktivasi akun pajak Coretax WNA, serta pengurusan perizinan impor khusus.",
        JP: "企業が行政処分やNIBの凍結を受けることを防ぐため、3ヶ月ごとの投資進捗報告（LKPM）、労働省への年次就労実態届出（WLK）、新税務システムCoretaxでの外国人NPWP管理、特定品目輸入認可を包括的に代行します。"
      },
      whoFor: {
        EN: ["Importers of capital machinery, industrial raw materials, and steel", "Newly arrived expatriates requiring personal Indonesian Tax ID (NPWP)", "All PT PMA & PT PMDN companies required to submit quarterly LKPM reports"],
        ID: ["Perusahaan importir mesin industri, bahan baku, dan besi baja", "TKA yang membutuhkan NPWP pribadi untuk kepatuhan perpajakan di Indonesia", "Seluruh PT PMA dan PMDN yang wajib melaporkan LKPM triwulanan ke BKPM"],
        JP: ["産業機械・製造原材料・鉄鋼部材等の輸入を行う商社・メーカー", "給与源泉徴収および税務申告に必要な個人NPWPを新規取得する駐在員", "四半期ごとの投資報告（LKPM）が義務付けられているすべてのPT PMA"]
      },
      requirements: {
        EN: ["Company NIB with API-U / API-P import rights", "Expatriate passport & working ITAS (for NPWP WNA)", "Financial accounting realized capital expenditure data (for LKPM)", "Supplier specification certificates (for Import Permits)"],
        ID: ["NIB perusahaan dengan hak akses kepabeanan", "Paspor dan e-ITAS TKA yang bersangkutan (untuk NPWP)", "Realisasi investasi modal kerja dan aktiva tetap (untuk LKPM)", "Katalog teknis barang dan sertifikat mill certificate (untuk PI Besi Baja)"],
        JP: ["輸入機能が付与されたNIB（API-UまたはAPI-P）", "駐在員のパスポートおよび有効なITAS（NPWP申請時）", "当期の資本支出・固定資産取得・就労者数データ（LKPM報告用）", "輸入対象品のミルシートおよび製品仕様書（輸入承認用）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Compliance Audit", ID: "Audit Kepatuhan & Data", JP: "コンプライアンス要件精査" }, desc: { EN: "Assessing statutory reporting deadlines and document readiness.", ID: "Pemeriksaan kesiapan berkas dan batas waktu pelaporan.", JP: "法定提出期限および提出データの整合性確認。" } },
        { step: "02", title: { EN: "Portal Filing", ID: "Penginputan Portal Resmi", JP: "各省庁ポータル申請・報告" }, desc: { EN: "Submission via INSW, SIINas, DJP Coretax, or BKPM LKPM.", ID: "Pelaporan resmi di sistem kementerian terkait.", JP: "税務総局Coretax、BKPMシステム等での電子届出。" } },
        { step: "03", title: { EN: "Official Acknowledgment", ID: "Bukti Tanda Terima Sah", JP: "公式受理証・承認書受領" }, desc: { EN: "Securing statutory receipt and legal approval decree.", ID: "Penerbitan tanda terima resmi dan persetujuan izin impor.", JP: "各所管官庁からの受理証明書および輸入承認証の受領。" } }
      ],
      duration: { EN: "NPWP/WLK/LKPM: 2-4 days | Import Permit: 10-15 days", ID: "NPWP/WLK/LKPM: 2-4 hari | PI Besi Baja: 10-15 hari kerja", JP: "税務/WLK/LKPM: 2〜4日 | 輸入承認: 10〜15営業日" },
      importantInfo: { EN: "Failure to submit quarterly LKPM reports leads to administrative warnings and automatic NIB suspension.", ID: "Keterlambatan pelaporan LKPM berisiko mendapatkan Surat Peringatan hingga pembekuan izin usaha.", JP: "四半期ごとのLKPM未提出は、事業認可の効力停止措置の対象となります。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
