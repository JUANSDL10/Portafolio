import { motion } from 'framer-motion'

export default function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-glow backdrop-blur"
    >
      <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>
      <div className="grid gap-3">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.name} className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/90 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-400/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-200">{item.name}</p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
