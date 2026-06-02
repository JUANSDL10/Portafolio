import { motion } from 'framer-motion'
import { FaCalendar, FaMapMarkerAlt, FaAward } from 'react-icons/fa'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

export default function Experience() {
  const experiences = [
    {
      type: 'Education',
      title: 'Multimedia & Digital Animation',
      institution: 'FCFM UANL',
      period: '2020 - Present',
      location: 'Nuevo León, México',
      description: 'Specialized studies in 3D modeling, animation, game development, and interactive media.',
      highlights: ['3D Modeling & Sculpting', 'Character Animation', 'Game Development', 'Visual Effects'],
      icon: FaAward,
    },
    {
      type: 'Professional',
      title: 'Full Stack Development',
      institution: 'Self-Taught & Projects',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Building production-ready web applications with modern tech stacks and best practices.',
      highlights: ['MERN Stack', 'API Development', 'UI/UX Implementation', 'DevOps'],
      icon: FaCalendar,
    },
  ]

  const timeline = [
    { year: '2020', event: 'Started multimedia studies at UANL' },
    { year: '2021', event: 'Began learning web development' },
    { year: '2022', event: 'Built first full stack project' },
    { year: '2023', event: 'Expanded to game and 3D art' },
    { year: '2024', event: 'Professional portfolio development' },
    { year: '2025', event: 'Present - Continuing growth' },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Journey & Experience"
          title="Education & Timeline"
          description="My academic background and professional development journey."
          align="left"
        />

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8 h-full hover:border-electric-blue/50 transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-2">
                        {exp.type}
                      </p>
                      <h3 className="text-2xl font-bold text-pure-white">{exp.title}</h3>
                    </div>
                    <div className="p-3 rounded-lg bg-electric-blue/10">
                      <Icon className="text-electric-blue text-xl" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-muted">
                      <span className="text-electric-blue">→</span>
                      <span>{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-muted">
                      <FaCalendar className="text-electric-blue/50 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-muted">
                      <FaMapMarkerAlt className="text-electric-blue/50 text-xs" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-muted mb-6 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-pure-white mb-8">Timeline</h3>

          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue via-neon-cyan to-transparent transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-6 md:space-y-8 pl-8 md:pl-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 w-4 h-4 bg-dark-navy border-2 border-electric-blue rounded-full transform md:-translate-x-2"></div>

                {/* Content */}
                <div className="px-4 py-3 rounded-lg border border-electric-blue/20 bg-dark-navy/40 backdrop-blur-sm hover:border-electric-blue/50 transition-all">
                  <p className="text-electric-blue font-bold mb-1">{item.year}</p>
                  <p className="text-gray-muted">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
