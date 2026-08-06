import { SKILLS, toneBg, toneText } from '../../lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { Asterisk } from 'lucide-react'

export function Stack() {
  return (
    <section
      id='stack'
      className='mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32'
    >
      <SectionHeading eyebrow='03 - Stack' title="What I'm good at" />
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className='group relative overflow-hidden rounded-3xl bg-card p-7 hairline transition-all duration-300 hover:-translate-y-1 soft-ring'
          >
            <div className='flex items-start justify-between'>
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${toneBg[s.tone]} transition-transform group-hover:animate-wiggle`}
              >
                <s.icon
                  className='h-6 w-6 text-foreground'
                  strokeWidth={1.75}
                />
              </div>
              <Asterisk
                className={`h-5 w-5 ${toneText[s.tone]} opacity-0 transition-opacity group-hover:opacity-100`}
              />
            </div>
            <h3 className='mt-6 font-display text-3xl font-light'>
              <span className='italic'>{s.name.split(' ')[0]}</span>{' '}
              {s.name.split(' ').slice(1).join(' ')}
            </h3>
            <p className='mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground'>
              {s.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
