import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

const Art3DSection = () => {
  const artworks = [
    {
      id: 1,
      title: 'Modelos de Personajes',
      category: 'Diseño de Personajes',
      tags: ['Modelado 3D', 'Escultura', 'Rigging'],
      height: 'tall',
    },
    {
      id: 2,
      title: 'Assets de Entorno',
      category: 'Entornos',
      tags: ['Level Design', 'Texturizado'],
      height: 'short',
    },
    {
      id: 3,
      title: 'Reels de Animación',
      category: 'Movimiento',
      tags: ['Animación por Claves', 'Motion Capture'],
      height: 'short',
    },
    {
      id: 4,
      title: 'Estudios de Materiales',
      category: 'Arte Técnico',
      tags: ['PBR', 'Shaders'],
      height: 'tall',
    },
    {
      id: 5,
      title: 'VFX & Partículas',
      category: 'Efectos',
      tags: ['Sistemas de Partículas', 'Efectos Visuales'],
      height: 'short',
    },
    {
      id: 6,
      title: 'Arte Conceptual',
      category: 'Diseño',
      tags: ['Arte Digital', 'Conceptos UI/UX'],
      height: 'tall',
    },
  ]

  return (
    <section id="art-3d" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Arte 3D & Animación"
          title="Arte Digital"
          description="Arte 3D, animaciones y efectos visuales de alta calidad creados para videojuegos y medios interactivos."
          align="left"
        />

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className={`group relative ${artwork.height === 'tall' ? 'md:row-span-2' : 'md:row-span-1'}`}
            >
              {/* Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-full bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300 flex flex-col justify-between p-6 md:p-8">
                {/* Content */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-3">
                    {artwork.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-pure-white mb-4">{artwork.title}</h3>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 flex items-center justify-center mb-4 rounded-lg bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5 border border-electric-blue/20 group-hover:from-electric-blue/10 group-hover:to-neon-cyan/10 transition-all">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🎨</p>
                    <p className="text-sm text-gray-muted">Vista Previa</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-muted mb-6">Visita mi portafolio completo en ArtStation y otras plataformas</p>
          <motion.a
            href="https://artstation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy font-semibold hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver en ArtStation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Art3DSection
