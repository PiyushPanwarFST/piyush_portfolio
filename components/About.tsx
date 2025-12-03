"use client";

import { personalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-gray-900 dark:text-gray-100">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
            {personalInfo.about}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-teal-100 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Personal Information
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="font-semibold w-20">Location:</span>
                  <span>{personalInfo.location}</span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold w-20">Email:</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold w-20">Phone:</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-primary hover:underline"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-cyan-100 dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {personalInfo.quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
