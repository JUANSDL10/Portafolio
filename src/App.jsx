import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-hero-gradient opacity-70 blur-3xl"></div>
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"></div>
        <div className="absolute left-0 top-80 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"></div>
        <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
