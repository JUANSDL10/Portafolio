export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{subtitle}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-slate-200 to-violet-500" />
    </div>
  )
}
