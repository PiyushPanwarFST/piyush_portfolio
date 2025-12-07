'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 dark:bg-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary dark:text-white">
                            {personalInfo.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                            Building intelligent systems and scalable applications. Focused on AI/ML, Statistical Modeling, and Open Source.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors text-xl"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors text-xl"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors text-xl"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            {personalInfo.location}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        &copy; {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                        Designed & Built with Next.js & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    )
}
