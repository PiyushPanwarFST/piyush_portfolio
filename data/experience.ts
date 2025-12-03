export interface Experience {
  position: string
  company: string
  duration: string
  location: string
  responsibilities: string[]
  technologies?: string[]
  prs?: { number: string; description: string }[]
  link?: string
}

export const experience: Experience[] = [
  {
    position: 'Research Intern',
    company: 'Statistical Modeling (Academic)',
    duration: 'Oct 2025 - Present',
    location: 'Remote/Academic',
    responsibilities: [
      'Pioneered Monte Carlo simulation study to estimate Stress-Strength Reliability (SSR) for Xgamma-Exponential (Xg-E) distribution',
      'Implemented advanced MLE techniques under GPHC and debugged fundamental error in core mathematical expression for SSR',
      'Optimized simulation framework using Python and Numba (JIT), achieving high precision across 10,000 replications',
      'Analyzed simulation outputs using Matplotlib and Pandas to visualize reliability trends, validating theoretical models against empirical data',
    ],
    technologies: ['Python', 'Numba/JIT', 'Monte Carlo Simulation', 'MLE', 'Matplotlib', 'Pandas', 'Statistical Analysis'],
    link: 'https://www.notion.so/Project-Stress-Strength-Reliability-Estimation-Xg-E-Distribution-22d300c37fe680409883db75cfef998f',
  },
  {
    position: 'AI/ML Intern',
    company: 'Detoxio AI',
    duration: 'June 2025 - Sept 2025',
    location: 'Remote',
    responsibilities: [
      'Developed AI agent configurations for model testing, enhancing the efficiency of red teaming processes',
      'Conducted extensive testing on models from Ollama and Hugging Face, focusing on advanced learning techniques such as Jailbreaking and adversarial attacks',
      'Automated testing procedures using NOX, significantly reducing manual effort and increasing testing throughput by 40%',
    ],
    technologies: ['Python', 'Hugging Face', 'Ollama', 'NOX', 'AI Testing', 'Red Teaming', 'Model Validation'],
    link: 'https://detoxio.ai/',
  },
  {
    position: 'Open Source Contributor (ArviZ)',
    company: 'ArviZ - Bayesian Analysis Library',
    duration: 'Jan 2024 - Present',
    location: 'Remote',
    responsibilities: [
      'Spearheaded core computational features including bayes_factor() and plot_ppc_intervals() for advanced Bayesian Model Comparison',
      'Led architectural refactoring initiatives, migrating plotting modules for improved modularity, scalability, and clean separation of concerns',
      'Reinforced test reliability and code stability by extending Pytest coverage and implementing Test-Driven Development (TDD)',
      'Enhanced user accessibility across visualization backends and ensured code quality through refactoring of core statistical logic (KDE)',
    ],
    technologies: ['Python', 'Bayesian Analysis', 'ArviZ', 'Pytest', 'TDD', 'Statistical Computing', 'Data Visualization'],
    prs: [
      { number: '8+ PRs', description: 'View detailed portfolio of merged contributions' },
    ],
    link: 'https://github.com/arviz-devs/arviz',
  },
]

