import { loadFilesData } from '@/utils/markdown.ts'

export type Project = {
  id: string
  title: string
  cover: string
  year: string | number
  publication: string
  html: string
}

function loadProjects(): Array<Project> {
  const modules: Record<string, string> = import.meta.glob('../content/projects/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  })

  const projectData = loadFilesData(modules, { title: '??', year: '??', publication: '??', cover: '??' })
  return projectData.map((project) => ({
    id: project.id,
    html: project.html,
    ...project.metadata
  }))
}

export const projects = loadProjects().reverse()
