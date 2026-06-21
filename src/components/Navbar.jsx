import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { owner } from '../data/content'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#concept', label: 'Concept' },
  { href: '#elements', label: 'Master Plan' },
  { href: '#cv', label: 'Portfolio' },
  { href: '#video', label: 'Video' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-deep/80 backdrop-blur-xl shadow-glass' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-medium tracking-wide text-sand-light">
            {owner.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest2 text-gold-light">
            Coastal Resort Master Plan
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-widest text-sand/80 transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#video" className="btn-gold !px-5 !py-2 text-xs">
              Watch Video
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sand-light lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/5">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-8 py-4 text-sm font-medium uppercase tracking-widest text-sand/80 hover:text-gold-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
