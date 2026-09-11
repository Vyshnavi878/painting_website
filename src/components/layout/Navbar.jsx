import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import Logo from '../common/Logo';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Colours', path: '/colours' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for subtle shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-shadow duration-200 border-b border-[#E8E8E1] ${
          isScrolled ? 'shadow-sm' : 'shadow-2xs'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] sm:h-20">
            {/* Left Group: Logo + Navigation Links */}
            <div className="flex items-center gap-7 xl:gap-9">
              {/* Official City Enterprises Logo */}
              <div className="flex items-center py-1 shrink-0">
                <Logo variant="navbar" />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? 'text-[#D9232E] bg-[#FEECEE]/70 font-semibold'
                          : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F5F5F0]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-[#1F2937] hover:bg-[#F5F5F0] focus:outline-none focus:ring-2 focus:ring-[#D9232E]"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#D9232E]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1F2937]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] sm:top-20 z-50 lg:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="w-full max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto bg-white border-b border-[#E8E8E1] shadow-xl px-5 pt-4 pb-8 flex flex-col animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-1 divide-y divide-[#F0F0EA]">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 px-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#D9232E] bg-[#FEECEE]/80 font-semibold'
                        : 'text-[#1F2937] hover:bg-[#F5F5F0]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </NavLink>
              ))}
            </div>

            {/* Mobile Drawer Store Info & Action Buttons */}
            <div className="mt-6 pt-5 border-t border-[#E8E8E1] space-y-3">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Button>

              <a
                href="tel:+919876543210"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#1F2937] bg-[#F5F5F0] hover:bg-[#EBEBE3] border border-[#E8E8E1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D9232E]" />
                Call Store: +91 98765 43210
              </a>

              <div className="pt-2 text-center text-xs text-[#6B7280]">
                Open Mon - Sat: 9:00 AM - 8:30 PM
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
