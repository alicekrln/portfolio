import { PROJECTS } from '../../lib/data'
import { ProjectRow } from '../projects/ProjectRow'

export function Projects() {
  return (
    <section id='projects'>
      {PROJECTS.map((p, i) => (
        <ProjectRow key={p.slug} project={p} index={i} />
      ))}
    </section>
  )
}
