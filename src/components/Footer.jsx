import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/JUANSDL10',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juan-silva-de-leon-a8a33826b/',
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:your-email@example.com',
    },
  ]

  return (
    <footer className="relative border-t border-electric-blue/20 bg-dark-navy/80 backdrop-blur-xl py-16 md:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-electric-blue/20"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent mb-2">
              JS
            </h3>
            <p className="text-gray-muted text-sm">
              Desarrollador Full Stack & Artista Digital creando experiencias interactivas.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-pure-white font-bold mb-4">Accesos Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-muted">
              <li>
                <a href="#home" className="hover:text-electric-blue transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-electric-blue transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-electric-blue transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-electric-blue transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-pure-white font-bold mb-4">Conectar</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-electric-blue/30 bg-electric-blue/5 text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-muted"
        >
          <p>
            © {currentYear} Juan Silva. Diseñado con <span className="text-neon-cyan">✨</span> usando React, Tailwind
            CSS & Framer Motion.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#privacy" className="hover:text-electric-blue transition-colors">
              Política de Privacidad
            </a>
            <span className="text-electric-blue/20">•</span>
            <a href="#terms" className="hover:text-electric-blue transition-colors">
              Términos de Uso
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  )
}
