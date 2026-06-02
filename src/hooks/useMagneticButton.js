import { useRef, useState } from 'react'
import { useMotionValue, animate } from 'framer-motion'

/**
 * Magnetic button hook - makes buttons follow cursor on hover
 * Creates a fluid, interactive premium feel
 */
export const useMagneticButton = (strength = 0.15) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!ref.current || !isHovering) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    animate(x, distanceX * strength, { duration: 0.3, type: 'spring', stiffness: 150, damping: 15 })
    animate(y, distanceY * strength, { duration: 0.3, type: 'spring', stiffness: 150, damping: 15 })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    animate(x, 0, { duration: 0.3, type: 'spring', stiffness: 200, damping: 20 })
    animate(y, 0, { duration: 0.3, type: 'spring', stiffness: 200, damping: 20 })
  }

  return {
    ref,
    magneticProps: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    style: { x, y },
    isHovering,
  }
}
