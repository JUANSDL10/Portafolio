import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import SectionButton from './ui/SectionButton'

// Coloca CV_Juan_Silva.pdf en public/ — en producción: /Portafolio/CV_Juan_Silva.pdf
const resumeUrl = `${import.meta.env.BASE_URL}CV_Juan_Silva.pdf`

export default function Hero() {
  return (
    <section id="home" className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-8"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow backdrop-blur">
          Portafolio Premium • Full Stack Junior
        </p>
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">Juan Silva</h1>
          <p className="text-xl font-medium text-slate-300 md:text-2xl">Desarrollador Full Stack JR</p>
        </div>
        <p className="max-w-2xl leading-8 text-slate-400">
          Desarrollador enfocado en aplicaciones web modernas, APIs REST y experiencias interactivas.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SectionButton href="#projects">Ver Proyectos</SectionButton>
          <SectionButton href="#contact" variant="secondary">Contacto</SectionButton>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="https://github.com/Gamer-red" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 bg-white/5 p-3 text-lg transition hover:border-slate-500 hover:bg-white/10">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 bg-white/5 p-3 text-lg transition hover:border-slate-500 hover:bg-white/10">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10" />
        <div className="relative space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Tecnologías destacadas</p>
            <h2 className="text-3xl font-semibold text-white">Stack profesional</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'React', value: 'Interfaz moderna' },
              { label: 'Node.js', value: 'APIs seguras' },
              { label: 'MongoDB', value: 'Bases de datos NoSQL' },
              { label: 'Tailwind', value: 'Diseño responsive' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-base leading-6 text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
          <a href={resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
            <FaDownload /> Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  )
}
