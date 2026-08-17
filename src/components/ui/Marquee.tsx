import { MARQUEE } from '@/lib/data'
import gsap from 'gsap'
import { Asterisk } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'

const TONES = [
  'text-coral',
  'text-pink',
  'text-teal',
  'text-lime',
  'text-sun',
  'text-violet',
  'text-carib',
]

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const items = [...MARQUEE, ...MARQUEE]

  useLayoutEffect(() => {
    if (!trackRef.current) return
    const el = trackRef.current
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 22,
      ease: 'linear',
      repeat: -1,
    })
    const pause = () => tween.pause()
    const resume = () => tween.play()
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => {
      tween.kill()
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section className='overflow-hidden bg-foreground py-6 text-background sm:py-8'>
      <div
        ref={trackRef}
        className='flex w-max items-center gap-12 whitespace-nowrap will-change-transform'
      >
        {items.map((s, i) => (
          <span key={i} className='flex items-center gap-10'>
            <span
              className={`font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl ${TONES[i % TONES.length]}`}
            >
              {s}
            </span>
            <Asterisk
              className={`h-6 w-6 ${TONES[(i + 1) % TONES.length]}`}
              strokeWidth={2.5}
            />
          </span>
        ))}
      </div>
    </section>
  )
}
