import { motion } from 'framer-motion'
import { containerVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { getProjectsByCategory } from '../data/portfolioData'

const Art3DSection = () => {
  const artworks = getProjectsByCategory('art3d')

  return (
    <section id="art-3d" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Arte 3D & Modelado de Personajes"
          title="Personajes para Myth Cup"
          description="Esculpido, retopología y rigging profesional con un pipeline combinado de Blender, Maya y ZBrush. Explora cada personaje y su proceso de creación paso a paso."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {artworks.map((art, i) => (
            <ProjectCard key={art.slug} project={art} index={i} />
          ))}
        </motion.div>

        {/* Pipeline 3D */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-muted mb-8">Pipeline de creación de personajes 3D:</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Esculpido Digital', value: 'ZBrush' },
              { label: 'Retopología & Rigging', value: 'Maya' },
              { label: 'Texturizado & Shading', value: 'Blender' },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}>
                <p className="text-electric-blue font-bold text-lg">{item.value}</p>
                <p className="text-gray-muted text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Art3DSection
