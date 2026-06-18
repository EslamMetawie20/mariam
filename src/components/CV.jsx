import { motion } from 'framer-motion'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { cv, owner } from '../data/content'

/* Small reusable sub-heading for CV blocks */
function Block({ title, children, className = '' }) {
  return (
    <Reveal className={`glass p-7 ${className}`}>
      <h3 className="mb-5 flex items-center gap-3 text-xl font-medium text-sand-light">
        <span className="h-px w-6 bg-gold" />
        {title}
      </h3>
      {children}
    </Reveal>
  )
}

/* Timeline entry used by Education & Experience */
function TimelineItem({ item }) {
  return (
    <div className="relative border-l border-white/15 pb-6 pl-6 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-base font-semibold text-sand-light">{item.title}</h4>
        {item.period && <span className="text-xs uppercase tracking-widest text-gold-light">{item.period}</span>}
      </div>
      {item.org && <p className="text-sm font-medium text-sea-light">{item.org}</p>}
      {item.note && <p className="mt-1 text-sm leading-relaxed text-sand/70">{item.note}</p>}
    </div>
  )
}

export default function CV() {
  const c = cv.contact
  const socials = [
    { label: 'LinkedIn', url: c.linkedin },
    { label: 'Behance', url: c.behance },
    { label: 'Instagram', url: c.instagram },
  ].filter((s) => s.url)

  return (
    <Section
      id="cv"
      eyebrow="CV / Portfolio"
      title="About Mariam El Abasy"
      intro="Architecture graduate from Horus University, focused on luxury coastal and hospitality design."
      className="bg-navy-800"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Profile + identity */}
        <div className="lg:col-span-5">
          <Reveal className="glass relative overflow-hidden p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sea-light/15 blur-3xl" />
            {/* Monogram avatar (no photo needed) */}
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep font-display text-3xl font-medium text-navy-deep shadow-gold">
                {owner.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <h3 className="font-display text-2xl text-sand-light">{owner.name}</h3>
                <p className="text-sm uppercase tracking-widest text-gold-light">Architect</p>
                <p className="text-sm text-sand/70">{owner.university}</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-sand/80">{cv.profile}</p>
          </Reveal>

          {/* Contact */}
          <Block title="Contact" className="mt-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-sand/85">
                <span className="w-20 shrink-0 text-xs uppercase tracking-widest text-gold-light">Email</span>
                <a href={`mailto:${c.email}`} className="hover:text-gold-light">{c.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sand/85">
                <span className="w-20 shrink-0 text-xs uppercase tracking-widest text-gold-light">Phone</span>
                <a href={`tel:${c.phone}`} className="hover:text-gold-light">{c.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sand/85">
                <span className="w-20 shrink-0 text-xs uppercase tracking-widest text-gold-light">Location</span>
                {c.location}
              </li>
            </ul>
            {socials.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest text-sand/80 transition-colors hover:border-gold hover:text-gold-light"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </Block>
        </div>

        {/* Right column */}
        <div className="space-y-6 lg:col-span-7">
          <div className="grid gap-6 sm:grid-cols-2">
            <Block title="Education">
              <div>
                {cv.education.map((e, i) => (
                  <TimelineItem key={i} item={e} />
                ))}
              </div>
            </Block>

            <Block title="Experience / Training">
              <div>
                {cv.experience.map((e, i) => (
                  <TimelineItem key={i} item={e} />
                ))}
              </div>
            </Block>
          </div>

          {/* Skills pills */}
          <Block title="Skills">
            <div className="flex flex-wrap gap-2.5">
              {cv.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-sand/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>

          {/* Software skills with bars */}
          <Block title="Software Skills">
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {cv.software.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-sand/85">{s.name}</span>
                    <span className="text-gold-light">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-sea-light to-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Block>

          {/* Projects */}
          <Block title="Projects">
            <div className="grid gap-4 sm:grid-cols-2">
              {cv.projects.map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-base font-semibold text-sand-light">{p.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-sand/70">{p.note}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </Section>
  )
}
