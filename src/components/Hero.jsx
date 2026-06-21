import { motion } from 'framer-motion'
import { owner } from '../data/content'

/* Animated layered waves drawn at the bottom of the hero */
function HeroWaves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]" aria-hidden="true">
      {[
        { fill: 'rgba(63,176,201,0.18)', dur: 14, d: 'M0,80 C360,140 720,20 1080,70 C1260,95 1380,70 1440,60 L1440,160 L0,160 Z' },
        { fill: 'rgba(29,122,156,0.28)', dur: 10, d: 'M0,100 C300,60 600,150 900,100 C1140,60 1320,110 1440,90 L1440,160 L0,160 Z' },
        { fill: 'rgba(6,24,43,0.85)', dur: 18, d: 'M0,120 C360,150 720,90 1080,120 C1260,135 1380,120 1440,115 L1440,160 L0,160 Z' },
      ].map((w, i) => (
        <motion.svg
          key={i}
          className="absolute bottom-0 left-0 h-32 w-[200%] sm:h-44"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: w.dur, repeat: Infinity, ease: 'linear' }}
        >
          <path d={w.d} fill={w.fill} />
          <path d={w.d} fill={w.fill} transform="translate(1440,0)" />
        </motion.svg>
      ))}
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1]

/* Hero image is loaded from public/assets/portofio.png.
   BASE_URL keeps the path correct under the GitHub Pages subfolder (/mariam/).
   To swap the photo later, just replace that file (same name) — no code change needed. */
const heroImage = `${import.meta.env.BASE_URL}assets/portofio.png`

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── BACKGROUND ── gradient: deep navy → sea → sand */}
      <div className="absolute inset-0 bg-sea-sand" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sea-light/20 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/60" />

      <HeroWaves />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="container-px relative z-10 grid items-center gap-12 py-28 sm:py-32 lg:grid-cols-2 lg:gap-16 lg:py-36">
        {/* LEFT — Portrait panel.
            Order is set to come first on mobile (image-then-text), but stays left on lg+. */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="order-1 lg:order-1"
        >
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Soft gold halo behind the panel */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-sea-light/20 blur-2xl" aria-hidden />

            <div className="glass relative overflow-hidden p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt={`${owner.name} — architect`}
                  className="block h-auto w-full select-none object-cover"
                  draggable="false"
                />
                {/* Subtle bottom gradient for depth */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/55 to-transparent" />

                {/* Floating identity chip */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-gold-light shadow-[0_0_10px_2px_rgba(227,197,120,0.7)]" />
                  <span className="text-xs font-semibold uppercase tracking-widest2 text-sand-light">
                    {owner.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Text content */}
        <div className="order-2 text-center lg:order-2 lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow"
          >
            {owner.university}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl"
          >
            {owner.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-6 flex flex-col items-center gap-2 lg:items-start"
          >
            <span className="font-display text-3xl text-gold-gradient sm:text-4xl">
              {owner.projectTitle}
            </span>
            <span className="text-xs uppercase tracking-widest2 text-sand/80 sm:text-sm">
              {owner.projectType}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand-light/90 sm:text-lg lg:mx-0"
          >
            {owner.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a href="#overview" className="btn-gold">
              Explore the Project
            </a>
            <a href="#video" className="btn-ghost">
              Watch the Video
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gold-light"
          />
        </div>
      </motion.div>
    </section>
  )
}
