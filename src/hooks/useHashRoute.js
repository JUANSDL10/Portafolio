import { useState, useEffect, useCallback } from 'react'

const PREFIX = '#/proyecto/'

function readSlug() {
  const hash = window.location.hash || ''
  if (hash.startsWith(PREFIX)) {
    return decodeURIComponent(hash.slice(PREFIX.length)) || null
  }
  return null
}

/**
 * Routing por hash para deep-linking de proyectos.
 * URL: `#/proyecto/<slug>` → abre el modal del proyecto correspondiente.
 * Compatible con GitHub Pages (no requiere servidor).
 */
export function useHashRoute() {
  const [slug, setSlug] = useState(() =>
    typeof window !== 'undefined' ? readSlug() : null
  )

  useEffect(() => {
    const onHashChange = () => setSlug(readSlug())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const openProject = useCallback((nextSlug) => {
    window.location.hash = `${PREFIX}${encodeURIComponent(nextSlug)}`
  }, [])

  const closeProject = useCallback(() => {
    // Limpia el hash sin recargar ni dejar `#` colgando en la barra.
    const { pathname, search } = window.location
    window.history.replaceState(null, '', pathname + search)
    setSlug(null)
  }, [])

  return { slug, openProject, closeProject }
}

export default useHashRoute
