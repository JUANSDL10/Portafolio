import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import { useMagneticButton } from '../hooks/useMagneticButton'

const resumeUrl = `${import.meta.env.BASE_URL}CV_Juan_Silva.pdf`

/**
 * SplitText Component - Animates text line by line
 */
const SplitText = ({ text, delay = 0, size = 'lg' }) => {
  const lines = text.split('\n')

  const sizeClasses = {
    lg: 'text-4xl md:text-6xl lg:text-7xl',
    md: 'text-2xl md:text-3xl lg:text-4xl',
    sm: 'text-lg md:text-xl',
  }

  return (
    <div className="overflow-hidden">
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + lineIndex * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`font-black font-space-grotesk ${sizeClasses[size]} leading-tight tracking-tight`}
        >
          {line}
        </motion.div>
      ))}
    </div>
  )
}

/**
 * Magnetic Button Component - Follows cursor on hover
 */
const MagneticButton = ({ children, onClick, className, variant = 'primary' }) => {
  const { ref, magneticProps, style } = useMagneticButton(0.2)

  const baseClasses = `px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all flex items-center gap-2 relative overflow-hidden group cursor-pointer`

  const variants = {
    primary:
      'bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy hover:shadow-glow shadow-lg',
    secondary:
      'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:shadow-glow transition-all',
    tertiary:
      'bg-charcoal-black border border-electric-blue/40 text-electric-blue hover:border-electric-blue hover:bg-electric-blue/5',
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...magneticProps}
      style={style}
      whileTap={{ scale: 0.92 }}
      whileHover={{ letterSpacing: '0.05em' }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  )
}

/**
 * Floating Badge Component
 */
const FloatingBadge = ({ icon: Icon, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue font-medium hover:border-electric-blue/60 hover:bg-electric-blue/20 transition-all"
    >
      {Icon && <Icon size={16} />}
      {label}
    </motion.div>
  )
}

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'CV_Juan_Silva.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Main gradient blobs */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-electric-blue/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"
        />

        {/* Grid background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(0, 194, 255, 0.1) 25%, rgba(0, 194, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, 0.1) 75%, rgba(0, 194, 255, 0.1) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(0, 194, 255, 0.1) 25%, rgba(0, 194, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, 0.1) 75%, rgba(0, 194, 255, 0.1) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Main Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <FloatingBadge label="🚀 Desarrollador Full Stack" delay={0.1} />

            {/* Main Heading */}
            <div className="space-y-2">
              <SplitText text="Juan Silva" size="lg" delay={0.2} />
              <SplitText
                text="Desarrollador Multimedia"
                size="md"
                delay={0.35}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Creo experiencias digitales interactivas a través del <span className="text-electric-blue font-semibold">Desarrollo Web</span>, el <span className="text-neon-cyan font-semibold">Desarrollo de Videojuegos</span> y la creación de <span className="text-bright-cyan font-semibold">Contenido 3D</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 py-6 border-y border-electric-blue/20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-electric-blue">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center border-l border-r border-electric-blue/20">
                <div className="text-2xl md:text-3xl font-black text-neon-cyan">3</div>
                <div className="text-xs md:text-sm text-gray-400">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-bright-cyan">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Años Exp.</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                variant="primary"
              >
                Ver Portafolio <FaArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                onClick={handleDownloadCV}
                variant="secondary"
              >
                <FaDownload size={16} /> Descargar CV
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://github.com/JUANSDL10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-electric-blue/10 border border-electric-blue/30 rounded-lg text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue transition-all"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/juansilva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan transition-all"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Glowing box */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(0, 194, 255, 0.3)',
                    '0 0 60px rgba(0, 228, 255, 0.5)',
                    '0 0 40px rgba(0, 194, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl border border-electric-blue/40 bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5 backdrop-blur-xl"
              />

              {/* Inner content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-64 h-64 rounded-full border-2 border-transparent bg-gradient-to-r from-electric-blue via-neon-cyan to-bright-cyan bg-clip-border opacity-30"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 w-24 h-24 bg-electric-blue/20 rounded-lg blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 left-8 w-32 h-32 bg-neon-cyan/15 rounded-lg blur-xl"
              />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl font-black bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent"
                >
                  JS
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-400 mt-4 tracking-widest"
                >
                  DESARROLLADOR CREATIVO
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="text-xs text-gray-400 mb-2">Desplázate para explorar</div>
        <div className="w-6 h-10 border-2 border-electric-blue/30 rounded-full flex items-start justify-center p-2 mx-auto">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-electric-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
