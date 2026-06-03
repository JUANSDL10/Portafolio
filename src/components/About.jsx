import { motion } from 'framer-motion'
import { FaGraduationCap, FaBullseye, FaRocket, FaHeart } from 'react-icons/fa'
import SectionHeader from './ui/SectionHeader'
import GlassCard from './ui/GlassCard'

export default function About() {
  const bentoItems = [
    {
      id: 1,
      title: 'Trayectoria Profesional',
      subtitle: 'FCFM UANL – Multimedia & Animación',
      description:
        'Especializado en animación digital y desarrollo multimedia con pasión por las experiencias interactivas. Actualmente explorando el desarrollo de videojuegos y arte 3D.',
      icon: FaGraduationCap,
      span: 'md:col-span-2',
      accent: 'from-electric-blue to-neon-cyan',
    },
    {
      id: 2,
      title: 'Misión',
      subtitle: 'Crear Impacto',
      description: 'Construir soluciones digitales que combinen excelencia técnica e innovación creativa para experiencias modernas.',
      icon: FaBullseye,
      span: 'md:col-span-1',
      accent: 'from-neon-cyan to-electric-blue',
    },
    {
      id: 3,
      title: 'Experiencia Técnica',
      subtitle: 'Full Stack Developer',
      description: 'Frontend, Backend, Bases de Datos, DevOps, Juegos y Arte 3D. Código listo para producción con toque creativo.',
      icon: FaRocket,
      span: 'md:col-span-1',
      accent: 'from-electric-blue to-bright-cyan',
    },
    {
      id: 4,
      title: 'Filosofía',
      subtitle: 'Centrado en el Usuario & Rendimiento',
      description: 'Cada proyecto entrega experiencias excepcionales con diseño pixel-perfect y rendimiento optimizado.',
      icon: FaHeart,
      span: 'md:col-span-2',
      accent: 'from-bright-cyan to-neon-cyan',
    },
  ]

  return (
    <section id="about" className="relative py-20 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          title="Sobre Mí"
          highlight="& Visión"
          subtitle="Desarrollador Full Stack & Artista Digital creando experiencias interactivas de alto nivel"
          align="left"
          delay={0}
        />

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {bentoItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className={`${item.span} group relative`}
              >
                <div className="relative h-full">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Card */}
                  <div className="relative h-full bg-charcoal-black/50 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/60 transition-all duration-300 flex flex-col overflow-hidden">
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.accent} p-0.5 mb-6 flex-shrink-0`}
                    >
                      <div className="w-full h-full rounded-lg bg-charcoal-black flex items-center justify-center text-2xl text-electric-blue">
                        <Icon />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-pure-white mb-2">{item.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed flex-1">{item.description}</p>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan origin-left mt-6"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Facts Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: 'Proyectos', value: '10+', icon: '📦' },
            { label: 'Tecnologías', value: '20+', icon: '⚙️' },
            { label: 'Años Exp.', value: '5+', icon: '📚' },
            { label: 'Pasión', value: '200%', icon: '🔥' },
          ].map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="px-4 md:px-6 py-6 rounded-xl border border-electric-blue/20 bg-charcoal-black/30 backdrop-blur-sm text-center hover:border-electric-blue/60 hover:bg-electric-blue/5 transition-all"
            >
              <p className="text-3xl md:text-4xl mb-3">{fact.icon}</p>
              <p className="text-gray-400 text-xs md:text-sm mb-2">{fact.label}</p>
              <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

