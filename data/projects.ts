export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    name: 'Tech Stream Community',
    description: 'Real-time chat application with live monitoring dashboard, WebSocket scaling, and rate-limiting capabilities. Handles 500+ concurrent connections with < 100ms latency and 99.9% uptime.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'AWS', 'Chart.js', 'Redis'],
    github: 'https://github.com/yourusername/tech-stream',
    demo: 'https://tech-stream-demo.com',
    highlights: [
      '500+ active users with 99.9% uptime',
      'Real-time analytics dashboard with Chart.js + Redis',
      'WebSocket scaling and rate-limiting implementation',
      'Handles 500+ concurrent connections with < 100ms latency',
    ],
  },
  {
    name: 'Scholar Track App',
    description: 'Java + SQL console application with optimized query performance. Features Dockerized deployment pipeline with clean architecture, ensuring zero-downtime updates.',
    technologies: ['Java', 'SQL', 'Docker', 'CI/CD', 'HashMap', 'OOP'],
    github: 'https://github.com/yourusername/scholar-track',
    highlights: [
      '60% query performance boost via HashMap + SQL indexing',
      'Dockerized deployment pipeline with clean architecture',
      'Zero-downtime updates implementation',
      'Optimized database queries and data structures',
    ],
  },
]

