import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIntroStore } from '@/stores/useIntroStore'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const phase = useIntroStore((s) => s.phase)

  useEffect(() => {
    if (phase !== 'done') {
      document.documentElement.classList.add('scroll-locked')
      return
    }

    let cancelled = false
    const settle = async () => {
      if ('fonts' in document) {
        await document.fonts.ready.catch(() => {})
      }
      await Promise.all(
        Array.from(document.images).map((img) => img.decode().catch(() => {})),
      )
      if (cancelled) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return
          ScrollTrigger.refresh()
          document.documentElement.classList.remove('scroll-locked')
        })
      })
    }
    settle()

    return () => {
      cancelled = true
    }
  }, [phase])

  useEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }, [pathname])

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
