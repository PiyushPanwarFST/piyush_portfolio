'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/data/projects'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-container bg-white dark:bg-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="section-title text-left text-primary dark:text-white mb-2">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Showcasing my work in Machine Learning, AI Agents, and Statistical Modeling.
            </p>
          </div>
          <a href="https://github.com/PiyushPanwarFST" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-secondary font-medium hover:text-blue-600 transition-colors mt-4 md:mt-0">
            View GitHub Profile <FaArrowRight className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <span className="text-4xl font-bold text-gray-300 dark:text-gray-600">{project.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-gray-400">+ {project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-secondary hover:text-blue-600 transition-colors flex items-center">
                      Live Demo <FaArrowRight className="ml-1 text-xs" />
                    </a>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-secondary hover:text-blue-600 transition-colors flex items-center">
                      View Code <FaArrowRight className="ml-1 text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/PiyushPanwarFST" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary font-medium hover:text-blue-600 transition-colors">
            View GitHub Profile <FaArrowRight className="ml-2" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

