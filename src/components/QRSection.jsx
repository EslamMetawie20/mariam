import { motion } from 'framer-motion'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { qr } from '../data/content'

export default function QRSection() {
  return (
    <Section
      id="video"
      className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-sea-deep to-navy-800"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-sea-light/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Text side */}
        <div>
          <Reveal>
            <span className="eyebrow">Project Video</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-light leading-tight text-sand-light sm:text-5xl lg:text-6xl">
              {qr.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-sand/80">{qr.subtext}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-widest text-gold-light">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50">
                {/* camera/scan glyph */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
                  <rect x="9" y="9" width="6" height="6" rx="1" />
                </svg>
              </span>
              Point your phone camera at the code
            </div>
          </Reveal>
        </div>

        {/* QR glass card */}
        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass relative w-full max-w-sm p-8 text-center"
          >
            {/* Gold ring accent */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-gold/20" />

            <span className="eyebrow">Scan Me</span>

            {/* The QR image. 📍 Source path is set in src/data/content.js → qr.imagePath
                and the file must live at: public/assets/QR.png */}
            <div className="mx-auto mt-5 w-fit rounded-2xl bg-white p-4 shadow-soft">
              <img
                src={qr.imagePath}
                alt="QR code to watch the Coastal Resort Master Plan project video"
                className="h-56 w-56 object-contain"
              />
            </div>

            <p className="mt-6 font-display text-2xl text-sand-light">{qr.heading}</p>

            <span className="btn-gold mt-5 cursor-default">{qr.ctaLabel}</span>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  )
}
