import { assetUrl } from '../lib/utils'
import { ExpandableGallery } from './ui/gallery-animation'

/**
 * Galería interactiva por proyecto.
 * Resuelve las rutas con `assetUrl` (respeta el base de Vite y codifica espacios)
 * y delega la animación de expansión + lightbox + leyendas a <ExpandableGallery>.
 */
export default function ProjectGallery({ images = [] }) {
  if (!images.length) return null

  const resolved = images.map((img) => ({
    src: assetUrl(img.src),
    caption: img.caption,
  }))

  return <ExpandableGallery images={resolved} />
}
