import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, FileText, Clock } from 'lucide-react';
import { BRAND } from '../data/catalog';
import { BrandLogoMark, WhatsAppIcon } from './BrandIcons';

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'خدماتنا وأسعارنا', href: '#services' },
  { label: 'الخرسانة ومواد البناء', href: '#catalog' },
  { label: 'مميزاتنا', href: '#features' },
  { label: 'طلب عرض سعر', href: '#quote' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Direct Contact Utility Bar - Always visible & tappable on Mobile & Desktop */}
      <div className="bg-[#181F25] text-[#F5F4F0] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
          {/* Coverage & Schedule Info */}
          <div className="hidden md:flex items-center gap-5 text-[#D1D5DB]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>نخدم كافة أحياء <strong className="text-white">مدينة الرياض وضواحيها</strong></span>
            </span>
            <span className="h-3.5 w-px bg-white/15" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>جدولة وتوريد الخرسانة ومواد البناء في الموعد المحدد</span>
            </span>
          </div>

          {/* Prominent Clickable Phone & WhatsApp in Top Bar */}
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-2 sm:gap-3">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-md bg-white/10 hover:bg-[#D97706] text-white transition-colors font-semibold"
              aria-label={`اتصال هاتفي على الرقم ${BRAND.phone}`}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] group-hover:text-white shrink-0" />
              <span className="text-[11px] sm:text-xs text-gray-200">جوال:</span>
              <span className="tabular-nums-ltr font-bold tracking-wide text-sm sm:text-base text-white">
                {BRAND.phone}
              </span>
            </a>

            <a
              href={BRAND.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-[#0E1712] font-bold transition-colors shadow-xs"
              aria-label={`مراسلة واتساب على الرقم ${BRAND.phone}`}
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="text-[11px] sm:text-xs">واتساب:</span>
              <span className="tabular-nums-ltr font-extrabold tracking-wide text-sm sm:text-base">
                {BRAND.phone}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <BrandLogoMark className="w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-200 group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#181F25] tracking-tight">
                  {BRAND.name}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] border border-[#F59E0B]/30">
                  الرياض وضواحيها
                </span>
              </div>
              <p className="text-xs text-[#4A5562] font-medium mt-0.5">
                خرسانة جاهزة • بلوك • حديد • مواد بناء
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="القائمة الرئيسية">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-semibold text-[#181F25] hover:text-[#D97706] hover:bg-[#F5F4F0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Group */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={BRAND.phoneHref}
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#E2E0D8] bg-[#F5F4F0] hover:border-[#D97706] text-[#181F25] font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span className="tabular-nums-ltr">{BRAND.phone}</span>
            </a>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D97706] hover:bg-[#B45309] text-white font-heading font-bold text-sm shadow-xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>اطلب عرض سعر</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg border border-[#E2E0D8] text-[#181F25] hover:bg-[#F5F4F0] transition-colors"
            aria-expanded={mobileOpen}
            aria-label="فتح القائمة"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E2E0D8] bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <div className="grid grid-cols-1 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg text-base font-bold text-[#181F25] hover:bg-[#F5F4F0] hover:text-[#D97706] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E2E0D8] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={BRAND.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#181F25] text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>اتصال:</span>
                <span className="tabular-nums-ltr">{BRAND.phone}</span>
              </a>
              <a
                href={BRAND.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-[#0E1712] font-bold text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>واتساب:</span>
                <span className="tabular-nums-ltr">{BRAND.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
