import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import PortfolioQR from './PortfolioQR'

export default function Contact() {
  return (
    <section id="contact" className="mt-28 space-y-10 pb-16">
      <SectionTitle title="Contacto" subtitle="Hablemos sobre tu próximo proyecto" />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            action="https://formspree.io/f/tu_enlace_aqui"
            method="POST"
            className="rounded-[2rem] border border-slate-700/50 bg-slate-950/70 p-8 shadow-glow backdrop-blur"
          >
          <div className="grid gap-6">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Nombre</span>
              <input name="name" type="text" placeholder="Juan" required className="w-full rounded-3xl border border-slate-700/60 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Correo</span>
              <input name="email" type="email" placeholder="correo@ejemplo.com" required className="w-full rounded-3xl border border-slate-700/60 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Mensaje</span>
              <textarea name="message" rows="5" placeholder="Hola, quiero trabajar contigo..." required className="w-full rounded-3xl border border-slate-700/60 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-400/20"></textarea>
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400">
              Enviar Mensaje
            </button>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="rounded-[2rem] border border-slate-700/50 bg-slate-950/70 p-8 shadow-glow backdrop-blur"
        >
          <p className="text-slate-400">¿Necesitas un desarrollador comprometido con experiencia en apps modernas y sistemas interactivos? Hablemos.</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-900/90 px-5 py-4">
              <FaEnvelope className="text-cyan-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Correo</p>
                <p className="text-base text-slate-100">juansilva200310@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-900/90 px-5 py-4">
              <FaMapMarkerAlt className="text-violet-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Ubicación</p>
                <p className="text-base text-slate-100">Nuevo León, México</p>
              </div>
            </div>
          </div>
          <PortfolioQR />
        </motion.div>
      </div>
    </section>
  )
}
