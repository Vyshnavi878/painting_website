import React from 'react';
import {
  Paintbrush,
  Droplets,
  Sparkles,
  Wrench,
  Search,
  CheckCircle,
  Palette,
  MapPin,
  HeartHandshake,
  Layers,
  Store,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';

export default function AboutPage() {
  // Section 3: What We Offer (4 cards)
  const offerings = [
    {
      icon: <Paintbrush className="w-6 h-6 text-[#D9232E]" />,
      title: 'Interior & Exterior Paints',
      description:
        'A full selection of genuine Asian Paints emulsions, from washable luxury finishes like Royale to resilient exterior weather coats like Apex.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#D9232E]" />,
      title: 'Waterproofing Solutions',
      description:
        'Specialized SmartCare damp-proof treatments, roof sealants, and crack-bridging primers to protect walls from moisture and seepage.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D9232E]" />,
      title: 'Wood & Metal Finishes',
      description:
        'Clear WoodTech polyurethane coats, wood stains, and glossy enamels that shield wooden doors, windows, and metal railings.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#D9232E]" />,
      title: 'Painting Tools & Accessories',
      description:
        'Essential painting gear including professional rollers, synthetic brushes, masking tapes, sandpaper, and surface scrapers.',
    },
  ];

  // Section 4: Our Approach (4 steps)
  const approachSteps = [
    {
      number: '01',
      icon: <Search className="w-5 h-5 text-[#D9232E]" />,
      title: 'Understand Your Requirement',
      description:
        'We take the time to understand your project — whether it is a fresh wall, repainting, interior living area, or exterior facade dealing with sun and rain.',
    },
    {
      number: '02',
      icon: <CheckCircle className="w-5 h-5 text-[#D9232E]" />,
      title: 'Suggest Suitable Products',
      description:
        'We guide you to the right balance of primer, putty, and topcoats designed for your specific surface condition and durability needs.',
    },
    {
      number: '03',
      icon: <Palette className="w-5 h-5 text-[#D9232E]" />,
      title: 'Help with Colour & Product Selection',
      description:
        'We provide physical Asian Paints colour shade fandecks and sample cards so you can see shades clearly under your own lighting conditions.',
    },
    {
      number: '04',
      icon: <Store className="w-5 h-5 text-[#D9232E]" />,
      title: 'Provide Local Support',
      description:
        'We prepare custom tints instantly in-store, estimate required litres accurately to prevent waste, and remain available as your painting progresses.',
    },
  ];

  // Section 6: Why Customers Choose Us (4 cards)
  const whyChooseUs = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#D9232E]" />,
      title: 'Helpful Product Guidance',
      description:
        'Practical, honest advice to help you choose the right paint formulation and surface preparation without technical jargon.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#D9232E]" />,
      title: 'Wide Product Selection',
      description:
        'A comprehensive stock of Asian Paints primers, interior paints, exterior coatings, and waterproofing chemicals ready in-store.',
    },
    {
      icon: <Store className="w-6 h-6 text-[#D9232E]" />,
      title: 'Convenient Local Store',
      description:
        'Centrally situated in the local market, making it easy to drop in, consult on shades, pick up materials, or grab extra supplies.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D9232E]" />,
      title: 'Customer-Focused Service',
      description:
        'We treat every customer with equal attention and care, whether you need a single litre of enamel or paint for a multi-room home.',
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          1. OUR STORY
          Clean two-column section:
          - Left: Store visual image
          - Right: Story content as local paint dealer/store (no fake statistics/years)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E1] shadow-soft-lg bg-[#F5F5F0]">
                <img
                  src="/about-store.jpg"
                  alt="City Enterprises paint showroom and colour consultation studio"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E8E8E1] flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-[#1F2937]">
                    <Logo variant="badge" to={false} className="h-8 w-auto" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#6B7280]">Official Store Showroom</span>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5 text-[#4B5563] text-sm sm:text-base leading-relaxed">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9232E] uppercase tracking-wider">
                <span>Our Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight leading-snug">
                A Neighborhood Paint Store Built on Genuine Guidance
              </h2>

              <p>
                <strong>City Enterprises</strong> is a dedicated local paint store established to serve homeowners, builders, and painting contractors in our community. We believe that choosing paint should be an easy, transparent, and enjoyable experience.
              </p>

              <p>
                As an authorized dealer for Asian Paints, our shelves are stocked with authentic, factory-sealed products. Rather than just handing over a can of paint, we work closely with our customers to understand wall conditions, moisture concerns, and room lighting to suggest the most suitable products.
              </p>

              <p>
                Whether you are refreshing a single room, sealing a terrace against monsoon dampness, or painting a full home, our store is here to provide attentive service and reliable advice every step of the way.
              </p>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md">
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE OFFER
          4 Clean Cards:
          - Interior & Exterior Paints
          - Waterproofing Solutions
          - Wood & Metal Finishes
          - Painting Tools & Accessories
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Product Portfolio"
            title="What We Offer"
            subtitle="From decorative finishes to heavy-duty protective systems, we stock comprehensive solutions for every surface."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
              <Card key={idx} hoverEffect padding="md" className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center mb-4 shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-[#F0F0EA]">
                  <span className="text-xs font-semibold text-[#D9232E]">In-Store Availability</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR APPROACH
          Explain 4 steps:
          - Understand the customer's requirement
          - Suggest suitable products
          - Help with colour/product selection
          - Provide local support
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="How We Work"
            title="Our Approach"
            subtitle="We keep the process clear and organized so you get dependable results without guesswork."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBF9] rounded-2xl border border-[#E8E8E1] p-6 flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1 hover:shadow-soft-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FEECEE] flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-xl font-extrabold text-[#E8E8E1] font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BRAND SECTION
          Heading: "Trusted Paint Solutions"
          Mention Asian Paints products without presenting as corporate site.
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F5F5F0] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E8E8E1] p-8 sm:p-12 lg:p-14 shadow-soft-sm max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEECEE] text-[#D9232E] mb-4">
              <span>Authorized Retailer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight mb-4">
              Trusted Paint Solutions
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed mb-6 max-w-2xl mx-auto">
              City Enterprises proudly supplies Asian Paints products to our local customers. As an independent authorized dealer, we stock recognized formulations including Royale luxury emulsions, Apex exterior weathercoats, and SmartCare waterproofing chemicals.
            </p>

            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-2xl mx-auto">
              When you purchase from City Enterprises, you receive genuine, sealed products combined with the dedicated attention of a friendly local dealer who takes the time to answer your questions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button to="/products" variant="primary" size="md">
                Browse Products
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Store Location & Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHY CUSTOMERS CHOOSE US
          Cards:
          - Helpful Product Guidance
          - Wide Product Selection
          - Convenient Local Store
          - Customer-Focused Service
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Customer Experience"
            title="Why Customers Choose Us"
            subtitle="A dependable local store focused on honest advice, quality materials, and straightforward support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBF9] rounded-2xl border border-[#E8E8E1] p-6 flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEECEE] flex items-center justify-center mb-4 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FINAL CTA
          "Have a painting requirement?"
          Buttons:
          - Contact Us
          - Visit Store
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-soft-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Have a painting requirement?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Visit City Enterprises or give us a call. We will help you select the right paint, find the right colours, and calculate the materials you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto px-8">
                Contact Us
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                leftIcon={<MapPin className="w-4 h-4 text-[#D9232E]" />}
                className="w-full sm:w-auto px-8"
              >
                Visit Store
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
