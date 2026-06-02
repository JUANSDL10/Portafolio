import { motion } from 'framer-motion'

/**
 * SectionHeader Component - Animated section title with line draw effect
 * Creates the signature text reveal animation
 */
export default function SectionHeader({
  title,
  subtitle,
  highlight,
  delay = 0,
  align = 'left',
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      className={`space-y-4 mb-12 ${alignClass[align]}`}
    >
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className={`h-1 bg-gradient-to-r from-electric-blue to-neon-cyan origin-${align} ${
          align === 'center' ? 'mx-auto w-24' : align === 'right' ? 'ml-auto w-24' : 'w-24'
        }`}
      />

      {/* Main title */}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: delay + 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-black font-space-grotesk leading-tight"
        >
          {title}
          {highlight && (
            <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-bright-cyan bg-clip-text text-transparent">
              {' '}
              {highlight}
            </span>
          )}
        </motion.h2>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="text-lg text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
