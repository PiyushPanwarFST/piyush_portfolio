# Data Update Guide

This guide will help you update your portfolio with your actual information from your resume and LinkedIn profile.

## Files to Update

### 1. `/data/personalInfo.ts`
Update the following fields with your information:
- `name`: Your full name (already set to "Rishav Tarway")
- `title`: Your professional title/role
- `bio`: A short one-liner about yourself
- `about`: A detailed paragraph about your background and interests
- `location`: Your current location (city, country)
- `email`: Your professional email address
- `phone`: Your contact number
- `resume`: Path to your resume PDF (place PDF in `/public` folder)
- `social.github`: Your GitHub profile URL
- `social.linkedin`: Already set to your LinkedIn (https://www.linkedin.com/in/rishav-tarway-fst/)
- `quickFacts`: Array of interesting facts about you

### 2. `/data/experience.ts`
Add all your work experience entries. Each entry should include:
- `position`: Job title
- `company`: Company name
- `duration`: Employment period (e.g., "Jan 2023 - Present")
- `location`: Work location
- `responsibilities`: Array of key responsibilities and achievements
- `technologies`: Array of technologies used (optional)

Example:
```typescript
{
  position: 'Software Engineer',
  company: 'Tech Company Inc.',
  duration: 'Jan 2023 - Present',
  location: 'San Francisco, CA',
  responsibilities: [
    'Developed and maintained web applications',
    'Led a team of 3 developers',
    'Improved application performance by 40%',
  ],
  technologies: ['React', 'Node.js', 'TypeScript'],
}
```

### 3. `/data/projects.ts`
Add your projects. Each project should include:
- `name`: Project name
- `description`: Brief description of the project
- `technologies`: Array of technologies used
- `github`: GitHub repository URL (optional)
- `demo`: Live demo URL (optional)

### 4. `/data/education.ts`
Add your educational background. Each entry should include:
- `degree`: Degree name
- `institution`: University/College name
- `duration`: Study period (e.g., "2020 - 2024")
- `gpa`: Your GPA (optional)
- `courses`: Array of relevant courses (optional)

### 5. `/data/skills.ts`
Update the skills object with your actual skills, organized by category:
- Frontend
- Backend
- Databases
- Tools & Technologies

Add or remove categories as needed.

## Steps to Update

1. **Get your resume ready**: Have your resume PDF ready to place in the `/public` folder
2. **Review your LinkedIn**: Check your LinkedIn profile for accurate information
3. **Update each data file**: Go through each file in `/data/` and update with your information
4. **Test locally**: Run `npm run dev` to see your changes
5. **Add resume PDF**: Place your resume PDF in the `/public` folder and name it `resume.pdf`

## Quick Start

1. Open `/data/personalInfo.ts` and update your contact information
2. Open `/data/experience.ts` and add your work experience
3. Open `/data/projects.ts` and add your projects
4. Open `/data/education.ts` and add your education
5. Open `/data/skills.ts` and update your skills
6. Place your resume PDF in `/public/resume.pdf`

After updating, your portfolio will be ready to deploy!

