'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (you can integrate with a service like Formspree, EmailJS, etc.)
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-container bg-white dark:bg-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-slate-900 dark:text-slate-100 font-sans">
          Get In <span className="text-secondary">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100 font-sans">Let&apos;s Connect</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 font-sans">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-secondary transition-colors font-mono"
              >
                <FaEnvelope className="mr-3 text-xl" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-secondary transition-colors font-mono"
              >
                <FaPhone className="mr-3 text-xl" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-slate-700 dark:text-slate-300 hover:text-secondary transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-slate-700 dark:text-slate-300 hover:text-secondary transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-mono">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-surface text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors font-mono"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-mono">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-surface text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors font-mono"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-surface text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-secondary text-primary rounded-md hover:bg-teal-300 transition-colors font-bold font-mono"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

