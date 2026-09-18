import { ServiceCategory, ServiceItem } from '../../types';

const makeOverseasVisa = (
  id: string,
  region: "Asia" | "Oceania & Pasifik" | "Eropa (Schengen & UK)",
  country: string,
  visaType: string,
  speed: string,
  descID: string
): ServiceItem => ({
  id,
  categoryId: "overseas-visa-passport",
  code: country.toUpperCase().slice(0, 3),
  subCategory: { EN: region, ID: region, JP: region },
  categoryName: { EN: "Overseas Visas & Passport", ID: "Visa Luar Negeri & Paspor WNI", JP: "海外渡航査証・パスポート" },
  name: {
    EN: `${country} – ${visaType}`,
    ID: `${country} – ${visaType}`,
    JP: `${country} – ${visaType}`
  },
  shortDescription: {
    EN: `Assistance for ${visaType} to ${country}. Processing option: ${speed}. ${descID}`,
    ID: `Pengurusan ${visaType} ke negara ${country}. Jalur layanan: ${speed}. ${descID}`,
    JP: `${country}向け${visaType}申請代行。申請区分: ${speed}。`
  },
  overview: {
    EN: `Comprehensive visa petition assistance for Indonesian citizens traveling to ${country} for business, tourism, or meetings. Includes appointment booking, dossier translation, itinerary coordination, and embassy liaison.`,
    ID: `Layanan pengurusan visa resmi untuk WNI yang bepergian ke ${country}. Mencakup penyiapan berkas, reservasi tiket/hotel pendukung, asuransi, dan pendampingan janji temu kedutaan.`,
    JP: `インドネシア国籍者および在住者の${country}渡航査証申請サポート。公的予約取得、申請書作成、旅程証明書、大使館面接サポートまで一貫対応。`
  },
  whoFor: {
    EN: ["Indonesian corporate executives", "Business delegates and trade visitors", "Holiday travelers & tour groups"],
    ID: ["Eksekutif perusahaan & profesional WNI", "Delegasi bisnis dan peserta pameran", "Wisatawan dan rombongan korporat"],
    JP: ["現地企業役員およびインドネシア人社員", "出張ビジネス渡航者", "一般観光客・団体旅行者"]
  },
  requirements: {
    EN: ["Original Indonesian passport (min 6 months)", "3-6 months bank statement", "Employment / sponsorship letter", "Return flight & accommodation booking", "Passport photo per embassy specs"],
    ID: ["Paspor asli WNI (berlaku min 6 bulan)", "Rekening koran 3 bulan terakhir", "Surat sponsor perusahaan / bukti kerja", "Bukti reservasi tiket pesawat & hotel", "Pasfoto sesuai spesifikasi kedutaan"],
    JP: ["パスポート原本（残存6ヶ月以上）", "直近3ヶ月の銀行残高明細", "在職証明書・企業推薦状", "往復航空券・宿泊予約証明", "各国指定規定の証明写真"]
  },
  processSteps: [
    { step: "01", title: { EN: "Dossier Review", ID: "Pemeriksaan Kelengkapan", JP: "申請書類点検" }, desc: { EN: "Audit against embassy criteria.", ID: "Pemeriksaan rekening koran dan surat sponsor.", JP: "大使館審査基準に基づく書類精査。" } },
    { step: "02", title: { EN: "Appointment & Submission", ID: "Janji Temu & Pengajuan", JP: "予約・申請提出" }, desc: { EN: "VFS/TLS/Embassy submission.", ID: "Penjadwalan biometrik di pusat aplikasi visa resmi.", JP: "ビザ申請センター予約および書類提出。" } },
    { step: "03", title: { EN: "Visa Stamped", ID: "Visa Terbit", JP: "査証受領" }, desc: { EN: "Passport retrieval with issued visa sticker/eVisa.", ID: "Pengambilan paspor dengan stiker visa resmi.", JP: "査証発給済みパスポートの受領・引渡し。" } }
  ],
  duration: { EN: speed, ID: speed, JP: speed },
  importantInfo: { EN: "Approval is at the sole discretion of the destination country's embassy or consulate.", ID: "Keputusan persetujuan visa mutlak berada pada kewenangan Kedutaan Besar negara tujuan.", JP: "査証発給の可否は渡航先国大使館・領事館の専決事項となります。" },
  faqs: [],
  imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
});

