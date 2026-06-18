/* ============================================================================
   Icon set — minimal line icons used across concept & element cards.
   Each icon is referenced by its key (e.g. icon: 'marina') in content.js.
   To swap an icon, just change the `icon` key in src/data/content.js.
   ============================================================================ */

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Icons = {
  curve: (p) => (
    <svg {...base} {...p}>
      <path d="M3 17c3 0 3-10 6-10s3 10 6 10 3-7 6-7" />
    </svg>
  ),
  landSea: (p) => (
    <svg {...base} {...p}>
      <path d="M3 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M3 19c2 0 2 1.5 4 1.5S9 19 11 19s2 1.5 4 1.5S17 19 21 19" />
      <path d="M12 3l3 6H9l3-6z" />
    </svg>
  ),
  building: (p) => (
    <svg {...base} {...p}>
      <path d="M6 21V8l6-4 6 4v13" />
      <path d="M3 21h18" />
      <path d="M10 21v-5h4v5" />
      <path d="M9 11h.01M15 11h.01" />
    </svg>
  ),
  luxury: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 2z" />
    </svg>
  ),
  marina: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3v15" />
      <path d="M9 6h3" />
      <path d="M5 12h14l-7 7-7-7z" />
      <circle cx="12" cy="4" r="1" />
    </svg>
  ),
  walk: (p) => (
    <svg {...base} {...p}>
      <circle cx="13" cy="4" r="1.6" />
      <path d="M13 7l-1 5 3 3 1 4M12 12l-3 2-1 4M14 9l3 1" />
    </svg>
  ),
  promenade: (p) => (
    <svg {...base} {...p}>
      <path d="M4 20l4-12h8l4 12" />
      <path d="M7 12h10M6 16h12" />
    </svg>
  ),
  pool: (p) => (
    <svg {...base} {...p}>
      <path d="M6 4v9M10 4v9" />
      <path d="M6 7h4" />
      <path d="M3 16c2 0 2 1.5 4 1.5S9 16 11 16s2 1.5 4 1.5S17 16 21 16" />
      <path d="M3 20c2 0 2 1.5 4 1.5S9 20 11 20s2 1.5 4 1.5S17 20 21 20" />
    </svg>
  ),
  landscape: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21V11" />
      <path d="M12 11c0-3 2-4 2-6 0 0-2 0-2 2 0-2-2-2-2-2 0 2 2 3 2 6z" />
      <path d="M7 21c0-4 2-5 2-7M17 21c0-4-2-5-2-7" />
      <path d="M3 21h18" />
    </svg>
  ),
  beach: (p) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="7" r="3" />
      <path d="M8 7v13" />
      <path d="M3 20c2 0 2 1 4 1s2-1 4-1 2 1 4 1 2-1 4-1" />
      <path d="M14 5l5 2-5 2" />
    </svg>
  ),
  parking: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 16V8h3a2.5 2.5 0 0 1 0 5H9" />
    </svg>
  ),
  sports: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c3 3 3 15 0 18M3 12h18M5 6c3 2 11 2 14 0M5 18c3-2 11-2 14 0" />
    </svg>
  ),
  road: (p) => (
    <svg {...base} {...p}>
      <path d="M7 21L9 3M17 21L15 3" />
      <path d="M12 5v3M12 11v3M12 17v3" />
    </svg>
  ),
  wave: (p) => (
    <svg {...base} {...p}>
      <path d="M2 9c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
    </svg>
  ),
}

/** Render an icon by key. Falls back to a dot if the key is unknown. */
export default function Icon({ name, ...props }) {
  const Cmp = Icons[name]
  if (!Cmp) return <svg {...base} {...props}><circle cx="12" cy="12" r="3" /></svg>
  return Cmp(props)
}
