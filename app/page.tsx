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

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Enhanced animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        
        {/* Multiple animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-secondary/5 dark:bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
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
    </main>
  )
}

