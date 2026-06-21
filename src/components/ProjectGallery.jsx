import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './ui/Section'
import { stagger, staggerItem } from './ui/Reveal'
import InfiniteMenu from './InfiniteMenu'
import { gallery } from '../data/content'

/* Decide whether to render the WebGL InfiniteMenu or the responsive card grid.
   We fall back when WebGL2 is missing, on small screens, or coarse-pointer devices. */
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

function InteractiveStage() {
  const [activeItem, setActiveItem] = useState(gallery[0] ?? null)
  const [isMoving, setIsMoving] = useState(false)

  const handleActive = useCallback((item) => setActiveItem(item), [])
  const handleMoving = useCallback((moving) => setIsMoving(moving), [])

  const overlayClass = isMoving
    ? 'opacity-50 transition-opacity duration-200'
    : 'opacity-100 transition-opacity duration-500'

  return (
    <div className="relative">
      {/* 3-column layout: title · sphere · description.
          On < lg screens the grid collapses to a single column (title → sphere → description). */}
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)_minmax(0,1fr)] lg:gap-12">
        {/* LEFT — Title pane */}
        <div className={`order-1 lg:order-1 lg:text-right ${overlayClass}`}>
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={`title-${activeItem.title}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow">{activeItem.category}</span>
                <h3 className="mt-4 text-4xl font-light leading-tight text-sand-light sm:text-5xl lg:text-6xl">
                  {activeItem.title}
                </h3>
                <span className="mt-6 inline-block h-px w-16 bg-gold/70 lg:ml-auto" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CENTER — Sphere canvas */}
        <div className="order-2 lg:order-2">
          <div className="glass relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_rgba(6,24,43,0)_60%)]"
            />
            <InfiniteMenu
              items={gallery}
              scale={1}
              onActiveItemChange={handleActive}
              onMovingChange={handleMoving}
            />
          </div>
          <p className="mt-5 text-center text-[0.7rem] uppercase tracking-[0.3em] text-sand/55">
            Drag · Rotate · Release to snap
          </p>
        </div>

        {/* RIGHT — Description pane */}
        <div className={`order-3 lg:order-3 ${overlayClass}`}>
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={`desc-${activeItem.title}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass max-w-xl p-7 lg:p-8"
              >
                <p className="text-base leading-relaxed text-sand/85 sm:text-lg">{activeItem.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
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
      {/* Ambient orbs to match the luxury coastal mood */}
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-sea-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {!useFallback && <InteractiveStage />}

      {/* Responsive image-card grid — primary view on mobile,
          companion catalogue on desktop so every project has its own card. */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className={`relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${useFallback ? '' : 'mt-24'}`}
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
