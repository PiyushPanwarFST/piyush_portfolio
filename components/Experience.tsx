'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '@/data/experience'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container bg-slate-50 dark:bg-dark/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900 dark:text-slate-100 font-sans">
            Professional <span className="text-secondary">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 font-sans">
            A timeline of my contributions to research, open source, and industry projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-dark border-4 border-secondary rounded-full z-10 shadow-md"></div>

              {/* Content Card */}
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className="bg-white dark:bg-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700 relative group">
                  {/* Arrow for Desktop */}
                  <div
                    className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-surface border-t border-l border-slate-200 dark:border-slate-700 transform rotate-45 ${index % 2 === 0 ? '-left-2' : '-right-2 border-t-0 border-l-0 border-b border-r'
                      }`}
                  ></div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-secondary transition-colors font-sans">
                        {exp.position}
                      </h3>
                      <p className="text-secondary font-medium font-mono text-sm">{exp.company}</p>
                    </div>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-secondary transition-colors">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                    <span className="flex items-center"><FaCalendarAlt className="mr-2" /> {exp.duration}</span>
                    <span className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-sm font-sans">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{
                          __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    {exp.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs rounded font-medium font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {exp.prs && exp.prs.length > 0 && (
                    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-100 dark:border-slate-700">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 font-mono">Key PRs:</p>
                      <div className="space-y-1">
                        {exp.prs.map((pr, idx) => (
                          <div key={idx} className="flex justify-between text-xs font-mono">
                            <span className="font-medium text-secondary">{pr.number}</span>
                            <span className="text-slate-600 dark:text-slate-400">{pr.description}</span>
                          </div>
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

