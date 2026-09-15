import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Truck,
  CheckCircle2,
  Star,
  Home as HomeIcon,
  Layers,
  Paintbrush,
  Droplets,
  Sparkles,
  Wrench,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

// ─── Store constants ───────────────────────────────────────────
const STORE_PHONE     = '0866 245 2828';
const STORE_PHONE_TEL = 'tel:+918662452828';
const MAPS_URL        = 'https://maps.app.goo.gl/TuC9RAoaZZqJkP3y7';

// TODO: Replace with owner's WhatsApp-enabled mobile number
const WHATSAPP_NUMBER  = '919876543210';
const WHATSAPP_URL     = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello City Enterprises, I would like to enquire about Asian Paints products.')}`;

// ─── WhatsApp SVG icon ─────────────────────────────────────────
function WhatsAppIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────
const productCategories = [
  {
    id: 'interior',
    title: 'Interior Paints',
    short: 'Royale, Apcolite & Tractor emulsions',
    icon: <HomeIcon className="w-5 h-5" />,
    featured: true,
    image: '/hero-interior.jpg',
  },
  {
    id: 'exterior',
    title: 'Exterior Paints',
    short: 'Apex Ultima weathercoats for sun & rain',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    short: 'SmartCare damp proof & crack sealers',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    id: 'wood-metal',
    title: 'Wood & Metal',
    short: 'WoodTech PU & high-gloss enamels',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 'primers',
    title: 'Primers & Putty',
    short: 'TruCare interior & exterior primers',
    icon: <Paintbrush className="w-5 h-5" />,
  },
  {
    id: 'accessories',
    title: 'Tools & Accessories',
    short: 'Rollers, brushes, tape & more',
    icon: <Wrench className="w-5 h-5" />,
  },
];

const roomPalettes = {
  living: {
    label: 'Living Room',
    description: 'Inviting, luminous tones that enhance natural light and welcome guests.',
    swatches: [
      { name: 'Morning Glow',     code: '0765', hex: '#FAF6EE', finish: 'Royale Luxury Matt' },
      { name: 'Soft Ivory',       code: '0321', hex: '#F5EFE0', finish: 'Apcolite Premium' },
      { name: 'Champagne Sand',   code: '0418', hex: '#EAE1CE', finish: 'Royale Matt' },
      { name: 'Warm Terracotta',  code: '7921', hex: '#BD5338', finish: 'Feature Wall Accent' },
    ],
  },
  bedroom: {
    label: 'Bedroom',
    description: 'Restful pastels and grounding neutrals for a serene night\'s rest.',
    swatches: [
      { name: 'Misty Sage',    code: '7618', hex: '#D5DFD3', finish: 'Royale Shyne' },
      { name: 'Serene Slate',  code: '8312', hex: '#CCD3D6', finish: 'Apcolite Matt' },
      { name: 'Pale Cashmere', code: '0912', hex: '#ECE8E1', finish: 'Royale Luxury' },
      { name: 'Dusty Rose',    code: '8114', hex: '#DDBBB7', finish: 'Royale Matt' },
    ],
  },
  kitchen: {
    label: 'Kitchen',
    description: 'Fresh, washable sheens that brighten food preparation areas.',
    swatches: [
      { name: 'Linen White',  code: '0981', hex: '#F6F5EE', finish: 'Royale Health Shield' },
      { name: 'Sunny Ochre',  code: '7955', hex: '#E5A93C', finish: 'Apcolite Gloss' },
      { name: 'Olive Breeze', code: '7645', hex: '#BAC4A8', finish: 'Teflon Washable' },
      { name: 'Stone Grey',   code: '8294', hex: '#D2D7D2', finish: 'Royale Matt' },
    ],
  },
  exterior: {
    label: 'Exterior',
    description: 'Durable architectural tones formulated to resist dirt and monsoon rain.',
    swatches: [
      { name: 'Desert Sand',     code: '7891', hex: '#DDCBB3', finish: 'Apex Ultima Protek' },
      { name: 'Heritage Ochre',  code: '7908', hex: '#9E5B37', finish: 'Apex Weatherproof' },
      { name: 'Monsoon Slate',   code: '8402', hex: '#687175', finish: 'Apex Ultima' },
      { name: 'Alabaster White', code: '0101', hex: '#F2EFE9', finish: 'Apex Dust Proof' },
    ],
  },
};

const trustPoints = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#D9232E]" />,
    title: 'Genuine Products',
    desc: '100% authentic Asian Paints from official distribution stock.',
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-[#D9232E]" />,
    title: 'Expert Guidance',
    desc: 'Honest advice on wall conditions, dampness, and the right product for your surface.',
  },
  {
    icon: <Layers className="w-5 h-5 text-[#D9232E]" />,
    title: '2,200+ Shades',
    desc: 'Computerized in-store tinting. Any Asian Paints colour mixed while you wait.',
  },
  {
    icon: <Truck className="w-5 h-5 text-[#D9232E]" />,
    title: 'Home Delivery',
    desc: 'We deliver across Vijayawada. Call or WhatsApp to arrange.',
  },
];

