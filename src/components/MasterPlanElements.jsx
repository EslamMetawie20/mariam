import { motion } from 'framer-motion'
import Section from './ui/Section'
import { stagger, staggerItem } from './ui/Reveal'
import Icon from './icons'
import { elements } from '../data/content'

export default function MasterPlanElements() {
  return (
    <Section
      id="elements"
      eyebrow="Master Plan Elements"
      title="Every Piece of the Composition"
      intro="From the marina to the promenade, eleven coordinated elements work together to form a complete, walkable waterfront resort."
      className="relative overflow-hidden bg-sand-soft"
      light
    >
      {/* Subtle decorative wave behind the grid */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-sea-light/20 blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {elements.map((el) => (
          <motion.article
            key={el.title}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="glass-light group flex flex-col p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-sea-deep text-gold-light shadow-soft">
              <Icon name={el.icon} width={24} height={24} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-navy-deep">{el.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/65">{el.text}</p>
            <span className="mt-4 h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-20" />
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
