import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { pdf } from '../data/content'

export default function PDFSection() {
  return (
    <Section id="pdf" className="relative overflow-hidden bg-sand-soft" light>
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sea-light/20 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Visual document mockup */}
        <Reveal className="order-2 flex justify-center lg:order-1">
          <div className="relative">
            {/* stacked paper effect */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-navy/10" />
            <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl bg-navy/15" />
            <div className="glass-light relative flex aspect-[3/4] w-64 flex-col justify-between rounded-2xl p-6 sm:w-72">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-sea-deep">Master Plan</span>
                <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
                  PDF
                </span>
              </div>
              {/* faux plan lines */}
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-gradient-to-br from-sea/30 to-sand/60" />
                <div className="h-2 w-3/4 rounded bg-navy/15" />
                <div className="h-2 w-1/2 rounded bg-navy/15" />
                <div className="h-2 w-2/3 rounded bg-navy/15" />
              </div>
              <p className="text-center font-display text-lg text-navy-deep">Coastal Resort Master Plan</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow !text-gold-deep">Presentation Output</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-light leading-tight text-navy-deep sm:text-5xl">{pdf.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy/70">{pdf.text}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-7 space-y-3">
              {pdf.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-navy/80">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/90 text-navy-deep">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-base">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Button only links if you set pdf.filePath in content.js */}
          {pdf.filePath ? (
            <Reveal delay={0.2}>
              <a href={pdf.filePath} target="_blank" rel="noreferrer" className="btn-gold mt-8">
                Open the PDF
              </a>
            </Reveal>
          ) : (
            <Reveal delay={0.2}>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-navy/70">
                Presentation-Ready PDF
              </span>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  )
}
