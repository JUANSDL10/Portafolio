export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Construye una URL de asset válida respetando el `base` de Vite
 * (`/Portafolio/` en GitHub Pages) y codificando espacios / caracteres
 * especiales presentes en los nombres de carpeta e imagen.
 *
 * @param {string} path Ruta relativa dentro de /public, sin slash inicial.
 *                      Ej: 'images/projects/web/movie box/landing page.png'
 * @returns {string} URL lista para usar en <img src>.
 */
export function assetUrl(path) {
  if (!path) return ''
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.replace(/^\/+/, '')
  return encodeURI(`${base}${clean}`)
}
