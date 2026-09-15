import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../common/Logo';

const NAV_LINKS = [
  { name: 'Home',     path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Colours',  path: '/colours' },
  { name: 'About',    path: '/about' },
  { name: 'Contact',  path: '/contact' },
];

const STORE_PHONE     = '0866 245 2828';
const STORE_PHONE_TEL = 'tel:+918662452828';

// TODO: Replace with owner's WhatsApp-enabled mobile number
const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello City Enterprises, I would like to enquire about Asian Paints products.')}`;

function WhatsAppIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]             = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Compact header after 50px scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ─── Desktop / Tablet Navbar ─── */}
      <nav
        className={`w-full bg-white border-b border-[#E8E8E1] transition-all duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-[72px] sm:h-20'
            }`}
          >
            {/* Logo */}
            <div className="shrink-0">
              <Logo variant="navbar" />
            </div>

            {/* Desktop nav links — centered */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors duration-150 rounded-md ${
                      isActive
                        ? 'text-[#D9232E]'
                        : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F5F5F0]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop right — phone number */}
            <div className="hidden lg:flex items-center">
              <a
                href={STORE_PHONE_TEL}
                className="flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#D9232E] transition-colors px-3 py-2 rounded-md hover:bg-[#FEECEE]/60"
              >
                <Phone className="w-4 h-4 text-[#D9232E] shrink-0" />
                {STORE_PHONE}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -mr-1 text-[#374151] hover:text-[#D9232E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9232E] rounded-md"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Full-Screen Overlay Menu ─── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel — slides from right */}
          <div className="absolute inset-y-0 right-0 w-full max-w-[340px] bg-white flex flex-col shadow-2xl">

            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E8E1]">
              <Logo variant="navbar" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#6B7280] hover:text-[#111827] focus:outline-none rounded-md"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-4 text-xl font-medium border-b border-[#F0F0EA] last:border-0 transition-colors ${
                      isActive ? 'text-[#D9232E]' : 'text-[#111827]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="px-6 py-6 border-t border-[#E8E8E1] space-y-3">
              <a
                href={STORE_PHONE_TEL}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#D9232E] text-white rounded-lg text-sm font-semibold hover:bg-[#BF1B25] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Call Store: {STORE_PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#F5F5F0] text-[#1F2937] rounded-lg text-sm font-medium border border-[#E8E8E1] hover:border-[#25D366]/50 hover:text-[#16A34A] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                WhatsApp
              </a>
              <p className="text-center text-[11px] text-[#9CA3AF] pt-1">
                Gunadala, Vijayawada · Open until 9:30 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
