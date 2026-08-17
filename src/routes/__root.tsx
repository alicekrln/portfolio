import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

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
