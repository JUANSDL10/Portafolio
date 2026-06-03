import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { containerVariants, itemVariants } from '../utils/animations/animationVariants'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'juansilva200310@gmail.com',
      link: 'mailto:juansilva200310@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Nuevo León, México',
      link: '#',
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+52 (555) 123-4567',
      link: 'tel:+525551234567',
    },
  ]

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/JUANSDL10' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          subtitle="Conectemos"
          title="Contáctame"
          description="¿Tienes un proyecto en mente? Colaboremos y creemos algo increíble juntos."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-1 space-y-6"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  variants={itemVariants}
                  className="group relative block"
                >
                  {/* Glassmorphism Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-electric-blue/10 mt-1">
                        <Icon className="text-electric-blue text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-1">
                          {method.label}
                        </p>
                        <p className="text-pure-white font-semibold break-all">{method.value}</p>
                      </div>
                    </div>

                    {/* Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-xs uppercase tracking-widest text-electric-blue/70 font-semibold mb-4">
                Sígueme
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-electric-blue/30 bg-electric-blue/5 text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2 group relative"
          >
            {/* Glassmorphism Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="relative bg-dark-navy/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-8 md:p-10 hover:border-electric-blue/50 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group/input">
                    <label htmlFor="name" className="block text-sm font-semibold text-pure-white mb-3">
                      Nombre
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Juan Silva"
                        required
                        className="w-full bg-transparent border-b border-electric-blue/30 px-0 py-3 text-pure-white placeholder-gray-muted outline-none transition-all focus:border-electric-blue group-hover/input:border-electric-blue/50"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover/input:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group/input">
                    <label htmlFor="email" className="block text-sm font-semibold text-pure-white mb-3">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="juan@example.com"
                        required
                        className="w-full bg-transparent border-b border-electric-blue/30 px-0 py-3 text-pure-white placeholder-gray-muted outline-none transition-all focus:border-electric-blue group-hover/input:border-electric-blue/50"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover/input:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group/input">
                  <label htmlFor="subject" className="block text-sm font-semibold text-pure-white mb-3">
                    Asunto
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Colaboración en proyecto"
                      required
                      className="w-full bg-transparent border-b border-electric-blue/30 px-0 py-3 text-pure-white placeholder-gray-muted outline-none transition-all focus:border-electric-blue group-hover/input:border-electric-blue/50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover/input:scale-x-100 transition-transform origin-left duration-300"></div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group/input">
                  <label htmlFor="message" className="block text-sm font-semibold text-pure-white mb-3">
                    Mensaje
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                      className="w-full bg-transparent border-b border-electric-blue/30 px-0 py-3 text-pure-white placeholder-gray-muted outline-none transition-all focus:border-electric-blue resize-none group-hover/input:border-electric-blue/50"
                    ></textarea>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover/input:scale-x-100 transition-transform origin-left duration-300"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy font-semibold hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </div>

              {/* Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </form>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center px-6 py-8 rounded-xl border border-electric-blue/20 bg-dark-navy/40 backdrop-blur-sm"
        >
          <p className="text-gray-muted mb-4">
            ¿Quieres más detalles? Descarga mi CV o explora mis proyectos arriba.
          </p>
          <motion.a
            href={`${import.meta.env.BASE_URL}CV_Juan_Silva.pdf`}
            download="CV_Juan_Silva.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-navy font-semibold hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={16} /> Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
