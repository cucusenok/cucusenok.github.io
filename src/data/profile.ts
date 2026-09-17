import resume from './resume.json'
import photo from '../assets/profile.jpg'

/** Site-level facts that are not part of the JSON Resume schema. */
export const profile = {
  name: resume.basics.name,
  handle: 'cucusenok',
  label: resume.basics.label,
  email: resume.basics.email,
  photo,
  cvUrl: '/cucusenok_cv.pdf',
  status: 'Backend Team Lead @ Banank · building nextdocs.ai',
  intro:
    'Senior software engineer and team lead. I design event-driven backends, real-time collaboration and AI-native products — and lead the teams that ship them.',
  location: 'Open to remote',
  facts: [
    { value: '9', suffix: '+', label: 'years in industry' },
    { value: '100M', suffix: '+', label: 'users served' },
    { value: '40', suffix: '+', label: 'engineers led' },
  ],
  keywords: ['Go', 'Python', 'TypeScript', 'NATS', 'Kubernetes', 'LLM · RAG', 'MCP'],
  links: {
    github: 'https://github.com/cucusenok',
    linkedin: 'https://www.linkedin.com/in/cucusenok/',
    telegram: 'https://t.me/cucusenok',
    instagram: 'https://www.instagram.com/cucusenok',
    medium: 'https://medium.com/@cucusenok',
  },
}

export const work = resume.work
