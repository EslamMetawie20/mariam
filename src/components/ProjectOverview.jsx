import { motion } from 'framer-motion'
import Section from './ui/Section'
import Reveal, { stagger, staggerItem } from './ui/Reveal'
import { overview } from '../data/content'

export default function ProjectOverview() {
  return (
    <Section
      id="overview"
      eyebrow="Project Overview"
      title="A Luxury Waterfront Destination"
      className="bg-navy-deep"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Paragraphs */}
        <div className="space-y-6 lg:col-span-7">
          {overview.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-sand/85">{p}</p>
            </Reveal>
          ))}

          {/* Editing note — highlighted block */}
          <Reveal delay={0.1}>
            <div className="glass mt-4 border-l-2 border-gold/70 p-6">
              <span className="eyebrow mb-2 block">Image-Editing Process</span>
              <p className="text-base leading-relaxed text-sand-light/90">{overview.editingNote}</p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4 self-start lg:col-span-5"
        >
          {overview.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="glass flex flex-col items-center justify-center p-8 text-center transition-colors hover:border-gold/40"
            >
              <span className="font-display text-4xl font-light text-gold-gradient sm:text-5xl">{s.value}</span>
              <span className="mt-2 text-xs uppercase tracking-widest text-sand/70">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
