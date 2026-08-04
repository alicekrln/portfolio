import { Hero } from '@/components/sections/Hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
    <Hero />
    </>
  )
}
