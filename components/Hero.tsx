'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import { personalInfo } from '@/data/personalInfo'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    "Software Engineer",
    "AI/ML Researcher",
    "Bayesian Analyst",
    "Open Source Contributor"
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, titles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-container pt-32 relative overflow-hidden">
      {/* Animated gradient orbs around image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-secondary/30 to-accent/30 blur-3xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 relative">
            {/* Image container with gradient border */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-900 overflow-hidden relative backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold gradient-text z-0">
                  {personalInfo.initials}
                </div>
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-full z-10"
                  priority
                  unoptimized
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement
                    const parent = target.parentElement
                    if (parent) {
                      const initialsDiv = parent.querySelector('div')
                      if (initialsDiv) {
                        initialsDiv.style.display = 'none'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            className="h-8 md:h-10 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              I am a <span className="text-primary">{text}</span>
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-900 dark:text-gray-100 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-900 dark:text-gray-100 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-2xl text-gray-900 dark:text-gray-100 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

