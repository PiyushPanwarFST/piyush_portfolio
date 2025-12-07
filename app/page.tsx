import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import CursorEffect from '@/components/CursorEffect'
import AnimatedBackground from '@/components/AnimatedBackground'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Enhanced animated background gradient - Professional MNC style */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-dark dark:via-slate-900 dark:to-dark"></div>

        {/* Subtle animated gradient orbs - Professional look */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Particle network background */}
      <AnimatedBackground />

      {/* Cursor effects */}
      <CursorEffect />

      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

