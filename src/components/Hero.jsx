import { motion } from 'framer-motion'
import { owner } from '../data/content'
import SplitText from './SplitText'
import Ribbons from './Ribbons'

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

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── BACKGROUND ── gradient: deep navy → sea → sand */}
      <div className="absolute inset-0 bg-sea-sand" />
      {/* Radial glow accents */}
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sea-light/20 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      {/* Soft grain / vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/60" />

      {/* Giant watermark name sitting in the BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
        <span className="select-none whitespace-nowrap font-display text-[22vw] font-semibold uppercase leading-none tracking-tight text-white/5">
          El Abasy
        </span>
      </div>

      {/* Interactive cursor-following ribbons (React Bits) — sits above the
          gradient but below the foreground text, so buttons stay clickable.
          Tweak colors/thickness here. */}
      <div className="absolute inset-0 z-[2]">
        <Ribbons
          colors={['#e3c578', '#3fb0c9', '#ffffff']}
          baseThickness={22}
          baseSpring={0.03}
          baseFriction={0.9}
          offsetFactor={0.05}
          maxAge={500}
          pointCount={50}
          speedMultiplier={0.5}
          enableFade={true}
          enableShaderEffect={true}
          effectAmplitude={2}
        />
      </div>

      <HeroWaves />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="container-px relative z-10 py-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow"
        >
          {owner.university}
        </motion.span>

        {/* ⭐ Mariam El Abasy — big & white, animated with SplitText */}
        <div className="mt-6">
          <SplitText
            text={owner.name}
            tag="h1"
            className="font-display text-6xl font-semibold leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)] sm:text-8xl lg:text-9xl"
            splitType="chars"
            delay={60}
            duration={1}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
        </div>

        {/* Project title + type */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="mx-auto mt-6 flex flex-col items-center gap-2"
        >
          <span className="font-display text-3xl text-gold-gradient sm:text-4xl">{owner.projectTitle}</span>
          <span className="text-sm uppercase tracking-widest2 text-sand/80">{owner.projectType}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand-light/90 sm:text-xl"
        >
          {owner.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#overview" className="btn-gold">
            Explore the Project
          </a>
          <a href="#video" className="btn-ghost">
            Watch the Video
          </a>
        </motion.div>
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
