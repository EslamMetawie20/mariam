import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import { stagger, staggerItem } from './ui/Reveal'
import InfiniteMenu from './InfiniteMenu'
import { gallery } from '../data/content'

/* Detect whether to render the WebGL InfiniteMenu or the responsive grid fallback.
   We fall back when WebGL2 is missing, or on small / coarse-pointer devices
   where the 3D sphere is hard to control and heavy on the GPU. */
function useUseFallback() {
  const [fallback, setFallback] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(max-width: 900px)').matches) return true
    if (window.matchMedia('(pointer: coarse)').matches) return true
    try {
      const c = document.createElement('canvas')
      const gl = c.getContext('webgl2')
      if (!gl) return true
    } catch {
      return true
    }
    return false
  })

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const onChange = () => setFallback(mq.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  return fallback
}

export default function ProjectGallery() {
  const useFallback = useUseFallback()

  return (
    <Section
      id="gallery"
      eyebrow="Project Gallery"
      title="Inside the Coastal Resort"
      intro="An interactive tour through the project's signature spaces — from the marina and chalets to the solar canopy and the master plan. Drag the sphere to explore."
      className="relative overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-sea-deep"
    >
      {/* Soft ambient orbs to match the luxury coastal mood */}
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-sea-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {!useFallback && (
        <div className="relative">
          <div className="glass relative h-[640px] w-full overflow-hidden lg:h-[720px]">
            {/* Subtle inner gradient for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_rgba(6,24,43,0)_60%)]"
            />
            <InfiniteMenu items={gallery} scale={1} />
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-sand/60">
            Drag · Rotate · Release to snap
          </p>
        </div>
      )}

      {/* Always-available responsive image grid — primary on mobile,
          companion catalogue on desktop so every project still has its own card. */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className={`relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${useFallback ? '' : 'mt-20'}`}
      >
        {gallery.map((item) => (
          <motion.article
            key={item.title}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="glass group relative overflow-hidden"
          >
            <div className="relative h-60 w-full overflow-hidden sm:h-64">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/15 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-sand-light backdrop-blur">
                {item.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-sand-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand/75">{item.description}</p>
              <span className="mt-5 block h-px w-10 bg-gold/70 transition-all duration-300 group-hover:w-24" />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
