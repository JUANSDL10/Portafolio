import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ExpandableGallery
 * Galería horizontal con expansión al pasar el cursor (hover-to-expand) +
 * lightbox a pantalla completa con navegación por teclado y leyendas técnicas.
 *
 * Adaptada a JavaScript (este proyecto es Vite + JS, no TypeScript/shadcn).
 *
 * @param {Object}   props
 * @param {Array<string | {src: string, caption?: string}>} props.images
 *        Lista de imágenes. Acepta URLs directas o objetos `{ src, caption }`.
 * @param {string}   [props.className]
 */
export function ExpandableGallery({ images = [], className = '' }) {
  // Normaliza a { src, caption } para tolerar string[] o {src,caption}[]
  const items = images.map((img) =>
    typeof img === 'string' ? { src: img, caption: '' } : img
  )

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [broken, setBroken] = useState({})

  const total = items.length
  const markBroken = (i) => setBroken((b) => ({ ...b, [i]: true }))

  const goToNext = useCallback(
    (e) => {
      e?.stopPropagation?.()
      setSelectedIndex((i) => (i === null ? i : (i + 1) % total))
    },
    [total]
  )
  const goToPrev = useCallback(
    (e) => {
      e?.stopPropagation?.()
      setSelectedIndex((i) => (i === null ? i : (i - 1 + total) % total))
    },
    [total]
  )
  const closeImage = useCallback(() => setSelectedIndex(null), [])

  // Navegación por teclado mientras el lightbox está abierto
  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeImage()
      else if (e.key === 'ArrowRight') goToNext()
      else if (e.key === 'ArrowLeft') goToPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex, goToNext, goToPrev, closeImage])

  if (total === 0) return null

  const getFlexValue = (index) => {
    if (hoveredIndex === null) return 1
    return hoveredIndex === index ? 2.4 : 0.6
  }

  // Imagen rota → placeholder; si no, <img>
  const Picture = ({ index, className: cls, draggable = true }) =>
    broken[index] ? (
      <div className={`flex items-center justify-center bg-white/5 text-gray-400 ${cls}`}>
        <span className="text-xs">Imagen no disponible</span>
      </div>
    ) : (
      <img
        src={items[index].src}
        alt={items[index].caption || `Imagen ${index + 1}`}
        loading="lazy"
        draggable={draggable}
        onError={() => markBroken(index)}
        className={cls}
      />
    )

  const activeCaptionIndex = hoveredIndex ?? 0
  const activeCaption = items[activeCaptionIndex]?.caption

  return (
    <div className={className}>
      {/* ── Fila expandible (desktop / pantallas medianas+) ── */}
      <div className="hidden h-72 w-full gap-2 md:flex lg:h-80">
        {items.map((item, index) => (
          <motion.div
            key={item.src + index}
            className="group/exp relative cursor-pointer overflow-hidden rounded-xl border border-white/10"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}
          >
            <Picture index={index} className="h-full w-full object-cover" />

            {/* Oscurecido cuando no está enfocada */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-black"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.4 }}
              transition={{ duration: 0.3 }}
            />

            {/* Índice */}
            <span className="absolute left-2 top-2 rounded-md border border-white/15 bg-black/50 px-2 py-0.5 font-mono text-[10px] text-white/80 backdrop-blur-sm">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Leyenda al enfocar (solo en la imagen expandida) */}
            <AnimatePresence>
              {hoveredIndex === index && item.caption && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4"
                >
                  <p className="text-sm leading-snug text-gray-100">{item.caption}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* ── Leyenda activa bajo la fila (desktop) ── */}
      {activeCaption && (
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCaptionIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-3 hidden items-start gap-2 text-sm leading-relaxed text-gray-300 md:flex"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
            <span>
              <span className="font-mono text-xs text-electric-blue/80">
                [ {String(activeCaptionIndex + 1).padStart(2, '0')} ]
              </span>{' '}
              {activeCaption}
            </span>
          </motion.p>
        </AnimatePresence>
      )}

      {/* ── Rejilla táctil (móvil) ── */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {items.map((item, index) => (
          <button
            key={item.src + index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-video overflow-hidden rounded-xl border border-white/10"
          >
            <Picture index={index} className="h-full w-full object-cover" />
            {item.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-left text-[10px] leading-tight text-gray-100 line-clamp-2">
                {item.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={closeImage}
          >
            {/* Cerrar */}
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-electric-blue"
              onClick={closeImage}
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Anterior */}
            {total > 1 && (
              <button
                type="button"
                aria-label="Imagen anterior"
                className="absolute left-4 z-10 text-white transition-colors hover:text-electric-blue"
                onClick={goToPrev}
              >
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Imagen */}
            <motion.div
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="flex w-full items-center justify-center"
              >
                <Picture
                  index={selectedIndex}
                  draggable={false}
                  className="max-h-[78vh] w-auto rounded-md object-contain"
                />
              </motion.div>

              {items[selectedIndex]?.caption && (
                <p className="mt-4 max-w-3xl px-2 text-center text-sm text-gray-200">
                  {items[selectedIndex].caption}
                </p>
              )}
            </motion.div>

            {/* Siguiente */}
            {total > 1 && (
              <button
                type="button"
                aria-label="Imagen siguiente"
                className="absolute right-4 z-10 text-white transition-colors hover:text-electric-blue"
                onClick={goToNext}
              >
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md border border-white/15 bg-black/50 px-4 py-2 font-mono text-sm text-white">
              {selectedIndex + 1} / {total}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ExpandableGallery

// Ejemplo de uso (demo) con imágenes de stock de Unsplash.
export function Component() {
  const images = [
    'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=2400&auto=format&fit=crop',
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-8">
      <ExpandableGallery images={images} className="w-3/4 max-w-7xl" />
    </div>
  )
}
