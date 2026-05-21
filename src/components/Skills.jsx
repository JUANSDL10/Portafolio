import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="mt-28 space-y-10">
      <SectionTitle title="Habilidades" subtitle="Tecnologías y herramientas" />
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} items={skill.items} />
        ))}
      </div>
    </section>
  )
}
