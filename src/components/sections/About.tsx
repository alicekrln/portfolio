import { toneBg, type Tone } from '../../lib/data'
import { SectionHeading } from '../ui/SectionHeading'

const STATS: { k: string; v: string; tone: Tone }[] = [
  { k: '', v: '', tone: 'tangerine' },
  { k: '', v: '', tone: 'magenta' },
  { k: '', v: '', tone: 'teal' },
  { k: '', v: '', tone: 'mustard' },
]

export function About() {
  return (
    <section
      id='about'
      className='mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32'
    >
      <SectionHeading eyebrow='01 - About' title='Nice to meet you' />
      <div className='grid gap-8 lg:grid-cols-[1.2fr_1fr]'>
        <div className='relative overflow-hidden rounded-3xl bg-card p-8 hairline soft-ring sm:p-12'>
          <p className='relative font-display text-3xl font-light leading-tight sm:text-4xl'>
            Nice to meet you
          </p>
          <div className='mt-8 h-px w-16 bg-tangerine' />
          <p className=' mt-8 text-base leading-relaxed text-muted-foreground'>
            I'm Alice, a frontend dev student from Stockholm. I'm currently in
            the second year of a two-year YH program (2025-2027). My focus is on
            building clean, accessible, and user-centered web interfaces using
            modern tools and frameworks. I'm looking for a six-month internship
            (Nov 2026-Apr 2027) to take the next step - learning from real
            teams, on real products, with real users.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {STATS.map((s, i) => (
            <div
              key={s.v}
              className={`relative overflow-hidden rounded-3xl ${toneBg[s.tone]} p-6 text-foreground grain ${i % 2 === 1 ? 'translate-y-6' : ''}`}
            >
              <div className='font-display text-6xl font-light italic sm:text-7xl'>
                {s.k}
              </div>
              <div className='mt-3 font-mono text-[11px] uppercase tracking-[0.2em]'>
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
