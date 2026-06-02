import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WebDevelopmentSection from './components/WebDevelopmentSection'
import GameDevelopmentSection from './components/GameDevelopmentSection'
import Art3DSection from './components/Art3DSection'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const scrollProgress = useScrollProgress()

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-navy via-charcoal-black to-dark-navy text-pure-white overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        {/* Main gradient blobs - animated */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl opacity-15"
        />
        <motion.div
          animate={{
            x: [0, 30, -50, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/3 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -30, 50, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl opacity-15"
        />

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 194, 255, 0.05) 25%, rgba(0, 194, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, 0.05) 75%, rgba(0, 194, 255, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 194, 255, 0.05) 25%, rgba(0, 194, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 194, 255, 0.05) 75%, rgba(0, 194, 255, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <div id="web">
            <WebDevelopmentSection />
          </div>
          <div id="games">
            <GameDevelopmentSection />
          </div>
          <div id="art3d">
            <Art3DSection />
          </div>
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollProgress,
          originX: 0,
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-cyan to-bright-cyan transform-gpu z-50"
      />

      {/* Background Noise for Premium Feel */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}

export default App

