import React from 'react';
import { PhoneCall, MapPin, Clock, Navigation, ShieldCheck } from 'lucide-react';
import { BRAND, RIYADH_COVERAGE } from '../data/catalog';
import { BrandLogoMark, WhatsAppIcon } from './BrandIcons';

export const ContactAndFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact & Riyadh Coverage Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-extrabold px-3.5 py-1 rounded bg-[#1E3A5F]/10 text-[#1E3A5F] mb-3">
              نحن أقرب إلى موقع مشروعك
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181F25]">
              تواصل معنا ونطاق التغطية في الرياض وضواحيها
            </h2>
            <p className="text-[#4A5562] mt-3 text-base sm:text-lg">
              يسعدنا استقبال اتصالاتكم وطلبات التسعير وحجوزات التوريد مباشرة عبر الجوال أو الواتساب
              على مدار اليوم.
            </p>
          </div>

          {/* Direct Clickable Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Phone Card */}
            <a
              href={BRAND.phoneHref}
              className="group rounded-2xl border-2 border-[#E2E0D8] hover:border-[#D97706] bg-[#F5F4F0] p-6 sm:p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#181F25] group-hover:bg-[#D97706] text-white flex items-center justify-center transition-colors mb-5">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-[#4A5562]">اتصال هاتفي مباشر (المبيعات والحجوزات)</p>
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#181F25] mt-1.5 tabular-nums-ltr text-right">
                  {BRAND.phone}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#D97706]">
                اضغط هنا للاتصال الفوري ←
              </span>
            </a>

            {/* WhatsApp Card */}
            <a
              href={BRAND.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-[#25D366]/45 hover:border-[#25D366] bg-[#ECFDF5]/60 p-6 sm:p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-[#0E1712] flex items-center justify-center mb-5 shadow-xs">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-[#065F46]">محادثة واتساب فورية (عروض أسعار ومواقع)</p>
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#064E3B] mt-1.5 tabular-nums-ltr text-right">
                  {BRAND.phone}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#059669]">
                اضغط لفتح محادثة واتساب مباشرة ←
              </span>
            </a>

            {/* Coverage & Working Hours Card */}
            <div className="rounded-2xl border border-[#E2E0D8] bg-[#F5F4F0] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-[#4A5562]">المقر ونطاق الخدمة ومواعيد العمل</p>
                <h3 className="font-heading text-xl font-extrabold text-[#181F25] mt-1.5">
                  مدينة الرياض وكافة ضواحيها
                </h3>
                <p className="text-sm text-[#4A5562] mt-2 leading-relaxed">
                  خدمة المبيعات: يومياً من 7:00 صباحاً حتى 10:00 مساءً.
                  <br />
                  جدولة صب الخرسانة والتوريد: متاحة على مدار 24 ساعة حسب موعد المشروع.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A5F]">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                إمكانية إرسال موقع المشروع (Location) عبر واتساب
              </span>
            </div>
          </div>

          {/* Riyadh & Suburbs Coverage Grid */}
          <div className="rounded-2xl bg-[#181F25] text-white p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white">
                    خريطة التغطية الميدانية لأسطول التعدد الذكي
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF]">
                    نصلك أينما كان مشروعك السكني أو التجاري في الرياض والمحافظات المحيطة
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-white/10 text-[#FBBF24] self-start sm:self-auto">
                <MapPin className="w-4 h-4" />
                تغطية شاملة 100% للرياض وضواحيها
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RIYADH_COVERAGE.map((item) => (
                <div
                  key={item.zone}
                  className="rounded-xl bg-[#222B33] border border-white/10 p-4 sm:p-5"
                >
                  <h4 className="font-heading font-extrabold text-base text-[#FBBF24] mb-2">
                    {item.zone}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {item.districts}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Architectural Footer with Clear Clickable Phone & WhatsApp at Bottom */}
      <footer className="bg-[#11161B] text-[#D1D5DB] border-t-4 border-[#D97706] pb-24 sm:pb-12">
        {/* Prominent Bottom Direct Contact Strip */}
        <div className="bg-[#181F25] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div>
              <p className="font-heading text-lg sm:text-xl font-extrabold text-white">
                هل لديك صبة خرسانة قريبة أو طلبية بلوك وحديد ومواد بناء؟
              </p>
              <p className="text-sm text-[#9CA3AF] mt-0.5">
                تواصل معنا مباشرة الآن واحصل على أفضل سعر وتأكيد فوري لموعد التوريد:
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={BRAND.phoneHref}
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-heading font-extrabold text-base transition-colors shadow-md"
              >
                <PhoneCall className="w-5 h-5 shrink-0" />
                <span>جوال:</span>
                <span className="tabular-nums-ltr">{BRAND.phone}</span>
              </a>

              <a
                href={BRAND.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold text-base transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>واتساب:</span>
                <span className="tabular-nums-ltr">{BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            {/* Brand Info & Marketing Slogan */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <BrandLogoMark className="w-12 h-12" />
                <div>
                  <span className="font-heading text-2xl font-black text-white block">
                    {BRAND.name}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">{BRAND.tagline}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-[#D97706]/35">
                <p className="font-heading font-bold text-sm text-[#FBBF24] leading-relaxed">
                  {BRAND.slogan}
                </p>
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                متخصصون في توريد الخرسانة الجاهزة بجميع الإجهادات، البلوك المعزول والبركاني والأسمنتي،
                حديد التسليح الوطني، والأسمنت والبطحاء ومواد البناء لكافة أحياء مدينة الرياض وضواحيها.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-base font-extrabold text-white mb-4">
                روابط سريعة
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#F59E0B] transition-colors">
                    الواجهة الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F59E0B] transition-colors">
                    خدماتنا وأسعارنا المنافسة
                  </a>
                </li>
                <li>
                  <a href="#catalog" className="hover:text-[#F59E0B] transition-colors">
                    أنواع الخرسانة والبلوك والحديد
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#F59E0B] transition-colors">
                    مميزاتنا الهندسية
                  </a>
                </li>
                <li>
                  <a href="#quote" className="hover:text-[#F59E0B] transition-colors">
                    نموذج طلب عرض سعر
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#F59E0B] transition-colors">
                    التواصل ومناطق التغطية
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact Summary in Footer */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-heading text-base font-extrabold text-white mb-4">
                بيانات التواصل المباشر
              </h3>
              <p className="text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>المملكة العربية السعودية — مدينة الرياض وضواحيها</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>الجوال الموحد:</span>
                <a
                  href={BRAND.phoneHref}
                  className="tabular-nums-ltr font-bold text-white hover:text-[#F59E0B] underline underline-offset-4"
                >
                  {BRAND.phone}
                </a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>واتساب مباشر:</span>
                <a
                  href={BRAND.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular-nums-ltr font-bold text-[#25D366] hover:underline underline-offset-4"
                >
                  {BRAND.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Copyright Bottom Line */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
            <p>
              © {currentYear} جميع الحقوق محفوظة لـ <strong className="text-white">{BRAND.name}</strong>{' '}
              لتوريد الخرسانة الجاهزة ومواد البناء بالرياض.
            </p>
            <p className="font-semibold text-[#D1D5DB]">{BRAND.slogan}</p>
          </div>
        </div>
      </footer>
    </>
  );
};
