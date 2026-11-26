import React, { useEffect, useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  Send,
  MapPin,
  Sparkles,
  RotateCcw,
  PhoneCall,
} from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/catalog';
import { WhatsAppIcon } from './BrandIcons';

interface QuoteSectionProps {
  selectedItemTitle: string | null;
}

const MATERIAL_OPTIONS = [
  'الخرسانة الجاهزة (مع أو بدون مضخة)',
  'البلوك المعزول / البركاني / الأسمنتي',
  'حديد التسليح الوطني وشبك الصبة',
  'الأسمنت والبطحاء والبحص ومواد البناء',
];

const QUICK_DISTRICTS = [
  'حي النرجس',
  'حي الرمال',
  'حي العارض',
  'حي الملقا',
  'حي طويق',
  'حي الياسمين',
  'حي المهدية',
  'حي نمار',
  'الدرعية / العمارية',
  'المزاحمية',
];

export const QuoteSection: React.FC<QuoteSectionProps> = ({ selectedItemTitle }) => {
  const [fullName, setFullName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
    'الخرسانة الجاهزة (مع أو بدون مضخة)',
  ]);
  const [quantityDetails, setQuantityDetails] = useState('');
  const [pumpOption, setPumpOption] = useState('نعم - مع مضخة خرسانة');
  const [scheduleTiming, setScheduleTiming] = useState('خلال 24 - 48 ساعة');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Quick Concrete Calculator State
  const [lengthM, setLengthM] = useState<string>('15');
  const [widthM, setWidthM] = useState<string>('12');
  const [thicknessM, setThicknessM] = useState<string>('0.30');
  const [includeWaste, setIncludeWaste] = useState<boolean>(true);

  useEffect(() => {
    if (selectedItemTitle) {
      setQuantityDetails((prev) =>
        prev.includes(selectedItemTitle)
          ? prev
          : prev
          ? `${prev} + ${selectedItemTitle}`
          : `مطلوب تسعير: ${selectedItemTitle}`
      );
      setSubmittedRef(null);
    }
  }, [selectedItemTitle]);

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? (prev.length > 1 ? prev.filter((m) => m !== mat) : prev) : [...prev, mat]
    );
  };

  // Compute estimated volume
  const parsedL = parseFloat(lengthM) || 0;
  const parsedW = parseFloat(widthM) || 0;
  const parsedT = parseFloat(thicknessM) || 0;
  const rawVolume = parsedL * parsedW * parsedT;
  const finalVolume = rawVolume > 0 ? (includeWaste ? rawVolume * 1.05 : rawVolume) : 0;

  const applyCalculatedVolume = () => {
    if (finalVolume <= 0) return;
    const formatted = `${finalVolume.toFixed(1)} متر مكعب تقريباً (الأبعاد: ${parsedL}م × ${parsedW}م × سماكة ${parsedT}م)`;
    if (!selectedMaterials.includes('الخرسانة الجاهزة (مع أو بدون مضخة)')) {
      setSelectedMaterials((prev) => ['الخرسانة الجاهزة (مع أو بدون مضخة)', ...prev]);
    }
    setQuantityDetails(formatted);
  };

  const composeWhatsAppQuoteMessage = (refCode?: string) => {
    const lines = [
      `السلام عليكم ورحمة الله وبركاته،`,
      `طلب عرض سعر جديد عبر موقع *${BRAND.name}*`,
      refCode ? `رقم الطلب المرجعي: ${refCode}` : '',
      `---------------------------`,
      `• الاسم / الجهة: ${fullName || 'عميل الموقع'}`,
      `• جوال العميل: ${customerPhone || 'غير محدد'}`,
      `• الموقع / الحي: ${district || 'الرياض'}`,
      `• الأصناف المطلوبة: ${selectedMaterials.join(' ، ')}`,
      `• الكمية والتفاصيل: ${quantityDetails || 'يرجى التواصل لتحديد الكمية'}`,
      selectedMaterials.some((m) => m.includes('الخرسانة'))
        ? `• خيار المضخة: ${pumpOption}`
        : '',
      `• موعد التوريد المطلوب: ${scheduleTiming}`,
      notes ? `• ملاحظات إضافية: ${notes}` : '',
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`SM-${randomNum}`);
  };

  return (
    <section
      id="quote"
      className="py-16 sm:py-24 bg-[#F5F4F0] bg-blueprint-light border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-block text-xs font-extrabold px-3 py-1 rounded bg-[#D97706]/15 text-[#B45309] border border-[#D97706]/30 mb-3">
            تسعير سريع ومخصص لمشروعك
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181F25]">
            نموذج طلب عرض سعر فوري
          </h2>
          <p className="text-[#4A5562] mt-2.5 text-base sm:text-lg">
            أدخل بيانات مشروعك والمواد المطلوبة ليصلك أفضل عرض سعر تنافسي من فريق مبيعات{' '}
            <strong className="text-[#181F25]">التعدد الذكي</strong>، مع إمكانية الإرسال المباشر عبر
            واتساب بضغطة واحدة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Quote Request Form (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E2E0D8] shadow-sm p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-6 space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#ECFDF5] border border-[#10B981]/30">
                  <CheckCircle2 className="w-8 h-8 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-xl font-extrabold text-[#064E3B]">
                        تم تجهيز طلب عرض السعر بنجاح!
                      </h3>
                      <span className="px-2.5 py-0.5 rounded bg-white text-[#065F46] font-bold text-xs border border-[#10B981]/30 tabular-nums-ltr">
                        {submittedRef}
                      </span>
                    </div>
                    <p className="text-sm text-[#065F46] mt-1.5 leading-relaxed">
                      للحصول على الرد الفوري والتسعيرة النهائية خلال دقائق، اضغط على زر الإرسال عبر
                      واتساب أدناه ليتم فتح المحادثة المباشرة مع قسم المبيعات على الرقم{' '}
                      <strong className="tabular-nums-ltr">{BRAND.phone}</strong> بكافة تفاصيل طلبك.
                    </p>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="rounded-xl bg-[#F5F4F0] border border-[#E2E0D8] p-5 space-y-2.5 text-sm">
                  <p className="font-heading font-bold text-[#181F25] border-b border-[#E2E0D8] pb-2 mb-3">
                    ملخص طلب التسعيرة الجاهز للإرسال:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <p>
                      <span className="text-[#4A5562]">الاسم / الجهة: </span>
                      <strong className="text-[#181F25]">{fullName}</strong>
                    </p>
                    <p>
                      <span className="text-[#4A5562]">رقم الجوال: </span>
                      <strong className="text-[#181F25] tabular-nums-ltr">{customerPhone}</strong>
                    </p>
                    <p>
                      <span className="text-[#4A5562]">الموقع / الحي: </span>
                      <strong className="text-[#181F25]">{district}</strong>
                    </p>
                    <p>
                      <span className="text-[#4A5562]">موعد التوريد: </span>
                      <strong className="text-[#181F25]">{scheduleTiming}</strong>
                    </p>
                  </div>
                  <p className="pt-1">
                    <span className="text-[#4A5562]">الأصناف المطلوبة: </span>
                    <strong className="text-[#181F25]">{selectedMaterials.join(' ، ')}</strong>
                  </p>
                  <p>
                    <span className="text-[#4A5562]">الكمية والتفاصيل: </span>
                    <strong className="text-[#181F25]">{quantityDetails}</strong>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <a
                    href={getWhatsAppLink(composeWhatsAppQuoteMessage(submittedRef))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold text-base shadow-md transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>إرسال الطلب الآن عبر واتساب ({BRAND.phone})</span>
                  </a>

                  <a
                    href={BRAND.phoneHref}
                    className="inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-[#181F25] hover:bg-[#2A3540] text-white font-heading font-bold text-sm transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                    <span>اتصال مباشر</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="inline-flex items-center justify-center gap-1.5 py-4 px-4 rounded-xl border border-[#E2E0D8] hover:bg-[#F5F4F0] text-[#4A5562] font-bold text-sm transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>تعديل البيانات</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {selectedItemTitle && (
                  <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/40 text-[#92400E] text-sm">
                    <span className="flex items-center gap-2 font-bold">
                      <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
                      تمت إضافة «{selectedItemTitle}» إلى تفاصيل طلب التسعيرة
                    </span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                    >
                      الاسم الكريم أو اسم المؤسسة <span className="text-[#D97706]">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: م. عبدالله / مؤسسة البناء الحديث"
                      className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                    >
                      رقم الجوال للتواصل <span className="text-[#D97706]">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      dir="ltr"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25] text-right font-semibold"
                    />
                  </div>
                </div>

                {/* District / Location in Riyadh */}
                <div>
                  <label
                    htmlFor="quote-district"
                    className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                  >
                    موقع المشروع (الحي في الرياض أو الضواحي) <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="quote-district"
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="اكتب اسم الحي أو اختر من الأحياء السريعة أدناه..."
                      className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none pr-10 pl-4 py-3 text-sm text-[#181F25]"
                    />
                    <MapPin className="w-4 h-4 text-[#D97706] absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>

                  {/* Quick District Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                    <span className="text-xs text-[#4A5562] ml-1">اختيار سريع:</span>
                    {QUICK_DISTRICTS.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDistrict(d)}
                        className={`text-xs px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                          district === d
                            ? 'bg-[#181F25] text-white border-[#181F25] font-bold'
                            : 'bg-[#F5F4F0] text-[#4A5562] border-[#E2E0D8] hover:border-[#D97706]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Types Multi-select */}
                <div>
                  <span className="block font-heading font-bold text-sm text-[#181F25] mb-2">
                    نوع المواد المطلوبة (يمكنك اختيار أكثر من قسم) <span className="text-[#D97706]">*</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {MATERIAL_OPTIONS.map((mat) => {
                      const checked = selectedMaterials.includes(mat);
                      return (
                        <button
                          key={mat}
                          type="button"
                          onClick={() => toggleMaterial(mat)}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-right text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                            checked
                              ? 'bg-[#181F25] text-white border-[#181F25]'
                              : 'bg-[#FAFAF8] text-[#181F25] border-[#D4D1C7] hover:border-[#D97706]'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center text-[11px] shrink-0 ${
                              checked
                                ? 'bg-[#D97706] text-white'
                                : 'border border-[#9CA3AF] bg-white'
                            }`}
                          >
                            {checked ? '✓' : ''}
                          </span>
                          <span>{mat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity & Pump & Schedule */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-pump"
                      className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                    >
                      خدمة مضخة الخرسانة (في حال طلب خرسانة)
                    </label>
                    <select
                      id="quote-pump"
                      value={pumpOption}
                      onChange={(e) => setPumpOption(e.target.value)}
                      className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25]"
                    >
                      <option value="نعم - مع مضخة خرسانة">نعم - أحتاج مضخة خرسانة</option>
                      <option value="بدون مضخة (صب مباشر خلاطة)">بدون مضخة (صب مباشر)</option>
                      <option value="طلب مواد بناء/بلوك/حديد فقط">لا ينطبق (بلوك / حديد / مواد بناء)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-timing"
                      className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                    >
                      الموعد المطلوب للتوريد
                    </label>
                    <select
                      id="quote-timing"
                      value={scheduleTiming}
                      onChange={(e) => setScheduleTiming(e.target.value)}
                      className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25]"
                    >
                      <option value="عاجل (اليوم أو غداً)">عاجل (اليوم أو غداً)</option>
                      <option value="خلال 24 - 48 ساعة">خلال 24 - 48 ساعة</option>
                      <option value="خلال هذا الأسبوع">خلال هذا الأسبوع</option>
                      <option value="تسعيرة مبدئية لمشروع كامل">تسعيرة مبدئية لمشروع كامل</option>
                    </select>
                  </div>
                </div>

                {/* Quantity & Spec Details */}
                <div>
                  <label
                    htmlFor="quote-qty"
                    className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                  >
                    الكميات المطلوبة والمواصفات <span className="text-[#D97706]">*</span>
                  </label>
                  <textarea
                    id="quote-qty"
                    required
                    rows={3}
                    value={quantityDetails}
                    onChange={(e) => setQuantityDetails(e.target.value)}
                    placeholder="مثال: 75 م³ خرسانة جهد C35 مقاوم للقواعد + 3500 حبة بلوك معزول مقاس 20 سم + 12 طن حديد تسليح 14 و 16 ملم..."
                    className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25]"
                  />
                </div>

                {/* Optional Notes */}
                <div>
                  <label
                    htmlFor="quote-notes"
                    className="block font-heading font-bold text-sm text-[#181F25] mb-2"
                  >
                    ملاحظات إضافية (اختياري)
                  </label>
                  <input
                    id="quote-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="أي اشتراطات هندسية أو أوقات مفضلة للصب مثل الصباح الباكر أو المساء..."
                    className="w-full rounded-xl border border-[#D4D1C7] bg-[#FAFAF8] focus:bg-white focus:border-[#D97706] focus:outline-none px-4 py-3 text-sm text-[#181F25]"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-heading font-extrabold text-base shadow-md transition-colors cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>تأكيد وطلب عرض السعر</span>
                  </button>

                  <a
                    href={getWhatsAppLink(composeWhatsAppQuoteMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold text-base transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>إرسال فوري عبر واتساب</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Side Engineering Helper: Concrete Volume Calculator + Direct Dispatch Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Concrete Volume Calculator */}
            <div className="bg-[#181F25] text-white rounded-2xl p-6 border border-white/10 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-white">
                    حاسبة كمية الخرسانة (م³)
                  </h3>
                  <p className="text-xs text-[#9CA3AF]">احسب الكمية التقديرية للصبة وأضفها للطلب</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="grid grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-xs text-[#D1D5DB] mb-1">الطول (م)</label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      dir="ltr"
                      value={lengthM}
                      onChange={(e) => setLengthM(e.target.value)}
                      className="w-full rounded-lg bg-[#222B33] border border-white/15 px-3 py-2 text-sm text-white font-bold text-center focus:border-[#D97706] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#D1D5DB] mb-1">العرض (م)</label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      dir="ltr"
                      value={widthM}
                      onChange={(e) => setWidthM(e.target.value)}
                      className="w-full rounded-lg bg-[#222B33] border border-white/15 px-3 py-2 text-sm text-white font-bold text-center focus:border-[#D97706] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#D1D5DB] mb-1">السماكة (م)</label>
                    <input
                      type="number"
                      min="0"
                      step="0.05"
                      dir="ltr"
                      value={thicknessM}
                      onChange={(e) => setThicknessM(e.target.value)}
                      className="w-full rounded-lg bg-[#222B33] border border-white/15 px-3 py-2 text-sm text-white font-bold text-center focus:border-[#D97706] focus:outline-none"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-[#D1D5DB] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeWaste}
                    onChange={(e) => setIncludeWaste(e.target.checked)}
                    className="rounded accent-[#D97706] w-4 h-4"
                  />
                  <span>إضافة نسبة احتياط وهدر هندسي (5%)</span>
                </label>

                <div className="rounded-xl bg-[#222B33] border border-[#D97706]/40 p-4 flex items-center justify-between">
                  <span className="text-xs text-[#D1D5DB]">الكمية التقديرية:</span>
                  <span className="font-heading text-2xl font-black text-[#FBBF24] tabular-nums-ltr">
                    {finalVolume.toFixed(1)} m³
                  </span>
                </div>

                <button
                  type="button"
                  onClick={applyCalculatedVolume}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#D97706] text-white font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  اعتماد الكمية في نموذج التسعيرة
                </button>
              </div>
            </div>

            {/* Instant Sales Desk Card */}
            <div className="bg-white rounded-2xl border border-[#E2E0D8] p-6 space-y-4">
              <h3 className="font-heading text-lg font-extrabold text-[#181F25]">
                تفضل التسعير الهاتفي المباشر؟
              </h3>
              <p className="text-sm text-[#4A5562] leading-relaxed">
                فريق مبيعات المشاريع والتوريد جاهز للرد على استفساراتكم، وتأكيد حجوزات الصب وتوريد
                البلوك والحديد ومواد البناء في كافة أحياء الرياض وضواحيها.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F4F0] hover:bg-[#181F25] hover:text-white text-[#181F25] border border-[#E2E0D8] transition-colors group"
                >
                  <span className="text-sm font-bold">اتصال جوال المبيعات:</span>
                  <span className="tabular-nums-ltr font-heading font-black text-base text-[#D97706] group-hover:text-[#FBBF24]">
                    {BRAND.phone}
                  </span>
                </a>

                <a
                  href={BRAND.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#0E1712] border border-[#25D366]/40 transition-colors"
                >
                  <span className="text-sm font-bold flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 text-[#128C7E]" />
                    <span>محادثة واتساب مباشرة:</span>
                  </span>
                  <span className="tabular-nums-ltr font-heading font-black text-base">
                    {BRAND.phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
