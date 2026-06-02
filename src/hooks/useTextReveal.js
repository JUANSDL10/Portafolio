import { useState, useEffect, useRef } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

/**
 * Text reveal hook - animates text character by character with scroll trigger
 * Creates split-text animation effect like REF Agency
 */
export const useTextReveal = (text, triggerOnView = true) => {
  const ref = useRef(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isVisible, setIsVisible] = useState(!triggerOnView)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    if (!triggerOnView) {
      setDisplayedText(text)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [triggerOnView])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, text])

  // Scroll-based reveal
  const opacity = useTransform(scrollProgress, [0, 0.3, 1], [0, 0.5, 1])
  const clipPath = useTransform(scrollProgress, [0, 1], ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'])

  return { ref, displayedText, opacity, clipPath, scrollProgress, isVisible }
}
