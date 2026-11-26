import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CatalogSection } from './components/CatalogSection';
import { FeaturesSection } from './components/FeaturesSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CatalogItem } from './data/catalog';

export function App() {
  const [selectedQuoteItem, setSelectedQuoteItem] = useState<string | null>(null);

  const scrollToQuoteWithItem = (title: string) => {
    setSelectedQuoteItem(title);
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCatalogProduct = (item: CatalogItem) => {
    scrollToQuoteWithItem(item.title);
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#181F25]">
      {/* Sticky Header with Top Clickable Phone & WhatsApp */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero & Competitive Pricing Services Showcase */}
        <HeroSection onSelectServiceForQuote={scrollToQuoteWithItem} />

        {/* Types of Concrete, Blocks, Rebar & Building Materials */}
        <CatalogSection onSelectProduct={handleSelectCatalogProduct} />

        {/* Our Advantages: Quality, Competitive Prices, Fast Delivery & On-Time Commitment */}
        <FeaturesSection />

        {/* Interactive Quote Request Form + Concrete Volume Calculator */}
        <QuoteSection selectedItemTitle={selectedQuoteItem} />

        {/* Contact Us, Riyadh Coverage & Footer with Bottom Clickable Phone & WhatsApp */}
        <ContactAndFooter />
      </main>

      {/* Persistent Floating WhatsApp Button across the entire site */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
