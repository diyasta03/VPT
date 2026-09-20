import React, { useState, useMemo, useRef } from 'react';
import { Language, ServiceItem } from '../types';
import { allServicesList } from '../data/servicesData';
import { Search, X, ArrowRight, Clock, Filter, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface ServiceCatalogModalProps {
  isOpen: boolean;
  currentLang: Language;
  initialCategory?: string;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceCatalogModal: React.FC<ServiceCatalogModalProps> = ({
  isOpen,
  currentLang,
  initialCategory = 'all',
  onClose,
  onSelectService,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  const tabsContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedCategoryTab(initialCategory || 'all');
      setSelectedSubCategory('all');
    }
  }, [isOpen, initialCategory]);

  const categoriesTabs = [
    { id: 'all', label: { EN: "All Practice Areas", ID: "Semua Layanan", JP: "全分野" } },
    { id: 'expatriate-services', label: { EN: "1. Expatriate & ITAS", ID: "1. Keimigrasian TKA", JP: "1. 外国人就労" } },
    { id: 'indonesia-visas', label: { EN: "2. Indonesia Visas", ID: "2. Visa Masuk RI", JP: "2. 入国査証" } },
    { id: 'overseas-visa-passport', label: { EN: "3. Overseas & Passport", ID: "3. Paspor & Visa Luar Negeri", JP: "3. 旅券・海外査証" } },
    { id: 'corporate-legalities', label: { EN: "4. Corporate Legal", ID: "4. Legalitas PT & Izin", JP: "4. 法人設立" } },
    { id: 'civil-stay-services', label: { EN: "5. Civil & Stay", ID: "5. Layanan Sipil WNA", JP: "5. 住民登録・EPO" } },
    { id: 'executive-priority-services', label: { EN: "6. Executive VIP", ID: "6. Layanan Eksekutif", JP: "6. VIP特急" } },
    { id: 'additional-services', label: { EN: "7. Support Add-ons", ID: "7. Layanan Tambahan", JP: "7. 付帯サポート" } },
  ];

  // Mendapatkan label kategori saat ini untuk breadcrumb
  const currentCategoryLabel = useMemo(() => {
    const active = categoriesTabs.find((c) => c.id === selectedCategoryTab);
    return active ? active.label[currentLang] : '';
  }, [selectedCategoryTab, currentLang]);

  // Ambil daftar subkategori untuk tab yang sedang aktif
  const availableSubCategories = useMemo(() => {
    if (selectedCategoryTab === 'all') return [];
    const categoryServices = allServicesList.filter(s => s.categoryId === selectedCategoryTab);
    const set = new Set<string>();
    categoryServices.forEach(s => {
      if (s.subCategory) {
        set.add(s.subCategory[currentLang] || s.subCategory.ID);
      }
    });
    return Array.from(set);
  }, [selectedCategoryTab, currentLang]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryTab(catId);
    setSelectedSubCategory('all');
  };



  const handleScrollTabs = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredServices = useMemo(() => {
    return allServicesList.filter((service) => {
      const matchesCategory =
        selectedCategoryTab === 'all' || service.categoryId === selectedCategoryTab;

      const subCatName = service.subCategory?.[currentLang] || service.subCategory?.ID;
      const matchesSubCategory =
        selectedSubCategory === 'all' || subCatName === selectedSubCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        service.name[currentLang].toLowerCase().includes(query) ||
        (service.code && service.code.toLowerCase().includes(query)) ||
        (subCatName && subCatName.toLowerCase().includes(query)) ||
        service.shortDescription[currentLang].toLowerCase().includes(query) ||
        service.categoryName[currentLang].toLowerCase().includes(query);

      return matchesCategory && matchesSubCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategoryTab, selectedSubCategory, currentLang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#0A192F]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFCFF] w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#CBDCE9] flex flex-col overflow-hidden">
        
        {/* Modal Top Navigation Bar (Kembali ke Halaman Sebelumnya & Breadcrumbs) */}
        <div className="px-5 py-3 border-b border-[#E2EAF1] bg-[#FAFCFF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 overflow-hidden text-xs text-[#4A5D73]">
         

            {/* Breadcrumb Links */}
            <div className="flex items-center gap-1.5 truncate pl-1 font-medium">
          
              <ChevronRight className="w-3 h-3 text-[#CBDCE9] shrink-0" />
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryTab('all');
                  setSelectedSubCategory('all');
                }}
                className={`cursor-pointer hover:underline ${selectedCategoryTab === 'all' ? 'font-bold text-[#0A192F]' : 'hover:text-[#1F4E79]'}`}
              >
                {currentLang === 'ID' ? 'Semua Katalog' : currentLang === 'JP' ? 'カタログ全般' : 'All Catalog'}
              </button>
              {selectedCategoryTab !== 'all' && (
                <>
                  <ChevronRight className="w-3 h-3 text-[#CBDCE9] shrink-0" />
                  <span className="font-bold text-[#1F4E79] truncate">
                    {currentCategoryLabel}
                  </span>
                </>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#CBDCE9] hover:bg-[#112F45]/10 text-[#0A192F] flex items-center justify-center transition-colors shrink-0 cursor-pointer ml-2"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Header Title */}
        <div className="px-6 py-4 border-b border-[#E2EAF1] bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F4E79]" />
            <h2 className="text-lg sm:text-2xl font-extrabold text-[#0A192F] font-sans-corporate tracking-tight">
              {currentLang === 'ID'
                ? 'Katalog Layanan Legalitas & Keimigrasian'
                : currentLang === 'JP'
                ? '法務・入国管理総合サービスカタログ'
                : 'Corporate Legal & Immigration Catalog'}
            </h2>
          </div>
          <p className="text-xs text-[#4A5D73] mt-1">
            {currentLang === 'ID'
              ? 'Pilih kategori atau gunakan pencarian untuk melihat rincian persyaratan dan alur proses resmi.'
              : currentLang === 'JP'
              ? '分野ごとのタブまたは検索バーより要件・手続きフローをご確認いただけます。'
              : 'Select practice area or use search to review requirements and official processing workflows.'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-4 sm:p-6 border-b border-[#E2EAF1] bg-white space-y-3.5 shrink-0">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#4A5D73] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'ID' 
                  ? 'Cari layanan berdasarkan nama, kode indeks (C1, C2, E23, D1, PMA, Paspor), atau kata kunci...' 
                  : currentLang === 'JP'
                  ? 'サービス名、ビザ記号（C1, C2, E23, D1, PMA, 旅券）、キーワードで検索...'
                  : 'Search service by name, visa index (C1, C2, E23, D1, PMA, Passport), or keywords...'
              }
              className="w-full bg-[#FAFCFF] pl-10 pr-20 py-2.5 text-xs sm:text-sm text-[#0A192F] border border-[#CBDCE9] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F4E79] focus:border-[#1F4E79] placeholder:text-[#5E7287] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 text-xs font-semibold text-[#4A5D73] hover:text-[#0A192F] bg-[#112F45]/5 rounded-md transition-colors cursor-pointer"
              >
                {currentLang === 'ID' ? 'Hapus' : currentLang === 'JP' ? '消去' : 'Clear'}
              </button>
            )}
          </div>

          {/* Practice Area Tabs dengan Tombol Scroll Kiri & Kanan yang Berfungsi */}
          <div className="relative flex items-center">
            {/* Scroll Left Button */}
            <button
              type="button"
              onClick={() => handleScrollTabs('left')}
              className="absolute -left-2 z-10 w-7 h-7 rounded-full bg-white border border-[#CBDCE9] shadow-sm flex items-center justify-center text-[#0A192F] hover:bg-[#112F45]/5 hover:text-[#1F4E79] transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Tabs */}
            <div
              ref={tabsContainerRef}
              className="flex items-center gap-2 overflow-x-auto px-6 py-1 scroll-smooth touch-pan-x w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categoriesTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedCategoryTab === tab.id
                      ? 'bg-[#112F45] text-white shadow-xs'
                      : 'bg-[#FAFCFF] border border-[#CBDCE9] text-[#4A5D73] hover:text-[#0A192F] hover:bg-[#112F45]/5'
                  }`}
                >
                  {tab.label[currentLang]}
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              type="button"
              onClick={() => handleScrollTabs('right')}
              className="absolute -right-2 z-10 w-7 h-7 rounded-full bg-white border border-[#CBDCE9] shadow-sm flex items-center justify-center text-[#0A192F] hover:bg-[#112F45]/5 hover:text-[#1F4E79] transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subcategory Filter Chips */}
          {availableSubCategories.length > 0 && (
            <div
              className="flex items-center gap-2 pt-0.5 overflow-x-auto text-xs touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <span className="text-[11px] font-bold text-[#4A5D73] uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#1F4E79]" />
                {currentLang === 'ID' ? 'Filter Sub-seksi:' : currentLang === 'JP' ? '詳細区分:' : 'Filter:'}
              </span>
              <button
                type="button"
                onClick={() => setSelectedSubCategory('all')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#1F4E79] text-white shadow-2xs'
                    : 'bg-[#112F45]/5 text-[#1F4E79] hover:bg-[#112F45]/10 border border-[#CBDCE9]'
                }`}
              >
                {currentLang === 'ID' ? 'Semua Sub-kategori' : currentLang === 'JP' ? 'すべて' : 'All Sub-sections'}
              </button>
              {availableSubCategories.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedSubCategory === sub
                      ? 'bg-[#1F4E79] text-white shadow-2xs'
                      : 'bg-white text-[#4A5D73] hover:text-[#0A192F] hover:bg-[#112F45]/5 border border-[#CBDCE9]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Counter Status */}
          <div className="flex items-center justify-between text-xs text-[#4A5D73] pt-0.5">
            <span>
              {currentLang === 'ID' ? 'Menampilkan' : currentLang === 'JP' ? '表示中:' : 'Showing'}{' '}
              <strong className="text-[#0A192F] font-bold">{filteredServices.length}</strong>{' '}
              {currentLang === 'ID' ? 'layanan terverifikasi' : currentLang === 'JP' ? '件のサービス' : 'services'}
            </span>
            {(searchQuery || selectedCategoryTab !== 'all' || selectedSubCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategoryTab('all');
                  setSelectedSubCategory('all');
                }}
                className="text-[#1F4E79] font-bold hover:underline cursor-pointer"
              >
                {currentLang === 'ID' ? 'Atur ulang filter' : currentLang === 'JP' ? '条件をリセット' : 'Reset all filters'}
              </button>
            )}
          </div>

        </div>

        {/* Scrollable Service Rows */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 divide-y divide-[#E2EAF1]">
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center text-[#4A5D73] space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#112F45]/5 text-[#1F4E79] flex items-center justify-center mx-auto border border-[#CBDCE9]">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-[#0A192F]">
                {currentLang === 'ID'
                  ? 'Tidak ada layanan yang cocok dengan pencarian Anda.'
                  : currentLang === 'JP'
                  ? '条件に一致するサービスが見つかりませんでした。'
                  : 'No services match your search or filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategoryTab('all');
                  setSelectedSubCategory('all');
                }}
                className="mt-2 px-4 py-2 bg-[#112F45] text-white rounded-xl text-xs font-bold hover:bg-[#1F4E79] transition-colors cursor-pointer"
              >
                {currentLang === 'ID' ? 'Hapus Semua Filter' : currentLang === 'JP' ? '検索条件をクリア' : 'Reset filters'}
              </button>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="py-4 px-3.5 rounded-2xl hover:bg-white hover:border-[#CBDCE9] border border-transparent hover:shadow-2xs transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 group my-1"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {service.code && (
                      <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-[#112F45] text-white shadow-2xs">
                        {service.code}
                      </span>
                    )}
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#1F4E79] bg-[#112F45]/5 border border-[#CBDCE9] px-2 py-0.5 rounded-md">
                      {service.categoryName[currentLang]}
                    </span>
                    {service.subCategory && (
                      <span className="text-[10px] font-medium text-[#4A5D73] bg-white border border-[#CBDCE9] px-2 py-0.5 rounded-md">
                        {service.subCategory[currentLang] || service.subCategory.ID}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-[#0A192F] group-hover:text-[#1F4E79] transition-colors">
                      {service.name[currentLang]}
                    </h3>
                  </div>

                  <p className="text-xs text-[#4A5D73] line-clamp-2 max-w-3xl leading-relaxed">
                    {service.shortDescription[currentLang]}
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end sm:self-center">
                  <div className="flex items-center gap-1 text-[11px] text-[#4A5D73] font-medium bg-[#FAFCFF] px-2.5 py-1 rounded-full border border-[#CBDCE9]">
                    <Clock className="w-3.5 h-3.5 text-[#1F4E79]" />
                    <span>{service.duration[currentLang]}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-[#CBDCE9] flex items-center justify-center text-[#112F45] group-hover:bg-[#112F45] group-hover:text-white group-hover:border-[#112F45] transition-all duration-200 group-hover:translate-x-1 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};