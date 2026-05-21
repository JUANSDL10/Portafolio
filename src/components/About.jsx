import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import GlassCard from './ui/GlassCard'

export default function About() {
  return (
    <section id="about" className="mt-28 space-y-10">
      <SectionTitle title="Sobre mí" subtitle="Historia y enfoque profesional" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <GlassCard>
          <p className="mb-6 text-slate-300">
            Estudiante de Multimedia y Animación Digital en la UANL, con experiencia en el desarrollo de aplicaciones web de alto impacto.
          </p>
          <div className="space-y-4 text-slate-300">
            <p>Experiencia en desarrollo Full Stack con proyectos que integran frontend interactivo y backend robusto.</p>
            <p>Interés en frontend moderno, backend y soluciones con componentes animados y experiencias inmersivas.</p>
          </div>
        </GlassCard>
        <div className="grid gap-4 sm:grid-cols-2">
          {['React', 'Node.js', 'PHP', 'MongoDB', 'MySQL'].map((skill) => (
            <div key={skill} className="rounded-3xl border border-slate-700/40 bg-slate-900/80 p-6 text-center text-slate-100 shadow-inner">
              <p className="text-base font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
