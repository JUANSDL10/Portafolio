import { motion } from 'framer-motion'

export const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  delay = 0,
  align = 'left' 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.1 }}
          className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-pure-white mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