export const category3OverseasVisas: ServiceCategory = {
  number: "03",
  id: "overseas-visa-passport",
  title: {
    EN: "Overseas Visas & Indonesian Passport",
    ID: "Visa Luar Negeri & Paspor WNI (Overseas Visas & Passport)",
    JP: "海外渡航査証 & インドネシアパスポート（Overseas Visas & Passport）"
  },
  description: {
    EN: "International mobility services for Indonesian citizens (WNI) requiring outbound travel documentation, including Indonesian Passport issuance (Regular, E-Passport, Polycarbonate) and Outbound Visas for Asia, Oceania, UK, and Schengen Europe.",
    ID: "Layanan mobilitas internasional bagi Warga Negara Indonesia (WNI) yang membutuhkan dokumen perjalanan ke luar negeri, mulai dari Paspor RI (Reguler, E-Passport, Polikarbonat) hingga Visa Luar Negeri untuk kawasan Asia, Oceania, dan Eropa Schengen.",
    JP: "インドネシア国籍者（WNI）の海外渡航サポート。インドネシア旅券発行（通常・電子・ポリカーボネート版）から、アジア各国、オセアニア、英国、ヨーロッパ・シェンゲン協定国の査証取得まで一括代行。"
  },
  imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Indonesian passports and international departure boarding gates",
  services: [
    // A. Pengurusan Paspor Indonesia
    {
      id: "paspor-indonesia",
      categoryId: "overseas-visa-passport",
      code: "PASPOR-RI",
      subCategory: { EN: "Indonesian Passport", ID: "Paspor Indonesia", JP: "インドネシアパスポート" },
      categoryName: { EN: "Overseas Visas & Passport", ID: "Visa Luar Negeri & Paspor WNI", JP: "海外渡航査証・パスポート" },
      name: {
        EN: "Indonesian Passport Services (Regular, E-Passport & Polycarbonate)",
        ID: "Pengurusan Paspor Indonesia (Reguler, E-Passport & Polikarbonat)",
        JP: "インドネシアパスポート発行（通常・電子・ポリカーボネート）"
      },
      shortDescription: {
        EN: "Full issuance and renewal service for Indonesian Passports: Regular 48-pages, Electronic E-Passport, and Polycarbonate E-Passport (5 & 10 years validity) via Normal & VIP Fast-Track lanes.",
        ID: "Layanan pengurusan Paspor Baru & Penggantian: Paspor Reguler 48 Hal, E-Passport, E-Passport Polikarbonat (Masa berlaku 5 & 10 Tahun) Jalur Normal & VIP.",
        JP: "インドネシア旅券の新規取得および更新。通常旅券（48頁）、電子E-Passport、ポリカーボネートE-Passport（5年・10年有効）、通常枠およびVIP特急枠対応。"
      },
      overview: {
        EN: "VPT facilitates priority queue booking on M-Paspor, dossier compliance verification, and VIP escort at the Immigration Office for fingerprint biometric capture and expedited booklet delivery.",
        ID: "Pengurusan Paspor Republik Indonesia resmi melalui Kantor Imigrasi. Termasuk pendampingan antrean khusus VIP, pengecekan berkas administrasi kependudukan (KTP, KK, Akta Lahir/Ijazah), dan opsi layanan percepatan 1 hari kerja.",
        JP: "M-Paspor予約代行から書類事前審査、入国管理局での生体認証（指紋・写真撮影）のVIPエスコート、即日受領オプションまでをサポートします。"
      },
      whoFor: {
        EN: ["Indonesian corporate executives & staff needing rapid passport renewal", "Frequent travelers qualifying for visa-free waivers via E-Passport", "First-time applicants and children"],
        ID: ["Direksi, manajer, dan staf WNI dengan jadwal keberangkatan mendesak", "WNI yang membutuhkan E-Passport untuk fasilitas bebas visa (misal: Visa Waiver Jepang)", "Pemohon paspor baru, perpanjangan, atau paspor anak"],
        JP: ["出張予定が迫っている現地法人インドネシア人幹部・社員", "日本のビザ免除（Visa Waiver）登録が可能なE-Passport希望者", "新規申請者および期限更新者"]
      },
      requirements: {
        EN: ["Indonesian ID Card (e-KTP)", "Family Card (Kartu Keluarga)", "Birth Certificate (Akta Lahir) / Marriage Certificate / School Diploma", "Old passport (for renewals)"],
        ID: ["e-KTP WNI asli & fotokopi", "Kartu Keluarga (KK) terbaru", "Akta Kelahiran / Akta Nikah / Ijazah", "Paspor lama (bagi yang perpanjangan)"],
        JP: ["インドネシア住民カード（e-KTP）", "家族カード（KK）", "出生証明書または婚姻証明書または最終卒業証書", "旧パスポート（更新時）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Dossier Verification", ID: "Verifikasi Data Kependudukan", JP: "身元書類照合" }, desc: { EN: "Ensuring exact name alignment across KTP, KK, and birth deed.", ID: "Penyelarasan nama pada KTP, KK, dan Akta Lahir/Ijazah.", JP: "住民カード、家族カード、出生証明書間の氏名表記統一確認。" } },
        { step: "02", title: { EN: "VIP Immigration Appointment", ID: "Biometrik di Kantor Imigrasi", JP: "入国管理局面接・生体認証" }, desc: { EN: "Priority photo and fingerprint capture.", ID: "Perekaman biometrik tanpa antre panjang dengan pendampingan tim VPT.", JP: "VPTスタッフ同行による優先レーンでの写真撮影・指紋登録。" } },
        { step: "03", title: { EN: "Passport Delivery", ID: "Pengambilan Paspor Resmi", JP: "旅券受領・納品" }, desc: { EN: "Safe handover of printed passport booklet.", ID: "Pengambilan buku paspor resmi dari Kantor Imigrasi.", JP: "発行されたパスポートの安全な受領と引き渡し。" } }
      ],
      duration: { EN: "Normal: 3-4 days | VIP Express: 1 business day", ID: "Normal: 3-4 hari | Jalur VIP Percepatan: 1 hari kerja", JP: "通常: 3〜4営業日 | VIP即日: 1営業日" },
      importantInfo: { EN: "E-Passport is required for the Japan Visa Waiver program.", ID: "E-Passport memenuhi syarat registrasi bebas visa ke Jepang (Japan Visa Waiver).", JP: "E-Passportは日本のビザ免除事前登録（J-VIS）に対応しています。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
    },

    // B. Asia
    makeOverseasVisa("visa-malaysia", "Asia", "Malaysia", "Business Visa (Single Entry)", "3 – 5 hari kerja", "Untuk kunjungan bisnis dan rapat resmi."),
    makeOverseasVisa("visa-vietnam", "Asia", "Vietnam", "Single Entry Visa", "4 – 6 hari kerja", "Untuk keperluan bisnis atau tinggal melebihi durasi bebas visa ASEAN."),
    makeOverseasVisa("visa-korea", "Asia", "Korea Selatan", "Single & Multiple Entry (Normal / Express)", "Normal: 6-8 hari | Express: 3-4 hari", "Kunjungan bisnis, seminar, atau pariwisata di Korea Selatan."),
    makeOverseasVisa("visa-china", "Asia", "China", "Single & Double Entry (Normal / Express)", "Normal: 4-5 hari | Express: 2-3 hari", "Visa bisnis (M), kunjungan dagang, atau wisata (L) ke Republik Rakyat Tiongkok."),
    makeOverseasVisa("visa-japan", "Asia", "Jepang", "Single Entry & Japan Visa Waiver (E-Passport)", "Normal: 5 hari kerja", "Pengurusan visa kunjungan sementara dengan/tanpa appointment, serta registrasi bebas visa E-Passport WNI."),
    makeOverseasVisa("visa-taiwan", "Asia", "Taiwan", "Visitor Visa & TAC (E-Visa)", "Normal: 5 hari | Express: 2 hari", "Visa kunjungan bisnis/wisata atau registrasi Travel Authorization Certificate online."),
    makeOverseasVisa("visa-india", "Asia", "India", "Multiple Entry e-Visa (1 - 5 Tahun)", "3 – 4 hari kerja", "Electronic Visa resmi untuk kunjungan bisnis atau pariwisata ke India."),
    makeOverseasVisa("visa-kazakhstan", "Asia", "Kazakhstan", "Multiple Entry Visa", "5 – 7 hari kerja", "Visa bisnis dan perjalanan resmi ke wilayah Kazakhstan."),
    makeOverseasVisa("visa-jordan", "Asia", "Yordania", "Visit Visa (Single Entry)", "5 – 7 hari kerja", "Kunjungan bisnis atau perjalanan ke Kerajaan Yordania."),
    makeOverseasVisa("visa-uae", "Asia", "UAE / Dubai", "Single Entry (Normal / Express)", "Normal: 5-6 hari | Express: 3-4 hari", "Visa elektronik resmi masuk ke Uni Emirat Arab (Dubai/Abu Dhabi)."),

    // Oceania & Pasifik
    makeOverseasVisa("visa-australia", "Oceania & Pasifik", "Australia", "Visitor Visa (Subclass 600)", "15 – 25 hari kerja", "Visa kunjungan bisnis atau pariwisata multi-entry ke Australia."),
    makeOverseasVisa("visa-new-zealand", "Oceania & Pasifik", "Selandia Baru (New Zealand)", "Visitor Visa", "20 – 30 hari kerja", "Visa kunjungan bisnis dan wisata ke New Zealand."),

    // Eropa (Schengen & UK)
    makeOverseasVisa("visa-uk", "Eropa (Schengen & UK)", "United Kingdom (UK)", "Standard Visitor Visa (Multiple Entry)", "15 – 20 hari kerja (Priority available)", "Visa kunjungan bisnis dan umum ke Inggris, Skotlandia, Wales, dan Irlandia Utara."),
    makeOverseasVisa("visa-netherlands", "Eropa (Schengen & UK)", "Belanda (Netherlands)", "Schengen Short-Term Tourist/Business", "15 – 20 hari kerja", "Akses bebas bepergian ke 27 negara anggota Schengen via perwakilan Belanda."),
    makeOverseasVisa("visa-france", "Eropa (Schengen & UK)", "Prancis (France)", "Schengen Short-Term Tourism/Business", "15 – 20 hari kerja", "Visa Schengen resmi via kedutaan Prancis."),
    makeOverseasVisa("visa-spain", "Eropa (Schengen & UK)", "Spanyol (Spain)", "Schengen Short-Term Tourism/Business", "15 – 20 hari kerja", "Visa Schengen via BLS International Spanyol."),
    makeOverseasVisa("visa-germany", "Eropa (Schengen & UK)", "Jerman (Germany)", "Schengen Short-Term Business/Travel", "15 – 20 hari kerja", "Visa kunjungan bisnis pameran (Messe) atau wisata ke Jerman."),
    makeOverseasVisa("visa-italy", "Eropa (Schengen & UK)", "Italia (Italy)", "Schengen Short-Term Tourist/Business", "15 – 20 hari kerja", "Visa kunjungan Schengen resmi via VFS Global Italia."),
    makeOverseasVisa("visa-sweden", "Eropa (Schengen & UK)", "Swedia (Sweden)", "Schengen Short-Term Visa", "15 – 20 hari kerja", "Visa kunjungan resmi ke Swedia dan kawasan Nordik."),
    makeOverseasVisa("visa-switzerland", "Eropa (Schengen & UK)", "Swiss (Switzerland)", "Schengen Short-Term Visa", "15 – 20 hari kerja", "Visa kunjungan bisnis korporasi dan wisata ke Swiss."),
    makeOverseasVisa("visa-portugal", "Eropa (Schengen & UK)", "Portugal", "Schengen Tourist/Business Visa", "15 – 20 hari kerja", "Visa kunjungan resmi masuk ke Portugal dan wilayah Schengen.")
  ]
};
