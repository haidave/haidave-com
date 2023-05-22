export const resourcesCategories = ['All', 'People', 'Learning']

type Resource = {
  id: string
  name: string
  description: string
  url: string
  category: string
}

export const resources: Resource[] = [
  {
    id: '1',
    name: 'Rauno Freiberg',
    description: 'Design Engineer at Vercel.',
    url: 'https://rauno.me/',
    category: 'People',
  },
  {
    id: '2',
    name: 'Emil Kowalski',
    description: 'Design Engineer at Vercel.',
    url: 'https://emilkowal.ski//',
    category: 'People',
  },
  {
    id: '3',
    name: 'Josh W Comeau',
    description: 'Software Engineer at Khan Academy.',
    url: 'https://www.joshwcomeau.com/',
    category: 'People',
  },
  {
    id: '4',
    name: 'Lee Robinson',
    description: 'Developer Advocate at Vercel.',
    url: 'https://leerob.io/',
    category: 'People',
  },
  {
    id: '5',
    name: 'Delba de Oliveira',
    description: 'Developer Experience at Vercel.',
    url: 'https://delba.dev',
    category: 'People',
  },
  {
    id: '6',
    name: 'Build UI',
    description: 'Learn how to build modern user interfaces for the web.',
    url: 'https://buildui.com/',
    category: 'Learning',
  },
]
