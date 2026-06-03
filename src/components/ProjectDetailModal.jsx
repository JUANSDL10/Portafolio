import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiX, FiGlobe } from 'react-icons/fi'
import ProjectGallery from './ProjectGallery'

// Botones de acción según los enlaces disponibles del proyecto.
const ACTIONS = [
  { key: 'github', label: 'Ver en GitHub', icon: FaGithub, cls: 'hover:border-white/60 hover:bg-white/10' },
  { key: 'youtube', label: 'Demostración en YouTube', icon: FaYoutube, cls: 'hover:border-red-400/60 hover:bg-red-500/15 hover:text-red-300' },
  { key: 'live', label: 'Experiencia en Vivo', icon: FiGlobe, cls: 'hover:border-electric-blue/60 hover:bg-electric-blue/15 hover:text-electric-blue' },
  { key: 'instagram', label: 'Instagram Oficial', icon: FaInstagram, cls: 'hover:border-pink-400/60 hover:bg-pink-500/15 hover:text-pink-300' },
]

export default function ProjectDetailModal({ project, onClose }) {
  const open = Boolean(project)

  // Bloqueo de scroll del body + cierre con Esc mientras el modal está abierto.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-md md:p-6"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-0 h-fit w-full max-w-4xl overflow-hidden rounded-none border border-white/10 bg-dark-navy/95 shadow-glass-strong md:my-auto md:rounded-3xl"
          >
            {/* Glow superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-electric-blue/15 to-transparent" />

            {/* Cerrar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/40 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:border-electric-blue/60 hover:text-electric-blue"
            >
              <FiX size={20} />
            </button>

            <div className="relative px-6 py-10 md:px-12 md:py-14">
              {/* 1 ── Tag de rol */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/40 bg-electric-blue/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-electric-blue shadow-[0_0_8px_#00C2FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric-blue">
                  {project.role}
                </span>
              </div>

              {/* 2 ── Título */}
              <h2 className="mb-2 text-4xl font-black leading-tight text-pure-white md:text-6xl">
                {project.name}
              </h2>
              <p className="mb-8 text-sm font-medium uppercase tracking-widest text-gray-muted">
                {project.type} · {project.year}
              </p>

              {/* 3 ── Párrafo conceptual */}
              <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* 4 ── Impacto / retos / soluciones */}
              <div className="mb-12">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-electric-blue/70">
                  Impacto, Retos y Soluciones
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feat, i) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-start gap-3 text-base leading-relaxed text-gray-200"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-electric-blue to-neon-cyan" />
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* 5 ── Galería */}
              {project.gallery?.length > 0 && (
                <div className="mb-12">
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-electric-blue/70">
                    Galería del Proyecto
                  </h3>
                  <ProjectGallery images={project.gallery} />
                </div>
              )}

              {/* 6 ── Caja de stack tecnológico */}
              <div className="mb-10">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-electric-blue/70">
                  Stack Tecnológico
                </h3>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-xs text-white/40">stack.config</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-electric-blue/25 bg-electric-blue/10 px-3 py-1 text-xs font-semibold text-electric-blue"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 7 ── Botones de acción */}
              <div className="flex flex-wrap gap-3">
                {ACTIONS.filter((a) => project.links?.[a.key]).map((a) => {
                  const Icon = a.icon
                  return (
                    <a
                      key={a.key}
                      href={project.links[a.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all ${a.cls}`}
                    >
                      <Icon size={18} />
                      {a.label}
                    </a>
                  )
                })}

                {/* Placeholder de video pendiente (p.ej. Movie Box) */}
                {project.videoComingSoon && !project.links?.youtube && (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/40">
                    <FaYoutube size={18} />
                    Demo en video · Próximamente
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
