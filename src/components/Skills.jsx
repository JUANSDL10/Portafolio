import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiTypescript,
} from 'react-icons/si'
import { FaPhp, FaFigma } from 'react-icons/fa'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: SiReact, level: 'Avanzado' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Intermedio' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Avanzado' },
        { name: 'Next.js', icon: SiReact, level: 'Intermedio' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 'Avanzado' },
        { name: 'PHP', icon: FaPhp, level: 'Intermedio' },
        { name: 'Express.js', icon: SiNodedotjs, level: 'Avanzado' },
        { name: 'REST APIs', icon: FaPhp, level: 'Avanzado' },
      ],
    },
    {
      category: 'Bases de Datos',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 'Avanzado' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermedio' },
        { name: 'MySQL', icon: SiPostgresql, level: 'Intermedio' },
        { name: 'Firebase', icon: SiMongodb, level: 'Intermedio' },
      ],
    },
    {
      category: 'Herramientas & DevOps',
      skills: [
        { name: 'Git', icon: SiGit, level: 'Avanzado' },
        { name: 'Docker', icon: SiDocker, level: 'Intermedio' },
        { name: 'Figma', icon: FaFigma, level: 'Avanzado' },
        { name: 'Vite', icon: SiNodedotjs, level: 'Avanzado' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Habilidades & Experiencia"
          title="Competencias Técnicas"
          description="Un panorama completo de mis habilidades técnicas, niveles de experiencia y las herramientas con las que trabajo a diario."
          align="left"
        />

        {/* Skills Grid by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300">
                {/* Category Header */}
                <h3 className="text-lg font-bold text-pure-white mb-6 pb-4 border-b border-electric-blue/20">
                  {category.category}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="group/skill cursor-default"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-electric-blue/10">
                            <Icon className="text-electric-blue text-lg" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-pure-white">{skill.name}</p>
                            <p className="text-xs text-gray-muted">{skill.level}</p>
                          </div>
                        </div>
                        {/* Skill Level Bar */}
                        <div className="w-full h-1.5 bg-electric-blue/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan"
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Desarrollo Frontend',
              percentage: 90,
              description: 'React, TypeScript, frameworks CSS modernos',
            },
            {
              title: 'Desarrollo Backend',
              percentage: 85,
              description: 'Node.js, Express, diseño de bases de datos',
            },
            {
              title: 'Integración Full Stack',
              percentage: 80,
              description: 'Desarrollo de aplicaciones de extremo a extremo',
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="px-6 py-8 rounded-xl border border-electric-blue/20 bg-dark-navy/40 backdrop-blur-sm hover:border-electric-blue/50 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-pure-white font-bold mb-2">{skill.title}</h4>
              <p className="text-gray-muted text-sm mb-6">{skill.description}</p>
              <div className="w-full h-2 bg-electric-blue/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <p className="text-right text-xs text-electric-blue font-semibold mt-2">{skill.percentage}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
