'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ReactLenis, useLenis } from 'lenis/react'
import { useReducedMotion } from 'motion/react'
import type Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useIntroStore } from '@/stores/useIntroStore'

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, lerp: 0.1, smoothWheel: !reduceMotion }}
    >
      <ScrollSync />
      {children}
    </ReactLenis>
  )
}

function scrollToHash(lenis: Lenis, immediate = false) {
  const id = window.location.hash.slice(1)
  const target = id && document.getElementById(id)
  if (!target) return
  lenis.scrollTo(target.getBoundingClientRect().top + window.scrollY, {
    immediate,
    force: true,
  })
}

function ScrollSync() {
  const lenis = useLenis(ScrollTrigger.update)
  const pathname = usePathname()
  const phase = useIntroStore((s) => s.phase)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    if (window.location.pathname === '/' && window.location.hash) {
      history.replaceState(null, '', '/')
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!lenis) return
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [lenis])

  useEffect(() => {
    const { phase: current, setPhase } = useIntroStore.getState()
    if (pathname !== '/' && current === 'name') setPhase('nav')
  }, [pathname])

  const locked = phase === 'name'
  useEffect(() => {
    if (!lenis) return
    if (locked) {
      lenis.scrollTo(0, { immediate: true, force: true })
      lenis.stop()
      return
    }

    let cancelled = false
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        if (cancelled) return
        ScrollTrigger.refresh()
        lenis.start()
        scrollToHash(lenis, true)
      })
    })
    return () => {
      cancelled = true
    }
  }, [lenis, locked])

  useEffect(() => {
    if (!lenis || useIntroStore.getState().phase === 'name') return
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      lenis.resize()
      scrollToHash(lenis, true)
    })
    return () => cancelAnimationFrame(id)
  }, [lenis, pathname])

  return null
}
