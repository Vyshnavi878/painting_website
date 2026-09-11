/**
 * Colour inspiration catalogue data for City Enterprises (Asian Paints Authorized Dealer).
 * Organized by rooms, mood palettes, and curated combinations.
 */

export const ROOMS = [
  { id: 'all', name: 'All Spaces', icon: 'Sparkles' },
  { id: 'living', name: 'Living Room', icon: 'Sofa' },
  { id: 'bedroom', name: 'Bedroom', icon: 'Bed' },
  { id: 'kitchen', name: 'Kitchen', icon: 'Utensils' },
  { id: 'exterior', name: 'Exterior', icon: 'Home' },
  { id: 'office', name: 'Office', icon: 'Briefcase' },
];

export const PALETTES = [
  {
    id: 'morning-sunshine',
    name: 'Morning Sunshine',
    room: 'living',
    mood: 'Warm',
    moodColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Golden morning light reflections that impart cheerfulness and warmth to open living rooms.',
    swatches: [
      { name: 'Morning Glow', hex: '#FBF5E8' },
      { name: 'Soft Buttercup', hex: '#F6E7C1' },
      { name: 'Warm Wheat', hex: '#EBD2A3' },
      { name: 'Caramel Glaze', hex: '#CFA775' },
    ],
  },
  {
    id: 'serene-sanctuary',
    name: 'Serene Sanctuary',
    room: 'bedroom',
    mood: 'Calm',
    moodColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Tranquil botanicals and airy pastels crafted for restful sleep and restorative evenings.',
    swatches: [
      { name: 'Misty Sage', hex: '#E3ECE4' },
      { name: 'Pale Eucalyptus', hex: '#C8D8C9' },
      { name: 'Silver Whisper', hex: '#DCDFE1' },
      { name: 'Deep Moss', hex: '#5A6F5C' },
    ],
  },
  {
    id: 'citrus-breeze',
    name: 'Citrus & Herb',
    room: 'kitchen',
    mood: 'Fresh',
    moodColor: 'bg-lime-100 text-lime-800 border-lime-200',
    description: 'Invigorating tones that brighten food prep areas and bounce natural window light.',
    swatches: [
      { name: 'Linen White', hex: '#FAF9F4' },
      { name: 'Lemongrass', hex: '#E8EDCE' },
      { name: 'Olive Sprout', hex: '#B8C69F' },
      { name: 'Herbal Clay', hex: '#8C9A78' },
    ],
  },
  {
    id: 'monsoon-earth',
    name: 'Monsoon Heritage',
    room: 'exterior',
    mood: 'Bold',
    moodColor: 'bg-red-100 text-red-800 border-red-200',
    description: 'Resilient earthen ochres and mineral stones engineered to look stately in natural rainfall.',
    swatches: [
      { name: 'Desert Sand', hex: '#E2D5C3' },
      { name: 'Terracotta Clay', hex: '#BD5C41' },
      { name: 'Raw Ochre', hex: '#9E6539' },
      { name: 'Basalt Grey', hex: '#54585B' },
    ],
  },
  {
    id: 'focus-harmony',
    name: 'Studio Focus',
    room: 'office',
    mood: 'Elegant',
    moodColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Balanced slate greys and subtle navy accents supporting concentration and productive clarity.',
    swatches: [
      { name: 'Pebble Walk', hex: '#E1E4E6' },
      { name: 'Cloud Grey', hex: '#BFC5C9' },
      { name: 'Slate Blue', hex: '#637887' },
      { name: 'Midnight Navy', hex: '#2C3A47' },
    ],
  },
  {
    id: 'royal-heritage',
    name: 'Velvet Heritage',
    room: 'living',
    mood: 'Elegant',
    moodColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Sophisticated jewel undertones with champagne neutrals for luxurious feature walls.',
    swatches: [
      { name: 'Champagne Satin', hex: '#F3EDE2' },
      { name: 'Cashmere Veil', hex: '#D8CEBF' },
      { name: 'Royal Velvet', hex: '#4B354F' },
      { name: 'Gilded Bronze', hex: '#876D49' },
    ],
  },
  {
    id: 'cloud-nine',
    name: 'Cloud Nine Neutrals',
    room: 'bedroom',
    mood: 'Calm',
    moodColor: 'bg-sky-100 text-sky-800 border-sky-200',
    description: 'Airy, soft-spoken tones that visually expand compact bedrooms and soothe tired eyes.',
    swatches: [
      { name: 'Pure Alabaster', hex: '#FAF9F5' },
      { name: 'Powder Sky', hex: '#E5ECF0' },
      { name: 'Silver Flannel', hex: '#CCD3D9' },
      { name: 'Shadow Dusk', hex: '#8A959E' },
    ],
  },
  {
    id: 'warm-minimalist',
    name: 'Warm Minimalist',
    room: 'office',
    mood: 'Warm',
    moodColor: 'bg-stone-100 text-stone-800 border-stone-200',
    description: 'Clean Scandinavian-inspired warmth with muted taupe and raw timber undertones.',
    swatches: [
      { name: 'Chalk White', hex: '#F7F6F2' },
      { name: 'Warm Greige', hex: '#DFD9CE' },
      { name: 'Muted Taupe', hex: '#B8ADA0' },
      { name: 'Smoked Walnut', hex: '#5E544B' },
    ],
  },
];

