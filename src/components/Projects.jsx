import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="mt-28 space-y-10">
      <SectionTitle title="Proyectos" subtitle="Trabajos recientes y casos de estudio" />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
