export interface Experience {
  position: string
  company: string
  duration: string
  location: string
  responsibilities: string[]
  technologies?: string[]
  prs?: { number: string; description: string }[]
}

export const experience: Experience[] = [
  {
    position: 'Research SWE Intern',
    company: 'IIIT Bangalore - MOSIP',
    duration: 'Jul 2025 - Oct 2025',
    location: 'Remote | Open Source',
    responsibilities: [
      'Built Selenium + Java + Cucumber BDD test suites for government identity systems',
      'Automated multilingual navigation & eSignet IDP verification',
      'Prevented auto-logout during background sync operations',
    ],
    technologies: ['Java', 'Selenium', 'Cucumber', 'BDD', 'Test Automation'],
    prs: [
      { number: '#1370', description: 'Automated multilingual navigation & eSignet IDP verification' },
      { number: '#543', description: 'Prevented auto-logout during background sync' },
    ],
  },
  {
    position: 'Software Engineer Intern',
    company: 'ClassPlus',
    duration: 'Nov 2024 - Jan 2025',
    location: 'Noida',
    responsibilities: [
      'Improved monitoring by 40% via unique request IDs and Express.js middleware',
      'Enhanced error tracking in async-local-storage for better debugging',
      'Cut response time by 25% for 10k+ concurrent users through optimization',
    ],
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'Monitoring', 'Performance Optimization'],
  },
  {
    position: 'Full Stack Developer Intern',
    company: 'TechVastra',
    duration: 'Sep 2024 - Nov 2024',
    location: 'Remote',
    responsibilities: [
      'Built responsive Next.js + TypeScript app integrated with Android platform',
      'Enhanced performance by 30% via React Hooks optimization',
      'Designed RESTful APIs for 10k+ user data synchronization',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'REST APIs', 'Android Integration'],
  },
  {
    position: 'QA Automation Intern',
    company: 'Testbook',
    duration: 'Sep 2024 - Nov 2024',
    location: 'Noida',
    responsibilities: [
      'Built Selenium + ChromeDriver framework achieving 50% faster test execution',
      'Developed test cases uncovering 30+ critical bugs in production',
      'Automated repetitive testing processes, enhancing scalability and accuracy',
      'Reduced regression testing time significantly through automation',
    ],
    technologies: ['Selenium', 'Java', 'ChromeDriver', 'Test Automation', 'QA'],
  },
  {
    position: 'Frontend Developer Intern',
    company: 'Franchizerz',
    duration: 'Jul 2024 - Dec 2024',
    location: 'Remote',
    responsibilities: [
      'Designed Franchizerz.com UI with React + Next.js + REST APIs',
      'Applied HTML5/CSS3/JS + OOP principles for scalable code architecture',
      'Boosted Lighthouse score from 68 to 92 via code-splitting & lazy loading',
    ],
    technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Performance Optimization'],
  },
]

