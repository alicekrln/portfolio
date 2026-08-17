import { useLayoutEffect, useRef } from 'react'
import gsap from '@/lib/gsap'

export function useScrollReveal<T extends HTMLElement>(options?: {
  y?: number
  duration?: number
  stagger?: number
  selector?: string
  start?: string
}) {
  const ref = useRef<T | null>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const targets = options?.selector
      ? el.querySelectorAll(options.selector)
      : el

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: options?.y ?? 60 },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 1,
          ease: 'power3.out',
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [options?.y, options?.duration, options?.stagger, options?.selector, options?.start,])

  return ref
}
