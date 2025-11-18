export interface Education {
  degree: string
  institution: string
  duration: string
  location: string
  gpa?: string
  percentage?: string
  courses?: string[]
}

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering - Artificial Intelligence & Machine Learning',
    institution: 'Polaris School of Tech (StarEx University)',
    duration: '2023 - Pursuing',
    location: 'Gurugram',
    gpa: '8.85 CGPA',
    courses: [
      'ML Essentials',
      'Deep Learning',
      'Networks',
      'System Design (MERN)',
      'Logic',
      'Multiple Languages',
    ],
  },
  {
    degree: 'Higher Secondary',
    institution: 'DAV CANTT',
    duration: '2022',
    location: 'Gaya',
    percentage: '75%',
  },
  {
    degree: 'Secondary',
    institution: 'DAV CRRC',
    duration: '2020',
    location: 'Gaya',
    percentage: '80%',
  },
]

