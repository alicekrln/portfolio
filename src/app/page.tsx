import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
