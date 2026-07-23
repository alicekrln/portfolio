// import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
    </>
  ),
})

// function RootComponent() {
//   return (
//     <React.Fragment>
//       <div>Hello "__root"!</div>
//       <Outlet />
//     </React.Fragment>
//   )
// }
