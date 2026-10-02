import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'

export default function HomePage() {
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
