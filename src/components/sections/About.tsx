import { SectionHeading } from '../ui/SectionHeading'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function About() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })

  return (
    <section
      id='about'
      className='section-block bg-lilac px-4 py-24 text-tone-ink sm:px-8'
    >
      <div ref={ref} className='mx-auto w-full max-w-5xl'>
        <SectionHeading
          eyebrow='01 - About'
          title='Nice to meet you'
          className='reveal'
        />
        <p className='reveal max-w-2xl font-display text-3xl font-light leading-tight sm:text-5xl'>
          I'm Alice, a frontend dev student from Stockholm - still learning,
          still building.
        </p>
        <p className='reveal mt-8 max-w-xl text-base leading-relaxed sm:text-lg opacity-80'>
          Currently in my second year at Chas Academy (2025-2027), focused on
          building clean, accessible, user-centered interfaces. Looking for a
          six-month internship (Nov 2026-Apr 2027) to learn from a real team, on
          real products, with real users.
        </p>
      </div>
    </section>
  )
}
