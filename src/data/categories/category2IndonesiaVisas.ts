import { ServiceCategory, ServiceItem } from '../../types';

// Helper to create concise C & D series items
const makeItem = (
  id: string,
  code: string,
  subCat: string,
  nameID: string,
  nameEN: string,
  nameJP: string,
  descID: string,
  targetClient: string,
  durationID = "3 – 5 hari kerja"
): ServiceItem => ({
  id,
  categoryId: "indonesia-visas",
  code,
  subCategory: { EN: subCat, ID: subCat, JP: subCat },
  categoryName: {
    EN: "Indonesia Visas",
    ID: "Visa Masuk Indonesia",
    JP: "インドネシア入国査証"
  },
  name: {
    EN: `${code} – ${nameEN}`,
    ID: `${code} – ${nameID}`,
    JP: `${code} – ${nameJP}`
  },
  shortDescription: {
    EN: `Used for: ${descID}. Target clients: ${targetClient}.`,
    ID: `Digunakan Untuk: ${descID}. Peruntukan Klien: ${targetClient}.`,
    JP: `目的: ${descID}。対象: ${targetClient}。`
  },
  overview: {
    EN: `Official Indonesian e-Visa (${code}). Used for: ${descID}. Intended for: ${targetClient}.`,
    ID: `Layanan pengurusan e-Visa resmi (${code}). Digunakan untuk: ${descID}. Peruntukan klien: ${targetClient}.`,
    JP: `公式インドネシアe-Visa（${code}）。目的: ${descID}。対象者: ${targetClient}。`
  },
  whoFor: {
    EN: [targetClient],
    ID: [targetClient],
    JP: [targetClient]
  },
  requirements: {
    EN: ["Passport valid for minimum 6 months", "Financial proof / bank statement", "Return or onward flight ticket", "Photograph"],
    ID: ["Paspor dengan masa berlaku minimal 6 bulan", "Bukti rekening koran / tabungan", "Tiket penerbangan kembali / lanjutan", "Pasfoto berwarna terbaru"],
    JP: ["残存期間6ヶ月以上のパスポート", "銀行残高証明書", "往復または第三国行きの航空券", "証明写真"]
  },
  processSteps: [
    {
      step: "01",
      title: { EN: "Document Verification", ID: "Verifikasi Dokumen", JP: "必要書類確認" },
      desc: { EN: "Compliance screening of sponsor and travel intent.", ID: "Pemeriksaan kelengkapan dan tujuan kunjungan.", JP: "渡航目的および必要書類の審査。" }
    },
    {
      step: "02",
      title: { EN: "Immigration Submission", ID: "Pengajuan Ditjen Imigrasi", JP: "入国管理局申請" },
      desc: { EN: "Electronic submission via immigration portal.", ID: "Pengajuan dan pembayaran PNBP di portal resmi Imigrasi.", JP: "公式ポータルでの電子ビザ申請および手数料納付。" }
    },
    {
      step: "03",
      title: { EN: "e-Visa Issuance", ID: "Penerbitan e-Visa", JP: "e-Visa受領" },
      desc: { EN: "Delivery of official electronic visa PDF.", ID: "Penerbitan dokumen resmi e-Visa.", JP: "電子ビザPDFの発給と受領。" }
    }
  ],
  duration: { EN: durationID, ID: durationID, JP: durationID },
  importantInfo: {
    EN: "Single entry category automatically expires upon departure from Indonesia. Multiple entry allows unlimited trips during visa validity without receiving local wage.",
    ID: "Visa Single Entry otomatis hangus jika keluar dari Indonesia. Visa Multiple Entry berlaku keluar-masuk berulang tanpa menerima gaji dari entitas di Indonesia.",
    JP: "シングルビザは出国時に失効します。マルチプルビザは期間中何度でも入出国が可能です（現地給与の受領は不可）。"
  },
  faqs: [],
  imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80"
});

