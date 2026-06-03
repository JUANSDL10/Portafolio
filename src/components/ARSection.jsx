import { motion } from 'framer-motion'
import { containerVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { getProjectsByCategory } from '../data/portfolioData'

const ARSection = () => {
  const arProjects = getProjectsByCategory('ar')

  return (
    <section id="ar-dev" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Procesamiento de Imágenes & Realidad Aumentada"
          title="Experiencias WebAR"
          description="Realidad aumentada directamente en el navegador, sin instalación: reconocimiento de marcadores en tiempo real, modelos 3D superpuestos y acceso instantáneo vía código QR."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {arProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ARSection
