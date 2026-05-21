export default function GlassCard({ className = '', children }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-glow backdrop-blur ${className}`}>
      {children}
    </div>
  )
}
