import React from 'react';
import {
  ShieldCheck,
  Truck,
  BadgePercent,
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  Building2,
  Layers,
  HardHat,
} from 'lucide-react';
import { ASSETS, BRAND, COMPETITIVE_PRICING_HIGHLIGHTS } from '../data/catalog';
import { WhatsAppIcon } from './BrandIcons';

interface HeroSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectServiceForQuote }) => {
  return (
    <>
      {/* Main Architectural Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#181F25] text-white bg-blueprint-dark border-b-4 border-[#D97706]"
      >
        {/* Subtle ambient amber glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D97706]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Right Column (RTL): Copy, Slogan, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Official Marketing Slogan Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#D97706]/15 border border-[#D97706]/45 text-[#FBBF24]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] shrink-0" />
                <p className="font-heading text-xs sm:text-sm md:text-base font-bold leading-relaxed">
                  {BRAND.slogan}
                </p>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.25] tracking-tight text-white">
                توريد{' '}
                <span className="text-[#F59E0B]">الخرسانة الجاهزة</span>{' '}
                والبلوك والحديد ومواد البناء في{' '}
                <span className="underline decoration-[#D97706] decoration-4 underline-offset-8">
                  الرياض وضواحيها
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl">
                في <strong className="text-white font-bold">التعدد الذكي</strong> نوفر للملاك والمقاولين
                وشركات التطوير العقاري منظومة توريد هندسية متكاملة من مصدر واحد: خرسانة جاهزة معتمدة
                مختبرياً بجميع الإجهادات، بلوك معزول وبركاني وأسمنتي، حديد تسليح وطني، وأسمنت وبطحاء
                بأسعار تنافسية والتزام صارم بمواعيد الصب والتسليم.
              </p>

              {/* Primary & Direct Contact CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-heading font-extrabold text-base shadow-lg shadow-[#D97706]/20 transition-all"
                >
                  <span>اطلب عرض سعر الآن</span>
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <a
                  href={BRAND.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold text-base shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>واتساب فوري:</span>
                  <span className="tabular-nums-ltr">{BRAND.phone}</span>
                </a>

                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-base transition-all"
                >
                  <PhoneCall className="w-5 h-5 text-[#F59E0B] shrink-0" />
                  <span className="tabular-nums-ltr">{BRAND.phone}</span>
                </a>
              </div>

              {/* Engineering Trust Strip */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-sm sm:text-base text-white">جودة معتمدة</p>
                    <p className="text-xs text-[#9CA3AF]">مطابق لكود البناء السعودي SASO</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <BadgePercent className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-sm sm:text-base text-white">أسعار منافسة</p>
                    <p className="text-xs text-[#9CA3AF]">توريد مباشر وخصم للكميات</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Truck className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-sm sm:text-base text-white">دقة المواعيد</p>
                    <p className="text-xs text-[#9CA3AF]">تغطية شاملة للرياض وضواحيها</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column (RTL): Architectural Framed Riyadh Construction Site Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/15 bg-[#222B33] p-2.5 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.4]">
                  <img
                    src={ASSETS.heroConcreteImg}
                    alt="توريد الخرسانة الجاهزة ومواد البناء في الرياض - التعدد الذكي"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181F25]/90 via-[#181F25]/20 to-transparent" />

                  {/* Top architectural badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#181F25]/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>جاهزون لتلبية طلبات الصب والتوريد اليومية</span>
                  </div>

                  {/* Bottom overlay specs card */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl bg-[#181F25]/92 backdrop-blur-md border border-white/15 p-3.5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#FBBF24] font-bold">التوريد الهندسي المتكامل</p>
                      <p className="font-heading text-sm sm:text-base font-extrabold text-white mt-0.5">
                        خرسانة جاهزة • بلوك معزول • حديد تسليح • أسمنت
                      </p>
                    </div>
                    <a
                      href="#catalog"
                      className="shrink-0 px-3.5 py-2 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold transition-colors"
                    >
                      تصفح الأصناف
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Competitive Pricing Showcase Section */}
      <section id="services" className="py-16 sm:py-20 bg-[#F5F4F0] bg-blueprint-light border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded bg-[#1E3A5F]/10 text-[#1E3A5F] mb-3">
                خدماتنا وأسعارنا المنافسة
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#181F25]">
                منظومة توريد شاملة بأسعار الجملة والمصنع
              </h2>
              <p className="text-[#4A5562] mt-2.5 max-w-2xl text-base">
                نختصر عليك عناء التعامل مع عشرات الموردين؛ نوفر لك كافة احتياجات مشروعك الإنشائية في
                الرياض وضواحيها بجودة مضمونة وأسعار مدروسة تناسب الملاك والمقاولين.
              </p>
            </div>

            <a
              href={BRAND.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-lg bg-white border border-[#E2E0D8] hover:border-[#25D366] text-[#181F25] font-bold text-sm shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>احصل على تسعيرة فورية عبر واتساب</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {COMPETITIVE_PRICING_HIGHLIGHTS.map((service, idx) => {
              const Icons = [Building2, Layers, HardHat];
              const IconComp = Icons[idx % Icons.length];
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl border border-[#E2E0D8] hover:border-[#D97706] transition-all shadow-xs hover:shadow-md flex flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#181F25] text-[#F59E0B] flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1.5 rounded-lg bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/30 font-heading font-extrabold text-xs sm:text-sm">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-extrabold text-[#181F25]">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E3A5F] mt-1 mb-4">
                      {service.subtitle}
                    </p>

                    <ul className="space-y-2.5 border-t border-[#E2E0D8] pt-4">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-[#4A5562]">
                          <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E0D8] flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-[#181F25] hover:bg-[#D97706] text-white font-heading font-bold text-sm transition-colors cursor-pointer"
                    >
                      اطلب تسعيرة لهذه الخدمة
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
