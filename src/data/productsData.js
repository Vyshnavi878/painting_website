/**
 * Product catalogue data for City Enterprises (Asian Paints Authorized Dealer).
 * Structured for easy updating, adding, or replacing products later.
 * Note: Non-e-commerce catalogue. No pricing or cart data.
 */

export const CATEGORIES = [
  { id: 'All', label: 'All' },
  { id: 'Interior', label: 'Interior' },
  { id: 'Exterior', label: 'Exterior' },
  { id: 'Primer', label: 'Primer' },
  { id: 'Waterproofing', label: 'Waterproofing' },
  { id: 'Wood & Metal', label: 'Wood & Metal' },
  { id: 'Accessories', label: 'Accessories' },
];

export const PRODUCTS = [
  // 1. Interior Paints
  {
    id: 'royale-luxury',
    name: 'Royale Luxury Emulsion',
    brand: 'Asian Paints',
    category: 'Interior',
    image: '/product-can.jpg',
    shortDesc: 'Ultra-luxurious washable wall paint with Teflon surface protection and anti-bacterial shield.',
    tags: ['Teflon Protection', 'Washable', 'Luxury Sheen'],
    overview:
      'Asian Paints Royale Luxury Emulsion is the benchmark for interior luxury. Formulated with Teflon surface protector, it allows everyday household stains to be wiped off effortlessly while resisting fungi and bacterial growth.',
    keyFeatures: [
      'Teflon surface protector for effortless stain wipe-off',
      'Anti-bacterial formula tested to eliminate bacteria on walls',
      'Smooth, silky finish available in Matt and Soft Sheen',
      'Low odour and child-friendly low VOC formulation',
    ],
    suitableFor: ['Living Rooms', 'Master Bedrooms', 'Dining Areas', 'High-Touch Hallways'],
    finishes: 'Luxury Matt, Soft Sheen, High Gloss',
    packSizes: '1L, 4L, 10L, 20L (In-store tinting available)',
  },
  {
    id: 'apcolite-premium',
    name: 'Apcolite Premium Emulsion',
    brand: 'Asian Paints',
    category: 'Interior',
    image: '/product-can.jpg',
    shortDesc: 'Durable matte finish that provides persistent stain protection and rich colour depth.',
    tags: ['Stain Guard', 'Rich Matt', '2,200+ Shades'],
    overview:
      'Apcolite Premium Emulsion has stood as a household favorite for vibrant wall tones. Engineered with a tough micro-film polymer that resists scrub marks and preserves wall beauty year after year.',
    keyFeatures: [
      'Stain-resistant polymer shield',
      'Smooth, uniform coverage across plaster and gypsum',
      'High opacity film hiding minor wall imperfections',
      'Tintable to over 2,200 Asian Paints shades in-store',
    ],
    suitableFor: ['Bedrooms', 'Children’s Rooms', 'Home Offices', 'Study Rooms'],
    finishes: 'Smooth Matt, Satin Sheen',
    packSizes: '1L, 4L, 10L, 20L',
  },
  {
    id: 'tractor-emulsion',
    name: 'Tractor Emulsion',
    brand: 'Asian Paints',
    category: 'Interior',
    image: '/product-can.jpg',
    shortDesc: 'Smart, cost-effective alternative to distemper delivering smooth plastic paint finish.',
    tags: ['Value For Money', 'Smooth Finish', 'Wide Coverage'],
    overview:
      'Tractor Emulsion is the ideal upgrade from regular distemper. It offers a smooth plastic paint finish at an accessible price point with 1.5 times better coverage than conventional distemper.',
    keyFeatures: [
      'Clean matt finish that elevates rental and budget interiors',
      'Washable with damp cloth for basic maintenance',
      'Broad coverage per litre ensuring cost efficiency',
    ],
    suitableFor: ['Rental Properties', 'Ceilings', 'Utility Areas', 'Budget Renovations'],
    finishes: 'Soft Matt Finish',
    packSizes: '1L, 4L, 10L, 20L',
  },

  // 2. Exterior Paints
  {
    id: 'apex-ultima-protek',
    name: 'Apex Ultima Protek',
    brand: 'Asian Paints',
    category: 'Exterior',
    image: '/product-can.jpg',
    shortDesc: 'Lamination-based exterior paint system engineered to withstand heavy rainfall and algae.',
    tags: ['Lamination Guard', 'Anti-Algae', 'UV Resistance'],
    overview:
      'Asian Paints Apex Ultima Protek is a revolutionary exterior paint featuring nanofiber reinforcement. It forms a resilient lamination layer that acts as a waterproof umbrella for your building facade.',
    keyFeatures: [
      'Nanofiber technology preventing cracks and water intrusion',
      'Bio-pack resisting aggressive tropical algae and fungal blackening',
      'Exceptional dust pickup resistance keeping facades clean',
      'Advanced UV cross-linking polymers preventing color fading',
    ],
    suitableFor: ['Building Facades', 'Independent Villas', 'Boundary Walls', 'Balconies'],
    finishes: 'Exterior Matt & Sheen',
    packSizes: '1L, 4L, 10L, 20L',
  },
  {
    id: 'apex-weatherproof',
    name: 'Apex Weatherproof Emulsion',
    brand: 'Asian Paints',
    category: 'Exterior',
    image: '/product-can.jpg',
    shortDesc: 'Modified acrylic exterior emulsion formulated for tropical rain, sunlight, and humidity.',
    tags: ['Weather Shield', 'Anti-Fungal', 'Durable Exterior'],
    overview:
      'Apex Weatherproof Emulsion is a smooth water-based exterior finish formulated with silicon additives. It sheds water rapidly and prevents exterior plaster peeling.',
    keyFeatures: [
      'High resistance to rainfall and high humidity climates',
      'Silicon additives that repel moisture runoff',
      'Formulated to resist exterior chalking and cracking',
    ],
    suitableFor: ['Residential Facades', 'Exterior Plaster', 'Compound Walls', 'Terrace Parapets'],
    finishes: 'Smooth Exterior Sheen',
    packSizes: '1L, 4L, 10L, 20L',
  },

  // 3. Primers & Surface Prep
  {
    id: 'trucare-interior-primer',
    name: 'TruCare Interior Wall Primer',
    brand: 'Asian Paints',
    category: 'Primer',
    image: '/product-can.jpg',
    shortDesc: 'Water-based primer ensuring superior topcoat adhesion and sealing wall porosity.',
    tags: ['Base Adhesion', 'Anti-Efflorescence', 'Water-Based'],
    overview:
      'TruCare Interior Wall Primer is an essential preparatory coat applied over fresh plaster, putty, or patched masonry. It neutralizes lime alkalinity and seals porosity for an even topcoat finish.',
    keyFeatures: [
      'Prevents paint flaking and alkaline salt efflorescence',
      'Enhances the spread and coverage of expensive topcoats',
      'Quick drying and easy roller application',
    ],
    suitableFor: ['Fresh Cement Plaster', 'Putty Coated Surfaces', 'Gypsum Boards', 'Repainting Bases'],
    finishes: 'Matt White Primer Coat',
    packSizes: '1L, 4L, 10L, 20L',
  },
  {
    id: 'trucare-exterior-primer',
    name: 'TruCare Exterior Wall Primer',
    brand: 'Asian Paints',
    category: 'Primer',
    image: '/product-can.jpg',
    shortDesc: 'Tough exterior undercoat providing deep binding with raw concrete and exterior cement.',
    tags: ['Deep Penetration', 'Alkali Resistant', 'Masonry Bond'],
    overview:
      'TruCare Exterior Wall Primer penetrates into fresh exterior cement plaster pores, stabilizing chalky surfaces and locking out moisture to provide a firm foundation for Apex paints.',
    keyFeatures: [
      'High resistance to weathering and lime leach-out',
      'Reinforces porous and sandy plaster surfaces',
      'Maximizes adhesion for weather-coat top emulsions',
    ],
    suitableFor: ['Raw Exterior Cement', 'Concrete Blocks', 'Exposed Facades', 'Weathered Exterior Plaster'],
    finishes: 'White Masonry Sealer',
    packSizes: '1L, 4L, 10L, 20L',
  },

  // 4. Waterproofing
  {
    id: 'smartcare-damp-proof',
    name: 'SmartCare Damp Proof',
    brand: 'Asian Paints',
    category: 'Waterproofing',
    image: '/product-can.jpg',
    shortDesc: 'Fiber-reinforced elastomeric liquid membrane for terrace and roof waterproofing.',
    tags: ['Elastomeric', 'Crack Bridging', 'Roof Protection'],
    overview:
      'Asian Paints SmartCare Damp Proof is a heavy-duty waterproofing membrane with special synthetic fibers. It accommodates building thermal expansion, bridging cracks up to 2mm while reflecting solar heat.',
    keyFeatures: [
      'Elastic elongation bridging hair-cracks and terrace joints',
      'High solar reflectance reducing interior surface heat by up to 10°C',
      'Resists ponding water and torrential monsoon rain',
    ],
    suitableFor: ['Terraces', 'Sloped Roofs', 'Parapet Walls', 'Exterior Vertical Slabs'],
    finishes: 'Thick Protective White Membrane',
    packSizes: '1L, 4L, 10L, 20L',
  },
  {
    id: 'smartcare-crack-seal',
    name: 'SmartCare Crack Seal',
    brand: 'Asian Paints',
    category: 'Waterproofing',
    image: '/product-can.jpg',
    shortDesc: 'Flexible fiber-reinforced paste compound designed to seal plaster cracks permanently.',
    tags: ['Non-Shrink', 'Paste Compound', 'Permanent Seal'],
    overview:
      'SmartCare Crack Seal is ready-to-use acrylic paste with micro-fibers for repairing cracks up to 3mm in plaster. It cures into a flexible seal that does not shrink or crack over time.',
    keyFeatures: [
      'Single-pack ready-to-use paste applied with putty blade',
      'Non-shrinking formulation preventing recurring cracks',
      'Compatible with all acrylic primers and topcoats',
    ],
    suitableFor: ['Interior Plaster Cracks', 'Exterior Facade Fractures', 'Door Frame Junctions'],
    finishes: 'Smooth White Paste',
    packSizes: '1kg, 5kg Packs',
  },

  // 5. Wood & Metal Finishes
  {
    id: 'woodtech-pu-luxury',
    name: 'WoodTech PU Luxury Finish',
    brand: 'Asian Paints',
    category: 'Wood & Metal',
    image: '/product-can.jpg',
    shortDesc: 'Polyurethane wood coating offering high clarity, heat resistance, and grain enhancement.',
    tags: ['Wood Clear Coat', 'Scratch Resistant', 'Deep Clarity'],
    overview:
      'WoodTech PU is a premium polyurethane system that shields solid wood, veneers, and furniture from spills, coffee stains, and scratches while highlighting the natural beauty of the wood grain.',
    keyFeatures: [
      'Excellent resistance to scratches, boiling water, and heat rings',
      'Non-yellowing film that maintains wood natural tone',
      'Available in dead matt, semi-gloss, and high-gloss variants',
    ],
    suitableFor: ['Wooden Doors', 'Dining Tables', 'Wardrobe Veneers', 'Architectural Paneling'],
    finishes: 'High Gloss, Semi-Gloss, Matt',
    packSizes: '1L, 4L Cans',
  },
  {
    id: 'apcolite-gloss-enamel',
    name: 'Apcolite Premium Gloss Enamel',
    brand: 'Asian Paints',
    category: 'Wood & Metal',
    image: '/product-can.jpg',
    shortDesc: 'Mirror-like high gloss enamel paint for metal grills, gates, doors, and timber trims.',
    tags: ['High Gloss', 'Anti-Corrosion Base', 'Metal & Wood'],
    overview:
      'Apcolite Premium Gloss Enamel provides a tough, mirror-like enamel shield that repels moisture and prevents rust on mild steel while delivering rich decorative color on wood.',
    keyFeatures: [
      'Durable resin formula with brilliant specular gloss',
      'Resists yellowing and weather-induced dullness',
      'Available in full range of bold, classic, and neutral shades',
    ],
    suitableFor: ['Window Grills', 'Iron Gates', 'Door Trims', 'Metal Railings'],
    finishes: 'High Gloss, Satin Finish',
    packSizes: '0.5L, 1L, 4L, 10L, 20L',
  },

  // 6. Accessories
  {
    id: 'trucare-paint-roller',
    name: 'TruCare Professional Roller',
    brand: 'Asian Paints',
    category: 'Accessories',
    image: '/product-can.jpg',
    shortDesc: 'High-density micro-fiber roller cage ensuring streak-free paint application.',
    tags: ['Lint Free', 'Ergonomic Handle', 'Uniform Spread'],
    overview:
      'TruCare Professional Rollers feature shed-resistant woven fibers that hold substantial paint and release it evenly across walls, cutting application time and avoiding roller lap marks.',
    keyFeatures: [
      'High absorption fabric with minimal spatter',
      'Sturdy stainless steel frame with threaded extension grip',
      'Washable and reusable for multiple repainting coats',
    ],
    suitableFor: ['Interior Smooth Walls', 'Ceilings', 'Exterior Smooth Plaster'],
    finishes: '4-inch, 7-inch, 9-inch Roller Sets',
    packSizes: 'Individual Rollers & Refills',
  },
  {
    id: 'trucare-masking-tape',
    name: 'TruCare Precision Masking Tape',
    brand: 'Asian Paints',
    category: 'Accessories',
    image: '/product-can.jpg',
    shortDesc: 'Clean-removal crepe paper masking tape for sharp paint borders without residue.',
    tags: ['Clean Removal', 'No Adhesive Bleed', 'Sharp Edges'],
    overview:
      'TruCare Precision Masking Tape sticks securely to wood, tiles, switches, and glass, preventing paint seepage along skirting and trims, and lifts cleanly without peeling underlying paint.',
    keyFeatures: [
      'Gentle yet firm adhesive preventing edge bleed-through',
      'Leaves zero sticky residue upon removal within 7 days',
      'Tears easily by hand for quick application',
    ],
    suitableFor: ['Skirting Boards', 'Window Frames', 'Electrical Switchplates', 'Accent Borders'],
    finishes: 'Crepe Paper Tape',
    packSizes: '12mm, 18mm, 24mm, 48mm Rolls',
  },
];
