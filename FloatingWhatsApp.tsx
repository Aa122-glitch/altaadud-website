import React from 'react';
import { BRAND } from '../data/catalog';
import { WhatsAppIcon } from './BrandIcons';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={BRAND.whatsappDirectUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`تواصل معنا مباشرة عبر واتساب على الرقم ${BRAND.phone}`}
      className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-50 inline-flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-heading font-extrabold shadow-xl transition-transform duration-200 hover:scale-105 animate-whatsapp-pulse border-2 border-white"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
      <div className="flex flex-col leading-tight text-right">
        <span className="text-[11px] sm:text-xs font-bold opacity-90">تواصل واتساب مباشر</span>
        <span className="tabular-nums-ltr text-xs sm:text-sm font-black tracking-wide">
          {BRAND.phone}
        </span>
      </div>
    </a>
  );
};
