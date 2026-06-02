import { motion } from 'framer-motion'

/**
 * SkillCard Component - Interactive skill badge with hover effects
 */
export default function SkillCard({
  icon: Icon,
  label,
  category,
  level,
  delay = 0,
  onClick,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 194, 255, 0.2)',
      }}
      onClick={onClick}
      className={`relative p-6 rounded-2xl bg-charcoal-black/40 border border-electric-blue/20 backdrop-blur-xl cursor-pointer group overflow-hidden ${
        onClick ? 'hover:border-electric-blue/60' : ''
      }`}
    >
      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      {/* Content */}
      <div className="relative z-10 space-y-3">
        {Icon && (
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl text-electric-blue"
          >
            <Icon size={32} />
          </motion.div>
        )}

        <div>
          <h3 className="font-bold text-lg text-pure-white group-hover:text-neon-cyan transition-colors">
            {label}
          </h3>
          {category && (
            <p className="text-sm text-gray-400 group-hover:text-gray-300">{category}</p>
          )}
        </div>

        {level && (
          <div className="pt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-400">Proficiency</span>
              <span className="text-xs text-electric-blue font-semibold">{level}%</span>
            </div>
            <div className="w-full h-1.5 bg-charcoal-black rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: delay + 0.2 }}
                className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
