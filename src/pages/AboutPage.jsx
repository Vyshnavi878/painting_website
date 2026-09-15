import React from 'react';
import {
  Paintbrush,
  Droplets,
  Sparkles,
  Wrench,
  Search,
  CheckCircle,
  Palette,
  Store,
  HeartHandshake,
  Layers,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Truck,
  Star,
} from 'lucide-react';
import Button from '../components/common/Button';

const STORE_PHONE     = '0866 245 2828';
const STORE_PHONE_TEL = 'tel:+918662452828';
const MAPS_URL        = 'https://maps.app.goo.gl/TuC9RAoaZZqJkP3y7';

// What we stock — presented as a clean list, not 4 repeated cards
const offerings = [
  {
    icon: <Paintbrush className="w-5 h-5 text-[#D9232E]" />,
    title: 'Interior & Exterior Paints',
    description:
      'Genuine Asian Paints emulsions from washable Royale luxury finishes to resilient Apex exterior weathercoats.',
  },
  {
    icon: <Droplets className="w-5 h-5 text-[#D9232E]" />,
    title: 'Waterproofing Solutions',
    description:
      'SmartCare damp-proof treatments, roof sealants, and crack-bridging primers for leaking terraces and damp patches.',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#D9232E]" />,
    title: 'Wood & Metal Finishes',
    description:
      'WoodTech polyurethane coats, wood stains, and glossy enamels for doors, windows, and metal railings.',
  },
  {
    icon: <Wrench className="w-5 h-5 text-[#D9232E]" />,
    title: 'Tools & Accessories',
    description:
      'Professional rollers, synthetic brushes, masking tapes, sandpaper, and surface scrapers.',
  },
];

// Our approach — numbered steps
const approachSteps = [
  {
    number: '01',
    icon: <Search className="w-5 h-5 text-[#D9232E]" />,
    title: 'Understand your walls',
    description:
      'We ask about your surface — fresh plaster, repainting, damp walls, exterior facing rain. The right diagnosis matters more than the can of paint.',
  },
  {
    number: '02',
    icon: <CheckCircle className="w-5 h-5 text-[#D9232E]" />,
    title: 'Suggest the right system',
    description:
      'We guide you to the correct primer, putty, and topcoat combination for your specific condition and durability requirement.',
  },
  {
    number: '03',
    icon: <Palette className="w-5 h-5 text-[#D9232E]" />,
    title: 'Help you choose colours',
    description:
      'Physical Asian Paints shade fandecks and sample cards are available in-store. See shades under your room\'s natural lighting.',
  },
  {
    number: '04',
    icon: <Store className="w-5 h-5 text-[#D9232E]" />,
    title: 'Stay available through your project',
    description:
      'Tints mixed instantly in-store. Quantity estimates to prevent waste. We remain reachable by call or WhatsApp as your painting progresses.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ================================================================
          1. OUR STORY — two-column, store image + story
          ================================================================ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Store image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/about-store.jpg"
                alt="City Enterprises paint showroom in Gunadala, Vijayawada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Story text */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-4">
                Our Story
              </p>
              <h1 className="font-display text-3xl sm:text-4xl text-[#111827] leading-snug mb-5">
                A neighbourhood paint store built on genuine guidance.
              </h1>

              <div className="space-y-4 text-[#6B7280] leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-[#111827] font-semibold">City Enterprises</strong> is a dedicated local paint store in Gunadala, Vijayawada. We believe choosing paint should be transparent and easy — not overwhelming.
                </p>
                <p>
                  As an authorized Asian Paints dealer, our shelves carry authentic, factory-sealed products. Rather than just handing over a can, we work closely with customers to understand wall conditions, moisture concerns, and room lighting before suggesting products.
                </p>
                <p>
                  Whether you're refreshing a single room or sealing a terrace before the monsoon, our store is here with honest advice and the right materials — every step of the way.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-6 border-t border-[#E8E8E1]">
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  Authorized dealer
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <Palette className="w-3.5 h-3.5 text-[#D9232E]" />
                  In-store tinting
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <Truck className="w-3.5 h-3.5 text-[#6B7280]" />
                  Home delivery
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                  <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                  4.2★ Google rating
                </span>
              </div>

              <div className="mt-8">
                <Button to="/contact" variant="primary" size="md">
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. WHAT WE OFFER — clean list, not 4 repeated cards
          ================================================================ */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-2">
              Product Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111827]">
              What we carry.
            </h2>
          </div>

          {/* 2-column grid of offering items (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#FEECEE] flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/products" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Browse All Products
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. OUR APPROACH — numbered steps, editorial feel
          ================================================================ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D9232E] mb-2">
              How We Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111827]">
              Our approach.
            </h2>
            <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
              We keep the process clear so you get dependable results without guesswork.
            </p>
          </div>

          {/* Steps as a connected list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#E8E8E1] font-mono leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-sm font-semibold text-[#111827] mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. FINAL CTA — store details + contact
          ================================================================ */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: CTA copy */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#111827] mb-4">
                Have a painting requirement?
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-sm sm:text-base">
                Visit City Enterprises or give us a call. We'll help you select the right paint, find the right colours, and calculate what you need.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button to="/contact" variant="primary" size="md">
                  Contact Us
                </Button>
                <Button
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  leftIcon={<MapPin className="w-4 h-4 text-[#D9232E]" />}
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Right: store contact info */}
            <div className="bg-white rounded-xl border border-[#E8E8E1] p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D9232E] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-[#111827]">City Enterprises</p>
                  <p className="text-[#6B7280]">17- Joseph Complex Opportunity,</p>
                  <p className="text-[#6B7280]">Ramgopal Theatre Euro Road, Gunadala,</p>
                  <p className="text-[#6B7280]">Vijayawada, Andhra Pradesh 520004</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D9232E] shrink-0" />
                <a href={STORE_PHONE_TEL} className="text-sm font-semibold text-[#111827] hover:text-[#D9232E] transition-colors">
                  {STORE_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                <p className="text-sm text-[#6B7280]">Open until <span className="font-medium text-[#111827]">9:30 PM</span></p>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#16A34A] shrink-0" />
                <p className="text-sm text-[#6B7280]">Home delivery available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
