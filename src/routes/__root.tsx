// import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PageContainer } from '@/components/layout/PageContainer'
import { BackgroundDecor } from '@/components/sections/BackgroundDecor'

export const Route = createRootRoute({
  component: () => (
    <>
      <BackgroundDecor />
      <NavBar />
      <main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
