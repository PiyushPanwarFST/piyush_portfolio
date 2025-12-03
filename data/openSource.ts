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
    project: 'ArviZ - Bayesian Analysis Library',
    description: 'Leading contributor to ArviZ, a Python library for exploratory analysis of Bayesian models. Spearheaded core computational features, architectural refactoring, and improved test coverage for statistical functions used by thousands of researchers worldwide.',
    prs: [
      {
        number: 'bayes_factor()',
        title: 'Implemented Bayesian Model Comparison feature',
        impact: 'Core computational feature for advanced statistical analysis',
      },
      {
        number: 'plot_ppc_intervals()',
        title: 'Developed posterior predictive check visualization',
        impact: 'Enhanced model validation capabilities for users',
      },
      {
        number: 'Refactoring',
        title: 'Led architectural refactoring of plotting modules',
        impact: 'Improved modularity, scalability, and code maintainability',
      },
      {
        number: 'Testing',
        title: 'Extended Pytest coverage with TDD approach',
        impact: 'Significantly improved code stability and reliability',
      },
      {
        number: 'KDE Logic',
        title: 'Refactored core statistical logic',
        impact: 'Enhanced performance and adherence to open-source standards',
      },
    ],
    technologies: ['Python', 'Bayesian Statistics', 'ArviZ', 'Pytest', 'Statistical Computing', 'Data Visualization'],
    link: 'https://www.notion.so/Open-Source-Contributions-Piyush-Panwar-1f6300c37fe680dd8c7ce6af712e95ae',
  },
]

export const achievements = [
  {
    title: 'First Runner-Up - Hack With Uttarakhand',
    team: 'Team Code Heist',
    description: 'Led a 36-hour offline hackathon with innovative problem solving and teamwork. Demonstrated strong technical skills, leadership abilities, and capacity to deliver under pressure.',
    technologies: ['Problem Solving', 'Team Leadership', 'Innovation'],
    year: '2024',
  },
  {
    title: 'Open Source Contributor',
    team: 'HacktoberFest & GirlScript',
    description: 'Active participant in major open-source initiatives including HacktoberFest and GirlScript. Contributed to enhancing real-world software development skills and giving back to the developer community.',
    technologies: ['Open Source', 'Community Engagement', 'Software Development'],
    year: '2024',
  },
]

