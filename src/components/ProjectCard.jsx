import { motion } from 'framer-motion'
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiGlobe, FiArrowUpRight, FiImage } from 'react-icons/fi'
import { assetUrl } from '../lib/utils'
import { useOpenProject } from '../context/ProjectModalContext'

const colorSchemes = {
  violet: { gradient: 'from-violet-600/25 to-purple-700/15', glow: 'from-violet-500/20 to-purple-600/10', hoverBorder: 'group-hover:border-violet-400/60', text: 'text-violet-300' },
  green: { gradient: 'from-emerald-600/25 to-green-700/15', glow: 'from-emerald-500/20 to-green-600/10', hoverBorder: 'group-hover:border-emerald-400/60', text: 'text-emerald-300' },
  emerald: { gradient: 'from-emerald-600/25 to-teal-700/15', glow: 'from-emerald-500/20 to-teal-600/10', hoverBorder: 'group-hover:border-emerald-400/60', text: 'text-emerald-300' },
  orange: { gradient: 'from-orange-600/25 to-red-700/15', glow: 'from-orange-500/20 to-red-600/10', hoverBorder: 'group-hover:border-orange-400/60', text: 'text-orange-300' },
  amber: { gradient: 'from-amber-500/25 to-orange-700/15', glow: 'from-amber-500/20 to-orange-600/10', hoverBorder: 'group-hover:border-amber-400/60', text: 'text-amber-300' },
  cyan: { gradient: 'from-cyan-500/25 to-sky-700/15', glow: 'from-cyan-500/20 to-sky-600/10', hoverBorder: 'group-hover:border-cyan-400/60', text: 'text-cyan-300' },
  teal: { gradient: 'from-teal-500/25 to-cyan-700/15', glow: 'from-teal-500/20 to-cyan-600/10', hoverBorder: 'group-hover:border-teal-400/60', text: 'text-teal-300' },
  pink: { gradient: 'from-pink-500/25 to-fuchsia-700/15', glow: 'from-pink-500/20 to-fuchsia-600/10', hoverBorder: 'group-hover:border-pink-400/60', text: 'text-pink-300' },
  blue: { gradient: 'from-electric-blue/20 to-neon-cyan/10', glow: 'from-electric-blue/15 to-neon-cyan/10', hoverBorder: 'group-hover:border-electric-blue/60', text: 'text-electric-blue' },
}

const techBadgeColor = (tech) => {
  const map = {
    React: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    'Node.js': 'bg-green-500/15 border-green-500/30 text-green-300',
    Express: 'bg-slate-400/15 border-slate-400/30 text-slate-300',
    MongoDB: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    JavaScript: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-300',
    PHP: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300',
    MySQL: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
    HTML: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    HTML5: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    CSS: 'bg-blue-400/15 border-blue-400/30 text-blue-200',
    CSS3: 'bg-blue-400/15 border-blue-400/30 text-blue-200',
    'Unreal Engine 5': 'bg-zinc-400/15 border-zinc-400/30 text-zinc-200',
    'C++': 'bg-blue-600/15 border-blue-500/30 text-blue-300',
    OpenGL: 'bg-red-500/15 border-red-500/30 text-red-300',
    'Three.js': 'bg-neutral-400/15 border-neutral-400/30 text-neutral-200',
    WebGL: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
    Blender: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    Maya: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
    ZBrush: 'bg-amber-600/15 border-amber-500/30 text-amber-300',
    'Framer Motion': 'bg-fuchsia-500/15 border-fuchsia-400/30 text-fuchsia-300',
    WebSockets: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    Git: 'bg-orange-600/15 border-orange-500/30 text-orange-400',
  }
  return map[tech] || 'bg-electric-blue/10 border-electric-blue/30 text-electric-blue'
}

const quickLinks = [
  { key: 'github', icon: FaGithub, label: 'GitHub' },
  { key: 'youtube', icon: FaYoutube, label: 'YouTube' },
  { key: 'live', icon: FiGlobe, label: 'Demo en vivo' },
  { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ProjectCard({ project, index = 0 }) {
  const openProject = useOpenProject()
  const scheme = colorSchemes[project.colorKey] || colorSchemes.blue
  const cover = project.gallery?.[0]?.src ? assetUrl(project.gallery[0].src) : null
  const photoCount = project.gallery?.length || 0

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      onClick={() => openProject(project.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), openProject(project.slug))}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-navy/60 backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${scheme.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
      <div className={`pointer-events-none absolute inset-0 rounded-2xl border border-white/0 transition-all duration-300 ${scheme.hoverBorder}`} />

      {/* ── Cover ── */}
      <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${scheme.gradient} border-b border-white/10`}>
        {cover ? (
          <motion.img
            src={cover}
            alt={`Captura de ${project.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl">{project.emoji}</div>
        )}

        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white/60 backdrop-blur-sm">
          {project.year}
        </div>
        {photoCount > 0 && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white/70 backdrop-blur-sm">
            <FiImage size={11} /> {photoCount}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-navy via-dark-navy/70 to-transparent" />
        <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{project.emoji}</span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className={`text-[11px] font-semibold uppercase tracking-widest ${scheme.text}`}>{project.role}</p>
        <h3 className="text-xl font-black leading-tight text-pure-white transition-colors duration-300 group-hover:text-electric-blue">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">{project.summary}</p>

        <ul className="space-y-1.5">
          {project.features.slice(0, 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-[12px] text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
              <span className="line-clamp-2">{feat}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t} className={`select-none rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${techBadgeColor(t)}`}>
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-bold text-white/50">
              +{project.tech.length - 6}
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Footer: CTA detalle + enlaces rápidos */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-blue">
            Ver detalle <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <div className="flex items-center gap-1.5">
            {quickLinks.filter((l) => project.links?.[l.key]).map((l) => {
              const Icon = l.icon
              return (
                <a
                  key={l.key}
                  href={project.links[l.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={l.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 transition-all hover:border-electric-blue/50 hover:text-electric-blue"
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-electric-blue to-neon-cyan transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  )
}
