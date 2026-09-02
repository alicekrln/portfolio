import { SectionHeading } from '../ui/SectionHeading'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function About() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })

  return (
    <section
      id='about'
      className='section-block bg-about-bg px-4 py-24 text-ink sm:px-8 '
    >
      <div ref={ref} className='mx-auto w-full max-w-6xl text-about-txt'>
        <SectionHeading
          label='About'
          title='The short version'
          className='reveal'
        />
        <p className='reveal max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl'>
          Frontend dev student from Stockholm, probably overthinking a button
          somewhere.
        </p>
        <p className='reveal mt-8 max-w-xl text-base leading-relaxed sm:text-lg'>
          Second year at Chas Academy (2025-2027), focused on clean, accessible,
          user-centered interfaces. Currently on the hunt for a six-month
          internship (Nov 2026-Apr 2027) to learn from a real team, on real
          products, with real users.
        </p>
      </div>
    </section>
  )
}
