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
    position: 'AI/ML Intern',
    company: 'Detoxio AI',
    duration: 'June 2025 - Sept 2025',
    location: 'Remote',
    responsibilities: [
      'Developed AI agent configurations to test models and improve the efficiency of the **red teaming** process.',
      'Tested models from **Ollama** and **Hugging Face** to identify vulnerabilities like **Jailbreaking** and adversarial attacks.',
      'Automated testing workflows using **NOX**, which reduced manual work and increased testing speed by 40%.',
    ],
    technologies: ['Python', 'Hugging Face', 'Ollama', 'NOX', 'AI Testing', 'Red Teaming', 'Model Validation'],
    link: 'https://detoxio.ai/',
  },
  {
    position: 'Research Intern',
    company: 'Statistical Modeling (Academic)',
    duration: 'Oct 2025 - Present',
    location: 'Remote/Academic',
    responsibilities: [
      'Conducted a Monte Carlo simulation study to estimate **Stress-Strength Reliability** (SSR) for the **Xgamma-Exponential** (Xg-E) distribution.',
      'Implemented advanced **MLE** techniques under **GPHC** and **Debugged** a fundamental error in the core mathematical expression for SSR.',
      'Used **Parallel processing and Numba (JIT)** to speed up the simulation, running 10,000 replications efficiently with high precision.',
      'Analyzed simulation outputs using Matplotlib and Pandas to compare the theoretical models against the simulation data.',
    ],
    technologies: ['Python', 'Numba/JIT', 'Monte Carlo Simulation', 'MLE', 'Matplotlib', 'Pandas', 'Statistical Analysis'],
    link: 'https://www.notion.so/Project-Stress-Strength-Reliability-Estimation-Xg-E-Distribution-22d300c37fe680409883db75cfef998f',
  },
  {
    position: 'Open Source Contributor (ArviZ)',
    company: 'ArviZ - Bayesian Analysis Library',
    duration: 'Jan 2024 - Present',
    location: 'Remote',
    responsibilities: [
      'Implemented computational features, including `bayes_factor()` and `plot_ppc_intervals()` for advanced **Bayesian Model Comparison** and validation.',
      'Refactored plotting modules to improve code organization and separate logic from visualization, making the codebase easier to maintain.',
      '**Wrote unit tests** using Pytest and followed Test-Driven Development (TDD) principles to fix bugs and improve test coverage for statistical functions.',
      '**Updated** core statistical logic (like KDE) to meet open-source coding standards and improve consistency across different visualization backends.',
    ],
    technologies: ['Python', 'Bayesian Analysis', 'ArviZ', 'Pytest', 'TDD', 'Statistical Computing', 'Data Visualization'],
    prs: [
      { number: '8+ PRs', description: 'View detailed portfolio of merged contributions' },
    ],
    link: 'https://github.com/arviz-devs/arviz',
  },
]

