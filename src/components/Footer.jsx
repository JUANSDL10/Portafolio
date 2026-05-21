import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-8 text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row sm:px-10">
        <p>© 2026 Juan Silva. Portafolio profesional con React, Tailwind CSS y Framer Motion.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://github.com/Gamer-red" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
