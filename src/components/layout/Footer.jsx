import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Truck } from 'lucide-react';

const STORE_PHONE_TEL = 'tel:+918662452828';
const STORE_PHONE     = '0866 245 2828';

const quickLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Colours',  path: '/colours' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact',  path: '/contact' },
];

const productCategories = [
  { name: 'Interior Wall Paints',      path: '/products' },
  { name: 'Exterior Weathercoats',     path: '/products' },
  { name: 'Waterproofing Systems',     path: '/products' },
  { name: 'Wood & Metal Finishes',     path: '/products' },
  { name: 'Wall Primers & Putty',      path: '/products' },
  { name: 'Tools & Accessories',       path: '/products' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-[#9CA3AF] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Main grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1F2937]">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#D9232E] rounded-lg">
              <img
                src="/city-enterprises-vector-logo.jpg"
                alt="City Enterprises - Asian Paints Dealer"
                className="h-12 w-auto object-contain rounded-md bg-white p-1"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              Authorized Asian Paints dealer in Gunadala, Vijayawada. Genuine products, in-store shade consultation, and home delivery.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <Truck className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0" />
              <span>Home delivery available</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
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

          {/* Col 3: Products */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
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

          {/* Col 4: Store Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Find Us
            </h3>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D9232E] shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <p className="text-white font-medium">City Enterprises</p>
                <p>17- Joseph Complex Opportunity,</p>
                <p>Ramgopal Theatre Euro Road, Gunadala,</p>
                <p>Vijayawada, Andhra Pradesh 520004</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D9232E] shrink-0" />
              <a href={STORE_PHONE_TEL} className="text-sm text-white hover:underline font-medium">
                {STORE_PHONE}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#9CA3AF] shrink-0" />
              <p className="text-sm">Open until <span className="text-white">9:30 PM</span></p>
            </div>

            <a
              href="https://maps.app.goo.gl/TuC9RAoaZZqJkP3y7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] hover:text-white transition-colors border border-[#374151] hover:border-[#6B7280] px-3 py-1.5 rounded-md mt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#4B5563]">
          <p>© {year} City Enterprises, Vijayawada. All rights reserved.</p>
          <p className="text-center md:text-right text-[11px] leading-relaxed max-w-md">
            City Enterprises is an independent authorized retail dealer of Asian Paints products. All brand names and trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
