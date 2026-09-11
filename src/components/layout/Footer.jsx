import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from '../common/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Colours', path: '/colours' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const productCategories = [
    { name: 'Interior Wall Paints', path: '/products' },
    { name: 'Exterior Weatherproof Paints', path: '/products' },
    { name: 'Waterproofing Solutions', path: '/products' },
    { name: 'Wood Finishes & Enamels', path: '/products' },
    { name: 'Wall Primers & Putty', path: '/products' },
    { name: 'Painting Tools & Brushes', path: '/products' },
  ];

  return (
    <footer className="bg-[#111827] text-[#9CA3AF] pt-14 pb-8 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1F2937]">
          {/* Col 1: Store Brand & Bio */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-sm border border-gray-100">
              <Logo variant="footer" />
            </div>

            <p className="text-sm leading-relaxed text-[#D1D5DB]">
              Your trusted destination for genuine Asian Paints products, professional color consultation, and comprehensive painting solutions for homes and commercial spaces.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F2937] text-xs text-white border border-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
              <span>100% Genuine Paint Guarantee</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore Store
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-[#D9232E] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#D9232E] transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Asian Paints Range
            </h3>
            <ul className="space-y-2.5">
              {productCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Store Visit & Timings */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Store Visit & Hours
            </h3>

            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#D9232E] shrink-0 mt-1" />
              <div className="text-[#D1D5DB] leading-relaxed">
                <p className="text-white font-medium">City Enterprises</p>
                <p>Shop No. 14, Commercial Market,</p>
                <p>Main Road, City Center,</p>
                <p>Vijayawada, Andhra Pradesh – 520004</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-[#EAB308] shrink-0" />
              <a href="tel:+919876543210" className="text-white hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm">
              <Mail className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="mailto:info@cityenterprises.com" className="hover:text-white">
                info@cityenterprises.com
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-gray-400 pt-2 border-t border-gray-800">
              <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Store Working Hours:</p>
                <p>Mon – Sat: 9:00 AM – 8:30 PM</p>
                <p>Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} City Enterprises. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            Disclaimer: City Enterprises is an independent authorized retail dealer of Asian Paints products. All brand names, trademarks, and logos are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
