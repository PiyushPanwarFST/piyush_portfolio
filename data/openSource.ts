export interface OpenSourceContribution {
  project: string
  description: string
  prs: {
    number: string
    title: string
    impact: string
  }[]
  technologies: string[]
  link?: string
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'Stdlib.js',
    description: 'Enhanced core JavaScript utilities library used by 1M+ monthly users. Improved type safety and performance across multiple utility functions.',
    prs: [
      {
        number: 'PR #5313',
        title: 'Enhanced type safety in utility functions',
        impact: 'Improved reliability for 1M+ monthly users',
      },
      {
        number: 'PR #2',
        title: 'Performance optimization in core utilities',
        impact: 'Reduced execution time by 15%',
      },
      {
        number: 'PR #3',
        title: 'Additional utility enhancements',
        impact: 'Better developer experience',
      },
    ],
    technologies: ['JavaScript', 'TypeScript', 'Node.js'],
    link: 'https://github.com/stdlib-js/stdlib/pull/5313',
  },
  {
    project: 'OpenPrinting',
    description: 'Fixed CUPS driver bugs enabling seamless printing on Linux for enterprise users. Contributed to improving cross-platform printing capabilities.',
    prs: [
      {
        number: 'PR #8',
        title: 'Fixed CUPS driver compatibility issues',
        impact: 'Enabled seamless printing on Linux for enterprise users',
      },
      {
        number: 'PR #2',
        title: 'Improved driver error handling',
        impact: 'Better error reporting and debugging',
      },
    ],
    technologies: ['C', 'Linux', 'CUPS', 'System Programming'],
    link: 'https://github.com/OpenPrinting/pyppd/pull/8',
  },
]

export const achievements = [
  {
    title: '1st Runner-Up - Hack With Uttarakhand',
    team: 'Team Code Heist',
    description: 'Led a 36-hour offline hackathon team building an AI-powered resume generator with GPT integration. Demonstrated leadership, technical skills, and ability to work under pressure.',
    technologies: ['AI', 'GPT', 'React', 'Node.js'],
    year: '2024',
  },
]

