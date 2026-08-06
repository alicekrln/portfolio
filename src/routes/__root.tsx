import { Outlet, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { BackgroundDecor } from '@/components/ui/BackgroundDecor'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <BackgroundDecor />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
