import React, { useState } from 'react';
import {
  Palette,
  Sparkles,
  Home,
  Bed,
  Utensils,
  Briefcase,
  Layers,
  MapPin,
  Eye,
  Check,
  ChevronRight,
  Sun,
  ShieldCheck,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Carousel from '../components/common/Carousel';
import {
  ROOMS,
  PALETTES,
  FEATURED_COMBINATIONS,
  PREVIEW_SHADES,
} from '../data/coloursData';

export default function ColoursPage() {
  const [selectedRoom, setSelectedRoom] = useState('all');
  const [previewShade, setPreviewShade] = useState(PREVIEW_SHADES[0]);
  const [previewRoomType, setPreviewRoomType] = useState('living');

  // Filter palettes by selected room
  const filteredPalettes =
    selectedRoom === 'all'
      ? PALETTES
      : PALETTES.filter((p) => p.room === selectedRoom);

  // Helper icons for room selector
  const getRoomIcon = (id) => {
    switch (id) {
      case 'living':
        return <Layers className="w-4 h-4" />;
      case 'bedroom':
        return <Bed className="w-4 h-4" />;
      case 'kitchen':
        return <Utensils className="w-4 h-4" />;
      case 'exterior':
        return <Home className="w-4 h-4" />;
      case 'office':
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          INTRODUCTORY SECTION
          ========================================================================= */}
      <section className="bg-[#FBFBF9] border-b border-[#E8E8E1] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEECEE] text-[#D9232E] border border-[#D9232E]/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E]"></span>
            <span>Colour Inspiration</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight mb-2.5 sm:mb-3 leading-tight">
            Find Your Perfect Colour
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Explore beautiful colour options and discover shades that bring the right mood and character to your home or space.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. ROOM SELECTOR TABS (Horizontally scrollable on mobile)
          ========================================================================= */}
      <section className="sticky top-[72px] sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8E8E1] py-3.5 sm:py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
            {ROOMS.map((room) => {
              const isActive = selectedRoom === room.id;
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setSelectedRoom(room.id)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#D9232E] min-h-[40px] ${
                    isActive
                      ? 'bg-[#D9232E] text-white shadow-sm'
                      : 'bg-[#F5F5F0] text-[#4B5563] hover:text-[#111827] hover:bg-[#EBEBE3] border border-[#E8E8E1]'
                  }`}
                >
                  <span>{getRoomIcon(room.id)}</span>
                  <span>{room.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COLOUR PALETTE GRID
          Shows visually appealing swatches, palette name, 4-5 shades, and mood label
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBF9] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Curated Palettes"
            title="Harmonious Colour Stories"
            subtitle="Thoughtfully composed shade groupings designed to complement room proportions and natural lighting."
          />

          <Carousel resetKey={selectedRoom} ariaLabel="Harmonious colour stories carousel">
            {filteredPalettes.map((palette) => (
              <Card
                key={palette.id}
                hoverEffect
                padding="md"
                data-carousel-card="true"
                className="w-[82%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Mood Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${palette.moodColor}`}
                    >
                      {palette.mood}
                    </span>
                    <span className="text-[11px] text-[#6B7280] font-medium capitalize">
                      {palette.room}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] mb-2">{palette.name}</h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed mb-5">
                    {palette.description}
                  </p>

                  {/* Swatches Row */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {palette.swatches.map((swatch, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div
                          className="w-full aspect-square rounded-xl border border-black/10 shadow-xs mb-1.5 transition-transform hover:scale-105"
                          style={{ backgroundColor: swatch.hex }}
                          title={swatch.name}
                        />
                        <span className="text-[10px] font-semibold text-[#1F2937] truncate w-full">
                          {swatch.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Asian Paints Tinting</span>
                  <span className="text-[#D9232E] font-medium">In-Store</span>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURED COLOUR COMBINATIONS
          Cards: Warm & Cozy, Calm Neutrals, Modern Earth Tones, Fresh & Bright,
          Elegant Contrast, Nature Inspired
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Designer Pairings"
            title="Featured Colour Combinations"
            subtitle="Pre-tested three-tone systems for base walls, statement accents, and clean trim lines."
          />

          <Carousel ariaLabel="Featured colour combinations carousel">
            {FEATURED_COMBINATIONS.map((combo, idx) => (
              <div
                key={idx}
                data-carousel-card="true"
                className="w-[82%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-[#FBFBF9] rounded-2xl border border-[#E8E8E1] p-5 sm:p-6 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{combo.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5">
                    {combo.description}
                  </p>

                  {/* Visual Three-Tone Strip */}
                  <div className="space-y-2.5 mb-5 bg-white p-3.5 rounded-xl border border-[#E8E8E1]">
                    {/* Base Wall */}
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-lg border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: combo.baseWall.hex }}
                        />
                        <span className="font-semibold text-[#111827]">
                          {combo.baseWall.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Main Walls
                      </span>
                    </div>

                    {/* Accent Wall */}
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-lg border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: combo.accentWall.hex }}
                        />
                        <span className="font-semibold text-[#111827]">
                          {combo.accentWall.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#D9232E] font-medium uppercase tracking-wide">
                        Feature Wall
                      </span>
                    </div>

                    {/* Trim */}
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-lg border border-black/10 shrink-0 shadow-2xs"
                          style={{ backgroundColor: combo.trim.hex }}
                        />
                        <span className="font-semibold text-[#111827]">{combo.trim.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                        Ceiling / Trim
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Ideal for:</span>
                  <span className="font-medium text-[#111827]">{combo.idealFor}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* =========================================================================
          5. SIMPLE INTERACTIVE PREVIEW UI
          Frontend demo room visualizer:
          - Select room type
          - Select colour swatches
          - Change main wall colour in real-time
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F5F5F0] border-b border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Interactive Wall Demo"
            title="Preview Shades on a Wall"
            subtitle="Click on any shade below to see how different wall colours change the ambient mood of the room."
          />

          <div className="bg-white rounded-3xl border border-[#E8E8E1] p-6 sm:p-10 shadow-soft-lg max-w-5xl mx-auto">
            {/* Top Room Type Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E8E8E1]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#111827] uppercase tracking-wider">
                <Eye className="w-4 h-4 text-[#D9232E]" />
                <span>Room Style:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'living', label: 'Living Room' },
                  { id: 'bedroom', label: 'Bedroom' },
                  { id: 'office', label: 'Study & Office' },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setPreviewRoomType(r.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      previewRoomType === r.id
                        ? 'bg-[#111827] text-white'
                        : 'bg-[#F5F5F0] text-[#4B5563] hover:text-[#111827]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Visualizer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Dynamic Illustrated Room Mockup */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E1] aspect-[4/3] bg-[#EFEFEA] shadow-inner flex flex-col justify-end">
                  {/* Dynamic Back Accent Wall */}
                  <div
                    className="absolute inset-0 transition-colors duration-500 ease-in-out"
                    style={{ backgroundColor: previewShade.hex }}
                  >
                    {/* Natural Daylight Gradient from Window */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/30 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Illustrated Architectural Scene Layer */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 pointer-events-none select-none">
                    {/* Top Architectural Elements: Wall Art Frame & Window Frame */}
                    <div className="flex justify-between items-start pt-2">
                      {/* Floating Wall Artwork Frame */}
                      <div className="w-24 sm:w-28 aspect-[3/4] bg-white/90 backdrop-blur-xs rounded-lg border-2 border-stone-800 shadow-md p-2 flex items-center justify-center">
                        <div className="w-full h-full border border-dashed border-stone-400 rounded flex items-center justify-center text-[9px] text-stone-500 font-sans">
                          Art Print
                        </div>
                      </div>

                      {/* Floor Lamp */}
                      <div className="flex flex-col items-center pr-4">
                        <div className="w-10 h-7 bg-stone-100 rounded-t-lg border border-stone-300 shadow-xs" />
                        <div className="w-0.5 h-28 bg-stone-700" />
                        <div className="w-8 h-1.5 bg-stone-800 rounded-full" />
                      </div>
                    </div>

                    {/* Bottom Furniture: Sofa & Flooring */}
                    <div className="w-full">
                      {/* Sofa / Seating Graphic */}
                      <div className="relative mx-auto max-w-sm">
                        <div className="bg-[#2D2A26] rounded-t-2xl pt-4 px-6 pb-2 shadow-lg border-t border-stone-600">
                          <div className="flex justify-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#E5D7C5] shadow-xs rotate-[-6deg]" />
                            <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] shadow-xs rotate-[4deg]" />
                          </div>
                          <div className="h-6 bg-[#3D3934] rounded-lg" />
                        </div>
                        <div className="flex justify-between px-4">
                          <div className="w-2 h-4 bg-stone-900" />
                          <div className="w-2 h-4 bg-stone-900" />
                        </div>
                      </div>

                      {/* Floor Surface */}
                      <div className="w-full h-8 bg-[#D8C7B0] rounded-b-xl border-t border-stone-400/50 mt-1 flex items-center justify-center">
                        <div className="w-48 h-4 bg-[#EADCC8] rounded-full shadow-inner opacity-70" />
                      </div>
                    </div>
                  </div>

                  {/* Active Shade Indicator Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E8E8E1] shadow-soft-sm flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: previewShade.hex }}
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-[#111827] leading-none">
                        {previewShade.name}
                      </span>
                      <span className="text-[10px] text-gray-500 mt-0.5">
                        {previewShade.finish}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Swatch Selector */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#111827] mb-2">Select a Wall Shade</h4>
                  <p className="text-xs text-[#6B7280] mb-5">
                    Click any swatch to apply it to the wall scene on the left:
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {PREVIEW_SHADES.map((sh, idx) => {
                      const isSelected = previewShade.name === sh.name;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setPreviewShade(sh)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#D9232E] min-h-[46px] ${
                            isSelected
                              ? 'border-[#D9232E] bg-[#FEECEE]/50 shadow-xs'
                              : 'border-[#E8E8E1] bg-white hover:bg-[#F5F5F0]'
                          }`}
                        >
                          <span
                            className="w-7 h-7 rounded-lg border border-black/10 shrink-0 shadow-2xs"
                            style={{ backgroundColor: sh.hex }}
                          />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold text-[#111827] block truncate">
                              {sh.name}
                            </span>
                            <span className="text-[10px] text-gray-500 block truncate">
                              {sh.mood}
                            </span>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#D9232E] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tinting Note & Call to Action */}
                <div className="bg-[#FBFBF9] p-4 rounded-xl border border-[#E8E8E1] text-xs text-[#4B5563] space-y-1.5">
                  <div className="font-semibold text-[#111827] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D9232E]" />
                    <span>Exact Computerized Formulation</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    This shade is mixed on-demand at City Enterprises using official Asian Paints tinting equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GUIDANCE CTA
          Heading: "Need Help Choosing a Colour?"
          Text: "Visit or contact City Enterprises for colour and product guidance."
          Buttons: Contact Us, Visit Store
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2937] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-soft-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              Need Help Choosing a Colour?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Visit or contact City Enterprises for colour and product guidance. Our in-store team will walk you through physical swatch fandecks and help you select the ideal finish for your walls.
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
