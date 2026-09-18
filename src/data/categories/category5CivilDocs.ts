import { ServiceCategory } from '../../types';

export const category5CivilDocs: ServiceCategory = {
  number: "05",
  id: "civil-stay-services",
  title: {
    EN: "Immigration Maintenance & Civil Documentation",
    ID: "Layanan Sipil WNA & Purna-Izin Tinggal (Immigration Maintenance & Civil Docs)",
    JP: "在留管理・外国人住民登録・帰任手続き（Immigration Maintenance & Civil Docs）"
  },
  description: {
    EN: "Post-visa issuance maintenance, stay permit lifecycle management, address/passport mutations, civil registration (SKTT, KTP-OA), account recoveries, and Exit Permits (EPO/ERP).",
    ID: "Layanan pengelolaan pasca-penerbitan visa, pemeliharaan izin tinggal, pemenuhan administrasi sipil WNA selama menetap di Indonesia, hingga proses kepulangan permanen.",
    JP: "パスポート更新や住所移転に伴う入管異動届（Mutasi）、外国人住民証明（SKTT・KTP-OA）、帰任時の出国許可（EPO・ERP）、労働省オンラインアカウント復旧およびTKA保険。"
  },
  imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Immigration officer reviewing official stamps and civil documents",
  services: [
    {
      id: "mutasi-keimigrasian",
      categoryId: "civil-stay-services",
      code: "MUTASI",
      categoryName: { EN: "Civil & Stay Maintenance", ID: "Layanan Sipil WNA", JP: "在留管理" },
      name: {
        EN: "Immigration Mutation (Passport & Address Updates)",
        ID: "Mutasi Keimigrasian (Mutasi Paspor & Mutasi Alamat)",
        JP: "入国管理局記載事項変更（旅券切替・住所移転届出）"
      },
      shortDescription: {
        EN: "Mandatory immigration reporting when an expatriate renews their passport booklet or changes residential address within or across Indonesian immigration jurisdictions.",
        ID: "Pelaporan resmi ke kantor imigrasi saat WNA melakukan penggantian buku paspor baru atau pindah alamat domisili tempat tinggal.",
        JP: "パスポートの有効期限更新に伴う新旅券番号の登録、および転居に伴う管轄入国管理局間での住所変更・ファイル移管手続き。"
      },
      overview: {
        EN: "Under Indonesian immigration statutory law, failure to report a new passport or change in residential address within statutory deadlines can result in administrative fines or complications during visa renewals. VPT handles the petition and updates biometric records at the local immigration office.",
        ID: "Kewajiban pelaporan hukum bagi pemegang ITAS/ITAP yang berganti paspor atau pindah tempat tinggal. VPT mengurus sinkronisasi data pada sistem Ditjen Imigrasi dan penerbitan bukti mutasi resmi.",
        JP: "インドネシア入国管理法に基づき、旅券更新または住所移転後速やかな届出が義務付けられています。怠った場合の過料処分を防止し、入国管理局データベースを最新状態に更新します。"
      },
      whoFor: {
        EN: ["Expatriates who received a new passport from their embassy in Jakarta", "Foreign families moving into a new apartment, villa, or residence"],
        ID: ["TKA atau investor yang baru memperbarui paspor di kedutaan besarnya", "WNA yang berpindah alamat tempat tinggal baik satu wilayah kantor imigrasi maupun beda kota"],
        JP: ["在ジャカルタ大使館等で新パスポートを取得した駐在員", "引越しにより居住地・アパートを変更した外国人および帯同家族"]
      },
      requirements: {
        EN: ["Old passport and new passport", "Current active e-ITAS / e-ITAP", "Domicile letter from building management/sub-district (for address change)", "Corporate sponsor guarantee letter"],
        ID: ["Buku paspor lama dan paspor baru", "e-ITAS atau e-ITAP aktif", "Surat keterangan domisili dari pengelola gedung/kelurahan", "Surat permohonan dan jaminan sponsor perusahaan"],
        JP: ["旧パスポート原本および新パスポート", "現行の有効なe-ITASまたはe-ITAP", "アパート管理会社または村役場発行の居住証明書", "受入企業の身元保証レター"]
      },
      processSteps: [
        { step: "01", title: { EN: "Dossier Filing", ID: "Pengajuan Berkas Mutasi", JP: "異動届出書類提出" }, desc: { EN: "Submission to local Immigration Office.", ID: "Pendaftaran permohonan mutasi di loket keimigrasian.", JP: "管轄入国管理局窓口への届出書類提出。" } },
        { step: "02", title: { EN: "Data Transfer", ID: "Verifikasi & Pemindahan Data", JP: "データ書換・ファイル移管" }, desc: { EN: "Updating central database and physical files.", ID: "Pemutakhiran data paspor/alamat di sistem Ditjen Imigrasi.", JP: "入国管理局ホストコンピュータ上のデータ更新。" } },
        { step: "03", title: { EN: "Stamped Proof", ID: "Terbit Tanda Bukti Mutasi", JP: "異動完了証明受領" }, desc: { EN: "Handover of official mutation certificate.", ID: "Penerbitan surat tanda bukti mutasi keimigrasian resmi.", JP: "正式な記載事項変更完了印・証明書の受領。" } }
      ],
      duration: { EN: "3 – 5 business days", ID: "3 – 5 hari kerja", JP: "通常 3〜5営業日" },
      importantInfo: { EN: "Must be filed within 60 days of new passport issuance.", ID: "Wajib dilaporkan selambat-lambatnya 60 hari sejak paspor baru diterbitkan.", JP: "新パスポート受領後60日以内の届出が必要です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "izin-keluar-epo-erp",
      categoryId: "civil-stay-services",
      code: "EPO-ERP",
      categoryName: { EN: "Civil & Stay Maintenance", ID: "Layanan Sipil WNA", JP: "在留管理" },
      name: {
        EN: "Exit Permits (EPO & ERP Tidak Kembali)",
        ID: "Izin Keluar (EPO - Exit Permit Only & ERP Tidak Kembali)",
        JP: "出国許可証（EPO：Exit Permit Only / ERP：国外未帰還手続き）"
      },
      shortDescription: {
        EN: "Statutory termination of stay permit: EPO (Exit Permit Only) for expatriates departing Indonesia, and ERP (Exit Re-entry Permit Tidak Kembali) for expatriates already abroad.",
        ID: "Layanan pencabutan izin tinggal resmi: EPO (Exit Permit Only) bagi TKA yang akan meninggalkan Indonesia, dan ERP Tidak Kembali bagi TKA yang sudah berada di luar negeri.",
        JP: "任期満了・退職に伴う適法な在留資格終了手続き。インドネシア国内で取得するEPO、および急遽帰国等で国外にいる状態から行うERP（未帰還出国許可）。"
      },
      overview: {
        EN: "When an expatriate ends their employment or transitions to another company, their existing ITAS must be officially cancelled through an EPO or ERP. Failure to cancel an ITAS legally prevents the corporate sponsor from hiring a replacement and leads to overstay flags.",
        ID: "Proses legal wajib saat TKA menyelesaikan masa kontrak kerjanya di Indonesia. EPO memberikan batas waktu maksimal 7 hari untuk keluar dari Indonesia secara terhormat, sedangkan ERP diproses bagi TKA yang sudah berada di luar negeri tanpa sempat mengurus EPO.",
        JP: "契約終了や本国帰任時に必須となる手続き。正式なEPO処理を行わない場合、企業は労働省の外国人枠を再利用できず、本人も将来の再入国時にトラブルとなります。国外滞在中のERPにも完全対応。"
      },
      whoFor: {
        EN: ["Repatriating expatriates concluding their term in Indonesia", "Expatriates switching corporate employers needing existing permit cancelled", "Expatriates already overseas unable to return"],
        ID: ["TKA yang selesai masa kontrak dan akan kembali ke negara asalnya", "TKA yang akan beralih sponsor perusahaan baru", "TKA yang sudah terlanjur berada di luar negeri dan tidak akan kembali ke Indonesia"],
        JP: ["任期を満了し本国へ帰任する駐在員および帯同家族", "転職に伴い現行スポンサーのビザをクローズする外国人", "急な帰国や体調不良等ですでに本国へ戻っており、再渡航しない駐在員"]
      },
      requirements: {
        EN: ["Original passport and active e-ITAS", "Return flight ticket departing Indonesia (for EPO)", "Corporate sponsor resignation decree and application letter", "Boarding pass & exit stamp copy (for ERP abroad)"],
        ID: ["Paspor asli dan e-ITAS aktif", "Tiket penerbangan keluar dari Indonesia (untuk EPO)", "Surat permohonan dan pengakhiran hubungan kerja dari perusahaan sponsor", "Bukti cap keluar/boarding pass (khusus pengajuan ERP dari luar negeri)"],
        JP: ["パスポート原本および有効なe-ITAS", "インドネシア出国便の確定航空券（EPO時）", "受入企業による解任・雇用終了証明レター", "出国スタンプ・搭乗券の写し（国外からのERP申請時）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Dossier Submission", ID: "Penyerahan Paspor & Tiket", JP: "出国書類提出" }, desc: { EN: "Verification of flight itinerary and sponsor decree.", ID: "Pemeriksaan tiket keluar dan penyerahan paspor ke loket imigrasi.", JP: "出国用確定航空券および申請書の窓口提出。" } },
        { step: "02", title: { EN: "Cancellation & Stamping", ID: "Pembatalan ITAS & Cap EPO", JP: "ITAS無効化・EPO押印" }, desc: { EN: "Official voiding of stay permit on central database.", ID: "Penonaktifan izin tinggal di sistem dan pembubuhan cap/surat EPO resmi.", JP: "入管システムでの滞在資格終了処理およびEPO認可証受領。" } }
      ],
      duration: { EN: "EPO: 1 – 3 business days | ERP: 3 – 5 days", ID: "EPO: 1 – 3 hari kerja | ERP: 3 – 5 hari", JP: "EPO: 1〜3営業日 | ERP: 3〜5営業日" },
      importantInfo: { EN: "Upon receiving EPO stamp, the foreigner must depart Indonesia within 7 calendar days.", ID: "Setelah cap EPO terbit, WNA wajib meninggalkan Indonesia maksimal dalam 7 hari kalender.", JP: "EPO発給後、7暦日以内にインドネシアを出国しなければなりません。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "administrasi-sipil-wna",
      categoryId: "civil-stay-services",
      code: "CIVIL-DUKCAPIL",
      categoryName: { EN: "Civil & Stay Maintenance", ID: "Layanan Sipil WNA", JP: "在留管理" },
      name: {
        EN: "Civil Administration for Foreigners (SKTT, KTP-OA, SKKOA)",
        ID: "Administrasi Sipil WNA (SKTT, KTP Orang Asing, SKKOA)",
        JP: "外国人住民基本台帳登録（SKTT・KTP-OA・出生届等）"
      },
      shortDescription: {
        EN: "Registration with the Population and Civil Registration Office (Dinas Dukcapil) for Temporary Resident Certificate (SKTT), Foreign National ID Card (KTP Orang Asing), SKKOA, and Registration of Foreign Births.",
        ID: "Pengurusan administrasi kependudukan di Dinas Dukcapil meliputi Surat Keterangan Tempat Tinggal (SKTT), KTP Orang Asing (bagi ITAP), SKKOA, dan Pelaporan Kelahiran Anak WNA.",
        JP: "市民登録局（Dukcapil）における外国人一時滞在住民票（SKTT）、永住者用外国人身分証明カード（KTP Orang Asing）、外国人世帯登録（SKKOA）、インドネシア国内での外国人子女出生届。"
      },
      overview: {
        EN: "Indonesian Law No. 24/2013 on Civil Administration mandates that any foreign national holding an ITAS must register with the local municipality's Dukcapil office within 14 days of permit issuance to obtain an SKTT. VPT handles the complete documentation and certificate issuance.",
        ID: "Kewajiban undang-undang administrasi kependudukan bagi seluruh pemegang ITAS di Indonesia untuk memiliki SKTT dari Dinas Kependudukan setempat. Dokumen ini wajib untuk perpanjangan ITAS berikutnya, kepemilikan SIM lokal, dan kepatuhan perpajakan.",
        JP: "ITAS所持者には交付後14日以内のDukcapilへの住民登録およびSKTT取得が法律で義務付けられています。翌年のビザ更新や現地運転免許（SIM）取得時の必須書類となるため、VPTが確実に代行取得します。"
      },
      whoFor: {
        EN: ["All foreign expatriates and dependent family members holding newly issued ITAS", "ITAP permanent residents requiring KTP Orang Asing", "Foreign parents celebrating a newborn child in Indonesia"],
        ID: ["Seluruh TKA dan keluarga pemegang ITAS baru di wilayah Indonesia", "Pemegang ITAP yang berhak mendapatkan KTP Orang Asing dan Kartu Keluarga", "Ekspatriat yang memiliki anak yang baru lahir di rumah sakit di Indonesia"],
        JP: ["新しくITASを取得したすべての外国人就労者および同伴家族", "永住許可（ITAP）を取得しKTP-OA受領資格のある外国人", "インドネシア国内で子供を出産した外国人駐在員家庭"]
      },
      requirements: {
        EN: ["Original passport and issued e-ITAS", "Certificate of domicile from residence / building management", "Photograph and sponsor recommendation letter", "Hospital birth report (for newborn birth registration)"],
        ID: ["Paspor asli dan e-ITAS yang masih berlaku", "Surat keterangan domisili dari RT/RW atau pengelola apartemen", "Pasfoto berwarna dan surat tugas dari perusahaan sponsor", "Surat keterangan lahir dari Rumah Sakit (khusus pelaporan kelahiran anak WNA)"],
        JP: ["パスポート原本および有効なe-ITAS", "アパートまたは居住地町内会（RT/RW）発行の居住証明書", "カラー写真および受入企業の申請推薦状", "現地病院発行の出生証明書（新生児出生届時）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Dukcapil Filing", ID: "Pendaftaran di Dukcapil", JP: "市民登録局申請" }, desc: { EN: "Submission to municipal Population & Civil Registry Office.", ID: "Pendaftaran data kependudukan WNA di sistem online Dukcapil.", JP: "管轄自治体の市民登録局システムへの住民データ登録。" } },
        { step: "02", title: { EN: "Certificate Issuance", ID: "Penerbitan Dokumen SKTT / KTP-OA", JP: "SKTT証明書・KTPカード交付" }, desc: { EN: "Issuance of official SKTT certificate with certified QR code.", ID: "Penerbitan dokumen resmi SKTT ber-barcode sah atau pencetakan fisik KTP-OA.", JP: "公的QRコード付きSKTT住民証明書またはKTP-OAカード受領。" } }
      ],
      duration: { EN: "3 – 5 business days", ID: "3 – 5 hari kerja", JP: "通常 3〜5営業日" },
      importantInfo: { EN: "Mandatory requirement for renewing ITAS permits in subsequent years.", ID: "SKTT merupakan syarat mutlak untuk proses perpanjangan ITAS di tahun berikutnya.", JP: "次年度のITAS更新手続きにおいて提出が必須となる重要書類です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "pengelolaan-akun-asuransi",
      categoryId: "civil-stay-services",
      code: "PORTAL-INSURANCE",
      categoryName: { EN: "Civil & Stay Maintenance", ID: "Layanan Sipil WNA", JP: "在留管理" },
      name: {
        EN: "Portal Account Recoveries & Expatriate Insurance (ASTAKA)",
        ID: "Pengelolaan Akun & Asuransi TKA (ASTAKA)",
        JP: "労働省・入管ポータルアカウント復旧 & 外国人就労者保険（ASTAKA）"
      },
      shortDescription: {
        EN: "Administrative recovery and reset of locked/orphaned Kemnaker TKA Online and Directorate General of Immigration accounts, plus mandatory ASTAKA expatriate insurance enrollment.",
        ID: "Layanan pemulihan dan reset akun resmi TKA Online Kemenaker & e-Visa Imigrasi yang terkendala, serta kepesertaan asuransi wajib TKA ASTAKA.",
        JP: "前任担当者の退職等でログイン不能となった労働省TKA Onlineおよび入国管理局e-Visa企業アカウントの公式復旧・リセット、法定外国人労働者保険（ASTAKA）の加入手配。"
      },
      overview: {
        EN: "Corporate mobility often stalls when corporate master credentials for Kemnaker TKA Online or the Immigration portal are lost, locked, or tied to departed HR personnel. VPT liaises directly with ministry ICT divisions to verify corporate legitimacy and reset administrative access.",
        ID: "Solusi cepat saat perusahaan tidak bisa mengajukan RPTKA atau visa karena akun TKA Online terkunci, lupa email login, atau tertahan di konsultan lama. Kami juga mengurus pendaftaran asuransi TKA (ASTAKA) yang menjadi syarat mutlak terbitnya izin kerja.",
        JP: "人事担当者の交代や旧コンサルタントとの解約に伴いアクセス不能となった政府ポータルのアカウント再設定、および就労許可取得に義務付けられている外国人労働者保険（ASTAKA）の証券発行を迅速に行います。"
      },
      whoFor: {
        EN: ["Companies locked out of their official Kemnaker TKA Online portal", "HR departments unable to submit e-Visa applications due to immigration account conflicts", "Enterprises requiring mandatory ASTAKA insurance certificates for expatriates"],
        ID: ["Perusahaan yang mengalami kendala lupa password/email pada portal TKA Online", "HRD yang akun e-Visa Imigrasi perusahaannya terkunci atau terjadi duplikasi data", "Perusahaan yang membutuhkan sertifikat asuransi TKA resmi sebagai syarat RPTKA/ITAS"],
        JP: ["労働省TKAオンラインのパスワード紛失・登録メール変更ができない企業", "入国管理局ポータルでアカウント重複やロックが発生している法人", "RPTKAやITASの必須要件であるASTAKA保険証券を至急手配したい企業"]
      },
      requirements: {
        EN: ["Company NIB and Deed of Establishment", "Formal board statement letter requesting official account reset", "Director's KTP/Passport and Tax ID (NPWP)", "TKA passport and job details (for ASTAKA insurance)"],
        ID: ["NIB dan Akta Perusahaan terakhir", "Surat permohonan reset akun resmi di atas kop surat perusahaan bermeterai", "KTP/Paspor dan NPWP Direktur penanggung jawab", "Data paspor dan masa kerja TKA (untuk asuransi ASTAKA)"],
        JP: ["企業のNIBおよび設立定款", "会社印・役員署名付きの公式アカウントリセット申請書", "代表取締役の身分証明書（KTP/旅券）および納税番号", "就労対象者のパスポートおよび雇用期間情報（ASTAKA保険用）"]
      },
      processSteps: [
        { step: "01", title: { EN: "Corporate Verification", ID: "Verifikasi Legalitas Entitas", JP: "法人適格性審査" }, desc: { EN: "Confirming authorized board representative authority.", ID: "Pengecekan keabsahan permohonan oleh Direksi yang terdaftar.", JP: "定款上の代表権確認およびリセット理由書の精査。" } },
        { step: "02", title: { EN: "Ministry Clearance", ID: "Koordinasi PUSDATIN / Helpdesk", JP: "省庁ヘルプデスク連携" }, desc: { EN: "Liaison with ministry data center technicians.", ID: "Penyelesaian kendala teknis bersama tim Pusdatin kementerian.", JP: "各省庁情報センター担当官との調整によるロック解除。" } },
        { step: "03", title: { EN: "Access Restored & Certificate", ID: "Akun Aktif & Sertifikat Terbit", JP: "アカウント回復・証券発行" }, desc: { EN: "Delivery of restored credentials and insurance policy.", ID: "Penyerahan akses akun yang telah pulih dan polis asuransi TKA aktif.", JP: "新認証情報でのログイン確認および保険証券納品。" } }
      ],
      duration: { EN: "Account Reset: 2 – 4 days | ASTAKA Insurance: 1 day", ID: "Reset Akun: 2 – 4 hari kerja | Asuransi: 1 hari", JP: "アカウント復旧: 2〜4営業日 | 保険証券: 即日" },
      importantInfo: { EN: "ASTAKA insurance is a mandatory compliance requirement under Kemnaker regulations.", ID: "Polis asuransi TKA merupakan syarat mutlak agar notifikasi Kemenaker dapat disetujui.", JP: "ASTAKA保険の加入証明は労働省通知書（Notifikasi）承認の必須条件です。" },
      faqs: [],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
