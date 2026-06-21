/* ============================================================================
   📝 EDIT YOUR CONTENT HERE
   ----------------------------------------------------------------------------
   This single file controls almost all the text on the website.
   Mariam — change anything below and the site updates automatically.
   (Icons & layout live in the components; text & data live here.)
   ============================================================================ */

/* ── 1. PROJECT OWNER / HERO ─────────────────────────────────────────────── */
export const owner = {
  name: 'Mariam El Abasy',
  university: 'Horus University',
  projectType: 'Architectural Graduation Project',
  projectTitle: 'Coastal Resort Master Plan',
  // Strong subtitle for the hero section:
  heroSubtitle:
    'A luxury waterfront destination uniting marina life, hospitality, landscape, pools, and pedestrian promenades — where organic forms gently connect the land with the sea.',
}

/* ── 2. PROJECT OVERVIEW ─────────────────────────────────────────────────── */
export const overview = {
  // Each string below is a separate paragraph.
  paragraphs: [
    'The project is a coastal resort master plan located directly beside the sea. The design combines a luxury waterfront destination with recreation, hospitality, landscape areas, pools, marina spaces, and pedestrian promenades.',
    'The main concept is based on organic curved forms that connect the land with the sea. The central building acts as the visual and functional core of the project. Around it, there are pools, open plazas, green areas, seating zones, sports courts, parking, beach access, and a marina protected by rock breakwaters.',
    'The main design elements are: waterfront promenade, marina, central resort building, swimming pools, landscape areas, beach zones, parking, sports courts, pedestrian paths, service roads, and sea protection structures.',
  ],
  // The image-editing note, shown as an elegant highlighted block:
  editingNote:
    'During the image-editing process, the main goal was to keep the original design unchanged. No geometry, paving, buildings, landscape, colors, or materials were modified. The only visual adjustment was to improve the brightness and color mood while preserving the shadows and the original architectural character.',
  // Quick stats shown as a small strip:
  stats: [
    { value: '11', label: 'Master Plan Elements' },
    { value: '1', label: 'Central Resort Core' },
    { value: '100%', label: 'Original Design Preserved' },
    { value: 'PDF', label: 'High-Quality Export' },
  ],
}

/* ── 3. DESIGN CONCEPT CARDS ─────────────────────────────────────────────── */
/* icon = key matched in src/components/icons.jsx */
export const concepts = [
  {
    icon: 'curve',
    title: 'Organic Curved Forms',
    text: 'Flowing, organic geometries shape the master plan, softening edges and guiding movement naturally throughout the resort.',
  },
  {
    icon: 'landSea',
    title: 'Land Meets Sea',
    text: 'The composition deliberately blurs the threshold between land and water, drawing the sea inward and the buildings outward.',
  },
  {
    icon: 'building',
    title: 'Central Resort Core',
    text: 'A central building anchors the scheme as both the visual landmark and the functional heart of the destination.',
  },
  {
    icon: 'luxury',
    title: 'Luxury Waterfront',
    text: 'Hospitality, recreation, and leisure combine into a premium waterfront experience designed for year-round enjoyment.',
  },
  {
    icon: 'marina',
    title: 'Marina & Breakwaters',
    text: 'A protected marina sheltered by rock breakwaters provides safe mooring and a vibrant maritime edge.',
  },
  {
    icon: 'walk',
    title: 'Pedestrian Movement',
    text: 'Generous promenades and landscaped paths prioritise people, connecting every zone with a continuous, walkable journey.',
  },
]

/* ── 4. PROJECT GALLERY (used by the InfiniteMenu / ProjectGallery) ──────── */
/* Images live in: public/assets/gallery/
   BASE_URL keeps paths correct under the GitHub Pages subfolder (/mariam/). */
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const gallery = [
  {
    title: 'Marina',
    category: 'Waterfront',
    image: asset('assets/gallery/01-marina.jpg'),
    link: '',
    description:
      'A waterfront facility that provides docking, maintenance, and services for yachts and boats, supporting marine recreation and tourism.',
  },
  {
    title: 'Chalets',
    category: 'Hospitality',
    image: asset('assets/gallery/02-chalets.jpg'),
    link: '',
    description:
      'Private accommodation units that provide comfortable short-term stays with direct access to waterfront amenities and leisure activities.',
  },
  {
    title: 'Blue Wave',
    category: 'Concept',
    image: asset('assets/gallery/03-blue-wave.jpg'),
    link: '',
    description:
      'A design concept inspired by the movement of waves, creating a dynamic waterfront destination that reconnects people with the sea through recreation, community interaction, and sustainable development.',
  },
  {
    title: 'Aqua Park',
    category: 'Recreation',
    image: asset('assets/gallery/04-aqua-park.jpg'),
    link: '',
    description:
      'A water-based entertainment area featuring slides, pools, and recreational attractions for visitors of all ages.',
  },
  {
    title: 'Solar Canopy',
    category: 'Sustainability',
    image: asset('assets/gallery/05-solar-canopy.jpg'),
    link: '',
    description:
      'A shaded structure integrated with solar panels that generates renewable energy while providing protection from sunlight.',
  },
  {
    title: 'Sea Gate',
    category: 'Landmark',
    image: asset('assets/gallery/06-sea-gate.jpg'),
    link: '',
    description:
      'A landmark entrance that creates a visual and physical connection between the development and the sea, welcoming visitors and enhancing accessibility to the waterfront.',
  },
  {
    title: 'Rainwater Harvesting Canopy',
    category: 'Sustainability',
    image: asset('assets/gallery/07-rainwater-harvesting-canopy.jpg'),
    link: '',
    description:
      'A canopy system designed to collect and channel rainwater for storage, filtration, and reuse, promoting sustainable water management.',
  },
  {
    title: 'Kayaking',
    category: 'Recreation',
    image: asset('assets/gallery/08-kayaking.jpg'),
    link: '',
    description:
      'A water sport and recreational activity that allows visitors to explore the waterfront using small paddle-powered boats.',
  },
  {
    title: 'Master Plan',
    category: 'Overview',
    image: asset('assets/gallery/09-master-plan.jpg'),
    link: '',
    description:
      'A comprehensive layout that organizes the whole project, showing the main zones, circulation paths, open spaces, facilities, landscape, and the relationship between the buildings and the waterfront.',
  },
]

