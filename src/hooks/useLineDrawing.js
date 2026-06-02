import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

/**
 * Line drawing hook - animates SVG line strokes on scroll
 * Creates the signature REF Agency effect of lines drawing as user scrolls
 */
export const useLineDrawing = () => {
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

      // Calculate scroll progress relative to element position
      const scrollProg = Math.max(
        0,
        Math.min(1, 1 - (elementTop - windowHeight * 0.8) / (elementHeight + windowHeight * 0.8))
      )
      scrollProgress.set(scrollProg)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollProgress])

  // Convert scroll progress to strokeDashoffset for SVG animation
  const strokeDashoffset = useTransform(scrollProgress, [0, 1], [1000, 0])

  return { ref, scrollProgress, strokeDashoffset }
}

/**
 * Utility to calculate SVG path length for stroke animation
 */
export const getPathLength = (path) => {
  if (!path) return 0
  return path.getTotalLength ? path.getTotalLength() : 1000
}
