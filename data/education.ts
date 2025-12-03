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
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Polaris School of Technology (Starex University)',
    duration: '2023 - 2027',
    location: 'Gurugram, Haryana',
    gpa: '8.62 CGPA',
    courses: [
      'Machine Learning',
      'Statistical Analysis',
      'Data Structures & Algorithms',
      'Database Management',
      'Web Development',
      'Software Engineering',
    ],
  },
]

