import { motion } from 'framer-motion'
import { FaGamepad, FaUnity, FaCode } from 'react-icons/fa'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

const GameDevelopmentSection = () => {
  const games = [
    {
      title: 'Game Project 1',
      description: 'Action-packed gameplay with immersive mechanics',
      tags: ['C++', 'Blueprints', 'Physics', 'AI'],
      features: ['Advanced AI Systems', 'Optimized Rendering', 'Multiplayer Support'],
      placeholder: 'Game 1',
    },
    {
      title: 'Game Project 2',
      description: 'Puzzle mechanics with artistic vision',
      tags: ['C++', 'Procedural Generation', 'Audio Design'],
      features: ['Procedural Levels', 'Dynamic Audio', 'Cross-platform'],
      placeholder: 'Game 2',
    },
    {
      title: 'Game Project 3',
      description: 'Adventure game with rich storytelling',
      tags: ['C#', 'Unity', 'Animation', 'Narrative'],
      features: ['Complex Narratives', 'Beautiful Cinematics', 'Rich Interactions'],
      placeholder: 'Game 3',
    },
  ]

  return (
    <section id="game-dev" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Game Development"
          title="Gaming Portfolio"
          description="Crafting engaging gameplay experiences with C++, C#, and industry-standard engines."
          align="left"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300 h-full flex flex-col">
                {/* Game Thumbnail Placeholder */}
                <div className="relative w-full h-40 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 border-b border-electric-blue/20 flex items-center justify-center overflow-hidden group/thumb">
                  <div className="absolute inset-0 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/10"></div>
                  <div className="relative text-center">
                    <FaGamepad className="text-4xl text-electric-blue/30 mx-auto mb-2" />
                    <p className="text-sm text-electric-blue/50 font-semibold">{game.placeholder}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-pure-white mb-2">{game.title}</h3>
                  <p className="text-sm text-gray-muted mb-6 flex-1">{game.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 text-sm">
                    {game.features.map((feature) => (
                      <p key={feature} className="text-gray-muted flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neon-cyan"></span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Engine Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-muted mb-8">Proficient with industry-leading engines and tools:</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Unreal Engine', value: '4.x / 5.x' },
              { label: 'Unity', value: '2021 / 2022+' },
              { label: 'Programming', value: 'C++ / C#' },
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
