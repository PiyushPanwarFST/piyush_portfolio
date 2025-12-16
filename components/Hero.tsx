'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { personalInfo } from '@/data/personalInfo'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

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

      setTypingSpeed(isDeleting ? 30 : 100)

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
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 dark:bg-slate-700/5 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left z-10 order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-2 mb-6 bg-surface dark:bg-surface border border-slate-700 rounded-md text-secondary font-mono text-sm tracking-wide">
            &gt; Available for Opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight font-sans">
            Making AI <span className="text-secondary">Reliable</span><br />
            with Math & Code
          </h1>

          <div className="h-8 mb-6 font-mono">
            <span className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400">
              <span className="text-accent mr-2">def</span>
              <span className="text-secondary font-semibold">{text}</span>
              <span className="animate-pulse text-secondary">|</span>
            </span>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-sans">
            I apply reliability engineering (Stress-Strength models) to predict when LLMs fail.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-secondary text-primary font-bold rounded-md hover:bg-teal-300 transition-colors shadow-lg hover:shadow-teal-500/25 font-mono"
            >
              View Projects <FaArrowRight className="ml-2" />
            </motion.a>
            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-surface text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-md font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-mono"
            >
              <FaDownload className="mr-2" /> Resume
            </motion.a>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-slate-500">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-2xl"><FaGithub /></a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-2xl"><FaLinkedin /></a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-secondary transition-colors text-2xl"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* Right Column: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Abstract Background Elements - Matte Look */}
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl"></div>

            {/* Profile Image with Corporate Styling */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-surface/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 flex items-center space-x-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="font-mono">
                <p className="text-xs text-slate-500 uppercase font-semibold">Status</p>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Open to Work</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
