import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-electric-blue/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-neon-cyan/5 blur-3xl" />
        <motion.div
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          subtitle="Proyectos Destacados"
          title="Mi Portafolio"
          description="Aplicaciones Full Stack construidas con tecnologías modernas, buenas prácticas y enfoque en la experiencia del usuario."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
