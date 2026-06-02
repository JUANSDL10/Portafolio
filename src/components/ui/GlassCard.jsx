import { motion } from 'framer-motion'

/**
 * GlassCard Component - Premium glassmorphic card with hover effects
 * Used throughout the portfolio for consistent design language
 */
export default function GlassCard({
  className = '',
  children,
  hover = true,
  animated = true,
  delay = 0,
  variant = 'default',
}) {
  const variants = {
    default: 'bg-charcoal-black/40 border-electric-blue/20 hover:border-electric-blue/50',
    premium: 'bg-electric-blue/5 border-electric-blue/40 hover:border-electric-blue/70 hover:bg-electric-blue/10',
    secondary: 'bg-charcoal-black/60 border-neon-cyan/20 hover:border-neon-cyan/50',
  }

  const baseClasses = `rounded-2xl border backdrop-blur-xl backdrop-filter transition-all duration-300 shadow-glass ${variants[variant]} ${className}`

  if (!animated) {
    return (
      <div
        className={`${baseClasses} p-6 ${
          hover ? 'hover:shadow-glass-strong cursor-pointer' : ''
        }`}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: '0 20px 40px rgba(0, 194, 255, 0.15)',
            }
          : {}
      }
      className={`${baseClasses} p-6 rounded-2xl`}
    >
      {children}
    </motion.div>
  )
}

