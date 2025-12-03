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
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-gray-900 dark:text-gray-100">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-primary/20 hover:border-primary/60 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

