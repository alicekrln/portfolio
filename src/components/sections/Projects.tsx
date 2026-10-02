import { PROJECTS } from '@/lib/data'
import { ProjectRow } from '../projects/ProjectRow'

export function Projects() {
  return (
    <section id='projects' aria-label='Projects'>
      {PROJECTS.map((project, i) => (
        <ProjectRow key={project.slug} project={project} reversed={i % 2 === 1} />
      ))}
    </section>
  )
}
