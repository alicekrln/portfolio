import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { Stack } from '@/components/sections/Stack'
import { Projects } from '@/components/sections/Projects'
import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Stack />
      <Contact />
    </>
  )
}
