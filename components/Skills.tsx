'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/data/skills'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container bg-slate-50 dark:bg-dark/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900 dark:text-slate-100 font-sans">
            Technical <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 font-sans">
            A comprehensive overview of my technical skills and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="bg-white dark:bg-surface p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2 font-sans">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm rounded-md border border-slate-200 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-secondary dark:hover:text-secondary transition-colors cursor-default font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

