import React, { useState } from 'react';
import { Check, FileSpreadsheet, Info } from 'lucide-react';
import {
  CATEGORIES,
  CATALOG_ITEMS,
  CategoryKey,
  CatalogItem,
  getWhatsAppLink,
} from '../data/catalog';
import { WhatsAppIcon } from './BrandIcons';

interface CatalogSectionProps {
  onSelectProduct: (item: CatalogItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const filteredItems =
    activeCategory === 'all'
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs font-extrabold px-3.5 py-1 rounded-md bg-[#FEF3C7] text-[#B45309] border border-[#F59E0B]/30 mb-3">
            كتالوج المواد الإنشائية المعتمد
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181F25]">
            أنواع الخرسانة الجاهزة والبلوك والحديد ومواد البناء
          </h2>
          <p className="text-[#4A5562] mt-3 text-base sm:text-lg">
            أصناف منتقاة بعناية ومطابقة للمواصفات القياسية السعودية وكود البناء السعودي لتلبية كافة
            مراحل تأسيس وبناء وتشطيب مشروعك في الرياض وضواحيها.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
          role="tablist"
          aria-label="تصنيفات مواد البناء"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count =
              cat.key === 'all'
                ? CATALOG_ITEMS.length
                : CATALOG_ITEMS.filter((i) => i.category === cat.key).length;

            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-heading font-bold text-sm transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#181F25] text-white border-[#181F25] shadow-sm'
                    : 'bg-[#F5F4F0] text-[#181F25] border-[#E2E0D8] hover:border-[#D97706]'
                }`}
              >
                <span>{cat.shortLabel}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-md font-bold tabular-nums-ltr ${
                    isActive ? 'bg-[#D97706] text-white' : 'bg-white text-[#4A5562]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Engineering Concrete Grade Quick Guide Banner (Visible on All or Concrete) */}
        {(activeCategory === 'all' || activeCategory === 'concrete') && (
          <div className="mb-10 rounded-2xl bg-[#F5F4F0] border border-[#E2E0D8] p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1E3A5F] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#181F25]">
                  دليل هندسي سريع لاختيار جهد الخرسانة المناسب لمشروعك:
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5562] mt-0.5">
                  صبة النظافة: <strong>C15 - C20 مقاوم</strong> • القواعد والرقاب والميد والخزانات:{' '}
                  <strong>C35 أسمنت مقاوم SRC</strong> • الأعمدة والأسقف: <strong>C35 أسمنت عادي OPC</strong>
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-[#E2E0D8] text-[#1E3A5F] shrink-0">
              متوفر مضخات خرسانة بأطوال 36م - 52م
            </span>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item) => {
            const whatsappItemMsg = `السلام عليكم، أرغب في الاستفسار وطلب عرض سعر من التعدد الذكي حول: (${item.title}) لمشروع في الرياض.`;
            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-[#E2E0D8] hover:border-[#D97706] bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                {/* Product Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#181F25]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181F25]/80 via-transparent to-transparent" />

                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#181F25]/85 backdrop-blur-xs text-white text-xs font-bold">
                      {item.categoryLabel}
                    </span>
                    {item.popular && (
                      <span className="px-2.5 py-1 rounded-md bg-[#D97706] text-white text-xs font-bold">
                        الأكثر طلباً
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#181F25] text-xs font-extrabold shadow-xs">
                      {item.specBadge}
                    </span>
                    <span className="text-xs font-bold text-[#FBBF24] bg-[#181F25]/85 px-2.5 py-1 rounded-md">
                      الوحدة: {item.unit}
                    </span>
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-[#181F25] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A5562] mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technical Specs Table */}
                    <dl className="mt-4 pt-3.5 border-t border-[#E2E0D8] space-y-2">
                      {item.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-center justify-between gap-2 text-xs sm:text-sm"
                        >
                          <dt className="text-[#4A5562] flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                            <span>{spec.label}:</span>
                          </dt>
                          <dd className="font-bold text-[#181F25] text-left">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Competitive Pricing Strip & Actions */}
                  <div className="mt-5 pt-4 border-t border-[#E2E0D8]">
                    <div className="flex items-center justify-between gap-2 mb-3.5 bg-[#F5F4F0] rounded-lg px-3 py-2">
                      <span className="text-xs text-[#4A5562] font-semibold">السعر التنافسي:</span>
                      <span className="font-heading font-extrabold text-sm text-[#B45309]">
                        {item.competitivePriceLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4A5562] mb-3.5">{item.priceNote}</p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(item)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        <FileSpreadsheet className="w-4 h-4 shrink-0" />
                        <span>أضف لطلب التسعيرة</span>
                      </button>

                      <a
                        href={getWhatsAppLink(whatsappItemMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-bold text-xs sm:text-sm transition-colors shrink-0"
                        title="اطلب هذا الصنف مباشرة عبر واتساب"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>واتساب</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
