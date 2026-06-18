import { motion } from 'framer-motion'

/* ----------------------------------------------------------------------------
   Reveal — a reusable scroll-triggered entrance animation wrapper.
   Wrap any content with <Reveal> to make it fade & rise into view once.
   Props:
     delay     — seconds to wait before animating (for staggering)
     y         — pixels to travel upward (default 28)
     as        — element tag (default 'div')
   ---------------------------------------------------------------------------- */
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className = '', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/* Container + item variants for staggered grids/lists. */
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
