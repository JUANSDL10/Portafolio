import { useEffect, useState } from 'react'

/**
 * Global scroll progress hook
 * Returns normalized scroll progress (0 to 1) for use in animations
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * Calculate scroll velocity
 */
export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0)
  let lastScrollY = 0
  let lastTime = 0

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now()
      const currentScrollY = window.scrollY
      
      if (lastTime !== 0) {
        const deltaTime = currentTime - lastTime
        const deltaScroll = currentScrollY - lastScrollY
        const vel = deltaScroll / deltaTime
        setVelocity(vel)
      }
      
      lastTime = currentTime
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return velocity
}
