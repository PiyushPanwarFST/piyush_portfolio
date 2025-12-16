'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { openSourceContributions, achievements } from '@/data/openSource'
import { FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

export default function OpenSource() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="opensource" className="section-container bg-slate-50 dark:bg-dark/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="section-title">
          Open Source <span className="gradient-text">Contributions</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Open Source Contributions */}
          {/* Open Source Contributions */}
          {openSourceContributions.map((contribution, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [showAllPrs, setShowAllPrs] = React.useState(false)
            const heroPrs = contribution.prs.filter(pr => pr.image)
            const otherPrs = contribution.prs.filter(pr => !pr.image)

            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-surface p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary/30"
                initial={{ opacity: 0, x: -50 }}
                whileHover={{ y: -5 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{contribution.project}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{contribution.description}</p>
                  </div>
                  {contribution.link && (
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Featured Pull Requests:</h4>

                  {/* Hero PRs Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {heroPrs.map((pr, idx) => (
                      <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                        {pr.image && (
                          <div className="h-48 overflow-hidden relative">
                            <img
                              src={pr.image}
                              alt={pr.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <span className="text-white text-sm font-mono">{pr.number}</span>
                            </div>
                          </div>
                        )}
                        <div className="p-4">
                          <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">{pr.title}</h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{pr.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Other PRs Toggle */}
                  {otherPrs.length > 0 && (
                    <div className="space-y-4">
                      <motion.div
                        initial={false}
                        animate={{ height: showAllPrs ? 'auto' : 0, opacity: showAllPrs ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-2">
                          {otherPrs.map((pr, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded border border-slate-100 dark:border-slate-700">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-mono text-primary">{pr.number}</span>
                                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{pr.title}</span>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400">{pr.impact}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <button
                        onClick={() => setShowAllPrs(!showAllPrs)}
                        className="w-full py-2 flex items-center justify-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <span>{showAllPrs ? 'Show Less' : `View ${otherPrs.length} More PRs`}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${showAllPrs ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {contribution.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-50 dark:bg-primary/20 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium border border-teal-200 dark:border-teal-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Achievements Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Achievements</span>
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-xl shadow-lg mb-6 border border-teal-100 dark:border-teal-900"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: (openSourceContributions.length + index) * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center">
                      <FaTrophy className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-primary font-semibold mb-2">{achievement.team} • {achievement.year}</p>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{achievement.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to full portfolio */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href={personalInfo.social.opensource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaGithub className="mr-2" />
              View Full Open Source Portfolio
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

