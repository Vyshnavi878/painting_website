import React from 'react';
import {
  Palette,
  Home,
  SunMedium,
  Droplets,
  Sparkles,
  Compass,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Carousel from '../components/common/Carousel';

export default function ServicesPage() {
  const whatsappUrl =
    'https://wa.me/919876543210?text=' +
    encodeURIComponent('Hello City Enterprises! I would like guidance on paint products and solutions for my project.');

  // Section 2: Main Service Cards (6 cards)
  const serviceCards = [
    {
      icon: <Palette className="w-6 h-6 text-[#D9232E]" />,
      title: 'Colour Guidance',
      desc: 'Help customers explore colours suitable for different spaces.',
      details: [
        'Browse Asian Paints physical shade fandecks in-store',
        'Compare undertones under warm, cool, and natural light',
        'Pair main wall colours with balanced ceiling and trim tones',
      ],
      badge: 'Shade Exploration',
    },
    {
      icon: <Home className="w-6 h-6 text-[#D9232E]" />,
      title: 'Interior Painting Solutions',
      desc: 'Products and guidance for interior walls.',
      details: [
        'Guidance on washable luxury sheens (Royale) versus smooth matt (Apcolite)',
        'Selecting appropriate interior wall primers and smooth putties',
        'Solutions for high-traffic hallways, bedrooms, and living areas',
      ],
      badge: 'Living Spaces',
    },
    {
      icon: <SunMedium className="w-6 h-6 text-[#D9232E]" />,
      title: 'Exterior Painting Solutions',
      desc: 'Solutions designed for exterior surfaces.',
      details: [
        'Recommendations for tropical heat, rainfall, and dust resistance',
        'Exterior weather coats like Apex Ultima with anti-algal bio-packs',
        'Guidance on exterior masonry priming and crack prevention',
      ],
      badge: 'Facade Protection',
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#D9232E]" />,
      title: 'Waterproofing Solutions',
      desc: 'Products for moisture and leakage protection requirements.',
      details: [
        'Target SmartCare elastomeric coatings for roof and terrace seepage',
        'Identifying products for bathroom dampness and rising efflorescence',
        'Fiber-reinforced crack fillers for permanent plaster sealing',
      ],
      badge: 'Moisture Defense',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D9232E]" />,
      title: 'Wood & Metal Finishes',
      desc: 'Solutions for doors, furniture, grills, gates and metal surfaces.',
      details: [
        'Clear WoodTech polyurethane coats and stains for natural timber',
        'Corrosion-resistant anti-rust primers and high-gloss enamels for grills',
        'Durable protective finishes for window trims and gates',
      ],
      badge: 'Wood & Metal',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D9232E]" />,
      title: 'Product Assistance',
      desc: 'Help customers identify suitable products for their requirements.',
      details: [
        'Assisting with square footage and litre estimation to prevent waste',
        'Matching surface condition with correct primer and putty systems',
        'Instant computerized tinting for over 2,200 Asian Paints shades',
      ],
      badge: 'In-Store Support',
    },
  ];

  // Section 3: How We Help (3-step process)
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Requirement',
      desc: 'Share your space details with us in store or via phone — whether it is an interior room, exterior wall, terrace leakage, or metal grill repainting.',
      icon: <MessageSquare className="w-5 h-5 text-[#D9232E]" />,
    },
    {
      step: '02',
      title: 'Get Product Guidance',
      desc: 'We explain the right combinations of primers, putties, and topcoats suitable for your surface condition, moisture levels, and budget.',
      icon: <HelpCircle className="w-5 h-5 text-[#D9232E]" />,
    },
    {
      step: '03',
      title: 'Choose the Right Solution',
      desc: 'Select your preferred shades, verify exact pack sizes, and have your genuine Asian Paints materials prepared fresh in our store.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#D9232E]" />,
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          INTRODUCTORY SECTION
          ========================================================================= */}
      <section className="bg-[#FBFBF9] border-b border-[#E8E8E1] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E]"></span>
            <span>Guidance & Solutions</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight mb-2.5 sm:mb-3 leading-tight">
            Painting & Colour Solutions
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Get practical guidance for choosing paints, colours, finishes, and solutions for your interior and exterior painting needs.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. MAIN SERVICE CARDS (6 Cards)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Guidance Areas"
            title="Comprehensive Product Solutions"
            subtitle="Explore how City Enterprises assists you across each stage of your painting and surface maintenance project."
          />

          <Carousel ariaLabel="Comprehensive product solutions carousel">
            {serviceCards.map((srv, idx) => (
              <Card
                key={idx}
                hoverEffect
                padding="md"
                data-carousel-card="true"
                className="w-[82%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {srv.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F5F5F0] text-[#4B5563] border border-[#E8E8E1]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#D9232E] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {srv.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9232E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F0F0EA] flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Available In Store</span>
                  <span className="font-semibold text-[#D9232E]">City Enterprises</span>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>

      {/* =========================================================================
          3. HOW WE HELP (3-Step Process)
          01: Tell Us Your Requirement
          02: Get Product Guidance
          03: Choose the Right Solution
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Simple Process"
            title="How We Help"
            subtitle="A transparent, three-step approach to finding the right products for your home or project."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E8E1] p-6 sm:p-8 shadow-soft-sm flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-soft-md relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FEECEE] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#E8E8E1] font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#F0F0EA] flex items-center gap-1.5 text-xs text-[#D9232E] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>In-Store Guidance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICE CTA
          "Tell Us What You're Planning"
          Buttons: Contact Us, WhatsApp Us
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 lg:p-14 text-center max-w-3xl mx-auto shadow-soft-lg">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#374151] text-[#EAB308] mb-4">
              <span>Local Store Support</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Tell Us What You're Planning
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you have questions about wall preparation, want to explore colour options, or need product recommendations for your space, we are ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto px-8">
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
                WhatsApp Us
              </Button>
            </div>

            <div className="pt-6 mt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D9232E]" />
                <span>Shop No. 14, Commercial Market, Main Road, City Center, Vijayawada, Andhra Pradesh – 520004</span>
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
