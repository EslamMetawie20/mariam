import { owner, cv } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep py-14">
      <div className="container-px">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-2xl text-sand-light">{owner.name}</p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-light">
              {owner.projectTitle} · {owner.university}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs uppercase tracking-widest text-sand/60">
            <a href="#overview" className="hover:text-gold-light">Overview</a>
            <a href="#concept" className="hover:text-gold-light">Concept</a>
            <a href="#elements" className="hover:text-gold-light">Master Plan</a>
            <a href="#cv" className="hover:text-gold-light">Portfolio</a>
            <a href="#video" className="hover:text-gold-light">Video</a>
            <a href={`mailto:${cv.contact.email}`} className="hover:text-gold-light">Contact</a>
          </nav>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <p className="text-xs text-sand/45">
            © {owner.name} — Architectural Graduation Project. All rights reserved.
          </p>

          <p className="text-[0.7rem] uppercase tracking-widest2 text-sand/40">
            Coded by{' '}
            <a
              href="mailto:eslammetawie@gmail.com"
              className="normal-case text-gold-light/80 transition-colors hover:text-gold-light"
            >
              eslammetawie@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
