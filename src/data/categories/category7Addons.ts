import { ServiceCategory } from '../../types';

export const category7Addons: ServiceCategory = {
  number: "07",
  id: "additional-services",
  title: {
    EN: "Additional & Support Services",
    ID: "Layanan Tambahan & Pendukung (Add-ons Services)",
    JP: "渡航・申請付帯サポート（Add-ons Services）"
  },
  description: {
    EN: "Essential travel and legal support services ensuring seamless visa application compliance, including verified hotel reservations, flight itineraries, sworn translations, and Schengen-standard travel insurance.",
    ID: "Layanan pendukung lengkap untuk memenuhi persyaratan administrasi pengajuan visa, legalitas dokumen resmi, dan kenyamanan perjalanan internasional.",
    JP: "ビザ申請の必須添付書類を完備する付帯サポート。大使館公認フライト仮予約（Itinerary）、ホテル宿泊確認書、公認宣誓翻訳（Sworn Translator）、シェンゲン基準クリア海外旅行保険。"
  },
  imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Sworn legal translation documents and travel itinerary confirmation dossiers",
  services: [
    {
      id: "hotel-booking-assistance",
      categoryId: "additional-services",
      code: "HOTEL-BOOK",
      categoryName: { EN: "Support Services", ID: "Layanan Tambahan", JP: "渡航付帯サポート" },
      name: {
        EN: "Hotel Reservation Assistance (Visa Requirement)",
        ID: "Asistensi Reservasi Akomodasi & Hotel (Hotel Booking Assistance)",
        JP: "ホテル宿泊予約証明書手配（ビザ申請用確約予約）"
      },
      shortDescription: {
        EN: "Issuance of verifiable hotel accommodation vouchers and booking confirmations formatted specifically to meet strict embassy and immigration visa application standards without risking non-refundable prepaid hotel costs.",
        ID: "Penerbitan bukti reservasi hotel resmi yang terverifikasi dan memenuhi syarat ketat kedutaan asing/imigrasi tanpa harus membayar lunas biaya kamar hotel di muka.",
        JP: "大使館や入国管理局のビザ審査基準に合致した、確認可能な公式ホテル予約確認書（バウチャー）の即時手配。ビザ発給前の高額な宿泊費決済リスクを回避。"
      },
      overview: {
        EN: "Embassy visa officers require confirmed accommodation proofs across the entire intended itinerary. Purchasing non-refundable bookings before visa approval carries immense financial risk. VPT provides legitimate, verifiable corporate booking vouchers recognized by embassies and immigration authorities.",
        ID: "Syarat wajib dokumen pengajuan visa luar negeri dan visa masuk Indonesia. Bukti booking terhubung langsung dengan sistem reservasi resmi sehingga lolos verifikasi kedutaan (Schengen, Jepang, UK, Korea, dll.) dengan aman dan hemat.",
        JP: "シェンゲン協定国、英国、日本等の査証申請において必須となる全日程の宿泊証明。審査中ホテルへの電話確認や予約番号照会にも耐えうる正規の予約証明書を発行します。"
      },
      whoFor: {
        EN: ["Applicants applying for Schengen, UK, Japan, Korea, or USA visas", "Foreign visitors needing confirmed accommodation proof for Indonesian e-Visas", "Corporate business travelers with flexible travel itineraries"],
        ID: ["Pemohon visa luar negeri yang belum ingin membayar lunas kamar hotel", "WNA yang membutuhkan bukti akomodasi untuk pengajuan visa Indonesia", "Pelancong bisnis yang jadwal perjalanannya masih fleksibel"],
        JP: ["ビザ発給前にホテルの全額前払いを避けたい渡航者", "インドネシア入国ビザ申請で滞在先証明が必要な外国人", "日程変更の可能性がある出張者"]
      },
      requirements: {
        EN: ["Traveler's full name exactly matching passport", "Destination city and intended travel dates", "Number of guests and room preference"],
        ID: ["Nama lengkap pemohon sesuai ejaan di paspor", "Kota tujuan dan estimasi tanggal check-in & check-out", "Jumlah tamu dan preferensi tipe kamar"],
        JP: ["パスポート記載通りの氏名ローマ字表記", "渡航先都市および予定宿泊日程（チェックイン・アウト日）", "宿泊人数および部屋タイプ"]
      },
      processSteps: [
        { step: "01", title: { EN: "Itinerary Alignment", ID: "Sinkronisasi Tanggal & Rute", JP: "日程・渡航ルート確認" }, desc: { EN: "Matching hotel check-in/out perfectly with flight dates.", ID: "Penyesuaian tanggal menginap agar pas dengan tiket penerbangan.", JP: "航空券日程と整合性のある宿泊スケジュールの設計。" } },
        { step: "02", title: { EN: "Booking Voucher Delivery", ID: "Penerbitan Voucher Resmi", JP: "予約確認書（バウチャー）発行" }, desc: { EN: "Immediate issuance of confirmed hotel reservation PDF.", ID: "Penerbitan dokumen reservasi hotel ber-kode booking resmi.", JP: "予約照会番号付き公式ホテルバウチャーPDFの即日交付。" } }
      ],
      duration: { EN: "1 – 2 hours (Same-day instant dispatch)", ID: "1 – 2 jam (Selesai hari yang sama)", JP: "最短1〜2時間（即日発行）" },
      importantInfo: { EN: "Verifiable directly with central global hotel distribution systems.", ID: "Terdaftar resmi pada sistem reservasi global dan dapat diverifikasi langsung.", JP: "世界主要予約システム上で照会可能な正規バウチャーです。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "flight-itinerary-assistance",
      categoryId: "additional-services",
      code: "FLIGHT-ITIN",
      categoryName: { EN: "Support Services", ID: "Layanan Tambahan", JP: "渡航付帯サポート" },
      name: {
        EN: "Flight Itinerary & Ticket Reservation Assistance",
        ID: "Asistensi Penerbitan Rencana Perjalanan & Penerbangan (Flight Itinerary)",
        JP: "往復航空券予約確認書（フライト・イトナリー）手配"
      },
      shortDescription: {
        EN: "Procurement of confirmed, verifiable round-trip flight itineraries with active PNR airline locator codes specifically tailored for visa applications without requiring full airfare purchase beforehand.",
        ID: "Penerbitan tiket reservasi penerbangan pulang-pergi (Flight Itinerary) dengan kode PNR aktif yang dapat dicek di website maskapai, khusus untuk kelengkapan berkas visa.",
        JP: "航空会社GDSシステム上で照会可能な実有効PNRコード（予約番号）付き往復航空券予約証明書の取得。ビザ不許可時の航空券払戻リスクをゼロにします。"
      },
      overview: {
        EN: "Immigration authorities and foreign embassies mandate proof of round-trip or onward travel before issuing any visa. Purchasing expensive flights prior to obtaining a visa poses immense risk of ticket forfeiture. VPT generates certified GDS flight itineraries displaying genuine airline confirmation numbers.",
        ID: "Membantu pelancong mendapatkan bukti tiket pesawat pulang-pergi resmi ber-PNR aktif tanpa harus membeli tiket mahal terlebih dahulu sebelum visa disetujui. Diterima oleh seluruh kedutaan besar (Schengen, Australia, Jepang, UK, dll.) dan imigrasi.",
        JP: "すべての在外公館は査証申請時に往復または第三国行きのフライト予約を要求します。高価な実航空券を購入することなく、各国大使館の審査基準を満たす有効なPNR付き旅程表を提供します。"
      },
      whoFor: {
        EN: ["Visa applicants who do not want to purchase non-refundable flight tickets before approval", "Foreign nationals entering Indonesia needing mandatory onward flight proof", "Travelers with multi-city complex itineraries"],
        ID: ["Pemohon visa yang belum ingin merugi jika visa tertolak atau jadwal mundur", "WNA yang masuk Indonesia dan wajib melampirkan tiket keluar", "Pelancong dengan rute multi-negara"],
        JP: ["ビザ審査結果が出るまで実券購入を保留したい申請者", "インドネシア入国時に出国用航空券の提示を求められる外国人", "複数都市を周遊する出張者"]
      },
      requirements: {
        EN: ["Passport details matching traveler's identity", "Target travel dates and preferred departure/arrival airports"],
        ID: ["Nama lengkap sesuai paspor dan nomor paspor", "Tanggal keberangkatan dan kepulangan serta kota asal/tujuan"],
        JP: ["パスポート通りの氏名・旅券番号", "出発・帰国希望日および利用発着空港"]
      },
      processSteps: [
        { step: "01", title: { EN: "Route Selection", ID: "Pemilihan Rute Maskapai", JP: "航空会社・フライトルート選定" }, desc: { EN: "Matching optimal flight timing to intended visa duration.", ID: "Pencocokan rute dan jadwal penerbangan sesuai tanggal rencana perjalanan.", JP: "滞在予定日数と合致する最適便・スケジュールの確保。" } },
        { step: "02", title: { EN: "PNR Generation", ID: "Penerbitan PNR Aktif", JP: "PNR予約番号発行" }, desc: { EN: "Direct GDS reservation and delivery of verifiable e-ticket itinerary.", ID: "Penerbitan itinerary ber-kode PNR resmi yang dapat dicek di website maskapai.", JP: "航空会社公式Web上で確認可能な予約確認書PDFの納品。" } }
      ],
      duration: { EN: "1 – 2 hours (Instant delivery)", ID: "1 – 2 jam (Selesai cepat)", JP: "最短1〜2時間（迅速交付）" },
      importantInfo: { EN: "100% compliant with embassy visa submission requirements globally.", ID: "Diterima resmi oleh seluruh kedutaan besar dan sistem imigrasi global.", JP: "世界各国のビザ審査において100%通用する公認フォーマットです。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "sworn-translator-services",
      categoryId: "additional-services",
      code: "SWORN-TRANS",
      categoryName: { EN: "Support Services", ID: "Layanan Tambahan", JP: "渡航付帯サポート" },
      name: {
        EN: "Sworn Translator Services (Certified Legal Translation)",
        ID: "Layanan Penerjemah Tersumpah (Sworn Translator Services)",
        JP: "公認宣誓翻訳サービス（Sworn Legal Translation）"
      },
      shortDescription: {
        EN: "Certified and legally binding translation by government-registered Sworn Translators (Penerjemah Tersumpah) with official stamps, seals, and affidavits accepted by Ministries, Embassies, and foreign immigration agencies (Indonesian, English, Japanese, Mandarin, etc.).",
        ID: "Layanan penerjemahan resmi berbadan hukum oleh Penerjemah Tersumpah Kemenkumham dengan stempel dan tanda tangan basah yang diakui resmi oleh Kedutaan Besar, Kementerian, dan Pengadilan.",
        JP: "法務人権省認定の公認宣誓翻訳人（Sworn Translator）による法的効力を持つ翻訳。大使館、裁判所、各省庁提出用（インドネシア語・英語・日本語・中国語等）。"
      },
      overview: {
        EN: "Official documents (Birth Certificates, Marriage Deeds, Corporate Deeds, Police Clearances, Academic Degrees, Tax returns) must be translated by accredited Sworn Translators to be legally admissible before governmental authorities and embassies. VPT provides rapid certified sworn translations bearing official registrar stamps.",
        ID: "Dokumen resmi untuk urusan visa, pernikahan campuran, pendirian PT PMA, atau studi ke luar negeri wajib diterjemahkan oleh Penerjemah Tersumpah. Hasil terjemahan dilengkapi kop resmi, nomor SK pengangkatan penerjemah, cap, dan tanda tangan sah.",
        JP: "戸籍謄本、婚姻証明書、出生証明書、会社定款、登記簿謄本、残高証明書等の公文書を、大使館や官公庁が受理する法的基準で翻訳・認証捺印して納品します。"
      },
      whoFor: {
        EN: ["Expatriates submitting foreign marriage or birth certificates for Family ITAS", "Students and job seekers applying abroad needing certified transcripts", "Corporations submitting foreign parent company certificates for PT PMA registration"],
        ID: ["TKA yang mengurus visa keluarga (Akta Lahir, Akta Nikah luar negeri)", "WNI yang mendaftar visa studi atau kerja ke luar negeri (Ijazah, Transkrip, SKCK)", "Perusahaan yang mendirikan PT PMA atau mengikuti tender internasional"],
        JP: ["家族帯同ビザ申請のために日本の戸籍・婚姻証明書を提出する駐在員", "留学・就労ビザ申請を行うインドネシア人（卒業証明・無犯罪証明等）", "PT PMA設立にあたり親会社の商業登記簿を提出する現地法人"]
      },
      requirements: {
        EN: ["Clear, high-resolution scan of original documents", "Specific target language required (e.g., ID to EN, JP to ID, EN to ID)", "Correct spelling of names if transliterating"],
        ID: ["Scan dokumen asli yang jelas dan terbaca", "Pilihan bahasa target (Indonesia, Inggris, Jepang, Mandarin, dll.)", "Pengecekan ejaan nama sesuai paspor"],
        JP: ["原本の高解像度スキャンデータ", "希望翻訳言語（日→尼、英→尼、尼→日、尼→英等）", "パスポート記載の英字氏名表記"]
      },
      processSteps: [
        { step: "01", title: { EN: "Document Intake & Quote", ID: "Analisis Berkas & Hitung Kata", JP: "原本受領・文字数算定" }, desc: { EN: "Calculating page and word count with certified timeline.", ID: "Penghitungan jumlah halaman hasil dan estimasi waktu selesai.", JP: "専門用語確認および完了スケジュールの確定。" } },
        { step: "02", title: { EN: "Sworn Translation", ID: "Penerjemahan Resmi Tersumpah", JP: "公認翻訳人による翻訳作成" }, desc: { EN: "Accurate translation by registered legal linguistic specialists.", ID: "Penerjemahan oleh ahli bahasa bersertifikat resmi Kemenkumham.", JP: "法務人権省認定翻訳士による厳格な法律翻訳。" } },
        { step: "03", title: { EN: "Stamping & Digital/Physical Delivery", ID: "Pembubuhan Stempel & Pengiriman", JP: "公印・署名押印・原本納品" }, desc: { EN: "Official sworn stamp affixation and delivery of PDF and hardcopy.", ID: "Pemberian cap resmi, tanda tangan, dan pengiriman dokumen fisik/PDF.", JP: "宣誓印・署名付きPDFおよびハードコピー原本の引き渡し。" } }
      ],
      duration: { EN: "Standard: 2 – 3 days | Express: 1 day (24 hours)", ID: "Standar: 2 – 3 hari kerja | Kilat: 1 hari (24 jam)", JP: "通常: 2〜3営業日 | 特急: 即日〜24時間" },
      importantInfo: { EN: "Legally accepted by all foreign embassies and Indonesian ministries (Kemenkumham & Kemlu).", ID: "100% diakui secara sah oleh seluruh Kedutaan Asing, Kemenkumham, dan Kemlu RI.", JP: "法務省、外務省および駐在外国大使館において100%受理されます。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "basic-travel-insurance",
      categoryId: "additional-services",
      code: "TRAVEL-INS",
      categoryName: { EN: "Support Services", ID: "Layanan Tambahan", JP: "渡航付帯サポート" },
      name: {
        EN: "Basic International Travel Insurance (Schengen Standard €30,000+)",
        ID: "Asuransi Perjalanan Dasar (Basic Travel Insurance - Schengen Standard)",
        JP: "海外旅行保険証券発行（シェンゲン協定基準 3万ユーロ以上補償）"
      },
      shortDescription: {
        EN: "Instant issuance of international travel insurance policies fully certified to meet mandatory embassy visa requirements, covering minimum €30,000 / $50,000 for emergency medical hospitalization, evacuation, and repatriation.",
        ID: "Penerbitan polis asuransi perjalanan internasional resmi yang memenuhi standar wajib pengajuan visa kedutaan (minimal pertanggungan medis €30.000 / US$ 50.000) tanpa masa tunggu.",
        JP: "シェンゲン協定国ビザ申請等の必須要件である「治療・緊急送還補償3万ユーロ以上（約500万円以上）」を完全に満たす公式海外旅行保険証券の即日発行。"
      },
      overview: {
        EN: "Schengen states and numerous overseas embassies reject visa applications immediately if the attached insurance policy lacks emergency repatriation or falls below €30,000 in coverage. VPT partners with leading international underwriters to issue compliant, embassy-endorsed certificates within minutes.",
        ID: "Syarat mutlak untuk pengajuan Visa Schengen (Eropa), serta sangat direkomendasikan untuk visa negara lain. Menjamin perlindungan biaya rawat inap darurat, repatriasi medis, keterlambatan bagasi, dan pembatalan penerbangan.",
        JP: "ヨーロッパ・シェンゲンビザ申請における厳格な要件（新型コロナ補償含む最低3万ユーロの医療補償および遺体送還特約）をクリアした証券を発行。大使館での却下リスクを防ぎます。"
      },
      whoFor: {
        EN: ["Applicants submitting Schengen, Japan, UK, or USA visa petitions", "Expatriates traveling on corporate regional business trips", "Families holidaying abroad seeking peace of mind"],
        ID: ["Pemohon Visa Schengen Eropa yang wajib melampirkan asuransi minimal €30.000", "Pebisnis dan staf perusahaan yang melakukan dinas ke luar negeri", "Keluarga yang bepergian untuk liburan internasional"],
        JP: ["シェンゲンビザ申請を行う渡航者（全加盟国共通で必須）", "海外出張を行う現地法人幹部・社員", "海外個人旅行者およびツアー参加者"]
      },
      requirements: {
        EN: ["Passport details (Name, DOB, Passport Number)", "Country of destination and departure/return dates", "Choice of coverage tier (Individual / Couple / Family)"],
        ID: ["Data paspor (Nama lengkap, Tanggal lahir, Nomor Paspor)", "Negara tujuan dan tanggal jadwal perjalanan", "Pilihan paket pertanggungan (Perorangan / Keluarga)"],
        JP: ["パスポート記載事項（氏名、生年月日、旅券番号）", "渡航先国および日本・インドネシア出発日・帰国日", "プラン選択（個人・夫婦・家族プラン）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Plan Matching", ID: "Penentuan Paket Sesuai Syarat Kedutaan", JP: "大使館要件適合プラン選定" }, desc: { EN: "Configuring policy coverage to match exact visa criteria.", ID: "Pemilihan polis yang memenuhi limit €30.000 atau $50.000.", JP: "各渡航先基準に応じた補償限度額の設定。" } },
        { step: "02", title: { EN: "Instant Policy Certificate", ID: "Penerbitan Sertifikat Polis Resmi", JP: "保険証券PDF即時発行" }, desc: { EN: "Immediate delivery of certified digital policy document.", ID: "Penerbitan polis asuransi resmi dengan nomor polis global aktif.", JP: "在外公館提出用の英語表記保険証券の受領。" } }
      ],
      duration: { EN: "30 minutes – 1 hour (Instant issuance)", ID: "30 menit – 1 jam (Langsung terbit)", JP: "最短30分〜1時間（即時完了）" },
      importantInfo: { EN: "Includes 24/7 global medical emergency assistance hotline.", ID: "Termasuk nomor darurat bantuan medis internasional 24 jam.", JP: "24時間年中無休のグローバル緊急医療アシスタンス窓口付き。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
