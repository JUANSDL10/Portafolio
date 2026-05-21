export default function SectionButton({ href, children, variant = 'primary' }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200'
  const variants = {
    primary: 'bg-accent text-slate-950 shadow-lg shadow-accent/20 hover:bg-sky-400',
    secondary: 'border border-slate-700 bg-white/5 text-slate-100 hover:border-slate-500 hover:bg-white/10',
  }

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  )
}
