import heroConcreteImg from '../assets/hero-concrete-riyadh.jpg';
import catReadymixImg from '../assets/cat-readymix.jpg';
import catBlocksImg from '../assets/cat-blocks.jpg';
import catSteelImg from '../assets/cat-steel.jpg';
import catMaterialsImg from '../assets/cat-materials.jpg';

export const ASSETS = {
  heroConcreteImg,
  catReadymixImg,
  catBlocksImg,
  catSteelImg,
  catMaterialsImg,
};

export const BRAND = {
  name: 'التعدد الذكي',
  tagline: 'لتوريد الخرسانة الجاهزة والبلوك والحديد ومواد البناء',
  slogan: 'التعدد الذكي... جودة تثق بها، وأسعار تنافسية، وتوريد في الموعد.',
  phone: '0536092055',
  phoneFormatted: '0536092055',
  phoneHref: 'tel:0536092055',
  whatsappDirectUrl: 'https://wa.me/966536092055',
  city: 'مدينة الرياض وضواحيها',
};

export function getWhatsAppLink(message?: string): string {
  if (!message) {
    return BRAND.whatsappDirectUrl;
  }
  return `${BRAND.whatsappDirectUrl}?text=${encodeURIComponent(message)}`;
}

export type CategoryKey = 'all' | 'concrete' | 'blocks' | 'steel' | 'materials';

export interface CategoryMeta {
  key: CategoryKey;
  label: string;
  shortLabel: string;
  image?: string;
  summary: string;
}

