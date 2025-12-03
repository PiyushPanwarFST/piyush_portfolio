'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '@/data/education'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-gray-900 dark:text-gray-100">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary/30"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-primary text-xl" />
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.location}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.gpa && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>CGPA:</strong> {edu.gpa}</p>
                  )}
                  {edu.percentage && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Percentage:</strong> {edu.percentage}</p>
                  )}
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mt-4">
                      <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-teal-50 dark:bg-primary/20 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium border border-teal-200 dark:border-teal-700"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

