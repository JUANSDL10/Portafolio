import { motion } from 'framer-motion'
import { scrollToSection } from '../../utils/scrollToSection'

/**
 * SectionButton Component - Animated button for navigation and actions
 * Supports magnetic hover effect and smooth scroll
 */
export default function SectionButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
}) {
  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href.substring(1))
    }
    if (onClick) {
      onClick(e)
    }
  }

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer rounded-lg'

  const variants = {
    primary: 'bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy hover:shadow-glow',
    secondary: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10',
    tertiary: 'bg-charcoal-black border border-electric-blue/40 text-electric-blue hover:border-electric-blue/80 hover:bg-electric-blue/5',
    ghost: 'text-electric-blue hover:text-neon-cyan transition-colors',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.a
      href={href || '#'}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </motion.a>
  )
}