export interface CatalogItem {
  id: string;
  category: Exclude<CategoryKey, 'all'>;
  categoryLabel: string;
  title: string;
  specBadge: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  unit: string;
  competitivePriceLabel: string;
  priceNote: string;
  popular?: boolean;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    key: 'all',
    label: 'جميع المواد والأصناف',
    shortLabel: 'الكل',
    summary: 'استعرض كافة أصناف الخرسانة الجاهزة والبلوك والحديد ومواد البناء المعتمدة.',
  },
  {
    key: 'concrete',
    label: 'الخرسانة الجاهزة والمضخات',
    shortLabel: 'الخرسانة الجاهزة',
    image: catReadymixImg,
    summary: 'خلطات خرسانية معتمدة مختبرياً بجميع الإجهادات مع مضخات حديثة بأطوال متعددة.',
  },
  {
    key: 'blocks',
    label: 'البلوك الأسمنتي والمعزول',
    shortLabel: 'البلوك والعزل',
    image: catBlocksImg,
    summary: 'بلوك معزول حرارياً وبركاني وأسمنتي عالي الكثافة مطابق لكود البناء السعودي.',
  },
  {
    key: 'steel',
    label: 'حديد التسليح والشبك',
    shortLabel: 'الحديد والتسليح',
    image: catSteelImg,
    summary: 'حديد تسليح وطني عالي الشد بجميع المقاسات وشبك صبة وسلك تربيط.',
  },
  {
    key: 'materials',
    label: 'الأسمنت والبطحاء ومواد البناء',
    shortLabel: 'مواد البناء',
    image: catMaterialsImg,
    summary: 'أسمنت عادي ومقاوم، بطحاء الرياض المغسولة، بحص وصبيز بتوريد فوري للموقع.',
  },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  // الخرسانة الجاهزة
  {
    id: 'concrete-c35',
    category: 'concrete',
    categoryLabel: 'الخرسانة الجاهزة',
    title: 'خرسانة جاهزة إنشائية (C35 / 350 - 400 كجم)',
    specBadge: 'جهد 350 - 400 كجم/سم²',
    image: catReadymixImg,
    description:
      'الخلطة الإنشائية الأكثر طلباً للقواعد والرقاب والميد والأعمدة والأسقف للفلل والعمائر التجارية، مفحوصة مختبرياً ومطابقة لكود البناء السعودي.',
    specs: [
      { label: 'نوع الأسمنت', value: 'عادي OPC أو مقاوم للأملاح SRC' },
      { label: 'محتوى الأسمنت', value: '350 - 400 كجم / م³' },
      { label: 'خدمة الضخ', value: 'شامل خيار مضخة من 36م إلى 52م' },
    ],
    unit: 'متر مكعب (م³)',
    competitivePriceLabel: 'يبدأ من 215 ر.س / م³',
    priceNote: 'خصم خاص للكميات فوق 50 م³ ومشاريع العظم',
    popular: true,
  },
  {
    id: 'concrete-c30',
    category: 'concrete',
    categoryLabel: 'الخرسانة الجاهزة',
    title: 'خرسانة جاهزة مسلحة (C30 / 350 كجم)',
    specBadge: 'جهد 300 - 350 كجم/سم²',
    image: catReadymixImg,
    description:
      'خرسانة متوازنة عالية التشغيلية مخصصة للأسقف والكمرات والميد الأرضية وأرضيات المستودعات المسلحة مع إضافات تحسين السيولة.',
    specs: [
      { label: 'مقاومة الكسر', value: '30 ميجاباسكال (28 يوم)' },
      { label: 'اختبار الهبوط', value: 'Slump 120 - 160 ملم مضبوط' },
      { label: 'المختبر', value: 'أخذ مكعبات فحص عند الطلب' },
    ],
    unit: 'متر مكعب (م³)',
    competitivePriceLabel: 'يبدأ من 200 ر.س / م³',
    priceNote: 'توريد منتظم بخلاطات حديثة لجميع أحياء الرياض',
  },
  {
    id: 'concrete-c15-blinding',
    category: 'concrete',
    categoryLabel: 'الخرسانة الجاهزة',
    title: 'خرسانة فرشة نظافة وأرضيات (C15 - C20)',
    specBadge: 'جهد 150 - 250 كجم/سم²',
    image: catReadymixImg,
    description:
      'خرسانة عادية لصب صبة النظافة أسفل القواعد واللبشة وأرضيات الأحواش والممرات، متوفرة بأسمنت مقاوم للكبريتات لحماية الأساسات.',
    specs: [
      { label: 'الاستخدام', value: 'صبة نظافة، أحواش، أرصفة' },
      { label: 'نوع الأسمنت', value: 'مقاوم SRC أو بورتلاندي عادي' },
      { label: 'سرعة التوريد', value: 'إمكانية الجدولة خلال 24 ساعة' },
    ],
    unit: 'متر مكعب (م³)',
    competitivePriceLabel: 'يبدأ من 180 ر.س / م³',
    priceNote: 'أسعار تنافسية جداً للمقاولين والمشاريع',
  },

  // البلوك والعزل
  {
    id: 'block-insulated-20',
    category: 'blocks',
    categoryLabel: 'البلوك والعزل',
    title: 'بلوك معزول بولسترين (جفالي / شريحة عزل)',
    specBadge: 'مقاس 20×20×40 سم | كود البناء',
    image: catBlocksImg,
    description:
      'بلوك أسمنتي أو بركاني مزود بشريحة عزل حراري بولسترين عالي الكثافة للجدران الخارجية، يحقق اشتراطات العزل الحراري لكود البناء السعودي وشركة الكهرباء.',
    specs: [
      { label: 'المقاسات المتوفرة', value: '20 سم، 25 سم، 30 سم' },
      { label: 'نوع العازل', value: 'بولسترين أبيض أو أزرق معشق' },
      { label: 'طريقة التوريد', value: 'على طبليات مع تنزيل بالونش' },
    ],
    unit: 'لكل 1000 حبة',
    competitivePriceLabel: 'سعر مصنع منافس للجملة',
    priceNote: 'شامل التوصيل والتنزيل في موقع المشروع بالرياض',
    popular: true,
  },
  {
    id: 'block-volcanic',
    category: 'blocks',
    categoryLabel: 'البلوك والعزل',
    title: 'بلوك بركاني خفيف الوزن عازل للحرارة والصوت',
    specBadge: 'بركاني أصلي | خفيف الوزن',
    image: catBlocksImg,
    description:
      'مصنع من حجر البوزولانا البركاني الطبيعي، يتميز بخفة الوزن وتقليل الأحمال على الأسقف مع عزل طبيعي فائق للحرارة والصوت ومقاومة الحريق.',
    specs: [
      { label: 'المقاسات', value: '10 سم، 15 سم، 20 سم' },
      { label: 'المميزات', value: 'عازل طبيعي + تماسك ممتاز للياسة' },
      { label: 'المطابقة', value: 'معتمد SASO ومختبرات الجودة' },
    ],
    unit: 'لكل 1000 حبة',
    competitivePriceLabel: 'أفضل تسعيرة توريد مباشر',
    priceNote: 'توريد سريع من المصنع مباشرة للمشروع',
  },
  {
    id: 'block-cement-hollow',
    category: 'blocks',
    categoryLabel: 'البلوك والعزل',
    title: 'بلوك أسمنتي عادي ومصمت عالي التحمل',
    specBadge: 'مقاس 10 / 15 / 20 سم',
    image: catBlocksImg,
    description:
      'بلوك أسمنتي آلي معالج بالبخار ذو حواف هندسية مستقيمة وقوة تحمل عالية للقواطع الداخلية وأسوار الفلل والكرسي المعماري.',
    specs: [
      { label: 'الأصناف', value: 'مفرغ عادي / مصمت / هوردي للأسقف' },
      { label: 'المعالجة', value: 'معالجة بخارية لصلابة قصوى' },
      { label: 'الهدر', value: 'أقل نسبة كسر بفضل التحميل الآلي' },
    ],
    unit: 'لكل 1000 حبة',
    competitivePriceLabel: 'يبدأ من أسعار الجملة للمصنع',
    priceNote: 'خصومات فورية لطلبيات التريلا الكاملة',
  },

  // الحديد والتسليح
  {
    id: 'steel-rebar-national',
    category: 'steel',
    categoryLabel: 'الحديد والتسليح',
    title: 'حديد تسليح وطني معتمد (8 ملم إلى 32 ملم)',
    specBadge: 'مطابق SASO | ASTM A615 Gr.60',
    image: catSteelImg,
    description:
      'توريد حديد تسليح وطني (سابك، الراجحي، الاتفاق، وطني معتمد) بطول قياسي 12 متر، جديد خالٍ من الصدأ ومطابق لاشتراطات المكاتب الهندسية.',
    specs: [
      { label: 'الأقطار المتوفرة', value: '8، 10، 12، 14، 16، 18، 20، 25، 32 ملم' },
      { label: 'إجهاد الخضوع', value: 'Grade 60 عالي المقاومة' },
      { label: 'الشهادات', value: 'شهادة منشأ ومطابقة سعودية' },
    ],
    unit: 'بالطن (شامل التوصيل)',
    competitivePriceLabel: 'تحديث يومي بأقل سعر سوقي',
    priceNote: 'تشكيل أقطار متعددة في شحنة واحدة حسب جدول الحديد',
    popular: true,
  },
  {
    id: 'steel-mesh-wire',
    category: 'steel',
    categoryLabel: 'الحديد والتسليح',
    title: 'شبك حديد ملحوم للصبات وسلك تربيط ناعم',
    specBadge: 'مقاس 2×5 م | 6 ملم - 8 ملم',
    image: catSteelImg,
    description:
      'شبك صبة أرضيات ملحوم آلياً لأرضيات الفلل والمستودعات وصبة النظافة، بالإضافة إلى لفات سلك تربيط ناعم ومجلفن وبسكوت خرساني.',
    specs: [
      { label: 'سماكة الشبك', value: '6 ملم، 7 ملم، 8 ملم (فتحة 15×15 أو 20×20)' },
      { label: 'أبعاد اللوح', value: '2 متر × 5 متر قياسي' },
      { label: 'الملحقات', value: 'سلك تربيط + كراسي وبسكوت خرسانة' },
    ],
    unit: 'بالحبة / بالربطة',
    competitivePriceLabel: 'تسعيرة جملة مع طلبية الحديد',
    priceNote: 'توصيل سريع مع طلبية الحديد أو البلوك لتوفير النقل',
  },

  // مواد البناء والأسمنت
  {
    id: 'materials-cement',
    category: 'materials',
    categoryLabel: 'مواد البناء',
    title: 'أسمنت بورتلاندي عادي ومقاوم وأسمنت تشطيبات',
    specBadge: 'أكياس 50 كجم | جملة وتجزئة',
    image: catMaterialsImg,
    description:
      'توريد أسمنت اليمامة والرياض والقصيم (عادي للبناء واللياسة، مقاوم للأملاح للأساسات والخزانات، وأسمنت أبيض) بكميات جملة وتريلات للمشاريع.',
    specs: [
      { label: 'الأنواع', value: 'بورتلاندي عادي / مقاوم كبريتات / تشطيبات' },
      { label: 'وزن الكيس', value: '50 كجم تاريخ إنتاج حديث' },
      { label: 'التنزيل', value: 'طبليات مغلفة أو تنزيل بالموقع' },
    ],
    unit: 'بالكيس / بالتريلا',
    competitivePriceLabel: 'أسعار جملة مباشرة من الموزع',
    priceNote: 'توريد فوري لكافة أحياء الرياض وضواحيها',
  },
  {
    id: 'materials-sand-gravel',
    category: 'materials',
    categoryLabel: 'مواد البناء',
    title: 'بطحاء الرياض المغسولة وبحص ودفان نظيف',
    specBadge: 'ردود قلاب تريلا / سكس',
    image: catMaterialsImg,
    description:
      'بطحاء ناعمة مغسولة خالية من الشوائب والأملاح مثالية للياسة والبناء، ورمل أحمر، وبحص خرساني مقاس 3/4 و 3/8، وصبيز معتمد للردم والدمك.',
    specs: [
      { label: 'الأصناف', value: 'بطحاء لياسة، بطحاء بناء، دفان، صبيز، بحص' },
      { label: 'أحجام القلابات', value: 'تريلا 24-32 م³ / سكس 14-18 م³ / دينا' },
      { label: 'النقاوة', value: 'مغسولة ومفروزة خالية من الطين' },
    ],
    unit: 'بالرد (تريلا / سكس)',
    competitivePriceLabel: 'سعر منافس شامل التوصيل',
    priceNote: 'التزام تام بحجم الرد الفعلي وجودة المواد',
  },
];

