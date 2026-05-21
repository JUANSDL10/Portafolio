import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import GlassCard from './ui/GlassCard'

export default function Experience() {
  return (
    <section id="experience" className="mt-28 space-y-10">
      <SectionTitle title="Experiencia y Educación" subtitle="Formación académica" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <GlassCard>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Licenciatura</p>
              <h3 className="text-2xl font-semibold text-white">Multimedia y Animación Digital</h3>
              <p className="text-slate-400">Facultad de Ciencias Físico Matemáticas – UANL</p>
            </div>
            <div className="rounded-3xl border border-slate-700/40 bg-slate-900/80 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Período</p>
              <p className="mt-3 text-xl font-semibold">2020 - Presente</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