// ─── Component ─────────────────────────────────────────────────
export default function HomePage() {
  const [activeRoom, setActiveRoom] = useState('living');

  return (
    <div className="w-full">

      {/* ================================================================
          1. HERO — editorial two-column
          ================================================================ */}
      <section className="relative bg-[#FAF9F6] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[82vh] lg:min-h-[88vh]">

          {/* Left: Content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 xl:pr-16 pt-12 pb-10 lg:py-16 order-2 lg:order-1">

            {/* Eyebrow */}
            <p className="animate-reveal-fade text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D9232E] mb-6">
              Vijayawada · Authorized Asian Paints Dealer
            </p>

            {/* Headline */}
            <h1 className="animate-reveal-up animate-delay-100 font-display text-[2.4rem] sm:text-5xl xl:text-[3.6rem] text-[#111827] leading-[1.12] mb-6">
              Colours that make a place feel like&nbsp;home.
            </h1>

            {/* Supporting copy */}
            <p className="animate-reveal-up animate-delay-200 text-base text-[#6B7280] leading-relaxed mb-8 max-w-[26rem]">
              City Enterprises stocks the complete Asian Paints range — luxury emulsions, exterior weathercoats, waterproofing, and tools. Come to our Gunadala showroom for in-store shade consultation.
            </p>

            {/* CTAs */}
            <div className="animate-reveal-up animate-delay-300 flex flex-wrap items-center gap-3 mb-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9232E] text-white text-sm font-semibold rounded-lg hover:bg-[#BF1B25] transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#374151] border border-[#E8E8E1] rounded-lg bg-white hover:border-[#D9232E]/30 hover:text-[#D9232E] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#D9232E]" />
                Find Our Store
              </Link>
            </div>

            {/* Trust strip */}
            <div className="animate-reveal-fade animate-delay-450 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-[#E8E8E1]">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                <span className="text-sm font-semibold text-[#111827]">4.2</span>
                <span className="text-sm text-[#9CA3AF]">· 25 Google reviews</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#E8E8E1]" />
              <div className="text-sm">
                <span className="font-semibold text-[#111827]">2,200+</span>
                <span className="text-[#9CA3AF] ml-1">shades available</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#E8E8E1]" />
              <div className="flex items-center gap-1.5 text-sm text-[#9CA3AF]">
                <Truck className="w-3.5 h-3.5" />
                Delivery available
              </div>
            </div>
          </div>

          {/* Right: Full-bleed image */}
          <div className="relative h-72 sm:h-96 lg:h-full order-1 lg:order-2">
            <img
              src="/hero-interior.jpg"
              alt="Beautifully painted interior by City Enterprises"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Subtle left-side vignette on desktop for smooth content blend */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none" />
            {/* Bottom vignette on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ================================================================
          2. QUICK CONTACT STRIP
          ================================================================ */}
      <section className="bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[#E8E8E1]">

            {/* Call */}
            <a
              href={STORE_PHONE_TEL}
              className="flex items-center gap-4 flex-1 py-5 sm:py-4 sm:px-8 sm:first:pl-0 group hover:bg-[#FEECEE]/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#FEECEE] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#D9232E]" />
              </div>
              <div>
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-medium">Call us</p>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#D9232E] transition-colors">
                  {STORE_PHONE}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 flex-1 py-5 sm:py-4 sm:px-8 group hover:bg-[#F0FDF4]/60 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-4 h-4 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-medium">WhatsApp</p>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#16A34A] transition-colors">
                  Ask about a product
                </p>
              </div>
            </a>

            {/* Visit */}
            <Link
              to="/contact"
              className="flex items-center gap-4 flex-1 py-5 sm:py-4 sm:px-8 sm:last:pr-0 group hover:bg-[#FEECEE]/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#FEECEE] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#D9232E]" />
              </div>
              <div>
                <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-medium">Visit store</p>
                <p className="text-sm font-semibold text-[#111827] group-hover:text-[#D9232E] transition-colors">
                  Gunadala, Vijayawada
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. PRODUCT CATEGORIES — asymmetric editorial layout
          ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row */}
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-2">
                Product Range
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111827]">
                Everything for your walls.
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#D9232E] transition-colors shrink-0"
            >
              Browse all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop: featured left + grid right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

            {/* Featured: Interior Paints — large image card */}
            <Link
              to="/products"
              className="lg:col-span-2 relative overflow-hidden rounded-xl group bg-[#1a1a1a]"
              style={{ minHeight: '400px' }}
            >
              <img
                src="/hero-interior.jpg"
                alt="Interior Paints"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-65 group-hover:scale-[1.03] transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest block mb-2">
                  Featured
                </span>
                <h3 className="font-display text-2xl text-white mb-1">Interior Paints</h3>
                <p className="text-sm text-white/70">Royale, Apcolite &amp; Tractor emulsions</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:gap-2.5 transition-all">
                  View range <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Remaining categories — 2-column grid */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {productCategories.slice(1).map((cat) => (
                <Link
                  key={cat.id}
                  to="/products"
                  className="group p-5 sm:p-6 rounded-xl bg-white border border-[#E8E8E1] hover:border-[#D9232E]/25 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#FEECEE] flex items-center justify-center text-[#D9232E] shrink-0 group-hover:bg-[#D9232E] group-hover:text-white transition-colors">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] group-hover:text-[#D9232E] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">{cat.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 sm:hidden text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9232E]"
            >
              Browse all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. COLOUR INSPIRATION — gallery style, minimal cards
          ================================================================ */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-2">
                Colour Inspiration
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111827]">
                Find a colour for every room.
              </h2>
            </div>

            {/* Room tabs */}
            <div className="flex items-center gap-1 bg-[#F5F5F0] rounded-lg p-1">
              {Object.keys(roomPalettes).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveRoom(key)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeRoom === key
                      ? 'bg-white text-[#111827] shadow-sm'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  {roomPalettes[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#6B7280] mb-8 max-w-xl">
            {roomPalettes[activeRoom].description}
          </p>

          {/* Swatches — large, clean, minimal chrome */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {roomPalettes[activeRoom].swatches.map((swatch, idx) => (
              <div key={idx} className="group">
                <div
                  className="w-full aspect-[3/2] rounded-xl border border-black/8 mb-3 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: swatch.hex }}
                />
                <p className="text-sm font-medium text-[#111827]">{swatch.name}</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5 font-mono">{swatch.code}</p>
                <p className="text-xs text-[#D9232E] mt-0.5">{swatch.finish}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/colours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9232E] text-white text-sm font-semibold rounded-lg hover:bg-[#BF1B25] transition-colors"
            >
              Explore All Colours <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-[#9CA3AF]">
              Physical Asian Paints shade cards available in-store
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. ABOUT — two-column magazine spread, no wrapper card
          ================================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: store image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/about-store.jpg"
                alt="City Enterprises paint showroom in Gunadala, Vijayawada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right: story */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-4">
                About City Enterprises
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111827] mb-5 leading-snug">
                A neighbourhood paint store built on genuine guidance.
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                City Enterprises is a dedicated local paint store in Gunadala, Vijayawada. As an authorized Asian Paints dealer, we carry authenticated products and take the time to understand your walls — not just hand over a tin.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Whether you're refreshing a bedroom, sealing a leaking terrace, or painting a full building, bring your questions. We'll help you choose the right product, the right colour, and the right quantity — with nothing wasted.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9232E] text-white text-sm font-semibold rounded-lg hover:bg-[#BF1B25] transition-colors"
                >
                  Know More
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-[#4B5563] hover:text-[#D9232E] transition-colors"
                >
                  Store location →
                </Link>
              </div>

              {/* Trust tags — horizontal, no cards */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-[#E8E8E1]">
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Authorized dealer
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  In-store tinting
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Home delivery
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                  4.2★ on Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          6. WHY CHOOSE US — horizontal list with dividers, NOT 4 cards
          ================================================================ */}
      <section className="bg-[#FAF9F6] border-y border-[#E8E8E1] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-2">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111827]">
              What makes City Enterprises different.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8E8E1]">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="mb-3">{point.icon}</div>
                <h3 className="text-sm font-semibold text-[#111827] mb-1.5">{point.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          7. STORE + FINAL CTA — combined, real data
          ================================================================ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Store details */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-4">
                Visit City Enterprises
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111827] leading-snug mb-8">
                Come see the colours in person.
              </h2>

              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-[#D9232E] mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-[#111827]">17- Joseph Complex Opportunity</p>
                    <p className="text-[#6B7280]">Ramgopal Theatre Euro Road, Gunadala</p>
                    <p className="text-[#6B7280]">Vijayawada, Andhra Pradesh 520004</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#D9232E] shrink-0" />
                  <a
                    href={STORE_PHONE_TEL}
                    className="text-sm font-semibold text-[#111827] hover:text-[#D9232E] transition-colors"
                  >
                    {STORE_PHONE}
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                  <p className="text-sm text-[#6B7280]">
                    Open until{' '}
                    <span className="font-semibold text-[#111827]">9:30 PM</span>
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Truck className="w-5 h-5 text-[#16A34A] shrink-0" />
                  <p className="text-sm text-[#6B7280]">
                    Home delivery available across Vijayawada
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9232E] text-white text-sm font-semibold rounded-lg hover:bg-[#BF1B25] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#111827] text-sm font-semibold rounded-lg border border-[#E8E8E1] hover:border-[#25D366]/50 hover:text-[#16A34A] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Store image with rating badge */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/about-store.jpg"
                  alt="City Enterprises paint store interior — colour consultation area"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Rating overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/96 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-[#E8E8E1] shadow-sm">
                <div className="shrink-0 text-center">
                  <p className="text-2xl font-bold text-[#111827] leading-none">4.2</p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[1,2,3,4].map(i => (
                      <Star key={i} className="w-3 h-3 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                    <Star className="w-3 h-3 text-[#E8E8E1] fill-[#E8E8E1]" />
                  </div>
                </div>
                <div className="border-l border-[#E8E8E1] pl-4">
                  <p className="text-xs font-semibold text-[#111827]">Customer Rating</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">Based on 25 Google reviews</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D9232E] hover:underline mt-0.5 inline-block"
                  >
                    See reviews →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
