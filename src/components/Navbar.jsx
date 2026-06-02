import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Web Dev', id: 'web' },
    { label: 'Games', id: 'games' },
    { label: '3D Art', id: 'art3d' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-navy/60 backdrop-blur-xl shadow-glass border-b border-electric-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer"
        >
          <div className="text-2xl font-black bg-gradient-to-r from-electric-blue via-neon-cyan to-bright-cyan bg-clip-text text-transparent">
            JS
          </div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-lg opacity-20 blur-xl -z-10"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(({ label, id }) => (
            <motion.button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === id
                  ? 'text-electric-blue'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              whileHover={{ backgroundColor: 'rgba(0, 194, 255, 0.05)' }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 194, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy font-semibold rounded-lg hover:shadow-glow transition-all cursor-pointer"
          >
            Get in Touch
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-electric-blue hover:bg-electric-blue/10 rounded-lg transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-navy/80 backdrop-blur-xl border-b border-electric-blue/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map(({ label, id }) => (
                <motion.button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  whileHover={{ x: 8 }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === id
                      ? 'bg-electric-blue/20 text-electric-blue'
                      : 'text-gray-300 hover:bg-electric-blue/10 hover:text-electric-blue'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

