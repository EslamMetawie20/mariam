/* ----------------------------------------------------------------------------
   WaveDivider — a soft SVG wave used to transition between sections.
   `flip` turns it upside-down; `className` sets the fill color (text-*).
   ---------------------------------------------------------------------------- */
export default function WaveDivider({ flip = false, className = 'text-navy-deep' }) {
  return (
    <div className={`pointer-events-none w-full leading-[0] ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        className={`h-16 w-full sm:h-24 ${className}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
