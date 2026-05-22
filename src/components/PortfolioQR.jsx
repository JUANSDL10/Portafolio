import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { FaDownload, FaQrcode } from 'react-icons/fa'

const PORTFOLIO_URL = 'https://JUANSDL10.github.io/Portafolio'
const QR_SIZE = 200
const QR_BG = '#ffffff'
const QR_FG = '#0f172a'

export default function PortfolioQR() {
  const qrRef = useRef(null)

  const downloadAsSvg = useCallback(() => {
    const svg = qrRef.current
    if (!svg) return

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svg)
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'portafolio-juan-silva-qr.svg'
    link.click()
    URL.revokeObjectURL(url)
  }, [])

  const downloadAsPng = useCallback(() => {
    const svg = qrRef.current
    if (!svg) return

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svg)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const img = new Image()
    const scale = 4

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = QR_SIZE * scale
      canvas.height = QR_SIZE * scale

      const ctx = canvas.getContext('2d')
      ctx.fillStyle = QR_BG
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      canvas.toBlob((blob) => {
        if (!blob) return
        const pngUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = pngUrl
        link.download = 'portafolio-juan-silva-qr.png'
        link.click()
        URL.revokeObjectURL(pngUrl)
      }, 'image/png')

      URL.revokeObjectURL(url)
    }

    img.onerror = () => URL.revokeObjectURL(url)
    img.src = url
  }, [])

  const handleDownload = useCallback(() => {
    downloadAsPng()
  }, [downloadAsPng])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mt-8 rounded-[2rem] border border-slate-700/40 bg-slate-900/50 p-6 shadow-glow backdrop-blur-md"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <FaQrcode />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Acceso rápido</p>
          <h3 className="text-lg font-semibold text-white">Portafolio en vivo</h3>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
          <QRCodeSVG
            ref={qrRef}
            value={PORTFOLIO_URL}
            size={QR_SIZE}
            bgColor={QR_BG}
            fgColor={QR_FG}
            includeMargin
            level="H"
            role="img"
            aria-label={`Código QR del portafolio: ${PORTFOLIO_URL}`}
          />
        </div>

        <p className="mt-5 max-w-xs text-center text-sm leading-relaxed text-slate-400">
          Escanea para ver mi portafolio en vivo
        </p>

        <motion.button
          type="button"
          onClick={handleDownload}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-6 py-2.5 text-sm font-semibold text-cyan-100 shadow-glow backdrop-blur transition hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-violet-500/30 hover:text-white"
        >
          <FaDownload className="text-cyan-300" />
          Descargar QR
        </motion.button>

        <button
          type="button"
          onClick={downloadAsSvg}
          className="mt-3 text-xs text-slate-500 underline-offset-2 transition hover:text-cyan-300 hover:underline"
        >
          También en SVG
        </button>
      </div>
    </motion.div>
  )
}
