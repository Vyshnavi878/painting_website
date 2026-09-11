import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Palette,
  Sparkles,
  Droplets,
  Paintbrush,
  Layers,
  Wrench,
  CheckCircle2,
  ChevronRight,
  Award,
  HelpCircle,
  Compass,
  Home as HomeIcon,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Carousel from '../components/common/Carousel';

export default function HomePage() {
  // Room category tabs for Section 6 (Colour Inspiration)
  const [activeRoom, setActiveRoom] = useState('living');

  // WhatsApp click handler helper
  const whatsappUrl =
    'https://wa.me/919876543210?text=' +
    encodeURIComponent('Hello City Enterprises, I would like to enquire about paints and color consultation.');

  // Product categories for Section 4
  const productCategories = [
    {
      title: 'Interior Paints',
      desc: 'Royale, Apcolite & Tractor emulsions for living rooms, bedrooms, and ceilings.',
      icon: <HomeIcon className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Luxury & Washable',
    },
    {
      title: 'Exterior Paints',
      desc: 'Apex Ultima & Weathercoat shields designed for extreme tropical sun, dust, and rain.',
      icon: <Layers className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Weather Defense',
    },
    {
      title: 'Primers',
      desc: 'TruCare exterior and interior primers ensuring superior adhesion and a smooth base.',
      icon: <Paintbrush className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Base Preparation',
    },
    {
      title: 'Waterproofing',
      desc: 'SmartCare Damp Proof and crack sealers for roofs, parapets, and damp walls.',
      icon: <Droplets className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Leakage Protection',
    },
    {
      title: 'Wood & Metal Finishes',
      desc: 'WoodTech PU finishes and high-gloss enamels for doors, grills, and wooden furniture.',
      icon: <Sparkles className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Gloss & Matte',
    },
    {
      title: 'Painting Tools & Accessories',
      desc: 'Precision rollers, masking tapes, sandpaper, scrapers, and professional brushes.',
      icon: <Wrench className="w-6 h-6 text-[#D9232E]" />,
      badge: 'Application Essentials',
    },
  ];

  // Room colour data for Section 6
  const roomPalettes = {
    living: {
      label: 'Living Room',
      description: 'Inviting, luminous tones that enhance natural lighting and welcome guests.',
      swatches: [
        { name: 'Morning Glow', code: '0765', hex: '#FAF6EE', finish: 'Royale Luxury Matt' },
        { name: 'Soft Ivory', code: '0321', hex: '#F5EFE0', finish: 'Apcolite Premium' },
        { name: 'Champagne Sand', code: '0418', hex: '#EAE1CE', finish: 'Royale Matt' },
        { name: 'Warm Terracotta', code: '7921', hex: '#BD5338', finish: 'Feature Wall Accent' },
      ],
    },
    bedroom: {
      label: 'Bedroom',
      description: 'Restful, soothing pastels and grounding neutrals for a serene night’s rest.',
      swatches: [
        { name: 'Misty Sage', code: '7618', hex: '#D5DFD3', finish: 'Royale Shyne' },
        { name: 'Serene Slate', code: '8312', hex: '#CCD3D6', finish: 'Apcolite Matt' },
        { name: 'Pale Cashmere', code: '0912', hex: '#ECE8E1', finish: 'Royale Luxury' },
        { name: 'Dusty Rose', code: '8114', hex: '#DDBBB7', finish: 'Royale Matt' },
      ],
    },
    kitchen: {
      label: 'Kitchen',
      description: 'Fresh, easy-to-clean washable sheens that brighten food preparation zones.',
      swatches: [
        { name: 'Linen White', code: '0981', hex: '#F6F5EE', finish: 'Royale Health Shield' },
        { name: 'Sunny Ochre', code: '7955', hex: '#E5A93C', finish: 'Apcolite Gloss' },
        { name: 'Olive Breeze', code: '7645', hex: '#BAC4A8', finish: 'Teflon Washable' },
        { name: 'Stone Grey', code: '8294', hex: '#D2D7D2', finish: 'Royale Matt' },
      ],
    },
    exterior: {
      label: 'Exterior',
      description: 'Durable architectural mineral tones formulated to resist dirt pickup and rain.',
      swatches: [
        { name: 'Desert Sand', code: '7891', hex: '#DDCBB3', finish: 'Apex Ultima Protek' },
        { name: 'Heritage Ochre', code: '7908', hex: '#9E5B37', finish: 'Apex Weatherproof' },
        { name: 'Monsoon Slate', code: '8402', hex: '#687175', finish: 'Apex Ultima' },
        { name: 'Alabaster White', code: '0101', hex: '#F2EFE9', finish: 'Apex Dust Proof' },
      ],
    },
  };

  // Services for Section 7
  const servicesData = [
    {
      icon: <Palette className="w-6 h-6 text-[#D9232E]" />,
      title: 'Colour Guidance',
      desc: 'Personalized shade matching and palette advice to suit your lighting, flooring, and interior style.',
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-[#D9232E]" />,
      title: 'Painting Solutions',
      desc: 'System recommendations for new walls, repainting, and specialized texture coatings.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#D9232E]" />,
      title: 'Waterproofing Solutions',
      desc: 'Moisture diagnostics and prescriptive SmartCare treatments for leaking terraces and damp patches.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D9232E]" />,
      title: 'Product Assistance',
      desc: 'Accurate surface measurement and quantity calculations to avoid excess purchases and save costs.',
    },
  ];

  // Why choose trust points for Section 8
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D9232E]" />,
      title: 'Quality Products',
      desc: '100% genuine Asian Paints sourced from fresh manufacturing batches with official warranties.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#D9232E]" />,
      title: 'Helpful Guidance',
      desc: 'Decades of local paint experience. We advise on real wall conditions, dampness, and durability.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#D9232E]" />,
      title: 'Wide Product Range',
      desc: 'From budget-friendly Tractor emulsions to luxury Royale finishes and industrial primers.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#D9232E]" />,
      title: 'Local & Convenient',
      desc: 'Centrally located showroom with immediate in-store computerized tinting while you wait.',
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBFBF9] via-[#F8F7F2] to-[#FBFBF9] border-b border-[#E8E8E1] pt-8 sm:pt-14 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-5">
                Bring Your Walls to <span className="text-[#D9232E]">Life</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-xl">
                At <strong>City Enterprises</strong>, we supply genuine Asian Paints finishes, specialized waterproofing systems, and personalized colour consultation for homeowners, builders, and contractors across the city.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                <Button
                  to="/products"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Explore Products
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  leftIcon={<MapPin className="w-4 h-4 text-[#D9232E]" />}
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust Micro-Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8E8E1] w-full max-w-lg text-xs text-[#374151]">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#111827]">100% Genuine</span>
                  <span className="text-[#6B7280]">Official Dealer</span>
                </div>
                <div className="flex flex-col border-x border-[#E8E8E1] px-3">
                  <span className="font-bold text-sm text-[#111827]">2,200+ Shades</span>
                  <span className="text-[#6B7280]">Digital Tinting</span>
                </div>
                <div className="flex flex-col pl-3">
                  <span className="font-bold text-sm text-[#111827]">In-Store</span>
                  <span className="text-[#6B7280]">Expert Advice</span>
                </div>
              </div>
            </div>

            {/* Right Desktop Visual Area */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Image Container with Soft Shadow and Rounded Corners */}
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E1] shadow-soft-xl bg-white aspect-[4/3] sm:aspect-[4/3]">
                  <img
                    src="/hero-interior.jpg"
                    alt="Warm sunlit living room with genuine Asian Paints wall finishes"
                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Dealer Trust Tag */}
                <div className="absolute -bottom-3 left-2 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#E8E8E1] shadow-soft-lg flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-16px)] sm:max-w-none">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEECEE] flex items-center justify-center text-[#D9232E] shrink-0">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">In-Store Tinting System</div>
                    <div className="text-[10px] sm:text-[11px] text-[#6B7280]">Mix exact Asian Paints shades in minutes</div>
                  </div>
                </div>

                {/* Floating Small Highlight Pill */}
                <div className="absolute top-2.5 right-2.5 sm:-top-4 sm:-right-4 bg-[#1F2937] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EAB308]"></span>
                  <span>Royale & Apex Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. QUICK CONTACT STRIP
          Three distinct actions: Call Us, WhatsApp Us, Visit Store
          ========================================================================= */}
      <section className="py-8 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Action 1: Call Us */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FBFBF9] hover:bg-[#F5F5F0] border border-[#E8E8E1] hover:border-[#D9232E]/30 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#D9232E]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEECEE] group-hover:bg-[#D9232E] group-hover:text-white text-[#D9232E] flex items-center justify-center shrink-0 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-[#D9232E] uppercase tracking-wide block">
                  Quick Phone Call
                </span>
                <span className="text-base font-bold text-[#111827] block truncate">
                  +91 98765 43210
                </span>
                <span className="text-xs text-[#6B7280] block">Mon–Sat: 9:00 AM – 8:30 PM</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#D9232E] transition-colors shrink-0" />
            </a>

            {/* Action 2: WhatsApp Us */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FBFBF9] hover:bg-[#F5F5F0] border border-[#E8E8E1] hover:border-[#25D366]/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] group-hover:bg-[#25D366] group-hover:text-white text-[#16A34A] flex items-center justify-center shrink-0 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-[#16A34A] uppercase tracking-wide block">
                  Chat on WhatsApp
                </span>
                <span className="text-base font-bold text-[#111827] block truncate">
                  Instant Inquiry
                </span>
                <span className="text-xs text-[#6B7280] block">Send photos & questions</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#16A34A] transition-colors shrink-0" />
            </a>

            {/* Action 3: Visit Store */}
            <Link
              to="/contact"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FBFBF9] hover:bg-[#F5F5F0] border border-[#E8E8E1] hover:border-[#D9232E]/30 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#D9232E]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEF9C3] group-hover:bg-[#EAB308] group-hover:text-black text-[#854D0E] flex items-center justify-center shrink-0 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-[#854D0E] uppercase tracking-wide block">
                  Showroom Location
                </span>
                <span className="text-base font-bold text-[#111827] block truncate">
                  Shop No. 14, Commercial Market
                </span>
                <span className="text-xs text-[#6B7280] block">Main Road, City Center, Vijayawada – 520004</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#854D0E] transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT PREVIEW
          Short introduction to City Enterprises + "Know More" button
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F0] rounded-3xl border border-[#E8E8E1] p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#D9232E] border border-[#E8E8E1] mb-3">
                  <span>About City Enterprises</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight mb-4 leading-tight">
                  Your Reliable Paint Partner for Homes and Projects
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-4">
                  For years, <strong>City Enterprises</strong> has provided genuine paints, primers, and waterproof coatings to our local community. Whether you are redecorating a single bedroom or managing an entire apartment building, we provide honest product recommendations and certified quality.
                </p>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                  As an authorized retail partner for Asian Paints, we combine manufacturer reliability with the personalized, friendly care of a local neighborhood store.
                </p>
                <div>
                  <Button to="/about" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Know More
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E8E1] shadow-soft-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEECEE] flex items-center justify-center text-[#D9232E] shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827]">Authorized Asian Paints Dealer</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5">Direct distribution stock with manufacturer authenticity.</p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E8E1] shadow-soft-sm flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0 mt-0.5">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827]">Computerized In-Store Tinting</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5">Instant mixing across thousands of Asian Paints colour codes.</p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E8E1] shadow-soft-sm flex items-start gap-3.5 sm:col-span-2 lg:col-span-1">
                  <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827]">Painter & Contractor Guidance</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5">Assistance with reliable local applicators and estimators.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PRODUCT CATEGORIES
          6 Responsive cards with icon, title, description, and "Explore" action
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Product Categories"
            title="Complete Range of Paints & Finishes"
            subtitle="Browse our comprehensive selection of interior paints, exterior weather coats, waterproofing systems, and professional tools."
          />

          <Carousel ariaLabel="Complete range of paints and finishes carousel">
            {productCategories.map((cat, idx) => (
              <Card
                key={idx}
                hoverEffect
                padding="md"
                data-carousel-card="true"
                className="w-[82%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)] shrink-0 snap-start flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F5F5F0] text-[#4B5563] border border-[#E8E8E1]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#D9232E] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F0EA] flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">Available In Store</span>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#D9232E] hover:underline"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>

      {/* =========================================================================
          5. ASIAN PAINTS HIGHLIGHT
          Brand-focused section: "Quality Products for Every Space"
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Subtle decorative background circle */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#374151] text-[#EAB308] mb-4">
                <span>Authorized Asian Paints Retail Partner</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                Quality Products for Every Space
              </h2>

              <p className="text-base text-gray-300 leading-relaxed mb-6">
                City Enterprises proudly stocks the full portfolio of Asian Paints innovations. From Royale’s Teflon-protected luxury washable walls to Apex Ultima’s 10-year weather defense, SmartCare waterproofing membranes, and WoodTech polyurethane varnishes — get genuine products right in your neighborhood.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-xs text-gray-300">
                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <span className="block font-bold text-white text-sm">Royale</span>
                  <span>Luxury Interior</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <span className="block font-bold text-white text-sm">Apex Ultima</span>
                  <span>Weather Protection</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <span className="block font-bold text-white text-sm">SmartCare</span>
                  <span>Dampness Defense</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                  <span className="block font-bold text-white text-sm">WoodTech</span>
                  <span>Wood Finishes</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button to="/products" variant="primary" size="lg">
                  View Products
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Visit Showroom
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. COLOUR INSPIRATION PREVIEW
          "Find a Colour That Feels Like You" + Room categories + CTA: "Explore Colours"
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Asian Paints Colour Worlds"
            title="Find a Colour That Feels Like You"
            subtitle="Explore curated shade groupings designed for Indian homes, natural sunlight conditions, and distinctive room atmospheres."
          />

          {/* Room Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {Object.keys(roomPalettes).map((roomKey) => (
              <button
                key={roomKey}
                type="button"
                onClick={() => setActiveRoom(roomKey)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#D9232E] ${
                  activeRoom === roomKey
                    ? 'bg-[#D9232E] text-white shadow-sm'
                    : 'bg-[#F5F5F0] text-[#4B5563] hover:text-[#111827] hover:bg-[#EBEBE3] border border-[#E8E8E1]'
                }`}
              >
                {roomPalettes[roomKey].label}
              </button>
            ))}
          </div>

          {/* Room Description */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-sm text-[#4B5563]">
              {roomPalettes[activeRoom].description}
            </p>
          </div>

          {/* Swatch Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {roomPalettes[activeRoom].swatches.map((swatch, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBF9] rounded-2xl border border-[#E8E8E1] p-3.5 sm:p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-soft-md"
              >
                {/* Large Colour Chip */}
                <div
                  className="w-full aspect-square rounded-xl border border-black/10 shadow-xs mb-3 transition-transform hover:scale-102"
                  style={{ backgroundColor: swatch.hex }}
                />
                <h4 className="text-sm font-bold text-[#111827] truncate">{swatch.name}</h4>
                <p className="text-xs text-[#6B7280] font-mono mt-0.5">Code: {swatch.code}</p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-[#D9232E] bg-[#FEECEE] px-2 py-0.5 rounded-md">
                  {swatch.finish}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="text-center">
            <Button
              to="/colours"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Colours
            </Button>
            <p className="text-xs text-[#6B7280] mt-3">
              Visit City Enterprises to view real physical Asian Paints Colour Spectra shade cards.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SERVICES PREVIEW
          Show 4 cards: Colour Guidance, Painting Solutions, Waterproofing Solutions, Product Assistance
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Store Expertise"
            title="Comprehensive Services at City Enterprises"
            subtitle="We don't just sell paint; we support your entire painting journey from shade selection to contractor connect."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {servicesData.map((srv, idx) => (
              <Card key={idx} hoverEffect padding="md" className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center mb-4 shrink-0">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-2">{srv.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{srv.desc}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D9232E] hover:underline"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button to="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. WHY CHOOSE CITY ENTERPRISES
          Show 4 trust points: Quality Products, Helpful Guidance, Wide Range, Local & Convenient
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why City Enterprises"
            title="Why Homeowners and Contractors Trust Us"
            subtitle="Experience the convenience of personalized service, guaranteed authenticity, and complete paint expertise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBFBF9] border border-[#E8E8E1] flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center mb-4 shrink-0">
                  {point.icon}
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2">{point.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CONTACT CTA
          "Planning to Paint or Renovate?" + "Talk to City Enterprises..." + Buttons: Contact Us, WhatsApp
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-soft-xl border border-gray-800">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#374151] text-[#EAB308] mb-4">
              <span>Visit Our Local Paint Store</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Planning to Paint or Renovate?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Talk to <strong>City Enterprises</strong> and find the right products for your space. Bring your questions, room dimensions, or colour ideas and let our team assist you.
            </p>

            {/* CTAs: Contact Us & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8"
              >
                Contact Us
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                className="w-full sm:w-auto px-8"
              >
                WhatsApp
              </Button>
            </div>

            {/* Quick Visit Metadata */}
            <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D9232E]" />
                <span>Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada, Andhra Pradesh – 520004</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#EAB308]" />
                <span>Mon–Sat: 9:00 AM – 8:30 PM | Sun: 10:00 AM – 2:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-gray-300" />
                <a href="tel:+919876543210" className="hover:text-white underline">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
