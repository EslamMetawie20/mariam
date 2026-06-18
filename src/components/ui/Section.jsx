import Reveal from './Reveal'

/* ----------------------------------------------------------------------------
   Section — a consistent section shell with an optional eyebrow + heading.
   Keeps spacing, max-width, and heading style uniform across the whole site.
   ---------------------------------------------------------------------------- */
export default function Section({ id, eyebrow, title, intro, children, className = '', light = false }) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 lg:py-32 ${className}`}>
      <div className="container-px">
        {(eyebrow || title || intro) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <Reveal>
                <span className="eyebrow">{eyebrow}</span>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.05}>
                <h2
                  className={`mt-4 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl ${
                    light ? 'text-navy-deep' : 'text-sand-light'
                  }`}
                >
                  {title}
                </h2>
              </Reveal>
            )}
            {intro && (
              <Reveal delay={0.1}>
                <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-navy/70' : 'text-sand/80'}`}>
                  {intro}
                </p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
