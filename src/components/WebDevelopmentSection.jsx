import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiExpress, SiPhp } from 'react-icons/si'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

const WebDevelopmentSection = () => {
  const webTechs = [
    {
      title: 'Frontend',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: FaNode,
      color: 'from-green-500 to-emerald-500',
      techs: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'WebSockets'],
    },
    {
      title: 'Bases de Datos',
      icon: FaDatabase,
      color: 'from-purple-500 to-pink-500',
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
      title: 'Herramientas & DevOps',
      icon: FaCode,
      color: 'from-orange-500 to-red-500',
      techs: ['Git', 'Docker', 'GitHub Pages', 'Vercel', 'Vite'],
    },
  ]

  return (
    <section id="web-dev" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Desarrollo Full Stack"
          title="Experiencia en Desarrollo Web"
          description="Especializado en construir aplicaciones web escalables y de alto rendimiento con el stack MERN moderno y backends tradicionales en PHP."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {webTechs.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6 md:p-8 h-full hover:border-electric-blue/50 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-lg bg-dark-navy flex items-center justify-center text-lg text-electric-blue">
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-pure-white mb-4">{category.title}</h3>

                  {/* Tech List */}
                  <ul className="space-y-2">
                    {category.techs.map((tech) => (
                      <li key={tech} className="text-sm text-gray-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/50"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Featured Project Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Tiempo de Respuesta API', value: '< 200ms', icon: '⚡' },
            { label: 'Puntuación Lighthouse', value: '95+', icon: '📊' },
            { label: 'Cobertura de Código', value: '85%+', icon: '✅' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="px-6 py-6 rounded-xl border border-electric-blue/20 bg-dark-navy/40 backdrop-blur-sm text-center hover:border-electric-blue/50 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-2xl mb-2">{metric.icon}</p>
              <p className="text-gray-muted text-sm mb-1">{metric.label}</p>
              <p className="text-xl font-bold text-electric-blue">{metric.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevelopmentSection
