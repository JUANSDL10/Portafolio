import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects, categories } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-32">
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
          subtitle="Todos los Proyectos"
          title="Explora el Portafolio Completo"
          description="Una vista colectiva de todo mi trabajo. Filtra por disciplina y haz clic en cualquier tarjeta para abrir su ficha detallada con galería interactiva."
          align="left"
        />

        {/* Chips de filtro */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = cat.key === 'all' ? projects.length : projects.filter((p) => p.category === cat.key).length
            const isActive = filter === cat.key
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setFilter(cat.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-electric-blue bg-electric-blue/15 text-electric-blue'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-electric-blue/40 hover:text-gray-200'
                }`}
              >
                {cat.label}
                <span className="ml-2 font-mono text-xs opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