export const COMPETITIVE_PRICING_HIGHLIGHTS = [
  {
    title: 'الخرسانة الجاهزة المعتمدة',
    subtitle: 'جميع الإجهادات C15 حتى C45',
    badge: 'أسعار تبدأ من 180 ر.س / م³',
    points: [
      'شامل التوصيل للرياض وإمكانية توفير المضخات بجميع الأطوال',
      'أسمنت عادي أو مقاوم للكبريتات حسب توصية المكتب الهندسي',
      'فحص مختبري لمكعبات الخرسانة وضمان مطابقة الجهد',
    ],
  },
  {
    title: 'البلوك المعزول والبركاني والأسمنتي',
    subtitle: 'مطابق لكود البناء السعودي',
    badge: 'سعر المصنع مباشرة للمشروع',
    points: [
      'بلوك معزول بولسترين وبركاني وأسمنتي بجميع المقاسات',
      'توريد على طبليات وتنزيل بالونش بأقل نسبة كسر أو هدر',
      'خصومات خاصة لطلبيات الفلل السكنية الكاملة والمقاولين',
    ],
  },
  {
    title: 'حديد التسليح ومواد البناء الأساسية',
    subtitle: 'توريد متكامل من مصدر واحد',
    badge: 'تسعير يومي بأفضل سعر جملة',
    points: [
      'حديد تسليح وطني معتمد SASO بجميع الأقطار + شبك صبة',
      'أسمنت حديث الإنتاج وبطحاء مغسولة وبحص وصبيز نظيف',
      'توحيد التوريد من جهة واحدة يوفر عليك الوقت وتكاليف النقل',
    ],
  },
];

export const RIYADH_COVERAGE = [
  {
    zone: 'شمال الرياض',
    districts: 'النرجس، الياسمين، الملقا، العارض، القيروان، حطين، الصحافة، بنبان، الخير',
  },
  {
    zone: 'شرق الرياض',
    districts: 'الرمال، القادسية، المونسية، قرطبة، الجنادرية، اليرموك، إشبيلية، النظيم',
  },
  {
    zone: 'غرب وجنوب الرياض',
    districts: 'طويق، ظهرة لبن، المهدية، عرقة، نمار، الشفا، العزيزية، الدار البيضاء، الحائر',
  },
  {
    zone: 'ضواحي الرياض والمحافظات القريبة',
    districts: 'الدرعية، العمارية، العيينة، الجبيلة، المزاحمية، ضرما، الخرج، رماح، ثادق',
  },
];
