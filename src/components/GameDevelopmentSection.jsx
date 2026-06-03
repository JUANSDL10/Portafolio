import { motion } from 'framer-motion'
import { containerVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { getProjectsByCategory } from '../data/portfolioData'

const GameDevelopmentSection = () => {
  const games = getProjectsByCategory('games')

  return (
    <section id="game-dev" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Desarrollo de Videojuegos"
          title="Portafolio de Juegos"
          description="Desde un multijugador en Unreal Engine 5 hasta un motor gráfico nativo en C++/OpenGL y un juego 3D en el navegador. Cada tarjeta abre su galería y detalles técnicos."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {games.map((game, i) => (
            <ProjectCard key={game.slug} project={game} index={i} />
          ))}
        </motion.div>

        {/* Stats de motores / tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-muted mb-8">Motores y tecnologías gráficas con las que trabajo:</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Motor AAA', value: 'Unreal Engine 5' },
              { label: 'Gráficos Nativos', value: 'C++ / OpenGL' },
              { label: 'Gráficos Web', value: 'Three.js / WebGL' },
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

export default GameDevelopmentSection
