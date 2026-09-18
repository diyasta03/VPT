import React, { useState, useMemo } from 'react';
import { Language, ServiceItem } from '../types';
import { allServicesList, serviceCategories } from '../data/servicesData';
import { Search, X, ArrowRight, Clock, Tag, Filter } from 'lucide-react';

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

  // Derive available subcategories for the selected category
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#173A5E]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl border border-[#E8EDF1] flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 sm:py-5 border-b border-[#E8EDF1] flex items-center justify-between bg-[#FAF9F6]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A9F]" />
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#173A5E] font-sans-corporate">
                {currentLang === 'ID' ? 'Katalog Layanan Legalitas & Keimigrasian' : currentLang === 'JP' ? '法務・入国管理総合サービスカタログ' : 'Corporate Legal & Immigration Catalog'}
              </h2>
            </div>
            <p className="text-xs text-[#5B6B7C] mt-1">
              {currentLang === 'ID'
                ? 'Katalog lengkap 7 kategori spesialisasi: TKA & ITAS, Visa Indonesia (C/D/Golden), Visa Luar Negeri & Paspor, Legalitas PT, Dokumen Sipil, Layanan Eksekutif & Tambahan.'
                : 'Complete directory across 7 core legal practice areas: Expatriate ITAS, Indonesia Visas (C/D/Golden), Overseas & Passports, Corporate Legal, Civil Docs, Executive VIP & Add-ons.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#E8EDF1] hover:bg-[#EAF3FA] text-[#173A5E] flex items-center justify-center transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-4 sm:p-6 border-b border-[#E8EDF1] bg-white space-y-3">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'ID' 
                ? "Cari layanan berdasarkan nama, indeks kode (C1, C2, E23, D1, PMA, Paspor), atau kata kunci..." 
                : "Search service by name, visa index (C1, C2, E23, D1, PMA, Passport), or keywords..."}
              className="w-full bg-[#FAF9F6] pl-10 pr-16 py-2.5 text-xs sm:text-sm text-[#1F2933] border border-[#E8EDF1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D6A9F] focus:border-[#2D6A9F]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#5B6B7C] hover:text-[#173A5E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categoriesTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategoryTab === tab.id
                    ? 'bg-[#173A5E] text-white shadow-xs'
                    : 'bg-[#FAF9F6] border border-[#E8EDF1] text-[#5B6B7C] hover:text-[#173A5E] hover:bg-[#EAF3FA]'
                }`}
              >
                {tab.label[currentLang]}
              </button>
            ))}
          </div>

          {/* Subcategory Filter Pills (if category has subcategories) */}
          {availableSubCategories.length > 0 && (
            <div className="flex items-center gap-2 pt-1 overflow-x-auto scrollbar-none text-xs">
              <span className="text-[11px] font-bold text-[#5B6B7C] uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#2D6A9F]" />
                Filter:
              </span>
              <button
                type="button"
                onClick={() => setSelectedSubCategory('all')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#2D6A9F] text-white'
                    : 'bg-[#EAF3FA] text-[#2D6A9F] hover:bg-[#DCECF7]'
                }`}
              >
                All Sub-sections
              </button>
              {availableSubCategories.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                    selectedSubCategory === sub
                      ? 'bg-[#2D6A9F] text-white'
                      : 'bg-[#EAF3FA] text-[#5B6B7C] hover:text-[#173A5E] hover:bg-[#DCECF7]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-[#5B6B7C] pt-1">
            <span>
              Showing <strong className="text-[#173A5E]">{filteredServices.length}</strong> services
            </span>
            {(searchQuery || selectedCategoryTab !== 'all' || selectedSubCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategoryTab('all');
                  setSelectedSubCategory('all');
                }}
                className="text-[#2D6A9F] font-semibold hover:underline"
              >
                Reset all filters
              </button>
            )}
          </div>

        </div>

        {/* Compact Service Rows List */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 divide-y divide-[#E8EDF1]">
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center text-[#5B6B7C]">
              <p className="text-sm font-semibold text-[#173A5E]">No services match your search or filter.</p>
              <p className="text-xs mt-1">Try searching for generic terms like &apos;visa&apos;, &apos;pma&apos;, &apos;paspor&apos;, or &apos;itas&apos;.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategoryTab('all');
                  setSelectedSubCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-[#EAF3FA] text-[#2D6A9F] rounded-lg text-xs font-bold hover:bg-[#DCECF7]"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  onSelectService(service);
                }}
                className="py-4 px-3 rounded-xl hover:bg-[#EAF3FA]/60 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {service.code && (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#173A5E] text-white shadow-2xs">
                        {service.code}
                      </span>
                    )}
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2D6A9F] bg-white border border-[#DCECF7] px-2 py-0.5 rounded">
                      {service.categoryName[currentLang]}
                    </span>
                    {service.subCategory && (
                      <span className="text-[10px] font-medium text-[#5B6B7C] bg-[#FAF9F6] border border-[#E8EDF1] px-2 py-0.5 rounded">
                        {service.subCategory[currentLang] || service.subCategory.ID}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-[#173A5E] group-hover:text-[#2D6A9F] transition-colors">
                      {service.name[currentLang]}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5B6B7C] line-clamp-2 max-w-3xl">
                    {service.shortDescription[currentLang]}
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-end sm:self-center">
                  <div className="flex items-center gap-1 text-[11px] text-[#5B6B7C] font-medium bg-white px-2.5 py-1 rounded-full border border-[#E8EDF1]">
                    <Clock className="w-3.5 h-3.5 text-[#2D6A9F]" />
                    <span>{service.duration[currentLang]}</span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white border border-[#E8EDF1] flex items-center justify-center text-[#173A5E] group-hover:bg-[#173A5E] group-hover:text-white transition-all duration-200 group-hover:translate-x-1 shadow-2xs">
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