export const FEATURED_COMBINATIONS = [
  {
    title: 'Warm & Cozy',
    description: 'A comforting blend of soft off-white and warm terracotta creating welcoming depth.',
    baseWall: { name: 'Morning Glow', hex: '#FAF6EE' },
    accentWall: { name: 'Terracotta Clay', hex: '#BD5C41' },
    trim: { name: 'Crisp Cotton', hex: '#FFFFFF' },
    idealFor: 'Living rooms & master bedrooms',
  },
  {
    title: 'Calm Neutrals',
    description: 'Minimalist greiges and warm silvers that maximize ambient daylight and spatial tranquility.',
    baseWall: { name: 'Pebble Walk', hex: '#E7E5DF' },
    accentWall: { name: 'Warm Taupe', hex: '#A89E92' },
    trim: { name: 'Pure White', hex: '#FFFFFF' },
    idealFor: 'Bedrooms & open plan apartments',
  },
  {
    title: 'Modern Earth Tones',
    description: 'Grounded ochres and sandstones inspired by raw natural pigments and clay textures.',
    baseWall: { name: 'Desert Sand', hex: '#E6D9C8' },
    accentWall: { name: 'Earthy Ochre', hex: '#A86C3E' },
    trim: { name: 'Soft Linen', hex: '#F6F3EC' },
    idealFor: 'Dining rooms & exterior balconies',
  },
  {
    title: 'Fresh & Bright',
    description: 'Gentle mint hints and radiant creams that keep energetic spaces lively and uplifting.',
    baseWall: { name: 'Airy Cream', hex: '#F9F7EE' },
    accentWall: { name: 'Breeze Mint', hex: '#D2E3D6' },
    trim: { name: 'Chalk White', hex: '#FFFFFF' },
    idealFor: 'Kitchens, breakfast nooks & kids rooms',
  },
  {
    title: 'Elegant Contrast',
    description: 'Deep royal slate against warm ivory for a striking architectural feature wall.',
    baseWall: { name: 'Soft Ivory', hex: '#F5EFE3' },
    accentWall: { name: 'Royal Slate', hex: '#314454' },
    trim: { name: 'Alabaster', hex: '#FAF8F4' },
    idealFor: 'Study rooms & formal living areas',
  },
  {
    title: 'Nature Inspired',
    description: 'Eucalyptus greens and muted wood neutrals that bring the peace of the outdoors inside.',
    baseWall: { name: 'Pale Sage', hex: '#E1E9DF' },
    accentWall: { name: 'Forest Pine', hex: '#3E5746' },
    trim: { name: 'Morning Milk', hex: '#FDFCF9' },
    idealFor: 'Bedrooms & meditation corners',
  },
];

export const PREVIEW_SHADES = [
  { name: 'Warm Ivory', hex: '#F4ECE1', mood: 'Warm Neutral', finish: 'Royale Luxury Matt' },
  { name: 'Terracotta Arch', hex: '#C2654D', mood: 'Warm Accent', finish: 'Royale Luxury' },
  { name: 'Misty Sage', hex: '#C5D6C4', mood: 'Calming Nature', finish: 'Royale Matt' },
  { name: 'Royal Velvet', hex: '#3B4E63', mood: 'Elegant Deep', finish: 'Royale Shyne' },
  { name: 'Sunset Ochre', hex: '#D99849', mood: 'Vibrant Warm', finish: 'Apcolite Matt' },
  { name: 'Modern Greige', hex: '#CBC4B8', mood: 'Modern Neutral', finish: 'Royale Matt' },
  { name: 'Forest Pine', hex: '#415949', mood: 'Earthy Bold', finish: 'Royale Luxury Matt' },
  { name: 'Blush Rose', hex: '#DEC0BB', mood: 'Soft Pastel', finish: 'Apcolite Premium' },
];
