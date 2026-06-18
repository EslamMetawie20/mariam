import { motion } from 'framer-motion'
import Section from './ui/Section'
import { stagger, staggerItem } from './ui/Reveal'
import Icon from './icons'
import { concepts } from '../data/content'

export default function DesignConcept() {
  return (
    <Section
      id="concept"
      eyebrow="Design Concept"
      title="The Idea Behind the Plan"
      intro="Six guiding principles shape the master plan — each one connecting architecture, landscape, and the sea into a single elegant gesture."
      className="bg-gradient-to-b from-navy-deep to-navy-800"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {concepts.map((c) => (
          <motion.article
            key={c.title}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden p-8"
          >
            {/* Glow on hover */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sea/30 to-sea-deep/30 text-gold-light ring-1 ring-white/10">
                <Icon name={c.icon} />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-sand-light">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-sand/75">{c.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