export const category2IndonesiaVisas: ServiceCategory = {
  number: "02",
  id: "indonesia-visas",
  title: {
    EN: "Indonesia Visas (Entry & Stay)",
    ID: "Visa Masuk Indonesia (Indonesia Visas)",
    JP: "インドネシア入国・滞在査証（Indonesia Visas）"
  },
  description: {
    EN: "Full spectrum visa services for foreign nationals (WNA) entering and staying in Indonesia for investment, business, visits, family, and tourism (Family Visa, C-Series, D-Series, Golden Visa).",
    ID: "Kategori layanan bagi warga negara asing (WNA) yang ingin masuk dan tinggal di Indonesia untuk urusan investasi, bisnis, kunjungan, keluarga, maupun wisata.",
    JP: "投資、商談、短期就労、家族帯同、文化・スポーツ、観光など、あらゆる入国目的に応じた査証（家族ビザ、Cシリーズ、Dシリーズ、ゴールデンビザ）。"
  },
  imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "International travelers and business delegates arriving in Indonesia",
  services: [
    // A. Family Visa
    {
      id: "family-visa-indonesia",
      categoryId: "indonesia-visas",
      code: "E31A/E31B",
      subCategory: { EN: "Family Visa", ID: "Family Visa", JP: "家族帯同ビザ" },
      categoryName: { EN: "Indonesia Visas", ID: "Visa Masuk Indonesia", JP: "インドネシア入国査証" },
      name: {
        EN: "Family Visa (Dependent ITAS)",
        ID: "Family Visa / ITAS Penyatuan Keluarga",
        JP: "家族帯同ビザ & ITAS（Family Visa）"
      },
      shortDescription: {
        EN: "e-Visa and Family Reunification ITAS for spouse and dependent children of Working ITAS or Investor ITAS holders.",
        ID: "Pengurusan e-Visa dan ITAS Penyatuan Keluarga bagi suami/istri dan anak dari pemegang ITAS Kerja atau ITAS Investor.",
        JP: "就労ITASまたは投資家ITAS保持者の配偶者および扶養子女向け家族帯同e-VisaおよびITAS手続き。"
      },
      overview: {
        EN: "Enables immediate family members (spouse and children under 18) to legally reside in Indonesia accompanying the primary work or investor permit sponsor.",
        ID: "Izin tinggal penyatuan keluarga resmi yang diberikan bagi suami/istri sah dan anak di bawah umur pemegang izin tinggal kerja/investor.",
        JP: "就労者または投資家の正式な配偶者および未成年の子女がインドネシア国内に長期同伴滞在するための許可証です。"
      },
      whoFor: {
        EN: ["Spouse of primary Working/Investor ITAS holder", "Dependent unmarried children under 18 years old"],
        ID: ["Suami / istri sah pemegang ITAS Kerja atau ITAS Investor", "Anak kandung belum menikah di bawah usia 18 tahun"],
        JP: ["就労または投資家ITAS保持者の配偶者", "18歳未満の未婚の子女"]
      },
      requirements: {
        EN: ["Family member passports (min 18 months)", "Certified Marriage Certificate (sworn translated/apostilled)", "Certified Birth Certificates for children", "Sponsor's active ITAS and passport"],
        ID: ["Paspor keluarga (minimal 18 bulan)", "Buku / Akta Nikah resmi (terjemahan tersumpah/apostille)", "Akta Kelahiran anak", "Paspor dan e-ITAS aktif sponsor utama"],
        JP: ["家族のパスポート（残存18ヶ月以上）", "婚姻証明書・戸籍謄本（公認翻訳・認証済）", "出生証明書", "主たる就労者のパスポートおよび有効なITAS"]
      },
      processSteps: [
        { step: "01", title: { EN: "Document Verification", ID: "Verifikasi Dokumen Keluarga", JP: "戸籍・家族証明書類審査" }, desc: { EN: "Reviewing marriage and birth certificates.", ID: "Pemeriksaan legalitas surat nikah dan akta lahir.", JP: "婚姻・出生証明書の公証・認証確認。" } },
        { step: "02", title: { EN: "e-Visa Issuance", ID: "Penerbitan e-Visa Penyatuan Keluarga", JP: "家族帯同e-Visa発給" }, desc: { EN: "Immigration electronic visa issuance.", ID: "Pengajuan izin tinggal terbatas keluarga di Imigrasi.", JP: "入国管理局による電子ビザの発行。" } },
        { step: "03", title: { EN: "Biometrics & ITAS", ID: "Biometrik & e-ITAS Keluarga", JP: "生体認証登録・ITAS交付" }, desc: { EN: "Local biometric enrollment and digital ITAS issuance.", ID: "Perekaman biometrik dan penerbitan e-ITAS keluarga.", JP: "管轄入国管理局での写真・指紋登録およびITAS受領。" } }
      ],
      duration: { EN: "7 – 10 business days", ID: "7 – 10 hari kerja", JP: "通常 7〜10営業日" },
      importantInfo: { EN: "Family ITAS holders are not permitted to work or receive local compensation in Indonesia.", ID: "Pemegang ITAS Penyatuan Keluarga tidak diperkenankan bekerja atau menerima gaji lokal.", JP: "家族帯同ビザ保持者は原則としてインドネシア国内での就労および現地給与の受領はできません。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
    },

    // B. Single Entry Visa (C-Series)
    makeItem("c1-tourist", "C1", "Single Entry (C-Series)", "Visa Kunjungan Wisata", "Tourist Visit Visa", "観光訪問ビザ", "Perjalanan rekreasi, liburan, dan mengunjungi keluarga/teman di Indonesia", "Wisatawan asing dan WNA yang hendak melakukan kunjungan pribadi"),
    makeItem("c2-business", "C2", "Single Entry (C-Series)", "Visa Kunjungan Bisnis", "Business Visit Visa", "ビジネス商談ビザ", "Mengikuti rapat bisnis, negosiasi kontrak, transaksi jual-beli barang/jasa, serta peninjauan kerja sama", "Pebisnis, eksekutif, dan perwakilan perusahaan asing"),
    makeItem("c3-medical", "C3", "Single Entry (C-Series)", "Visa Kunjungan Perawatan Kesehatan", "Medical Treatment Visa", "医療・治療受診ビザ", "Menjalani pemeriksaan medis, konsultasi dokter, atau terapi pengobatan di fasilitas kesehatan di Indonesia", "Pasien asing dan pendamping medisnya"),
    makeItem("c4-government", "C4", "Single Entry (C-Series)", "Visa Kunjungan Penugasan Pemerintah", "Government Assignment Visa", "政府公務出張ビザ", "Menjalankan tugas dinas non-diplomatik atau proyek resmi kerja sama antar-pemerintah", "Pejabat instansi asing dan delegasi pemerintah luar negeri"),
    makeItem("c5-media", "C5", "Single Entry (C-Series)", "Visa Kunjungan Media dan Pers", "Media & Press Visa", "報道・取材記者ビザ", "Melakukan liputan berita, wawancara, dan jurnalistik oleh media asing resmi", "Wartawan, jurnalis, dan tim berita luar negeri"),
    makeItem("c5a-creator", "C5A", "Single Entry (C-Series)", "Visa Kunjungan Konten Kreator", "Content Creator Visa", "クリエイター・撮影ビザ", "Pengambilan materi video/foto untuk publikasi digital komersial atau mandiri", "YouTuber, influencer, dan pembuat konten digital internasional"),
    makeItem("c6-social", "C6", "Single Entry (C-Series)", "Visa Kunjungan Kegiatan Sosial", "Social Activities Visa", "社会貢献・ボランティアビザ", "Mengikuti kegiatan kemanusiaan, bakti sosial, atau keanggotaan organisasi nirlaba", "Relawan, aktivis sosial, dan anggota LSM internasional"),
    makeItem("c7-arts", "C7", "Single Entry (C-Series)", "Visa Kunjungan Penampilan Seni dan Budaya", "Arts & Culture Performance Visa", "文化・芸術出演ビザ", "Mengisi pertunjukan seni non-musik, pameran budaya, atau festival seni", "Seniman tari, teater, rupa, dan penggiat budaya"),
    makeItem("c7a-music", "C7A", "Single Entry (C-Series)", "Visa Kunjungan Penampilan Musik", "Music Performance Visa", "音楽公演・コンサートビザ", "Mengisi konser, festival musik, atau pertunjukan panggung komersial", "Penyanyi, grup band, dan DJ internasional"),
    makeItem("c7b-music-crew", "C7B", "Single Entry (C-Series)", "Visa Kunjungan Kru Penampilan Musik", "Music Production Crew Visa", "音楽コンサート音響・照明クルービザ", "Mendukung teknis pertunjukan musik (pencahayaan, tata suara, panggung)", "Sound engineer, teknisi panggung, dan crew tur konser"),
    makeItem("c7c-talent", "C7C", "Single Entry (C-Series)", "Visa Kunjungan Penampilan Bakat dan Seni", "Talent & Fashion Show Visa", "タレント・ファッションショー出演ビザ", "Mengikuti ajang pencarian bakat, peragaan busana (fashion show), atau pentas hiburan", "Model, atraktor, dan pengisi acara hiburan"),
    makeItem("c8-sports", "C8", "Single Entry (C-Series)", "Visa Kunjungan Kegiatan Olahraga", "Sports Activities Visa", "スポーツ大会視察・役員ビザ", "Menghadiri eksibisi, promosi, atau rapat organisasi olahraga", "Perwakilan federasi olahraga dan penyelenggara event"),
    makeItem("c8a-athlete", "C8A", "Single Entry (C-Series)", "Visa Kunjungan Atlet Olahraga", "Sports Athlete Visa", "プロ・アマスポーツ選手ビザ", "Bertanding atau berlaga dalam kejuaraan/turnamen resmi", "Atlet profesional dan amatir luar negeri"),
    makeItem("c8b-sports-official", "C8B", "Single Entry (C-Series)", "Visa Kunjungan Ofisial Olahraga", "Sports Official & Coach Visa", "スポーツ公式審判・監督コーチビザ", "Dampingan teknis dan medis selama turnamen berlangsung", "Pelatih, manajer tim, wasit, dan dokter tim olahraga"),
    makeItem("c9-study", "C9", "Single Entry (C-Series)", "Visa Kunjungan Studi Singkat", "Short Study Visa", "短期留学・研修ビザ", "Mengikuti program kursus non-gelar, matrikulasi, atau studi singkat", "Pelajar, mahasiswa pertukaran, dan peserta kursus pendek"),
    makeItem("c9a-religious-training", "C9A", "Single Entry (C-Series)", "Visa Kunjungan Pelatihan Singkat Keagamaan", "Religious Short Training Visa", "宗教短期研修・研修道場ビザ", "Mengikuti pesantren kilat, retret, atau pendalaman ajaran agama", "Peserta pelatihan atau pengetatan nilai keagamaan"),
    makeItem("c9b-bipa", "C9B", "Single Entry (C-Series)", "Visa Kunjungan Pelatihan Singkat Bahasa Indonesia", "Indonesian Language Study (BIPA)", "インドネシア語短期研修ビザ", "Belajar bahasa dan sastra Indonesia di lembaga bahasa", "Peserta program kursus BIPA (Bahasa Indonesia bagi Penutur Asing)"),
    makeItem("c10-speaker", "C10", "Single Entry (C-Series)", "Visa Kunjungan Narasumber Kegiatan Bisnis", "Business Speaker Visa", "ビジネス講演・登壇者ビザ", "Menjadi pembicara dalam konferensi, seminar, atau workshop bisnis", "Pembicara publik, pakar industri, dan konsultan global"),
    makeItem("c10a-preacher", "C10A", "Single Entry (C-Series)", "Visa Kunjungan Penceramah Agama", "Religious Preacher Visa", "宗教説教者・講師ビザ", "Memberikan tausiyah, khotbah, atau ceramah di tempat ibadah/acara keagamaan", "Tokoh agama dan penceramah luar negeri"),
    makeItem("c11-promo", "C11/C11A", "Single Entry (C-Series)", "Visa Kunjungan Promosi Produk dan Jasa", "Product & Trade Expo Promo Visa", "商品・サービス見本市出展プロモーションビザ", "Mengikuti pameran dagang (expo), memperkenalkan barang/jasa, dan uji pasar", "Tim pemasaran dan perwakilan pameran internasional"),
    makeItem("c12-pre-investment", "C12", "Single Entry (C-Series)", "Visa Kunjungan Pra-Investasi", "Pre-Investment Visit Visa", "事前投資調査ビザ", "Survei lapangan, pemetaan bisnis, dan perizinan awal pendirian PT PMA", "Calon investor asing dan perencana ekspansi bisnis"),
    makeItem("c13-crew", "C13", "Single Entry (C-Series)", "Visa Kunjungan Awak Bergabung dengan Alat Angkut", "Vessel & Aircraft Crew Join Visa", "船舶・航空機乗務員合流ビザ", "Naik ke kapal, pesawat, atau transportasi internasional di wilayah Indonesia", "Kru kapal (seaman) dan kru penerbangan internasional"),
    makeItem("c14-film", "C14", "Single Entry (C-Series)", "Visa Kunjungan Pembuatan dan Produksi Film", "Film & Documentary Production Visa", "映画・ドキュメンタリー撮影ビザ", "Pengambilan gambar, pemetaan lokasi, dan pembuatan film/dokumenter", "Kru film, sutradara, dan rumah produksi asing"),
    makeItem("c15-emergency", "C15", "Single Entry (C-Series)", "Visa Kunjungan Penanganan Keadaan Darurat", "Emergency Relief & Technical Visa", "緊急事態対応・災害救援ビザ", "Tugas bantuan bencana alam, teknis darurat, atau misi kemanusiaan mendesak", "Tim SAR, tenaga medis darurat, dan pakar penanggulangan bencana"),
    makeItem("c16-industrial-instructor", "C16", "Single Entry (C-Series)", "Visa Kunjungan Instruktur Pengembangan Industri", "Industrial Instructor Visa", "産業技術研修指導員ビザ", "Memberikan pelatihan teknis dan pembinaan ketrampilan karyawan pabrik", "Instruktur teknis dan spesialis manufaktur vendor"),
    makeItem("c17-audit-qc", "C17", "Single Entry (C-Series)", "Visa Kunjungan Audit, Kendali Mutu, dan Inspeksi Perusahaan", "Audit, Quality Control & Factory Inspection Visa", "工場監査・品質管理（QC）検査ビザ", "Audit keuangan, quality control (QC), dan inspeksi kelayakan fasilitas pabrik", "Auditor independen dan supervisor mutu korporasi global"),
    makeItem("c18-tka-test", "C18", "Single Entry (C-Series)", "Visa Kunjungan Uji Kemampuan Tenaga Kerja Asing", "Foreign Worker Competency Test Visa", "就労適性審査・能力試験ビザ", "Menjalani tes kompetensi atau masa uji coba sebelum pengurusan ITAS Kerja", "Calon TKA yang diproyeksikan bekerja jangka panjang"),
    makeItem("c19-after-sales", "C19", "Single Entry (C-Series)", "Visa Kunjungan Layanan Purna Jual", "After-Sales Service Technical Visa", "アフターサービス技術対応ビザ", "Memberikan evaluasi, penyesuaian, dan layanan garansi produk industri", "Teknisi after-sales service vendor luar negeri"),
    makeItem("c20-machine-repair", "C20", "Single Entry (C-Series)", "Visa Kunjungan Pemasangan dan Perbaikan Mesin", "Machinery Installation & Repair Visa", "機械設備据付・修理エンジニアビザ", "Instalasi, perakitan, dan perbaikan mesin/perangkat industri di Indonesia", "Teknisi dan insinyur mesin pabrik vendor luar negeri"),
    makeItem("c21-judicial", "C21", "Single Entry (C-Series)", "Visa Kunjungan Menghadiri Proses Peradilan", "Judicial Witness & Legal Hearing Visa", "司法裁判・出廷証人ビザ", "Menjadi saksi, saksi ahli, atau menjalani proses persidangan di pengadilan Indonesia", "Saksi ahli, pihak berperkara, dan perwakilan hukum luar negeri"),
    makeItem("c22-internship", "C22", "Single Entry (C-Series)", "Visa Kunjungan Pemagangan", "General Internship Visa", "インターンシップ（実務研修）ビザ", "Mengikuti program magang umum di entitas usaha/instansi", "Peserta program magang"),
    makeItem("c22a-internship-academic", "C22A", "Single Entry (C-Series)", "Visa Kunjungan Pemagangan Akademik", "Academic Internship Visa", "大学連携学術インターンビザ", "Praktik kerja lapangan (PKL) yang terhubung dengan kurikulum kampus asing", "Mahasiswa luar negeri yang menempuh kredit akademik"),
    makeItem("c22b-internship-competency", "C22B", "Single Entry (C-Series)", "Visa Kunjungan Pemagangan Kompetensi", "Competency-Based Internship Visa", "資格・専門技術認定インターンビザ", "Magang terstruktur berbasis sertifikasi keterampilan kerja", "Profesional muda dan lulusan vokasi luar negeri"),

    // C. Multiple Entry Visa (D-Series)
    makeItem("d1-tourist-multiple", "D1", "Multiple Entry (D-Series)", "Visa Kunjungan Wisata (Multiple Entry)", "Multiple Entry Tourist Visa", "数次観光訪問ビザ（1〜2年有効）", "Perjalanan liburan, rekreasi, prapurna bakti, dan mengunjungi keluarga/teman secara berulang kali", "WNA yang memiliki keluarga di Indonesia, pemilik hunian sekunder, atau wisatawan berkala", "3 – 5 hari kerja"),
    makeItem("d2-business-multiple", "D2", "Multiple Entry (D-Series)", "Visa Kunjungan Bisnis (Multiple Entry)", "Multiple Entry Business Visa", "数次ビジネス商談ビザ（1〜2年有効）", "Menghadiri rapat bisnis, negosiasi kontrak, transaksi jual-beli barang/jasa, dan meninjau cabang secara berkala", "Eksekutif perusahaan, manajer regional, dan business developer yang rutin ke Indonesia", "3 – 5 hari kerja"),
    makeItem("d3-medical-multiple", "D3", "Multiple Entry (D-Series)", "Visa Kunjungan Perawatan Kesehatan (Multiple Entry)", "Multiple Entry Medical Visa", "数次医療・定期治療受診ビザ", "Menjalani pengobatan, check-up medis, konsultasi dokter, atau terapi berkala di RS Indonesia", "WNA yang menjalani perawatan medis rutin beserta pendamping medisnya", "3 – 5 hari kerja"),
    makeItem("d4-government-multiple", "D4", "Multiple Entry (D-Series)", "Visa Kunjungan Penugasan Pemerintah (Multiple Entry)", "Multiple Entry Government Assignment", "数次政府公務出張ビザ", "Menjalankan tugas dinas kenegaraan, dinas non-diplomatik, atau proyek kerja sama bilateral berkala", "Pejabat pemerintah asing, delegasi resmi, atau konsultan lembaga internasional", "3 – 5 hari kerja"),
    makeItem("d7-arts-multiple", "D7", "Multiple Entry (D-Series)", "Visa Kunjungan Penampilan Seni dan Budaya (Multiple Entry)", "Multiple Entry Arts & Culture Visa", "数次文化・芸術巡回公演ビザ", "Mengikuti atau mengisi rangkaian pertunjukan seni, konser, dan festival budaya berulang sepanjang tahun", "Seniman, musisi, seniman panggung, dan promotor tur budaya internasional", "3 – 5 hari kerja"),
    makeItem("d8-sports-multiple", "D8", "Multiple Entry (D-Series)", "Visa Kunjungan Kegiatan Olahraga (Multiple Entry)", "Multiple Entry Sports Visa", "数次スポーツ大会・合宿参加ビザ", "Mengikuti kejuaraan olahraga, turnamen persahabatan, dan pemusatan latihan (training camp) berkala", "Atlet profesional, pelatih, agen olahraga, dan ofisial tim internasional", "3 – 5 hari kerja"),
    makeItem("d12-pre-investment-multiple", "D12", "Multiple Entry (D-Series)", "Visa Kunjungan Pra-Investasi (Multiple Entry)", "Multiple Entry Pre-Investment Visa", "数次事前投資調査ビザ（1〜2年有効）", "Melakukan studi kelayakan, survei lokasi pabrik/kantor, dan koordinasi izin sebelum mendirikan PT PMA", "Calon investor asing, venture capitalist, dan tim ekspansi bisnis yang butuh akses keluar-masuk rutin", "3 – 5 hari kerja"),
    makeItem("d14-film-multiple", "D14", "Multiple Entry (D-Series)", "Visa Kunjungan Pembuatan & Produksi Film (Multiple Entry)", "Multiple Entry Film Production Visa", "数次映画・映像制作クルービザ", "Persiapan lokasi (recce), syuting bertahap, pembuatan dokumenter, dan produksi audiovisual di Indonesia", "Kru film, sutradara, tim dokumenter, dan rumah produksi internasional", "3 – 5 hari kerja"),
    makeItem("d17-audit-multiple", "D17", "Multiple Entry (D-Series)", "Visa Kunjungan Audit, Kendali Mutu, dan Inspeksi (Multiple Entry)", "Multiple Entry Audit & QC Visa", "数次品質管理（QC）・監査検査ビザ", "Pemeriksaan laporan keuangan, pengawasan mutu (QC), audit K3, dan inspeksi pabrik cabang/supplier berkala", "Auditor independen, QA specialist, dan supervisor korporasi global", "3 – 5 hari kerja"),

    // D. Golden Visa & Special Permits
    {
      id: "golden-visa-special",
      categoryId: "indonesia-visas",
      code: "GOLDEN-VISA",
      subCategory: { EN: "Golden Visa & Special Permits", ID: "Golden Visa & Special Permits", JP: "特別査証・ゴールデンビザ" },
      categoryName: { EN: "Indonesia Visas", ID: "Visa Masuk Indonesia", JP: "インドネシア入国査証" },
      name: {
        EN: "Golden Visa Indonesia (5 & 10 Years)",
        ID: "Golden Visa Indonesia (5 - 10 Tahun)",
        JP: "インドネシア・ゴールデンビザ（5年・10年）"
      },
      shortDescription: {
        EN: "Exclusive long-term residence permit for substantial individual investors, corporate founders, and high-net-worth global talents.",
        ID: "Layanan eksklusif pengurusan Golden Visa bagi investor skala besar dengan masa izin tinggal 5 hingga 10 tahun.",
        JP: "高額投資家、多国籍企業創業者、卓越したグローバルタレント向けに付与される5〜10年間の特別長期滞在許可。"
      },
      overview: {
        EN: "Indonesia's flagship Golden Visa policy grants long-term residency (5 or 10 years) with expedited immigration clearance, asset purchase privileges, and no local manpower quotas.",
        ID: "Program izin tinggal prioritas negara bagi investor penanam modal besar, pemegang obligasi negara, atau talenta global yang memenuhi standar investasi.",
        JP: "国債購入、現地法人設立投資、または特別技能基準を満たす富裕層・企業幹部向けの最上位長期滞在プログラム。"
      },
      whoFor: {
        EN: ["Corporate investors establishing entities with >$25M capital", "Individual investors depositing >$350K in government bonds/shares", "Global talents and world-renowned figures"],
        ID: ["Investor korporasi dengan investasi skala besar", "Investor perorangan dengan penempatan dana di perbankan/SBN", "Talenta global bidang teknologi, sains, dan bisnis"],
        JP: ["大規模投資を行う法人役員", "国債または現地預金要件を満たす個人投資家", "世界的実績を有する科学・技術分野の専門人材"]
      },
      requirements: {
        EN: ["Passport valid for min 3 years", "Proof of qualifying investment capital or banking deposit", "Proof of clean judicial record", "VPT Priority Application Dossier"],
        ID: ["Paspor berlaku minimal 3 tahun", "Bukti penempatan investasi / komitmen investasi modal", "Surat keterangan berkelakuan baik", "Berkas aplikasi jalur prioritas VPT"],
        JP: ["残存3年以上のパスポート", "指定投資額または現地金融機関預金の証明書", "無犯罪証明書", "VPT専用申請書類一式"]
      },
      processSteps: [
        { step: "01", title: { EN: "Capital & Profile Audit", ID: "Verifikasi Kelayakan Investasi", JP: "投資要件事前精査" }, desc: { EN: "Auditing compliance with immigration capital thresholds.", ID: "Pemeriksaan dokumen investasi dan rekam jejak finansial.", JP: "出資額基準および資産証明書類の適合審査。" } },
        { step: "02", title: { EN: "Priority Ministerial Submission", ID: "Pengajuan Jalur Prioritas", JP: "入国管理局優先審査申請" }, desc: { EN: "Direct processing through Ditjen Imigrasi Golden Visa desk.", ID: "Proses cepat melalui unit khusus Golden Visa Ditjen Imigrasi.", JP: "ゴールデンビザ特設窓口を通じた迅速認可。" } },
        { step: "03", title: { EN: "Biometrics & 5-10 Year Permit", ID: "Biometrik & Izin 5-10 Tahun Terbit", JP: "生体認証登録・5〜10年許可受領" }, desc: { EN: "VIP biometric capture and digital card delivery.", ID: "Perekaman biometrik jalur VIP dan penerbitan izin resmi.", JP: "VIP専用窓口での生体認証登録および長期滞在許可証交付。" } }
      ],
      duration: { EN: "7 – 14 business days", ID: "7 – 14 hari kerja", JP: "通常 7〜14営業日" },
      importantInfo: { EN: "Fast track airport lanes and priority immigration concierge included.", ID: "Termasuk fasilitas VIP Airport Fast Track dan prioritas layanan keimigrasian.", JP: "空港優先レーン利用権および専任コンシェルジュ対応が含まれます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "evoa-visa-on-arrival",
      categoryId: "indonesia-visas",
      code: "B1-eVoA",
      subCategory: { EN: "Golden Visa & Special Permits", ID: "Golden Visa & Special Permits", JP: "特別査証・ゴールデンビザ" },
      categoryName: { EN: "Indonesia Visas", ID: "Visa Masuk Indonesia", JP: "インドネシア入国査証" },
      name: {
        EN: "Electronic Visa on Arrival (e-VoA / B1)",
        ID: "Electronic Visa on Arrival (e-VoA)",
        JP: "電子到着ビザ（e-VoA / Index B1）"
      },
      shortDescription: {
        EN: "Fast digital Visa on Arrival issuance and 30-day extension service for eligible country nationals entering Indonesia.",
        ID: "Pengurusan electronic Visa on Arrival (e-VoA) dan layanan perpanjangan 30 hari tanpa antre di bandara.",
        JP: "対象国籍者向けのオンライン到着ビザ（e-VoA）事前取得および30日間延長手続き。"
      },
      overview: {
        EN: "Enables passport holders of 97+ countries to secure their entry visa prior to departure, skipping long payment queues at international arrival checkpoints.",
        ID: "Memungkinkan WNA dari 97+ negara mendapatkan izin masuk resmi sebelum terbang, bebas antrean pembayaran visa di bandara internasional.",
        JP: "入国時の空港窓口での支払いや列に並ぶことなく、日本出国前にオンラインで確実に入国査証を取得できます。"
      },
      whoFor: {
        EN: ["Business visitors attending brief meetings", "Short-stay tourists and exhibition attendees"],
        ID: ["Pebisnis yang menghadiri pertemuan singkat", "Wisatawan dan pengunjung pameran singkat"],
        JP: ["短期商談出張者", "展示会来場者・観光渡航者"]
      },
      requirements: {
        EN: ["Passport valid min 6 months", "Return ticket", "Credit card / corporate invoice"],
        ID: ["Paspor berlaku min 6 bulan", "Tiket kepulangan", "Pasfoto berwarna"],
        JP: ["残存6ヶ月以上の旅券", "復路航空券", "カラー顔写真"]
      },
      processSteps: [
        { step: "01", title: { EN: "Passport Scan", ID: "Unggah Paspor", JP: "旅券データ照合" }, desc: { EN: "Automated OCR verification.", ID: "Pengecekan data paspor.", JP: "旅券OCR読み取り確認。" } },
        { step: "02", title: { EN: "Issuance", ID: "Penerbitan e-VoA", JP: "即時電子発行" }, desc: { EN: "Official PDF delivery with QR code.", ID: "Penerbitan e-VoA ber-QR Code.", JP: "QRコード付きe-VoAの発給。" } }
      ],
      duration: { EN: "1 – 2 business days (Same day available)", ID: "1 – 2 hari kerja (Bisa One Day)", JP: "通常 1〜2営業日（即日可）" },
      importantInfo: { EN: "Can be extended once for an additional 30 days.", ID: "Dapat diperpanjang 1 kali untuk tambahan durasi 30 hari.", JP: "国内でさらに30日間の1回延長が可能です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "bridging-stay-permit",
      categoryId: "indonesia-visas",
      code: "BRIDGING-PERMIT",
      subCategory: { EN: "Golden Visa & Special Permits", ID: "Golden Visa & Special Permits", JP: "特別査証・ゴールデンビザ" },
      categoryName: { EN: "Indonesia Visas", ID: "Visa Masuk Indonesia", JP: "インドネシア入国査証" },
      name: {
        EN: "Bridging Stay Permit (Transition Permit)",
        ID: "Bridging Stay Permit (Izin Tinggal Transisi)",
        JP: "ブリッジング滞在許可（移行期間暫定許可）"
      },
      shortDescription: {
        EN: "Bridging visa service enabling foreign nationals to maintain legal stay while transitioning between different visa/ITAS categories without exiting Indonesia.",
        ID: "Layanan izin tinggal transisi (Bridging Visa) agar WNA tetap berstatus legal saat peralihan izin tinggal tanpa harus keluar dari Indonesia.",
        JP: "在留資格の変更・更新手続き中に不法滞在となることを防ぎ、国外退去せず国内でステータス移行を完了するための暫定許可。"
      },
      overview: {
        EN: "Under latest Indonesian immigration regulations, foreign nationals transitioning from a Visit Visa to an ITAS, or awaiting a new sponsorship approval, can bridge their lawful status without leaving Indonesian jurisdiction.",
        ID: "Solusi resmi untuk menjembatani masa transisi dari izin tinggal lama menuju izin tinggal baru, menghindari overstay dan tidak memerlukan penerbangan 'visa run' ke luar negeri.",
        JP: "旧ビザの満了から新ビザ・ITAS交付までの空白期間を正規に繋ぐ制度。シンガポール等への不要な出国（ビザラン）コストを削減します。"
      },
      whoFor: {
        EN: ["Foreigners converting Visit Visa (C-series) to Working or Investor ITAS", "Expatriates changing corporate sponsors awaiting decree issuance"],
        ID: ["WNA yang mengalihkan Visa Kunjungan ke ITAS Kerja / Investor", "TKA yang sedang proses perpindahan sponsor perusahaan"],
        JP: ["訪問ビザから就労・投資家ITASへ移行する外国人", "スポンサー変更手続き中の駐在員"]
      },
      requirements: {
        EN: ["Current active visa/stay permit expiring within 30 days", "Application receipt for the new stay permit", "Sponsoring entity guarantee letter"],
        ID: ["Izin tinggal aktif yang akan habis dalam waktu dekat", "Tanda bukti pengajuan izin tinggal baru", "Surat penjaminan perusahaan sponsor"],
        JP: ["有効期限内の現行滞在許可証", "新規滞在許可の申請受付票", "受入企業の身元保証書"]
      },
      processSteps: [
        { step: "01", title: { EN: "Transition Audit", ID: "Pemeriksaan Masa Berlaku", JP: "在留期限・移行要件審査" }, desc: { EN: "Assessing remaining days and conversion pathway.", ID: "Pengecekan sisa masa berlaku visa dan jalur alih status.", JP: "残余日数および資格変更経路の適合確認。" } },
        { step: "02", title: { EN: "Bridging Filing", ID: "Pengajuan Izin Transisi", JP: "暫定許可申請手続" }, desc: { EN: "Registration in immigration transition database.", ID: "Pendaftaran bridging visa di kantor imigrasi.", JP: "入国管理局データベースへの登録手続き。" } }
      ],
      duration: { EN: "3 – 5 business days", ID: "3 – 5 hari kerja", JP: "通常 3〜5営業日" },
      importantInfo: { EN: "Prevents overstay fines (Rp 1,000,000/day) and maintains legal continuity.", ID: "Mencegah denda overstay (Rp 1.000.000/hari) dan menjaga kontinuitas izin tinggal.", JP: "日額100万ルピアのオーバーステイ罰則を防止します。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