/* ── 4b. MASTER PLAN ELEMENTS (legacy icon cards — no longer rendered) ──── */
export const elements = [
  { icon: 'promenade', title: 'Waterfront Promenade', text: 'A continuous seaside walkway framing the shoreline and linking every part of the resort.' },
  { icon: 'marina', title: 'Marina', text: 'Sheltered berths for yachts and boats, forming the lively maritime heart of the plan.' },
  { icon: 'building', title: 'Central Resort Building', text: 'The iconic core hosting hospitality and amenities at the centre of the composition.' },
  { icon: 'pool', title: 'Swimming Pools', text: 'Curved leisure pools woven into the landscape for relaxation beside the sea.' },
  { icon: 'landscape', title: 'Landscape Areas', text: 'Green zones, planting, and gardens that bring softness and shade across the site.' },
  { icon: 'beach', title: 'Beach Zones', text: 'Direct beach access with sun decks and gentle transitions to the water.' },
  { icon: 'parking', title: 'Parking', text: 'Organised parking that keeps vehicles discreet while serving the whole resort.' },
  { icon: 'sports', title: 'Sports Courts', text: 'Active recreation spaces for guests, integrated into the open landscape.' },
  { icon: 'walk', title: 'Pedestrian Paths', text: 'A network of human-scaled routes connecting plazas, pools, and the promenade.' },
  { icon: 'road', title: 'Service Roads', text: 'Efficient vehicular circulation that supports operations without disrupting leisure.' },
  { icon: 'wave', title: 'Sea Protection Structures', text: 'Rock breakwaters and coastal defences that shelter the marina and shoreline.' },
]

/* ── 5. CV / PORTFOLIO ───────────────────────────────────────────────────────
   ✏️ Replace the placeholder text below with your real CV details.
   Add or remove array items freely — the layout adapts automatically. */
export const cv = {
  profile:
    'Architecture graduate from Horus University with a passion for luxury coastal and hospitality design.',

  education: [
    {
      title: 'Bachelor of Architecture',
      org: 'Horus University',
      period: '2021 – 2026',
      note: 'Graduation Project: Mixed-use development — yacht club, commercial building, and residential units.',
    },
  ],

  // General / soft + design skills (shown as pills)
  skills: [
    'Architectural Design',
    'Master Planning',
    'Concept Development',
    'Landscape Integration',
    'Hand Sketching',
    'Design Presentation',
  ],

  // Software skills (shown with a proficiency bar; level is 0–100)
  software: [
    { name: 'AutoCAD', level: 85 },
    { name: '3ds Max', level: 80 },
    { name: 'Lumion', level: 75 },
    { name: 'Adobe Photoshop', level: 80 },
    { name: 'Revit', level: 65 },
    { name: 'Microsoft Office', level: 90 },
  ],

  experience: [
    {
      title: 'Architecture Trainee',
      org: 'TMG Development',
      period: '2025',
      note: 'Working stages.',
    },
  ],

  projects: [
    {
      title: 'Coastal Resort Master Plan',
      note: 'Graduation project — a luxury waterfront resort with marina, pools, and promenades.',
    },
    {
      title: 'Blue Wave',
      note: 'Mixed-use development.',
    },
  ],

  contact: {
    email: 'mariamelabasy12@gmail.com',
    phone: '+20 106 616 6639',
    location: 'Egypt',
    linkedin: '',
    behance: '',
    instagram: '',
  },
}

/* ── 6. QR VIDEO SECTION ─────────────────────────────────────────────────── */
export const qr = {
  // 📍 QR IMAGE PATH — place your file at: public/assets/QR.png
  // BASE_URL keeps the path correct under the GitHub Pages subfolder (/mariam/).
  imagePath: `${import.meta.env.BASE_URL}assets/QR.png`,
  heading: 'Scan to Watch the Project Video',
  subtext:
    'Explore the full presentation video of the Coastal Resort Master Plan and experience the design in motion.',
  ctaLabel: 'Project Video',
}

/* ── 7. PDF / PRESENTATION OUTPUT ────────────────────────────────────────── */
export const pdf = {
  heading: 'High-Quality PDF Output',
  text:
    'The final master plan was brightened and refined while fully preserving the original architectural character, ' +
    'then exported as a high-quality PDF prepared for professional presentation use.',
  points: [
    'Original geometry, paving, and materials preserved',
    'Brightness and colour mood enhanced',
    'Shadows and architectural character maintained',
    'Exported as a presentation-ready PDF',
  ],
  // Optional: if you add the PDF to public/assets, set the path here to enable the button.
  // e.g. '/assets/master-plan.pdf' — leave '' to show a non-linked label.
  filePath: '',
}
