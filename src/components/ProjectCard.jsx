import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const colorSchemes = {
  violet: {
    gradient: 'from-violet-600/25 to-purple-700/15',
    glow: 'from-violet-500/20 to-purple-600/10',
    hoverBorder: 'group-hover:border-violet-400/60',
    iconBg: 'bg-violet-500/15 border-violet-400/30',
    iconText: 'text-violet-300',
  },
  green: {
    gradient: 'from-emerald-600/25 to-green-700/15',
    glow: 'from-emerald-500/20 to-green-600/10',
    hoverBorder: 'group-hover:border-emerald-400/60',
    iconBg: 'bg-emerald-500/15 border-emerald-400/30',
    iconText: 'text-emerald-300',
  },
  orange: {
    gradient: 'from-orange-600/25 to-red-700/15',
    glow: 'from-orange-500/20 to-red-600/10',
    hoverBorder: 'group-hover:border-orange-400/60',
    iconBg: 'bg-orange-500/15 border-orange-400/30',
    iconText: 'text-orange-300',
  },
  blue: {
    gradient: 'from-electric-blue/20 to-neon-cyan/10',
    glow: 'from-electric-blue/15 to-neon-cyan/10',
    hoverBorder: 'group-hover:border-electric-blue/60',
    iconBg: 'bg-electric-blue/10 border-electric-blue/30',
    iconText: 'text-electric-blue',
  },
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
    CSS: 'bg-blue-400/15 border-blue-400/30 text-blue-200',
    MVC: 'bg-pink-500/15 border-pink-500/30 text-pink-300',
    JWT: 'bg-red-400/15 border-red-400/30 text-red-300',
    Bcrypt: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
    Multer: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
    'Framer Motion': 'bg-fuchsia-500/15 border-fuchsia-400/30 text-fuchsia-300',
    WebSockets: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    Vite: 'bg-purple-400/15 border-purple-400/30 text-purple-200',
    'Tailwind CSS': 'bg-sky-500/15 border-sky-500/30 text-sky-300',
    Git: 'bg-orange-600/15 border-orange-500/30 text-orange-400',
    APIs: 'bg-electric-blue/10 border-electric-blue/30 text-electric-blue',
  }
  return map[tech] || 'bg-electric-blue/10 border-electric-blue/30 text-electric-blue'
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function ProjectCard({ project, index = 0 }) {
  const scheme = colorSchemes[project.colorKey] || colorSchemes.blue
  const imgSrc = project.image ? `${import.meta.env.BASE_URL}${project.image}` : null

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-navy/60 backdrop-blur-xl"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      {/* Ambient glow on hover */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${scheme.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Border glow on hover */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl border border-white/0 transition-all duration-300 ${scheme.hoverBorder}`}
      />

      {/* ── Thumbnail / Hero area ── */}
      <div
        className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${scheme.gradient} border-b border-white/10`}
      >
        {imgSrc && (
          <motion.img
            src={imgSrc}
            alt={`Captura de ${project.name}`}
            className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            whileHover={{ scale: 1.04, transition: { duration: 0.5 } }}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        )}

        {/* Emoji placeholder (always visible below image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-5xl drop-shadow-2xl"
          >
            {project.emoji}
          </motion.span>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/40">
            {project.type}
          </p>
        </div>

        {/* Year pill */}
        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white/60 backdrop-blur-sm">
          {project.year}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-navy/90 to-transparent" />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Role label */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-electric-blue/70">
          {project.role}
        </p>

        {/* Project title */}
        <h3 className="text-xl font-black leading-tight text-pure-white transition-colors duration-300 group-hover:text-electric-blue">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

        {/* Feature list */}
        <ul className="space-y-1.5">
          {project.features.slice(0, 4).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-[12px] text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.08, y: -1 }}
              className={`cursor-default select-none rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide transition-all ${techBadgeColor(t)}`}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* GitHub CTA */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-electric-blue/50 hover:bg-electric-blue/15 hover:text-electric-blue"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub size={16} />
          Ver en GitHub
        </motion.a>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-electric-blue to-neon-cyan transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  )
}
