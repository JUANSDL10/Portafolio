import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-glow backdrop-blur"
    >
      <div className="border-b border-white/10 bg-slate-900/75 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Proyecto</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-100 transition group-hover:bg-cyan-400/15">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="space-y-6 p-6">
        <p className="text-slate-400">{project.description}</p>
        <div className="grid gap-2">
          {project.features.map((feature) => (
            <p key={feature} className="text-sm text-slate-300">• {feature}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-100">
          Ver código
          <FaArrowRight />
        </a>
      </div>
    </motion.article>
  )
}
