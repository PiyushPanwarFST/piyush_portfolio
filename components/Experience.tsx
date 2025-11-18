'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '@/data/experience'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-gray-900 dark:text-gray-100">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center mb-1">
                    <FaCalendarAlt className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              {exp.prs && exp.prs.length > 0 && (
                <div className="mt-4 p-3 bg-primary/5 dark:bg-primary/10 rounded">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Key PRs:</p>
                  <div className="space-y-1">
                    {exp.prs.map((pr, idx) => (
                      <p key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-mono text-primary">{pr.number}</span>: {pr.description}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {exp.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

