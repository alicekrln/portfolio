import { PROJECTS } from '../../lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../project/ProjectCard'

export function Projects() {
  return (
    <section
      id='projects'
      className='mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32'
    >
      <SectionHeading
        eyebrow='02 - Projects'
        title="Recent things I've built"
      />
      <div className='grid gap-6 md:grid-cols-2'>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
