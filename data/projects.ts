export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  highlights?: string[]
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Tech Stream Community',
    description: 'Real-time chat application with live monitoring dashboard, WebSocket scaling, and rate-limiting capabilities. Handles 500+ concurrent connections with < 100ms latency and 99.9% uptime.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'AWS', 'Chart.js', 'Redis'],
    github: 'https://github.com/rishavtarway',
    demo: 'https://techi-spott.vercel.app/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
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
    github: 'https://github.com/rishavtarway/Student-Database-System',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    highlights: [
      '60% query performance boost via HashMap + SQL indexing',
      'Dockerized deployment pipeline with clean architecture',
      'Zero-downtime updates implementation',
      'Optimized database queries and data structures',
    ],
  },
]

