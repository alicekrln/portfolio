import { MARQUEE } from '@/lib/data'
import { Asterisk } from 'lucide-react'

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <section className='overflow-hidden border-y border-border/60 bg-foreground py-5 text-background'>
      <div className='flex w-max animate-marquee gap-10 whitespace-nowrap'>
        {items.map((s, i) => (
          <span
            key={i}
            className='flex items-center gap-10 font-display text-3xl font-light italic sm:text-4xl'
          >
            <span>{s}</span>
            <Asterisk
              className={`h-5 w-5 ${i % 3 === 0 ? 'text-tangerine' : i % 3 === 1 ? 'text-magenta' : 'text-teal'}`}
              strokeWidth={2}
            />
          </span>
        ))}
      </div>
    </section>
  )
}
