import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa'
import { LiquidButton } from './ui/liquid-glass-button'

const resumeUrl = encodeURI(`${import.meta.env.BASE_URL}CV — Juan Silva · Desarrollador Full Stack.pdf`)

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'CV_Juan_Silva.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Vignette para dar contraste al shader cromático global */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,8,16,0.55)_70%,rgba(5,8,16,0.85)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-3xl"
      >
        {/* Marco exterior */}
        <div className="relative border border-zinc-800/80 bg-white/[0.02] p-2 backdrop-blur-[2px]">
          {/* Marco interior */}
          <main className="relative overflow-hidden border border-zinc-800/80 bg-dark-navy/30 px-6 py-12 backdrop-blur-md md:py-16">
            {/* Brillo superior */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-electric-blue/15 to-transparent" />

            {/* Badge de rol */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-electric-blue">
                🚀 Desarrollador Full Stack & Artista 3D
              </span>
            </motion.div>

            {/* Título */}
            <h1 className="mb-3 text-center text-6xl font-extrabold leading-[0.95] tracking-tighter text-white md:text-[clamp(2.5rem,8vw,6rem)]">
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Juan Silva
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="mx-auto mb-3 max-w-xl text-center text-lg font-medium text-electric-blue md:text-xl">
              Desarrollo Web · Videojuegos · Contenido 3D
            </p>
            <p className="mx-auto max-w-xl px-2 text-center text-sm leading-relaxed text-white/60 md:text-base">
              Creo experiencias digitales interactivas combinando aplicaciones web modernas
              (MERN), motores gráficos y modelado 3D profesional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LiquidButton
                onClick={() => scrollToSection('projects')}
                size="xl"
                className="rounded-full border border-electric-blue/40 text-white hover:text-electric-blue"
              >
                Ver Portafolio <FaArrowRight size={15} />
              </LiquidButton>

              <button
                onClick={handleDownloadCV}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition-all hover:border-electric-blue/50 hover:bg-electric-blue/10 hover:text-electric-blue"
              >
                <FaDownload size={15} /> Descargar CV
              </button>
            </div>

            {/* Redes */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <motion.a
                href="https://github.com/JUANSDL10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/70 transition-all hover:border-electric-blue/50 hover:text-electric-blue"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/juan-silva-de-leon-a8a33826b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/70 transition-all hover:border-electric-blue/50 hover:text-electric-blue"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </main>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="mb-2 text-xs text-gray-400">Desplázate para explorar</div>
        <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-electric-blue/30 p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-electric-blue"
          />
        </div>
      </motion.div>
    </section>
  )
}
