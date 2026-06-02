import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const useScrollAnimation = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])

  return { ref, opacity, y, scale, scrollYProgress }
}

export const useParallaxScroll = (offset = 50) => {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (value) => value * offset)

  return { ref, y }
}
