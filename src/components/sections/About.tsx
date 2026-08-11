import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section
      id='about'
      className='mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32'
    >
      <SectionHeading eyebrow='01 - About' title='Nice to meet you' />
      <div className='relative overflow-hidden rounded-3xl bg-card p-8 hairline soft-ring sm:p-12'>
        <p className='relative font-display text-3xl font-light leading-tight sm:text-4xl'>
          Nice to meet you
        </p>
        <div className='mt-8 h-px w-16 bg-tangerine' />
        <p className=' mt-8 text-base leading-relaxed text-muted-foreground'>
          I'm Alice, a frontend dev student from Stockholm. I'm currently in the
          second year of a two-year YH program (2025-2027). My focus is on
          building clean, accessible, and user-centered web interfaces using
          modern tools and frameworks. I'm looking for a six-month internship
          (Nov 2026-Apr 2027) to take the next step - learning from real teams,
          on real products, with real users.
        </p>
      </div>
    </section>
  )
}
