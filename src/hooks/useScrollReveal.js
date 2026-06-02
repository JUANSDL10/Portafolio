import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

/**
 * Advanced scroll reveal hook with smooth cubic-bezier easing
 * Animates elements when they enter the viewport
 */
export const useScrollReveal = () => {
  const ref = useRef(null)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const element = ref.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress: 0 = not visible, 1 = fully visible
      const scrollProg = Math.max(
        0,
        Math.min(1, 1 - (elementTop - windowHeight * 0.6) / (elementHeight + windowHeight * 0.6))
      )
      scrollProgress.set(scrollProg)
    }

    const observerOptions = { passive: true }
    window.addEventListener('scroll', handleScroll, observerOptions)
    handleScroll() // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollProgress])

  // Ultra-smooth easing: cubic-bezier(0.16, 1, 0.3, 1)
  const opacity = useTransform(scrollProgress, [0, 0.3, 0.8, 1], [0, 0.3, 0.9, 1])
  const y = useTransform(scrollProgress, [0, 1], [80, 0])
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.95, 0.98, 1])

  return { ref, opacity, y, scale, scrollProgress }
}
