'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

type RevealProps = {
  children: ReactNode
  className?: string
  selector?: string
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function Reveal({
  children,
  className,
  selector,
  y = 60,
  duration = 1,
  stagger = 0.08,
  start = 'top 80%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current!
      gsap.fromTo(
        selector ? gsap.utils.toArray(selector, el) : el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
