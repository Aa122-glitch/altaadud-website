import React from 'react';
import { Award, BadgeDollarSign, Zap, CalendarCheck2, PhoneCall } from 'lucide-react';
import { BRAND } from '../data/catalog';
import { WhatsAppIcon } from './BrandIcons';

const CORE_FEATURES = [
  {
    number: '01',
    icon: Award,
    title: 'الجودة المعتمدة والموثوقة',
    description:
      'نلتزم بتوريد خرسانة جاهزة مفحوصة مختبرياً ومطابقة لكود البناء السعودي (SBC)، وحديد تسليح وطني معتمد (SASO)، وبلوك معزول وبركاني عالي الكثافة والصلابة.',
    highlight: 'فحص مختبري وشهادات مطابقة',
  },
  {
    number: '02',
    icon: BadgeDollarSign,
    title: 'الأسعار المنافسة بدون وسطاء',
    description:
      'نقدم أفضل تسعيرة في سوق الرياض بفضل التوريد المباشر وحجم التعامل الكبير مع المصانع، مع عروض وخصومات خاصة لمشاريع الفلل الكاملة والمقاولين.',
    highlight: 'توفير فعلي في ميزانية العظم',
  },
  {
    number: '03',
    icon: Zap,
    title: 'سرعة التوريد وجاهزية الأسطول',
    description:
      'أسطول متكامل من خلاطات ومضخات الخرسانة الحديثة، وتريلات مزودة بونشات تنزيل للبلوك والحديد والأسمنت لضمان وصول المواد لموقعك بأسرع وقت.',
    highlight: 'أسطول نقل ومضخات حديثة',
  },
  {
    number: '04',
    icon: CalendarCheck2,
    title: 'الالتزام الصارم بالمواعيد',
    description:
      'ندرك أهمية الوقت في جدول الصب ومراحل البناء؛ لذلك نعتمد جدولة دقيقة لتسليم الشحنات في الساعة المتفق عليها دون تأخير يعطل المقاول أو العمالة.',
    highlight: 'دقة في مواعيد الصب والتسليم',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-[#181F25] text-white bg-blueprint-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="inline-block text-xs font-extrabold px-3 py-1 rounded bg-[#D97706]/20 text-[#FBBF24] border border-[#D97706]/40 mb-3">
            لماذا يختارنا الملاك والمقاولون في الرياض؟
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            مميزاتنا الهندسية في كل شحنة وتوريد
          </h2>
          <p className="text-[#D1D5DB] mt-3 text-base sm:text-lg">
            نبني شراكة طويلة الأمد مع عملائنا من خلال الجمع بين قوة المواصفات الهندسية، عدالة السعر،
            وانضباط التوريد الميداني.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.number}
                className="rounded-2xl bg-[#222B33] border border-white/10 hover:border-[#D97706] p-6 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#D97706] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-3xl font-black text-white/15 group-hover:text-[#D97706]/40 transition-colors tabular-nums-ltr">
                      {feat.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-extrabold text-white mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#D1D5DB] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="inline-block text-xs font-bold text-[#FBBF24]">
                    ✦ {feat.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slogan Banner Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-l from-[#1E3A5F] via-[#1B2D45] to-[#222B33] border border-white/15 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-[#FBBF24] mb-1">عهدنا الدائم لعملائنا في الرياض وضواحيها</p>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white leading-relaxed">
              «{BRAND.slogan}»
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={BRAND.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold text-sm transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>واتساب:</span>
              <span className="tabular-nums-ltr">{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.phoneHref}
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <span>اتصال:</span>
              <span className="tabular-nums-ltr">{BRAND.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
