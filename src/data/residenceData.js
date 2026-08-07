/**
 * Master Data Repository for L'ÉRA RESIDENCE
 * High-resolution architectural photography, floor plan specs, amenities & inventory.
 */

export const RESIDENCES = [
  {
    id: "penthouse-01",
    title: "The Sovereign Penthouse",
    type: "Penthouse",
    floor: "Level 48 - 50",
    bedrooms: 5,
    bathrooms: 6.5,
    interiorArea: "8,450 sq ft",
    terraceArea: "3,200 sq ft",
    price: "$28,500,000",
    status: "Available",
    tagline: "Triplex Sky Sanctuary with Private Cantilevered Infinity Pool",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Private 360-degree glass lift entry",
      "Cantilevered 15-meter heated sky pool",
      "Double-height 24ft living pavilion",
      "Bespoke Italian Poliform kitchen with Calacatta Gold marble",
      "Subterranean 4-car climate-controlled private garage",
      "Bang & Olufsen integrated acoustic architectural system"
    ]
  },
  {
    id: "sky-villa-02",
    title: "The Celestia Sky Villa",
    type: "Sky Villa",
    floor: "Level 42",
    bedrooms: 4,
    bathrooms: 4.5,
    interiorArea: "5,800 sq ft",
    terraceArea: "1,450 sq ft",
    price: "$18,200,000",
    status: "Reserved",
    tagline: "Panoramic Corner Residence with Floor-to-Ceiling Motorized Glass",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Dual primary suites with floating travertine soaking tubs",
      "Custom temperature-controlled 600-bottle wine glass gallery",
      "Motorized triple-glazed acoustic curtain wall",
      "Private foyer with biometric recognition entry",
      "Custom smoked oak acoustic timber paneling throughout"
    ]
  },
  {
    id: "duplex-03",
    title: "The Horizon Grand Duplex",
    type: "Duplex",
    floor: "Level 34 - 35",
    bedrooms: 4,
    bathrooms: 4,
    interiorArea: "4,950 sq ft",
    terraceArea: "980 sq ft",
    price: "$14,800,000",
    status: "Available",
    tagline: "Architectural Split-Level with Floating Spiral Bronze Staircase",
    heroImage: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "22ft double-height conservatory with integrated botanical garden",
      "Custom bronze mesh & smoked oak floating spiral staircase",
      "Gaggenau 400-Series kitchen appliances with induction cooking island",
      "Enclosed sunset loggia with fire feature",
      "Smart-home circadian lighting control system"
    ]
  },
  {
    id: "residence-04",
    title: "The Lumina Sky Suite",
    type: "Residence",
    floor: "Level 28",
    bedrooms: 3,
    bathrooms: 3.5,
    interiorArea: "3,650 sq ft",
    terraceArea: "620 sq ft",
    price: "$9,750,000",
    status: "Available",
    tagline: "Effortless Modernist Sanctuary Overlooking the City & Coast",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Expansive Great Room with 11ft ceiling heights",
      "Master suite with midnight pantry and walk-in dressing room",
      "Rimadesio glass sliding partition systems",
      "Dornbracht matte black brassware and stone basins"
    ]
  },
  {
    id: "residence-05",
    title: "The Aurelia Park Suite",
    type: "Residence",
    floor: "Level 18",
    bedrooms: 3,
    bathrooms: 3,
    interiorArea: "3,200 sq ft",
    terraceArea: "450 sq ft",
    price: "$7,900,000",
    status: "Sold",
    tagline: "Serene Garden Vistas Blended with Urban Elegance",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    gallery: [],
    features: [
      "Unobstructed views over the botanical park estate",
      "Custom Japanese Hinoki wood spa bath",
      "Integrated hidden pantry with sub-zero refrigeration",
      "Private elevator lobby"
    ]
  }
];

export const AMENITIES = [
  {
    id: "sky-pool",
    title: "The Infinity Sky Deck & Hydro Pool",
    category: "Wellness & Leisure",
    description: "Suspended 500 feet in the air, a heated 25-meter infinity edge hydrotherapy pool offering uninterrupted horizon vistas.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    stats: "Level 45 • Heated Year-Round • Cabana Butler Service"
  },
  {
    id: "wellness-spa",
    title: "The Vitality Spa & Thermal Circuit",
    category: "Health & Mind",
    description: "Designed in collaboration with world-renowned spa consultants, featuring Finnish saunas, Himalayan salt lounge, and cryotherapy suites.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    stats: "Level 04 • Private Treatment Suites • Cold Plunge"
  },
  {
    id: "wine-vault",
    title: "The Sommelier Wine Cellar & Tasting Room",
    category: "Social & Private Dining",
    description: "Private temperature-monitored lockers for up to 10,000 rare vintages, featuring a private dining salon hosted by resident sommeliers.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    stats: "Subterranean B1 • Biometric Access • 10,000 Bottle Capacity"
  },
  {
    id: "private-cinema",
    title: "The Dolby Atmos Screening Room",
    category: "Entertainment",
    description: "Intimate 16-seat private screening hall with acoustic velvet acoustic wall treatment, 4K laser projection, and recliner seating.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    stats: "Level 02 • Dolby Atmos 3D • Private Bar"
  },
  {
    id: "auto-gallery",
    title: "Subterranean Automated Automobile Vault",
    category: "Services",
    description: "Robotic valeting platform with individual climate-controlled display bays for exotic supercar collections.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    stats: "Subterranean B2 • Robotic Valet • EV Superchargers"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g-1",
    title: "Cantilevered Structural Silhouette",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "g-2",
    title: "Double-Height Grand Living Pavilion",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "g-3",
    title: "Horizon Infinity Sky Deck at Dusk",
    category: "Amenities",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "g-4",
    title: "Penthouse Master Bathroom in Calacatta Marble",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "g-5",
    title: "Curated Private Wine Vault",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "g-6",
    title: "Architectural Bronze & Glass Facade",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
  }
];

export const ARCHITECTS = [
  {
    name: "Aurelius Vance",
    role: "Lead Design Architect",
    firm: "Vance Studio London",
    bio: "Pritzker-laureated visionary renowned for redefining skyward luxury through monolithic forms and sculptural light plays."
  },
  {
    name: "Elena Rostova",
    role: "Principal Interior Architect",
    firm: "Atelier Rostova Milan",
    bio: "Pioneer of sensory minimalism, blending rare organic stone, hand-carved hardwoods, and subtle tactile textures."
  },
  {
    name: "Soren Lindqvist",
    role: "Landscape Architect",
    firm: "Nordic Terra Studio Copenhagen",
    bio: "Expert in biophilic vertical gardens, creating floating micro-ecosystems across high-altitude terraces."
  }
];

export const LOCATION_POINTS = [
  { name: "Michelin Fine Dining District", distance: "3 Mins", detail: "Over 14 Michelin-starred culinary institutions within walking distance." },
  { name: "Metropolitan Heliport & Aviation Hub", distance: "8 Mins", detail: "Direct VIP helicopter transfer to international airport in under 12 minutes." },
  { name: "Royal Opera & Cultural Quarter", distance: "5 Mins", detail: "World-class museums, symphonies, and private art galleries." },
  { name: "Private Marina & Yacht Club", distance: "10 Mins", detail: "Deep-water berths for superyachts up to 80 meters." }
];
